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
    <footer className="w-full bg-[#6b553b] relative overflow-hidden">
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerColumns.map((col) => {
            const headerHref = columnHeaderHref[col.title];

            return (
              <div key={col.title} className="space-y-4">
                <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-950/80">
                  {headerHref ? (
                    <Link href={headerHref} className="hover:text-gray-950">
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
                          className="text-gray-950/70 hover:text-gray-950"
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-gray-950/40 cursor-default">
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

        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] uppercase tracking-[0.25em] text-gray-950/60">
            PrayWithGod.ai
          </div>
          <div className="text-[12px] text-gray-950/60">
            © {new Date().getFullYear()} PrayWithGod.ai
          </div>
        </div>
      </div>
    </footer>
  );
}