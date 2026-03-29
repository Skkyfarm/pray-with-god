// /app/dashboard/prayers/page.tsx
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type PrayerHistoryRow = {
  id: string;
  tradition: string | null;
  prayer_mode: string | null;
  prayer_type_label: string | null;
  generated_text: string | null;
  created_at: string | null;
};

function formatPrayerDate(value: string | null) {
  if (!value) return "Unknown date";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function prettifyValue(value: string | null, fallback: string) {
  if (!value) return fallback;

  return value
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildPreview(text: string | null) {
  if (!text) return "No prayer text found.";

  const trimmed = text.trim();

  if (trimmed.length <= 220) {
    return trimmed;
  }

  return `${trimmed.slice(0, 220).trimEnd()}…`;
}

export default async function DashboardPrayersPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  const supabaseAdmin = createSupabaseAdminClient();

  const { data: profile, error: profileError } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("clerk_user_id", userId)
    .maybeSingle();

  if (profileError) {
    throw new Error(`Could not load profile: ${profileError.message}`);
  }

  let prayers: PrayerHistoryRow[] = [];

  if (profile?.id) {
    const { data: prayerRows, error: prayersError } = await supabaseAdmin
      .from("generated_prayers")
      .select(
        "id, tradition, prayer_mode, prayer_type_label, generated_text, created_at"
      )
      .eq("profile_id", profile.id)
      .order("created_at", { ascending: false })
      .limit(50);

    if (prayersError) {
      throw new Error(`Could not load prayer history: ${prayersError.message}`);
    }

    prayers = (prayerRows ?? []) as PrayerHistoryRow[];
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
            Revisit your recent prayers, remember what you brought before God,
            and return to moments that still matter.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent prayers
              </h2>
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Live now
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              This page is now loading your recent entries from{" "}
              <code>generated_prayers</code>.
            </p>

            {prayers.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-black/10 bg-white/70 p-6">
                <p className="text-sm font-semibold text-slate-900">
                  No prayer history found yet.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Once you generate prayers while signed in, they will begin
                  showing up here in reverse chronological order.
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
            ) : (
              <div className="mt-6 space-y-4">
                {prayers.map((prayer) => (
                  <article
                    key={prayer.id}
                    className="rounded-2xl border border-black/10 bg-white/80 p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {prayer.prayer_type_label
                            ? prayer.prayer_type_label
                            : "Prayer"}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                          {prettifyValue(prayer.tradition, "Tradition unknown")} ·{" "}
                          {prettifyValue(prayer.prayer_mode, "Mode unknown")}
                        </p>
                      </div>

                      <span className="text-xs text-slate-500">
                        {formatPrayerDate(prayer.created_at)}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-700">
                      {buildPreview(prayer.generated_text)}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={`/dashboard/prayers/${prayer.id}`}
                        className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
                      >
                        View Prayer
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <div className="space-y-6">
            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                What this page shows
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Newest prayers first</li>
                <li>Tradition</li>
                <li>Prayer mode</li>
                <li>Prayer type, when present</li>
                <li>A short text preview</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Why history matters
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Prayer history gives members continuity. It helps you return to
                prayers from hard days, grateful days, and moments you do not
                want to lose.
              </p>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                What comes next
              </h2>

              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Wire Saved Prayers to Supabase.</li>
                <li>Add open/view actions for full prayer text later.</li>
                <li>Then wire private settings and preferences.</li>
              </ol>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
