// /app/dashboard/prayers/[id]/page.tsx

import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import SavePrayerButton from "@/components/dashboard/SavePrayerButton";

type PrayerDetailPageProps = {
  params: {
    id: string;
  };
  searchParams?: {
    source?: string;
  };
};

type PrayerRow = {
  id: string;
  tradition: string | null;
  prayer_mode: string | null;
  prayer_type_label: string | null;
  generated_text: string | null;
  user_input: string | null;
  feelings: string[] | null;
  created_at: string | null;
};

type SavedPrayerStateRow = {
  id: string;
  title: string | null;
  is_deleted: boolean | null;
  created_at: string | null;
};

function formatPrayerDate(value: string | null) {
  if (!value) return "Unknown date";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

function prettifyValue(value: string | null, fallback: string) {
  if (!value) return fallback;

  return value
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getDisplayTitle(
  source: "saved" | "history",
  savedPrayer: SavedPrayerStateRow | null,
  prayer: PrayerRow
) {
  const savedTitle = savedPrayer?.title?.trim();

  if (source === "saved" && savedTitle) {
    return savedTitle;
  }

  return prayer.prayer_type_label || "Prayer";
}

export default async function PrayerDetailPage({
  params,
  searchParams,
}: PrayerDetailPageProps) {
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

  if (!profile?.id) {
    notFound();
  }

  const { data: prayer, error: prayerError } = await supabaseAdmin
    .from("generated_prayers")
    .select(
      "id, tradition, prayer_mode, prayer_type_label, generated_text, user_input, feelings, created_at"
    )
    .eq("id", params.id)
    .eq("profile_id", profile.id)
    .maybeSingle();

  if (prayerError) {
    throw new Error(`Could not load prayer: ${prayerError.message}`);
  }

  if (!prayer) {
    notFound();
  }

  const { data: savedPrayer, error: savedPrayerError } = await supabaseAdmin
    .from("saved_prayers")
    .select("id, title, is_deleted, created_at")
    .eq("profile_id", profile.id)
    .eq("generated_prayer_id", params.id)
    .eq("is_deleted", false)
    .maybeSingle<SavedPrayerStateRow>();

  if (savedPrayerError) {
    throw new Error(
      `Could not load saved prayer state: ${savedPrayerError.message}`
    );
  }

  const prayerRow = prayer as PrayerRow;
  const savedPrayerRow = savedPrayer || null;
  const initiallySaved = Boolean(savedPrayerRow?.id);
  const source = searchParams?.source === "saved" ? "saved" : "history";

  const displayTitle = getDisplayTitle(source, savedPrayerRow, prayerRow);
  const eyebrow = source === "saved" ? "Saved Prayer" : "Prayer History Entry";
  const backHref = source === "saved" ? "/dashboard/saved" : "/dashboard/prayers";
  const backLabel =
    source === "saved" ? "← Back to Saved Prayers" : "← Back to Prayer History";
  const statusLabel = source === "saved" && initiallySaved ? "Saved" : "History";

  return (
    <main className="min-h-screen text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href={backHref}
            className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-900"
          >
            {backLabel}
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-900"
          >
            Dashboard
          </Link>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                {eyebrow}
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {displayTitle}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
                {prettifyValue(prayerRow.tradition, "Tradition unknown")} ·{" "}
                {prettifyValue(prayerRow.prayer_mode, "Mode unknown")}
              </p>

              {source === "saved" && savedPrayerRow?.title ? (
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  This is the title you gave this saved prayer.
                </p>
              ) : null}
            </div>

            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {statusLabel}
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            {formatPrayerDate(prayerRow.created_at)}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Full prayer
              </h2>

              <SavePrayerButton
                generatedPrayerId={prayerRow.id}
                initiallySaved={initiallySaved}
              />
            </div>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/80 p-5">
              <p className="whitespace-pre-wrap text-base leading-8 text-slate-800">
                {prayerRow.generated_text || "No prayer text found."}
              </p>
            </div>
          </section>

          <div className="space-y-6">
            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Prayer details
              </h2>

              <dl className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Tradition</dt>
                  <dd className="mt-1">
                    {prettifyValue(prayerRow.tradition, "Tradition unknown")}
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-900">Mode</dt>
                  <dd className="mt-1">
                    {prettifyValue(prayerRow.prayer_mode, "Mode unknown")}
                  </dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-900">Prayer type</dt>
                  <dd className="mt-1">
                    {prayerRow.prayer_type_label || "Not specified"}
                  </dd>
                </div>

                {source === "saved" ? (
                  <div>
                    <dt className="font-semibold text-slate-900">
                      Saved title
                    </dt>
                    <dd className="mt-1">{displayTitle}</dd>
                  </div>
                ) : null}

                {source === "saved" && savedPrayerRow?.created_at ? (
                  <div>
                    <dt className="font-semibold text-slate-900">Saved</dt>
                    <dd className="mt-1">
                      {formatPrayerDate(savedPrayerRow.created_at)}
                    </dd>
                  </div>
                ) : null}

                <div>
                  <dt className="font-semibold text-slate-900">Created</dt>
                  <dd className="mt-1">
                    {formatPrayerDate(prayerRow.created_at)}
                  </dd>
                </div>
              </dl>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Original request
              </h2>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                {prayerRow.user_input || "No original request was stored."}
              </p>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Feelings
              </h2>

              {prayerRow.feelings && prayerRow.feelings.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {prayerRow.feelings.map((feeling) => (
                    <span
                      key={feeling}
                      className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700"
                    >
                      {feeling}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  No feelings were stored for this entry.
                </p>
              )}
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Where this prayer lives
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {source === "saved"
                  ? "You opened this prayer from Saved Prayers, the intentional keep layer for prayers you chose to hold onto."
                  : "You opened this prayer from Prayer History, the recent activity layer of prayers you have generated."}
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}