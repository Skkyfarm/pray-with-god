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

function getPrayerTypeHref(slug: string) {
  return `/prayer-types/buddhist/${slug}`;
}

export default function BuddhistPrayerTypesPage() {
  const defaultPrayerTitle =
    BUDDHIST_PRAYER_TYPES[0]?.title || "Metta (Loving Kindness)";

  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
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

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={getPrayerTypePrayHref("buddhist", defaultPrayerTitle)}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              Pray this type
            </Link>

            <Link
              href="/prayer-types"
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white hover:shadow-md"
            >
              View All Prayer Types
            </Link>
          </div>
        </div>

        <section className="mt-12 rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold">
              Choose a Buddhist prayer type
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-700">
              Tap a type below to begin a Buddhist prayer shaped by that
              spiritual direction.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BUDDHIST_PRAYER_TYPES.map((item) => (
              <Link
                key={item.slug}
                href={getPrayerTypePrayHref("buddhist", item.title)}
                className="pwg-guided-action rounded-2xl border border-slate-200 bg-slate-50/90 p-5 text-left shadow-sm transition hover:border-sky-200 hover:bg-white hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.shortDescription}
                </p>

                <span className="mt-4 inline-flex rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  Pray this type
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
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

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                Browse Buddhist prayer types
              </h2>

              <div className="mt-6 grid gap-4">
                {BUDDHIST_PRAYER_TYPES.map((item) => (
                  <article
                    key={item.slug}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 backdrop-blur-sm"
                  >
                    <Link
                      href={getPrayerTypePrayHref("buddhist", item.title)}
                      className="pwg-guided-action block rounded-2xl p-1 transition"
                    >
                      <h3 className="text-xl font-semibold">{item.title}</h3>

                      <p className="mt-2 text-base leading-7 text-slate-700">
                        {item.shortDescription}
                      </p>

                      <span className="mt-4 inline-flex rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                        Pray this type
                      </span>
                    </Link>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={getPrayerTypePrayHref("buddhist", item.title)}
                        className="pwg-guided-action rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
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
                {BUDDHIST_PRAYER_TYPES.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={getPrayerTypePrayHref("buddhist", item.title)}
                      className="pwg-guided-action block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-white hover:shadow-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Start here</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                You can browse these prayer types first, or go directly into the
                Buddhist prayer experience and let the selected type shape the
                tone and direction of the prayer.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("buddhist", defaultPrayerTitle)}
                  className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
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

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
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