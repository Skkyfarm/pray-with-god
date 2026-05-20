import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apostles' Creed | Protestant Prayers | PrayWithGod.ai",
  description:
    "Learn about the Apostles' Creed in Protestant Christian practice, its historical role, and why PWG is reviewing exact wording before displaying the traditional text.",
  alternates: {
    canonical: "/prayer-types/protestant/prayers/apostles-creed",
  },
};

export default function ProtestantApostlesCreedPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Foundational Protestant Prayer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Apostles&apos; Creed
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The Apostles&apos; Creed is a historic Christian confession of
            faith. Many Protestant traditions use it in worship, teaching,
            discipleship, and confirmation as a concise summary of core
            Christian belief.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/pray?path=protestant"
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 hover:shadow-[0_0_22px_rgba(14,165,233,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
            >
              Start a Protestant Prayer
            </Link>

            <Link
              href="/prayer-types/protestant"
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white"
            >
              Back to Protestant Prayers
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8">
          <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">What is the Apostles&apos; Creed?</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              The Apostles&apos; Creed is not a prayer from the Bible itself.
              It is a historic statement of Christian faith that summarizes
              central teachings about God the Father, Jesus Christ, the Holy
              Spirit, the church, forgiveness, resurrection, and eternal life.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">
              Why it matters in Protestant life
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              In Protestant settings, the Apostles&apos; Creed may be spoken
              during worship, taught in catechism or confirmation, used in
              discipleship, or studied as a compact guide to historic Christian
              belief.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Some Protestant churches recite it regularly. Others use it more
              occasionally as a teaching tool. In either case, it helps connect
              present-day believers with the broad stream of Christian faith
              handed down through the centuries.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">How PWG treats this text</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Because the Apostles&apos; Creed is a historical creed rather
              than a passage from the King James Version Bible, PWG is keeping
              its exact traditional wording under source and permission review
              before displaying a copyable version.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">Source note</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              This page explains the historical and devotional significance of
              the Apostles&apos; Creed. PWG is not currently displaying the full
              traditional creed text here while wording, source, and permission
              status are reviewed.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}