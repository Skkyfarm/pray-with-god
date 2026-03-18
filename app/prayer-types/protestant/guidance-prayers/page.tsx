// app/prayer-types/protestant/guidance-prayers/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";

export const metadata: Metadata = {
  title: "Guidance Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what guidance prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer for wisdom, discernment, and direction.",
  alternates: {
    canonical: "/prayer-types/protestant/guidance-prayers",
  },
};

const keyThemes = [
  "Seeking God’s direction",
  "Wisdom and discernment",
  "Clarity in decisions",
  "Trust in God’s leading",
  "Patience while waiting",
  "Faithful next steps",
];

const commonMoments = [
  "When you need to make an important decision",
  "When you feel uncertain about what to do next",
  "When you are asking God for wisdom rather than impulse",
  "When you are waiting for clarity in a confusing season",
  "When you want to move forward with humility and trust",
];

const faqItems = [
  {
    question: "What is a guidance prayer?",
    answer:
      "A guidance prayer is a prayer that asks God for wisdom, discernment, clarity, and direction. It is a way of seeking His help when facing decisions, uncertainty, or the need for a faithful next step.",
  },
  {
    question: "Is a guidance prayer only for major life decisions?",
    answer:
      "No. Guidance prayers can be used for major decisions such as work, relationships, health, or calling, but they are also appropriate for everyday choices, conversations, priorities, and spiritual direction.",
  },
  {
    question: "Does guidance prayer always bring an immediate answer?",
    answer:
      "Not always. In Protestant prayer life, guidance often includes both asking and waiting. A person may receive clarity quickly, or may need patience, Scripture, counsel, and steady trust while direction unfolds over time.",
  },
];

export default function ProtestantGuidancePrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Guidance Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Guidance prayers are prayers for wisdom, discernment, and direction.
            In Protestant life, they help believers seek God’s leading when
            facing uncertainty, important choices, or seasons where the next
            step is not yet clear.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">What is a guidance prayer?</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A guidance prayer is a prayer that asks God for wisdom and
                direction. It may be prayed when someone needs help making a
                decision, understanding a situation, choosing between paths, or
                simply knowing how to move forward faithfully.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, guidance prayer reflects trust that God
                is not distant or silent to those who seek Him. It is a prayer
                of dependence that says, in effect, “Lord, show me the way, and
                help me walk in it.”
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How guidance prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Guidance prayers are common in personal devotion, family life,
                ministry, work, relationships, and times of transition. They
                help believers slow down, resist impulsive decisions, and place
                real choices before God with humility.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant life, guidance is often sought through prayer
                alongside Scripture, wise counsel, honest self-examination, and
                patience. Guidance prayer is not only about getting an instant
                answer. It is also about becoming the kind of person who listens
                and responds faithfully.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">When to pray a guidance prayer</h2>

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
                  Someone may pray a guidance prayer when choosing between job
                  paths, making a family decision, deciding whether to move,
                  seeking wisdom in a relationship, facing a medical choice, or
                  trying to know how best to respond in a difficult situation.
                </p>

                <p>
                  Guidance prayers are also useful in ordinary life. A believer
                  may pray for wisdom in conversation, patience with timing,
                  discernment about a next step, or clarity about where their
                  energy and attention should be given.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on wisdom, discernment, and
                direction, PrayWithGod.ai can help you generate a
                Protestant-style guidance prayer in clear, thoughtful, modern
                language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you feel uncertain, are
                carrying a major decision, or want a more focused way to ask God
                for clarity and faithful next steps.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayerTypePrayHref("protestant", "Guidance Prayers")}
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
                Guidance prayers naturally connect with petitionary prayers,
                protection prayers, morning prayers, and confession prayers,
                especially when someone is seeking a faithful path forward.
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
                Guidance prayers help believers ask God for wisdom and direction.
                They are prayers of trust for the next faithful step.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
