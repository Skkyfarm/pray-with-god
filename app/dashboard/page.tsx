// /app/dashboard/page.tsx
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  const user = await currentUser();

  const firstName = user?.firstName ?? "";
  const greetingName =
    firstName || user?.username || user?.emailAddresses?.[0]?.emailAddress || "friend";

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-3 text-gray-800">
        Welcome back, {greetingName}. This is the start of the protected PWG
        member area.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Pray now</h2>
          <p className="mt-2 text-sm text-gray-800">
            Jump back into prayer and reflection.
          </p>
          <div className="mt-5">
            <Link
              href="/pray"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Open Pray
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Account</h2>
          <p className="mt-2 text-sm text-gray-800">
            View your member details and future profile settings.
          </p>
          <div className="mt-5">
            <Link
              href="/account"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              View Account
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">PWG member roadmap</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
          <li>Saved prayer history</li>
          <li>Prayer input storage</li>
          <li>Zipcode/profile fields</li>
          <li>Billing and paid membership options</li>
          <li>Community features later</li>
        </ul>
      </div>
    </main>
  );
}