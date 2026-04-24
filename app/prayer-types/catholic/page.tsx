// app/prayer-types/catholic/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";
import { CATHOLIC_PRAYER_TYPES } from "@/lib/catholicPrayerTypes";

export const metadata: Metadata = {
  title: "Catholic Prayer Types | PrayWithGod.ai",
  description:
    "Explore Catholic prayer types including adoration, contrition, thanksgiving, petition, intercession, Marian devotion, Eucharistic devotion, seasonal prayers, and more on PrayWithGod.ai.",
  alternates: {
    canonical: "/prayer-types/catholic",
  },
};

function getPrayerTypeHref(slug: string) {
  return `/prayer-types/catholic/${slug}`;
}

export default function CatholicPrayerTypesPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            PrayWithGod.ai
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Catholic Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Catholic prayer includes many distinct directions of prayer:
            worship, repentance, gratitude, petition, intercession, seasonal
            prayer, family prayer, devotion, and quiet reflection before God.
            This page gives those prayer types a clearer structure so visitors
            can understand what kind of prayer support they need.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={getPrayerTypePrayHref("catholic", "Adoration")}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Start a Catholic Prayer
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
          <h2 className="text-2xl font-semibold">What you’ll find here</h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Some Catholic prayers are deeply recognizable in traditional form.
            Others are broader directions of prayer such as adoration,
            contrition, intercession, mercy, or discernment. This section is
            focused on those prayer-type lanes so visitors can better understand
            the shape of Catholic prayer life.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These pages are meant to guide, explain, and support. They are not
            a replacement for official liturgy or treasured traditional texts.
            They give each prayer type a real home and make the Catholic side of
            the site feel fuller, clearer, and more useful.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CATHOLIC_PRAYER_TYPES.map((item) => (
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
                  href={getPrayerTypePrayHref("catholic", item.title)}
                  className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
                >
                  Pray this type
                </Link>

                <Link
                  href={getPrayerTypeHref(item.slug)}
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">
            Use PrayWithGod.ai as a Catholic prayer companion
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you already know what kind of Catholic prayer support you want,
            you can go directly into the prayer experience. If you are still
            discerning what kind of prayer fits your need, these pages will help
            you choose a better starting point.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={getPrayerTypePrayHref("catholic", "Adoration")}
              className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800"
            >
              Go to Catholic Prayer Experience
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