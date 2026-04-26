// app/prayer-types/buddhist/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";
import { BUDDHIST_PRAYER_TYPES } from "@/lib/buddhistPrayerTypes";

type PageProps = {
  params: {
    slug: string;
  };
};

type GenericPrayerType = {
  slug: string;
} & Record<string, unknown>;

function getPrayerType(slug: string): GenericPrayerType | undefined {
  return BUDDHIST_PRAYER_TYPES.find(
    (item) => item.slug === slug
  ) as GenericPrayerType | undefined;
}

function pickText(
  item: GenericPrayerType,
  keys: string[],
  fallback = ""
): string {
  for (const key of keys) {
    const value = item[key];
    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }
  return fallback;
}

function getPrayerTypeContent(item: GenericPrayerType) {
  const title = pickText(item, ["title", "label", "name"], "Buddhist Prayer");
  const description = pickText(
    item,
    ["description", "summary", "intro", "excerpt"],
    "Explore this Buddhist prayer type on PrayWithGod.ai."
  );
  const longDescription = pickText(
    item,
    ["longDescription", "long_description", "details", "body", "content"],
    description
  );
  const whenToUse = pickText(
    item,
    ["whenToUse", "when_to_use", "usage", "when"],
    "This prayer type may be used during moments of reflection, devotion, gratitude, guidance, remembrance, or spiritual focus."
  );
  const focus = pickText(
    item,
    ["focus", "emphasis", "theme"],
    "It often emphasizes mindfulness, compassion, reverence, wisdom, intention, and inner steadiness."
  );
  const howToPractice = pickText(
    item,
    ["howToPractice", "how_to_practice", "practice", "approach"],
    "Begin quietly, settle your attention, bring your intention to mind, and continue with sincerity, humility, and care."
  );

  return {
    title,
    description,
    longDescription,
    whenToUse,
    focus,
    howToPractice,
  };
}

export function generateStaticParams() {
  return BUDDHIST_PRAYER_TYPES.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const prayerType = getPrayerType(params.slug);

  if (!prayerType) {
    return {
      title: "Buddhist Prayer Type | PrayWithGod.ai",
      description:
        "Explore Buddhist prayer types and devotional practices on PrayWithGod.ai.",
    };
  }

  const content = getPrayerTypeContent(prayerType);

  return {
    title: `${content.title} | Buddhist Prayer Types | PrayWithGod.ai`,
    description: content.description,
    alternates: {
      canonical: `/prayer-types/buddhist/${prayerType.slug}`,
    },
  };
}

export default function BuddhistPrayerTypeDetailPage({ params }: PageProps) {
  const prayerType = getPrayerType(params.slug);

  if (!prayerType) {
    notFound();
  }

  const content = getPrayerTypeContent(prayerType);
  const prayHref = getPrayerTypePrayHref("buddhist", content.title);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50">
      <section className="mx-auto flex w-full max-w-4xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/prayer-types/buddhist"
            className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-900"
          >
            ← Back to Buddhist Prayer Types
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white/95 shadow-lg backdrop-blur">
          <div className="border-b border-sky-100 bg-gradient-to-r from-sky-50 via-white to-amber-50 px-6 py-8 sm:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Buddhist Prayer Type
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {content.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={prayHref}
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
              >
                Pray This Type
              </Link>

              <Link
                href="/prayer-types/buddhist"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-sky-800 shadow-sm transition hover:bg-white"
              >
                Explore Buddhist Prayer Types
              </Link>
            </div>
          </div>

          <div className="space-y-8 px-6 py-8 sm:px-8">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                What this prayer type is
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {content.longDescription}
              </p>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  When people use this prayer
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {content.whenToUse}
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  What it often emphasizes
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {content.focus}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                A simple way to approach it
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {content.howToPractice}
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">
                Gentle note
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-700">
                PrayWithGod.ai offers original devotional support inspired by
                Buddhist themes and practices. It does not replace formal
                liturgy, temple instruction, or authoritative sacred texts.
              </p>
            </section>

            <section className="flex flex-col gap-3 border-t border-sky-100 pt-6 sm:flex-row">
              <Link
                href={prayHref}
                className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                Pray This Type
              </Link>

              <Link
                href="/prayer-types/buddhist"
                className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-800 transition hover:bg-sky-50"
              >
                Back to Buddhist Prayer Types
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}