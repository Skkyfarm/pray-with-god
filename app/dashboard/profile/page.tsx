// /app/dashboard/profile/page.tsx
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardProfilePage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  const user = await currentUser();

  const firstName = user?.firstName ?? "";
  const lastName = user?.lastName ?? "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const displayName =
    fullName || user?.username || user?.emailAddresses?.[0]?.emailAddress || "";
  const email = user?.emailAddresses?.[0]?.emailAddress || "No email found";

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
            This is where your personal PWG profile will live. We are starting
            small with editable profile basics so your member area has a real
            continuity layer.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold text-slate-900">
              Profile details
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              This first version is the profile shell. The next step will wire
              these fields into Supabase so members can save and update them.
            </p>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="displayName"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Display name
                </label>
                <input
                  id="displayName"
                  name="displayName"
                  type="text"
                  defaultValue={displayName}
                  placeholder="Your display name"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  This can be the name you want shown inside your member area.
                </p>
              </div>

              <div>
                <label
                  htmlFor="zipCode"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  ZIP code
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  inputMode="numeric"
                  placeholder="Optional"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400"
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Optional. This gives PWG room for future location-aware
                  features later without asking for more than we need now.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                <p className="text-sm leading-6 text-slate-700">
                  Save wiring comes next. After this page is in place, we can
                  connect these fields to your <code>profiles</code> table and
                  make them persist.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  disabled
                  className="rounded-xl bg-black/30 px-4 py-2 text-sm font-semibold text-white cursor-not-allowed"
                >
                  Save Profile (next step)
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
                Current account identity
              </h2>

              <dl className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Signed-in name</dt>
                  <dd className="mt-1">{displayName || "Not available"}</dd>
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
                <li>Save display name and ZIP code to your profile record.</li>
                <li>Show saved values when the member returns.</li>
                <li>Expand into private settings and preferences later.</li>
                <li>Keep sensitive identity and billing logic separate.</li>
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