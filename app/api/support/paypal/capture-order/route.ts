// /app/api/support/paypal/capture-order/route.ts

import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getOrCreateProfile } from "@/lib/profile/getOrCreateProfile";

export const runtime = "nodejs";

type CapturePayPalOrderBody = {
  paypalOrderId?: string;
};

type PayPalAccessTokenResponse = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
};

type PayPalCaptureResponse = {
  id?: string;
  status?: string;
  payer?: {
    payer_id?: string;
    email_address?: string;
  };
  purchase_units?: Array<{
    reference_id?: string;
    custom_id?: string;
    payments?: {
      captures?: Array<{
        id?: string;
        status?: string;
        custom_id?: string;
        amount?: {
          currency_code?: string;
          value?: string;
        };
        final_capture?: boolean;
        create_time?: string;
        update_time?: string;
      }>;
    };
  }>;
};

type SupportOrderRow = {
  id: string;
  profile_id: string | null;
  status: string;
  provider_order_id: string | null;
  provider_capture_id: string | null;
  provider_payer_id: string | null;
  support_plan: string;
  support_type: string;
  amount_cents: number;
  currency: string;
  support_term_months: number;
  metadata: unknown;
};

type ExistingMemberStatusRow = {
  member_since: string | null;
  lifetime_support_cents: number | null;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getPayPalApiBase(): string {
  return (
    process.env.PAYPAL_API_BASE?.replace(/\/$/, "") ||
    "https://api-m.sandbox.paypal.com"
  );
}

function asRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return value as Record<string, unknown>;
}

function addMonths(date: Date, months: number): Date {
  const next = new Date(date);
  next.setMonth(next.getMonth() + months);
  return next;
}

function paypalAmountToCents(value: string | null | undefined): number | null {
  if (!value) return null;

  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return null;
  }

  return Math.round(amount * 100);
}

async function getPayPalAccessToken(): Promise<string> {
  const clientId = getRequiredEnv("PAYPAL_CLIENT_ID");
  const clientSecret = getRequiredEnv("PAYPAL_CLIENT_SECRET");
  const paypalApiBase = getPayPalApiBase();

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const response = await fetch(`${paypalApiBase}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = (await response.json()) as PayPalAccessTokenResponse;

  if (!response.ok || !data.access_token) {
    throw new Error(
      `Failed to get PayPal access token: ${response.status} ${JSON.stringify(
        data
      )}`
    );
  }

  return data.access_token;
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Sign in or create a free account before supporting PWG for account benefits.",
          errorCode: "auth_required",
        },
        { status: 401 }
      );
    }

    const body = (await req.json().catch(() => ({}))) as CapturePayPalOrderBody;
    const paypalOrderId = String(body.paypalOrderId || "").trim();

    if (!paypalOrderId) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing PayPal order ID.",
        },
        { status: 400 }
      );
    }

    const profile = await getOrCreateProfile();
    const supabaseAdmin = createSupabaseAdminClient();

    const { data: supportOrder, error: supportOrderError } = await supabaseAdmin
      .from("support_orders")
      .select(
        [
          "id",
          "profile_id",
          "status",
          "provider_order_id",
          "provider_capture_id",
          "provider_payer_id",
          "support_plan",
          "support_type",
          "amount_cents",
          "currency",
          "support_term_months",
          "metadata",
        ].join(", ")
      )
      .eq("provider", "paypal")
      .eq("provider_order_id", paypalOrderId)
      .eq("profile_id", profile.id)
      .maybeSingle<SupportOrderRow>();

    if (supportOrderError) {
      return NextResponse.json(
        {
          ok: false,
          error: "Could not load PWG support order.",
          details: supportOrderError.message,
        },
        { status: 500 }
      );
    }

    if (!supportOrder) {
      return NextResponse.json(
        {
          ok: false,
          error: "No matching PWG support order found for this account.",
        },
        { status: 404 }
      );
    }

    if (
      supportOrder.status === "completed" &&
      supportOrder.provider_capture_id
    ) {
      return NextResponse.json({
        ok: true,
        alreadyCompleted: true,
        supportOrderId: supportOrder.id,
        providerCaptureId: supportOrder.provider_capture_id,
      });
    }

    const paypalApiBase = getPayPalApiBase();
    const accessToken = await getPayPalAccessToken();

    const captureResponse = await fetch(
      `${paypalApiBase}/v2/checkout/orders/${encodeURIComponent(
        paypalOrderId
      )}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const captureData = (await captureResponse.json()) as PayPalCaptureResponse;

    if (!captureResponse.ok) {
      await supabaseAdmin
        .from("support_orders")
        .update({
          status: "failed",
          failed_at: new Date().toISOString(),
          metadata: {
            ...asRecord(supportOrder.metadata),
            paypal_capture_error: captureData,
          },
          updated_at: new Date().toISOString(),
        })
        .eq("id", supportOrder.id);

      return NextResponse.json(
        {
          ok: false,
          error: "Could not capture PayPal order.",
          details: captureData,
        },
        { status: 502 }
      );
    }

    const purchaseUnit = captureData.purchase_units?.[0] || null;
    const capture = purchaseUnit?.payments?.captures?.[0] || null;

    const captureId = capture?.id || null;
    const captureStatus = capture?.status || captureData.status || null;
    const payerId = captureData.payer?.payer_id || null;
    const referenceId = purchaseUnit?.reference_id || null;
    const customId = capture?.custom_id || purchaseUnit?.custom_id || null;
    const captureCurrency = capture?.amount?.currency_code || null;
    const captureAmountCents = paypalAmountToCents(capture?.amount?.value);

    if (captureStatus !== "COMPLETED" || !captureId) {
      return NextResponse.json(
        {
          ok: false,
          error: "PayPal order was not completed.",
          details: captureData,
        },
        { status: 400 }
      );
    }

    if (referenceId && referenceId !== supportOrder.id) {
      return NextResponse.json(
        {
          ok: false,
          error: "PayPal reference ID did not match PWG support order.",
        },
        { status: 400 }
      );
    }

    if (customId && customId !== supportOrder.id) {
      return NextResponse.json(
        {
          ok: false,
          error: "PayPal custom ID did not match PWG support order.",
        },
        { status: 400 }
      );
    }

    if (
      captureCurrency !== supportOrder.currency ||
      captureAmountCents !== supportOrder.amount_cents
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "PayPal capture amount did not match PWG support order.",
          expected: {
            amountCents: supportOrder.amount_cents,
            currency: supportOrder.currency,
          },
          actual: {
            amountCents: captureAmountCents,
            currency: captureCurrency,
          },
        },
        { status: 400 }
      );
    }

    const now = new Date();
    const supportEndsAt = addMonths(now, supportOrder.support_term_months || 12);
    const nowIso = now.toISOString();
    const supportEndsAtIso = supportEndsAt.toISOString();

    const { error: supportOrderUpdateError } = await supabaseAdmin
      .from("support_orders")
      .update({
        provider_capture_id: captureId,
        provider_payer_id: payerId,
        status: "completed",
        support_starts_at: nowIso,
        support_ends_at: supportEndsAtIso,
        completed_at: nowIso,
        metadata: {
          ...asRecord(supportOrder.metadata),
          paypal_capture_status: captureStatus,
          paypal_order_status: captureData.status || null,
          paypal_capture: {
            id: captureId,
            status: captureStatus,
            amount_cents: captureAmountCents,
            currency: captureCurrency,
            final_capture: capture?.final_capture ?? null,
            create_time: capture?.create_time ?? null,
            update_time: capture?.update_time ?? null,
          },
        },
        updated_at: nowIso,
      })
      .eq("id", supportOrder.id);

    if (supportOrderUpdateError) {
      return NextResponse.json(
        {
          ok: false,
          error: "PayPal captured, but PWG could not update the support order.",
          details: supportOrderUpdateError.message,
        },
        { status: 500 }
      );
    }

    const { data: existingMemberStatus } = await supabaseAdmin
      .from("member_status")
      .select("member_since, lifetime_support_cents")
      .eq("profile_id", profile.id)
      .maybeSingle<ExistingMemberStatusRow>();

    const previousLifetimeSupportCents =
      existingMemberStatus?.lifetime_support_cents || 0;

    const { data: memberStatus, error: memberStatusError } = await supabaseAdmin
      .from("member_status")
      .upsert(
        {
          profile_id: profile.id,
          is_member: true,
          support_status: "active",
          support_type: supportOrder.support_type || "one_time",
          support_plan: supportOrder.support_plan || "paypal_one_time_12_months",
          support_provider: "paypal",
          member_since: existingMemberStatus?.member_since || nowIso,
          last_support_at: nowIso,
          expires_at: supportEndsAtIso,
          support_started_at: nowIso,
          support_expires_at: supportEndsAtIso,
          support_current_period_start: nowIso,
          support_current_period_end: supportEndsAtIso,
          last_support_payment_at: nowIso,
          lifetime_support_cents:
            previousLifetimeSupportCents + supportOrder.amount_cents,
          notes: "Active PayPal supporter access granted after completed capture.",
          support_notes:
            "Active PayPal supporter access granted after completed capture.",
          updated_at: nowIso,
        },
        {
          onConflict: "profile_id",
        }
      )
      .select("*")
      .single();

    if (memberStatusError) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "PayPal captured, but PWG could not activate supporter benefits.",
          details: memberStatusError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      supportOrderId: supportOrder.id,
      providerOrderId: paypalOrderId,
      providerCaptureId: captureId,
      supportStatus: "active",
      supportEndsAt: supportEndsAtIso,
      memberStatus,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong while capturing the PayPal support order.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}