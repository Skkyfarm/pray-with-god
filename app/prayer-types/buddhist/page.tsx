// app/prayer-types/buddhist/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { BUDDHIST_PRAYER_TYPES } from "@/lib/buddhistPrayerTypes";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Buddhist Prayer Types | PrayWithGod.ai",
  description:
    "Explore Buddhist prayer types on PrayWithGod.ai, including loving-kindness, compassion, mindfulness, equanimity, release, forgiveness, dedication, and refuge.",
  alternates: {
    canonical: "/prayer-types/buddhist",
  },
};

export default function BuddhistPrayerTypesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Buddhist Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Buddhist Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            These pages are designed to help visitors understand several Buddhist
            prayer and reflection directions with respect, clarity, and modern
            language. They are not scripture, not liturgical text, and not an
            authoritative presentation of formal sacred material.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                Why these prayer type pages matter
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Buddhist devotional and reflective life can move through many
                different inner lanes: loving-kindness, compassion,
                mindfulness, equanimity, release, forgiveness, dedication, or
                refuge. Not every prayer or reflection begins from the same
                emotional or spiritual place.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These pages help a visitor understand the tone and direction of
                the prayer type they are entering, so the experience feels more
                grounded, more understandable, and less generic.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                Browse Buddhist prayer types
              </h2>

              <div className="mt-6 grid gap-4">
                {BUDDHIST_PRAYER_TYPES.map((item) => (
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
                        href={`/prayer-types/buddhist/${item.slug}`}
                        className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                      >
                        Read more
                      </Link>

                      <Link
                        href={getPrayerTypePrayHref("buddhist", item.title)}
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
                  Metta (Loving Kindness)
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Karuna (Compassion)
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Mindfulness Reflection
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Equanimity Practice
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Letting Go / Release
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Forgiveness Reflection
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Dedication of Merit
                </li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3">
                  Refuge / Protection
                </li>
              </ul>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Start here</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                You can browse these prayer types first, or go directly into the
                Buddhist prayer experience and let the selected type shape the
                tone and direction of the prayer.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pray?path=buddhist"
                  className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Go to Buddhist Prayer Experience
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
                This section explains major Buddhist prayer and reflection
                directions in a way that is respectful, clear, and useful for
                visitors who want to understand the spiritual lane they are
                entering.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}