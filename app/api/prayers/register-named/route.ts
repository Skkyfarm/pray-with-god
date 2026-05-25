import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getOrCreateProfile } from "@/lib/profile/getOrCreateProfile";

export const runtime = "nodejs";

type RegisterNamedPrayerBody = {
  tradition?: string;
  prayerLabel?: string;
  generatedText?: string;
};

const SUPPORTED_NAMED_PRAYER_TRADITIONS = new Set(["catholic", "protestant"]);

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Sign in to save this named prayer." },
        { status: 401 }
      );
    }

    const body = (await req.json()) as RegisterNamedPrayerBody;

    const tradition = cleanString(body.tradition).toLowerCase();
    const prayerLabel = cleanString(body.prayerLabel);
    const generatedText = cleanString(body.generatedText);

    if (!SUPPORTED_NAMED_PRAYER_TRADITIONS.has(tradition)) {
      return NextResponse.json(
        { error: "Unsupported named prayer tradition." },
        { status: 400 }
      );
    }

    if (!prayerLabel || !generatedText) {
      return NextResponse.json(
        { error: "Missing named prayer label or text." },
        { status: 400 }
      );
    }

    const profile = await getOrCreateProfile();
    const supabaseAdmin = createSupabaseAdminClient();

    const { data, error } = await supabaseAdmin
      .from("generated_prayers")
      .insert({
        profile_id: profile.id,
        tradition,
        prayer_mode: "quick",
        prayer_type_slug: null,
        prayer_type_label: prayerLabel,
        feelings: [],
        user_input: null,
        generated_text: generatedText,
      })
      .select("id")
      .single();

    if (error) {
      return NextResponse.json(
        {
          error: "Could not register named prayer for saving.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    const generatedPrayerId = data?.id ?? null;

    return NextResponse.json({
      ok: true,
      generatedPrayerId,
      generated_prayer_id: generatedPrayerId,
      generatedPrayer: generatedPrayerId ? { id: generatedPrayerId } : null,
      generated_prayer: generatedPrayerId ? { id: generatedPrayerId } : null,
    });
  } catch (err) {
    return NextResponse.json(
      {
        error: "Could not register named prayer for saving.",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}