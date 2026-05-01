// /app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

const howToUseSteps = [
  {
    title: "1. Choose a tradition.",
    body: "Select the spiritual tradition that feels closest to home, or choose Exploring if you are still finding your way.",
  },
  {
    title: "2. Select Quick Prayer.",
    body: "Quick Prayer creates a prayer right away. Some traditions also offer Customize a Prayer and Prayer by Type if you want more options.",
  },
  {
    title: "3. Read or listen.",
    body: "After your prayer is formed, you can read it quietly or select Read Aloud.",
  },
  {
    title: "4. Save, share, or print.",
    body: "Supporters can save meaningful prayers to return to later. Anyone can print or share a prayer.",
  },
  {
    title: "5. Return anytime.",
    body: "PrayWithGod.ai is here whenever you need a quiet moment of prayer, reflection, or seeking.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <div className="mb-8 flex justify-center">
        <Image
          src="/brand/pwg-logo.png"
          alt="PrayWithGod.ai logo"
          width={420}
          height={315}
          className="h-auto w-full max-w-[420px]"
          priority
        />
      </div>

      <h1 className="text-center text-3xl font-semibold">
        About PrayWithGod.ai
      </h1>

      <p className="mt-3 text-center text-gray-800">
        PrayWithGod.ai (PWG) is a calm, respectful space for prayer and
        reflection - designed for people who want help putting their intentions
        into words, at their own pace.
      </p>

      <div className="mt-8 space-y-4">
        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">How to Use PrayWithGod.ai</h2>

          <div className="mt-4 divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white/60 text-sm text-gray-800">
            {howToUseSteps.map((step) => (
              <details key={step.title} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-semibold text-gray-950 transition hover:bg-white/70">
                  <span>{step.title}</span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </summary>

                <p className="px-4 pb-4 leading-relaxed text-gray-800">
                  {step.body}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Our mission</h2>
          <p className="mt-2 text-sm text-gray-800">
            To offer a peaceful place to pray - where people can slow down,
            breathe, reflect, and find words for what is in their heart.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">What PWG is</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
            <li>
              A prayer companion that helps you gather your thoughts and put
              them into words for prayer.
            </li>
            <li>A respectful experience across multiple traditions.</li>
            <li>A privacy-first experience, with optional personal features.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">What PWG is not</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
            <li>Not a replacement for clergy, therapy, or medical care.</li>
            <li>Not a place for harassment, hostility, or shaming.</li>
            <li>
              Not a guarantee of outcomes - simply a supportive place to pray.
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">A gentle approach</h2>
          <p className="mt-2 text-sm text-gray-800">
            PWG is meant to feel calm, welcoming, and respectful. You choose the
            tradition and tone. The goal is to offer a quiet place to pray,
            reflect, and find words when you need them.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Get started</h2>
          <p className="mt-2 text-sm text-gray-800">
            You can start praying immediately. Prayer stays free for everyone.
            Signing in is only for extra features like saving prayers and
            keeping track of your preferences.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/pray"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Pray
            </Link>

            <Link
              href="/support"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Help
            </Link>

            <Link
              href="/donate"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Support PWG
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}