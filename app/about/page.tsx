// /app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">About PrayWithGod.ai</h1>
      <p className="mt-3 text-gray-800">
        PrayWithGod.ai (PWG) is a calm, respectful space for prayer and
        reflection — designed for people who want help putting their intentions
        into words, at their own pace.
      </p>

      <div className="mt-8 space-y-4">
        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Our mission</h2>
          <p className="mt-2 text-sm text-gray-800">
            To offer a peaceful place to pray — where people can slow down,
            breathe, reflect, and find words for what is on their heart.
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
              Not a guarantee of outcomes — simply a supportive place to pray.
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