// app/prayer-types/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerOptions, type TraditionKey } from "@/lib/prayerCatalog";

export const metadata: Metadata = {
  title: "Prayer Types | PrayWithGod.ai",
  description:
    "Explore prayer types across Protestant, Catholic, Jewish, Muslim, Hindu, and Buddhist traditions, with guidance for visitors seeking a non-denominational Christian starting point.",
  alternates: {
    canonical: "/prayer-types",
  },
};

type TraditionSection = {
  key: TraditionKey;
  label: string;
  href: string;
  prayHref: string;
  summary: string;
  emphasis: string;
};

const TRADITIONS: TraditionSection[] = [
  {
    key: "protestant",
    label: "Protestant",
    href: "/prayer-types/protestant",
    prayHref: "/pray?path=protestant",
    summary:
      "Explore Protestant prayer types such as thanksgiving, praise, lament, guidance, healing, and protection.",
    emphasis:
      "Helpful for visitors who want accessible Christian prayer language shaped by recognizable devotional lanes.",
  },
  {
    key: "catholic",
    label: "Catholic",
    href: "/prayer-types/catholic",
    prayHref: "/pray?path=catholic",
    summary:
      "Explore Catholic prayer types such as adoration, contrition, intercession, mercy, family prayer, and seasonal devotion.",
    emphasis:
      "Helpful for visitors who want a more explicitly Catholic prayer structure and devotional direction.",
  },
  {
    key: "jewish",
    label: "Jewish",
    href: "/prayer-types/jewish",
    prayHref: "/pray?path=jewish",
    summary:
      "Explore Jewish prayer types such as Shacharit, Mincha, Maariv, Tehillim, Hallel, and Kabbalat Shabbat.",
    emphasis:
      "Helpful for visitors who want prayer lanes shaped by Jewish devotional rhythm and recognizable forms.",
  },
  {
    key: "muslim",
    label: "Muslim",
    href: "/prayer-types/muslim",
    prayHref: "/pray?path=muslim",
    summary:
      "Explore Muslim prayer moments such as Fajr, Dhuhr, Asr, Maghrib, and Isha with respectful devotional guidance.",
    emphasis:
      "Helpful for visitors who want prayer shaped by the spiritual tone of daily Islamic prayer times.",
  },
  {
    key: "hindu",
    label: "Hindu",
    href: "/prayer-types/hindu",
    prayHref: "/pray?path=hindu",
    summary:
      "Explore Hindu prayer directions such as peace, devotion, praise, offering, sacred focus, forgiveness, and intention.",
    emphasis:
      "Helpful for visitors who want to understand the devotional lane they are entering rather than receive a generic prayer.",
  },
  {
    key: "buddhist",
    label: "Buddhist",
    href: "/prayer-types/buddhist",
    prayHref: "/pray?path=buddhist",
    summary:
      "Explore Buddhist prayer and reflection directions such as loving-kindness, compassion, mindfulness, equanimity, release, and refuge.",
    emphasis:
      "Helpful for visitors who want a contemplative starting point shaped by a clear inner spiritual direction.",
  },
];

function getTypeCount(key: TraditionKey) {
  return getPrayerOptions(key).filter((item) => item.kind === "type").length;
}

export default function PrayerTypesPage() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore Prayer Types by Tradition
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Not every prayer begins from the same place. Sometimes a person
            needs praise. Sometimes peace. Sometimes mercy, release, guidance,
            compassion, repentance, or loving devotion. Prayer types help a
            visitor understand the spiritual lane they are stepping into.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">What you’ll find here</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This page helps you explore different ways people pray across
                traditions. You can learn the tone and purpose of a prayer path
                before you begin, or you can jump directly into a tradition’s
                prayer experience.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Some visitors arrive knowing exactly where they belong. Others
                are still finding their footing. This page is meant to make that
                first step clearer, calmer, and more intentional.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/prayer-types/protestant"
                  className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore Protestant
                </Link>
                <Link
                  href="/prayer-types/catholic"
                  className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore Catholic
                </Link>
                <Link
                  href="/prayer-types/jewish"
                  className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore Jewish
                </Link>
                <Link
                  href="/prayer-types/muslim"
                  className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore Muslim
                </Link>
                <Link
                  href="/prayer-types/hindu"
                  className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore Hindu
                </Link>
                <Link
                  href="/prayer-types/buddhist"
                  className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore Buddhist
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">
                Non-Denominational Christians
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Many non-denominational Christians pray through familiar
                Christian patterns such as thanksgiving, guidance,
                intercession, confession, praise, and daily surrender.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                On PrayWithGod.ai, that spiritual style is closest to the
                broader Christian prayer paths currently found in the Protestant
                hub. Dedicated non-denominational prayer-type lanes can grow
                from here over time, but visitors in that space already have a
                meaningful place to begin.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/prayer-types/protestant"
                  className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Explore Christian Prayer Types
                </Link>
                <Link
                  href="/pray?path=protestant"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  Begin a Christian Prayer
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Browse traditions</h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {TRADITIONS.map((tradition) => {
                  const count = getTypeCount(tradition.key);

                  return (
                    <article
                      key={tradition.key}
                      className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold">
                          {tradition.label}
                        </h3>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
                          {count} types
                        </span>
                      </div>

                      <p className="mt-3 text-base leading-7 text-slate-700">
                        {tradition.summary}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {tradition.emphasis}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <Link
                          href={tradition.href}
                          className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
                        >
                          Explore {tradition.label}
                        </Link>

                        <Link
                          href={tradition.prayHref}
                          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                        >
                          Prayer Experience
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-3xl border border-amber-200 bg-amber-50/85 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">How to use this page</h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                <li className="rounded-2xl bg-white/70 px-4 py-3">
                  Browse a tradition first if you want to understand its prayer
                  lanes before you begin.
                </li>
                <li className="rounded-2xl bg-white/70 px-4 py-3">
                  Jump straight into a tradition’s prayer experience if you
                  already know where you want to start.
                </li>
                <li className="rounded-2xl bg-white/70 px-4 py-3">
                  Use this page as a calm front door into the part of prayer
                  life that best fits your moment.
                </li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">A simple way to begin</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you already know your tradition, start there. If you are
                still deciding, read a few summaries and choose the lane that
                feels spiritually familiar, respectful, and clear.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold">Simple summary</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This page is the front door to prayer-type exploration across
                multiple traditions, with a gentle starting point for visitors
                who want orientation before they pray.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}