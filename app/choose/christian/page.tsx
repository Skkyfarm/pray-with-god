'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, RotateCcw } from 'lucide-react';

function AvatarThumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-black/10 border border-black/10 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}

export default function ChooseChristianPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sunrise background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-pink-200 to-amber-200" />

      {/* Readability veil */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

      {/* Top nav */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-8">
        <Link
          href="/choose"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-950/60 hover:text-gray-950 transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back
        </Link>

        <Link
          href="/pray?path=grace&mode=free"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-950/60 hover:text-gray-950 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          Return to Grace
        </Link>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-4xl text-center space-y-10">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-serif italic text-gray-950">
              Choose a Christian path
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-950/60">
              You can change this anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-4">
            <Link
              href="/choose/catholic"
              className="group block rounded-3xl bg-white/55 border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:border-black/15 transition-all"
            >
              <div className="p-10 md:p-12 flex flex-col items-center justify-center gap-6">
                <AvatarThumb src="/avatars/priest.png" alt="Priest avatar" />

                <div className="space-y-2">
                  <div className="text-2xl font-serif italic text-gray-950">Catholic</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gray-950/60">
                    Traditional • Liturgy
                  </div>
                </div>

                <div className="text-[12px] text-gray-950/65 max-w-sm">
                  A prayer voice with gentle tradition, reverence, and surrender to God’s will.
                </div>
              </div>
            </Link>

            <Link
              href="/choose/protestant"
              className="group block rounded-3xl bg-white/55 border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:border-black/15 transition-all"
            >
              <div className="p-10 md:p-12 flex flex-col items-center justify-center gap-6">
                <AvatarThumb src="/avatars/minister.png" alt="Minister avatar" />

                <div className="space-y-2">
                  <div className="text-2xl font-serif italic text-gray-950">Protestant</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gray-950/60">
                    Scripture • Grace
                  </div>
                </div>

                <div className="text-[12px] text-gray-950/65 max-w-sm">
                  A warm pastoral prayer voice — direct, encouraging, grounded in grace.
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom helper link */}
          <div className="pt-10">
            <Link
              href="/choose"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-950/55 hover:text-gray-950 transition-colors"
            >
              <ChevronLeft className="w-3 h-3" />
              Back to traditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
