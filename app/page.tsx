// /app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import GuideAvatar from '@/components/GuideAvatar';
import NameCapture from '@/components/NameCapture';
import { AVATARS } from '@/lib/avatars';

function getRandomGreeting(name: string) {
  const variants = [
    `Welcome back, ${name}.`,
    `It’s good to see you again, ${name}.`,
    `Peace be with you, ${name}.`,
    `I’m glad you’ve returned, ${name}.`,
  ];

  return variants[Math.floor(Math.random() * variants.length)];
}

function getPreferredClerkName(user: ReturnType<typeof useUser>['user']) {
  const firstName = user?.firstName?.trim();
  if (firstName) return firstName;

  const fullName = user?.fullName?.trim();
  if (fullName) return fullName;

  const username = typeof user?.username === 'string' ? user.username.trim() : '';
  if (username) return username;

  const primaryEmail = user?.primaryEmailAddress?.emailAddress?.trim();
  if (primaryEmail) {
    return primaryEmail.split('@')[0] || null;
  }

  return null;
}

function clearLocalNameMemory() {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('pwg_user_name');
  localStorage.removeItem('pwg_name_skipped');

  for (let i = localStorage.length - 1; i >= 0; i -= 1) {
    const key = localStorage.key(i);

    if (key?.startsWith('pwg_user_name_')) {
      localStorage.removeItem(key);
    }
  }
}

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [userName, setUserName] = useState<string | null>(null);
  const [hasSkippedName, setHasSkippedName] = useState(false);
  const [greeting, setGreeting] = useState<string>('I’m here.');

  useEffect(() => {
    if (!isLoaded) return;

    const legacyName = localStorage.getItem('pwg_user_name');
    const skipped = localStorage.getItem('pwg_name_skipped') === 'true';

    if (!isSignedIn || !user?.id) {
      if (legacyName) {
        setUserName(legacyName);
        setHasSkippedName(false);
        setGreeting(getRandomGreeting(legacyName));
      } else {
        setUserName(null);
        setHasSkippedName(skipped);
        setGreeting('I’m here.');
      }

      return;
    }

    const scopedNameKey = `pwg_user_name_${user.id}`;
    const scopedName = localStorage.getItem(scopedNameKey);
    const clerkName = getPreferredClerkName(user);
    const resolvedName = scopedName || clerkName || null;

    if (resolvedName) {
      localStorage.setItem('pwg_user_name', resolvedName);
      localStorage.setItem(scopedNameKey, resolvedName);
      localStorage.removeItem('pwg_name_skipped');

      setUserName(resolvedName);
      setHasSkippedName(false);
      setGreeting(getRandomGreeting(resolvedName));
      return;
    }

    localStorage.removeItem('pwg_user_name');
    setUserName(null);
    setHasSkippedName(false);
    setGreeting('I’m here.');
  }, [isLoaded, isSignedIn, user]);

  const handleNameComplete = (name: string | null) => {
    setUserName(name);

    if (name) {
      if (isSignedIn && user?.id) {
        localStorage.setItem(`pwg_user_name_${user.id}`, name);
      }

      localStorage.setItem('pwg_user_name', name);
      localStorage.removeItem('pwg_name_skipped');
      setHasSkippedName(false);
      setGreeting(getRandomGreeting(name));
      return;
    }

    if (isSignedIn && user?.id) {
      localStorage.removeItem(`pwg_user_name_${user.id}`);
    }

    localStorage.removeItem('pwg_user_name');
    localStorage.setItem('pwg_name_skipped', 'true');
    setHasSkippedName(true);
    setGreeting('I’m here.');
  };

  const handleClearSavedName = () => {
    clearLocalNameMemory();
    setUserName(null);
    setHasSkippedName(false);
    setGreeting('I’m here.');
  };

  const traditions = [
    { name: 'Protestant', path: '/pray?path=protestant', avatar: AVATARS.protestant },
    { name: 'Catholic', path: '/pray?path=catholic', avatar: AVATARS.catholic },
    { name: 'Exploring', path: '/pray?path=grace', avatar: AVATARS.grace },
    { name: 'Jewish', path: '/pray?path=jewish', avatar: AVATARS.jewish },
    { name: 'Muslim', path: '/pray?path=muslim', avatar: AVATARS.muslim },
    { name: 'Buddhist', path: '/pray?path=buddhist', avatar: AVATARS.buddhist },
    { name: 'Hindu', path: '/pray?path=hindu', avatar: AVATARS.hindu },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-black">
      <section className="relative flex flex-col items-center px-4 pb-8 pt-5 sm:px-6 md:px-6 md:pb-10 md:pt-8">
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
          <div className="mb-4 max-w-3xl space-y-2 md:mb-5 md:space-y-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-black md:text-xs">
              PrayWithGod.ai
            </p>

            <h1 className="text-2xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
              Choose a Tradition, Bring What Is In Your Heart, and Begin.
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-black md:text-[15px]">
              A prayer companion for believers, seekers, and anyone in need of a quiet moment of prayer.
            </p>

            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-black/80 md:text-sm">
              Free prayer companionship and exploration for everyone. Support PWG to save prayers and unlock enhanced features.
            </p>
          </div>

          {(userName || !hasSkippedName) && (
            <div className="glass-panel mb-5 w-full max-w-2xl rounded-[1.75rem] border border-black/10 px-5 py-5 text-center shadow-sm md:mb-6 md:px-6 md:py-6">
              <div className="mb-3 space-y-1.5">
                <h2 className="text-xl italic text-black md:text-2xl">
                  {userName ? greeting : 'What Should We Call You?'}
                </h2>

                <p className="mx-auto max-w-xl text-sm leading-relaxed text-black md:text-base">
                  {userName
                    ? 'Your saved name helps keep your prayer experience personal and welcoming.'
                    : 'Optional — your name is only used to personalize your prayers.'}
                </p>
              </div>

              {!userName && <NameCapture onComplete={handleNameComplete} />}

              {userName && !isSignedIn ? (
                <button
                  type="button"
                  onClick={handleClearSavedName}
                  className="mt-3 text-xs font-semibold text-black/55 underline underline-offset-4 hover:text-black"
                >
                  Not you? Clear saved name
                </button>
              ) : null}
            </div>
          )}

          <p className="mb-4 text-sm leading-relaxed text-black md:mb-5 md:text-base">
            Begin with the tradition that feels closest to home — or start with Exploring if you are still finding your way.
          </p>

          <div className="mb-5 w-full max-w-6xl md:mb-6">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-7 md:gap-3">
              {traditions.map((t) => (
                <Link key={t.name} href={t.path} className="group block">
                  <div className="glass-panel flex h-full flex-col items-center rounded-2xl border border-black/10 bg-white/35 p-3 text-center shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.05] hover:border-violet-400/90 hover:bg-white/55 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.86),0_0_20px_rgba(255,255,255,0.92),0_0_42px_rgba(139,92,246,0.58),0_0_78px_rgba(91,33,182,0.42),0_0_110px_rgba(49,46,129,0.28)] md:p-4">
                    <div className="mb-2 h-12 w-12 md:h-14 md:w-14">
                      <GuideAvatar
                        src={t.avatar.imagePath}
                        fallbackSrc={t.avatar.fallbackPath}
                        alt={t.name}
                        className="h-full w-full opacity-90 transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:opacity-100"
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

          <p className="text-lg italic text-black md:text-xl">
            Pray and Reflect, or Explore and Seek. All Are Welcome Here.
          </p>
        </div>
      </section>
    </main>
  );
}