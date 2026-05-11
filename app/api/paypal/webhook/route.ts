// app/api/paypal/webhook/route.ts

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PayPalWebhookEvent = {
  id?: string;
  event_type?: string;
  resource_type?: string;
  summary?: string;
  create_time?: string;
  resource?: any;
};

type DonationDetails = {
  captureId: string | null;
  orderId: string | null;
  subscriptionId: string | null;
  payerEmail: string | null;
  payerId: string | null;
  profileIdCandidate: string | null;
  amountCents: number | null;
  currency: string | null;
};

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function getPayPalBaseUrl(): string {
  const environment = (process.env.PAYPAL_ENVIRONMENT || "sandbox").toLowerCase();

  return environment === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

function getSupabaseAdmin() {
  return createClient(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}

function getHeader(headers: Headers, name: string): string {
  const value = headers.get(name);

  if (!value) {
    throw new Error(`Missing PayPal header: ${name}`);
  }

  return value;
}

function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const trimmed = value.trim().toLowerCase();

  return trimmed.length > 0 ? trimmed : null;
}

function asString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

function isUuid(value: unknown): value is string {
  if (typeof value !== "string") return false;

  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value.trim()
  );
}

function parseAmountCents(value: unknown): number | null {
  if (typeof value !== "string" && typeof value !== "number") return null;

  const numericValue = Number(value);

  if (!Number.isFinite(numericValue)) return null;

  return Math.round(numericValue * 100);
}

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);

  return result;
}

function getOrderIdFromResource(resource: any): string | null {
  const relatedOrderId = asString(
    resource?.supplementary_data?.related_ids?.order_id
  );

  if (relatedOrderId) return relatedOrderId;

  const upLink = Array.isArray(resource?.links)
    ? resource.links.find((link: any) => link?.rel === "up")
    : null;

  const href = asString(upLink?.href);

  if (!href) return null;

  const parts = href.split("/").filter(Boolean);

  return parts.length > 0 ? parts[parts.length - 1] : null;
}

async function getPayPalAccessToken(): Promise<string> {
  const clientId = requireEnv("PAYPAL_CLIENT_ID");
  const clientSecret = requireEnv("PAYPAL_CLIENT_SECRET");
  const baseUrl = getPayPalBaseUrl();

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      "Accept-Language": "en_US",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`PayPal token request failed: ${response.status} ${body}`);
  }

  const data = await response.json();

  if (!data?.access_token) {
    throw new Error("PayPal token response did not include access_token.");
  }

  return data.access_token;
}

async function verifyPayPalWebhookSignature({
  headers,
  event,
  accessToken,
}: {
  headers: Headers;
  event: PayPalWebhookEvent;
  accessToken: string;
}): Promise<boolean> {
  const baseUrl = getPayPalBaseUrl();

  const payload = {
    auth_algo: getHeader(headers, "paypal-auth-algo"),
    cert_url: getHeader(headers, "paypal-cert-url"),
    transmission_id: getHeader(headers, "paypal-transmission-id"),
    transmission_sig: getHeader(headers, "paypal-transmission-sig"),
    transmission_time: getHeader(headers, "paypal-transmission-time"),
    webhook_id: requireEnv("PAYPAL_WEBHOOK_ID"),
    webhook_event: event,
  };

  const response = await fetch(
    `${baseUrl}/v1/notifications/verify-webhook-signature`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `PayPal webhook verification request failed: ${response.status} ${body}`
    );
  }

  const data = await response.json();

  return data?.verification_status === "SUCCESS";
}

async function getPayPalOrder(
  orderId: string,
  accessToken: string
): Promise<any | null> {
  const baseUrl = getPayPalBaseUrl();

  const response = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function extractDonationDetails(
  event: PayPalWebhookEvent,
  accessToken: string
): Promise<DonationDetails> {
  const resource = event.resource || {};
  const orderId = getOrderIdFromResource(resource);
  const order = orderId ? await getPayPalOrder(orderId, accessToken) : null;

  const purchaseUnit = Array.isArray(order?.purchase_units)
    ? order.purchase_units[0]
    : null;

  const payer = order?.payer || resource?.payer || resource?.payer_info || {};
  const captureFromOrder = purchaseUnit?.payments?.captures?.[0];

  const customId =
    asString(resource?.custom_id) ||
    asString(purchaseUnit?.custom_id) ||
    asString(order?.custom_id);

  const amount =
    resource?.amount ||
    captureFromOrder?.amount ||
    purchaseUnit?.amount ||
    null;

  const profileIdCandidate = isUuid(customId) ? customId : null;

  return {
    captureId: asString(resource?.id) || asString(captureFromOrder?.id),
    orderId,
    subscriptionId:
      asString(resource?.billing_agreement_id) ||
      asString(resource?.subscription_id) ||
      asString(order?.subscription_id),
    payerEmail: normalizeEmail(
      payer?.email_address ||
        payer?.email ||
        resource?.payer_email ||
        resource?.email_address
    ),
    payerId:
      asString(payer?.payer_id) ||
      asString(resource?.payer_id) ||
      asString(resource?.payer?.payer_id),
    profileIdCandidate,
    amountCents: parseAmountCents(amount?.value),
    currency: asString(amount?.currency_code),
  };
}

async function findProfileId(
  supabase: ReturnType<typeof getSupabaseAdmin>,
  details: DonationDetails
): Promise<string | null> {
  if (details.profileIdCandidate) {
    const { data, error } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", details.profileIdCandidate)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (data?.id) {
      return data.id;
    }
  }

  if (details.payerEmail) {
    const { data, error } = await supabase
      .from("profiles")
      .select("id")
      .ilike("email", details.payerEmail)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (data?.id) {
      return data.id;
    }
  }

  return null;
}

async function logWebhookEvent({
  supabase,
  event,
  details,
  status,
  profileId,
  errorMessage,
}: {
  supabase: ReturnType<typeof getSupabaseAdmin>;
  event: PayPalWebhookEvent;
  details?: Partial<DonationDetails>;
  status: "received" | "processed" | "ignored" | "unmatched" | "error";
  profileId?: string | null;
  errorMessage?: string | null;
}) {
  const paypalEventId = event.id;

  if (!paypalEventId) {
    throw new Error("PayPal webhook event did not include an id.");
  }

  const payload = {
    paypal_event_id: paypalEventId,
    event_type: event.event_type || "unknown",
    resource_type: event.resource_type || null,
    paypal_capture_id: details?.captureId || null,
    paypal_order_id: details?.orderId || null,
    paypal_subscription_id: details?.subscriptionId || null,
    payer_email: details?.payerEmail || null,
    profile_id: profileId || null,
    processing_status: status,
    raw_event: event,
    error_message: errorMessage || null,
    processed_at:
      status === "processed" || status === "ignored" || status === "unmatched"
        ? new Date().toISOString()
        : null,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("paypal_webhook_events")
    .upsert(payload, {
      onConflict: "paypal_event_id",
    });

  if (error) {
    throw error;
  }
}

async function hasAlreadyFinishedProcessing({
  supabase,
  eventId,
}: {
  supabase: ReturnType<typeof getSupabaseAdmin>;
  eventId: string;
}): Promise<boolean> {
  const { data, error } = await supabase
    .from("paypal_webhook_events")
    .select("processing_status")
    .eq("paypal_event_id", eventId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return ["processed", "ignored", "unmatched"].includes(
    data?.processing_status || ""
  );
}

async function activateOneTimeSupporter({
  supabase,
  profileId,
  details,
  event,
}: {
  supabase: ReturnType<typeof getSupabaseAdmin>;
  profileId: string;
  details: DonationDetails;
  event: PayPalWebhookEvent;
}) {
  const now = new Date();
  const nowIso = now.toISOString();
  const supportMonths = Number(process.env.PAYPAL_ONE_TIME_SUPPORT_MONTHS || 12);

  const { data: existing, error: existingError } = await supabase
    .from("member_status")
    .select(
      "profile_id, member_since, support_started_at, support_expires_at, lifetime_support_cents, support_notes"
    )
    .eq("profile_id", profileId)
    .maybeSingle();

  if (existingError) {
    throw existingError;
  }

  const existingExpiresAt = existing?.support_expires_at
    ? new Date(existing.support_expires_at)
    : null;

  const extensionBase =
    existingExpiresAt && existingExpiresAt > now ? existingExpiresAt : now;

  const expiresAt = addMonths(extensionBase, supportMonths).toISOString();

  const previousLifetime =
    typeof existing?.lifetime_support_cents === "number"
      ? existing.lifetime_support_cents
      : 0;

  const newLifetime =
    previousLifetime + (typeof details.amountCents === "number" ? details.amountCents : 0);

  const newNote = `PayPal one-time support activated by webhook ${
    event.id || "unknown"
  } on ${nowIso}. Capture: ${details.captureId || "unknown"}. Order: ${
    details.orderId || "unknown"
  }.`;

  const supportNotes = [existing?.support_notes, newNote]
    .filter(Boolean)
    .join("\n");

  const payload = {
    profile_id: profileId,
    is_member: true,
    support_status: "active",
    support_type: "paypal_one_time",
    support_plan: `one_time_${supportMonths}_months`,
    support_provider: "paypal",
    member_since: existing?.member_since || nowIso,
    support_started_at: existing?.support_started_at || nowIso,
    last_support_at: nowIso,
    support_expires_at: expiresAt,
    expires_at: expiresAt,
    support_current_period_end: expiresAt,
    lifetime_support_cents: newLifetime,
    last_support_amount_cents: details.amountCents,
    last_support_currency: details.currency,
    paypal_payer_email: details.payerEmail,
    paypal_payer_id: details.payerId,
    paypal_capture_id: details.captureId,
    paypal_order_id: details.orderId,
    paypal_subscription_id: details.subscriptionId,
    last_payment_provider_event_id: event.id,
    support_notes: supportNotes,
  };

  if (existing?.profile_id) {
    const { error } = await supabase
      .from("member_status")
      .update(payload)
      .eq("profile_id", profileId);

    if (error) {
      throw error;
    }

    return;
  }

  const { error } = await supabase.from("member_status").insert(payload);

  if (error) {
    throw error;
  }
}

export async function POST(request: Request) {
  let event: PayPalWebhookEvent | null = null;
  const supabase = getSupabaseAdmin();

  try {
    const rawBody = await request.text();
    event = JSON.parse(rawBody);

    if (!event?.id || !event?.event_type) {
      return NextResponse.json(
        { received: false, error: "Invalid PayPal webhook payload." },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    const isVerified = await verifyPayPalWebhookSignature({
      headers: request.headers,
      event,
      accessToken,
    });

    if (!isVerified) {
      return NextResponse.json(
        { received: false, error: "PayPal webhook signature verification failed." },
        { status: 400 }
      );
    }

    const alreadyFinished = await hasAlreadyFinishedProcessing({
      supabase,
      eventId: event.id,
    });

    if (alreadyFinished) {
      return NextResponse.json({
        received: true,
        duplicate: true,
      });
    }

    if (event.event_type !== "PAYMENT.CAPTURE.COMPLETED") {
      await logWebhookEvent({
        supabase,
        event,
        status: "ignored",
      });

      return NextResponse.json({
        received: true,
        ignored: true,
        event_type: event.event_type,
      });
    }

    const details = await extractDonationDetails(event, accessToken);

    await logWebhookEvent({
      supabase,
      event,
      details,
      status: "received",
    });

    const profileId = await findProfileId(supabase, details);

    if (!profileId) {
      await logWebhookEvent({
        supabase,
        event,
        details,
        status: "unmatched",
        errorMessage:
          "No matching PWG profile found by PayPal custom_id/profile_id or payer email.",
      });

      return NextResponse.json({
        received: true,
        matched: false,
      });
    }

    await activateOneTimeSupporter({
      supabase,
      profileId,
      details,
      event,
    });

    await logWebhookEvent({
      supabase,
      event,
      details,
      status: "processed",
      profileId,
    });

    return NextResponse.json({
      received: true,
      processed: true,
      profile_id: profileId,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    if (event?.id && event?.event_type) {
      try {
        await logWebhookEvent({
          supabase,
          event,
          status: "error",
          errorMessage: message,
        });
      } catch {
        // Do not mask the original webhook error.
      }
    }

    return NextResponse.json(
      {
        received: false,
        error: message,
      },
      { status: 500 }
    );
  }
}