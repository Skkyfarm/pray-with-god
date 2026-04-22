// /app/dashboard/settings/page.tsx
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardSettingsPage() {
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
            PWG Settings
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Private Settings
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            This is where your personal PWG preferences will live. The first
            version is a clean shell for private defaults and future support
            settings that we can wire into Supabase next.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Prayer preferences
              </h2>
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Live shell
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              The next step will connect this page to a{" "}
              <code>user_preferences</code> table so your PWG defaults can be
              saved and reused.
            </p>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="defaultTradition"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Default tradition
                </label>
                <select
                  id="defaultTradition"
                  name="defaultTradition"
                  defaultValue=""
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
                >
                  <option value="">Choose a default tradition</option>
                  <option value="grace">Exploring</option>
                  <option value="protestant">Protestant</option>
                  <option value="catholic">Catholic</option>
                  <option value="jewish">Jewish</option>
                  <option value="muslim">Muslim</option>
                  <option value="hindu">Hindu</option>
                  <option value="buddhist">Buddhist</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="preferredVoice"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Preferred voice
                </label>
                <select
                  id="preferredVoice"
                  name="preferredVoice"
                  defaultValue=""
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
                >
                  <option value="">Choose a preferred voice</option>
                  <option value="default">Default</option>
                  <option value="warm">Warm</option>
                  <option value="calm">Calm</option>
                  <option value="steady">Steady</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4">
                  <input
                    type="checkbox"
                    name="prayerHistoryEnabled"
                    className="mt-1 h-4 w-4 rounded border-black/20"
                    disabled
                  />
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Prayer history preference
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      Keep a simple prayer history preference once this setting
                      is wired up.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4">
                  <input
                    type="checkbox"
                    name="readAloudEnabled"
                    className="mt-1 h-4 w-4 rounded border-black/20"
                    disabled
                  />
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">
                      Read-aloud preference
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      Keep a default read-aloud preference for future prayer
                      sessions.
                    </span>
                  </span>
                </label>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                <p className="text-sm leading-6 text-slate-700">
                  Save wiring comes next. After this page is in place, we can
                  create a <code>user_preferences</code> table and persist these
                  settings per account.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-xl bg-black/30 px-4 py-2 text-sm font-semibold text-white"
                >
                  Save Settings (next step)
                </button>

                <Link
                  href="/dashboard"
                  className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
                >
                  Back to Dashboard
                </Link>
              </div>
            </form>
          </section>

          <div className="space-y-6">
            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Good first settings
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Default tradition</li>
                <li>Preferred voice</li>
                <li>Prayer history preference</li>
                <li>Read-aloud preference</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Why private settings matter
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Settings help PWG feel like a real home base. They reduce repeat
                setup and give returning users a more personal, steady
                experience over time.
              </p>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                What comes after this
              </h2>

              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Make the Settings card live from the dashboard.</li>
                <li>Create the <code>user_preferences</code> table.</li>
                <li>Wire these fields to Supabase.</li>
                <li>Add support and billing tools inside the dashboard.</li>
              </ol>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}