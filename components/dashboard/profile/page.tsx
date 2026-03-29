// /app/dashboard/profile/page.tsx
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import ProfileForm from "@/components/dashboard/ProfileForm";

export default async function DashboardProfilePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  const user = await currentUser();

  const firstName = user?.firstName ?? "";
  const lastName = user?.lastName ?? "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const fallbackDisplayName =
    fullName || user?.username || user?.emailAddresses?.[0]?.emailAddress || "";
  const email = user?.emailAddresses?.[0]?.emailAddress || "No email found";

  const supabaseAdmin = createSupabaseAdminClient();

  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("display_name, zip_code")
    .eq("clerk_user_id", userId)
    .maybeSingle();

  const initialDisplayName = profile?.display_name ?? fallbackDisplayName;
  const initialZipCode = profile?.zip_code ?? "";

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
            Member Profile
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Profile
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            This is where your personal PWG profile lives. This first live
            version saves your display name and ZIP code into Supabase.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                Profile details
              </h2>
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Live now
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              Update your basic PWG profile details below.
            </p>

            <ProfileForm
              initialDisplayName={initialDisplayName}
              initialZipCode={initialZipCode}
            />
          </section>

          <div className="space-y-6">
            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Current account identity
              </h2>

              <dl className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Signed-in name</dt>
                  <dd className="mt-1">{initialDisplayName || "Not available"}</dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-900">Email</dt>
                  <dd className="mt-1 break-all">{email}</dd>
                </div>

                <div>
                  <dt className="font-semibold text-slate-900">Member ID</dt>
                  <dd className="mt-1 break-all text-xs text-slate-500">
                    {userId}
                  </dd>
                </div>
              </dl>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                What comes after this
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Show saved values every time the member returns.</li>
                <li>Wire prayer history into Supabase next.</li>
                <li>Wire saved prayers after that.</li>
                <li>Then persist private settings and preferences.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">
                Quick links
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/dashboard"
                  className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
                >
                  Dashboard
                </Link>
                <Link
                  href="/pray"
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
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