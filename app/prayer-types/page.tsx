import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer Types by Tradition | PrayWithGod.ai",
  description:
    "Explore prayer types by tradition on PrayWithGod.ai, including Protestant and Catholic prayer categories, with additional tradition-specific guides growing over time.",
  alternates: {
    canonical: "/prayer-types",
  },
};

type TraditionCard = {
  title: string;
  description: string;
  href?: string;
  status?: string;
};

const traditions: TraditionCard[] = [
  {
    title: "Protestant",
    description:
      "Explore Protestant prayer types such as adoration, confession, thanksgiving, intercession, petition, praise, lament, and more.",
    href: "/prayer-types/protestant",
  },
  {
    title: "Catholic",
    description:
      "Explore Catholic prayer types such as adoration, contrition, thanksgiving, petition, intercession, Marian devotion, Eucharistic devotion, seasonal prayers, and more.",
    href: "/prayer-types/catholic",
  },
  {
    title: "Jewish",
    description:
      "Prayer type guidance for Jewish tradition will be added in a future phase.",
    status: "Coming soon",
  },
  {
    title: "Muslim",
    description:
      "Prayer type guidance for Muslim tradition will be added in a future phase.",
    status: "Coming soon",
  },
  {
    title: "Hindu",
    description:
      "Prayer type guidance for Hindu tradition will be added in a future phase.",
    status: "Coming soon",
  },
  {
    title: "Buddhist",
    description:
      "Prayer type guidance for Buddhist tradition will be added in a future phase.",
    status: "Coming soon",
  },
  {
    title: "Exploring",
    description:
      "A welcoming path for visitors who are exploring prayer and spiritual reflection will be added in a future phase.",
    status: "Coming soon",
  },
];

export default function PrayerTypesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            PrayWithGod.ai
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Prayer Types by Tradition
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Prayer looks different across traditions, and even within a single
            tradition there are many different ways to pray. This section helps
            visitors understand major prayer types and find the kind of prayer
            support they need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {traditions.map((tradition) => {
            const cardInner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold">{tradition.title}</h2>

                  {tradition.status ? (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {tradition.status}
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {tradition.description}
                </p>

                <div className="mt-6">
                  {tradition.href ? (
                    <span className="inline-flex items-center text-sm font-semibold text-sky-700">
                      Explore {tradition.title} prayer types →
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-sm font-semibold text-slate-500">
                      More content coming later
                    </span>
                  )}
                </div>
              </>
            );

            if (tradition.href) {
              return (
                <Link
                  key={tradition.title}
                  href={tradition.href}
                  className="group rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                >
                  {cardInner}
                </Link>
              );
            }

            return (
              <div
                key={tradition.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
              >
                {cardInner}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Why this section matters</h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Some people know exactly what kind of prayer they want. Others do
            not yet have the words. Organizing prayer guidance by tradition and
            prayer type makes the site easier to understand, better for search,
            and more helpful for real visitors.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            It also lets PrayWithGod.ai act more like a prayer companion than a
            generic tool. Visitors can understand the shape of prayer first,
            then step into the experience with better direction.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/prayer-types/catholic"
              className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Explore Catholic Prayer Types
            </Link>

            <Link
              href="/prayer-types/protestant"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Explore Protestant Prayer Types
            </Link>

            <Link
              href="/"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}