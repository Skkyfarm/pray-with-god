// app/prayer-types/jewish/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";
import { JEWISH_PRAYER_TYPES } from "@/lib/jewishPrayerTypes";

export const metadata: Metadata = {
  title: "Jewish Prayer Types | PrayWithGod.ai",
  description:
    "Explore Jewish prayer types and liturgical forms including Shacharit, Mincha, Maariv, Hallel, Tehillim, Birkat Hamazon, Tefilat Haderech, Kabbalat Shabbat, Mussaf, Tashlich, Selichot, and Vidui.",
  alternates: {
    canonical: "/prayer-types/jewish",
  },
};

function getPrayerTypeHref(slug: string) {
  return `/prayer-types/jewish/${slug}`;
}

export default function JewishPrayerTypesPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            PrayWithGod.ai
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Jewish Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Jewish prayer includes daily services, blessings, repentance
            practices, praise, confession, travel prayer, and sacred rhythms
            tied to time, season, and communal life. This section helps visitors
            understand those forms more clearly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={getPrayerTypePrayHref("jewish", "Shacharit")}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Start a Jewish Prayer
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
            Some Jewish prayer forms are daily services. Others are blessings,
            repentance practices, or prayer patterns linked to sacred seasons
            and ordinary life. These pages are meant to explain what these forms
            are and why they matter.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These pages are not replacements for Hebrew liturgy, siddur text, or
            formal communal worship. They are definition pages meant to help
            visitors understand the shape and meaning of Jewish prayer forms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {JEWISH_PRAYER_TYPES.map((item) => (
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
                  href={getPrayerTypePrayHref("jewish", item.title)}
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
            If you already know the Jewish prayer path you want to explore, you
            can go directly into the prayer experience. If you are learning,
            these pages can help you understand the structure and meaning of the
            prayer forms first.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={getPrayerTypePrayHref("jewish", "Shacharit")}
              className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800"
            >
              Go to Jewish Prayer Experience
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
