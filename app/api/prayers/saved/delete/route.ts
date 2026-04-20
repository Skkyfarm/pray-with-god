// /app/api/prayers/saved/delete/route.ts

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getOrCreateProfile } from "@/lib/profile/getOrCreateProfile";
import {
  getAccountCapabilities,
  type MemberStatusLike,
} from "@/lib/accountCapabilities";

type DeleteSavedPrayerBody = {
  savedPrayerId?: string;
};

type MemberStatusRow = MemberStatusLike & {
  profile_id?: string | null;
};

type SavedPrayerRow = {
  id: string;
  profile_id: string;
  is_deleted: boolean | null;
};

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          error: "Sign in to manage saved prayers.",
          errorCode: "auth_required",
        },
        { status: 401 }
      );
    }

    const body = (await req.json()) as DeleteSavedPrayerBody;
    const savedPrayerId = String(body?.savedPrayerId || "").trim();

    if (!savedPrayerId) {
      return NextResponse.json(
        {
          error: "Missing savedPrayerId.",
          errorCode: "missing_saved_prayer_id",
        },
        { status: 400 }
      );
    }

    const supabaseAdmin = createSupabaseAdminClient();
    const profile = await getOrCreateProfile();
    const profileId = profile.id;

    const { data: memberStatus, error: memberStatusError } = await supabaseAdmin
      .from("member_status")
      .select(
        [
          "profile_id",
          "is_member",
          "support_type",
          "support_status",
          "support_plan",
          "support_current_period_end",
          "support_canceled_at",
          "lifetime_support_cents",
        ].join(", ")
      )
      .eq("profile_id", profileId)
      .maybeSingle<MemberStatusRow>();

    if (memberStatusError) {
      return NextResponse.json(
        {
          error: "Could not verify supporter status.",
          details: memberStatusError.message,
        },
        { status: 500 }
      );
    }

    const capabilities = getAccountCapabilities({
      userId,
      memberStatus: memberStatus || null,
    });

    if (!capabilities.canDeleteSavedPrayers) {
      return NextResponse.json(
        {
          error: "Support PWG to manage saved prayers.",
          errorCode: "support_required",
          supportRequired: true,
          viewerKind: capabilities.viewerKind,
        },
        { status: 403 }
      );
    }

    const { data: savedPrayer, error: savedPrayerError } = await supabaseAdmin
      .from("saved_prayers")
      .select("id, profile_id, is_deleted")
      .eq("id", savedPrayerId)
      .eq("profile_id", profileId)
      .maybeSingle<SavedPrayerRow>();

    if (savedPrayerError) {
      return NextResponse.json(
        {
          error: "Could not load saved prayer.",
          details: savedPrayerError.message,
        },
        { status: 500 }
      );
    }

    if (!savedPrayer) {
      return NextResponse.json(
        {
          error: "Saved prayer not found for this account.",
          errorCode: "not_found",
        },
        { status: 404 }
      );
    }

    if (savedPrayer.is_deleted) {
      return NextResponse.json({
        ok: true,
        alreadyDeleted: true,
        savedPrayerId,
      });
    }

    const { error: deleteError } = await supabaseAdmin
      .from("saved_prayers")
      .update({
        is_deleted: true,
        deleted_at: new Date().toISOString(),
      })
      .eq("id", savedPrayerId)
      .eq("profile_id", profileId);

    if (deleteError) {
      return NextResponse.json(
        {
          error: "Could not delete saved prayer.",
          details: deleteError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      alreadyDeleted: false,
      savedPrayerId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong while deleting the saved prayer.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}