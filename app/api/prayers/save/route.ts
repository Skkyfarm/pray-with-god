// /app/api/prayers/save/route.ts

import { NextResponse } from 'next/server';
import { getMemberStatus } from '@/lib/member/getMemberStatus';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';

type SavePrayerBody = {
  tradition?: string;
  prayerMode?: 'quick' | 'custom' | 'type';
  prayerTypeSlug?: string | null;
  prayerTypeLabel?: string | null;
  feelings?: string[];
  userInput?: string | null;
  generatedText?: string;
  userTitle?: string | null;
};

async function savePrayer(body: SavePrayerBody) {
  const tradition = body.tradition?.trim();
  const prayerMode = body.prayerMode;
  const prayerTypeSlug = body.prayerTypeSlug?.trim() || null;
  const prayerTypeLabel = body.prayerTypeLabel?.trim() || null;
  const userInput = body.userInput?.trim() || null;
  const generatedText = body.generatedText?.trim();
  const userTitle = body.userTitle?.trim() || null;

  const feelings = Array.isArray(body.feelings)
    ? body.feelings
        .filter((value): value is string => typeof value === 'string')
        .map((value) => value.trim())
        .filter(Boolean)
    : [];

  if (!tradition) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Missing tradition.',
      },
      { status: 400 }
    );
  }

  if (!prayerMode || !['quick', 'custom', 'type'].includes(prayerMode)) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Missing or invalid prayerMode.',
      },
      { status: 400 }
    );
  }

  if (!generatedText) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Missing generatedText.',
      },
      { status: 400 }
    );
  }

  const { profile, memberStatus } = await getMemberStatus();

  if (!memberStatus.is_member) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Membership required to save prayers.',
      },
      { status: 403 }
    );
  }

  const supabase = createSupabaseAdminClient();
  // /app/api/prayers/save/route.ts

  const { data: generatedPrayer, error: generatedPrayerError } = await supabase
    .from('generated_prayers')
    .insert({
      profile_id: profile.id,
      tradition,
      prayer_mode: prayerMode,
      prayer_type_slug: prayerTypeSlug,
      prayer_type_label: prayerTypeLabel,
      feelings,
      user_input: userInput,
      generated_text: generatedText,
    })
    .select('*')
    .single();

  if (generatedPrayerError) {
    throw new Error(
      `Failed to save generated prayer: ${generatedPrayerError.message}`
    );
  }

  const { data: savedPrayer, error: savedPrayerError } = await supabase
    .from('saved_prayers')
    .insert({
      profile_id: profile.id,
      generated_prayer_id: generatedPrayer.id,
      user_title: userTitle,
    })
    .select('*')
    .single();

  if (savedPrayerError) {
    throw new Error(`Failed to save prayer record: ${savedPrayerError.message}`);
  }

  return NextResponse.json({
    ok: true,
    message: 'Prayer saved successfully.',
    generatedPrayer,
    savedPrayer,
  });
}
// /app/api/prayers/save/route.ts

export async function GET() {
  try {
    return await savePrayer({
      tradition: 'protestant',
      prayerMode: 'quick',
      prayerTypeSlug: null,
      prayerTypeLabel: null,
      feelings: ['Gratitude', 'Hope'],
      userInput: 'Please help me trust God today.',
      generatedText:
        'Lord, thank You for this day. Help me trust You, walk in peace, and remember Your care.',
      userTitle: 'Trust God Today',
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SavePrayerBody;
    return await savePrayer(body);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 }
    );
  }
}