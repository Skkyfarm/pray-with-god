'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GuideAvatar from '@/components/GuideAvatar';
import NameCapture from '@/components/NameCapture';
import { AVATARS } from '@/lib/avatars';

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
    { name: 'Protestant', path: '/pray?path=protestant', avatar: AVATARS.protestant },
    { name: 'Catholic', path: '/pray?path=catholic', avatar: AVATARS.catholic },
    { name: 'Jewish', path: '/pray?path=jewish', avatar: AVATARS.jewish },
    { name: 'Muslim', path: '/pray?path=muslim', avatar: AVATARS.muslim },
    { name: 'Buddhist', path: '/pray?path=buddhist', avatar: AVATARS.buddhist },
    { name: 'Hindu', path: '/pray?path=hindu', avatar: AVATARS.hindu },
    { name: 'Exploring', path: '/pray?path=grace', avatar: AVATARS.grace },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-black">
      <section className="relative flex flex-col items-center px-4 pb-8 pt-6 sm:px-6 md:px-6 md:pb-10 md:pt-10">
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
          <div className="mb-4 max-w-2xl space-y-2 md:mb-6 md:space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-black">
              Welcome to PrayWithGod
            </p>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
              Thoughtful, personalized prayer across spiritual traditions.
            </h1>

            <p className="text-sm leading-relaxed text-black md:text-base">
              Create prayers in a peaceful space shaped by reverence, reflection,
              and care.
            </p>

            <p className="text-sm leading-relaxed text-black md:text-base">
              Choose a tradition below and begin directly. Add your name only if
              you’d like your prayer experience to feel more personal.
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
                <h2 className="text-lg italic text-black md:text-xl">
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

          <div className="mb-6 space-y-2 md:mb-8">
            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
              How would you like to pray today?
            </h3>
            <p className="text-sm leading-relaxed text-black md:text-base">
              Grace welcomes everyone. Choose a path below.
            </p>
          </div>

          <div className="mb-10 w-full max-w-5xl">
            <div className="mb-6 flex items-center justify-between md:mb-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black md:text-xs md:tracking-[0.4em]">
                Guidance across traditions
              </h2>
              <div className="ml-4 h-px flex-grow bg-black/20 md:ml-8" />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-7 md:gap-3">
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
          </div>

          <p className="text-xl italic text-black md:text-2xl">
            All are welcome here.
          </p>
        </div>
      </section>
    </main>
  );
}