// /components/FooterLinkArray.tsx
"use client";

import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Support PWG", href: "/support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export default function FooterLinkArray() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-black/10 bg-gradient-to-r from-stone-50 via-amber-50/80 to-orange-50/80">
      <div className="pointer-events-none absolute inset-0 bg-white/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/75">
              PrayWithGod.ai
            </div>

            <p className="mt-2 text-sm leading-6 text-black/70">
              Prayer is always free for everyone.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-black/70 transition hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4 border-t border-black/10 pt-3 text-center text-[11px] text-black/60 md:text-left">
          © {new Date().getFullYear()} Skky Farm Publishing LLC
        </div>
      </div>
    </footer>
  );
}