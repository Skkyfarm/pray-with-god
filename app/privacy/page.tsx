// /app/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-3 text-gray-800">
        This page explains, in plain language, how PrayWithGod.ai ("PWG")
        handles prayer content, account information, support messages, and
        related personal information.
      </p>

      <div className="mt-8 space-y-4">
        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">1. Core prayer use</h2>
          <p className="mt-2 text-sm text-gray-800">
            You can use PWG for prayer without creating an account. When you
            type a prayer intention or other input, PWG uses that information to
            generate a prayer response.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">2. Prayer content and saved content</h2>
          <p className="mt-2 text-sm text-gray-800">
            If you use features that save content, PWG may store prayer inputs,
            generated prayers, saved prayers, preferences, and related account
            information so those features can work. If you do not use saved
            features, PWG does not need you to create an account just to pray.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">3. Account information</h2>
          <p className="mt-2 text-sm text-gray-800">
            If you choose to sign in or use account-based features, PWG may
            store information such as your name, email address, display name,
            ZIP code, saved preferences, and other information you choose to add
            to your account or profile.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">4. Contact and support messages</h2>
          <p className="mt-2 text-sm text-gray-800">
            If you contact PWG by email or through support-related channels, PWG
            may keep your message, your contact information, and any attachments
            or screenshots you send so questions can be answered and issues can
            be reviewed.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">5. Donations and payment processing</h2>
          <p className="mt-2 text-sm text-gray-800">
            Donations are processed through PayPal. When you donate, payment
            information is handled through PayPal’s systems rather than being
            collected directly through PWG’s own site pages.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">6. Service providers</h2>
          <p className="mt-2 text-sm text-gray-800">
            PWG uses third-party services to operate important parts of the site,
            including account sign-in, stored account data, saved content, and
            payment processing. Those services may process information as needed
            to provide their part of the site’s functionality.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">7. Technical information</h2>
          <p className="mt-2 text-sm text-gray-800">
            Like most websites, PWG and the services used to run it may receive
            basic technical information such as IP address, browser type, device
            information, and routine usage or error-log information when the
            site is used.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">8. Sharing</h2>
          <p className="mt-2 text-sm text-gray-800">
            PWG does not publish your prayer content or account information to
            other users unless a feature clearly tells you that something will
            be shared or made visible. PWG may also disclose information when
            reasonably necessary to comply with law, protect the site, respond
            to misuse, or address security or fraud concerns.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">9. Your choices</h2>
          <p className="mt-2 text-sm text-gray-800">
            You can use core prayer features without creating an account. If you
            do choose to sign in or save content, you can manage those features
            through your account as they are made available on the site.
          </p>
        </section>

        <section className="rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold">10. Questions</h2>
          <p className="mt-2 text-sm text-gray-800">
            If you have questions about privacy or data handling on PWG, please
            contact us.
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
              Help
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}