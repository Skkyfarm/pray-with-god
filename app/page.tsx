'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GuideAvatar from '@/components/GuideAvatar';
import NameCapture from '@/components/NameCapture';
import { AVATARS } from '@/lib/avatars';
import { Compass, Heart, Wind } from 'lucide-react';

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  const [hasSkippedName, setHasSkippedName] = useState(false);
  const [greeting, setGreeting] = useState<string>('I’m here.');

  useEffect(() => {
    const name = localStorage.getItem('pwg_user_name');
    const skipped = localStorage.getItem('pwg_name_skipped') === 'true';

    if (name) {
      setUserName(name);
      setHasSkippedName(false);

      const variants = [
        `Welcome back, ${name}.`,
        `It’s good to see you again, ${name}.`,
        `Peace be with you, ${name}.`,
        `I’m glad you’ve returned, ${name}.`,
      ];

      setGreeting(variants[Math.floor(Math.random() * variants.length)]);
    } else {
      setHasSkippedName(skipped);
    }
  }, []);

  const handleNameComplete = (name: string | null) => {
    setUserName(name);

    if (name) {
      setHasSkippedName(false);

      const variants = [
        `Welcome back, ${name}.`,
        `It’s good to see you again, ${name}.`,
        `Peace be with you, ${name}.`,
        `I’m glad you’ve returned, ${name}.`,
      ];

      setGreeting(variants[Math.floor(Math.random() * variants.length)]);
    } else {
      setHasSkippedName(true);
      setGreeting('I’m here.');
    }
  };

  const traditions = [
    { name: 'Christian', path: '/choose/christian', avatar: AVATARS.catholic },
    { name: 'Jewish', path: '/pray?path=jewish', avatar: AVATARS.jewish },
    { name: 'Muslim', path: '/pray?path=muslim', avatar: AVATARS.muslim },
    { name: 'Hindu', path: '/pray?path=hindu', avatar: AVATARS.hindu },
    { name: 'Buddhist', path: '/pray?path=buddhist', avatar: AVATARS.buddhist },
  ];

  return (
    <div className="relative min-h-screen flex flex-col text-black">
      <section className="relative flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(254,243,199,0.8)_0%,rgba(253,186,116,0.3)_40%,transparent_70%)] blur-[120px] opacity-80" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-400/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
          <div className="space-y-4 mb-10 max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-black">
              Welcome to PrayWithGod.ai
            </p>

            <h1 className="text-4xl md:text-5xl font-serif text-black tracking-tight leading-tight">
              Thoughtful, personalized prayer across spiritual traditions.
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-black">
              Create prayers in a peaceful space shaped by reverence, reflection,
              and care.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-black">
              Pray freely without an account. Add your name only if you’d like
              your prayer experience to feel more personal.
            </p>
          </div>

          <div className="relative mb-10 animate-float">
            <div className="absolute inset-0 rounded-[3rem] bg-white/20 blur-3xl scale-150" />
            <GuideAvatar
              src={AVATARS.grace.imagePath}
              fallbackSrc={AVATARS.grace.fallbackPath}
              alt="Grace"
              className="w-48 h-48 relative z-10"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-1 rounded-full border border-black/10 z-20">
              <span className="text-[10px] uppercase tracking-widest text-black">
                Grace
              </span>
            </div>
          </div>

          {(userName || !hasSkippedName) && (
            <div className="glass-panel w-full max-w-xl rounded-2xl border border-black/10 px-6 py-6 mb-12">
              <div className="space-y-2 mb-5">
                <h2 className="text-xl font-serif italic text-black">
                  {userName ? greeting : 'What should we call you?'}
                </h2>

                <p className="text-sm leading-relaxed text-black">
                  {userName
                    ? 'Your saved name can be used to make your prayers feel more personal.'
                    : 'Optional — your name is only used to personalize your prayers.'}
                </p>
              </div>

              {!userName && <NameCapture onComplete={handleNameComplete} />}
            </div>
          )}

          <div className="space-y-4 mb-16">
            {!userName && hasSkippedName && (
              <h2 className="text-xl font-serif italic text-black">
                All are welcome here.
              </h2>
            )}

            {userName && (
              <h2 className="text-xl font-serif italic text-black">
                {greeting}
              </h2>
            )}

            <h3 className="text-4xl md:text-5xl font-serif text-black tracking-tight leading-tight">
              How would you like to pray today?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
            <Link href="/pray?path=grace" className="group">
              <div className="glass-panel p-8 rounded-2xl border border-black/10 hover:border-black transition-all duration-500 flex flex-col items-center text-center h-full">
                <Heart className="w-6 h-6 text-black mb-4" />
                <h3 className="text-sm font-medium text-black mb-2">
                  Non-denominational
                </h3>
                <p className="text-[11px] text-black leading-relaxed">
                  Stay with Grace for a universal connection.
                </p>
              </div>
            </Link>

            <Link href="/choose" className="group">
              <div className="glass-panel p-8 rounded-2xl border border-black/10 hover:border-black transition-all duration-500 flex flex-col items-center text-center h-full">
                <Compass className="w-6 h-6 text-black mb-4" />
                <h3 className="text-sm font-medium text-black mb-2">
                  Choose a tradition
                </h3>
                <p className="text-[11px] text-black leading-relaxed">
                  Find guidance through a specific spiritual path.
                </p>
              </div>
            </Link>

            <Link href="/quiet" className="group">
              <div className="glass-panel p-8 rounded-2xl border border-black/10 hover:border-black transition-all duration-500 flex flex-col items-center text-center h-full">
                <Wind className="w-6 h-6 text-black mb-4" />
                <h3 className="text-sm font-medium text-black mb-2">
                  Sit quietly first
                </h3>
                <p className="text-[11px] text-black leading-relaxed">
                  Begin with a moment of silent reflection.
                </p>
              </div>
            </Link>
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-black">
            All are welcome here.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto w-full px-8 pb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-black font-semibold">
            Guidance across traditions
          </h2>
          <div className="h-px flex-grow ml-8 bg-black/20" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {traditions.map((t) => (
            <Link key={t.name} href={t.path} className="group">
              <div className="glass-panel p-6 rounded-xl border border-black/10 hover:border-black transition-all duration-500 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <GuideAvatar
                    src={t.avatar.imagePath}
                    fallbackSrc={t.avatar.fallbackPath}
                    alt={t.name}
                    className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-black">
                  {t.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="fixed bottom-4 left-4 z-50">
        <Link
          href="/health"
          className="text-[10px] text-black hover:opacity-70 transition-opacity uppercase tracking-widest"
        >
          Health Check
        </Link>
      </div>
    </div>
  );
}