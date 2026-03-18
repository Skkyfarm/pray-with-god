// app/prayer-types/protestant/protection-prayers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Protection Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what protection prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer for safety, strength, peace, and God’s care.",
  alternates: {
    canonical: "/prayer-types/protestant/protection-prayers",
  },
};

const keyThemes = [
  "God’s protection and care",
  "Safety in danger or uncertainty",
  "Peace in fearful situations",
  "Strength under pressure",
  "Trust in God’s presence",
  "Covering for self and others",
];

const commonMoments = [
  "When you are anxious about safety or uncertainty",
  "When a loved one is traveling or facing risk",
  "When you want prayer for peace in a fearful season",
  "When you feel vulnerable, exposed, or under pressure",
  "When you want to ask God for covering, strength, and steadiness",
];

const faqItems = [
  {
    question: "What is a protection prayer?",
    answer:
      "A protection prayer is a prayer that asks God for safety, covering, peace, strength, and watchful care. It may be prayed for yourself, for loved ones, or for people facing danger, uncertainty, or fear.",
  },
  {
    question: "Are protection prayers only for emergencies?",
    answer:
      "No. Protection prayers are often used in moments of danger or concern, but they are also common in everyday life. Many believers pray them before travel, during anxious seasons, or simply as a daily act of trust in God’s care.",
  },
  {
    question: "Does a protection prayer mean nothing difficult will happen?",
    answer:
      "Not necessarily. In Protestant prayer life, protection prayers are not guarantees of an easy path. They are honest requests for God’s guarding presence, wisdom, strength, and peace in whatever lies ahead.",
  },
];

export default function ProtestantProtectionPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Protection Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Protection prayers are prayers for safety, peace, strength, and
            God’s watchful care. In Protestant life, they help believers bring
            fear, uncertainty, vulnerability, and concern before God with trust
            and steady hope.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                What is a protection prayer?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A protection prayer is a prayer that asks God to guard, guide,
                and sustain a person or situation. It may ask for physical
                safety, emotional steadiness, spiritual strength, wise choices,
                peaceful rest, or protection for loved ones in uncertain
                circumstances.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, protection prayer reflects trust that
                God is present in both ordinary life and fearful moments.
                Believers do not pray protection because they think they control
                the future. They pray because they trust God’s care in the
                future they cannot control.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How protection prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Protection prayers are common in personal devotion, family
                prayer, church gatherings, times of travel, illness, public
                crisis, and moments of private anxiety. They give believers a
                faithful way to respond when fear or uncertainty rises.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant life, protection prayer often includes both
                direct requests for safety and broader requests for wisdom,
                courage, discernment, and peace. It is not only about danger
                being removed. It is also about being held steady under God’s
                care.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                When to pray a protection prayer
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
                  Someone may pray a protection prayer before travel, during a
                  storm, when a child leaves for school, while a loved one is
                  deployed or working in a high-risk setting, or during a
                  season of personal fear and vulnerability.
                </p>

                <p>
                  Protection prayers are also fitting when the danger is less
                  visible. A believer may pray for protection from anxiety,
                  temptation, destructive choices, spiritual drift, panic, or
                  the emotional pressure of an unsettled time.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on safety, peace, strength, and
                God’s watchful care, PrayWithGod.ai can help you generate a
                Protestant-style protection prayer in clear, compassionate,
                modern language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when fear is present and you
                want prayer that feels steady, grounding, and full of trust
                rather than panic or vague wording.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("protestant", "Protection Prayers")}
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
                Protection prayers naturally connect with healing prayers,
                guidance prayers, intercessory prayers, and morning prayers,
                especially when a believer is asking God to guard the path
                ahead.
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
                Protection prayers help believers bring fear and uncertainty to
                God. They are prayers of safety, peace, and trust in His care.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}