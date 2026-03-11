// lib/prayerCatalog.ts

export type PrayerKind = "type" | "named";

export type PrayerEntry = {
  id: string;
  label: string;
  gloss: string;
  display: string;
  kind: PrayerKind;
};

export type TraditionKey =
  | "grace"
  | "catholic"
  | "protestant"
  | "jewish"
  | "muslim"
  | "hindu"
  | "buddhist";

function makePrayer(
  id: string,
  label: string,
  gloss: string,
  kind: PrayerKind = "type"
): PrayerEntry {
  return {
    id,
    label,
    gloss,
    display: `${label} (${gloss})`,
    kind,
  };
}

export const PRAYER_CATALOG: Record<TraditionKey, PrayerEntry[]> = {
  grace: [
    makePrayer("praise", "Praise", "Worship"),
    makePrayer("confession", "Confession", "Repentance"),
    makePrayer("thanksgiving", "Thanksgiving", "Gratitude"),
    makePrayer("petition", "Petition", "Personal Request"),
    makePrayer("intercession", "Intercession", "Prayer for Others"),
  ],

  catholic: [
    makePrayer("adoration", "Adoration", "Worship"),
    makePrayer("confession", "Confession", "Repentance"),
    makePrayer("thanksgiving", "Thanksgiving", "Gratitude"),
    makePrayer("supplication", "Supplication", "Personal Request"),
    makePrayer("intercession", "Intercession", "Prayer for Others"),
    makePrayer("praise", "Praise", "Exaltation"),
    makePrayer("lectio-divina", "Lectio Divina", "Sacred Reflection"),
    makePrayer("examen", "Examen", "Daily Reflection"),
  ],

  protestant: [
    makePrayer("confessional-prayers", "Confessional Prayers", "Repentance"),
    makePrayer("thanksgiving-prayers", "Thanksgiving Prayers", "Gratitude"),
    makePrayer("intercessory-prayers", "Intercessory Prayers", "Prayer for Others"),
    makePrayer("petitionary-prayers", "Petitionary Prayers", "Personal Request"),
    makePrayer("adoration-prayers", "Adoration Prayers", "Worship"),
    makePrayer("praise-prayers", "Praise Prayers", "Exaltation"),
    makePrayer("lamentation-prayers", "Lamentation Prayers", "Sorrow / Complaint"),
    makePrayer("prayers-of-penitence", "Prayers of Penitence", "Contrition"),
    makePrayer("meditative-prayers", "Meditative Prayers", "Quiet Reflection"),
  ],

  jewish: [
    makePrayer("bakashah", "Bakashah", "Personal Request"),
    makePrayer("hodaah", "Hoda'ah", "Gratitude"),
    makePrayer("teshuvah", "Teshuvah", "Return / Repentance"),
    makePrayer("rachamim", "Rachamim", "Mercy"),
    makePrayer("shalom", "Shalom", "Peace"),
    makePrayer("refuah", "Refuah", "Healing"),
    makePrayer("kavanah", "Kavanah", "Sacred Intention"),
  ],

  muslim: [
    makePrayer("dua", "Dua", "Personal Supplication"),
    makePrayer("shukr", "Shukr", "Gratitude"),
    makePrayer("tawbah", "Tawbah", "Repentance"),
    makePrayer("sabr", "Sabr", "Patience"),
    makePrayer("hidayah", "Hidayah", "Guidance"),
    makePrayer("rahmah", "Rahmah", "Mercy"),
    makePrayer("shifa", "Shifa", "Healing"),
  ],

  hindu: [
    makePrayer("bhakti", "Bhakti", "Devotion"),
    makePrayer("stuti", "Stuti", "Praise"),
    makePrayer("prarthana", "Prarthana", "Personal Request"),
    makePrayer("sankalpa", "Sankalpa", "Intention Setting"),
    makePrayer("shanti-prarthana", "Shanti Prarthana", "Peace Prayer"),
    makePrayer("kshama-prarthana", "Kshama Prarthana", "Forgiveness"),
    makePrayer("dhyana", "Dhyana", "Meditative Reflection"),
  ],

  buddhist: [
    makePrayer("metta", "Metta", "Loving-Kindness"),
    makePrayer("karuna", "Karuna", "Compassion"),
    makePrayer("mudita", "Mudita", "Joy in Others' Good"),
    makePrayer("upekkha", "Upekkha", "Equanimity"),
    makePrayer("aspiration", "Aspiration", "Sacred Wish"),
    makePrayer("repentance", "Repentance", "Purification"),
    makePrayer("gratitude", "Gratitude", "Thankful Reflection"),
  ],
};

export function getPrayerOptions(tradition: TraditionKey): PrayerEntry[] {
  return PRAYER_CATALOG[tradition] ?? [];
}