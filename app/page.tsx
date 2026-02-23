'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GuideAvatar from '@/components/GuideAvatar';
import NameCapture from '@/components/NameCapture';
import { AVATARS } from '@/lib/avatars';
import { Compass, Heart, Wind, Cross, Star, Moon, Sun, Flower2 } from 'lucide-react';

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>("I’m here.");

  useEffect(() => {
    const name = localStorage.getItem('pwg_user_name');
    if (name) {
      setUserName(name);
      const variants = [
        `Welcome back, ${name}.`,
        `It’s good to see you again, ${name}.`,
        `Peace be with you, ${name}.`,
        `I’m glad you’ve returned, ${name}.`
      ];
      setGreeting(variants[Math.floor(Math.random() * variants.length)]);
    }
  }, []);

  const handleNameComplete = (name: string | null) => {
    setUserName(name);
    if (name) {
      setGreeting(`Welcome back, ${name}.`);
    }
  };

  const traditions = [
    { name: 'Christian', path: '/choose/christian', icon: <Cross className="w-5 h-5" />, avatar: AVATARS.protestant },
    { name: 'Jewish', path: '/pray?path=jewish', icon: <Star className="w-5 h-5" />, avatar: AVATARS.jewish },
    { name: 'Muslim', path: '/pray?path=muslim', icon: <Moon className="w-5 h-5" />, avatar: AVATARS.muslim },
    { name: 'Hindu', path: '/pray?path=hindu', icon: <Sun className="w-5 h-5" />, avatar: AVATARS.hindu },
    { name: 'Buddhist', path: '/pray?path=buddhist', icon: <Flower2 className="w-5 h-5" />, avatar: AVATARS.buddhist },
  ];

  return (
    <div className="relative min-h-screen flex flex-col text-gray-900">
      {/* Minimal Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
        <div className="text-lg font-serif italic tracking-wider text-gray-900/90">
          PrayWithGod.ai
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-gray-900/50">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="/support" className="hover:text-gray-900 transition-colors">Support</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Warm Mist / Soft Rays Background Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(254,243,199,0.8)_0%,rgba(253,186,116,0.3)_40%,transparent_70%)] blur-[120px] opacity-80" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-400/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
          {/* Grace Avatar */}
          <div className="relative mb-12 animate-float">
            <div className="absolute inset-0 rounded-[3rem] bg-white/20 blur-3xl scale-150" />
            <GuideAvatar 
              src={AVATARS.grace.imagePath}
              fallbackSrc={AVATARS.grace.fallbackPath}
              alt="Grace"
              className="w-48 h-48 relative z-10"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1 rounded-full border border-black/5 z-20">
              <span className="text-[10px] uppercase tracking-widest text-gray-900/60">Grace</span>
            </div>
          </div>

          <NameCapture onComplete={handleNameComplete} />

          {/* Copy */}
          <div className="space-y-4 mb-16">
            <h2 className="text-xl font-serif italic text-gray-900/70">
              {greeting}
            </h2>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight leading-tight">
              How would you like to pray today?
            </h1>
          </div>

          {/* Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
            <Link href="/pray?path=grace" className="group">
              <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-black/10 transition-all duration-500 flex flex-col items-center text-center h-full">
                <Heart className="w-6 h-6 text-gray-900/40 group-hover:text-gray-900/80 transition-colors mb-4" />
                <h3 className="text-sm font-medium text-gray-900 mb-2">Non-denominational</h3>
                <p className="text-[11px] text-gray-900/40 leading-relaxed">Stay with Grace for a universal connection.</p>
              </div>
            </Link>

            <Link href="/choose" className="group">
              <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-black/10 transition-all duration-500 flex flex-col items-center text-center h-full">
                <Compass className="w-6 h-6 text-gray-900/40 group-hover:text-gray-900/80 transition-colors mb-4" />
                <h3 className="text-sm font-medium text-gray-900 mb-2">Choose a tradition</h3>
                <p className="text-[11px] text-gray-900/40 leading-relaxed">Find guidance through a specific spiritual path.</p>
              </div>
            </Link>

            <Link href="/pray?path=quiet" className="group">
              <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-black/10 transition-all duration-500 flex flex-col items-center text-center h-full">
                <Wind className="w-6 h-6 text-gray-900/40 group-hover:text-gray-900/80 transition-colors mb-4" />
                <h3 className="text-sm font-medium text-gray-900 mb-2">Sit quietly first</h3>
                <p className="text-[11px] text-gray-900/40 leading-relaxed">Begin with a moment of silent reflection.</p>
              </div>
            </Link>
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-900/20">
            All are welcome here.
          </p>
        </div>
      </section>

      {/* Traditions Grid Section */}
      <section className="max-w-5xl mx-auto w-full px-8 pb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-gray-900/30 font-semibold">
            Guidance across traditions
          </h2>
          <div className="h-px flex-grow ml-8 bg-black/5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {traditions.map((t) => (
            <Link key={t.name} href={t.path} className="group">
              <div className="glass-panel p-6 rounded-xl border-black/5 hover:border-black/10 transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <GuideAvatar 
                    src={t.avatar.imagePath}
                    fallbackSrc={t.avatar.fallbackPath}
                    alt={t.name}
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-900/40 group-hover:text-gray-900 transition-colors">
                  {t.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Health Check Link */}
      <div className="fixed bottom-4 left-4 z-50">
        <Link href="/health" className="text-[10px] opacity-20 hover:opacity-100 transition-opacity uppercase tracking-widest">
          Health Check
        </Link>
      </div>
    </div>
  );
}
