// /lib/prayerCatalog.ts

export type TraditionKey =
  | "grace"
  | "catholic"
  | "protestant"
  | "jewish"
  | "muslim"
  | "hindu"
  | "buddhist";

export type PrayerKind = "type" | "named";

export type PrayerCatalogItem = {
  id: string;
  label: string; // keep exact wording
  kind: PrayerKind;
};

export type PrayerEntry = PrayerCatalogItem & {
  gloss: string;
  display: string;
};

export const PRAYER_CATALOG: Record<TraditionKey, PrayerCatalogItem[]> = {
  grace: [],

  catholic: [
    { id: "catholic_adoration", label: "Adoration", kind: "type" },
    { id: "catholic_contrition", label: "Contrition", kind: "type" },
    { id: "catholic_thanksgiving", label: "Thanksgiving", kind: "type" },
    { id: "catholic_petition", label: "Petition", kind: "type" },
    { id: "catholic_intercession", label: "Intercession", kind: "type" },
    { id: "catholic_marian_devotion", label: "Marian Devotion", kind: "type" },
    {
      id: "catholic_eucharistic_devotion",
      label: "Eucharistic Devotion",
      kind: "type",
    },
    {
      id: "catholic_prayers_for_mercy",
      label: "Prayers for Mercy",
      kind: "type",
    },
    {
      id: "catholic_prayers_for_guidance",
      label: "Prayers for Guidance",
      kind: "type",
    },
    {
      id: "catholic_examination_of_conscience",
      label: "Examination of Conscience",
      kind: "type",
    },
    {
      id: "catholic_prayers_for_the_sick",
      label: "Prayers for the Sick",
      kind: "type",
    },
    {
      id: "catholic_prayers_for_the_dying",
      label: "Prayers for the Dying",
      kind: "type",
    },
    { id: "catholic_family_prayers", label: "Family Prayers", kind: "type" },
    {
      id: "catholic_vocational_discernment_prayers",
      label: "Vocational Discernment Prayers",
      kind: "type",
    },
    { id: "catholic_morning_offering", label: "Morning Offering", kind: "type" },
    { id: "catholic_night_prayer", label: "Night Prayer", kind: "type" },
    { id: "catholic_advent_prayers", label: "Advent Prayers", kind: "type" },
    { id: "catholic_lenten_prayers", label: "Lenten Prayers", kind: "type" },
    { id: "catholic_easter_prayers", label: "Easter Prayers", kind: "type" },
    {
      id: "catholic_saint_inspired_prayers",
      label: "Saint-inspired Prayers",
      kind: "type",
    },
    { id: "catholic_lords_prayer_kjv", label: "The Lord's Prayer", kind: "named" },
    { id: "catholic_psalm_23_kjv", label: "Psalm 23", kind: "named" },
    { id: "catholic_psalm_51_kjv", label: "Psalm 51", kind: "named" },
    { id: "catholic_psalm_90_kjv", label: "Psalm 90 / Prayer of Moses", kind: "named" },
    { id: "catholic_jabez_kjv", label: "The Prayer of Jabez", kind: "named" },
    { id: "catholic_hannah_kjv", label: "Hannah's Prayer", kind: "named" },
    { id: "catholic_solomon_dedication_kjv", label: "Solomon's Prayer of Dedication", kind: "named" },
    { id: "catholic_daniel_kjv", label: "Daniel's Prayer", kind: "named" },
    { id: "catholic_jonah_kjv", label: "Jonah's Prayer", kind: "named" },
    { id: "catholic_magnificat_kjv", label: "Mary's Magnificat", kind: "named" },
    { id: "catholic_nunc_dimittis_kjv", label: "Simeon's Song / Nunc Dimittis", kind: "named" },
    { id: "catholic_high_priestly_prayer_kjv", label: "Jesus' High Priestly Prayer", kind: "named" },
  ],
  protestant: [
    { id: "protestant_adoration", label: "Adoration Prayers", kind: "type" },
    { id: "protestant_confession", label: "Confession Prayers", kind: "type" },
    { id: "protestant_thanksgiving", label: "Thanksgiving Prayers", kind: "type" },
    { id: "protestant_intercessory", label: "Intercessory Prayers", kind: "type" },
    { id: "protestant_petitionary", label: "Petitionary Prayers", kind: "type" },
    { id: "protestant_praise", label: "Praise Prayers", kind: "type" },
    { id: "protestant_lament", label: "Lament Prayers", kind: "type" },
    { id: "protestant_morning", label: "Morning Prayers", kind: "type" },
    { id: "protestant_evening", label: "Evening Prayers", kind: "type" },
    { id: "protestant_healing", label: "Healing Prayers", kind: "type" },
    { id: "protestant_guidance", label: "Guidance Prayers", kind: "type" },
    { id: "protestant_protection", label: "Protection Prayers", kind: "type" },
    { id: "protestant_lords_prayer_kjv", label: "The Lord's Prayer", kind: "named" },
    { id: "protestant_psalm_23_kjv", label: "Psalm 23", kind: "named" },
    { id: "protestant_psalm_51_kjv", label: "Psalm 51", kind: "named" },
    { id: "protestant_psalm_90_kjv", label: "Psalm 90 / Prayer of Moses", kind: "named" },
    { id: "protestant_jabez_kjv", label: "The Prayer of Jabez", kind: "named" },
    { id: "protestant_hannah_kjv", label: "Hannah's Prayer", kind: "named" },
    { id: "protestant_solomon_dedication_kjv", label: "Solomon's Prayer of Dedication", kind: "named" },
    { id: "protestant_daniel_kjv", label: "Daniel's Prayer", kind: "named" },
    { id: "protestant_jonah_kjv", label: "Jonah's Prayer", kind: "named" },
    { id: "protestant_magnificat_kjv", label: "Mary's Magnificat", kind: "named" },
    { id: "protestant_nunc_dimittis_kjv", label: "Simeon's Song / Nunc Dimittis", kind: "named" },
    { id: "protestant_high_priestly_prayer_kjv", label: "Jesus' High Priestly Prayer", kind: "named" },
    { id: "protestant_nicene_creed", label: "Nicene Creed", kind: "named" },
    { id: "protestant_prayer_of_st_francis", label: "Prayer of St. Francis", kind: "named" },
  ],
  jewish: [
    { id: "jewish_shacharit", label: "Shacharit", kind: "type" },
    { id: "jewish_mincha", label: "Mincha", kind: "type" },
    { id: "jewish_maariv", label: "Maariv", kind: "type" },
    { id: "jewish_hallel", label: "Hallel", kind: "type" },
    { id: "jewish_tehillim", label: "Tehillim", kind: "type" },
    { id: "jewish_birkat_hamazon", label: "Birkat Hamazon", kind: "type" },
    { id: "jewish_tefilat_haderech", label: "Tefilat Haderech", kind: "type" },
    { id: "jewish_kabbalat_shabbat", label: "Kabbalat Shabbat", kind: "type" },
    { id: "jewish_mussaf", label: "Mussaf", kind: "type" },
    { id: "jewish_tashlich", label: "Tashlich", kind: "type" },
    { id: "jewish_selichot", label: "Selichot", kind: "type" },
    { id: "jewish_vidui", label: "Vidui", kind: "type" },
  ],

  muslim: [
    { id: "muslim_fajr", label: "Fajr Prayer", kind: "type" },
    { id: "muslim_dhuhr", label: "Dhuhr Prayer", kind: "type" },
    { id: "muslim_asr", label: "Asr Prayer", kind: "type" },
    { id: "muslim_maghrib", label: "Maghrib Prayer", kind: "type" },
    { id: "muslim_isha", label: "Isha Prayer", kind: "type" },
  ],

  hindu: [
    { id: "hindu_shanti_path", label: "Shanti Path (Peace Prayer)", kind: "type" },
    { id: "hindu_gratitude_offering", label: "Gratitude / Offering", kind: "type" },
    { id: "hindu_bhakti", label: "Bhakti Devotional", kind: "type" },
    { id: "hindu_sankalpa", label: "Sankalpa (Intention Setting)", kind: "type" },
    { id: "hindu_stuti", label: "Stuti (Praise)", kind: "type" },
    { id: "hindu_prarthana", label: "Prarthana (Personal Request)", kind: "type" },
    { id: "hindu_gayatri", label: "Gayatri / Sacred Mantra", kind: "type" },
    { id: "hindu_kshama", label: "Kshama Prarthana (Forgiveness)", kind: "type" },
  ],

  buddhist: [
    { id: "buddhist_metta", label: "Metta (Loving Kindness)", kind: "type" },
    { id: "buddhist_karuna", label: "Karuna (Compassion)", kind: "type" },
    { id: "buddhist_mindfulness", label: "Mindfulness Reflection", kind: "type" },
    { id: "buddhist_equanimity", label: "Equanimity Practice", kind: "type" },
    { id: "buddhist_letting_go", label: "Letting Go / Release", kind: "type" },
    { id: "buddhist_forgiveness", label: "Forgiveness Reflection", kind: "type" },
    { id: "buddhist_merit", label: "Dedication of Merit", kind: "type" },
    { id: "buddhist_refuge", label: "Refuge / Protection", kind: "type" },
  ],
};

export function getPrayerOptions(tradition: TraditionKey): PrayerEntry[] {
  return (PRAYER_CATALOG[tradition] ?? []).map((item) => ({
    ...item,
    gloss: item.label,
    display: item.label,
  }));
}