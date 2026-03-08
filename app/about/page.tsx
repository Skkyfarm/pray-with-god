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
            To offer a gentle, non-coercive place to pray — where people can
            slow down, breathe, and reflect, without pressure or performance.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">What PWG is</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
            <li>A prayer companion that helps you express an intention clearly.</li>
            <li>A respectful experience across multiple traditions.</li>
            <li>Private-first by design, with optional community features.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">What PWG is not</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
            <li>Not a replacement for clergy, therapy, or medical care.</li>
            <li>Not a place for coercion, harassment, or shaming.</li>
            <li>Not a guarantee of outcomes — just a supportive space to pray.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Non-coercive promise</h2>
          <p className="mt-2 text-sm text-gray-800">
            PWG aims to be gentle and respectful. You choose the tradition and
            tone. We avoid fear-based pressure, manipulation, or “hard sells.”
            Prayer is personal — PWG exists to support it, not control it.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Get started</h2>
          <p className="mt-2 text-sm text-gray-800">
            You can start praying immediately. Joining is optional — it’s there
            for features like saved intentions, preferences, and community
            participation.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/pray"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Pray
            </Link>
            <Link
              href="/join"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Join Free
            </Link>
            <Link
              href="/support"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Support
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-600">
            This page is easy to expand later (team story, roadmap, FAQs, etc.).
          </p>
        </section>
      </div>
    </main>
  );
}