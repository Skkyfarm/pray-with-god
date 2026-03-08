import Link from "next/link";

const PAYPAL_ME_HANDLE = "YOUR_PAYPAL_ME_HANDLE"; // change this
const STRIPE_PAYMENT_LINK = ""; // optional

function paypalMe(amount?: number, currencyCode?: string) {
  if (!amount) return `https://paypal.me/${PAYPAL_ME_HANDLE}`;
  const suffix = currencyCode ? `${amount}${currencyCode}` : `${amount}`;
  return `https://paypal.me/${PAYPAL_ME_HANDLE}/${suffix}`;
}

export default function DonatePage() {
  const tiers = [
    { amount: 5, note: "Keeps a light on" },
    { amount: 15, note: "Supports development" },
    { amount: 50, note: "Expands access" },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Donate</h1>
      <p className="mt-3 text-gray-800">
        Your support helps keep PrayWithGod.ai calm, respectful, and available to anyone who needs a place to pray.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.amount} className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
            <div className="text-2xl font-semibold">${t.amount}</div>
            <div className="mt-2 text-sm text-gray-700">{t.note}</div>

            <a
              href={paypalMe(t.amount)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full rounded-xl bg-black px-4 py-2 text-center text-xs font-semibold tracking-widest text-white hover:bg-black/90"
            >
              DONATE (PAYPAL)
            </a>

            {STRIPE_PAYMENT_LINK ? (
              <a
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block w-full rounded-xl border border-black/15 bg-white px-4 py-2 text-center text-xs font-semibold tracking-widest text-gray-950 hover:bg-white/80"
              >
                DONATE (CARD)
              </a>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Other amount</h2>
        <p className="mt-2 text-gray-800">
          Prefer a different amount? You can choose any amount via PayPal.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={paypalMe()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Open PayPal.Me
          </a>

          <Link
            href="/support"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Support
          </Link>
        </div>
      </div>
    </main>
  );
}