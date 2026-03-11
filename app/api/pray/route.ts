import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildStructureInstruction, postProcessPrayer } from "@/lib/prayerStructure";
import type { Tradition } from "@/lib/avatars";

export const runtime = "nodejs"; // ensures server runtime (needed for @google/genai)

type PrayMode = "free" | "classic";
type PrayerKind = "type" | "named";
type DayPart = "morning" | "afternoon" | "evening" | "night";

type PrayBody = {
  tradition: Tradition;

  // shared
  mode?: PrayMode;
  avatarLabel?: string;
  userName?: string | null;

  // free mode
  feelings?: string[];
  input?: string;
  prayerType?: string; // from pray/page.tsx selector

  // classic mode
  selectedPrayerLabel?: string; // e.g., "The Prayer of St. Francis" or "Shacharit"
  selectedPrayerKind?: PrayerKind; // "type" | "named"
  intention?: string; // optional personalization

  // optional time awareness from client
  timezone?: string | null;
  localDateTime?: string | null;
  dayPart?: DayPart | null;
};

// Pull a short exact phrase from the user's message to enforce specificity.
// We keep it simple & safe: pick up to 10 words from the start of the message.
function pickExactPhrase(input: string) {
  const cleaned = String(input || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";

  const words = cleaned.split(" ");
  const slice = words.slice(0, Math.min(words.length, 10));
  let phrase = slice.join(" ").trim();

  phrase = phrase.replace(/[,\s]+$/g, "");
  return phrase;
}

// Remove common generic openers if the model slips.
// Also trims leading quotes/spaces.
function stripGenericOpeners(text: string) {
  let out = text.trim();

  out = out.replace(/^["'\s]+/, "");

  const patterns: RegExp[] = [
    /^Divine Presence,?\s*/i,
    /^Beloved,?\s*/i,
    /^In this sacred moment,?\s*/i,
    /^We come before you,?\s*/i,
    /^We gather,?\s*/i,
  ];

  for (const p of patterns) {
    out = out.replace(p, "");
  }

  return out.trim();
}

function normalizeMode(mode?: string): PrayMode {
  return mode === "classic" ? "classic" : "free";
}

function normalizeKind(kind?: string): PrayerKind {
  return kind === "named" ? "named" : "type";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as PrayBody;

    const timezone =
      typeof body?.timezone === "string" && body.timezone.trim()
        ? body.timezone.trim()
        : null;

    const localDateTime =
      typeof body?.localDateTime === "string" && body.localDateTime.trim()
        ? body.localDateTime.trim()
        : null;

    const dayPart: DayPart | null =
      body?.dayPart === "morning" ||
      body?.dayPart === "afternoon" ||
      body?.dayPart === "evening" ||
      body?.dayPart === "night"
        ? body.dayPart
        : null;

    const tradition = (body?.tradition || "grace") as Tradition;
    const mode = normalizeMode(body?.mode);
    const avatarLabel = body?.avatarLabel || "Grace";
    const userName = body?.userName ?? null;

    // free mode fields
    const feelings = Array.isArray(body?.feelings) ? body.feelings : [];
    const input = String(body?.input || "").trim();
    const prayerType = String(body?.prayerType || "").trim();

    // classic mode fields
    const selectedPrayerLabel = String(body?.selectedPrayerLabel || "").trim();
    const selectedPrayerKind = normalizeKind(body?.selectedPrayerKind);
    const intention = String(body?.intention || "").trim();

    // Validation
    if (mode === "free") {
      if (!input && feelings.length === 0) {
        return NextResponse.json({ error: "Missing prayer input." }, { status: 400 });
      }
    } else {
      if (!selectedPrayerLabel) {
        return NextResponse.json(
          { error: "Missing selectedPrayerLabel for classic prayer." },
          { status: 400 }
        );
      }
    }

    const timeInstruction =
      timezone && localDateTime && dayPart
        ? `
TIME AWARENESS:
- The user's local timezone is ${timezone}.
- The user's local date and time is ${localDateTime}.
- It is currently ${dayPart} for the user.
- Any greeting, blessing, or reference to time of day must match the user's local time.
- Do not mention tomorrow, tonight, this evening, good night, or good morning unless it truly matches the user's local time.
- If time of day is not necessary, avoid mentioning it.
`.trim()
        : `
TIME AWARENESS:
- Reliable local time data was not provided.
- Do not guess the user's time of day.
- Avoid references to morning, afternoon, evening, night, tonight, tomorrow, or greetings like "good morning" and "good night".
- Keep the prayer time-neutral unless the user explicitly asked for a time-based reference.
`.trim();

    // ✅ SERVER-ONLY KEY
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY (server environment variable)." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const baseSystem = `
You are ${avatarLabel}, speaking within the ${tradition} tradition.

Your task is to write a prayer that feels emotionally specific, spiritually authentic, and distinctly shaped by this tradition — not generic spirituality.

${userName ? `The person's name is ${userName}. Use their name naturally, not artificially.` : ""}

${timeInstruction}

MANDATORY STRUCTURE:
${buildStructureInstruction(tradition)}

DEPTH REQUIREMENTS:
- Use at least one concrete image (physical or situational).
- Use language weight appropriate to the tradition (see structure/style limits).
- Avoid vague spiritual abstractions.
- Avoid filler phrases.
- Avoid repetition of common AI constructions.

ANTI-GENERIC ENFORCEMENT:
- Never open with: "Divine Presence", "Beloved", "In this sacred moment", "We come before you".
- Do not sound like a template.
- Do not sound like generic mindfulness.
- Do not preach.
- Do not summarize the user's message clinically.

WRITING STYLE:
- 6–9 sentences.
- Plain text only.
- No markdown.
- No bullet points.
- Cadence should feel human and prayerful, not explanatory.
`.trim();

    let systemInstruction = baseSystem;
    let prompt = "";

    if (mode === "free") {
      const exactPhrase = input ? pickExactPhrase(input) : "";

      systemInstruction = `
${baseSystem}

DEPTH REQUIREMENTS (FREE MODE):
- Reflect 1–2 exact emotional phrases from the user's message.
${prayerType ? `- The prayer must clearly embody this prayer type within the ${tradition} tradition: ${prayerType}.` : ""}
${prayerType ? `- Let the structure, tone, and emphasis feel recognizably like a ${prayerType} prayer, not just a general prayer with the label attached.` : ""}

Write the prayer now.
      `.trim();

      prompt = `
User feelings: ${feelings.join(", ") || "(not specified)"}

${prayerType ? `Selected prayer type: "${prayerType}"` : 'Selected prayer type: "(not specified)"'}

User wrote:
"${input}"

${
  exactPhrase
    ? `HARD REQUIREMENT:
- Include this exact phrase somewhere in the prayer (verbatim, unmodified):
"${exactPhrase}"`
    : `The user did not provide a written prayer request.
- Do not invent a quoted phrase.
- Draw naturally from the listed feelings instead.`
}

${prayerType ? `Make the prayer clearly read like a ${prayerType} prayer in the ${tradition} tradition.` : ""}

Write the prayer fully formed.
Do not mention rules or instructions.
      `.trim();
    }

    if (mode === "classic") {
      systemInstruction = `
${baseSystem}

CLASSIC PRAYER MODE:
- You are creating a tradition-faithful prayerful rendition inspired by a known prayer or prayer-type.
- DO NOT claim the text is a verbatim historical or official translation.
- DO NOT say you "looked it up" or cite sources.
- Keep it respectful, recognizable in spirit, and consistent with the tradition.

Write the prayer now.
      `.trim();

      prompt = `
Selected: "${selectedPrayerLabel}"
Type: ${selectedPrayerKind}

${intention ? `Personal intention to weave in gently:\n"${intention}"\n` : ""}

Write a tradition-faithful prayerful rendition inspired by the selected item.
If the selected item is a "type", create an exemplary prayer of that type.
If the selected item is a "named prayer", make it recognizable in spirit without claiming it is verbatim.

Do not mention rules or instructions.
      `.trim();
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: mode === "classic" ? 0.85 : 0.92,
      },
    });

    let text = postProcessPrayer(response.text?.trim() || "");
    text = stripGenericOpeners(text);

    if (!text) {
      return NextResponse.json({ error: "Empty response from model." }, { status: 500 });
    }

    text = stripGenericOpeners(text);

    return NextResponse.json({ prayer: text });
  } catch (err: any) {
    console.error("API /api/pray error:", err);

    const msg = err?.message || "Prayer generation failed.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}