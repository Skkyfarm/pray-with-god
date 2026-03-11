// lib/prayerCatalog.ts

export type PrayerKind = 'type' | 'named';

export type PrayerEntry = {
  id: string;
  label: string;
  gloss: string;
  display: string;
  kind: PrayerKind;
};

export type TraditionKey =
  | 'grace'
  | 'catholic'
  | 'protestant'
  | 'jewish'
  | 'muslim'
  | 'hindu'
  | 'buddhist';

function makePrayer(
  id: string,
  label: string,
  gloss: string,
  kind: PrayerKind = 'type'
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
    makePrayer('praise', 'Praise', 'Worship'),
    makePrayer('confession', 'Confession', 'Repentance'),
    makePrayer('thanksgiving', 'Thanksgiving', 'Gratitude'),
    makePrayer('petition', 'Petition', 'Personal Request'),
    makePrayer('intercession', 'Intercession', 'Prayer for Others'),
    makePrayer('lords-prayer', 'The Lord’s Prayer', 'Model Prayer', 'named'),
  ],

  catholic: [
    makePrayer('adoration', 'Adoration', 'Worship'),
    makePrayer('confession', 'Confession', 'Repentance'),
    makePrayer('thanksgiving', 'Thanksgiving', 'Gratitude'),
    makePrayer('supplication', 'Supplication', 'Personal Request'),
    makePrayer('intercession', 'Intercession', 'Prayer for Others'),
    makePrayer('praise', 'Praise', 'Exaltation'),
    makePrayer('rosary', 'Rosary', 'Mystery Meditation'),
    makePrayer('lectio-divina', 'Lectio Divina', 'Sacred Reading'),
    makePrayer('examen', 'Examen', 'Daily Reflection'),
    makePrayer('liturgy-of-the-hours', 'Liturgy of the Hours', 'Daily Office'),
  ],

  protestant: [
    makePrayer('confessional-prayers', 'Confessional Prayers', 'Repentance'),
    makePrayer('thanksgiving-prayers', 'Thanksgiving Prayers', 'Gratitude'),
    makePrayer('intercessory-prayers', 'Intercessory Prayers', 'Prayer for Others'),
    makePrayer('petitionary-prayers', 'Petitionary Prayers', 'Personal Request'),
    makePrayer('adoration-prayers', 'Adoration Prayers', 'Worship'),
    makePrayer('praise-prayers', 'Praise Prayers', 'Exaltation'),
    makePrayer('lamentation-prayers', 'Lamentation Prayers', 'Sorrow / Complaint'),
    makePrayer('liturgical-prayers', 'Liturgical Prayers', 'Structured Worship'),
    makePrayer('prayers-of-penitence', 'Prayers of Penitence', 'Contrition'),
    makePrayer('meditative-prayers', 'Meditative Prayers', 'Quiet Reflection'),
  ],

  jewish: [
    makePrayer('shacharit', 'Shacharit', 'Morning Prayer'),
    makePrayer('mincha', 'Mincha', 'Afternoon Prayer'),
    makePrayer('maariv', 'Maariv', 'Evening Prayer'),
    makePrayer('kabbalat-shabbat', 'Kabbalat Shabbat', 'Sabbath Welcome'),
    makePrayer('mussaf', 'Mussaf', 'Additional Service'),
    makePrayer('hallel', 'Hallel', 'Praise / Thanksgiving'),
    makePrayer('vidui', 'Vidui', 'Confession'),
    makePrayer('selichot', 'Selichot', 'Forgiveness Prayers'),
    makePrayer('tehillim', 'Tehillim', 'Psalms Recitation'),
    makePrayer('tashlich', 'Tashlich', 'Casting Away'),
    makePrayer('birkat-hamazon', 'Birkat Hamazon', 'Grace After Meals'),
    makePrayer('tefilat-haderech', 'Tefilat Haderech', 'Traveler’s Prayer'),
  ],

  muslim: [
    makePrayer('salah', 'Salah', 'Ritual Prayer'),
    makePrayer('dua', 'Dua', 'Personal Supplication'),
    makePrayer('dhikr', 'Dhikr', 'Remembrance'),
    makePrayer('istighfar', 'Istighfar', 'Seeking Forgiveness'),
    makePrayer('istikhara', 'Istikhara', 'Prayer for Guidance'),
  ],

  hindu: [
    makePrayer('gayatri', 'Gayatri', 'Sacred Mantra'),
    makePrayer('bhakti', 'Bhakti', 'Devotion'),
    makePrayer('stuti', 'Stuti', 'Praise'),
    makePrayer('prarthana', 'Prarthana', 'Personal Request'),
    makePrayer('shanti-path', 'Shanti Path', 'Peace Prayer'),
    makePrayer('sankalpa', 'Sankalpa', 'Intention Setting'),
    makePrayer('arti', 'Arti', 'Devotional Offering'),
    makePrayer('kshama-prarthana', 'Kshama Prarthana', 'Forgiveness'),
  ],

  buddhist: [
    makePrayer('refuge', 'Refuge', 'Taking Refuge'),
    makePrayer('metta', 'Metta', 'Loving-Kindness'),
    makePrayer('aspiration', 'Aspiration', 'Sacred Wish'),
    makePrayer('dedication-of-merit', 'Dedication of Merit', 'Merit Sharing'),
    makePrayer('repentance', 'Repentance', 'Purification'),
    makePrayer('chanting', 'Chanting', 'Sacred Recitation'),
    makePrayer('offering', 'Offering', 'Devotional Offering'),
  ],
};

export function getPrayerOptions(tradition: TraditionKey): PrayerEntry[] {
  return PRAYER_CATALOG[tradition] ?? [];
}