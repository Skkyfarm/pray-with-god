// /app/api/support/paypal/capture-order/route.ts

import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { activatePayPalSupporter } from "@/lib/support/activatePayPalSupporter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PayPalAccessTokenResponse = {
  access_token?: string;
};

type PayPalCaptureOrderResponse = {
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
        amount?: {
          currency_code?: string;
          value?: string;
        };
      }>;
    };
  }>;
};

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

function redirectToDonateThankYou(
  req: Request,
  status: "success" | "pending" | "error" | "cancelled",
  message?: string
) {
  const siteBaseUrl = getSiteBaseUrl(req);
  const redirectUrl = new URL("/donate/thank-you", siteBaseUrl);

  redirectUrl.searchParams.set("status", status);

  if (message) {
    redirectUrl.searchParams.set("message", message);
  }

  return NextResponse.redirect(redirectUrl);
}

function parseAmountCents(value: unknown): number | null {
  if (typeof value !== "string" && typeof value !== "number") {
    return null;
  }

  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  return Math.round(numericValue * 100);
}

function getCaptureFromPayPalOrder(order: PayPalCaptureOrderResponse) {
  return order.purchase_units?.[0]?.payments?.captures?.[0] || null;
}

function getPurchaseUnitFromPayPalOrder(order: PayPalCaptureOrderResponse) {
  return order.purchase_units?.[0] || null;
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

async function capturePayPalOrder(
  paypalOrderId: string,
  supportOrderId: string
): Promise<PayPalCaptureOrderResponse> {
  const paypalApiBase = getPayPalApiBase();
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(
    `${paypalApiBase}/v2/checkout/orders/${paypalOrderId}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": `${supportOrderId}-capture`,
      },
    }
  );

  const data = (await response.json()) as PayPalCaptureOrderResponse;

  if (!response.ok) {
    throw new Error(
      `Failed to capture PayPal order: ${response.status} ${JSON.stringify(
        data
      )}`
    );
  }

  return data;
}

export async function GET(req: Request) {
  const supabaseAdmin = createSupabaseAdminClient();

  try {
    const url = new URL(req.url);
    const supportOrderId = url.searchParams.get("supportOrderId");
    const paypalOrderId = url.searchParams.get("token");

    if (!supportOrderId || !paypalOrderId) {
      return redirectToDonateThankYou(
        req,
        "error",
        "missing-paypal-return-data"
      );
    }

    const { data: supportOrder, error: supportOrderError } = await supabaseAdmin
      .from("support_orders")
      .select(
        "id, profile_id, provider_order_id, status, amount_cents, currency, metadata"
      )
      .eq("id", supportOrderId)
      .maybeSingle();

    if (supportOrderError || !supportOrder) {
      return redirectToDonateThankYou(req, "error", "support-order-not-found");
    }

    if (supportOrder.provider_order_id !== paypalOrderId) {
      await supabaseAdmin
        .from("support_orders")
        .update({
          status: "paypal_capture_blocked",
          metadata: {
            ...(typeof supportOrder.metadata === "object" &&
            supportOrder.metadata !== null
              ? supportOrder.metadata
              : {}),
            paypal_capture_blocked_reason: "provider_order_id_mismatch",
            returned_paypal_order_id: paypalOrderId,
            updated_by: "paypal_capture_order_route",
          },
          updated_at: new Date().toISOString(),
        })
        .eq("id", supportOrder.id);

      return redirectToDonateThankYou(req, "error", "paypal-order-mismatch");
    }

    if (
      supportOrder.status === "paypal_support_activated" ||
      supportOrder.status === "paypal_capture_processed" ||
      supportOrder.status === "processed" ||
      supportOrder.status === "completed"
    ) {
      return redirectToDonateThankYou(req, "success", "already-activated");
    }

    const capturedOrder = await capturePayPalOrder(paypalOrderId, supportOrderId);
    const purchaseUnit = getPurchaseUnitFromPayPalOrder(capturedOrder);
    const capture = getCaptureFromPayPalOrder(capturedOrder);

    const captureStatus = capture?.status || capturedOrder.status || "UNKNOWN";
    const isCompleted = captureStatus === "COMPLETED";

    if (!isCompleted) {
      await supabaseAdmin
        .from("support_orders")
        .update({
          status: "paypal_capture_pending",
          metadata: {
            ...(typeof supportOrder.metadata === "object" &&
            supportOrder.metadata !== null
              ? supportOrder.metadata
              : {}),
            paypal_capture_order_status: capturedOrder.status || null,
            paypal_capture_id: capture?.id || null,
            paypal_capture_status: captureStatus,
            paypal_capture_amount: capture?.amount || null,
            captured_by: "paypal_capture_order_route",
            captured_at: new Date().toISOString(),
          },
          updated_at: new Date().toISOString(),
        })
        .eq("id", supportOrder.id);

      return redirectToDonateThankYou(req, "pending", "capture-pending");
    }

    const activationResult = await activatePayPalSupporter({
      supabaseAdmin,
      profileId: supportOrder.profile_id,
      supportOrderId: supportOrder.id,
      paypalOrderId,
      paypalCaptureId: capture?.id || null,
      paypalSubscriptionId: null,
      paypalPayerEmail: capturedOrder.payer?.email_address || null,
      paypalPayerId: capturedOrder.payer?.payer_id || null,
      amountCents:
        parseAmountCents(capture?.amount?.value) ||
        supportOrder.amount_cents ||
        null,
      currency: capture?.amount?.currency_code || supportOrder.currency || "USD",
      providerEventId: null,
      source: "paypal_capture_return",
    });

    await supabaseAdmin
      .from("support_orders")
      .update({
        status: "paypal_capture_processed",
        metadata: {
          ...(typeof supportOrder.metadata === "object" &&
          supportOrder.metadata !== null
            ? supportOrder.metadata
            : {}),
          paypal_capture_order_status: capturedOrder.status || null,
          paypal_purchase_unit_reference_id: purchaseUnit?.reference_id || null,
          paypal_purchase_unit_custom_id: purchaseUnit?.custom_id || null,
          paypal_capture_id: capture?.id || null,
          paypal_capture_status: captureStatus,
          paypal_capture_amount: capture?.amount || null,
          supporter_activation_result: activationResult,
          captured_by: "paypal_capture_order_route",
          captured_at: new Date().toISOString(),
        },
        updated_at: new Date().toISOString(),
      })
      .eq("id", supportOrder.id);

    return redirectToDonateThankYou(
      req,
      "success",
      activationResult.alreadyProcessed
        ? "already-activated"
        : "supporter-activated"
    );
  } catch (error) {
    console.error("PayPal capture return failed:", error);

    return redirectToDonateThankYou(
      req,
      "error",
      error instanceof Error ? error.message : "unknown-capture-error"
    );
  }
}