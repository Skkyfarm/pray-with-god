// /app/donate/thank-you/page.tsx

import Link from "next/link";

type DonateThankYouPageProps = {
  searchParams?: {
    status?: string;
    message?: string;
  };
};

function getStatusCopy(status?: string, message?: string) {
  if (status === "success") {
    return {
      title: "Thank you for supporting PWG",
      body:
        "Your PayPal support was received. We are confirming your supporter access now. This usually updates very quickly.",
      tone: "border-emerald-300/70 bg-emerald-50/80",
    };
  }

  if (status === "pending") {
    return {
      title: "Thank you — confirmation is still processing",
      body:
        "PayPal received the approval, and PWG is waiting for the final confirmation. Please check your dashboard again shortly.",
      tone: "border-amber-300/70 bg-amber-50/80",
    };
  }

  if (status === "cancelled") {
    return {
      title: "Support checkout was cancelled",
      body:
        "No worries. You can return to the support page anytime if you would like to support PWG later.",
      tone: "border-slate-300/70 bg-white/80",
    };
  }

  return {
    title: "We could not confirm the support checkout",
    body:
      "Something interrupted the PayPal confirmation step. If PayPal sent you a receipt, your support may still have gone through, but PWG may need a manual check.",
    tone: "border-rose-300/70 bg-rose-50/80",
    detail: message,
  };
}

export default function DonateThankYouPage({
  searchParams,
}: DonateThankYouPageProps) {
  const statusCopy = getStatusCopy(searchParams?.status, searchParams?.message);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-12 text-gray-950">
      <section
        className={`w-full rounded-3xl border p-6 shadow-sm backdrop-blur ${statusCopy.tone}`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-700">
          PrayWithGod.ai
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {statusCopy.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-gray-800">
          {statusCopy.body}
        </p>

        {statusCopy.detail ? (
          <p className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-3 text-xs leading-6 text-gray-700">
            Confirmation note: {statusCopy.detail}
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-xl bg-gray-950 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/pray"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Return to Prayer
          </Link>

          <Link
            href="/support"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Support Page
          </Link>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-gray-600">
          Support payments to PrayWithGod.ai are not tax-deductible. Skky Farm
          Publishing LLC is not a qualified charitable organization.
        </p>
      </section>
    </main>
  );
}