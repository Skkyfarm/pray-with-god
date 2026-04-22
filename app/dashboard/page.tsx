// /app/dashboard/page.tsx
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type HubCard = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  status: "Live now" | "Coming next" | "Coming later";
};

const memberHubCards: HubCard[] = [
  {
    title: "Pray now",
    description: "Jump back into prayer and reflection.",
    href: "/pray",
    cta: "Open Pray",
    status: "Live now",
  },
  {
    title: "Account",
    description: "View your current account details and support status.",
    href: "/account",
    cta: "View Account",
    status: "Live now",
  },
  {
    title: "Profile",
    description:
      "Add and update personal profile details such as display name and ZIP code.",
    href: "/dashboard/profile",
    cta: "Open Profile",
    status: "Live now",
  },
  {
    title: "Prayer history",
    description:
      "Review your previously generated prayers in reverse chronological order.",
    href: "/dashboard/prayers",
    cta: "Open History",
    status: "Live now",
  },
  {
    title: "Saved prayers",
    description:
      "Keep the prayers you want to return to, revisit, print, or reflect on later.",
    href: "/dashboard/saved",
    cta: "Open Saved",
    status: "Live now",
  },
  {
    title: "Private settings",
    description:
      "Control your personal preferences, defaults, and future support options.",
    href: "/dashboard/settings",
    cta: "Open Settings",
    status: "Live now",
  },
  {
  title: "Support and billing",
  description:
    "Manage your support status and billing details.",
  status: "Coming later",
},
];

function StatusBadge({ status }: { status: HubCard["status"] }) {
  const className =
    status === "Live now"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Coming next"
        ? "border-sky-200 bg-sky-50 text-sky-700"
        : "border-amber-200 bg-amber-50 text-amber-700";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${className}`}
    >
      {status}
    </span>
  );
}

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  const user = await currentUser();

  const firstName = user?.firstName ?? "";
  const greetingName =
    firstName ||
    user?.username ||
    user?.emailAddresses?.[0]?.emailAddress ||
    "friend";

  return (
    <main className="min-h-screen text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            PWG Dashboard
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Welcome back, {greetingName}.
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            This is your PWG home base — the place for profile details,
           prayer history, saved prayers, private settings, and your personal
           support tools.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pray"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Open Pray
            </Link>

            <Link
              href="/account"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
            >
              View Account
            </Link>

            <Link
              href="/dashboard/profile"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
            >
              Open Profile
            </Link>

            <Link
              href="/dashboard/prayers"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
            >
              Open History
            </Link>

            <Link
              href="/dashboard/saved"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
            >
              Open Saved
            </Link>

            <Link
              href="/dashboard/settings"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
            >
              Open Settings
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {memberHubCards.map((card) => (
            <section
              key={card.title}
              className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h2>
                <StatusBadge status={card.status} />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {card.description}
              </p>

              <div className="mt-5">
                {card.href ? (
                  <Link
                    href={card.href}
                    className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/80"
                  >
                    {card.cta}
                  </Link>
                ) : (
                  <span className="inline-flex rounded-xl border border-dashed border-black/15 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-500">
                    {card.status}
                  </span>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold text-slate-900">
              What you can do here now
            </h2>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>Open Pray and begin a new prayer.</li>
              <li>Review your recent prayer history.</li>
              <li>Return to prayers you intentionally saved.</li>
              <li>Update your profile details.</li>
              <li>Manage your private settings.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold text-slate-900">
              Why this matters
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700">
  PWG prayer tools stay free. Your dashboard gives you a personal place
  for saved prayers, prayer history, private preferences, and support
  features when they are active.
          </p>
          </section>
        </div>
      </section>
    </main>
  );
}