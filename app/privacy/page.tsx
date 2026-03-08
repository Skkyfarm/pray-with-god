import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Privacy</h1>
      <p className="mt-3 text-gray-800">
        PWG is built to be calm and privacy-minded. This page is a plain-language
        placeholder while the full privacy policy is finalized.
      </p>

      <div className="mt-8 space-y-4">
        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">What we’re aiming for</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-800">
            <li>Clear choices: what’s saved vs. what stays private.</li>
            <li>No surprise sharing of your content.</li>
            <li>Simple explanations, not legal fog.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Prayer content</h2>
          <p className="mt-2 text-sm text-gray-800">
            When you type a prayer intention, PWG uses it to generate a response.
            As features mature, you’ll have clear options for saving history or
            keeping things temporary.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Accounts (optional)</h2>
          <p className="mt-2 text-sm text-gray-800">
            You can use PWG without an account. Accounts are for optional features
            like saving preferences, prayer history, and community participation.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">Questions?</h2>
          <p className="mt-2 text-sm text-gray-800">
            If you have a privacy question, contact us and we’ll respond.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              Contact
            </Link>
            <Link
              href="/support"
              className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
            >
              Support
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-600">
            Replace this placeholder text with your finalized policy when ready.
          </p>
        </section>
      </div>
    </main>
  );
}