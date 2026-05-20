import type { Metadata } from "next";
import Link from "next/link";

const PRAYER_OF_JABEZ_KJV_PRAY_HREF =
  "/pray?path=protestant&mode=classic&prayerLabel=The+Prayer+of+Jabez&prayerKind=named";

export const metadata: Metadata = {
  title: "The Prayer of Jabez | Protestant Prayers | PrayWithGod.ai",
  description:
    "Learn about The Prayer of Jabez from 1 Chronicles 4:10, its biblical setting, devotional meaning, and use in Protestant prayer life.",
  alternates: {
    canonical: "/prayer-types/protestant/prayers/prayer-of-jabez",
  },
};

export default function ProtestantPrayerOfJabezPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Biblical Protestant Prayer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The Prayer of Jabez
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The Prayer of Jabez is a short biblical prayer from 1 Chronicles
            4:10. It asks God for blessing, enlarged territory, His hand of
            help, and protection from evil.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={PRAYER_OF_JABEZ_KJV_PRAY_HREF}
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
            <h2 className="text-2xl font-semibold">Biblical setting</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Jabez appears briefly in 1 Chronicles among the genealogies of
              Israel. His prayer stands out because the biblical text pauses to
              remember both his character and his request to God.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              The prayer is direct and compact. Jabez asks God to bless him, to
              enlarge his coast, to keep His hand with him, and to keep him from
              evil and grief.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">
              Why it matters in Protestant prayer
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              In Protestant devotional life, the Prayer of Jabez is often used
              as a simple prayer of trust, calling, and dependence on God. It
              can be understood as asking not merely for comfort, but for God’s
              help in living faithfully and fruitfully.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-700">
              Many believers have prayed it when seeking God’s guidance,
              provision, protection, or a larger field of service. PWG presents
              it as a biblical prayer, not as a formula or guarantee.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">How it may be prayed</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              The Prayer of Jabez may be prayed word for word, reflected on line
              by line, or used as a starting point for personal prayer. Its
              themes include blessing, calling, God’s presence, protection, and
              freedom from harm.
            </p>
          </section>

          <section className="rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">Source note</h2>

            <p className="mt-4 text-base leading-7 text-slate-700">
              PWG currently provides the King James Version wording of 1
              Chronicles 4:10 for this Protestant prayer path. Other modern
              Bible translations may have separate copyright or permission
              considerations.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}