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
    "Account holder";

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Account</h1>

      <p className="mt-3 text-gray-800">Your PWG account is active.</p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Account details</h2>

        <div className="mt-5 space-y-4 text-sm text-gray-800">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700">
              Name
            </div>
            <div className="mt-1 text-gray-900">{fullName}</div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700">
              Email
            </div>
            <div className="mt-1 text-gray-900">{email}</div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700">
              Clerk User ID
            </div>
            <div className="mt-1 break-all text-gray-900">{userId}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">About this page</h2>

        <p className="mt-3 text-sm leading-6 text-gray-800">
          This page shows your basic PWG account details. More account and
          supporter options can be added here over time as the site grows.
        </p>
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
