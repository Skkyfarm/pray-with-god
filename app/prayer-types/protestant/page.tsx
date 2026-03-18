import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Explore Protestant prayer types including adoration, confession, thanksgiving, intercession, petition, praise, lament, healing, guidance, and more on PrayWithGod.ai.",
  alternates: {
    canonical: "/prayer-types/protestant",
  },
};

type PrayerTypeCard = {
  title: string;
  slug: string;
  shortDescription: string;
};

const prayerTypes: PrayerTypeCard[] = [
  {
    title: "Adoration Prayers",
    slug: "adoration-prayers",
    shortDescription:
      "Prayers centered on worship, reverence, awe, and the greatness of God.",
  },
  {
    title: "Confession Prayers",
    slug: "confession-prayers",
    shortDescription:
      "Prayers of repentance, honesty, grace, forgiveness, and spiritual renewal.",
  },
  {
    title: "Thanksgiving Prayers",
    slug: "thanksgiving-prayers",
    shortDescription:
      "Prayers that express gratitude for God’s goodness, provision, mercy, and care.",
  },
  {
    title: "Intercessory Prayers",
    slug: "intercessory-prayers",
    shortDescription:
      "Prayers offered on behalf of other people, families, communities, and needs.",
  },
  {
    title: "Petitionary Prayers",
    slug: "petitionary-prayers",
    shortDescription:
      "Prayers that bring personal needs, requests, burdens, and hopes before God.",
  },
  {
    title: "Praise Prayers",
    slug: "praise-prayers",
    shortDescription:
      "Prayers that celebrate God’s character, faithfulness, power, and love.",
  },
  {
    title: "Lament Prayers",
    slug: "lament-prayers",
    shortDescription:
      "Prayers of sorrow, grief, struggle, and faith offered in times of pain.",
  },
  {
    title: "Morning Prayers",
    slug: "morning-prayers",
    shortDescription:
      "Prayers to begin the day with gratitude, direction, peace, and trust.",
  },
  {
    title: "Evening Prayers",
    slug: "evening-prayers",
    shortDescription:
      "Prayers for reflection, release, peace, protection, and rest at day’s end.",
  },
  {
    title: "Healing Prayers",
    slug: "healing-prayers",
    shortDescription:
      "Prayers for physical, emotional, mental, and spiritual healing and restoration.",
  },
  {
    title: "Guidance Prayers",
    slug: "guidance-prayers",
    shortDescription:
      "Prayers for wisdom, discernment, direction, and clarity in decision-making.",
  },
  {
    title: "Protection Prayers",
    slug: "protection-prayers",
    shortDescription:
      "Prayers asking for safety, covering, strength, and God’s watchful care.",
  },
];

export default function ProtestantPrayerTypesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            PrayWithGod.ai
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Protestant Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Protestant prayer often emphasizes a direct, personal relationship
            with God through Jesus Christ. This page gathers major Protestant
            prayer types so visitors can better understand what each kind of
            prayer is for and choose the kind of prayer support they need.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">What you’ll find here</h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Some prayers are focused on worship. Some are focused on confession,
            gratitude, grief, healing, or asking God for help. Organizing these
            prayer types into real pages makes the site easier to navigate and
            gives each topic a home of its own.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These pages are also meant to help people who may not know the
            traditional names for different types of prayer. A visitor may not
            search for “petitionary prayer,” but they may know they need help,
            comfort, healing, or direction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {prayerTypes.map((item) => (
            <div
              key={item.slug}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>

              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.shortDescription}
              </p>

              <div className="mt-6">
                <span className="inline-flex items-center text-sm font-semibold text-slate-500">
                  Detailed page coming next
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Use PrayWithGod.ai to generate a prayer
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you already know what kind of prayer you want, you can go
            directly to the prayer experience and choose the Protestant
            tradition. If you are still exploring, these pages will help you
            decide which prayer type best matches your need.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pray"
              className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Go to Prayer Experience
            </Link>

            <Link
              href="/prayer-types"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Back to Prayer Types
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}