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
    { name: 'Non-Denom', path: '/pray?path=grace', avatar: AVATARS.grace },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-black">
      <section className="relative flex flex-col items-center px-4 pt-6 pb-8 sm:px-6 md:px-6 md:pt-10 md:pb-10">
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
          <div className="mb-4 max-w-2xl space-y-2 md:mb-6 md:space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-black">
              Welcome to PrayWithGod
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold text-black tracking-tight leading-tight">
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

          <div className="relative mb-4 animate-float md:mb-6">
            <div className="absolute inset-0 scale-150 rounded-[3rem] bg-white/20 blur-3xl" />
            <GuideAvatar
              src={AVATARS.grace.imagePath}
              fallbackSrc={AVATARS.grace.fallbackPath}
              alt="Grace"
              className="relative z-10 h-32 w-32 md:h-44 md:w-44"
            />
            <div className="glass-panel absolute -bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-black/10 px-3 py-1">
              <span className="text-[10px] uppercase tracking-widest text-black">
                Grace
              </span>
            </div>
          </div>

          {(userName || !hasSkippedName) && (
            <div className="glass-panel mb-6 w-full max-w-xl rounded-2xl border border-black/10 px-4 py-4 md:mb-8 md:px-5 md:py-4">
              <div className="mb-3 space-y-1.5">
                <h2 className="text-lg md:text-xl italic text-black">
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

          <div className="mb-6 space-y-1.5 md:mb-8">
            <h3 className="text-2xl md:text-5xl font-semibold text-black tracking-tight leading-tight">
              How would you like to pray today?
            </h3>
          </div>

          <div className="mb-8 grid w-full max-w-3xl grid-cols-1 gap-3 md:mb-10 md:grid-cols-3 md:gap-4">
            <Link href="/pray?path=grace" className="group">
              <div className="glass-panel flex h-full flex-col items-center rounded-2xl border border-black/10 p-4 text-center transition-all duration-500 hover:border-black md:p-5">
                <Heart className="mb-2 h-6 w-6 text-black" />
                <h3 className="mb-1.5 text-sm font-medium text-black">
                  Non-denominational
                </h3>
                <p className="text-[11px] leading-relaxed text-black">
                  Stay with Grace for a universal connection.
                </p>
              </div>
            </Link>

            <Link href="/choose" className="group">
              <div className="glass-panel flex h-full flex-col items-center rounded-2xl border border-black/10 p-4 text-center transition-all duration-500 hover:border-black md:p-5">
                <Compass className="mb-2 h-6 w-6 text-black" />
                <h3 className="mb-1.5 text-sm font-medium text-black">
                  Choose a tradition
                </h3>
                <p className="text-[11px] leading-relaxed text-black">
                  Find guidance through a specific spiritual path.
                </p>
              </div>
            </Link>

            <Link href="/quiet" className="group">
              <div className="glass-panel flex h-full flex-col items-center rounded-2xl border border-black/10 p-4 text-center transition-all duration-500 hover:border-black md:p-5">
                <Wind className="mb-2 h-6 w-6 text-black" />
                <h3 className="mb-1.5 text-sm font-medium text-black">
                  Sit quietly first
                </h3>
                <p className="text-[11px] leading-relaxed text-black">
                  Begin with a moment of silent reflection.
                </p>
              </div>
            </Link>
          </div>

          <p className="text-xl md:text-2xl italic text-black">
            All are welcome here.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6 md:px-8 md:pb-18">
        <div className="mb-6 flex items-center justify-between md:mb-8">
          <h2 className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] md:tracking-[0.4em] text-black">
            Guidance across traditions
          </h2>
          <div className="ml-4 h-px flex-grow bg-black/20 md:ml-8" />
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6 md:gap-3">
          {traditions.map((t) => (
            <Link key={t.name} href={t.path} className="group">
              <div className="glass-panel flex flex-col items-center rounded-xl border border-black/10 p-3 text-center transition-all duration-500 hover:border-black md:p-4">
                <div className="mb-2 h-12 w-12 md:h-14 md:w-14">
                  <GuideAvatar
                    src={t.avatar.imagePath}
                    fallbackSrc={t.avatar.fallbackPath}
                    alt={t.name}
                    className="h-full w-full opacity-90 transition-opacity group-hover:opacity-100"
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
    </main>
  );
}