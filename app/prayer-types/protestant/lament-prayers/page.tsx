import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lament Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what lament prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer for grief, sorrow, struggle, and honest faith.",
  alternates: {
    canonical: "/prayer-types/protestant/lament-prayers",
  },
};

const keyThemes = [
  "Honest sorrow before God",
  "Grief and pain",
  "Faith in suffering",
  "Questions and struggle",
  "Trust in God’s presence",
  "Hope that survives hardship",
];

const commonMoments = [
  "When you are grieving a loss",
  "When life feels unfair, heavy, or confusing",
  "When you are suffering and do not know what to say",
  "When you want to speak honestly to God about pain",
  "When faith feels strained but you still want to remain in prayer",
];

const faqItems = [
  {
    question: "What is a lament prayer?",
    answer:
      "A lament prayer is a prayer that brings sorrow, grief, pain, confusion, fear, or distress honestly before God. It is a way of suffering faithfully instead of suffering silently.",
  },
  {
    question: "Are lament prayers faithless or negative?",
    answer:
      "No. In Protestant practice, lament is not the absence of faith. It is faith speaking honestly in a painful season. A lament prayer may include grief, questions, protest, and still remain turned toward God.",
  },
  {
    question: "Do lament prayers always end in hope?",
    answer:
      "Many lament prayers move toward trust or hope, but they do not need to rush there artificially. Honest lament gives pain a voice before God and allows hope to emerge truthfully rather than pretending everything is fine.",
  },
];

export default function ProtestantLamentPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Lament Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Lament prayers are prayers of sorrow, grief, struggle, and honest
            pain. In Protestant life, they make room for believers to come
            before God truthfully when life is heavy, confusing, unjust, or
            deeply painful.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">What is a lament prayer?</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A lament prayer is a prayer that brings pain honestly before
                God. It may express grief, fear, confusion, disappointment,
                injustice, loneliness, regret, exhaustion, or spiritual strain.
                Rather than hiding suffering, lament places it in God’s
                presence.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, lament reminds believers that prayer is
                not only for cheerful or victorious moments. It is also for the
                hard places. A person does not need to sound polished or strong
                to pray faithfully. Sometimes faith sounds like weeping,
                questioning, or crying out for mercy.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How lament prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Lament gives suffering a spiritual language. It helps believers
                remain in relationship with God when life feels raw and
                unresolved. Instead of shutting down or pretending everything is
                fine, lament allows pain to be spoken in faith.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant life, lament may appear in private devotion,
                pastoral prayer, crisis, illness, mourning, community grief, or
                seasons of spiritual dryness. It is especially valuable because
                it refuses both despair and denial. It tells the truth while
                still turning toward God.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">When to pray a lament prayer</h2>

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
                  Someone may pray a lament prayer after the death of a loved
                  one, during chronic illness, after betrayal, while living
                  through injustice, or in a season where fear and sadness seem
                  stronger than clarity.
                </p>

                <p>
                  Lament is also appropriate when a person is not sure exactly
                  what is wrong but knows their soul is troubled. A believer may
                  feel spiritually numb, emotionally exhausted, or painfully
                  aware that life is not as it should be.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on sorrow, grief, struggle, or
                honest pain before God, PrayWithGod.ai can help you generate a
                Protestant-style lament prayer in clear, compassionate, modern
                language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you are hurting and do not
                have the words, or when you want prayer that feels truthful
                without becoming empty, harsh, or hopeless.
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
                Lament prayers naturally connect with intercessory prayers,
                healing prayers, protection prayers, and confession prayers,
                depending on whether the pain is personal, shared, moral, or
                situational.
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
                Lament prayers help believers bring pain into the presence of
                God. They are honest prayers of grief that refuse to give up on
                faith.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}