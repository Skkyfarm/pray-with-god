// app/prayer-types/jewish/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  JEWISH_PRAYER_TYPES,
  getJewishPrayerTypeBySlug,
} from "@/lib/jewishPrayerTypes";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return JEWISH_PRAYER_TYPES.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getJewishPrayerTypeBySlug(params.slug);

  if (!item) {
    return {
      title: "Jewish Prayer Types | PrayWithGod.ai",
    };
  }

  return {
    title: `${item.title} | Jewish Prayer Types | PrayWithGod.ai`,
    description: `Learn what ${item.title} means in Jewish prayer life, when it is used, and how PrayWithGod.ai can help as a respectful prayer companion.`,
    alternates: {
      canonical: `/prayer-types/jewish/${item.slug}`,
    },
  };
}

export default function JewishPrayerTypeDetailPage({ params }: PageProps) {
  const item = getJewishPrayerTypeBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const prayHref = getPrayerTypePrayHref("jewish", item.title);

  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Jewish Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {item.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            {item.shortDescription}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={prayHref}
              className="inline-flex rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              Pray This Type
            </Link>

            <Link
              href="/prayer-types/jewish"
              className="inline-flex rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white"
            >
              Explore Jewish Prayer Types
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                What is this Jewish prayer form?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.shortDescription}
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.intro}
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                How this prayer form functions in Jewish prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Jewish prayer life, this form belongs to a larger pattern of
                sacred time, communal memory, devotion, blessing, repentance, or
                structured worship. It is not simply a generic mood-based prayer
                category.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Naming the form helps visitors understand that Jewish prayer is
                shaped not only by personal feeling, but also by rhythm, season,
                liturgy, covenant, and communal life.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                When this prayer form may be encountered
              </h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                {item.commonMoments.map((moment) => (
                  <li key={moment} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {moment}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Example situations</h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                {item.exampleSituations.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want prayer support shaped by this Jewish prayer form,
                PrayWithGod.ai can help you begin with respectful, clear, modern
                language while keeping the experience anchored in the kind of
                prayer path you are actually seeking.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These pages are not a replacement for Hebrew liturgy, siddur
                text, or formal communal worship. They are meant to help
                visitors understand the form, choose a clearer starting point,
                and enter prayer with more awareness.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={prayHref}
                  className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Pray This Type
                </Link>

                <Link
                  href="/prayer-types/jewish"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to Jewish Prayer Types
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Frequently asked questions</h2>

              <div className="mt-6 space-y-6">
                {item.faqItems.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Key themes</h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                {item.keyThemes.map((theme) => (
                  <li key={theme} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {theme}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Related direction</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.relatedDirection}
              </p>

              <div className="mt-6">
                <Link
                  href="/prayer-types/jewish"
                  className="text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  Explore all Jewish prayer types →
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">A simple summary</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.summary}
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}