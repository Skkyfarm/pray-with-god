import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Confession Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what confession prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer of repentance, honesty, and renewal.",
  alternates: {
    canonical: "/prayer-types/protestant/confession-prayers",
  },
};

const keyThemes = [
  "Honesty before God",
  "Repentance and humility",
  "Seeking forgiveness",
  "Spiritual renewal",
  "Grace and mercy",
  "Turning back to God",
];

const commonMoments = [
  "When you feel convicted about sin, failure, or wrong choices",
  "When you want to be honest with God about your heart",
  "When you need to ask for forgiveness and renewal",
  "When prayer has felt distant and you want to return with humility",
  "When you want to clear what is weighing on your conscience before God",
];

const faqItems = [
  {
    question: "What is a confession prayer?",
    answer:
      "A confession prayer is a prayer in which a person honestly acknowledges sin, failure, brokenness, or spiritual drift before God and seeks His mercy, forgiveness, and renewal.",
  },
  {
    question: "Is confession prayer only about guilt?",
    answer:
      "No. While confession does involve honesty about sin and failure, it is also deeply connected to grace, cleansing, restored fellowship with God, and a renewed desire to walk faithfully.",
  },
  {
    question: "Do Protestants practice confession prayers regularly?",
    answer:
      "Yes. In Protestant life, confession may appear in personal prayer, church worship, devotional reflection, or moments of private repentance. It is a normal part of sincere Christian prayer.",
  },
];

export default function ProtestantConfessionPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Confession Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Confession prayers are prayers of honest repentance. In Protestant
            life, they help believers come before God truthfully, admit sin or
            failure, seek mercy, and receive the grace that restores and renews.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                What is a confession prayer?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A confession prayer is a prayer in which someone acknowledges
                sin, failure, wrong attitudes, harmful choices, neglect, or
                spiritual drift before God. It is not about pretending, hiding,
                or polishing the truth. It is about honest repentance and a
                sincere desire to be made right before God.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, confession prayer rests on both truth
                and grace. The believer does not confess in order to impress
                God, but to come honestly before Him, seek forgiveness, and
                walk forward with a renewed heart.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How confession prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Confession is a normal part of Protestant prayer life. It may
                happen privately during personal devotion, spontaneously in a
                moment of conviction, or as part of gathered worship. Confession
                helps believers keep a tender conscience and a truthful
                relationship with God.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These prayers are not meant to trap a person in shame. Their
                deeper purpose is repentance, cleansing, reconciliation, and
                renewed obedience. Confession clears space for grace to be faced
                honestly and received with humility.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                When to pray a confession prayer
              </h2>

              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                {commonMoments.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Example situations</h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                <p>
                  A person may pray a confession prayer after speaking harshly,
                  acting selfishly, giving in to temptation, ignoring a needed
                  act of love, or realizing they have grown spiritually dull or
                  distant.
                </p>

                <p>
                  Confession may also arise in quieter ways. Someone might not
                  be carrying a dramatic failure, but simply sense that they
                  need to come before God with honesty, humility, and a fresh
                  willingness to be changed.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on repentance, honesty, mercy, and
                spiritual renewal, PrayWithGod.ai can help you generate a
                Protestant-style confession prayer in clear, thoughtful, modern
                language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you know you need to come
                honestly before God but want gentler structure, stronger wording,
                or a clearer starting place for confession and renewal.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("protestant", "Confession Prayers")}
                  className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Generate a Prayer
                </Link>

                <Link
                  href="/prayer-types/protestant"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to Protestant Prayer Types
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Frequently asked questions</h2>

              <div className="mt-6 space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {item.answer}
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
                {keyThemes.map((theme) => (
                  <li key={theme} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {theme}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Related direction</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Confession prayers naturally connect with petitionary prayers,
                guidance prayers, lament prayers, and thanksgiving prayers,
                especially when repentance leads into renewed trust and gratitude.
              </p>

              <div className="mt-6">
                <Link
                  href="/prayer-types/protestant"
                  className="text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                >
                  Explore all Protestant prayer types →
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">A simple summary</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Confession prayers help believers come clean before God. They
                are prayers of truth, humility, mercy, and a desire to be made
                new.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}