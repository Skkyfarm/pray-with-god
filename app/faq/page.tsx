// /app/faq/page.tsx
import Link from "next/link";

const faqs = [
  {
    q: "What is PrayWithGod.ai?",
    a: "PrayWithGod.ai is a calm, respectful space for prayer and reflection. It helps you put your intention into words and offers a gentle, tradition-aware prayer companion experience.",
  },
  {
    q: "Do I need an account to pray?",
    a: "No. You can pray privately without creating an account. Signing in is only for extra features like saving prayers and keeping track of your preferences. Prayer itself stays free for everyone.",
  },
  {
    q: "Is this tied to one religion?",
    a: "PWG is designed to support multiple traditions. You choose the tradition and style you want, and PWG aims to stay respectful and non-coercive.",
  },
  {
    q: "Is this a replacement for clergy, therapy, or medical care?",
    a: "No. PWG can be a supportive tool, but it is not a substitute for professional care, crisis services, or spiritual leadership in your community.",
  },
  {
    q: "Is my prayer private?",
    a: "PWG is designed for private-first use. When features involve saved data or account activity, PWG aims to be clear about what is stored and what remains private.",
  },
  {
    q: "How can I support PWG?",
    a: "You can donate, share PWG with someone who might benefit, or send feedback about what feels helpful and what needs improvement.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-950">
      <h1 className="text-3xl font-semibold">FAQ</h1>
      <p className="mt-3 text-gray-800">
        Quick answers to common questions. If you do not see what you need,
        reach out anytime.
      </p>

      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-gray-950">
              <span className="mr-2 inline-block text-gray-600 transition-transform group-open:rotate-90">
                ▶
              </span>
              {item.q}
            </summary>
            <p className="mt-3 text-sm text-gray-800">{item.a}</p>
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
        </div>
      </div>
    </main>
  );
}