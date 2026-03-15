import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import {
  buildStructureInstruction,
  postProcessPrayer,
} from "@/lib/prayerStructure";
import type { Tradition } from "@/lib/avatars";

export const runtime = "nodejs";

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
  prayerType?: string;

  // classic mode
  selectedPrayerLabel?: string;
  selectedPrayerKind?: PrayerKind;
  intention?: string;

  // optional time awareness from client
  timezone?: string | null;
  localDateTime?: string | null;
  dayPart?: DayPart | null;
};

function pickExactPhrase(input: string) {
  const cleaned = String(input || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";

  const words = cleaned.split(" ");
  const slice = words.slice(0, Math.min(words.length, 10));
  let phrase = slice.join(" ").trim();

  phrase = phrase.replace(/[,\s]+$/g, "");
  return phrase;
}

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

function isHighRiskNamedPrayer(label: string) {
  const value = label.toLowerCase().trim();

  const exactMatches = new Set([
    "the lord’s prayer",
    "the lord's prayer",
    "our father",
    "magnificat",
    "the magnificat",
    "prayer of mary",
    "the prayer of mary",
    "the prayer of mary, the mother of jesus",
    "prayer of hannah",
    "the prayer of hannah",
    "prayer of king solomon",
    "the prayer of king solomon",
  ]);

  return exactMatches.has(value);
}

function buildTraditionBoundaryNotes(tradition: Tradition) {
  const key = String(tradition).toLowerCase();

  switch (key) {
    case "muslim":
      return `
TRADITION-SPECIFIC BOUNDARY:
- Write a reverent, humble, devotional prayer inspired by Islamic spirituality.
- Do NOT imitate Qur'an, Qur'anic cadence, surah structure, revelation language, or authoritative sacred speech.
- Do NOT present the output as scripture, translation, or sacred recitation.
      `.trim();

    case "hindu":
      return `
TRADITION-SPECIFIC BOUNDARY:
- Write a reverent devotional prayer inspired by Hindu tradition.
- Do NOT imitate mantra, shloka, scripture, or authoritative sacred translation.
- Do NOT create pseudo-scriptural verse or present the prayer as a sacred formula.
      `.trim();

    case "buddhist":
      return `
TRADITION-SPECIFIC BOUNDARY:
- Write a contemplative, compassionate devotional prayer inspired by Buddhist tradition.
- Do NOT imitate sutras, canonical chants, or liturgical recitations.
- Do NOT make the text read like a translated sacred text.
      `.trim();

    case "jewish":
      return `
TRADITION-SPECIFIC BOUNDARY:
- Write a reverent prayer inspired by Jewish tradition.
- Do NOT imitate scripture, formal liturgy, or an authoritative translation.
- Do NOT reproduce recognizable liturgical wording in sequence.
      `.trim();

    case "catholic":
    case "protestant":
    case "christian":
      return `
TRADITION-SPECIFIC BOUNDARY:
- Write a reverent Christian prayer that feels devotional and tradition-aware.
- Do NOT rewrite scripture, psalms, gospel prayers, creeds, or official liturgical texts.
- Do NOT reproduce hallmark lines from famous canonical prayers unless they are extremely brief and unavoidable.
      `.trim();

    case "grace":
    default:
      return `
TRADITION-SPECIFIC BOUNDARY:
- Write a reverent, original devotional prayer shaped by the selected tradition.
- Do NOT imitate sacred texts, official liturgy, or authoritative translations.
      `.trim();
  }
}

function buildUniversalBoundaryNotes() {
  return `
PWG CONTENT POLICY (MANDATORY):
- Produce an ORIGINAL devotional prayer.
- The output may be inspired by a tradition, prayer form, or famous prayer, but it must remain original writing.
- Do NOT quote or closely paraphrase scripture, sutras, mantras, psalms, formal liturgy, or canonized prayers at length.
- Do NOT imitate the signature wording, sequence, cadence, or structure of a famous sacred prayer too closely.
- Do NOT present the output as an official translation, revealed text, canonical prayer, or authorized liturgical form.
- Do NOT mention rules, policy, copyright, or safety in the prayer itself.
- Keep the result recognizably human and devotional, not pseudo-scriptural or artificially grand.
- Avoid fake antiquity, fake scripture voice, and "new sacred text" energy.
  `.trim();
}

function buildClassicBoundaryNotes(
  selectedPrayerLabel: string,
  selectedPrayerKind: PrayerKind
) {
  const highRisk =
    selectedPrayerKind === "named" && isHighRiskNamedPrayer(selectedPrayerLabel);

  if (highRisk) {
    return `
CLASSIC MODE BOUNDARY FOR HIGH-RISK NAMED PRAYER:
- The selected item is scripture-adjacent or especially recognizable.
- Do NOT render it line-by-line.
- Do NOT preserve its sequence, hallmark wording, or famous opening/closing lines.
- Instead, write an original devotional meditation inspired by its themes, posture, and spiritual intent.
    `.trim();
  }

  if (selectedPrayerKind === "named") {
    return `
CLASSIC MODE BOUNDARY FOR NAMED PRAYER:
- The selected item is a known named prayer.
- Make it recognizable in spiritual posture and theme, but NOT in signature wording.
- Do NOT closely paraphrase the source.
- Do NOT mimic the original line order or famous turns of phrase.
- This must read as a fresh devotional rendering, not a rewrite.
    `.trim();
  }

  return `
CLASSIC MODE BOUNDARY FOR PRAYER TYPE:
- The selected item is a prayer type.
- Write an exemplary original prayer of that type in the selected tradition.
- Do NOT imitate a specific published or canonical prayer.
    `.trim();
}

function buildFeelingToneGuidance(feelings: string[]) {
  const normalized = Array.from(
    new Set(
      feelings
        .map((feeling) => String(feeling || "").trim().toLowerCase())
        .filter(Boolean)
    )
  );

  if (normalized.length === 0) {
    return `
EMOTIONAL TONE:
- Meet the person gently and specifically.
- Do not default to bright optimism.
- Let comfort or hope emerge naturally, not automatically.
    `.trim();
  }

  const hasAny = (...labels: string[]) =>
    labels.some((label) => normalized.includes(label.toLowerCase()));

  const lines: string[] = [
    "EMOTIONAL TONE:",
    "- The prayer must emotionally meet the person where they are.",
    "- Do not force cheerfulness, quick reassurance, or a tidy happy ending.",
    "- Let hope appear honestly and gradually only if it fits the emotional truth of the prayer.",
  ];

  if (hasAny("anxious", "overwhelmed", "restless", "afraid")) {
    lines.push(
      "- Use steady, grounding language rather than excited, triumphant, or overly elevated language."
    );
  }

  if (hasAny("discouraged", "tired", "worn out", "burdened")) {
    lines.push(
      "- Sound patient, strengthening, and compassionate; do not sound chirpy or eager to skip past the heaviness."
    );
  }

  if (hasAny("brokenhearted", "grieving", "lonely")) {
    lines.push(
      "- Allow sorrow, tenderness, and lament to be present. Do not rush too quickly into reassurance."
    );
  }

  if (hasAny("angry", "frustrated")) {
    lines.push(
      "- Acknowledge emotional heat honestly and reverently, without scolding the person for feeling it."
    );
  }

  if (hasAny("confused", "seeking clarity")) {
    lines.push(
      "- Emphasize guidance, wisdom, and light for the next step rather than total certainty."
    );
  }

  if (hasAny("guilty", "ashamed")) {
    lines.push(
      "- Use gentle, honest language about mercy, forgiveness, cleansing, or return, without becoming crushing or condemning."
    );
  }

  if (hasAny("numb")) {
    lines.push(
      "- Keep the language spacious, patient, and quiet. Do not assume strong emotion where the person feels flat or distant."
    );
  }

  if (hasAny("grateful", "joyful", "peaceful", "hopeful")) {
    lines.push(
      "- Warmth is welcome, but keep it sincere and grounded rather than sugary."
    );
  }

  return lines.join("\n");
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

    const feelings = Array.isArray(body?.feelings) ? body.feelings : [];
    const input = String(body?.input || "").trim();
    const prayerType = String(body?.prayerType || "").trim();

    const selectedPrayerLabel = String(body?.selectedPrayerLabel || "").trim();
    const selectedPrayerKind = normalizeKind(body?.selectedPrayerKind);
    const intention = String(body?.intention || "").trim();

    if (mode === "free") {
      if (!input && feelings.length === 0) {
        return NextResponse.json(
          { error: "Missing prayer input." },
          { status: 400 }
        );
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

${buildUniversalBoundaryNotes()}

${buildTraditionBoundaryNotes(tradition)}

DEPTH REQUIREMENTS:
- Use at least one concrete image, lived detail, or felt situation.
- Use language weight appropriate to the tradition.
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
      const feelingToneGuidance = buildFeelingToneGuidance(feelings);

      systemInstruction = `
${baseSystem}

FREE MODE REQUIREMENTS:
- Write an original prayer shaped by the user's situation, feelings, and selected prayer type.
- If the user gave a personal request, reflect its emotional reality specifically.
${feelingToneGuidance}
${prayerType ? `- The prayer must clearly embody this prayer type within the ${tradition} tradition: ${prayerType}.` : ""}
${prayerType ? `- Let the structure, tone, and emphasis feel recognizably like a ${prayerType} prayer, not just a generic prayer with a label attached.` : ""}
- You may echo short ordinary personal language from the user's request, but do NOT echo famous sacred lines or create near-paraphrases of sacred texts.

Write the prayer now.
      `.trim();

      prompt = `
User feelings: ${feelings.join(", ") || "(not specified)"}

${prayerType ? `Selected prayer type: "${prayerType}"` : 'Selected prayer type: "(not specified)"'}

User wrote:
"${input}"

${
  exactPhrase
    ? `SOFT SPECIFICITY REQUIREMENT:
- If natural, include this exact short phrase somewhere in the prayer:
"${exactPhrase}"
- But do NOT do this if it would make the prayer sound like scripture, liturgy, or a famous published prayer.`
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

${buildClassicBoundaryNotes(selectedPrayerLabel, selectedPrayerKind)}

CLASSIC PRAYER MODE:
- You are creating a tradition-faithful devotional rendering inspired by a known prayer or prayer type.
- The result must remain original writing.
- Do NOT claim the text is verbatim, official, historical, or an authoritative translation.
- Do NOT say you "looked it up" or cite sources.
- Keep it respectful, recognizable in spirit, and consistent with the tradition.
- If the selected item is too well-known or sacred-text-adjacent, favor an original meditation on its themes rather than a close rendition.

Write the prayer now.
      `.trim();

      prompt = `
Selected: "${selectedPrayerLabel}"
Type: ${selectedPrayerKind}

${intention ? `Personal intention to weave in gently:\n"${intention}"\n` : ""}

Write a tradition-faithful original devotional rendering inspired by the selected item.
If the selected item is a "type", create an exemplary prayer of that type.
If the selected item is a "named prayer", make it recognizable in spiritual posture and theme without reproducing signature wording.

Do not mention rules or instructions.
      `.trim();
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: mode === "classic" ? 0.82 : 0.9,
      },
    });

    let text = postProcessPrayer(response.text?.trim() || "");
    text = stripGenericOpeners(text);

    if (!text) {
      return NextResponse.json(
        { error: "Empty response from model." },
        { status: 500 }
      );
    }

    text = stripGenericOpeners(text);

    return NextResponse.json({ prayer: text });
  } catch (err: any) {
    console.error("API /api/pray error:", err);

    const msg = err?.message || "Prayer generation failed.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}