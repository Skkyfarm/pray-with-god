import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-gray-800">
        We’d love to hear from you — questions, feedback, or anything that helps
        PWG stay calm, respectful, and useful.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Quick note</h2>
        <p className="mt-2 text-gray-800">
          For now this is a simple placeholder contact page. Next we can wire a
          real contact form (email delivery) or a support inbox.
        </p>

        <div className="mt-6 space-y-3 text-sm text-gray-800">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              Email
            </div>
            <div className="mt-1 text-gray-900">
              contact@praywithgod.ai{" "}
              <span className="text-gray-600">(placeholder)</span>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              Response time
            </div>
            <div className="mt-1 text-gray-900">
              Usually within 24–72 hours.
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              What to include
            </div>
            <div className="mt-1 text-gray-900">
              A short description + what page you were on (Pray / Community /
              Support), and any screenshots if relevant.
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/support"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Support
          </Link>
          <Link
            href="/faq"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            FAQ
          </Link>
          <Link
            href="/pray"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Pray
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-600">
          Note: Replace <span className="font-mono">contact@praywithgod.ai</span>{" "}
          when you’re ready, or we can wire an actual form with an email provider.
        </p>
      </div>
    </main>
  );
}