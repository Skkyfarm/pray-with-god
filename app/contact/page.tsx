// /app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 text-gray-800">
        We’d love to hear from you — questions, feedback, or anything that helps
        PrayWithGod.ai stay calm, respectful, and useful.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Get in touch</h2>
        <p className="mt-2 text-gray-800">
          For general questions, feedback, or partnership inquiries, email us
          directly. For bugs or technical help, please use the support address
          below.
        </p>

        <div className="mt-6 space-y-5 text-sm text-gray-800">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              General contact
            </div>
            <div className="mt-1">
              <a
                href="mailto:contact@praywithgod.ai"
                className="font-medium text-gray-950 underline underline-offset-4 hover:text-gray-700"
              >
                contact@praywithgod.ai
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              Support
            </div>
            <div className="mt-1">
              <a
                href="mailto:support@praywithgod.ai"
                className="font-medium text-gray-950 underline underline-offset-4 hover:text-gray-700"
              >
                support@praywithgod.ai
              </a>
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
              A short description of your question, what page you were using
              (Pray / Community / Support), and screenshots if they help explain
              the issue.
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/report"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Report Issue
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
          Email is currently the best way to reach the PrayWithGod.ai team.
        </p>
      </div>
    </main>
  );
}