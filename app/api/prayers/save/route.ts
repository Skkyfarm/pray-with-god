// /app/api/prayers/save/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type SavePrayerBody = {
  generatedPrayerId?: string;
};

async function getOrCreateProfileId(clerkUserId: string) {
  const supabaseAdmin = createSupabaseAdminClient();

  const { data: existingProfile, error: existingProfileError } =
    await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("clerk_user_id", clerkUserId)
      .maybeSingle();

  if (existingProfileError) {
    throw new Error(`Could not load profile: ${existingProfileError.message}`);
  }

  if (existingProfile?.id) {
    return existingProfile.id as string;
  }

  const { data: insertedProfile, error: insertedProfileError } =
    await supabaseAdmin
      .from("profiles")
      .insert({
        clerk_user_id: clerkUserId,
        updated_at: new Date().toISOString(),
      })
      .select("id")
      .single();

  if (insertedProfileError) {
    throw new Error(`Could not create profile: ${insertedProfileError.message}`);
  }

  return insertedProfile.id as string;
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
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
    const profileId = await getOrCreateProfileId(userId);

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
        { error: "Prayer not found for this member." },
        { status: 404 }
      );
    }

    const { data: existingSavedPrayer, error: existingSavedPrayerError } =
      await supabaseAdmin
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

    const { data: insertedSavedPrayer, error: insertedSavedPrayerError } =
      await supabaseAdmin
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
