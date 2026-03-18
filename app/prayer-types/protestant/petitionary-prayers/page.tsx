import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Petitionary Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what petitionary prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer for your own needs, burdens, and hopes.",
  alternates: {
    canonical: "/prayer-types/protestant/petitionary-prayers",
  },
};

const keyThemes = [
  "Bringing personal needs to God",
  "Dependence on God",
  "Honest requests",
  "Trust and surrender",
  "Help in weakness",
  "Faith in God’s care",
];

const commonMoments = [
  "When you need help, strength, or comfort",
  "When you are facing uncertainty or pressure",
  "When you need wisdom for a decision",
  "When you are carrying fear, grief, or stress",
  "When you want to ask God plainly for provision, healing, or peace",
];

const faqItems = [
  {
    question: "What is a petitionary prayer?",
    answer:
      "A petitionary prayer is a prayer in which a person brings personal needs, concerns, burdens, or hopes before God. It is a direct and honest request for help, guidance, strength, provision, healing, or peace.",
  },
  {
    question: "How is petitionary prayer different from intercessory prayer?",
    answer:
      "Petitionary prayer usually focuses on your own needs, while intercessory prayer focuses on praying for others. Both are common and important in Protestant prayer life.",
  },
  {
    question: "Is it selfish to pray petitionary prayers?",
    answer:
      "Not when they are offered with sincerity, humility, and trust. Protestant prayer has long included bringing personal needs to God. Honest dependence on God is not selfishness; it is part of faith.",
  },
];

export default function ProtestantPetitionaryPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Petitionary Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Petitionary prayers are prayers that ask God for help. In Protestant
            life, they are a natural expression of dependence, trust, and
            honesty. Instead of hiding need, petitionary prayer brings it
            directly before God.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                What is a petitionary prayer?
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A petitionary prayer is a prayer in which someone brings their
                own needs, concerns, burdens, hopes, or desires before God. It
                may ask for guidance, healing, provision, courage, wisdom,
                forgiveness, peace, endurance, or help in a specific situation.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, petitionary prayer reflects a direct and
                personal relationship with God. The believer does not have to
                pretend to be strong, polished, or self-sufficient. Petitionary
                prayer says plainly, “Lord, I need help.”
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How petitionary prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Petitionary prayer is woven through personal devotion, church
                life, family prayer, and spontaneous daily faith. It is one of
                the most common forms of prayer because real life regularly
                confronts people with limits, fear, uncertainty, and need.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant prayer, asking God for help is not treated as a
                lesser form of prayer. It is part of living honestly before God.
                Petitionary prayer trains the heart to rely on Him rather than
                carrying every burden alone.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                When to pray a petitionary prayer
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
                  A person may pray a petitionary prayer when they are worried
                  about money, facing a diagnosis, feeling anxious about a
                  relationship, trying to make a difficult decision, searching
                  for work, asking for strength to endure, or simply needing
                  peace for the day ahead.
                </p>

                <p>
                  Petitionary prayer can also be deeply ordinary. Someone may
                  ask God for patience, wisdom in conversation, help with a
                  temptation, steadiness in fear, or grace to take the next
                  faithful step.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on your own need, burden, or hope,
                PrayWithGod.ai can help you generate a Protestant-style
                petitionary prayer in clear, thoughtful, modern language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you know what you need to
                bring before God but want stronger wording, better structure, or
                a more focused starting point for prayer.
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
                Petitionary prayers naturally connect with guidance prayers,
                healing prayers, protection prayers, and confession prayers,
                depending on what the believer is carrying before God.
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
                Petitionary prayers help believers bring their real needs to
                God. They are honest prayers of dependence, trust, and hope.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}