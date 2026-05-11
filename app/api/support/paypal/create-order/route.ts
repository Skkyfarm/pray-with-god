// /app/api/support/paypal/create-order/route.ts

import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getOrCreateProfile } from "@/lib/profile/getOrCreateProfile";

type CreatePayPalOrderBody = {
  amountCents?: number;
};

type PayPalAccessTokenResponse = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
};

type PayPalOrderLink = {
  href?: string;
  rel?: string;
  method?: string;
};

type PayPalCreateOrderResponse = {
  id?: string;
  status?: string;
  links?: PayPalOrderLink[];
};

const DEFAULT_AMOUNT_CENTS = 500;

const ALLOWED_AMOUNT_CENTS = new Set([
  300,
  500,
  1000,
  2000,
  2500,
  5000,
  10000,
]);

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getPayPalApiBase(): string {
  const explicitBase = process.env.PAYPAL_API_BASE?.replace(/\/$/, "");

  if (explicitBase) {
    return explicitBase;
  }

  const environment = (process.env.PAYPAL_ENVIRONMENT || "sandbox").toLowerCase();

  return environment === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

function getSiteBaseUrl(req: Request): string {
  const configuredBase =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.SITE_URL;

  if (configuredBase) {
    return configuredBase.replace(/\/$/, "");
  }

  return new URL(req.url).origin.replace(/\/$/, "");
}

function formatUsdAmount(amountCents: number): string {
  return (amountCents / 100).toFixed(2);
}

function normalizeAmountCents(value: unknown): number {
  const amountCents = Number(value || DEFAULT_AMOUNT_CENTS);

  if (!Number.isInteger(amountCents)) {
    return DEFAULT_AMOUNT_CENTS;
  }

  if (!ALLOWED_AMOUNT_CENTS.has(amountCents)) {
    return DEFAULT_AMOUNT_CENTS;
  }

  return amountCents;
}

function getPayPalApprovalUrl(order: PayPalCreateOrderResponse): string | null {
  const payerActionLink = order.links?.find(
    (link) => link.rel === "payer-action" && link.href
  );

  if (payerActionLink?.href) {
    return payerActionLink.href;
  }

  const approveLink = order.links?.find(
    (link) => link.rel === "approve" && link.href
  );

  return approveLink?.href || null;
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
      Accept: "application/json",
      "Accept-Language": "en_US",
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

    const user = await currentUser();
    const profile = await getOrCreateProfile();
    const supabaseAdmin = createSupabaseAdminClient();

    const body = (await req.json().catch(() => ({}))) as CreatePayPalOrderBody;
    const amountCents = normalizeAmountCents(body.amountCents);

    const primaryEmail =
      user?.emailAddresses.find(
        (email) => email.id === user.primaryEmailAddressId
      )?.emailAddress ||
      user?.emailAddresses[0]?.emailAddress ||
      profile.email ||
      null;

    const siteBaseUrl = getSiteBaseUrl(req);

    const { data: supportOrder, error: supportOrderError } = await supabaseAdmin
      .from("support_orders")
      .insert({
        profile_id: profile.id,
        clerk_user_id: userId,
        email: primaryEmail,
        provider: "paypal",
        status: "created",
        support_plan: "paypal_one_time_12_months",
        support_type: "one_time",
        amount_cents: amountCents,
        currency: "USD",
        support_term_months: 12,
        metadata: {
          source: "paypal_create_order_route",
          site_base_url: siteBaseUrl,
        },
      })
      .select("id")
      .single();

    if (supportOrderError || !supportOrder) {
      return NextResponse.json(
        {
          ok: false,
          error: "Could not create support order.",
          details: supportOrderError?.message || "No support order returned.",
        },
        { status: 500 }
      );
    }

    const returnUrl = `${siteBaseUrl}/api/support/paypal/capture-order?supportOrderId=${supportOrder.id}`;
    const cancelUrl = `${siteBaseUrl}/donate?paypal=cancelled`;

    const paypalApiBase = getPayPalApiBase();
    const accessToken = await getPayPalAccessToken();

    const paypalOrderResponse = await fetch(
      `${paypalApiBase}/v2/checkout/orders`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "PayPal-Request-Id": supportOrder.id,
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              reference_id: supportOrder.id,
              custom_id: profile.id,
              description: "PrayWithGod.ai support",
              amount: {
                currency_code: "USD",
                value: formatUsdAmount(amountCents),
              },
            },
          ],
          payment_source: {
            paypal: {
              payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
              experience_context: {
                brand_name: "PrayWithGod.ai",
                landing_page: "LOGIN",
                shipping_preference: "NO_SHIPPING",
                user_action: "PAY_NOW",
                return_url: returnUrl,
                cancel_url: cancelUrl,
              },
            },
          },
        }),
      }
    );

    const paypalOrder =
      (await paypalOrderResponse.json()) as PayPalCreateOrderResponse;

    const paypalApprovalUrl = getPayPalApprovalUrl(paypalOrder);

    if (!paypalOrderResponse.ok || !paypalOrder.id || !paypalApprovalUrl) {
      await supabaseAdmin
        .from("support_orders")
        .update({
          status: "failed",
          failed_at: new Date().toISOString(),
          metadata: {
            source: "paypal_create_order_route",
            paypal_create_order_error: paypalOrder,
            paypal_create_order_status: paypalOrderResponse.status,
            return_url: returnUrl,
            cancel_url: cancelUrl,
          },
          updated_at: new Date().toISOString(),
        })
        .eq("id", supportOrder.id);

      return NextResponse.json(
        {
          ok: false,
          error: "Could not create PayPal checkout link.",
          details: paypalOrder,
        },
        { status: 502 }
      );
    }

    const { error: updateSupportOrderError } = await supabaseAdmin
      .from("support_orders")
      .update({
        provider_order_id: paypalOrder.id,
        status: "paypal_order_created",
        metadata: {
          source: "paypal_create_order_route",
          paypal_order_status: paypalOrder.status || null,
          paypal_order_links: paypalOrder.links || [],
          paypal_approval_url: paypalApprovalUrl,
          return_url: returnUrl,
          cancel_url: cancelUrl,
        },
        updated_at: new Date().toISOString(),
      })
      .eq("id", supportOrder.id);

    if (updateSupportOrderError) {
      return NextResponse.json(
        {
          ok: false,
          error: "PayPal order created, but PWG could not store the order ID.",
          details: updateSupportOrderError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      supportOrderId: supportOrder.id,
      paypalOrderId: paypalOrder.id,
      paypalApprovalUrl,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong while creating the PayPal support order.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}