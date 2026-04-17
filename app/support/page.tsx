// /app/support/page.tsx
import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Support PWG</h1>

      <p className="mt-3 text-gray-800">
        Prayer companionship and exploration are free for everyone on
        PrayWithGod.ai. If you choose to support PWG, your support helps sustain
        the mission and unlocks enhanced features like saved prayers, prayer
        history, and more as the site grows.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">How PWG works</h2>

        <div className="mt-5 space-y-5 text-sm leading-relaxed text-gray-800">
          <div>
            <h3 className="text-sm font-semibold text-gray-950">Everyone</h3>
            <p className="mt-1">
              Prayer companionship and exploration are free for everyone on PWG.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-950">Free account</h3>
            <p className="mt-1">
              Creating a free account helps PWG recognize you when you return
              and makes participation features like comments and shared
              reflections possible as they become available.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-950">Supporters</h3>
            <p className="mt-1">
              Supporting PWG helps sustain the mission and unlocks enhanced
              features like saved prayers, prayer history, and other thoughtful
              tools over time.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/donate"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Continue to Donate
          </Link>
          <Link
            href="/faq"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            View FAQ
          </Link>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Why support matters</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-800">
          PWG was built to remain a calm, welcoming place for prayer,
          reflection, and spiritual exploration. Support helps keep that work
          going while allowing core prayer companionship to remain free for
          everyone.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">FAQ</h2>
          <p className="mt-2 text-sm text-gray-800">
            Read quick answers about prayer, accounts, support, and how PWG
            works.
          </p>
          <div className="mt-5">
            <Link
              href="/faq"
              className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              View FAQ
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-gray-800">
            Questions, feedback, or something thoughtful to share? Reach out
            anytime.
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Report an issue</h2>
          <p className="mt-2 text-sm text-gray-800">
            If something seems broken, confusing, or off-tone, let us know and
            we’ll take a look.
          </p>
          <div className="mt-5">
            <Link
              href="/report"
              className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Report Issue
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Direct email</h2>

        <div className="mt-4 space-y-3 text-sm text-gray-800">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700">
              Support
            </div>
            <a
              href="mailto:support@praywithgod.ai"
              className="mt-1 inline-block font-medium text-gray-950 underline underline-offset-4 hover:text-gray-700"
            >
              support@praywithgod.ai
            </a>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700">
              General contact
            </div>
            <a
              href="mailto:contact@praywithgod.ai"
              className="mt-1 inline-block font-medium text-gray-950 underline underline-offset-4 hover:text-gray-700"
            >
              contact@praywithgod.ai
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}