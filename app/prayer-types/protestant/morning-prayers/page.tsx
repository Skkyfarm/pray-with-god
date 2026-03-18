import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Morning Prayers | Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Learn what morning prayers are in Protestant practice, when to pray them, and how PrayWithGod.ai can help you generate a prayer to begin the day with peace, gratitude, and trust.",
  alternates: {
    canonical: "/prayer-types/protestant/morning-prayers",
  },
};

const keyThemes = [
  "Beginning the day with God",
  "Gratitude for a new day",
  "Guidance and wisdom",
  "Strength for daily responsibilities",
  "Peace before the day unfolds",
  "Trust in God’s presence",
];

const commonMoments = [
  "When you want to begin the day with prayer and focus",
  "When you need peace before work, family duties, or appointments",
  "When you want to place the day in God’s hands",
  "When you are seeking wisdom and steadiness for what lies ahead",
  "When you want your first attention to be turned toward God",
];

const faqItems = [
  {
    question: "What is a morning prayer?",
    answer:
      "A morning prayer is a prayer offered at the start of the day. It often expresses gratitude for a new day, asks God for wisdom and strength, and places the coming hours under His care.",
  },
  {
    question: "Does a morning prayer have to be long or formal?",
    answer:
      "No. In Protestant practice, morning prayers may be brief and simple or longer and more reflective. What matters most is beginning the day with sincerity and trust.",
  },
  {
    question: "Why are morning prayers important?",
    answer:
      "Morning prayers help set the tone for the day. They can quiet anxiety, focus the mind, encourage gratitude, and remind believers that they do not face the day alone.",
  },
];

export default function ProtestantMorningPrayersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Protestant Prayer Types
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Morning Prayers
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Morning prayers are prayers that begin the day with God. In
            Protestant life, they help believers start with gratitude, seek
            guidance for the hours ahead, and place the day under God’s care
            before its demands begin to crowd in.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">What is a morning prayer?</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                A morning prayer is a prayer offered at the beginning of the
                day. It may thank God for life and breath, ask for wisdom,
                strength, peace, and protection, and place the coming day into
                His hands.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant practice, morning prayer is often simple,
                personal, and direct. It is a way of saying that the day is not
                only a schedule to manage but a life to be lived in God’s
                presence.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">
                How morning prayers function in Protestant prayer life
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                Morning prayers help believers orient themselves before the day
                becomes noisy or hurried. They can create a steady rhythm of
                gratitude, dependence, and peace, especially when life feels
                crowded or uncertain.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                In Protestant life, morning prayer may happen in a quiet chair,
                over coffee, at the kitchen table, in the car before work, or
                during a few still moments before the demands of the day fully
                begin. It is less about ceremony and more about faithful
                attention.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">When to pray a morning prayer</h2>

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
                  Someone may pray a morning prayer before going to work, before
                  caring for family, before a medical appointment, before
                  traveling, or before facing a difficult conversation later in
                  the day.
                </p>

                <p>
                  Morning prayers are also valuable on quiet days. Even when the
                  schedule is ordinary, a believer may begin with prayer to ask
                  for patience, clarity, kindness, and a heart that remains
                  aware of God throughout the day.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">How PrayWithGod.ai can help</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                If you want a prayer centered on beginning the day with peace,
                gratitude, wisdom, and trust, PrayWithGod.ai can help you
                generate a Protestant-style morning prayer in clear, uplifting,
                modern language.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-700">
                This can be especially helpful when you want to start the day
                well but need stronger wording, clearer structure, or a more
                focused spiritual starting point.
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
                Morning prayers naturally connect with guidance prayers,
                protection prayers, praise prayers, and thanksgiving prayers,
                especially when a believer wants to begin the day with worship
                and steady trust.
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
                Morning prayers help believers begin the day with God. They are
                prayers of gratitude, direction, and peace for the hours ahead.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}