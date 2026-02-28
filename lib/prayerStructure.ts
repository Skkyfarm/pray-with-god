import { Tradition } from "./avatars";

/**
 * Returns a strict, tradition-specific structure instruction for the model.
 * This is intentionally detailed to reduce “same-y” outputs.
 */
export function buildStructureInstruction(tradition: Tradition) {
  switch (tradition) {
    case "grace":
      return `
STRUCTURE (GRACE — universal, compassionate):
1) Soft opening directly to the person (present + human). (1 sentence)
2) Name what they are carrying using everyday language. (1–2 sentences)
3) Ask for help/comfort in a universal way (no heavy religious jargon). (2–3 sentences)
4) One concrete hope line for the next hour/day (practical + gentle). (1 sentence)
5) Quiet release: "Peace." (1 short sentence)

STYLE:
- Use simple words. No big theological concepts.
- Prefer one vivid, ordinary image (lamp, warm hand, morning light) max.
- Avoid: "Divine Presence", "soothe", "uplift", "grant" unless it sounds natural.
`.trim();

    case "catholic":
      return `
STRUCTURE (CATHOLIC — reverent + surrender):
1) Invocation: "Heavenly Father" or "Lord" (reverent, not casual). (1 sentence)
2) Specific petition: name their situation using at least one of their exact phrases. (2–3 sentences)
3) Interior grace: ask for virtues (peace, patience, courage, consolation). (1–2 sentences)
4) Surrender: place the outcome into God's will (trustful, not fatalistic). (1–2 sentences)
5) Close: "Through Christ our Lord. Amen." OR "Amen." (1 sentence)

STYLE:
- Slightly formal cadence; gentle, not theatrical.
- May include ONE short liturgical-flavored line (e.g., “be near…”), no long quotes.
`.trim();

    case "protestant":
      return `
STRUCTURE (PROTESTANT — pastoral + direct prayer):
1) Direct address to God in a warm, conversational voice. (1 sentence)
2) Speak the situation plainly and specifically (include one exact phrase). (2–3 sentences)
3) Ask for guidance/strength/peace tied to their real-life next steps. (2–3 sentences)
4) Scripture-flavored encouragement WITHOUT quoting verses (e.g., “light for the next step”). (1–2 sentences)
5) Close simply: "Amen." (1 sentence)

STYLE:
- Plainspoken, encouraging, confident, not formal.
- Avoid Catholic-style phrasing (“Through Christ our Lord”).
`.trim();

    case "jewish":
      return `
STRUCTURE (JEWISH — reflective + wisdom + continuity):
1) Address: "Eternal One" / "Source of Peace" / "Holy One" (choose ONE). (1 sentence)
2) Name their burden with dignity and clarity (include one exact phrase). (2–3 sentences)
3) Wisdom framing: steadiness, courage, remembrance, truth, community. (2–3 sentences)
4) A hopeful line connected to continuity (today, family, community, tomorrow). (1–2 sentences)
5) Close: "Shalom." (1 sentence)

STYLE:
- Reflective, grounded, gently poetic, not preachy.
- Avoid Christian/Islamic names/titles for God.
`.trim();

    case "muslim":
      return `
STRUCTURE (MUSLIM — mercy + trust + guidance):
1) Begin with mercy attributes: "Most Merciful, Most Compassionate" (or similar). (1 sentence)
2) Name their situation clearly (include one exact phrase). (2–3 sentences)
3) Ask for ease, guidance, patience, and what is best (khayr) for them. (2–3 sentences)
4) Trust/submission: place the matter in God's care with calm confidence. (1–2 sentences)
5) Close with peace tone: "Ameen." OR "Peace be with you." (1 sentence)

STYLE:
- Calm, humble, trusting.
- Avoid Christian phrasing and avoid “Shalom/Amen” unless using “Ameen.”
`.trim();

    case "hindu":
      return `
STRUCTURE (HINDU — devotional + inner divinity + imagery):
1) Open with one vivid image (dawn/light/river/flame) tied to their situation. (1–2 sentences)
2) Address the Sacred: "Beloved", "Sacred Presence", "Divine within" (choose ONE). (1 sentence)
3) Name what they carry specifically (include one exact phrase). (2–3 sentences)
4) Inner transformation: ask for clarity, courage, compassion, steadiness. (2–3 sentences)
5) Close: "Namaste." OR "Om Shanti." (1 sentence)

STYLE:
- Poetic but concrete; do not drift into vague mysticism.
- No Abrahamic closings (“Amen/Shalom”).
`.trim();

    case "buddhist":
      return `
STRUCTURE (BUDDHIST — present-moment + compassion + non-theistic):
1) Begin with the breath / this moment / gentle attention. (1–2 sentences)
2) Name the feelings/suffering clearly (include one exact phrase). (2–3 sentences)
3) Compassion outward + inward (metta tone): kindness toward self and others. (2–3 sentences)
4) Letting go: soften grip of fear/anxiety; invite ease in the body. (1–2 sentences)
5) Close: "May you be at peace." OR "Peace, peace, peace." (1 sentence)

STYLE:
- Absolutely no deity language (no “Divine Presence”, no “Lord”, no “Amen”).
- Calm, grounded, embodied.
`.trim();

    default:
      return `
STRUCTURE:
- Acknowledge the person.
- Speak specifically to their situation.
- Offer comfort + next-step hope.
- Calm closing.
`.trim();
  }
}

/**
 * Optional: clean up model output.
 * - Collapses excessive blank lines
 * - Trims whitespace
 * - Removes common AI boilerplate if it sneaks in
 */
export function postProcessPrayer(text: string) {
  if (!text) return "";

  let t = text.replace(/\n{3,}/g, "\n\n").trim();

  // Soft cleanup of common filler phrases (won't harm good prayers)
  t = t.replace(/^Here is (a|the) (prayer|reflection)[^.\n]*\.\s*/i, "");
  t = t.replace(/^Certainly[^.\n]*\.\s*/i, "");

  return t.trim();
}