// app/prayer-types/muslim/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MUSLIM_PRAYER_TYPES,
  getMuslimPrayerTypeBySlug,
} from "@/lib/muslimPrayerTypes";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return MUSLIM_PRAYER_TYPES.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = getMuslimPrayerTypeBySlug(params.slug);

  if (!item) {
    return {
      title: "Muslim Prayer Types | PrayWithGod.ai",
    };
  }

  return {
    title: `${item.title} | Muslim Prayer Types | PrayWithGod.ai`,
    description: `Learn what ${item.title} means in Muslim prayer life, when it may be helpful, and how PrayWithGod.ai can support a respectful devotional starting point.`,
    alternates: {
      canonical: `/prayer-types/muslim/${item.slug}`,
    },
  };
}

export default function MuslimPrayerTypeDetailPage({ params }: PageProps) {
  const item = getMuslimPrayerTypeBySlug(params.slug);

  if (!item) {
    notFound();
  }

  const prayHref = getPrayerTypePrayHref("muslim", item.title);

  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Muslim Prayer Types
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
              href="/prayer-types/muslim"
              className="inline-flex rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white"
            >
              Explore Muslim Prayer Types
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                What is this Muslim prayer type?
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
                How this prayer type functions in Muslim prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Muslim prayer life, a prayer moment may be understood not only
                by its words but also by its time, posture, rhythm, and devotional
                direction. A visitor may come carrying gratitude, fatigue,
                uncertainty, need, surrender, or a desire to return to remembrance.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Naming the prayer type helps a person understand the lane they are
                in. Dawn feels different from night. Midday recollection feels
                different from evening release. This kind of page helps clarify the
                spiritual character of the moment without pretending to replace
                formal religious teaching or sacred text.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
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
                If you want prayer support shaped by this Muslim devotional
                direction, PrayWithGod.ai can help you begin with respectful,
                clear, modern language while keeping the experience anchored in
                the kind of prayer you are actually seeking.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These pages are not presented as Qur’an, not as a translation of
                Qur’an, and not as official religious text. They are meant to help
                visitors understand the prayer type, find a better starting point,
                and approach the tradition with greater clarity and reverence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={prayHref}
                  className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Pray This Type
                </Link>

                <Link
                  href="/prayer-types/muslim"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to Muslim Prayer Types
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
                  href="/prayer-types/muslim"
                  className="text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  Explore all Muslim prayer types →
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