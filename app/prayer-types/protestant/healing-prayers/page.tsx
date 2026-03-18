// app/prayer-types/protestant/healing-prayers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Healing Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what healing prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer for physical, emotional, mental, and spiritual healing.",
  alternates: {
    canonical: "/prayer-types/protestant/healing-prayers",
  },
};

const keyThemes = [
  "Healing and restoration",
  "God’s mercy and care",
  "Strength in weakness",
  "Comfort in suffering",
  "Hope during recovery",
  "Wholeness in body, mind, and spirit",
];

const commonMoments = [
  "When you are sick or recovering from illness",
  "When a loved one needs healing or strength",
  "When you are carrying emotional pain or exhaustion",
  "When you want to pray for comfort, recovery, or restoration",
  "When you need hope in the middle of weakness or uncertainty",
];

const faqItems = [
  {
    question: "What is a healing prayer?",
    answer:
      "A healing prayer is a prayer that asks God for healing, comfort, strength, and restoration. It may focus on physical illness, emotional pain, mental distress, spiritual weariness, or a combination of these burdens.",
  },
  {
    question: "Are healing prayers only for physical sickness?",
    answer:
      "No. In Protestant practice, healing prayer can include physical recovery, but it may also address grief, anxiety, trauma, exhaustion, spiritual heaviness, and the need for God’s restoring presence in every part of life.",
  },
  {
    question: "Does praying for healing mean recovery is guaranteed?",
    answer:
      "Healing prayers are prayers of faith and trust, not formulas. Protestants commonly pray boldly for healing while also entrusting the outcome to God’s wisdom, timing, mercy, and care.",
  },
];

export default function ProtestantHealingPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Healing Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Healing prayers are prayers for restoration, strength, comfort, and
            mercy. In Protestant life, they help believers bring sickness,
            pain, weakness, fear, and recovery before God with hope and trust.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">What is a healing prayer?</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A healing prayer is a prayer that asks God to bring healing,
                relief, strength, peace, and restoration. It may focus on the
                body, the mind, the heart, or the soul. In Protestant practice,
                healing prayer often reflects both honest need and confident
                dependence on God’s mercy.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Some healing prayers are prayed in moments of serious illness or
                crisis. Others are offered during long recovery, emotional
                exhaustion, chronic pain, spiritual weariness, or the quiet
                burdens people carry every day.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How healing prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Healing prayers are common in personal devotion, family prayer,
                church gatherings, pastoral care, hospital visits, and times of
                shared concern. They allow believers to bring weakness honestly
                before God without pretending to be stronger than they are.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant life, healing prayer is not only about asking for
                a miracle. It also includes asking for endurance, peace,
                comfort, wise medical care, emotional steadiness, and God’s
                sustaining presence through the entire journey.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">When to pray a healing prayer</h2>

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
                  Someone may pray a healing prayer during surgery and recovery,
                  after a diagnosis, while living with chronic illness, when a
                  loved one is in the hospital, or during a season of deep
                  emotional strain and fatigue.
                </p>

                <p>
                  Healing prayers are also fitting when a person feels worn
                  down, discouraged, overwhelmed, or spiritually drained. In
                  those moments, healing may include strength to endure,
                  comfort in fear, and grace to keep going one day at a time.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on healing, comfort, recovery, or
                restoration, PrayWithGod.ai can help you generate a
                Protestant-style healing prayer in clear, compassionate, modern
                language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you are facing illness or
                strain and want a prayer that feels steady, hopeful, and honest
                without being shallow or forced.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("protestant", "Healing Prayers")}
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
                Healing prayers naturally connect with intercessory prayers,
                lament prayers, protection prayers, and thanksgiving prayers,
                depending on whether the season is crisis, recovery, or relief.
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
                Healing prayers help believers bring weakness and pain before
                God. They are prayers of hope, comfort, and trust in His care.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}