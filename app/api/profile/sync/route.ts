// /app/api/profile/sync/route.ts

import { NextResponse } from 'next/server';
import { getOrCreateProfile } from '@/lib/profile/getOrCreateProfile';

export async function GET() {
  try {
    const profile = await getOrCreateProfile();

    return NextResponse.json({
      ok: true,
      profile,
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