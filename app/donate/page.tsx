// /app/donate/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

type PayPalCreateOrderResponse = {
  ok?: boolean;
  error?: string;
  errorCode?: string;
  details?: unknown;
  supportOrderId?: string;
  paypalOrderId?: string;
  paypalApprovalUrl?: string;
};

const SUPPORT_AMOUNTS = [
  { label: "$3", amountCents: 300 },
  { label: "$5", amountCents: 500 },
  { label: "$10", amountCents: 1000 },
  { label: "$20", amountCents: 2000 },
  { label: "$25", amountCents: 2500 },
  { label: "$50", amountCents: 5000 },
  { label: "$100", amountCents: 10000 },
];

export default function DonatePage() {
  const [selectedAmountCents, setSelectedAmountCents] = useState(500);
  const [isStartingCheckout, setIsStartingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  async function startPayPalCheckout() {
    setCheckoutError(null);
    setIsStartingCheckout(true);

    try {
      const response = await fetch("/api/support/paypal/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amountCents: selectedAmountCents,
        }),
      });

      const data = (await response.json()) as PayPalCreateOrderResponse;

      if (!response.ok || !data.ok || !data.paypalApprovalUrl) {
        if (data.errorCode === "auth_required") {
          setCheckoutError(
            "Please sign in or create a free account first so PWG can connect your support to your account benefits."
          );
          return;
        }

        setCheckoutError(
          data.error ||
            "PayPal checkout could not be started. Please try again in a moment."
        );
        return;
      }

      window.location.href = data.paypalApprovalUrl;
    } catch {
      setCheckoutError(
        "PayPal checkout could not be started. Please check your connection and try again."
      );
    } finally {
      setIsStartingCheckout(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Support PWG</h1>

      <p className="mt-3 text-gray-800">
        Prayer companionship and exploration remain free for everyone on
        PrayWithGod.ai. If PWG has been meaningful to you, your support helps
        keep the site running, maintained, and growing.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/support"
          className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
        >
          Back to Support PWG
        </Link>

        <Link
          href="/faq"
          className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
        >
          View FAQ
        </Link>
      </div>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-700">
          Supporter checkout
        </p>

        <h2 className="mt-2 text-xl font-semibold">
          Support PrayWithGod.ai with PayPal
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-gray-800">
          Choose an amount below. PWG will create a secure PayPal checkout and
          return you here after PayPal confirms the payment.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SUPPORT_AMOUNTS.map((amount) => {
            const isSelected = selectedAmountCents === amount.amountCents;

            return (
              <button
                key={amount.amountCents}
                type="button"
                onClick={() => setSelectedAmountCents(amount.amountCents)}
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                  isSelected
                    ? "border-purple-500 bg-purple-50 text-purple-950 shadow-sm"
                    : "border-black/15 bg-white text-gray-950 hover:bg-white/80"
                }`}
                aria-pressed={isSelected}
              >
                {amount.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={startPayPalCheckout}
          disabled={isStartingCheckout}
          className="mt-6 w-full rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isStartingCheckout ? "Starting PayPal checkout..." : "Continue to PayPal"}
        </button>

        {checkoutError ? (
          <div className="mt-4 rounded-2xl border border-amber-300/70 bg-amber-50/80 p-4 text-sm leading-6 text-gray-800">
            <p>{checkoutError}</p>

            {checkoutError.includes("sign in") ? (
              <Link
                href="/signin"
                className="mt-3 inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
              >
                Sign in or create a free account
              </Link>
            ) : null}
          </div>
        ) : null}

        <p className="mt-6 text-xs leading-relaxed text-gray-600">
          Support payments to PrayWithGod.ai are not tax-deductible. Skky Farm
          Publishing LLC is not a qualified charitable organization.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Why support matters</h2>

        <p className="mt-2 text-sm leading-relaxed text-gray-800">
          Your support helps keep PrayWithGod.ai free for everyone while
          supporting hosting, maintenance, and careful development of this prayer
          companion.
        </p>
      </section>
    </main>
  );
}