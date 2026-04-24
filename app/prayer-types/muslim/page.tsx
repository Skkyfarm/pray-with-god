// app/prayer-types/muslim/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { MUSLIM_PRAYER_TYPES } from "@/lib/muslimPrayerTypes";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Muslim Prayer Types | PrayWithGod.ai",
  description:
    "Explore Muslim prayer types on PrayWithGod.ai, including Fajr, Dhuhr, Asr, Maghrib, and Isha, with respectful guidance and live prayer-type pages.",
  alternates: {
    canonical: "/prayer-types/muslim",
  },
};

function getPrayerTypeHref(slug: string) {
  return `/prayer-types/muslim/${slug}`;
}

export default function MuslimPrayerTypesPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Muslim Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Muslim Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            These pages are designed to help visitors understand the devotional
            direction of major Muslim prayer moments with reverence, clarity,
            and modern language. They are not Qur’an, not a translation of
            Qur’an, and not official religious text.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={getPrayerTypePrayHref("muslim", "Fajr")}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Start a Muslim Prayer
            </Link>

            <Link
              href="/prayer-types"
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white hover:shadow-md"
            >
              View All Prayer Types
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                Why these prayer type pages matter
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Muslim prayer life is shaped not only by words, but also by
                time, rhythm, remembrance, and reverence. Dawn carries a
                different spiritual tone than night. Midday recollection feels
                different from sunset return.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These pages help a visitor understand the character of each
                prayer moment so they can approach the tradition with more
                humility and clarity.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                Browse Muslim prayer types
              </h2>

              <div className="mt-6 grid gap-4">
                {MUSLIM_PRAYER_TYPES.map((item) => (
                  <article
                    key={item.slug}
                    className="pwg-guided-action flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-5 backdrop-blur-sm"
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    <p className="mt-2 flex-1 text-base leading-7 text-slate-700">
                      {item.shortDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={getPrayerTypePrayHref("muslim", item.title)}
                        className="pwg-guided-action rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
                      >
                        Pray this type
                      </Link>

                      <Link
                        href={getPrayerTypeHref(item.slug)}
                        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Included here</h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Fajr Prayer
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Dhuhr Prayer
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Asr Prayer
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Maghrib Prayer
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Isha Prayer
                </li>
              </ul>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Start here</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                You can browse the prayer types first, or go directly into the
                Muslim prayer experience and let the selected type shape the
                direction of the prayer.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("muslim", "Fajr")}
                  className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
                >
                  Go to Muslim Prayer Experience
                </Link>

                <Link
                  href="/prayer-types"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to Prayer Types
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Simple summary</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This section helps explain major Muslim prayer moments in a way
                that is respectful, clear, and useful for visitors who want to
                understand the prayer type they are entering.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}