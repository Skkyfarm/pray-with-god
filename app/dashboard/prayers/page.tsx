// /app/dashboard/prayers/page.tsx
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPrayersPage() {
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
            Member Prayer History
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Prayer History
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            This is where your generated prayer history will live. It will give
            members a simple place to revisit recent prayers, remember what they
            prayed through, and return to moments worth saving.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent prayers
              </h2>
              <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Coming next
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              The next step will connect this page to your{" "}
              <code>generated_prayers</code> table and show entries in reverse
              chronological order.
            </p>

            <div className="mt-6 rounded-2xl border border-dashed border-black/10 bg-white/70 p-6">
              <p className="text-sm font-semibold text-slate-900">
                No prayer history is being displayed yet.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Once this page is wired up, each entry can show the prayer date,
                tradition, mode, prayer type, and a short preview of the prayer
                text.
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
                <li>Date created</li>
                <li>Tradition</li>
                <li>Prayer mode</li>
                <li>Prayer type, when present</li>
                <li>Preview of generated text</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Why history matters
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Prayer history gives members continuity. It helps them return to
                prayers from hard days, grateful days, uncertain days, and days
                when they need to remember how God met them before.
              </p>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                What comes after this
              </h2>

              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Wire this page to Supabase.</li>
                <li>Load the member’s generated prayers.</li>
                <li>Add a view/open action for each prayer.</li>
                <li>Then build the Saved Prayers page.</li>
              </ol>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}