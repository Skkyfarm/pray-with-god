import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Heart, Cross, Star, Moon, Sun, Flower2 } from 'lucide-react';
import GuideAvatar from '@/components/GuideAvatar';
import { AVATARS } from '@/lib/avatars';

export default function ChoosePage() {
  const traditions = [
    { name: 'Non-denominational', path: '/pray?path=grace', icon: <Heart className="w-5 h-5" />, subtitle: 'Grace', avatar: AVATARS.grace },
    { name: 'Christian', path: '/choose/christian', icon: <Cross className="w-5 h-5" />, subtitle: 'Father Thomas', avatar: AVATARS.protestant },
    { name: 'Jewish', path: '/pray?path=jewish', icon: <Star className="w-5 h-5" />, subtitle: 'Rabbi Avram', avatar: AVATARS.jewish },
    { name: 'Muslim', path: '/pray?path=muslim', icon: <Moon className="w-5 h-5" />, subtitle: 'Imam Hassan', avatar: AVATARS.muslim },
    { name: 'Hindu', path: '/pray?path=hindu', icon: <Sun className="w-5 h-5" />, subtitle: 'Universal Soul', avatar: AVATARS.hindu },
    { name: 'Buddhist', path: '/pray?path=buddhist', icon: <Flower2 className="w-5 h-5" />, subtitle: 'Inner Peace', avatar: AVATARS.buddhist },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden text-gray-900">
      {/* Background Rays (Standardized) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-gradient-to-b from-blue-400/10 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* Top Left Back Link */}
      <div className="absolute top-8 left-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-900/40 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center text-center relative z-10">
        <h1 className="text-3xl font-serif italic text-gray-900 mb-4">Choose a tradition</h1>
        <p className="text-xs text-gray-900/40 uppercase tracking-widest mb-12">
          You can return to Grace anytime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {traditions.map((t) => (
            <Link key={t.name} href={t.path} className="group">
              <div className="glass-panel p-10 rounded-2xl border-black/5 hover:border-black/10 transition-all duration-500 flex flex-col items-center">
                <div className="w-20 h-20 mb-6">
                  <GuideAvatar 
                    src={t.avatar.imagePath}
                    fallbackSrc={t.avatar.fallbackPath}
                    alt={t.name}
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h2 className="text-xl font-serif italic text-gray-900 mb-2">{t.name}</h2>
                <p className="text-[10px] text-gray-900/30 uppercase tracking-widest">{t.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Return to Grace Link */}
        <div className="mt-16">
          <Link 
            href="/pray?path=grace" 
            className="text-[10px] uppercase tracking-[0.3em] text-gray-900/20 hover:text-gray-900/60 transition-colors"
          >
            Return to Grace
          </Link>
        </div>
      </div>
    </div>
  );
}
