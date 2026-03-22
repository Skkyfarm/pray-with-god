// app/prayer-types/hindu/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { HINDU_PRAYER_TYPES } from "@/lib/hinduPrayerTypes";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Hindu Prayer Types | PrayWithGod.ai",
  description:
    "Explore Hindu prayer types on PrayWithGod.ai, including peace, devotion, praise, intention, forgiveness, sacred-focus, and personal-request prayer paths.",
  alternates: {
    canonical: "/prayer-types/hindu",
  },
};

export default function HinduPrayerTypesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Hindu Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Hindu Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            These pages are designed to help visitors understand several Hindu
            devotional prayer directions with reverence, clarity, and modern
            language. They are not scripture, not mantra text, and not an
            authoritative translation of sacred material.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                Why these prayer type pages matter
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Hindu devotional life can move through many different inner
                lanes: peace, praise, loving devotion, sacred focus, personal
                request, forgiveness, or intention setting. Not every prayer
                begins from the same emotional or spiritual place.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These pages help a visitor understand the tone and direction of
                the prayer type they are entering, so the experience feels more
                reverent, more understandable, and less generic.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                Browse Hindu prayer types
              </h2>

              <div className="mt-6 grid gap-4">
                {HINDU_PRAYER_TYPES.map((item) => (
                  <div
                    key={item.slug}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {item.shortDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={`/prayer-types/hindu/${item.slug}`}
                        className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                      >
                        Read more
                      </Link>

                      <Link
                        href={getPrayerTypePrayHref("hindu", item.title)}
                        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                      >
                        Pray from this type
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Included here</h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Shanti Path (Peace Prayer)
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Gratitude / Offering
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Bhakti Devotional
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Sankalpa (Intention Setting)
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Stuti (Praise)
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Prarthana (Personal Request)
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Gayatri / Sacred Mantra
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Kshama Prarthana (Forgiveness)
                </li>
              </ul>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Start here</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                You can browse these prayer types first, or go directly into the
                Hindu prayer experience and let the selected type shape the tone
                and direction of the prayer.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pray?path=hindu"
                  className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Go to Hindu Prayer Experience
                </Link>

                <Link
                  href="/prayer-types"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to Prayer Types
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Simple summary</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This section explains major Hindu prayer directions in a way
                that is respectful, clear, and useful for visitors who want to
                understand the devotional lane they are entering.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}