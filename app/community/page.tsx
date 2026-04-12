// /app/community/page.tsx
import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Community</h1>
      <p className="mt-3 text-gray-800">
        Community is optional. Some people prefer to pray privately, while
        others find comfort in shared intentions and encouragement. PWG begins
        with private prayer and may grow community features over time.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Prayer Requests</h2>
          <p className="mt-2 text-sm text-gray-800">
            A future space where people may be able to share an intention,
            sometimes anonymously, and receive thoughtful encouragement and
            prayer from others.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            This feature is not live yet.
          </p>
          <div className="mt-5">
            <Link
              href="/pray"
              className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Pray Now
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Circles</h2>
          <p className="mt-2 text-sm text-gray-800">
            A future space for small groups centered on care, encouragement, and
            shared prayer — whether among friends, family, or others carrying a
            similar burden.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            This feature is not live yet.
          </p>
          <div className="mt-5">
            <Link
              href="/support"
              className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Help
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Community spirit</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
          <li>Be respectful across traditions and beliefs.</li>
          <li>Keep your words kind, thoughtful, and supportive.</li>
          <li>Share only what feels right to share.</li>
          <li>Protect your privacy and the privacy of others.</li>
          <li>Leave room for sincerity, encouragement, and care.</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pray"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Pray
          </Link>
          <Link
            href="/support"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Help
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-600">
          PWG remains fully usable for private prayer, whether or not community
          features are used.
        </p>
      </div>
    </main>
  );
}