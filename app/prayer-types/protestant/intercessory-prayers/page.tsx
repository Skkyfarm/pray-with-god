import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intercessory Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what intercessory prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer for others with care and compassion.",
  alternates: {
    canonical: "/prayer-types/protestant/intercessory-prayers",
  },
};

const keyThemes = [
  "Praying for others",
  "Compassion and concern",
  "Lifting needs before God",
  "Love expressed through prayer",
  "Faith for another person’s situation",
  "Standing in the gap",
];

const commonMoments = [
  "When a loved one is sick, grieving, or under stress",
  "When a friend asks for prayer",
  "When a family member is facing a hard decision",
  "When a church, community, or nation is hurting",
  "When you feel led to pray for someone besides yourself",
];

const faqItems = [
  {
    question: "What is an intercessory prayer?",
    answer:
      "An intercessory prayer is a prayer offered on behalf of someone else. It brings another person’s needs, struggles, burdens, or hopes before God with care, compassion, and faith.",
  },
  {
    question: "How is intercessory prayer different from petitionary prayer?",
    answer:
      "Petitionary prayer usually refers to bringing your own needs before God, while intercessory prayer focuses on praying for others. Many believers practice both regularly.",
  },
  {
    question: "Do intercessory prayers have to be long or formal?",
    answer:
      "No. An intercessory prayer can be brief and simple or longer and more detailed. What matters most is sincere concern for the person or situation being lifted to God.",
  },
];

export default function ProtestantIntercessoryPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Intercessory Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Intercessory prayers are prayers for other people. In Protestant
            life, they are one of the clearest expressions of love, compassion,
            and shared faith. Instead of focusing on personal needs,
            intercessory prayer turns outward and lifts someone else before God.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                What is an intercessory prayer?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                An intercessory prayer is a prayer offered on behalf of someone
                else. It may be for healing, comfort, guidance, peace,
                protection, repentance, provision, or strength. In Protestant
                practice, intercession reflects the belief that believers can
                lovingly bring the needs of others before God in trust and hope.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                These prayers can be deeply personal, such as praying for a
                friend or family member, or much broader, such as praying for a
                church, a neighborhood, a country, or people suffering in a
                crisis.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How intercessory prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Intercessory prayer is common in personal devotion, church
                gatherings, Bible studies, pastoral care, and informal prayer
                among friends. It is one of the most practical ways Christians
                express care for one another.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In many Protestant settings, intercession is not treated as a
                rare or elite practice. It is simply part of everyday
                discipleship: hearing someone’s burden, caring about it, and
                bringing it honestly before God.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                When to pray an intercessory prayer
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
                  A person may pray an intercessory prayer for a parent in the
                  hospital, a child going through a difficult season, a friend
                  facing anxiety, a neighbor who lost work, or a church member
                  carrying grief.
                </p>

                <p>
                  Intercessory prayer can also extend beyond personal circles.
                  Many Protestants pray this way for pastors, teachers, leaders,
                  missionaries, first responders, communities in crisis, and
                  people affected by war, disaster, or injustice.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on someone else’s need,
                PrayWithGod.ai can help you generate a Protestant-style
                intercessory prayer in clear, compassionate, modern language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you care deeply about a
                person or situation but want a more focused, thoughtful, or
                complete way to express that concern in prayer.
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
                Intercessory prayers naturally connect with healing prayers,
                protection prayers, guidance prayers, and lament prayers,
                depending on the situation being carried before God.
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
                Intercessory prayers help believers carry one another before
                God. They are one of the clearest ways prayer becomes an act of
                love.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}