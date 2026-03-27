// /app/api/member/activate-test/route.ts

import { NextResponse } from 'next/server';
import { getOrCreateProfile } from '@/lib/profile/getOrCreateProfile';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';

export async function GET() {
  try {
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        {
          ok: false,
          error: 'Test member activation is disabled in production.',
        },
        { status: 403 }
      );
    }

    const profile = await getOrCreateProfile();
    const supabase = createSupabaseAdminClient();

    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from('member_status')
      .upsert(
        {
          profile_id: profile.id,
          is_member: true,
          support_type: 'manual',
          member_since: now,
          last_support_at: now,
        },
        {
          onConflict: 'profile_id',
        }
      )
      .select('*')
      .single();

    if (error) {
      throw new Error(`Failed to activate test membership: ${error.message}`);
    }

    return NextResponse.json({
      ok: true,
      message: 'Test membership activated.',
      profile,
      memberStatus: data,
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