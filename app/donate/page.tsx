// /app/donate/page.tsx
'use client';

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    paypal?: any;
  }
}

const PAYPAL_HOSTED_BUTTON_ID = "FNQFJXQAXQKEQ";
const PAYPAL_CONTAINER_ID = "paypal-container-FNQFJXQAXQKEQ";

export default function DonatePage() {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (!sdkLoaded) return;
    if (!window.paypal) return;
    if (renderedRef.current) return;

    renderedRef.current = true;

    window.paypal
      .HostedButtons({
        hostedButtonId: PAYPAL_HOSTED_BUTTON_ID,
      })
      .render(`#${PAYPAL_CONTAINER_ID}`);
  }, [sdkLoaded]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <Script
        id="paypal-hosted-buttons-sdk"
        src="https://www.paypal.com/sdk/js?client-id=BAApc_qR3uEvAJzGK4iYq-DLrXiezQitPWyrktYASlHu77cGhKtdFLgJfXqYKEQkNoueS85RrJ6GRAc6OA&components=hosted-buttons&enable-funding=venmo&currency=USD"
        strategy="afterInteractive"
        onLoad={() => setSdkLoaded(true)}
      />

      <h1 className="text-3xl font-semibold">Donate to PWG</h1>
      <p className="mt-3 text-gray-800">
        Prayer companionship and exploration remain free for everyone on
        PrayWithGod.ai. If PWG has been meaningful to you, your donation helps
        sustain the mission and support added features like saved prayers,
        prayer history, and more as the site grows.
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
          You can support PWG securely using the PayPal options below.
        </p>

        <div className="mt-5" id={PAYPAL_CONTAINER_ID} />

        <p className="mt-6 text-xs leading-relaxed text-gray-600">
          Donations in support of PrayWithGod.ai are not tax-deductible. Skky
          Farm Publishing LLC is not a qualified charitable organization.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Why your support matters</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-800">
          PWG was built to remain a calm, welcoming place for prayer,
          reflection, and spiritual exploration. Your support helps keep that
          work growing while core prayer companionship stays free for everyone.
        </p>
      </div>
    </main>
  );
}