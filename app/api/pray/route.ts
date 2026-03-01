import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildStructureInstruction, postProcessPrayer } from "@/lib/prayerStructure";
import type { Tradition } from "@/lib/avatars";

type PrayBody = {
  tradition: Tradition;
  avatarLabel?: string;
  userName?: string | null;
  feelings?: string[];
  input?: string;
};

function traditionGuards(tradition: Tradition) {
  // Strong “don’t do” rules that create real separation between traditions.
  switch (tradition) {
    case "buddhist":
      return `
BUDDHIST HARD RULES:
- Do NOT address God, Lord, Heavenly Father, Divine Presence, Hashem, Allah, or any deity.
- Do NOT use "Amen", "Shalom", "In Jesus' name", or similar religious closings.
- Start with present-moment awareness (breath, body, this moment).
- Language should be calm, grounded, non-theistic, compassionate.
- Closing should be: "May you be at peace." or "Peace, peace, peace."`;
    case "hindu":
      return `
HINDU HARD RULES:
- Prefer imagery (light, dawn, river, inner flame) but keep it specific (one vivid image max).
- It can be devotional, but avoid Christian/Jewish/Islamic phrasing (no "Heavenly Father", no "Amen", no "Shalom").
- Closing: "Namaste." or "Om Shanti."`;
    case "muslim":
      return `
MUSLIM HARD RULES:
- You may use "Allah", "Most Merciful", "Most Compassionate".
- Avoid Christian phrasing ("Through Christ", "Heavenly Father").
- Closing should be peace-toned (e.g., "Ameen." or "Peace be with you.")`;
    case "jewish":
      return `
JEWISH HARD RULES:
- Prefer "Eternal One" / "Source of Peace" / "Holy One" / "Hashem" (tasteful, not excessive).
- Avoid Christian closings and "Amen" is okay but do NOT sound Christian.
- Close with "Shalom."`;
    case "catholic":
      return `
CATHOLIC HARD RULES:
- Reverent address (Lord / Heavenly Father).
- You may include a gentle saint-like cadence, but do NOT quote long scripture.
- Closing: "Amen." (or "Through Christ our Lord. Amen.")`;
    case "protestant":
      return `
PROTESTANT HARD RULES:
- Conversational pastoral address to God.
- Scripture-flavored language is fine, but avoid long direct quotes.
- Closing: "Amen."`;
    case "grace":
    case "quiet":
    default:
      return `
UNIVERSAL HARD RULES:
- Inclusive language, non-judgmental, emotionally specific.
- Avoid denominational markers unless tradition requires them.
- Close softly (e.g., "Peace.")`;
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PrayBody;

    const tradition = (body.tradition || "grace") as Tradition;
    const avatarLabel = body.avatarLabel || "Grace";
    const userName = body.userName || null;
    const feelings = Array.isArray(body.feelings) ? body.feelings : [];
    const input = String(body.input || "").trim();

    if (!input && feelings.length === 0) {
      return NextResponse.json(
        { error: "Missing input (or feelings)." },
        { status: 400 }
      );
    }

    // IMPORTANT:
    // Prefer a SERVER-ONLY key: GEMINI_API_KEY (do NOT commit .env.local)
    const apiKey =
      process.env.GEMINI_API_KEY ||
      "";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY (or NEXT_PUBLIC_GEMINI_API_KEY)." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
You are a spiritual guide named ${avatarLabel}.

Your role: write a prayer or reflection that is emotionally specific and distinctly shaped by the ${tradition} tradition.

${userName ? `The person's name is ${userName}. Use their name gently only if natural.` : ""}

MANDATORY TRADITION STRUCTURE:
${buildStructureInstruction(tradition)}

${traditionGuards(tradition)}

OUTPUT RULES (MANDATORY):
- Plain text only. No markdown. No bullets.
- 6–10 sentences max. (Not short. Not rambly.)
- You MUST include at least ONE short exact phrase (3–10 words) copied from the user's message verbatim.
- Be specific to what they wrote (no generic filler).
- Avoid these phrases completely: "Divine Presence", "I understand you are feeling", "Here is a prayer for you".
- End with the correct tradition closing (per rules above).
`.trim();

    const prompt = `
User feelings: ${feelings.join(", ") || "(not specified)"}
User message:
"${input}"

Write the prayer/reflection now.
`.trim();

    // Use a model name that Google shows in current examples.
    // (This avoids the "gemini-2.0-flash no longer available to new users" error.)
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.85,
      },
    });

    const text = postProcessPrayer(response.text?.trim() || "");
    if (!text) {
      return NextResponse.json(
        { error: "Empty response from model" },
        { status: 500 }
      );
    }

    return NextResponse.json({ prayer: text });
  } catch (err: any) {
    console.error("API /api/pray error:", err);
    return NextResponse.json(
      { error: err?.message || "Prayer generation failed" },
      { status: 500 }
    );
  }
}