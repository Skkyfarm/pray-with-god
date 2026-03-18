// app/prayer-types/protestant/praise-prayers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Praise Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what praise prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer centered on God’s character, power, and faithfulness.",
  alternates: {
    canonical: "/prayer-types/protestant/praise-prayers",
  },
};

const keyThemes = [
  "Celebrating God’s character",
  "Joy and worship",
  "God’s faithfulness",
  "God’s power and goodness",
  "Exalting God",
  "Delight in who God is",
];

const commonMoments = [
  "When you feel moved to celebrate God’s goodness",
  "When you want to begin prayer with joy and worship",
  "When you want to focus more on God than on your problems",
  "When you are reflecting on God’s faithfulness in your life",
  "When your heart needs lifting toward hope, gratitude, and worship",
];

const faqItems = [
  {
    question: "What is a praise prayer?",
    answer:
      "A praise prayer is a prayer that celebrates God for who He is. It honors His goodness, faithfulness, power, mercy, wisdom, and love, and it lifts the heart in worship.",
  },
  {
    question: "How is praise different from thanksgiving?",
    answer:
      "Thanksgiving usually emphasizes gratitude for what God has done, while praise emphasizes God’s character and worthiness whether or not a specific blessing is in view. Many prayers include both.",
  },
  {
    question: "How is praise different from adoration?",
    answer:
      "Praise and adoration are closely related. Adoration often leans more toward reverence and awe before God’s holiness, while praise often has a slightly more joyful, celebratory tone focused on God’s greatness and goodness.",
  },
];

export default function ProtestantPraisePrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Praise Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Praise prayers are prayers that celebrate God’s greatness and
            goodness. In Protestant life, they help believers lift their hearts
            in joyful worship and remember that God is worthy of praise in every
            season.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">What is a praise prayer?</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A praise prayer is a prayer that honors God for who He is. It
                celebrates His faithfulness, love, holiness, strength, wisdom,
                mercy, and power. Instead of beginning with need or confession,
                a praise prayer begins with the greatness of God.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, praise is not limited to music or church
                services. It can be deeply personal and appear in quiet prayer,
                spoken devotion, daily reflection, or spontaneous moments of
                gratitude and worship.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How praise prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Praise prayers help believers turn attention away from constant
                self-focus and back toward God. They create spiritual balance by
                reminding the heart that prayer is not only about asking for
                help but also about honoring the One who is worthy of worship.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In many Protestant settings, praise is woven naturally into
                personal devotion, group prayer, public worship, and daily life.
                It strengthens joy, reinforces trust, and helps believers
                remember that God remains good and faithful even when life feels
                unsettled.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">When to pray a praise prayer</h2>

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
                  Someone may pray a praise prayer after an answered prayer,
                  during a church service, while reading Scripture, after
                  noticing beauty in creation, or during a moment of deep
                  gratitude and spiritual joy.
                </p>

                <p>
                  Praise can also be powerful in hard seasons. A believer may
                  not feel cheerful, but may still choose to praise God for His
                  unchanging character, His presence, and His faithfulness in
                  the middle of uncertainty.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on joy, worship, and celebration
                of God’s goodness, PrayWithGod.ai can help you generate a
                Protestant-style praise prayer in clear, modern language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you feel moved to honor God
                but want stronger wording, better structure, or a more focused
                expression of worship.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("protestant", "Praise Prayers")}
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
                Praise prayers naturally connect with adoration prayers and
                thanksgiving prayers. They also pair well with morning prayers
                when a believer wants to begin the day with worship.
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
                Praise prayers help believers lift their eyes and honor God.
                They are joyful prayers of worship that celebrate who God is.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}