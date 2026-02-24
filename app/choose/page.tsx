'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import { ChevronLeft } from 'lucide-react';
import { AVATARS, Tradition } from '@/lib/avatars';

type TraditionCard = {
  name: string;
  href: string;
  // IMPORTANT: this must be a valid key in AVATARS
  avatarKey: Tradition;
};

function AvatarCircle({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="w-16 h-16 rounded-2xl bg-black/10 border border-black/10 flex items-center justify-center text-gray-900/70 text-xs uppercase tracking-widest">
        {alt.slice(0, 2)}
      </div>
    );
  }

  return (
    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black/10 border border-black/10 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={128}
        height={128}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}

export default function ChoosePage() {
  const traditions: TraditionCard[] = useMemo(
    () => [
      { name: 'Christian', href: '/choose/christian', avatarKey: 'catholic' }, // preview image = priest
      { name: 'Jewish', href: '/pray?path=jewish', avatarKey: 'jewish' },
      { name: 'Muslim', href: '/pray?path=muslim', avatarKey: 'muslim' },
      { name: 'Hindu', href: '/pray?path=hindu', avatarKey: 'hindu' },
      { name: 'Buddhist', href: '/pray?path=buddhist', avatarKey: 'buddhist' },
      { name: 'Grace (Universal)', href: '/pray?path=grace', avatarKey: 'grace' },
    ],
    []
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sunrise background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-pink-200 to-amber-200" />
      {/* Readability veil */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

      <div className="relative z-10 min-h-screen px-6 py-20 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-950/60 hover:text-gray-950 transition-colors"
            >
              <ChevronLeft className="w-3 h-3" />
              Back to Home
            </Link>
          </div>

          <div className="text-center pt-10 pb-10 space-y-3">
            <h1 className="text-3xl md:text-4xl font-serif italic text-gray-950">
              Choose a tradition
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-950/60">
              Choose a path. You can change this anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditions.map((t) => {
              const avatar = AVATARS[t.avatarKey]; // always safe because avatarKey is typed as Tradition
              return (
                <Link
                  key={t.name}
                  href={t.href}
                  className="rounded-3xl bg-white/55 border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:border-black/15 transition-all"
                >
                  <div className="p-8 flex flex-col items-center text-center gap-4">
                    <AvatarCircle src={avatar?.imagePath} alt={t.name} />
                    <div className="text-xl font-serif italic text-gray-950">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-gray-950/65">
                      {t.name === 'Christian'
                        ? 'Choose Catholic or Protestant.'
                        : 'Enter prayer and receive a tradition-aware reflection.'}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
