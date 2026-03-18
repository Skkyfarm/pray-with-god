export type PrayerTypeLinkTradition =
  | 'protestant'
  | 'catholic'
  | 'jewish'
  | 'muslim'
  | 'hindu'
  | 'buddhist'
  | 'exploring';

const PROTESTANT_DEFINITION_BASE = '/prayer-types/protestant';

/**
 * Map only the Protestant prayer-type pages that actually exist right now.
 * Add more entries here as you create more definition pages.
 */
const PROTESTANT_PRAYER_TYPE_SLUGS: Record<string, string> = {
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

  if (!normalizedTradition || !prayerType) return null;

  if (normalizedTradition === 'protestant') {
    const slug = PROTESTANT_PRAYER_TYPE_SLUGS[prayerType];
    return slug ? `${PROTESTANT_DEFINITION_BASE}/${slug}` : null;
  }

  return null;
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