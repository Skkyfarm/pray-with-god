// app/prayer-types/catholic/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { getPrayerTypePrayHref } from "@/lib/prayerTypeLinks";
import { CATHOLIC_PRAYER_TYPES } from "@/lib/catholicPrayerTypes";

export const metadata: Metadata = {
  title: "Catholic Prayer Types | PrayWithGod.ai",
  description:
    "Explore Catholic prayer types and foundational Catholic prayers including adoration, contrition, thanksgiving, petition, intercession, Marian devotion, Eucharistic devotion, seasonal prayers, and more on PrayWithGod.ai.",
  alternates: {
    canonical: "/prayer-types/catholic",
  },
};

function getPrayerTypeHref(slug: string) {
  return `/prayer-types/catholic/${slug}`;
}

const CATHOLIC_FOUNDATIONAL_PRAYERS = [
  {
    name: "Our Father / The Lord's Prayer",
    status: "Traditional Catholic wording review pending",
    note: "A central Christian prayer taught by Jesus and prayed throughout Catholic life.",
  },
  {
    name: "The Lord's Prayer",
    status: "Biblical Prayer - KJV text available",
    note: "The Scripture-based KJV wording of the prayer Jesus taught, offered as a shared biblical Christian text rather than official Catholic liturgical wording.",
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
    name: "Hail Mary",
    status: "Traditional wording review pending",
    note: "A cherished Marian prayer rooted in Scripture and Catholic devotion.",
  },
  {
    name: "Glory Be",
    status: "Traditional wording review pending",
    note: "A short doxology of praise to the Holy Trinity.",
  },
  {
    name: "Apostles' Creed",
    status: "Traditional wording review pending",
    note: "A historic profession of Christian faith used in prayer, teaching, and formation.",
  },
  {
    name: "Nicene Creed",
    status: "Traditional wording review pending",
    note: "A central creed of Christian faith prayed in the Mass and shared across many Christian traditions.",
  },
  {
    name: "Act of Contrition",
    status: "Version review pending",
    note: "A prayer of sorrow for sin and desire for God's mercy.",
  },
  {
    name: "Hail Holy Queen",
    status: "Traditional wording review pending",
    note: "A traditional Marian prayer of hope, intercession, and trust.",
  },
  {
    name: "Memorare",
    status: "Traditional wording review pending",
    note: "A traditional prayer asking for the Blessed Mother's intercession.",
  },
  {
    name: "Prayer of St. Francis",
    status: "Source/permissions review pending",
    note: "A widely loved Christian prayer associated with peace, humility, love, forgiveness, and service.",
  },
];

export default function CatholicPrayerTypesPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            PrayWithGod.ai
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Catholic Prayer Types
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Catholic prayer includes many distinct directions of prayer:
            worship, repentance, gratitude, petition, intercession, seasonal
            prayer, family prayer, devotion, and quiet reflection before God.
            This page gives those prayer types a clearer structure so visitors
            can understand what kind of prayer support they need.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={getPrayerTypePrayHref("catholic", "Adoration")}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
            >
              Start a Catholic Prayer
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
            Some Catholic prayers are deeply recognizable in traditional form.
            Others are broader directions of prayer such as adoration,
            contrition, intercession, mercy, or discernment. This section is
            focused on those prayer-type lanes so visitors can better understand
            the shape of Catholic prayer life.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These pages are meant to guide, explain, and support. They are not
            a replacement for official liturgy or treasured traditional texts.
            They give each prayer type a real home and make the Catholic side of
            the site feel fuller, clearer, and more useful.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">
            Foundational Catholic Prayers
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Some named prayers are especially important in Catholic prayer,
            devotion, teaching, and worship. PWG may mention and explain these
            prayers while their exact traditional or liturgical wording is
            reviewed for source, translation, and permission status.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In the meantime, PWG can offer original prayer support inspired by
            the themes of these prayers. Those prayers are not official
            translations, liturgical texts, or substitutes for approved
            traditional wording.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {CATHOLIC_FOUNDATIONAL_PRAYERS.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                  {item.status}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {item.note}
                </p>

                <div className="mt-4">
                  <Link
                    href={getPrayerTypePrayHref("catholic", "Adoration")}
                    className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Pray in this spirit
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CATHOLIC_PRAYER_TYPES.map((item) => (
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
                  href={getPrayerTypePrayHref("catholic", item.title)}
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
            Use PrayWithGod.ai as a Catholic prayer companion
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you already know what kind of Catholic prayer support you want,
            you can go directly into the prayer experience. If you are still
            discerning what kind of prayer fits your need, these pages will help
            you choose a better starting point.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={getPrayerTypePrayHref("catholic", "Adoration")}
              className="pwg-guided-action rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800"
            >
              Go to Catholic Prayer Experience
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