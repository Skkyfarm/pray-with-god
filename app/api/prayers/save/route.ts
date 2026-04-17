// /app/api/prayers/save/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getOrCreateProfile } from "@/lib/profile/getOrCreateProfile";

type SavePrayerBody = {
  generatedPrayerId?: string;
};

type MemberStatusRow = {
  is_member?: boolean | null;
  support_type?: string | null;
  support_started_at?: string | null;
  support_expires_at?: string | null;
  last_support_at?: string | null;
  lifetime_support_total?: number | null;
  founding_supporter?: boolean | null;
};

type SaveAccessState = "active" | "expired_member" | "not_member";

function hasSupportHistory(memberStatus: MemberStatusRow | null) {
  if (!memberStatus) {
    return false;
  }

  const supportType = (memberStatus.support_type || "").trim().toLowerCase();
  const hasRealSupportType = supportType !== "" && supportType !== "none";

  return Boolean(
    hasRealSupportType ||
      memberStatus.support_started_at ||
      memberStatus.support_expires_at ||
      memberStatus.last_support_at ||
      memberStatus.founding_supporter ||
      (typeof memberStatus.lifetime_support_total === "number" &&
        memberStatus.lifetime_support_total > 0)
  );
}

function getSaveAccessState(memberStatus: MemberStatusRow | null): SaveAccessState {
  if (!memberStatus) {
    return "not_member";
  }

  if (memberStatus.is_member) {
    if (!memberStatus.support_expires_at) {
      return "active";
    }

    const expiresAt = new Date(memberStatus.support_expires_at);

    if (!Number.isNaN(expiresAt.getTime()) && expiresAt.getTime() > Date.now()) {
      return "active";
    }

    return "expired_member";
  }

  return hasSupportHistory(memberStatus) ? "expired_member" : "not_member";
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
        "is_member, support_type, support_started_at, support_expires_at, last_support_at, lifetime_support_total, founding_supporter"
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

    const saveAccessState = getSaveAccessState(memberStatus || null);

    if (saveAccessState !== "active") {
      const isExpired = saveAccessState === "expired_member";

      return NextResponse.json(
        {
          error: isExpired
            ? "Your PWG support appears to have lapsed. Renew support to keep saving prayers."
            : "Support PWG to save prayers.",
          errorCode: saveAccessState,
          supportRequired: true,
        },
        { status: 403 }
      );
    }

    const { data: generatedPrayer, error: generatedPrayerError } = await supabaseAdmin
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

    const { data: existingSavedPrayer, error: existingSavedPrayerError } = await supabaseAdmin
      .from("saved_prayers")
      .select("id, generated_prayer_id")
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
      return NextResponse.json({
        ok: true,
        alreadySaved: true,
        savedPrayerId: existingSavedPrayer.id,
      });
    }

    const { data: insertedSavedPrayer, error: insertedSavedPrayerError } = await supabaseAdmin
      .from("saved_prayers")
      .insert({
        profile_id: profileId,
        generated_prayer_id: generatedPrayerId,
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