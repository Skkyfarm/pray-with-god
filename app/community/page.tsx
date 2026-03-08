import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Community</h1>
      <p className="mt-3 text-gray-800">
        Community is optional. Some people pray privately; others find strength
        in shared intentions and encouragement. PWG will roll this out in phases.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Prayer Requests</h2>
          <p className="mt-2 text-sm text-gray-800">
            Share an intention (optionally anonymous) and receive supportive,
            respectful prayers from others.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed rounded-xl bg-black/20 px-4 py-2 text-sm font-semibold text-gray-700"
              title="Coming soon"
            >
              Coming Soon
            </button>
            <Link
              href="/pray"
              className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Pray Now
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Circles</h2>
          <p className="mt-2 text-sm text-gray-800">
            Small groups for ongoing support — friends, families, or quiet groups
            formed around shared needs.
          </p>
          <div className="mt-5">
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed rounded-xl bg-black/20 px-4 py-2 text-sm font-semibold text-gray-700"
              title="Coming soon"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold">Community guidelines</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
  <li>Be respectful across traditions and beliefs.</li>
  <li>No harassment, shaming, or coercion.</li>
  <li>Keep it supportive: prayers, encouragement, and care.</li>
  <li>Don’t share private info you wouldn’t want public.</li>

  <li>Pray hard</li>
  <li>Love yourself</li>
  <li>Love your neighbor</li>
</ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/join"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Join Free
          </Link>
          <Link
            href="/support"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
          >
            Support
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-600">
          Community features can stay optional — PWG is always usable for private prayer.
        </p>
      </div>
    </main>
  );
}