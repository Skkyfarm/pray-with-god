import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildStructureInstruction, postProcessPrayer } from "@/lib/prayerStructure";
import type { Tradition } from "@/lib/avatars";

export const runtime = "nodejs"; // ensures server runtime

type PrayBody = {
  tradition: Tradition;
  avatarLabel?: string;
  userName?: string | null;
  feelings?: string[];
  input?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PrayBody;

    const tradition = body.tradition || "grace";
    const avatarLabel = body.avatarLabel || "Grace";
    const userName = body.userName || null;
    const feelings = Array.isArray(body.feelings) ? body.feelings : [];
    const input = String(body.input || "").trim();

    if (!input && feelings.length === 0) {
      return NextResponse.json(
        { error: "Missing prayer input." },
        { status: 400 }
      );
    }

    // ✅ SERVER-ONLY KEY (never use NEXT_PUBLIC here)
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY (server environment variable)." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
You are a spiritual guide named ${avatarLabel}.

Write a prayer or reflection clearly shaped by the ${tradition} tradition.

${userName ? `The person's name is ${userName}. Use their name gently if natural.` : ""}

MANDATORY STRUCTURE:
${buildStructureInstruction(tradition)}

ABSOLUTE RULES:
- Plain text only.
- 6–10 sentences.
- Use at least one exact phrase from the user's message.
- Do not use generic openers like:
  "Divine Presence"
  "We come before you"
  "In this sacred moment"
- Avoid template-like phrasing.
- Follow the tradition structure exactly.
`.trim();

    const prompt = `
User feelings: ${feelings.join(", ") || "(not specified)"}

User wrote:
"${input}"

Write the prayer now.
`.trim();

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.85,
      },
    });

    let text = postProcessPrayer(response.text?.trim() || "");

    // Extra guardrail cleanup
    text = text.replace(/^Divine Presence,?\s*/i, "");
    text = text.replace(/^We come before you,?\s*/i, "");

    if (!text) {
      return NextResponse.json(
        { error: "Empty response from model." },
        { status: 500 }
      );
    }

    return NextResponse.json({ prayer: text });

  } catch (err: any) {
    console.error("API /api/pray error:", err);
    return NextResponse.json(
      { error: err?.message || "Prayer generation failed." },
      { status: 500 }
    );
  }
}