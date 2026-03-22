// app/prayer-types/buddhist/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BUDDHIST_PRAYER_TYPES,
  getBuddhistPrayerTypeBySlug,
} from "@/lib/buddhistPrayerTypes";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return BUDDHIST_PRAYER_TYPES.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getBuddhistPrayerTypeBySlug(params.slug);

  if (!item) {
    return {
      title: "Buddhist Prayer Types | PrayWithGod.ai",
    };
  }

  return {
    title: `${item.title} | Buddhist Prayer Types | PrayWithGod.ai`,
    description: `Learn what ${item.title} means in Buddhist prayer and reflection, when it may be helpful, and how PrayWithGod.ai can support a respectful spiritual starting point.`,
    alternates: {
      canonical: `/prayer-types/buddhist/${item.slug}`,
    },
  };
}

export default function BuddhistPrayerTypeDetailPage({ params }: PageProps) {
  const item = getBuddhistPrayerTypeBySlug(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Buddhist Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {item.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            {item.shortDescription}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                What is this Buddhist prayer type?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.shortDescription}
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.intro}
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How this prayer type functions in Buddhist reflection
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Buddhist prayer and reflection can move through different inner
                directions such as loving-kindness, compassion, awareness,
                steadiness, release, forgiveness, dedication, and refuge. A
                prayer type page helps clarify the spiritual lane a person is
                stepping into.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Naming the prayer type helps the visitor understand the tone,
                posture, and intention of the moment. Loving-kindness feels
                different from equanimity. Compassion feels different from
                release. This kind of page helps create reverence and clarity
                without pretending to replace sacred texts, formal teaching, or
                established religious practice.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                When this prayer type may be helpful
              </h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                {item.commonMoments.map((moment) => (
                  <li key={moment} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {moment}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Example situations</h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                {item.exampleSituations.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want prayer support shaped by this Buddhist spiritual
                direction, PrayWithGod.ai can help you begin with respectful,
                clear, modern language while keeping the experience anchored in
                the type of reflection or prayer you are actually seeking.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These pages are not presented as scripture, not as formal
                liturgical wording, and not as official religious text. They are
                meant to help visitors understand the prayer type, find a better
                contemplative starting point, and approach the tradition with
                greater clarity and care.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("buddhist", item.title)}
                  className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Go to Buddhist Prayer Experience
                </Link>

                <Link
                  href="/prayer-types/buddhist"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to Buddhist Prayer Types
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
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
            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Key themes</h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                {item.keyThemes.map((theme) => (
                  <li key={theme} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {theme}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Related direction</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.relatedDirection}
              </p>

              <div className="mt-6">
                <Link
                  href="/prayer-types/buddhist"
                  className="text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  Explore all Buddhist prayer types →
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
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