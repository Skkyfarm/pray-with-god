// /app/report/page.tsx
import Link from "next/link";

export default function ReportIssuePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Report an Issue</h1>
      <p className="mt-3 text-gray-800">
        Thanks for helping improve PWG. If something feels broken, confusing, or
        off-tone, let us know and we’ll take a look.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">What to include</h2>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
          <li>Which page you were on (Pray / Community / Support)</li>
          <li>What you expected to happen</li>
          <li>What actually happened</li>
          <li>
            Any error message (copy/paste) or screenshots if you have them
          </li>
          <li>Your device/browser (example: Chrome on Windows)</li>
        </ul>

        <div className="mt-6 rounded-xl border border-black/10 bg-white p-4">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
            Support email
          </div>
          <p className="mt-2 text-sm text-gray-800">
            For bugs, technical issues, or anything not working as expected,
            please email:
          </p>
          <a
            href="mailto:support@praywithgod.ai"
            className="mt-2 inline-block text-sm font-medium text-gray-950 underline underline-offset-4 hover:text-gray-700"
          >
            support@praywithgod.ai
          </a>
        </div>

        <div className="mt-6 rounded-xl border border-black/10 bg-white p-4">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
            Status
          </div>
          <p className="mt-2 text-sm text-gray-800">
            This page currently routes issue reporting through email so the
            PrayWithGod.ai team can review problems directly.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:support@praywithgod.ai?subject=PWG%20Issue%20Report"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Email Support
          </a>
          <Link
            href="/contact"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            FAQ
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-600">
          Tip: if you see an error, grab the exact message and the steps to
          reproduce it — that’s gold for fixing fast.
        </p>
      </div>
    </main>
  );
}