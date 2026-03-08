'use client';

import Link from 'next/link';
import { ChevronLeft, RotateCcw } from 'lucide-react';
import GuideAvatar from '@/components/GuideAvatar';
import { AVATARS, Tradition } from '@/lib/avatars';
import { PRAYER_CATALOG, TraditionKey, PrayerKind } from '@/data/prayerCatalog';

function buildClassicHref(trad: TraditionKey, label: string, kind: PrayerKind) {
  const params = new URLSearchParams({
    path: trad,
    mode: 'classic',
    prayerLabel: label,
    prayerKind: kind,
    from: `/choose/${trad}`,
  });
  return `/pray?${params.toString()}`;
}

export default function TraditionLanding({
  trad,
  title,
  subtitle,
}: {
  trad: TraditionKey;
  title?: string;
  subtitle?: string;
}) {
  const avatar = AVATARS[trad as unknown as Tradition] || AVATARS.grace;
  const items = PRAYER_CATALOG[trad] || [];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-pink-200 to-amber-200" />
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

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

      <div className="relative z-10 min-h-screen px-6 py-20 flex flex-col items-center">
        <div className="w-full max-w-3xl text-center space-y-10 pt-10">
          <div className="flex flex-col items-center gap-4">
            <GuideAvatar
              src={avatar.imagePath}
              fallbackSrc={avatar.fallbackPath}
              alt={avatar.label}
              className="w-20 h-20 animate-float"
            />
            <h1 className="text-3xl md:text-4xl font-serif italic text-gray-950">
              {title || avatar.label}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-950/60">
              {subtitle || 'Pray freely, or choose a traditional prayer.'}
            </p>
          </div>

          <div className="rounded-3xl bg-white/55 border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-8">
            <Link
              href={`/pray?path=${trad}&mode=free&from=/choose/${trad}`}
              className="inline-flex items-center justify-center w-full px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-spiritual-gold transition-all text-[10px] uppercase tracking-widest font-bold"
            >
              Pray Freely
            </Link>
            <p className="mt-4 text-[12px] text-gray-950/65">
              Share what’s on your heart, and receive a tradition-aware prayer.
            </p>
          </div>

          <div className="text-left space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-gray-950/60 font-medium text-center">
              Traditional prayers & prayer types
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <Link
                  key={it.id}
                  href={buildClassicHref(trad, it.label, it.kind)}
                  className="rounded-2xl bg-white/45 border border-black/10 hover:bg-white/60 hover:border-black/15 transition-all px-5 py-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-serif italic text-gray-950">{it.label}</div>
                    <div className="text-[9px] uppercase tracking-widest text-gray-950/50">
                      {it.kind === 'named' ? 'Named' : 'Type'}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-4 text-center text-[10px] uppercase tracking-[0.25em] text-gray-950/45">
              Demo mode — classic selections generate a tradition-faithful rendition.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}