// /app/signout/page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";

export default function SignOutPage() {
  const { signOut } = useClerk();
  const hasStarted = useRef(false);
  const [status, setStatus] = useState<"working" | "done" | "error">("working");
  const [message, setMessage] = useState("Signing you out...");

  async function clearPWGBrowserState() {
    try {
      if (typeof window === "undefined") return;

      const localKeysToRemove: string[] = [];
      for (let i = 0; i < window.localStorage.length; i += 1) {
        const key = window.localStorage.key(i);
        if (!key) continue;

        const normalized = key.toLowerCase();

        if (
          normalized.includes("clerk") ||
          normalized.includes("pwg") ||
          normalized.includes("praywithgod")
        ) {
          localKeysToRemove.push(key);
        }
      }

      localKeysToRemove.forEach((key) => window.localStorage.removeItem(key));

      const sessionKeysToRemove: string[] = [];
      for (let i = 0; i < window.sessionStorage.length; i += 1) {
        const key = window.sessionStorage.key(i);
        if (!key) continue;

        const normalized = key.toLowerCase();

        if (
          normalized.includes("clerk") ||
          normalized.includes("pwg") ||
          normalized.includes("praywithgod")
        ) {
          sessionKeysToRemove.push(key);
        }
      }

      sessionKeysToRemove.forEach((key) => window.sessionStorage.removeItem(key));
    } catch {
      // Browser storage cleanup is helpful but not mission critical.
    }
  }

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    async function runSignOut() {
      try {
        setStatus("working");
        setMessage("Signing you out...");

        await clearPWGBrowserState();
        await signOut({ redirectUrl: "/" });

        setStatus("done");
        setMessage("You have been signed out.");

        window.setTimeout(() => {
          window.location.assign("/");
        }, 250);
      } catch {
        setStatus("error");
        setMessage(
          "We could not complete sign out automatically. Please try the button below."
        );
      }
    }

    void runSignOut();
  }, [signOut]);

  async function handleTryAgain() {
    try {
      setStatus("working");
      setMessage("Trying sign out again...");

      await clearPWGBrowserState();
      await signOut({ redirectUrl: "/" });

      window.setTimeout(() => {
        window.location.assign("/");
      }, 250);
    } catch {
      setStatus("error");
      setMessage(
        "Sign out still did not complete. Try closing the browser tab and reopening PrayWithGod.ai."
      );
    }
  }

  return (
    <main className="min-h-screen text-slate-900">
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full rounded-3xl border border-black/10 bg-white/85 p-8 text-center shadow-sm backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            PrayWithGod.ai
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Signing Out
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
            {message}
          </p>

          {status === "working" ? (
            <div className="mt-8 flex justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/10 border-t-sky-700" />
            </div>
          ) : null}

          {status === "error" ? (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handleTryAgain}
                className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                Try Sign Out Again
              </button>

              <Link
                href="/"
                className="rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80"
              >
                Return Home
              </Link>
            </div>
          ) : null}

          {status === "done" ? (
            <div className="mt-8">
              <Link
                href="/"
                className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                Return Home
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}