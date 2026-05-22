export const PROTESTANT_LORDS_PRAYER_KJV = `Our Father which art in heaven, Hallowed be thy name.

Thy kingdom come. Thy will be done in earth, as it is in heaven.

Give us this day our daily bread.

And forgive us our debts, as we forgive our debtors.

And lead us not into temptation, but deliver us from evil:

For thine is the kingdom, and the power, and the glory, for ever. Amen.`;

export const PROTESTANT_JABEZ_KJV = `And Jabez called on the God of Israel, saying, Oh that thou wouldest bless me indeed, and enlarge my coast, and that thine hand might be with me, and that thou wouldest keep me from evil, that it may not grieve me! And God granted him that which he requested.`;

export const PSALM_23_KJV = `The LORD is my shepherd; I shall not want.

He maketh me to lie down in green pastures: he leadeth me beside the still waters.

He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.

Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.

Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.

Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.`;

export const KJV_NAMED_PRAYER_TEXTS: Record<string, string> = {
  "The Lord's Prayer": PROTESTANT_LORDS_PRAYER_KJV,
  "The Prayer of Jabez": PROTESTANT_JABEZ_KJV,
  "Psalm 23": PSALM_23_KJV,
};

export function normalizeNamedPrayerLabel(label: string) {
  return label
    .replace(/\u2018|\u2019/g, "'")
    .replace(/â€˜|â€™|Ã¢â‚¬Ëœ|Ã¢â‚¬â„¢/g, "'")
    .trim();
}

export function getKjvNamedPrayerText(label: string) {
  return KJV_NAMED_PRAYER_TEXTS[normalizeNamedPrayerLabel(label)] || null;
}