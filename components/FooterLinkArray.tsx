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
      <div className="absolute inset-0 pointer-events-none bg-white/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footerColumns.map((col) => {
            const headerHref = columnHeaderHref[col.title];

            return (
              <div key={col.title} className="space-y-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/80">
                  {headerHref ? (
                    <Link href={headerHref} className="hover:text-black">
                      {col.title}
                    </Link>
                  ) : (
                    col.title
                  )}
                </div>

                <ul className="space-y-2 text-[14px]">
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

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 md:flex-row md:items-center">
          <div className="text-[12px] uppercase tracking-[0.25em] text-black/60">
            PrayWithGod.ai
          </div>
          <div className="text-[12px] text-black/60">
            © {new Date().getFullYear()} PrayWithGod.ai
          </div>
        </div>
      </div>
    </footer>
  );
}