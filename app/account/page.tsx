// /app/account/page.tsx
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  const user = await currentUser();

  const email = user?.emailAddresses?.[0]?.emailAddress ?? "Not available";
  const firstName = user?.firstName ?? "";
  const lastName = user?.lastName ?? "";
  const fullName =
    [firstName, lastName].filter(Boolean).join(" ") ||
    user?.username ||
    "Member";

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Account</h1>
      <p className="mt-3 text-gray-800">
        Your PWG account is now active. This page will grow into your member
        profile, settings, and billing area.
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Member details</h2>

        <div className="mt-5 space-y-4 text-sm text-gray-800">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              Name
            </div>
            <div className="mt-1 text-gray-900">{fullName}</div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              Email
            </div>
            <div className="mt-1 text-gray-900">{email}</div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-700">
              Clerk User ID
            </div>
            <div className="mt-1 break-all text-gray-900">{userId}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Coming next</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
          <li>Profile fields like zipcode</li>
          <li>Saved prayer history</li>
          <li>Member plan and billing</li>
          <li>Private settings and preferences</li>
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/dashboard"
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
        >
          Dashboard
        </Link>
        <Link
          href="/pray"
          className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
        >
          Pray
        </Link>
      </div>
    </main>
  );
}