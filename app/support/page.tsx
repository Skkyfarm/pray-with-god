import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Support</h1>
      <p className="mt-3 text-gray-800">
        Help, answers, and ways to support PrayWithGod.ai.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Need help?</h2>
          <p className="mt-2 text-sm text-gray-800">
            Start with the FAQ — it covers the most common questions and how PWG
            works.
          </p>
          <div className="mt-5">
            <Link
              href="/faq"
              className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              View FAQ
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-gray-800">
            Questions, feedback, or anything you want to share? Reach out here.
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
            If something looks broken or confusing, report it and we’ll look
            into it.
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

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Donate</h2>
          <p className="mt-2 text-sm text-gray-800">
            Your support helps PWG stay calm, respectful, and available to those
            who need it.
          </p>
          <div className="mt-5">
            <Link
              href="/donate"
              className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Quick links</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/pray"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Pray
          </Link>
          <Link
            href="/community"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Community
          </Link>
          <Link
            href="/join"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Join Free
          </Link>
          <Link
            href="/signin"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Sign In
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-600">
          We keep PWG non-coercive and respectful across traditions. If something
          ever feels off, please tell us.
        </p>
      </div>
    </main>
  );
}