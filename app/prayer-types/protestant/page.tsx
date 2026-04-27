// app/prayer-types/protestant/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { PROTESTANT_PRAYER_TYPES } from "@/lib/protestantPrayerTypes";

export const metadata: Metadata = {
  title: "Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Explore Protestant prayer types including adoration, confession, thanksgiving, intercession, petition, praise, lament, healing, guidance, and more on PrayWithGod.ai.",
  alternates: {
    canonical: "/prayer-types/protestant",
  },
};

function getPrayerTypeHref(slug: string) {
  return `/prayer-types/protestant/${slug}`;
}

function getPrayThisTypeHref(slug: string) {
  return `/pray?path=protestant&type=${slug}`;
}

export default function ProtestantPrayerTypesPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            PrayWithGod.ai
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Protestant Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Protestant prayer often emphasizes a direct, personal relationship
            with God through Jesus Christ. This page gathers major Protestant
            prayer types so visitors can better understand what each kind of
            prayer is for and choose the kind of prayer support they need.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/pray?path=protestant"
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Start a Protestant Prayer
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
          <h2 className="text-2xl font-semibold">What youâ€™ll find here</h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Some prayers are focused on worship. Some are focused on confession,
            gratitude, grief, healing, or asking God for help. Organizing these
            prayer types into real pages makes the site easier to navigate and
            gives each topic a home of its own.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These pages are also meant to help people who may not know the
            traditional names for different types of prayer. A visitor may not
            search for â€œpetitionary prayer,â€ but they may know they need help,
            comfort, healing, or direction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROTESTANT_PRAYER_TYPES.map((item) => (
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
                  href={getPrayThisTypeHref(item.slug)}
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
            If you already know what kind of prayer support you want, you can go
            directly to the prayer experience and choose the Protestant
            tradition. If you are still exploring, these pages will help you
            decide which prayer type best matches your need.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pray?path=protestant"
              className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800"
            >
              Go to Prayer Experience
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
