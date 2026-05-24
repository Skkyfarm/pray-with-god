// app/prayer-types/protestant/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { PROTESTANT_PRAYER_TYPES } from "@/lib/protestantPrayerTypes";
import { getNamedPrayerDetailHref } from "@/lib/namedPrayerDetails";

export const metadata: Metadata = {
  title: "Protestant Prayer Types | PrayWithGod.ai",
  description:
    "Explore Protestant prayer types and foundational Protestant prayers including adoration, confession, thanksgiving, intercession, petition, praise, lament, healing, guidance, and more on PrayWithGod.ai.",
  alternates: {
    canonical: "/prayer-types/protestant",
  },
};

function getPrayerTypeHref(slug: string) {
  return `/prayer-types/protestant/${slug}`;
}

function getPrayThisTypeHref(slug: string) {
  return `/pray?path=protestant&prayerType=${encodeURIComponent(slug)}`;
}

const KJV_FOUNDATIONAL_PRAYER_NAMES = new Set([
  "The Lord's Prayer",
  "Psalm 23",
  "Psalm 51",
  "Psalm 90 / Prayer of Moses",
  "The Prayer of Jabez",
  "Hannah's Prayer",
  "Solomon's Prayer of Dedication",
  "Daniel's Prayer",
  "Jonah's Prayer",
  "Mary's Magnificat",
  "Simeon's Song / Nunc Dimittis",
  "Jesus' High Priestly Prayer",
]);

function getFoundationalPrayerHref(name: string) {
  if (KJV_FOUNDATIONAL_PRAYER_NAMES.has(name)) {
    return `/pray?path=protestant&mode=classic&prayerLabel=${encodeURIComponent(
      name,
    )}&prayerKind=named`;
  }

  return "/pray?path=protestant";
}

function getFoundationalPrayerActionLabel(name: string) {
  if (KJV_FOUNDATIONAL_PRAYER_NAMES.has(name)) {
    return "Read / pray this prayer";
  }

  return "Pray in this spirit";
}

function getFoundationalPrayerReadMoreHref(name: string) {
  return getNamedPrayerDetailHref("protestant", name);
}

const PROTESTANT_FOUNDATIONAL_PRAYERS = [
  {
    name: "The Lord's Prayer",
    status: "Biblical Prayer - KJV text available",
    note: "A central Christian prayer taught by Jesus and prayed across many Protestant traditions.",
  },
  {
    name: "Psalm 23",
    status: "Biblical Prayer - KJV text available",
    note: "A beloved biblical prayer of trust, comfort, and God's shepherding care.",
  },
  {
    name: "Psalm 51",
    status: "Biblical Prayer - KJV text available",
    note: "A biblical prayer of repentance, mercy, cleansing, and renewal before God.",
  },
  {
    name: "Psalm 90 / Prayer of Moses",
    status: "Biblical Prayer - KJV text available",
    note: "A solemn biblical prayer reflecting on God's eternity, human frailty, wisdom, mercy, and lasting work.",
  },
  {
    name: "The Prayer of Jabez",
    status: "Biblical Prayer - KJV text available",
    note: "A short biblical prayer from 1 Chronicles 4:10 asking God for blessing, enlarged influence, His hand of help, and protection from evil.",
  },
  {
    name: "Hannah's Prayer",
    status: "Biblical Prayer - KJV text available",
    note: "A biblical prayer of praise from 1 Samuel 2 celebrating God's holiness, strength, justice, and care for the humble.",
  },
  {
    name: "Solomon's Prayer of Dedication",
    status: "Biblical Prayer - KJV text available",
    note: "A biblical prayer from the temple dedication asking God to hear, forgive, guide, and show mercy to His people.",
  },
  {
    name: "Daniel's Prayer",
    status: "Biblical Prayer - KJV text available",
    note: "A biblical prayer of confession, repentance, and appeal for God's mercy from Daniel 9.",
  },
  {
    name: "Jonah's Prayer",
    status: "Biblical Prayer - KJV text available",
    note: "A biblical prayer from Jonah 2 offered from distress, remembering God's deliverance and salvation.",
  },
  {
    name: "Mary's Magnificat",
    status: "Biblical Prayer - KJV text available",
    note: "Mary's biblical song of praise from Luke 1, rejoicing in God's mercy, faithfulness, and care for the lowly.",
  },
  {
    name: "Simeon's Song / Nunc Dimittis",
    status: "Biblical Prayer - KJV text available",
    note: "A biblical prayer from Luke 2 giving thanks for seeing God's salvation and light for the nations.",
  },
  {
    name: "Jesus' High Priestly Prayer",
    status: "Biblical Prayer - KJV text available",
    note: "Jesus' prayer from John 17 for glorification, protection, sanctification, unity, and love among His followers.",
  },
  {
    name: "Apostles' Creed",
    status: "Traditional wording review pending",
    note: "A historic summary of core Christian belief used in many churches and teaching settings.",
  },
  {
    name: "Nicene Creed",
    status: "Traditional wording review pending",
    note: "A widely received confession of Christian faith used across many branches of Christianity.",
  },
  {
    name: "Prayer of St. Francis",
    status: "Source/permissions review pending",
    note: "A widely loved Christian prayer associated with peace, humility, love, forgiveness, and service.",
  },
];

export default function ProtestantPrayerTypesPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
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

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/pray?path=protestant"
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Start a Protestant Prayer
            </Link>

            <Link
              href="/prayer-types"
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white hover:shadow-md"
            >
              View All Prayer Types
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">What you&apos;ll find here</h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Some prayers are focused on worship. Some are focused on confession,
            gratitude, grief, healing, or asking God for help. Organizing these
            prayer types into real pages makes the site easier to navigate and
            gives each topic a home of its own.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These pages are also meant to help people who may not know the
            traditional names for different types of prayer. A visitor may not
            search for the formal term petitionary prayer, but they may know
            they need help, comfort, healing, or direction.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">
            Foundational Protestant Prayers
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Some named prayers are especially important in Protestant life,
            worship, and Christian formation. PWG may mention and explain these
            prayers while their exact traditional wording is reviewed for
            source, translation, and permission status.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In the meantime, PWG can offer original prayer support inspired by
            the themes of these prayers. Those prayers are not official
            translations, liturgical texts, or substitutes for the traditional
            wording.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {PROTESTANT_FOUNDATIONAL_PRAYERS.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:border-purple-200 hover:shadow-[0_0_28px_rgba(168,85,247,0.24)]"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                  {item.status}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {item.note}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
  <Link
    href={getFoundationalPrayerHref(item.name)}
    className="pwg-guided-action inline-flex rounded-full border border-sky-700 bg-sky-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 hover:shadow-[0_0_22px_rgba(14,165,233,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 active:shadow-[0_0_28px_rgba(14,165,233,0.45)]"
  >
    {getFoundationalPrayerActionLabel(item.name)}
  </Link>

  {getFoundationalPrayerReadMoreHref(item.name) ? (
    <Link
      href={getFoundationalPrayerReadMoreHref(item.name) || "#"}
      className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-purple-200 hover:bg-purple-50 hover:shadow-[0_0_22px_rgba(168,85,247,0.22)] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-100"
    >
      Read more
    </Link>
  ) : null}
</div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROTESTANT_PRAYER_TYPES.map((item) => (
            <article
              key={item.slug}
              className="pwg-guided-action flex h-full flex-col rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>

              <p className="mt-4 flex-1 text-base leading-7 text-slate-700">
                {item.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={getPrayThisTypeHref(item.slug)}
                  className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
                >
                  Pray this type
                </Link>

                <Link
                  href={getPrayerTypeHref(item.slug)}
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">
            Use PrayWithGod.ai as a prayer companion
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you already know what kind of prayer support you want, you can go
            directly to the prayer experience and choose the Protestant
            tradition. If you are still exploring, these pages will help you
            decide which prayer type best matches your need.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pray?path=protestant"
              className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800"
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

