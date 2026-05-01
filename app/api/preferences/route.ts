// /app/api/preferences/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type UpdatePreferencesBody = {
  preferredTradition?: string;
  preferredPrayerStyle?: string;
  preferredPrayerType?: string;
  preferredVoiceId?: string;
  preferredVoiceLabel?: string;
  useSavedPrayerPreferences?: boolean;
};

function cleanText(value: unknown, maxLength = 120) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function cleanBoolean(value: unknown) {
  return value === true;
}

export async function PATCH(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = (await req.json()) as UpdatePreferencesBody;

    const preferredTradition = cleanText(body.preferredTradition, 80);
    const preferredPrayerStyle = cleanText(body.preferredPrayerStyle, 80);
    const preferredPrayerType = cleanText(body.preferredPrayerType, 120);
    const preferredVoiceId = cleanText(body.preferredVoiceId, 180);
    const preferredVoiceLabel = cleanText(body.preferredVoiceLabel, 120);
    const useSavedPrayerPreferences = cleanBoolean(
      body.useSavedPrayerPreferences
    );

    const supabaseAdmin = createSupabaseAdminClient();

    const { data: existingProfile, error: fetchError } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("clerk_user_id", userId)
      .maybeSingle();

    if (fetchError) {
      return NextResponse.json(
        {
          error: "Could not load preferences before saving.",
          details: fetchError.message,
        },
        { status: 500 }
      );
    }

    const preferencesPayload = {
      preferred_tradition: preferredTradition || null,
      preferred_prayer_style: preferredPrayerStyle || null,
      preferred_prayer_type: preferredPrayerType || null,
      preferred_voice_id: preferredVoiceId || null,
      preferred_voice_label: preferredVoiceLabel || null,
      use_saved_prayer_preferences: useSavedPrayerPreferences,
      updated_at: new Date().toISOString(),
    };

    const selectPreferences = `
      preferred_tradition,
      preferred_prayer_style,
      preferred_prayer_type,
      preferred_voice_id,
      preferred_voice_label,
      use_saved_prayer_preferences
    `;

    if (existingProfile) {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .update(preferencesPayload)
        .eq("clerk_user_id", userId)
        .select(selectPreferences)
        .single();

      if (error) {
        return NextResponse.json(
          {
            error: "Could not update preferences.",
            details: error.message,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        ok: true,
        preferences: {
          preferredTradition: data.preferred_tradition ?? "",
          preferredPrayerStyle: data.preferred_prayer_style ?? "",
          preferredPrayerType: data.preferred_prayer_type ?? "",
          preferredVoiceId: data.preferred_voice_id ?? "",
          preferredVoiceLabel: data.preferred_voice_label ?? "",
          useSavedPrayerPreferences:
            data.use_saved_prayer_preferences ?? false,
        },
      });
    }

    const { data, error } = await supabaseAdmin
      .from("profiles")
      .insert({
        clerk_user_id: userId,
        ...preferencesPayload,
      })
      .select(selectPreferences)
      .single();

    if (error) {
      return NextResponse.json(
        {
          error: "Could not create preferences.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      preferences: {
        preferredTradition: data.preferred_tradition ?? "",
        preferredPrayerStyle: data.preferred_prayer_style ?? "",
        preferredPrayerType: data.preferred_prayer_type ?? "",
        preferredVoiceId: data.preferred_voice_id ?? "",
        preferredVoiceLabel: data.preferred_voice_label ?? "",
        useSavedPrayerPreferences: data.use_saved_prayer_preferences ?? false,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong while saving your preferences.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}