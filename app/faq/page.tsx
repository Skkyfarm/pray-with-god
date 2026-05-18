// /app/faq/page.tsx
import Link from "next/link";

const faqs = [
  {
    q: "What is PrayWithGod.ai?",
    a: "PrayWithGod.ai is a prayer companion for believers, seekers, and anyone in need of a quiet moment of prayer. It offers a calm, respectful space for prayer, reflection, and spiritual exploration.",
  },
  {
    q: "Is prayer free on PWG?",
    a: "Yes. Prayer companionship and exploration are free for everyone on PWG.",
  },
  {
    q: "Do I need an account to pray?",
    a: "No. You can pray privately without creating an account. Prayer itself remains free for everyone.",
  },
  {
    q: "Why create a free account?",
    a: "A free account helps PWG recognize you when you return and makes it possible to take part in features like comments and shared reflections as they become available.",
  },
  {
    q: "Is a free account the same as being a supporter?",
    a: "No. A free account helps with recognition and participation. Supporters help sustain the mission and unlock added features like saved prayers, prayer history, and other enhanced tools over time.",
  },
  {
    q: "What does supporting PWG unlock?",
    a: "Supporting PWG helps sustain the mission and unlocks enhanced features like saved prayers, prayer history, and other tools that help you return to what mattered.",
  },
  {
    q: "Is this tied to one religion?",
    a: "PWG is designed to support multiple traditions. You choose the tradition and prayer style you want, and PWG aims to remain respectful, thoughtful, and welcoming.",
  },
  {
    q: "Is this a replacement for clergy, therapy, or medical care?",
    a: "No. PWG can be a supportive spiritual tool, but it is not a substitute for professional care, crisis services, or spiritual leadership in your own community.",
  },
  {
    q: "Is my prayer private?",
    a: "PWG does not sell your prayer content, publish your saved prayers, or share saved prayers publicly. Prayer requests may be processed by PWG's AI provider to generate prayer responses. Saved prayers are stored privately with your account.",
  },
  {
    q: "How can I support PWG?",
    a: "You can support PWG through a support payment, by sharing it with someone who may benefit, or by sending thoughtful feedback about what feels helpful and what needs improvement. Support payments are not tax-deductible charitable donations at this time. You can also visit the Support page to learn more.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">FAQ</h1>

      <p className="mt-3 text-gray-800">
        Quick answers to common questions about prayer, accounts, support, and
        how PWG works.
      </p>

      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-gray-950">
              <span>{item.q}</span>

              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-5 w-5 shrink-0 text-gray-600 transition-transform group-open:rotate-180"
              >
                <path
                  d="M5 8l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </summary>

            <p className="mt-3 text-sm leading-relaxed text-gray-800">
              {item.a}
            </p>

            {item.q === "How can I support PWG?" && (
              <div className="mt-4">
                <Link
                  href="/support"
                  className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
                >
                  Visit Support Page
                </Link>
              </div>
            )}
          </details>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur">
        <h2 className="text-lg font-semibold text-gray-950">
          Still have a question?
        </h2>

        <p className="mt-2 text-gray-800">
          For general questions, contact us directly. For bugs or technical
          issues, use the support address below.
        </p>

        <div className="mt-5 space-y-3 text-sm text-gray-800">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700">
              General contact
            </div>

            <a
              href="mailto:contact@praywithgod.ai"
              className="mt-1 inline-block font-medium text-gray-950 underline underline-offset-4 hover:text-gray-700"
            >
              contact@praywithgod.ai
            </a>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700">
              Support
            </div>

            <a
              href="mailto:support@praywithgod.ai"
              className="mt-1 inline-block font-medium text-gray-950 underline underline-offset-4 hover:text-gray-700"
            >
              support@praywithgod.ai
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/report"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
          >
            Report Issue
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-white/80"
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
      </div>
    </main>
  );
}