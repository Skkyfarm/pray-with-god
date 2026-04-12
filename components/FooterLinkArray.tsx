// /components/footerLinkArray.tsx
"use client";

import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Donate", href: "/donate" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function FooterLinkArray() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-black/10 bg-gradient-to-r from-stone-50 via-amber-50/80 to-orange-50/80">
      <div className="pointer-events-none absolute inset-0 bg-white/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 md:px-8 md:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/75">
              PrayWithGod.ai
            </div>

            <p className="mt-2 text-sm leading-6 text-black/70">
              Prayer companion for believers, seekers, and anyone in need of a quiet moment of prayer.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-black/70 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-1.5 border-t border-black/10 pt-3 text-center md:mt-5 md:flex-row md:items-center md:justify-between md:text-left">
          <div className="text-[11px] text-black/60">
            © {new Date().getFullYear()} Skky Farm Publishing LLC
          </div>

          <div className="flex flex-col items-center gap-1 text-[11px] text-black/60 md:items-end">
            <a href="mailto:contact@praywithgod.ai" className="transition hover:text-black">
              contact@praywithgod.ai
            </a>
            <a href="mailto:support@praywithgod.ai" className="transition hover:text-black">
              support@praywithgod.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}