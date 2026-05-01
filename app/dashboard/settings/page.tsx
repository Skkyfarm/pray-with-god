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
            Back to Dashboard
          </Link>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            PWG Settings
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Prayer Preferences
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            Choose the prayer defaults that feel most natural to you. These
            preferences help PrayWithGod.ai feel calmer, more familiar, and
            easier to return to each time you pray.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Your prayer defaults
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  These settings will help shape your prayer experience when you
                  return to PWG.
                </p>
              </div>

              <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Private
              </span>
            </div>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="defaultTradition"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Preferred tradition
                </label>
                <select
                  id="defaultTradition"
                  name="defaultTradition"
                  defaultValue=""
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
                >
                  <option value="">Choose a preferred tradition</option>
                  <option value="exploring">Exploring / not sure yet</option>
                  <option value="protestant">Protestant</option>
                  <option value="catholic">Catholic</option>
                  <option value="jewish">Jewish</option>
                  <option value="muslim">Muslim</option>
                  <option value="hindu">Hindu</option>
                  <option value="buddhist">Buddhist</option>
                </select>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  You can always choose a different tradition when creating a
                  prayer.
                </p>
              </div>

              <div>
                <label
                  htmlFor="preferredPrayerType"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Preferred prayer type
                </label>
                <select
                  id="preferredPrayerType"
                  name="preferredPrayerType"
                  defaultValue=""
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
                >
                  <option value="">Choose a preferred prayer type</option>
                  <option value="personal">Personal prayer</option>
                  <option value="gratitude">Gratitude</option>
                  <option value="guidance">Guidance</option>
                  <option value="healing">Healing</option>
                  <option value="peace">Peace</option>
                  <option value="forgiveness">Forgiveness</option>
                  <option value="strength">Strength</option>
                </select>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  This helps PWG start closer to the kind of prayer you usually
                  want.
                </p>
              </div>

              <div>
                <label
                  htmlFor="preferredVoice"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Preferred read-aloud voice
                </label>
                <select
                  id="preferredVoice"
                  name="preferredVoice"
                  defaultValue=""
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
                >
                  <option value="">Use the best available voice</option>
                  <option value="default">Default</option>
                  <option value="warm">Warm</option>
                  <option value="calm">Calm</option>
                  <option value="steady">Steady</option>
                </select>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Voice options may vary by device and browser.
                </p>
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
                      Remember prayer history
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      Help you return to recent prayers when this option becomes
                      available.
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
                      Prefer read aloud
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      Start with read-aloud controls ready when available.
                    </span>
                  </span>
                </label>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                <p className="text-sm leading-6 text-slate-700">
                  Preference saving is not turned on yet. You can review the
                  options here now, and these settings will become active as the
                  member area grows.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-xl bg-black/30 px-4 py-2 text-sm font-semibold text-white"
                >
                  Save Preferences
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
                What settings can help with
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Start prayers closer to your preferred tradition.</li>
                <li>Remember the type of prayer you often choose.</li>
                <li>Make read-aloud prayer feel more familiar.</li>
                <li>Reduce repeated setup when you return.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Privacy note
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Your preferences are meant to support your own prayer
                experience. PWG should treat these settings as private account
                details, not public information.
              </p>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Looking for account details?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Your name, location, and basic account profile are managed on
                the Profile page.
              </p>

              <div className="mt-4">
                <Link
                  href="/dashboard/profile"
                  className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
                >
                  Open Profile
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Continue praying
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                You can always pray now without changing any settings.
              </p>

              <div className="mt-4">
                <Link
                  href="/pray"
                  className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Pray Now
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}