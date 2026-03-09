"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { headerLinks, supportLinks } from "@/lib/siteLinks";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("");

  const shareRef = useRef<HTMLDivElement | null>(null);
  const supportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const target = e.target as Node;

      if (shareRef.current && !shareRef.current.contains(target)) {
        setShareOpen(false);
      }

      if (supportRef.current && !supportRef.current.contains(target)) {
        setSupportOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setShareOpen(false);
        setSupportOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!shareFeedback) return;
    const timer = setTimeout(() => setShareFeedback(""), 2200);
    return () => clearTimeout(timer);
  }, [shareFeedback]);

  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://praywithgod.ai";

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent("PrayWithGod.ai");
    const body = encodeURIComponent(
      `I wanted to share PrayWithGod.ai with you.\n\nThoughtful, personalized prayer across spiritual traditions.\n\n${siteUrl}`
    );

    return `mailto:?subject=${subject}&body=${body}`;
  }, [siteUrl]);

  async function handleShareSite() {
    const shareData = {
      title: "PrayWithGod.ai",
      text: `PrayWithGod.ai — thoughtful, personalized prayer across spiritual traditions.\n\n${siteUrl}`,
      url: siteUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareFeedback("Shared");
        return;
      }

      await navigator.clipboard.writeText(siteUrl);
      setShareFeedback("Link copied");
    } catch {
      try {
        await navigator.clipboard.writeText(siteUrl);
        setShareFeedback("Link copied");
      } catch {
        setShareFeedback("Unable to share");
      }
    }
  }

  function closeAllMenus() {
    setShareOpen(false);
    setSupportOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-white/90 hover:text-white"
          aria-label="Go to home"
        >
          PWG
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {headerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold tracking-widest text-white/70 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative" ref={shareRef}>
            <button
              type="button"
              onClick={() => {
                setShareOpen((v) => !v);
                setSupportOpen(false);
              }}
              className="text-xs font-semibold tracking-widest text-white/70 hover:text-white"
              aria-haspopup="menu"
              aria-expanded={shareOpen}
            >
              SHARE
            </button>

            {shareOpen ? (
              <div
                role="menu"
                className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-xl backdrop-blur"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={async () => {
                    await handleShareSite();
                    setShareOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-left text-xs font-semibold tracking-widest text-white/80 hover:bg-white/5 hover:text-white"
                >
                  SHARE LINK
                </button>

                <a
                  href={emailHref}
                  role="menuitem"
                  onClick={() => setShareOpen(false)}
                  className="block px-4 py-3 text-xs font-semibold tracking-widest text-white/80 hover:bg-white/5 hover:text-white"
                >
                  EMAIL LINK
                </a>
              </div>
            ) : null}
          </div>

          <div className="relative" ref={supportRef}>
            <button
              type="button"
              onClick={() => {
                setSupportOpen((v) => !v);
                setShareOpen(false);
              }}
              className="text-xs font-semibold tracking-widest text-white/70 hover:text-white"
              aria-haspopup="menu"
              aria-expanded={supportOpen}
            >
              SUPPORT
            </button>

            {supportOpen ? (
              <div
                role="menu"
                className="absolute right-0 mt-3 w-48 overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-xl backdrop-blur"
              >
                {supportLinks.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    role="menuitem"
                    onClick={() => setSupportOpen(false)}
                    className="block px-4 py-3 text-xs font-semibold tracking-widest text-white/80 uppercase hover:bg-white/5 hover:text-white"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          {shareFeedback ? (
            <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-white/70 md:inline">
              {shareFeedback}
            </span>
          ) : null}

          <Link
            href="/signin"
            className="hidden text-xs font-semibold tracking-widest text-white/70 hover:text-white md:inline"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold tracking-widest text-black hover:bg-white"
          >
            JOIN FREE
          </Link>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((v) => {
                const next = !v;
                if (!next) {
                  setShareOpen(false);
                  setSupportOpen(false);
                }
                return next;
              });
            }}
            className="ml-1 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold tracking-widest text-white/80 hover:text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Open menu"
          >
            MENU
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-black/60 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col">
              {headerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAllMenus}
                  className="py-3 text-xs font-semibold tracking-widest text-white/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setShareOpen((v) => !v);
                  setSupportOpen(false);
                }}
                className="py-3 text-left text-xs font-semibold tracking-widest text-white/80 hover:text-white"
                aria-expanded={shareOpen}
              >
                SHARE
              </button>

              {shareOpen ? (
                <div className="pb-2 pl-4">
                  <button
                    type="button"
                    onClick={async () => {
                      await handleShareSite();
                      closeAllMenus();
                    }}
                    className="block w-full py-2 text-left text-xs font-semibold tracking-widest text-white/70 hover:text-white"
                  >
                    SHARE LINK
                  </button>

                  <a
                    href={emailHref}
                    onClick={closeAllMenus}
                    className="block py-2 text-left text-xs font-semibold tracking-widest text-white/70 hover:text-white"
                  >
                    EMAIL LINK
                  </a>
                </div>
              ) : null}

              <div className="py-2 text-[10px] font-semibold tracking-widest text-white/40">
                SUPPORT
              </div>

              {supportLinks.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={closeAllMenus}
                  className="py-3 text-xs font-semibold tracking-widest text-white/80 uppercase hover:text-white"
                >
                  {it.label}
                </Link>
              ))}

              <Link
                href="/signin"
                onClick={closeAllMenus}
                className="py-3 text-xs font-semibold tracking-widest text-white/80 hover:text-white"
              >
                Sign In
              </Link>

              {shareFeedback ? (
                <div className="pt-2 text-[10px] font-semibold uppercase tracking-widest text-white/60">
                  {shareFeedback}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}