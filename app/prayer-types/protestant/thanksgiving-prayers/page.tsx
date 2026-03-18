import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanksgiving Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what thanksgiving prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer of gratitude and praise.",
  alternates: {
    canonical: "/prayer-types/protestant/thanksgiving-prayers",
  },
};

const keyThemes = [
  "Gratitude to God",
  "Recognition of God’s provision",
  "Thankfulness in daily life",
  "Remembering answered prayer",
  "Joy and humility",
  "Trust in God’s ongoing care",
];

const commonMoments = [
  "When you want to thank God for a blessing, provision, or answered prayer",
  "When you are reflecting on the good things in your life",
  "When you want to begin or end the day with gratitude",
  "When you want to shift your focus from stress to thankfulness",
  "When you want prayer to reflect joy, humility, and appreciation",
];

const faqItems = [
  {
    question: "What is a thanksgiving prayer?",
    answer:
      "A thanksgiving prayer is a prayer that expresses gratitude to God for His goodness, mercy, provision, faithfulness, and care. It focuses on giving thanks rather than asking for something new.",
  },
  {
    question: "Is thanksgiving prayer the same as praise?",
    answer:
      "They are closely related, but thanksgiving usually emphasizes gratitude for what God has done, while praise more broadly celebrates who God is. Many prayers naturally contain both.",
  },
  {
    question: "Can I pray thanksgiving prayers even in a hard season?",
    answer:
      "Yes. In Protestant practice, thanksgiving is not limited to easy seasons. Many believers give thanks for God’s presence, strength, and faithfulness even in times of grief, uncertainty, or struggle.",
  },
];

export default function ProtestantThanksgivingPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Thanksgiving Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Thanksgiving prayers are prayers of gratitude. In Protestant life,
            they help believers pause, remember God’s goodness, and respond with
            sincere thanks for His provision, mercy, faithfulness, and care.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                What is a thanksgiving prayer?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A thanksgiving prayer is a prayer that focuses on gratitude to
                God. It expresses appreciation for blessings received, needs met,
                prayers answered, strength given, and the steady presence of God
                in everyday life.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, thanksgiving is often woven naturally
                into personal prayer, family prayer, church worship, mealtime
                prayer, and private devotion. It helps believers become more
                aware of grace instead of rushing past it.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How thanksgiving prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Thanksgiving prayers remind Christians that prayer is not only
                about bringing needs before God. It is also about noticing,
                remembering, and honoring His goodness. Gratitude helps form a
                healthier spiritual rhythm by making room for joy, humility, and
                trust.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These prayers can be simple and brief, or they can become deeply
                personal reflections on how God has sustained someone through a
                specific season. They are often especially meaningful after an
                answered prayer, a recovery, a provision, or a moment of peace.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                When to pray a thanksgiving prayer
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
                  Someone may pray a thanksgiving prayer after receiving good
                  news, making it through a difficult week, seeing a loved one
                  improve, finding unexpected help, or simply noticing the quiet
                  gifts of ordinary life.
                </p>

                <p>
                  Thanksgiving prayers can also be powerful during hardship.
                  They do not deny pain. Instead, they help the believer hold
                  onto God’s faithfulness even while life is unfinished,
                  uncertain, or heavy.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on gratitude, appreciation, and
                recognition of God’s goodness, PrayWithGod.ai can help you
                generate a Protestant-style thanksgiving prayer in clear, modern
                language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you feel thankful but want a
                more complete, beautiful, or focused way to express that
                gratitude in prayer.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pray?path=protestant"
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
                Thanksgiving prayers naturally connect with praise prayers and
                adoration prayers. They can also be paired with guidance or
                healing prayers when gratitude and need are both present.
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
                Thanksgiving prayers help believers stop, notice grace, and say
                thank you. They train the heart to remember that God’s goodness
                is worth naming, not just feeling.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}