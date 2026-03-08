'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import GuideAvatar from '@/components/GuideAvatar';
import { AVATARS } from '@/lib/avatars';
import { Wind, ArrowRight } from 'lucide-react';

export default function QuietPage() {
  const [showPrayNow, setShowPrayNow] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPrayNow(true);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-10">
          <div className="mb-8 flex justify-center">
            <div className="overflow-visible rounded-full border border-amber-200 bg-gradient-to-b from-white via-amber-50/80 to-white p-8 shadow-[0_18px_45px_rgba(245,158,11,0.16)] ring-1 ring-white/80">
              <div className="origin-center scale-[2.1] transform">
                <GuideAvatar avatar={AVATARS.grace} />
              </div>
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sky-700 shadow-sm">
            <Wind className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Sit quietly first
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Be still for a moment.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            You do not need to rush. Breathe, settle, and take a quiet moment with Grace before forming your prayer.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/70 bg-white/80 px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-8">
          <p className="font-serif text-[1.08rem] italic leading-8 text-zinc-800 sm:text-[1.15rem]">
            In silence, let the heart grow calm.  
            In stillness, let the next prayer come gently.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
            >
              Back home
            </Link>

            {showPrayNow && (
              <Link
                href="/pray?path=grace"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                <ArrowRight className="h-4 w-4" />
                Pray now
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}