// app/prayer-types/protestant/evening-prayers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Evening Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what evening prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer for rest, reflection, peace, and trust at the close of day.",
  alternates: {
    canonical: "/prayer-types/protestant/evening-prayers",
  },
};

const keyThemes = [
  "Closing the day with God",
  "Reflection and gratitude",
  "Peace and rest",
  "Release of worry",
  "Trust through the night",
  "God’s steady presence",
];

const commonMoments = [
  "When you want to end the day with prayer and peace",
  "When your mind is still busy and you need help settling down",
  "When you want to reflect on the day before resting",
  "When you need to release worry, regret, or stress to God",
  "When you want to entrust the night and tomorrow to His care",
];

const faqItems = [
  {
    question: "What is an evening prayer?",
    answer:
      "An evening prayer is a prayer offered at the close of day. It often includes gratitude, reflection, confession, release of worry, and trust in God’s care through the night.",
  },
  {
    question: "Do evening prayers have to be formal?",
    answer:
      "No. In Protestant practice, evening prayers may be short and simple or longer and more reflective. They can be quiet, personal prayers that help a believer end the day in peace.",
  },
  {
    question: "Why are evening prayers helpful?",
    answer:
      "Evening prayers can calm the mind, help a person reflect honestly, and place unfinished concerns into God’s hands. They create a gentle rhythm of peace, trust, and rest at day’s end.",
  },
];

export default function ProtestantEveningPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Evening Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Evening prayers are prayers that close the day with God. In
            Protestant life, they help believers reflect, give thanks, release
            burdens, and rest in God’s care as the day comes to an end.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">What is an evening prayer?</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                An evening prayer is a prayer offered near the end of the day.
                It may include gratitude for the day’s mercies, reflection on
                what was difficult or unfinished, confession where needed, and
                trust in God’s peace through the night.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, evening prayer is often quiet and
                personal. It creates space to slow down, gather the day before
                God, and rest without carrying every thought or burden alone
                into the night.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How evening prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Evening prayers help believers end the day with honesty and
                peace. They create a faithful rhythm of reflection, gratitude,
                repentance, and release, especially when the day has been busy,
                heavy, or emotionally noisy.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant life, evening prayer may happen at bedside, in a
                quiet room, with family, or in a few final moments before sleep.
                It is a way of saying that even unfinished things, unanswered
                questions, and lingering worries can be placed into God’s
                hands.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">When to pray an evening prayer</h2>

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
                  Someone may pray an evening prayer after a demanding day of
                  work, after family stress, before sleep during a season of
                  anxiety, after receiving difficult news, or simply as a
                  peaceful daily habit that closes the day in trust.
                </p>

                <p>
                  Evening prayers are also helpful on good days. A believer may
                  use them to thank God for ordinary mercies, reflect on where
                  grace appeared, and settle into rest without rushing past the
                  meaning of the day.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on reflection, peace, gratitude,
                and rest at the close of day, PrayWithGod.ai can help you
                generate a Protestant-style evening prayer in clear, calming,
                modern language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when your thoughts feel crowded,
                the day has been heavy, or you want a gentler and more focused
                way to settle your heart before sleep.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("protestant", "Evening Prayers")}
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
                Evening prayers naturally connect with thanksgiving prayers,
                confession prayers, protection prayers, and lament prayers,
                especially when a believer wants to close the day with honesty
                and peace.
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
                Evening prayers help believers end the day with God. They are
                prayers of reflection, release, peace, and trust through the
                night.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}