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
            PrayWithGod.ai
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Buddhist Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Buddhist prayer and reflection can include loving-kindness,
            compassion, mindfulness, equanimity, release, forgiveness,
            dedication, and refuge. This section helps visitors understand those
            directions more clearly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={getPrayerTypePrayHref("buddhist", defaultPrayerTitle)}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Start a Buddhist Prayer
            </Link>

            <Link
              href="/prayer-types"
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white hover:shadow-md"
            >
              View All Prayer Types
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">What you'll find here</h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Buddhist devotional and reflective life can move through many
            different inner lanes: loving-kindness, compassion, mindfulness,
            equanimity, release, forgiveness, dedication, or refuge. Not every
            prayer or reflection begins from the same emotional or spiritual
            place.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These pages are not scripture, not liturgical text, and not an
            authoritative presentation of formal sacred material. They are
            definition pages meant to help visitors understand the tone and
            direction of Buddhist prayer and reflection types.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BUDDHIST_PRAYER_TYPES.map((item) => (
            <article
              key={item.slug}
              className="pwg-guided-action flex h-full flex-col rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>

              <p className="mt-4 flex-1 text-base leading-7 text-slate-700">
                {item.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("buddhist", item.title)}
                  className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
                >
                  Pray this type
                </Link>

                <Link
                  href={getPrayerTypeHref(item.slug)}
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">
            Use PrayWithGod.ai as a prayer companion
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you already know the Buddhist prayer direction you want to
            explore, you can go directly into the prayer experience. If you are
            learning, these pages can help you understand the tone and meaning
            of the prayer or reflection type first.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={getPrayerTypePrayHref("buddhist", defaultPrayerTitle)}
              className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800"
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
        </div>
      </section>
    </main>
  );
}
