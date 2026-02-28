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

Your role is to form a prayer (or reflection, where appropriate) that is emotionally specific, spiritually grounded, and clearly shaped by the ${body.tradition} tradition.

${body.userName ? `The person's name is ${body.userName}. Use their name gently if natural.` : ""}

STRUCTURE REQUIREMENTS (MANDATORY):
${buildStructureInstruction(body.tradition)}

STRICT TRADITION VOICE (MANDATORY — do NOT mix traditions):
- Use ONLY language appropriate to the selected tradition.
- Do NOT borrow phrasing, theology, or closings from other traditions.

TRADITION-SPECIFIC BANS / REQUIREMENTS:
- buddhist:
  - This must be NON-THEISTIC.
  - Do NOT address God, a deity, or "Divine Presence".
  - Avoid: "Lord", "Heavenly Father", "God", "Divine Presence", "through Christ", "Amen".
  - Prefer: breath/awareness, compassion, impermanence, easing suffering, release/letting go.
  - Closing should be peaceful and non-theistic (e.g., "May you be at peace.").

- hindu:
  - May use poetic devotion and inner transformation language.
  - Avoid Abrahamic closings ("Amen", "through Christ").
  - Closing: "Namaste" or "Om Shanti" tone.

- jewish:
  - Use reflective naming (Eternal One / Source of Peace) and continuity/wisdom framing.
  - Avoid Christian/Muslim phrasing.
  - Closing: "Shalom."

- muslim:
  - Use mercy attributes (Most Merciful / Most Compassionate) and trust/submission framing.
  - Avoid Christian/Jewish closings.
  - Closing should carry peace tone.

- catholic:
  - Reverent petition, surrender to God’s will, traditional cadence.
  - Closing: "Amen."

- protestant:
  - Conversational pastoral address to God, scripture-flavored encouragement (no long quotes).
  - Closing: "Amen."

- grace:
  - Universal, gentle, inclusive, minimal religious jargon.
  - Closing: "Peace."

CORE WRITING RULES:
- Output plain text only (no markdown, no bullets).
- Medium length (5–8 sentences OR 3–6 short paragraphs).
- Reference the person's actual words (be specific).
- Use at most ONE vivid image total (do not get flowery everywhere).
- Avoid generic AI phrases ("I understand you are feeling...", "Here is a prayer for you...").
- Do not lecture, do not promise guaranteed outcomes.
- End with the tradition-appropriate closing.

The result must feel human, calm, and distinct for the chosen tradition.
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