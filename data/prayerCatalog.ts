// /data/prayerCatalog.ts

export type TraditionKey =
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

export const PRAYER_CATALOG: Record<TraditionKey, PrayerCatalogItem[]> = {
  catholic: [
    { id: "catholic_thanksgiving", label: "Thanksgiving", kind: "type" },
    { id: "catholic_adoration", label: "Adoration", kind: "type" },
    { id: "catholic_supplication", label: "Supplication", kind: "type" },
    { id: "catholic_confession", label: "Confession", kind: "type" },
    { id: "catholic_lords_prayer", label: "The Lord’s Prayer", kind: "named" },
    { id: "catholic_jabez", label: "The Prayer of Jabez", kind: "named" },
    { id: "catholic_serenity", label: "The Serenity Prayer", kind: "named" },
    { id: "catholic_st_francis", label: "The Prayer of St. Francis", kind: "named" },
    { id: "catholic_hannah", label: "The Prayer of Hannah", kind: "named" },
    { id: "catholic_king_solomon", label: "The Prayer of King Solomon", kind: "named" },
    {
      id: "catholic_mary_mother_of_jesus",
      label: "The Prayer of Mary, the mother of Jesus",
      kind: "named",
    },
    { id: "catholic_st_augustine", label: "The Prayer of St. Augustine", kind: "named" },
    {
      id: "catholic_st_ignatius",
      label: "The Prayer of St. Ignatius of Loyola",
      kind: "named",
    },
    {
      id: "catholic_st_therese",
      label: "The Prayer of St. Therese of Lisieux",
      kind: "named",
    },
  ],

  protestant: [
    { id: "protestant_thanksgiving", label: "Thanksgiving Prayers", kind: "type" },
    { id: "protestant_meditative", label: "Meditative Prayers", kind: "type" },
    { id: "protestant_intercessory", label: "Intercessory Prayers", kind: "type" },
    { id: "protestant_petitionary", label: "Petitionary Prayers", kind: "type" },
    { id: "protestant_praise", label: "Praise Prayers", kind: "type" },
    { id: "protestant_adoration", label: "Adoration Prayers", kind: "type" },
    { id: "protestant_liturgical", label: "Liturgical Prayers", kind: "type" },
    { id: "protestant_lamentation", label: "Lamentation Prayers", kind: "type" },
    { id: "protestant_confessional", label: "Confessional Prayers", kind: "type" },
    { id: "protestant_penitence", label: "Prayers of Penitence", kind: "type" },
    { id: "protestant_lords_prayer_kjv", label: "The Lord's Prayer", kind: "named" },
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