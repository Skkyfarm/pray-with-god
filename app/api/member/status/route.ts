// /app/api/member/status/route.ts

import { NextResponse } from 'next/server';
import { getMemberStatus } from '@/lib/member/getMemberStatus';

export async function GET() {
  try {
    const result = await getMemberStatus();

    return NextResponse.json({
      ok: true,
      profile: result.profile,
      memberStatus: result.memberStatus,
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