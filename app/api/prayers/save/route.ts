// /app/api/prayers/save/route.ts

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getOrCreateProfile } from "@/lib/profile/getOrCreateProfile";
import {
  getAccountCapabilities,
  type MemberStatusLike,
} from "@/lib/accountCapabilities";

type SavePrayerBody = {
  generatedPrayerId?: string;
};

type MemberStatusRow = MemberStatusLike & {
  id?: string | null;
  profile_id?: string | null;
};

function getInactiveSupportErrorCode(memberStatus: MemberStatusRow | null) {
  const supportStatus = memberStatus?.support_status ?? "none";

  if (supportStatus === "expired" || supportStatus === "canceled") {
    return "expired_member";
  }

  return "not_member";
}

function getInactiveSupportMessage(memberStatus: MemberStatusRow | null) {
  const errorCode = getInactiveSupportErrorCode(memberStatus);

  if (errorCode === "expired_member") {
    return "Your PWG support appears to have lapsed. Renew support to keep saving prayers.";
  }

  return "Support PWG to save prayers.";
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          error: "Join PWG to save prayers.",
          errorCode: "auth_required",
          supportRequired: false,
        },
        { status: 401 }
      );
    }

    const body = (await req.json()) as SavePrayerBody;
    const generatedPrayerId = String(body?.generatedPrayerId || "").trim();

    if (!generatedPrayerId) {
      return NextResponse.json(
        { error: "Missing generatedPrayerId." },
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
          "id",
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

    if (!capabilities.canSavePrayers) {
      return NextResponse.json(
        {
          error: getInactiveSupportMessage(memberStatus || null),
          errorCode: getInactiveSupportErrorCode(memberStatus || null),
          supportRequired: true,
          viewerKind: capabilities.viewerKind,
        },
        { status: 403 }
      );
    }

    const { data: generatedPrayer, error: generatedPrayerError } =
      await supabaseAdmin
        .from("generated_prayers")
        .select("id, profile_id")
        .eq("id", generatedPrayerId)
        .eq("profile_id", profileId)
        .maybeSingle();

    if (generatedPrayerError) {
      return NextResponse.json(
        {
          error: "Could not verify generated prayer.",
          details: generatedPrayerError.message,
        },
        { status: 500 }
      );
    }

    if (!generatedPrayer) {
      return NextResponse.json(
        { error: "Prayer not found for this account." },
        { status: 404 }
      );
    }

    const { data: existingSavedPrayer, error: existingSavedPrayerError } =
      await supabaseAdmin
        .from("saved_prayers")
        .select("id, generated_prayer_id, is_deleted")
        .eq("profile_id", profileId)
        .eq("generated_prayer_id", generatedPrayerId)
        .maybeSingle();

    if (existingSavedPrayerError) {
      return NextResponse.json(
        {
          error: "Could not check existing saved prayer.",
          details: existingSavedPrayerError.message,
        },
        { status: 500 }
      );
    }

    if (existingSavedPrayer?.id) {
      if (existingSavedPrayer.is_deleted) {
        const { error: restoreSavedPrayerError } = await supabaseAdmin
          .from("saved_prayers")
          .update({
            is_deleted: false,
            deleted_at: null,
          })
          .eq("id", existingSavedPrayer.id)
          .eq("profile_id", profileId);

        if (restoreSavedPrayerError) {
          return NextResponse.json(
            {
              error: "Could not restore saved prayer.",
              details: restoreSavedPrayerError.message,
            },
            { status: 500 }
          );
        }

        return NextResponse.json({
          ok: true,
          alreadySaved: false,
          restored: true,
          savedPrayerId: existingSavedPrayer.id,
        });
      }

      return NextResponse.json({
        ok: true,
        alreadySaved: true,
        savedPrayerId: existingSavedPrayer.id,
      });
    }

    const { data: insertedSavedPrayer, error: insertedSavedPrayerError } =
      await supabaseAdmin
        .from("saved_prayers")
        .insert({
          profile_id: profileId,
          generated_prayer_id: generatedPrayerId,
          title: "Saved Prayer",
          is_deleted: false,
        })
        .select("id")
        .single();

    if (insertedSavedPrayerError) {
      return NextResponse.json(
        {
          error: "Could not save prayer.",
          details: insertedSavedPrayerError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      alreadySaved: false,
      savedPrayerId: insertedSavedPrayer.id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong while saving the prayer.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}