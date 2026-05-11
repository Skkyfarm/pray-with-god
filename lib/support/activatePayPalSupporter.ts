// /lib/support/activatePayPalSupporter.ts

type SupabaseAdminClient = any;

export type ActivatePayPalSupporterInput = {
  supabaseAdmin: SupabaseAdminClient;
  profileId: string;
  supportOrderId?: string | null;
  paypalOrderId?: string | null;
  paypalCaptureId?: string | null;
  paypalSubscriptionId?: string | null;
  paypalPayerEmail?: string | null;
  paypalPayerId?: string | null;
  amountCents?: number | null;
  currency?: string | null;
  providerEventId?: string | null;
  source: "paypal_capture_return" | "paypal_webhook";
};

export type ActivatePayPalSupporterResult = {
  activated: boolean;
  alreadyProcessed: boolean;
  supportExpiresAt?: string;
};

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);

  return result;
}

function normalizePositiveInteger(value: unknown, fallback: number): number {
  const numericValue = Number(value);

  if (!Number.isInteger(numericValue) || numericValue <= 0) {
    return fallback;
  }

  return numericValue;
}

function isFinalSupportOrderStatus(status: unknown): boolean {
  return [
    "completed",
    "processed",
    "paypal_support_activated",
    "paypal_capture_processed",
  ].includes(typeof status === "string" ? status : "");
}

function mergeMetadata(existing: unknown, additions: Record<string, unknown>) {
  return {
    ...(typeof existing === "object" && existing !== null ? existing : {}),
    ...additions,
  };
}

export async function activatePayPalSupporter({
  supabaseAdmin,
  profileId,
  supportOrderId,
  paypalOrderId,
  paypalCaptureId,
  paypalSubscriptionId,
  paypalPayerEmail,
  paypalPayerId,
  amountCents,
  currency,
  providerEventId,
  source,
}: ActivatePayPalSupporterInput): Promise<ActivatePayPalSupporterResult> {
  const now = new Date();
  const nowIso = now.toISOString();

  let supportOrder: any = null;

  if (supportOrderId) {
    const { data, error } = await supabaseAdmin
      .from("support_orders")
      .select(
        "id, profile_id, status, support_term_months, amount_cents, currency, metadata"
      )
      .eq("id", supportOrderId)
      .maybeSingle();

    if (error) {
      throw error;
    }

    supportOrder = data;

    if (supportOrder && supportOrder.profile_id !== profileId) {
      throw new Error("Support order profile mismatch.");
    }

    if (supportOrder && isFinalSupportOrderStatus(supportOrder.status)) {
      return {
        activated: false,
        alreadyProcessed: true,
      };
    }
  }

  const supportMonths = normalizePositiveInteger(
    supportOrder?.support_term_months ||
      process.env.PAYPAL_ONE_TIME_SUPPORT_MONTHS,
    12
  );

  const finalAmountCents =
    typeof amountCents === "number"
      ? amountCents
      : typeof supportOrder?.amount_cents === "number"
        ? supportOrder.amount_cents
        : 0;

  const finalCurrency =
    currency || (typeof supportOrder?.currency === "string" ? supportOrder.currency : "USD");

  const { data: existingMemberStatus, error: existingMemberStatusError } =
    await supabaseAdmin
      .from("member_status")
      .select(
        "profile_id, member_since, support_started_at, support_expires_at, lifetime_support_cents, support_notes"
      )
      .eq("profile_id", profileId)
      .maybeSingle();

  if (existingMemberStatusError) {
    throw existingMemberStatusError;
  }

  const existingExpiresAt = existingMemberStatus?.support_expires_at
    ? new Date(existingMemberStatus.support_expires_at)
    : null;

  const extensionBase =
    existingExpiresAt && existingExpiresAt > now ? existingExpiresAt : now;

  const supportExpiresAt = addMonths(extensionBase, supportMonths).toISOString();

  const previousLifetime =
    typeof existingMemberStatus?.lifetime_support_cents === "number"
      ? existingMemberStatus.lifetime_support_cents
      : 0;

  const newLifetime = previousLifetime + finalAmountCents;

  const activationNote = [
    `PayPal support activated by ${source} on ${nowIso}.`,
    supportOrderId ? `Support order: ${supportOrderId}.` : null,
    paypalOrderId ? `PayPal order: ${paypalOrderId}.` : null,
    paypalCaptureId ? `PayPal capture: ${paypalCaptureId}.` : null,
    providerEventId ? `PayPal event: ${providerEventId}.` : null,
  ]
    .filter(Boolean)
    .join(" ");

  const supportNotes = [existingMemberStatus?.support_notes, activationNote]
    .filter(Boolean)
    .join("\n");

  const memberStatusPayload = {
    profile_id: profileId,
    is_member: true,
    support_status: "active",
    support_type: "one_time",
    support_plan: `paypal_one_time_${supportMonths}_months`,
    support_provider: "paypal",
    member_since: existingMemberStatus?.member_since || nowIso,
    support_started_at: existingMemberStatus?.support_started_at || nowIso,
    last_support_at: nowIso,
    support_expires_at: supportExpiresAt,
    expires_at: supportExpiresAt,
    support_current_period_end: supportExpiresAt,
    lifetime_support_cents: newLifetime,
    last_support_amount_cents: finalAmountCents,
    last_support_currency: finalCurrency,
    paypal_payer_email: paypalPayerEmail || null,
    paypal_payer_id: paypalPayerId || null,
    paypal_capture_id: paypalCaptureId || null,
    paypal_order_id: paypalOrderId || null,
    paypal_subscription_id: paypalSubscriptionId || null,
    last_payment_provider_event_id: providerEventId || null,
    support_notes: supportNotes,
  };

  if (existingMemberStatus?.profile_id) {
    const { error } = await supabaseAdmin
      .from("member_status")
      .update(memberStatusPayload)
      .eq("profile_id", profileId);

    if (error) {
      throw error;
    }
  } else {
    const { error } = await supabaseAdmin
      .from("member_status")
      .insert(memberStatusPayload);

    if (error) {
      throw error;
    }
  }

  if (supportOrderId) {
    const { error: supportOrderUpdateError } = await supabaseAdmin
      .from("support_orders")
      .update({
        status: "paypal_support_activated",
        metadata: mergeMetadata(supportOrder?.metadata, {
          activated_by: source,
          activated_at: nowIso,
          support_expires_at: supportExpiresAt,
          paypal_order_id: paypalOrderId || null,
          paypal_capture_id: paypalCaptureId || null,
          paypal_subscription_id: paypalSubscriptionId || null,
          paypal_payer_email: paypalPayerEmail || null,
          paypal_payer_id: paypalPayerId || null,
          paypal_provider_event_id: providerEventId || null,
        }),
        updated_at: nowIso,
      })
      .eq("id", supportOrderId);

    if (supportOrderUpdateError) {
      throw supportOrderUpdateError;
    }
  }

  return {
    activated: true,
    alreadyProcessed: false,
    supportExpiresAt,
  };
}