import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import GuideAvatar from '@/components/GuideAvatar';
import { AVATARS } from '@/lib/avatars';

export default function ChristianPathPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Top Left Back Link */}
      <div className="absolute top-8 left-8">
        <Link 
          href="/choose" 
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back
        </Link>
      </div>

      <div className="max-w-2xl w-full flex flex-col items-center text-center">
        <h1 className="text-3xl font-serif italic text-white mb-4">Choose a Christian path</h1>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-12">
          You can change this anytime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <Link href="/pray?path=catholic" className="group">
            <div className="glass-panel p-10 rounded-2xl border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col items-center">
              <div className="w-20 h-20 mb-6">
                <GuideAvatar 
                  src={AVATARS.catholic.imagePath}
                  fallbackSrc={AVATARS.catholic.fallbackPath}
                  alt="Catholic"
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h2 className="text-xl font-serif italic text-white mb-2">Catholic</h2>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Traditional Liturgy</p>
            </div>
          </Link>

          <Link href="/pray?path=protestant" className="group">
            <div className="glass-panel p-10 rounded-2xl border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col items-center">
              <div className="w-20 h-20 mb-6">
                <GuideAvatar 
                  src={AVATARS.protestant.imagePath}
                  fallbackSrc={AVATARS.protestant.fallbackPath}
                  alt="Protestant"
                  className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h2 className="text-xl font-serif italic text-white mb-2">Protestant</h2>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">Scripture & Grace</p>
            </div>
          </Link>
        </div>

        {/* Bottom Return to Grace Link */}
        <div className="mt-16">
          <Link 
            href="/pray?path=grace" 
            className="text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white/60 transition-colors"
          >
            Return to Grace
          </Link>
        </div>
      </div>
    </div>
  );
}
