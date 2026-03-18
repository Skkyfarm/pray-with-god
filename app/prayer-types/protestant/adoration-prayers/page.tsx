import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adoration Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what adoration prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a reverent prayer of worship and awe.",
  alternates: {
    canonical: "/prayer-types/protestant/adoration-prayers",
  },
};

const keyThemes = [
  "God’s holiness",
  "God’s greatness",
  "Worship and reverence",
  "Wonder and awe",
  "Love for God",
  "Humility before God",
];

const commonMoments = [
  "When you want to focus on God rather than your own requests",
  "When you feel grateful, awed, or deeply moved in prayer",
  "When you want to begin prayer with worship and reverence",
  "When you need to re-center your heart on who God is",
  "When words of praise come more naturally than words of request",
];

const faqItems = [
  {
    question: "What is an adoration prayer?",
    answer:
      "An adoration prayer is a prayer of worship that focuses on who God is rather than on what we want God to do. It expresses reverence, awe, love, and honor toward God.",
  },
  {
    question: "Is adoration the same as praise?",
    answer:
      "They are closely related, but adoration usually leans more toward reverence, awe, and the holiness of God, while praise often emphasizes gratitude and celebration of what God has done.",
  },
  {
    question: "Do adoration prayers ask for anything?",
    answer:
      "Usually the main emphasis is not on asking. Adoration prayers are centered on worship. Still, many Christians begin with adoration before moving into confession, thanksgiving, or petition.",
  },
];

export default function ProtestantAdorationPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Adoration Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Adoration prayers are prayers of worship. In Protestant life, they
            turn the heart toward the greatness, holiness, love, and majesty of
            God. Instead of beginning with requests, an adoration prayer begins
            with reverence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">What is an adoration prayer?</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                An adoration prayer is a prayer that focuses on who God is. It
                is less about personal needs and more about worship, awe,
                humility, and delight in God’s character. In Protestant
                practice, adoration often highlights God’s holiness, goodness,
                faithfulness, mercy, power, and eternal nature.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This kind of prayer helps a believer step out of the rush of
                daily life and remember that prayer is not only about asking for
                help. It is also about honoring God, loving God, and drawing
                near in wonder.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How adoration prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Many Protestants naturally weave adoration into personal prayer,
                church prayer, devotional reading, and spontaneous worship.
                Adoration helps place everything else in the right order. Before
                confession, before petition, before asking for guidance, the
                soul remembers who God is.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In that sense, adoration prayers can calm anxiety, deepen trust,
                and restore perspective. They remind the believer that God is
                worthy of worship even before any specific request is answered.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">When to pray an adoration prayer</h2>

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
                  A person may pray an adoration prayer at sunrise, during a
                  quiet devotional time, after reading Scripture, after being
                  struck by the beauty of creation, or during a season when they
                  want to grow in worship rather than only in request-driven
                  prayer.
                </p>

                <p>
                  It can also be a healthy starting place for someone who feels
                  overwhelmed. Adoration shifts attention from fear and pressure
                  toward the steady character of God.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on reverence, worship, awe, and
                the greatness of God, PrayWithGod.ai can help you generate a
                Protestant-style adoration prayer in clear, modern language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you know you want to pray,
                but you would like a gentle structure, stronger wording, or a
                more focused starting point.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pray"
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
                Adoration prayers naturally connect with other forms of
                Protestant prayer, especially praise prayers and thanksgiving
                prayers.
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
                Adoration prayers help believers stop, look up, and worship.
                They are not mainly about getting something from God. They are
                about loving, honoring, and glorifying God for who He is.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}