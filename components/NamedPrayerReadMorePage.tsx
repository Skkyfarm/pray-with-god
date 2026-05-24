import Link from "next/link";
import type {
  NamedPrayerDetail,
  NamedPrayerSectionTone,
} from "@/lib/namedPrayerDetails";

const sectionClassByTone: Record<NamedPrayerSectionTone, string> = {
  sky: "rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm",
  slate:
    "rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm",
  amber:
    "rounded-3xl border border-amber-200 bg-amber-50/80 p-8 shadow-sm backdrop-blur-sm",
};

export function NamedPrayerReadMorePage({
  entry,
}: {
  entry: NamedPrayerDetail;
}) {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900">
      <section className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            {entry.eyebrow}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {entry.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            {entry.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={entry.primaryActionHref}
              className="pwg-guided-action rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 hover:shadow-[0_0_22px_rgba(14,165,233,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
            >
              {entry.primaryActionLabel}
            </Link>

            <Link
              href={entry.backHref}
              className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white"
            >
              {entry.backLabel}
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8">
          {entry.sections.map((section) => (
            <section
              key={section.heading}
              className={sectionClassByTone[section.tone || "slate"]}
            >
              <h2 className="text-2xl font-semibold">{section.heading}</h2>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-7 text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}