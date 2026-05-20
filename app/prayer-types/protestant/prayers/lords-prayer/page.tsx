import type { Metadata } from "next";
import Link from "next/link";

const LORDS_PRAYER_KJV_PRAY_HREF =
  "/pray?path=protestant&mode=classic&prayerLabel=The+Lord%27s+Prayer&prayerKind=named";

export const metadata: Metadata = {
  title: "The Lord's Prayer | Protestant Prayers | PrayWithGod.ai",
  description:
    "Learn about The Lord's Prayer in Protestant Christian practice, its biblical roots, and how it is used in worship, discipleship, and personal devotion.",
  alternates: {
    canonical: "/prayer-types/protestant/prayers/lords-prayer",
  },
};

export default function ProtestantLordsPrayerPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Foundational Protestant Prayer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The Lord&apos;s Prayer
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The Lord&apos;s Prayer is one of the central prayers of Christian
            life. It is treasured across many Protestant traditions as both a
            prayer to be spoken and a pattern for learning how to pray.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={LORDS_PRAYER_KJV_PRAY_HREF}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 hover:shadow-[0_0_22px_rgba(14,165,233,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
            >
              Read / pray this prayer
            </Link>

            <Link
              href="/prayer-types/protestant"
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white"
            >
              Back to Protestant Prayers
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8">
          <section className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">Biblical roots</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              The Lord&apos;s Prayer comes from Jesus&apos; teaching in the
              Gospels, especially in the Sermon on the Mount in Matthew and in
              a shorter form in Luke. Christians have long received it as a
              direct teaching from Jesus about prayer.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Its movement is simple and profound: reverence for God, surrender
              to God&apos;s will, daily dependence, forgiveness, moral guidance,
              and deliverance from evil.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">
              Why it matters in Protestant prayer
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              In many Protestant churches, The Lord&apos;s Prayer is prayed in
              worship, taught to children and new believers, used in catechism
              or discipleship, and remembered as a guide for personal prayer.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Protestants often value it not only as a fixed prayer, but also
              as a model. Each line can shape a person&apos;s own prayers:
              honoring God, seeking His kingdom, asking for provision, confessing
              the need for forgiveness, and looking to God for protection.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">How it may be prayed</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Some people pray The Lord&apos;s Prayer word for word. Others
              pause over each phrase and use it as a doorway into personal
              prayer. In both cases, the prayer gives structure to the heart:
              worship first, then trust, need, mercy, and deliverance.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">Source note</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              PWG currently provides the King James Version wording for this
              Protestant prayer path. Other modern Bible translations and
              liturgical forms may have separate copyright or permission
              considerations.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}