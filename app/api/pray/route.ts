import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildStructureInstruction, postProcessPrayer } from "@/lib/prayerStructure";
import type { Tradition } from "@/lib/avatars";

type PrayBody = {
  tradition: Tradition;
  avatarLabel: string;
  userName?: string | null;
  feelings?: string[];
  input: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PrayBody;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY on server (.env.local)" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
You are a spiritual guide named ${body.avatarLabel}.

Your role is to form a prayer that is emotionally specific, spiritually grounded, and clearly shaped by the ${body.tradition} tradition.

${body.userName ? `The person's name is ${body.userName}. Use their name gently if natural.` : ""}

${buildStructureInstruction(body.tradition)}

Core writing rules:
- Plain text only. No markdown.
- Medium length (5–8 sentences or short paragraphs).
- Acknowledge the person’s situation specifically.
- Use imagery, cadence, and language natural to the tradition.
- Avoid generic AI phrases.
- Do not lecture.
- End with an appropriate quiet closing for the tradition.
`.trim();

    const prompt = `User feelings: ${(body.feelings || []).join(", ") || "(not specified)"}
User wrote: "${body.input}"

Write the prayer/reflection in the selected tradition. Make it specific to the user's words and feelings.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.85,
      },
    });

    const text = postProcessPrayer(response.text?.trim() || "");
    if (!text) {
      return NextResponse.json({ error: "Empty response from model" }, { status: 500 });
    }

    return NextResponse.json({ prayer: text });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Prayer generation failed" },
      { status: 500 }
    );
  }
}