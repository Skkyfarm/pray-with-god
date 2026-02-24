import { Tradition } from "./avatars";

export function buildStructureInstruction(tradition: Tradition) {
  switch (tradition) {
    case "grace":
      return `
Structure:
• simple acknowledgment
• gentle prayer language
• hope line
• quiet release
`;

    case "catholic":
      return `
Structure:
• invocation (address God reverently)
• petition
• surrender to God’s will
• traditional closing (Amen)
`;

    case "protestant":
      return `
Structure:
• conversational pastoral opening
• scripture-flavored encouragement (no direct quotes required)
• direct address to God
• confident closing (Amen)
`;

    case "jewish":
      return `
Structure:
• reflective naming of God (Source of Peace, Eternal One, etc.)
• wisdom framing
• communal continuity
• hopeful closing (Shalom)
`;

    case "muslim":
      return `
Structure:
• mercy attributes of God
• trust language
• submission framing
• peace closing
`;

    case "hindu":
      return `
Structure:
• poetic imagery
• devotion language
• inner transformation
• reverent closing (Namaste or equivalent)
`;

    case "buddhist":
      return `
Structure:
• present awareness
• compassion outward
• release of suffering
• peaceful closing
`;

    default:
      return `
Structure:
• gentle reflection
• supportive prayer
• calm closing
`;
  }
}

export function postProcessPrayer(text: string) {
  if (!text) return "";

  return text
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
