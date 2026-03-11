import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, RotateCcw } from 'lucide-react';

function AvatarThumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-2xl border border-black/10 bg-black/10 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}

export default function ChooseChristianPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-pink-200 to-amber-200" />
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

      <div className="absolute left-8 top-8 z-20 flex items-center gap-8">
        <Link
          href="/choose"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-950/60 transition-colors hover:text-gray-950"
        >
          <ChevronLeft className="h-3 w-3" />
          Back
        </Link>

        <Link
          href="/pray?path=grace&mode=free"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-950/60 transition-colors hover:text-gray-950"
        >
          <RotateCcw className="h-3 w-3" />
          Return to Grace
        </Link>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-4xl space-y-10 text-center">
          <div className="space-y-3">
            <h1 className="font-serif text-3xl italic text-gray-950 md:text-4xl">
              Choose a Christian path
            </h1>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-950/60">
              You can change this anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 md:gap-10">
            <Link
              href="/pray?path=catholic&mode=free"
              className="group block rounded-3xl border border-black/10 bg-white/55 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all hover:border-black/15 hover:bg-white/70"
            >
              <div className="flex flex-col items-center justify-center gap-6 p-10 md:p-12">
                <AvatarThumb src="/avatars/priest.png" alt="Priest avatar" />

                <div className="space-y-2">
                  <div className="font-serif text-2xl italic text-gray-950">
                    Catholic
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gray-950/60">
                    Tradition • Devotion
                  </div>
                </div>

                <div className="max-w-sm text-[12px] text-gray-950/65">
                  A prayer voice with gentle tradition, reverence, and surrender
                  to God’s will.
                </div>
              </div>
            </Link>

            <Link
              href="/pray?path=protestant&mode=free"
              className="group block rounded-3xl border border-black/10 bg-white/55 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all hover:border-black/15 hover:bg-white/70"
            >
              <div className="flex flex-col items-center justify-center gap-6 p-10 md:p-12">
                <AvatarThumb src="/avatars/minister.png" alt="Minister avatar" />

                <div className="space-y-2">
                  <div className="font-serif text-2xl italic text-gray-950">
                    Protestant
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gray-950/60">
                    Scripture • Grace
                  </div>
                </div>

                <div className="max-w-sm text-[12px] text-gray-950/65">
                  A warm pastoral prayer voice — direct, encouraging, and
                  grounded in grace.
                </div>
              </div>
            </Link>
          </div>

          <div className="pt-10">
            <Link
              href="/choose"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-950/55 transition-colors hover:text-gray-950"
            >
              <ChevronLeft className="h-3 w-3" />
              Back to traditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}