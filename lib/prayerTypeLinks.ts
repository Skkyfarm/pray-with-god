export type PrayerTypeLinkTradition =
  | 'protestant'
  | 'catholic'
  | 'jewish'
  | 'muslim'
  | 'hindu'
  | 'buddhist'
  | 'exploring';

const DEFINITION_BASES: Record<PrayerTypeLinkTradition, string> = {
  protestant: '/prayer-types/protestant',
  catholic: '/prayer-types/catholic',
  jewish: '/prayer-types/jewish',
  muslim: '/prayer-types/muslim',
  hindu: '/prayer-types/hindu',
  buddhist: '/prayer-types/buddhist',
  exploring: '/prayer-types/exploring',
};

/**
 * Map only the prayer-type pages that actually exist right now.
 * Add more entries here as you create more definition pages.
 */
const PRAYER_TYPE_SLUGS_BY_TRADITION: Partial<
  Record<PrayerTypeLinkTradition, Record<string, string>>
> = {
  protestant: {
    'Thanksgiving Prayers': 'thanksgiving-prayers',
    'Meditative Prayers': 'meditative-prayers',
    'Intercessory Prayers': 'intercessory-prayers',
    'Petitionary Prayers': 'petitionary-prayers',
    'Praise Prayers': 'praise-prayers',
    'Confession Prayers': 'confession-prayers',
    'Adoration Prayers': 'adoration-prayers',
    'Evening Prayers': 'evening-prayers',
    'Guidance Prayers': 'guidance-prayers',
    'Healing Prayers': 'healing-prayers',
    'Lament Prayers': 'lament-prayers',
    'Morning Prayers': 'morning-prayers',
    'Protection Prayers': 'protection-prayers',
  },

  catholic: {
    'Adoration': 'adoration',
    'Contrition': 'contrition',
    'Thanksgiving': 'thanksgiving',
    'Petition': 'petition',
    'Intercession': 'intercession',
    'Marian Devotion': 'marian-devotion',
    'Eucharistic Devotion': 'eucharistic-devotion',
    'Prayers for Mercy': 'prayers-for-mercy',
    'Prayers for Guidance': 'prayers-for-guidance',
    'Examination of Conscience': 'examination-of-conscience',
    'Prayers for the Sick': 'prayers-for-the-sick',
    'Prayers for the Dying': 'prayers-for-the-dying',
    'Family Prayers': 'family-prayers',
    'Vocational Discernment Prayers': 'vocational-discernment-prayers',
    'Morning Offering': 'morning-offering',
    'Night Prayer': 'night-prayer',
    'Advent Prayers': 'advent-prayers',
    'Lenten Prayers': 'lenten-prayers',
    'Easter Prayers': 'easter-prayers',
    'Saint-inspired Prayers': 'saint-inspired-prayers',
  },
};

export function normalizePrayerTypeLinkTradition(
  value?: string | null
): PrayerTypeLinkTradition | null {
  switch ((value || '').toLowerCase().trim()) {
    case 'christian':
    case 'protestant':
      return 'protestant';
    case 'catholic':
      return 'catholic';
    case 'jewish':
      return 'jewish';
    case 'muslim':
      return 'muslim';
    case 'hindu':
      return 'hindu';
    case 'buddhist':
      return 'buddhist';
    case 'grace':
    case 'exploring':
      return 'exploring';
    default:
      return null;
  }
}

export function getPrayerTypeDefinitionHref(
  tradition?: string | null,
  prayerType?: string | null
): string | null {
  const normalizedTradition = normalizePrayerTypeLinkTradition(tradition);

  if (!normalizedTradition || !prayerType?.trim()) return null;

  const traditionMap = PRAYER_TYPE_SLUGS_BY_TRADITION[normalizedTradition];
  const base = DEFINITION_BASES[normalizedTradition];

  if (!traditionMap || !base) return null;

  const slug = traditionMap[prayerType.trim()];
  return slug ? `${base}/${slug}` : null;
}

export function getPrayerTypePrayHref(
  tradition?: string | null,
  prayerType?: string | null
): string {
  const normalizedTradition =
    normalizePrayerTypeLinkTradition(tradition) || 'protestant';

  const params = new URLSearchParams();
  params.set('path', normalizedTradition);

  if (prayerType?.trim()) {
    params.set('prayerType', prayerType.trim());
  }

  return `/pray?${params.toString()}`;
}