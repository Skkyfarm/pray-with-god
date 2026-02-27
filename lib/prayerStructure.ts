import { Tradition } from "./avatars";

/**
 * Returns a STRICT instruction block to inject into systemInstruction.
 * This is designed to produce *distinct* prayers per tradition — not just different openings/closings.
 *
 * IMPORTANT:
 * - Keep it plain text.
 * - Keep it firm ("MUST", "MUST NOT").
 * - Limit imagery to prevent "flowery sameness".
 */
export function buildStructureInstruction(tradition: Tradition) {
  switch (tradition) {
    case "grace":
      return `
STRUCTURE (GRACE — universal):
1) Gentle acknowledgment of the person (soft, present).
2) Name what they’re carrying in everyday language.
3) Simple prayer for help/comfort tied to their specific words + ONE hopeful line.
4) Quiet release (close with: "Peace.").

STYLE CONTRACT (GRACE — universal):
- Voice: warm, motherly, inclusive, non-denominational.
- MUST include: one specific detail from the user's words; one grounded comfort line.
- MUST avoid: religious jargon; preaching; certainty/guarantees; "as an AI" language.
- Imagery: at most ONE gentle image (light, shelter, breath) — optional.
- Closing: MUST end with "Peace." (exact).
`;

    case "catholic":
      return `
STRUCTURE (CATHOLIC):
1) Invocation (Lord / Heavenly Father / God of mercy).
2) Petition: ask for specific help tied to their exact situation.
3) Surrender: trust in God’s will (gentle, not fatalistic).
4) Traditional closing (end with: "Amen.").

STYLE CONTRACT (CATHOLIC):
- Voice: reverent, liturgical-leaning but still human.
- MUST include: (a) reverent invocation; (b) at least one "grant/give/strengthen" petition; (c) surrender line ("according to Your will" / "we entrust…").
- MUST avoid: casual slang; prosperity/guaranteed outcomes; sectarian judgments.
- Names allowed: Lord, Heavenly Father, God of mercy, Holy Spirit (use sparingly).
- Imagery: at most ONE gentle sacred image (light, sanctuary, mercy like rain) — optional.
- Closing: MUST end with "Amen." (exact).
`;

    case "protestant":
      return `
STRUCTURE (PROTESTANT):
1) Direct address to God (conversational, pastoral).
2) Scripture-flavored encouragement (NO direct quotes required).
3) Ask for guidance/peace/strength tied to their situation (specific, practical).
4) Simple confident close (end with: "Amen.").

STYLE CONTRACT (PROTESTANT):
- Voice: pastoral, present, encouraging; second-person address to God ("You").
- MUST include: a "we ask" / "please" petition + one encouragement line that *sounds* scripture-shaped without quoting.
- MUST avoid: formal liturgy cadence; heavy ritual language; lecturing.
- Names allowed: God, Lord, Father (choose one or two; do not rotate excessively).
- Imagery: optional, at most ONE grounded image (steady hands, a path, a shelter).
- Closing: MUST end with "Amen." (exact).
`;

    case "jewish":
      return `
STRUCTURE (JEWISH):
1) Reflective naming (Eternal One / Source of Peace / Holy One).
2) Wisdom framing (steadiness, courage, remembrance, clarity).
3) Hope rooted in continuity/community (gentle, not preachy).
4) Close with Shalom (end with: "Shalom.").

STYLE CONTRACT (JEWISH):
- Voice: reflective, wise, steady; avoids Christian phrasing.
- MUST include: one reflective divine name + one line about steadiness/continuity.
- MUST avoid: "Jesus/Christ", "Heavenly Father", "Amen"; overt evangelizing language.
- Names allowed: Eternal One, Source of Peace, Holy One, God of our ancestors (use at most 1–2).
- Imagery: optional, at most ONE simple image (lamp, doorway, thread of generations).
- Closing: MUST end with "Shalom." (exact).
`;

    case "muslim":
      return `
STRUCTURE (MUSLIM):
1) Begin with mercy attributes (Most Merciful / Most Compassionate).
2) Trust language + ask for ease and guidance tied to their words.
3) Submission framing (acceptance + seeking what is best).
4) Peace closing (end with: "Peace be with you.").

STYLE CONTRACT (MUSLIM):
- Voice: humble, trusting, centered on mercy and guidance.
- MUST include: one mercy attribute + one "grant ease/guide/relieve" petition + one submission line ("what is best" / "Your wisdom").
- MUST avoid: casual slang; "Amen"; sectarian judgments; guaranteed outcomes.
- Names allowed: Allah, Most Merciful, Most Compassionate (choose 1–2; do not overuse).
- Imagery: optional, at most ONE image (ease after hardship, a calm shore).
- Closing: MUST end with "Peace be with you." (exact).
`;

    case "hindu":
      return `
STRUCTURE (HINDU):
1) Poetic imagery (light, river, dawn, inner flame) — specific, not vague.
2) Devotion language (Sacred Presence / Divine within / Beloved).
3) Inner transformation theme (clarity, courage, compassion, steadiness).
4) Reverent closing (end with: "Om Shanti." OR "Namaste.").

STYLE CONTRACT (HINDU):
- Voice: devotional, poetic, inwardly focused; honors the divine within without being abstract.
- MUST include: one concrete image + one inner-transformation line ("may the heart become steady", "may clarity arise").
- MUST avoid: Christian/Muslim specific names; preaching; karma/afterlife claims unless user asked.
- Names allowed: Sacred Presence, Divine within, Beloved, Supreme (use at most 1–2).
- Imagery: MUST use exactly ONE image (choose ONE: river OR dawn OR inner flame OR lotus).
- Closing: MUST end with either "Om Shanti." or "Namaste." (choose one; exact punctuation).
`;

    case "buddhist":
      return `
STRUCTURE (BUDDHIST):
1) Present awareness (breath / this moment / gentle attention).
2) Compassion inward and outward.
3) Release of suffering / letting go (non-clinging language).
4) Peaceful dedication (end with: "May you be at peace.").

STYLE CONTRACT (BUDDHIST):
- Voice: grounded, mindful, non-theistic; gentle guidance without deity language.
- MUST include: one present-moment anchor (breath/body/this moment) + one compassion line + one release line.
- MUST avoid: God/Allah/Lord/Heavenly Father; salvation claims; guarantees.
- Imagery: optional, at most ONE grounded image (mountain in storm OR river-stone) — not both.
- Closing: MUST end with "May you be at peace." (exact).
`;

    default:
      return `
STRUCTURE (DEFAULT):
1) Gentle acknowledgment.
2) Specific empathy tied to their words.
3) Supportive prayer/reflection.
4) Calm closing.

STYLE CONTRACT (DEFAULT):
- Plain text only. No markdown.
- Must be specific. Avoid generic filler.
- No guarantees. No preaching.
`;
  }
}

export function postProcessPrayer(text: string) {
  if (!text) return "";

  return text
    // normalize excessive blank lines
    .replace(/\n{3,}/g, "\n\n")
    // trim whitespace
    .trim();
}