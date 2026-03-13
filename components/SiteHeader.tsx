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

  const siteUrl = "https://praywithgod.ai";

  const sharePath =
    typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}${window.location.hash}`
      : "";

  const shareUrl = `${siteUrl}${sharePath || ""}`;

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent("PrayWithGod");
    const body = encodeURIComponent(
      `I wanted to share PrayWithGod with you.\n\nThoughtful, personalized prayer across spiritual traditions.\n\n${shareUrl}`
    );

    return `mailto:?subject=${subject}&body=${body}`;
  }, [shareUrl]);

  async function handleShareSite() {
    const shareData = {
      title: "PrayWithGod",
      text: `PrayWithGod — thoughtful, personalized prayer across spiritual traditions.\n\n${shareUrl}`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareFeedback("Shared");
        return;
      }

      await navigator.clipboard.writeText(shareUrl);
      setShareFeedback("Link copied");
    } catch {
      try {
        await navigator.clipboard.writeText(shareUrl);
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
    <header className="sticky top-0 z-50 border-b border-black/10 bg-sky-200/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-5">
        <Link
          href="/"
          className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-black/90 hover:text-black"
          aria-label="Go to home"
        >
          PWG
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {headerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold tracking-[0.22em] text-black/70 hover:text-black"
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
              className="text-[11px] font-semibold tracking-[0.22em] text-black/70 hover:text-black"
              aria-haspopup="menu"
              aria-expanded={shareOpen}
            >
              SHARE
            </button>

            {shareOpen ? (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-black/10 bg-sky-50/95 shadow-lg backdrop-blur"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={async () => {
                    await handleShareSite();
                    setShareOpen(false);
                  }}
                  className="block w-full px-4 py-2.5 text-left text-[11px] font-semibold tracking-[0.18em] text-black/80 hover:bg-black/5 hover:text-black"
                >
                  SHARE LINK
                </button>

                <a
                  href={emailHref}
                  role="menuitem"
                  onClick={() => setShareOpen(false)}
                  className="block px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-black/80 hover:bg-black/5 hover:text-black"
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
              className="text-[11px] font-semibold tracking-[0.22em] text-black/70 hover:text-black"
              aria-haspopup="menu"
              aria-expanded={supportOpen}
            >
              SUPPORT
            </button>

            {supportOpen ? (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-black/10 bg-sky-50/95 shadow-lg backdrop-blur"
              >
                {supportLinks.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    role="menuitem"
                    onClick={() => setSupportOpen(false)}
                    className="block px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/80 hover:bg-black/5 hover:text-black"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          {shareFeedback ? (
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 md:inline">
              {shareFeedback}
            </span>
          ) : null}

          <Link
            href="/signin"
            className="hidden text-[11px] font-semibold tracking-[0.18em] text-black/70 hover:text-black md:inline"
          >
            Sign In
          </Link>

          <Link
            href="/join"
            className="rounded-lg bg-black px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white hover:bg-black/90"
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
            className="ml-1 rounded-lg border border-black/15 px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-black/80 hover:text-black md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Open menu"
          >
            MENU
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-black/10 bg-sky-100/95 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-2.5">
            <div className="flex flex-col">
              {headerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAllMenus}
                  className="py-2 text-[11px] font-semibold tracking-[0.18em] text-black/80 hover:text-black"
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
                className="py-2 text-left text-[11px] font-semibold tracking-[0.18em] text-black/80 hover:text-black"
                aria-expanded={shareOpen}
              >
                SHARE
              </button>

              {shareOpen ? (
                <div className="pb-1 pl-3">
                  <button
                    type="button"
                    onClick={async () => {
                      await handleShareSite();
                      closeAllMenus();
                    }}
                    className="block w-full py-1.5 text-left text-[11px] font-semibold tracking-[0.18em] text-black/70 hover:text-black"
                  >
                    SHARE LINK
                  </button>

                  <a
                    href={emailHref}
                    onClick={closeAllMenus}
                    className="block py-1.5 text-left text-[11px] font-semibold tracking-[0.18em] text-black/70 hover:text-black"
                  >
                    EMAIL LINK
                  </a>
                </div>
              ) : null}

              <div className="pt-2 pb-1 text-[10px] font-semibold tracking-[0.18em] text-black/40">
                SUPPORT
              </div>

              {supportLinks.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={closeAllMenus}
                  className="py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/80 hover:text-black"
                >
                  {it.label}
                </Link>
              ))}

              <Link
                href="/signin"
                onClick={closeAllMenus}
                className="py-2 text-[11px] font-semibold tracking-[0.18em] text-black/80 hover:text-black"
              >
                Sign In
              </Link>

              {shareFeedback ? (
                <div className="pt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60">
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