// /app/api/profile/route.ts
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type UpdateProfileBody = {
  displayName?: string;
  zipCode?: string;
};

function cleanDisplayName(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 80);
}

function cleanZipCode(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 20);
}

export async function PATCH(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = (await req.json()) as UpdateProfileBody;

    const displayName = cleanDisplayName(body.displayName);
    const zipCode = cleanZipCode(body.zipCode);

    const supabaseAdmin = createSupabaseAdminClient();

    const { data: existingProfile, error: fetchError } = await supabaseAdmin
      .from("profiles")
      .select("id, display_name, zip_code")
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

    if (existingProfile) {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .update({
          display_name: displayName || null,
          zip_code: zipCode || null,
          updated_at: new Date().toISOString(),
        })
        .eq("clerk_user_id", userId)
        .select("display_name, zip_code")
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
          displayName: data.display_name ?? "",
          zipCode: data.zip_code ?? "",
        },
      });
    }

    const { data, error } = await supabaseAdmin
      .from("profiles")
      .insert({
        clerk_user_id: userId,
        display_name: displayName || null,
        zip_code: zipCode || null,
        updated_at: new Date().toISOString(),
      })
      .select("display_name, zip_code")
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
        displayName: data.display_name ?? "",
        zipCode: data.zip_code ?? "",
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