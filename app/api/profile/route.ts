// /app/api/profile/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type UpdateProfileBody = {
  firstName?: string;
  lastName?: string;
  displayName?: string;
  city?: string;
  stateRegion?: string;
  country?: string;
  zipCode?: string;
};

function cleanText(value: unknown, maxLength = 120) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function cleanDisplayName(value: unknown) {
  return cleanText(value, 80);
}

function cleanZipCode(value: unknown) {
  return cleanText(value, 20);
}

export async function PATCH(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = (await req.json()) as UpdateProfileBody;

    const firstName = cleanText(body.firstName, 80);
    const lastName = cleanText(body.lastName, 80);
    const displayName = cleanDisplayName(body.displayName);
    const city = cleanText(body.city, 120);
    const stateRegion = cleanText(body.stateRegion, 120);
    const country = cleanText(body.country, 120);
    const zipCode = cleanZipCode(body.zipCode);

    const supabaseAdmin = createSupabaseAdminClient();

    const { data: existingProfile, error: fetchError } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("clerk_user_id", userId)
      .maybeSingle();

    if (fetchError) {
      return NextResponse.json(
        {
          error: "Could not load profile before saving.",
          details: fetchError.message,
        },
        { status: 500 }
      );
    }

    const profilePayload = {
      first_name: firstName || null,
      last_name: lastName || null,
      display_name: displayName || null,
      city: city || null,
      state_region: stateRegion || null,
      country: country || null,
      postal_code: zipCode || null,
      updated_at: new Date().toISOString(),
    };

    if (existingProfile) {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .update(profilePayload)
        .eq("clerk_user_id", userId)
        .select(
          `
            first_name,
            last_name,
            display_name,
            city,
            state_region,
            country,
            postal_code
          `
        )
        .single();

      if (error) {
        return NextResponse.json(
          {
            error: "Could not update profile.",
            details: error.message,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        ok: true,
        profile: {
          firstName: data.first_name ?? "",
          lastName: data.last_name ?? "",
          displayName: data.display_name ?? "",
          city: data.city ?? "",
          stateRegion: data.state_region ?? "",
          country: data.country ?? "",
          zipCode: data.postal_code ?? "",
        },
      });
    }

    const { data, error } = await supabaseAdmin
      .from("profiles")
      .insert({
        clerk_user_id: userId,
        ...profilePayload,
      })
      .select(
        `
          first_name,
          last_name,
          display_name,
          city,
          state_region,
          country,
          postal_code
        `
      )
      .single();

    if (error) {
      return NextResponse.json(
        {
          error: "Could not create profile.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      profile: {
        firstName: data.first_name ?? "",
        lastName: data.last_name ?? "",
        displayName: data.display_name ?? "",
        city: data.city ?? "",
        stateRegion: data.state_region ?? "",
        country: data.country ?? "",
        zipCode: data.postal_code ?? "",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong while saving your profile.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}