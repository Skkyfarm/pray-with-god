// /app/dashboard/settings/page.tsx
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PrayerPreferencesForm from "@/components/dashboard/PrayerPreferencesForm";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export default async function DashboardSettingsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  const supabaseAdmin = createSupabaseAdminClient();

  const { data: profile, error: profileError } = await supabaseAdmin
    .from("profiles")
    .select(
      `
        preferred_tradition,
        preferred_prayer_style,
        preferred_prayer_type,
        preferred_voice_id,
        preferred_voice_label,
        use_saved_prayer_preferences
      `
    )
    .eq("clerk_user_id", userId)
    .maybeSingle();

  if (profileError) {
    console.error("Could not load prayer preferences:", profileError.message);
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

            <PrayerPreferencesForm
              initialPreferredTradition={profile?.preferred_tradition ?? ""}
              initialPreferredPrayerStyle={
                profile?.preferred_prayer_style ?? ""
              }
              initialPreferredPrayerType={profile?.preferred_prayer_type ?? ""}
              initialPreferredVoiceId={profile?.preferred_voice_id ?? ""}
              initialPreferredVoiceLabel={profile?.preferred_voice_label ?? ""}
              initialUseSavedPrayerPreferences={
                profile?.use_saved_prayer_preferences ?? false
              }
            />
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