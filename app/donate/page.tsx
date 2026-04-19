// /app/donate/page.tsx
'use client';

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    paypal?: {
      HostedButtons?: (options: { hostedButtonId: string }) => {
        render: (selector: string) => Promise<void> | void;
      };
    };
  }
}

const PAYPAL_HOSTED_BUTTON_ID = "FNQFJXQAXQKEQ";
const PAYPAL_CONTAINER_ID = "paypal-container-FNQFJXQAXQKEQ";

export default function DonatePage() {
  const [paypalStatus, setPaypalStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  const renderedRef = useRef(false);
  const attemptsRef = useRef(0);

  const renderPayPalButton = useCallback(() => {
    if (renderedRef.current) return;

    const container = document.getElementById(PAYPAL_CONTAINER_ID);

    if (!container) {
      setPaypalStatus("error");
      return;
    }

    if (!window.paypal?.HostedButtons) {
      attemptsRef.current += 1;

      if (attemptsRef.current <= 10) {
        window.setTimeout(renderPayPalButton, 250);
        return;
      }

      setPaypalStatus("error");
      return;
    }

    try {
      container.innerHTML = "";

      window.paypal
        .HostedButtons({
          hostedButtonId: PAYPAL_HOSTED_BUTTON_ID,
        })
        .render(`#${PAYPAL_CONTAINER_ID}`);

      renderedRef.current = true;
      setPaypalStatus("ready");
    } catch {
      renderedRef.current = false;
      setPaypalStatus("error");
    }
  }, []);

  useEffect(() => {
    renderPayPalButton();
  }, [renderPayPalButton]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <Script
        id="paypal-hosted-buttons-sdk"
        src="https://www.paypal.com/sdk/js?client-id=BAApc_qR3uEvAJzGK4iYq-DLrXiezQitPWyrktYASlHu77cGhKtdFLgJfXqYKEQkNoueS85RrJ6GRAc6OA&components=hosted-buttons&enable-funding=venmo&currency=USD"
        strategy="afterInteractive"
        onLoad={renderPayPalButton}
        onReady={renderPayPalButton}
        onError={() => setPaypalStatus("error")}
      />

      <h1 className="text-3xl font-semibold">Donate to PWG</h1>

      <p className="mt-3 text-gray-800">
        Prayer companionship and exploration remain free for everyone on
        PrayWithGod.ai. If PWG has been meaningful to you, your donation helps
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

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Give with PayPal</h2>

        <p className="mt-2 text-gray-800">
          You can make a donation securely using the PayPal options below.
        </p>

        <div className="mt-5 min-h-[140px]" id={PAYPAL_CONTAINER_ID} />

        {paypalStatus === "loading" ? (
          <p className="mt-3 text-sm text-gray-600">
            Loading secure PayPal donation options...
          </p>
        ) : null}

        {paypalStatus === "error" ? (
          <div className="mt-4 rounded-2xl border border-amber-300/70 bg-amber-50/80 p-4 text-sm leading-6 text-gray-800">
            PayPal did not load correctly. Please refresh the page and try
            again.
          </div>
        ) : null}

        <p className="mt-6 text-xs leading-relaxed text-gray-600">
          Donations in support of PrayWithGod.ai are not tax-deductible. Skky
          Farm Publishing LLC is not a qualified charitable organization.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Why donations matter</h2>

        <p className="mt-2 text-sm leading-relaxed text-gray-800">
          Your donation helps keep PrayWithGod.ai free for everyone while
          supporting hosting, maintenance, and careful development of this prayer
          companion.
        </p>
      </div>
    </main>
  );
}