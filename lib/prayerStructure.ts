import { Tradition } from "./avatars";

export function buildStructureInstruction(tradition: Tradition) {
  switch (tradition) {
    case "grace":
      return `
TRADITION: GRACE (universal, non-denominational)
MANDATORY SHAPE:
1) Start with a gentle direct address to the person (use their name if provided).
2) Reflect their exact situation in plain everyday words (use 1–2 concrete details from what they wrote).
3) One simple ask for help/comfort (no religious jargon).
4) One hope line that feels human (not preachy).
5) Close with a quiet release: "Peace." (exact word)

STYLE LIMITS:
- Do NOT mention scripture, prophets, saints, Allah, Hashem, or Om.
- Do NOT use phrases like "Divine Presence".
- Keep it warm, motherly, and grounded.
`;

    case "catholic":
      return `
TRADITION: CATHOLIC
MANDATORY SHAPE:
1) Opening invocation: "Heavenly Father," or "Lord," (choose one).
2) Petition tied to their specific words (use 1–2 concrete details).
3) A surrender line: "We place this in Your hands..." (trustful, not fatalistic).
4) Close: "Through Christ our Lord. Amen." (exact line)

STYLE LIMITS:
- May mention grace, mercy, Holy Spirit, Christ.
- Do NOT use casual slang.
- Do NOT open with "Divine Presence".
`;

    case "protestant":
      return `
TRADITION: PROTESTANT
MANDATORY SHAPE:
1) Direct address to God: "God," or "Father," (conversational).
2) Scripture-flavored encouragement WITHOUT direct quotes (phrases like "You are near", "You make a way").
3) Ask for strength/peace/guidance tied to their specific situation (use 1–2 concrete details).
4) Close simply: "In Jesus’ name, amen." (exact line)

STYLE LIMITS:
- Pastoral, plainspoken.
- Do NOT sound liturgical.
- Do NOT open with "Divine Presence".
`;

    case "jewish":
      return `
TRADITION: JEWISH
MANDATORY SHAPE:
1) Name God using ONE of: "Eternal One", "Source of Peace", "Holy One" (choose one; do not use Hashem unless user does).
2) Wisdom framing: steadiness, courage, remembrance, continuity (gentle + reflective).
3) A communal/continuity line (ancestors/community/coming days) without preaching.
4) Close: "Shalom." (exact word)

STYLE LIMITS:
- Do NOT mention Jesus, saints, or "Amen" unless user does.
- Do NOT open with "Divine Presence".
`;

    case "muslim":
      return `
TRADITION: MUSLIM
MANDATORY SHAPE:
1) Begin with mercy attributes: "O Most Merciful, O Most Compassionate," (exact opening).
2) Ask for ease/guidance tied to the person's specific words (use 1–2 concrete details).
3) Trust/submission line: "We trust You with what we cannot carry..." (gentle).
4) Close with peace tone: "Ameen. Peace be upon you." (exact line)

STYLE LIMITS:
- Respectful, steady.
- Do NOT use "Divine Presence".
- Avoid sectarian language.
`;

    case "hindu":
      return `
TRADITION: HINDU
MANDATORY SHAPE:
1) Open with a poetic image (ONE image only): light/dawn/river/flame/lotus (choose one).
2) Devotion language: "Beloved", "Sacred Presence", or "Divine within" (choose one).
3) Inner transformation theme: courage, clarity, compassion, steadiness (tie to specific details from the user's words).
4) Close: "Om Shanti." (exact words)

STYLE LIMITS:
- Do NOT sound theistic-Christian.
- Do NOT mention "Amen", "Heavenly Father", "Jesus".
- Do NOT use "Divine Presence" as a phrase.
`;

    case "buddhist":
      return `
TRADITION: BUDDHIST
MANDATORY SHAPE:
1) Start with present awareness: breath / this moment / noticing (simple, non-mystical).
2) Compassion outward + inward (include both).
3) Release of suffering: letting go, softening, easing grip (non-theistic).
4) Close: "May you be at peace." (exact line)

STYLE LIMITS:
- Do NOT address God.
- Do NOT use "Divine Presence".
- Keep it calm, simple, and embodied.
`;

    default:
      return `
TRADITION: GENERAL
- Calm, specific reflection
- Supportive prayer
- Clean closing
`;
  }
}

export function postProcessPrayer(text: string) {
  if (!text) return "";

  // Clean whitespace and remove excessive repetition
  let out = text.replace(/\r\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

  // Guardrail: remove markdown bullets if model tries them
  out = out.replace(/^\s*[-•]\s+/gm, "");

  return out;
}