// /app/dashboard/saved/page.tsx
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardSavedPrayersPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  return (
    <main className="min-h-screen text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-900"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Member Saved Prayers
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Saved Prayers
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            This is where members will keep the prayers they want to return to,
            revisit, print, or reflect on later.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Your saved prayers
              </h2>
              <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Coming next
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              The next step will connect this page to your{" "}
              <code>saved_prayers</code> table and show the prayers you chose to
              keep.
            </p>

            <div className="mt-6 rounded-2xl border border-dashed border-black/10 bg-white/70 p-6">
              <p className="text-sm font-semibold text-slate-900">
                No saved prayers are being displayed yet.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Once this page is wired up, each saved prayer can show the saved
                date, tradition, prayer type when present, and a short preview
                of the prayer text.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/pray"
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Pray Now
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
                >
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </section>

          <div className="space-y-6">
            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                What this page will track
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Date saved</li>
                <li>Tradition</li>
                <li>Prayer mode</li>
                <li>Prayer type, when present</li>
                <li>Preview of saved text</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Why saved prayers matter
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Saved prayers are the intentional keep layer. They help members
                hold on to prayers that shaped them, steadied them, or met them
                at an important moment.
              </p>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                What comes after this
              </h2>

              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Wire this page to Supabase.</li>
                <li>Load the member’s saved prayers.</li>
                <li>Add view/open actions.</li>
                <li>Then build the private settings page.</li>
              </ol>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}