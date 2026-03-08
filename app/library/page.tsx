import Link from "next/link";

export default function LibraryPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Library</h1>
      <p className="mt-3 text-gray-800">
        A growing collection of gentle resources for prayer, reflection, and
        spiritual support — built to be calm, respectful, and non-coercive.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Guides</h2>
          <p className="mt-2 text-sm text-gray-800">
            Practical help for getting started: how to pray, how to write an
            intention, and how to stay consistent without pressure.
          </p>
          <div className="mt-5">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed rounded-xl bg-black/20 px-4 py-2 text-sm font-semibold text-gray-700"
              title="Coming soon"
            >
              Coming Soon
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Scripture & Readings</h2>
          <p className="mt-2 text-sm text-gray-800">
            Short, soothing readings you can return to when you need clarity,
            comfort, or steadiness.
          </p>
          <div className="mt-5">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed rounded-xl bg-black/20 px-4 py-2 text-sm font-semibold text-gray-700"
              title="Coming soon"
            >
              Coming Soon
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Meditation</h2>
          <p className="mt-2 text-sm text-gray-800">
            Simple reflection prompts and quiet breathing practices — optional,
            gentle, and not preachy.
          </p>
          <div className="mt-5">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed rounded-xl bg-black/20 px-4 py-2 text-sm font-semibold text-gray-700"
              title="Coming soon"
            >
              Coming Soon
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Audio / Video</h2>
          <p className="mt-2 text-sm text-gray-800">
            When you’d rather listen than read — short clips designed for calm,
            not hype.
          </p>
          <div className="mt-5">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed rounded-xl bg-black/20 px-4 py-2 text-sm font-semibold text-gray-700"
              title="Coming soon"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Want something added?</h2>
        <p className="mt-2 text-sm text-gray-800">
          Tell us what would help: a guide, a reading theme, or a practice you
          want PWG to support.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/support"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Support
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Contact
          </Link>
          <Link
            href="/pray"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Pray
          </Link>
        </div>
      </div>
    </main>
  );
}