"use client";

import Link from "next/link";
import { footerColumns } from "@/lib/siteLinks";

const columnHeaderHref: Record<string, string> = {
  Spiritual: "/pray",
  Community: "/community",
  Resources: "/library",
  About: "/about",
};

export default function FooterLinkArray() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100">
      <div className="pointer-events-none absolute inset-0 bg-white/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 md:px-8 md:py-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4 md:gap-x-8 md:gap-y-4">
          {footerColumns.map((col) => {
            const headerHref = columnHeaderHref[col.title];

            return (
              <div key={col.title} className="space-y-1.5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/80">
                  {headerHref ? (
                    <Link href={headerHref} className="hover:text-black">
                      {col.title}
                    </Link>
                  ) : (
                    col.title
                  )}
                </div>

                <ul className="space-y-1 text-[13px] leading-snug">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link
                          className="text-black/70 hover:text-black"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="cursor-default text-black/40">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-1.5 border-t border-black/10 pt-3 md:mt-5 md:flex-row md:items-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-black/60">
            PrayWithGod
          </div>
          <div className="text-[11px] text-black/60">
            © {new Date().getFullYear()} PrayWithGod
          </div>
        </div>
      </div>
    </footer>
  );
}