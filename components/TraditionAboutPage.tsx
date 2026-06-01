import Link from 'next/link';
import { ArrowLeft, BookOpen, Heart, Sparkles } from 'lucide-react';
import type { TraditionAboutEntry } from '@/lib/traditionAbout';

type TraditionAboutPageProps = {
  entry: TraditionAboutEntry;
};

export default function TraditionAboutPage({ entry }: TraditionAboutPageProps) {
  return (
    <main className="relative min-h-screen bg-transparent px-5 py-10 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl">
        <Link
          href={entry.prayHref}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm transition hover:bg-amber-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to prayer choices
        </Link>

        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 rounded-[1.75rem] border border-amber-100 bg-gradient-to-b from-white to-amber-50/70 p-5 shadow-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-amber-700">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                {entry.eyebrow}
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {entry.title}
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-900">
              {entry.subtitle}
            </p>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-900">
            <p>{entry.intro}</p>

            <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50/80 p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2 text-sky-800">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                  How prayer is understood here
                </span>
              </div>
              <p>{entry.prayerMeaning}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {entry.sections.map((section) => (
              <section
                key={section.heading}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-8 text-zinc-900">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-violet-200 bg-violet-50/80 p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-violet-800">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Respectful use
              </span>
            </div>
            <p className="text-base leading-8 text-zinc-900">
              {entry.respectfulUse}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={entry.prayHref}
              className="inline-flex items-center justify-center rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Start a prayer
            </Link>

            <Link
              href={entry.prayerTypesHref}
              className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
            >
              Explore prayer types
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
