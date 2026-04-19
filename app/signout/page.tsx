// /app/signout/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function clearLocalPwgSignOutMemory() {
  if (typeof window === "undefined") return;

  function shouldRemoveKey(key: string) {
    const lowerKey = key.toLowerCase();

    // PWG identity / returning-visitor name memory
    if (lowerKey === "pwg_user_name") return true;
    if (lowerKey === "pwg_name_skipped") return true;
    if (lowerKey.startsWith("pwg_user_name_")) return true;

    // Safety net for future PWG identity-ish local keys.
    const isPwgKey =
      lowerKey.includes("pwg") || lowerKey.includes("praywithgod");

    const isIdentityMemory =
      lowerKey.includes("user_name") ||
      lowerKey.includes("visitor_name") ||
      lowerKey.includes("preferred_name") ||
      lowerKey.includes("display_name") ||
      lowerKey.includes("returning");

    return isPwgKey && isIdentityMemory;
  }

  try {
    for (let i = window.localStorage.length - 1; i >= 0; i -= 1) {
      const key = window.localStorage.key(i);
      if (key && shouldRemoveKey(key)) {
        window.localStorage.removeItem(key);
      }
    }
  } catch {
    // Some browsers/PWAs can restrict storage access.
  }

  try {
    for (let i = window.sessionStorage.length - 1; i >= 0; i -= 1) {
      const key = window.sessionStorage.key(i);
      if (key && shouldRemoveKey(key)) {
        window.sessionStorage.removeItem(key);
      }
    }
  } catch {
    // Some browsers/PWAs can restrict storage access.
  }
}

export default function SignOutCleanupPage() {
  const [message, setMessage] = useState("Signing you out...");

  useEffect(() => {
    clearLocalPwgSignOutMemory();
    setMessage("You are signed out.");

    const timer = window.setTimeout(() => {
      window.location.assign("/");
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 py-16">
      <section className="w-full max-w-md rounded-3xl border border-black/10 bg-white/80 p-8 text-center shadow-xl backdrop-blur">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45">
          PrayWithGod.ai
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black">
          {message}
        </h1>

        <p className="mt-4 text-sm leading-6 text-black/65">
          Your account session has ended, and this browser’s local name memory
          has been cleared.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/85"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}