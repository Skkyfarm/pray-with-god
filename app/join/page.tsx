import Link from "next/link";

export default function JoinPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-black">Join Free</h1>
      <p className="mt-3 text-gray-700">
        Create an account to save prayer requests, track reflections, and join
        community groups (when you’re ready).
      </p>

      <div className="mt-8 rounded-2xl border border-gray-300 bg-white p-6">
        <h2 className="text-lg font-semibold text-black">What you get</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>Private prayer at your own pace</li>
          <li>Optional community groups</li>
          <li>Saved intentions and prayer history</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/signin"
            className="rounded-xl border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
          >
            Already have an account? Sign In
          </Link>

          <Link
            href="/pray"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Start Praying
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          (Account creation wiring can come next — this page is the public
          landing stub.)
        </p>
      </div>
    </main>
  );
}