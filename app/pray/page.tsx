'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Mic, Send, RotateCcw, Heart, Wind, Volume2, Square } from 'lucide-react';
import GuideAvatar from '@/components/GuideAvatar';
import NameCapture from '@/components/NameCapture';
import { AVATARS, Tradition } from '@/lib/avatars';

const FEELINGS = [
  'anxious',
  'grateful',
  'lonely',
  'overwhelmed',
  'hopeful',
  'angry',
  'seeking guidance',
  'afraid',
];

type Step = 'input' | 'reflecting' | 'prayer' | 'silence';

function PrayerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const path = (searchParams.get('path') || 'grace') as Tradition;
  const avatar = AVATARS[path] || AVATARS.grace;

  const [input, setInput] = useState('');
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);
  const [step, setStep] = useState<Step>('input');
  const [prayer, setPrayer] = useState('');
  const [showDoorway, setShowDoorway] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const prayerRef = useRef<HTMLDivElement>(null);

  // In-flow anchor (stable scroll target)
  const outputTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUserName(localStorage.getItem('pwg_user_name'));
  }, []);

  // Scroll to output top when reflecting starts (prevents footer-pegging)
  useEffect(() => {
    if (step === 'reflecting' && path !== 'quiet') {
      const id = window.setTimeout(() => {
        outputTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return () => window.clearTimeout(id);
    }
  }, [step, path]);

  // Scroll to prayer when it appears (keeps reading position comfortable)
  useEffect(() => {
    if (step === 'prayer' && prayerRef.current && path !== 'quiet') {
      const handle = requestAnimationFrame(() => {
        if (!prayerRef.current) return;
        const rect = prayerRef.current.getBoundingClientRect();
        if (rect.top < 0 || rect.top > 200) {
          const targetY = window.scrollY + rect.top - 80;
          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
        }
      });
      return () => cancelAnimationFrame(handle);
    }
  }, [step, path]);

  // Extra guard: scroll to output when prayer text is set (handles layout shift)
  useEffect(() => {
    if (prayer && step === 'prayer' && path !== 'quiet') {
      const handle = requestAnimationFrame(() => {
        outputTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(handle);
    }
  }, [prayer, step, path]);

  // Reset state when path changes
  useEffect(() => {
    if (path === 'quiet') {
      setStep('silence');
    } else {
      setStep('input');
    }
    setInput('');
    setSelectedFeelings([]);
    setPrayer('');
    setShowDoorway(false);
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [path]);

  // Prayer generation when reflecting (SERVER API)
  useEffect(() => {
    if (step !== 'reflecting') return;

    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    const generatePrayer = async () => {
      try {
        const res = await fetch('/api/pray', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tradition: path,
            avatarLabel: avatar.label,
            userName,
            feelings: selectedFeelings,
            input,
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.error || 'Prayer API error');
        }

        const data = await res.json().catch(() => ({}));
        const text = String(data?.prayer || '').trim();

        if (!text) throw new Error('Empty prayer returned from API');

        setPrayer(text);
        setStep('prayer');
      } catch (error) {
        console.error('Prayer generation failed:', error);
        setPrayer(generateFallbackPrayer(path, input, selectedFeelings));
        setStep('prayer');
      }
    };

    generatePrayer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, path, input, selectedFeelings, avatar.label, userName]);

  // Post-prayer doorway
  useEffect(() => {
    if (step !== 'prayer') return;
    const timer = setTimeout(() => setShowDoorway(true), 15000);
    return () => clearTimeout(timer);
  }, [step]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleListen = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    if (!prayer) return;

    const utterance = new SpeechSynthesisUtterance(prayer);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() && selectedFeelings.length === 0) return;
    setStep('reflecting');
  };

  const toggleFeeling = (feeling: string) => {
    setSelectedFeelings((prev) =>
      prev.includes(feeling) ? prev.filter((f) => f !== feeling) : [...prev, feeling]
    );
  };

  const handleShareMore = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setStep('input');
    setPrayer('');
    setShowDoorway(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSitQuietly = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setShowDoorway(false);
    setStep('silence');
  };

  const handleBeginPrayer = () => {
    setStep('input');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const generateFallbackPrayer = (p: string, text: string, feelings: string[]) => {
    const feelingContext =
      feelings.length > 0 ? `We acknowledge the ${feelings.join(' and ')} within.` : '';

    const closings: Record<string, string> = {
      jewish: 'Shalom.',
      muslim: 'Peace be with you.',
      hindu: 'Namaste.',
      buddhist: 'May you be at peace.',
      catholic: 'Amen.',
      protestant: 'Amen.',
      grace: 'Peace.',
    };

    const snippet = text ? `${text.substring(0, 120)}${text.length > 120 ? '…' : ''}` : '';

    return `Divine Presence, we come before you in this sacred moment of connection. ${feelingContext} ${
      snippet ? `We lift up the words shared here: "${snippet}".` : ''
    } May comfort and clarity meet this moment, and may strength rise gently for the next step. Let peace settle where there is fear, and steadiness return where there is strain. ${
      closings[p] || 'Peace.'
    }`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden text-gray-950">
      {/* Readability veil (keeps sunrise but makes text readable) */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] pointer-events-none" />

      {/* Background Rays (Standardized) */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          path === 'quiet' ? 'opacity-10' : 'opacity-40'
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-gradient-to-b from-blue-400/10 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* Top Navigation */}
      <div className="absolute top-8 left-8 flex gap-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-900/60 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Home
        </Link>
        {path !== 'grace' && (
          <Link
            href="/pray?path=grace"
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-900/60 hover:text-gray-900 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Return to Grace
          </Link>
        )}
      </div>

      <div className="max-w-2xl w-full relative z-10 min-h-[50vh]">
        {/* Stable in-flow anchor for scroll */}
        <div ref={outputTopRef} className="h-0 scroll-mt-24" />

        <AnimatePresence mode="wait">
          {step === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <GuideAvatar
                  src={avatar.imagePath}
                  fallbackSrc={avatar.fallbackPath}
                  alt={avatar.label}
                  className="w-24 h-24 animate-float"
                />
                <div className="space-y-2">
                  <h1 className="text-xl font-serif italic text-gray-900/80">{avatar.label}</h1>
                  <p className="text-2xl md:text-3xl font-serif text-gray-900">
                    {userName ? (
                      <>
                        Welcome back, {userName}.<br />
                        {path === 'grace'
                          ? 'What’s on your heart?'
                          : 'What would you like to bring into prayer?'}
                      </>
                    ) : path === 'grace' ? (
                      'What’s on your heart?'
                    ) : (
                      'What would you like to bring into prayer?'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <NameCapture onComplete={(name) => setUserName(name)} />
              </div>

              <div className="glass-panel p-8 rounded-3xl border-black/5 space-y-8">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Share in your own words..."
                  className="w-full h-40 bg-transparent border-none focus:ring-0 text-lg font-serif italic text-gray-900/90 placeholder:text-gray-900/40 resize-none"
                />

                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest text-gray-900/60 font-medium">
                    How are you feeling?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FEELINGS.map((f) => (
                      <button
                        key={f}
                        onClick={() => toggleFeeling(f)}
                        className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                          selectedFeelings.includes(f)
                            ? 'bg-black/10 border-black/20 text-gray-900'
                            : 'bg-black/5 border-black/10 text-gray-900/70 hover:border-black/20'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    disabled
                    className="flex-grow flex items-center justify-center gap-2 bg-black/5 text-gray-900/40 py-4 rounded-full text-[10px] uppercase tracking-widest cursor-not-allowed"
                  >
                    <Mic className="w-4 h-4" />
                    Speak instead (Coming soon)
                  </button>

                  <button
                    onClick={handleSubmit}
                    disabled={!input.trim() && selectedFeelings.length === 0}
                    aria-label="Form prayer"
                    className="flex-grow sm:flex-initial px-10 py-4 flex items-center justify-center gap-3 bg-gray-900 text-white rounded-full hover:bg-spiritual-gold hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed text-[10px] uppercase tracking-widest font-bold whitespace-nowrap"
                  >
                    <span>Form prayer</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'reflecting' && (
            <motion.div
              key="reflecting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center space-y-12 py-20"
            >
              <motion.div
                animate={{ opacity: [0.35, 0.75, 0.35] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="space-y-4"
              >
                <p className="text-xl font-serif italic text-gray-900/60">
                  Holding this for a moment...
                </p>
                <div className="flex justify-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="w-1 h-1 rounded-full bg-gray-900"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {step === 'silence' && (
            <motion.div
              key="silence"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center space-y-12"
            >
              <div className="space-y-6 opacity-60 transition-opacity duration-1000 hover:opacity-100">
                <GuideAvatar
                  src={AVATARS.grace.imagePath}
                  fallbackSrc={AVATARS.grace.fallbackPath}
                  alt="Grace"
                  className="w-24 h-24 grayscale opacity-70"
                />
                <p className="text-xl font-serif italic text-gray-900/70">We can sit together.</p>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={handleBeginPrayer}
                className="text-[10px] uppercase tracking-[0.3em] text-gray-900/70 hover:text-gray-900 transition-colors"
              >
                Begin prayer
              </motion.button>
            </motion.div>
          )}

{step === 'prayer' && (
  <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-8">

    {/* Avatar */}
    <div className="flex flex-col items-center space-y-4">
      <GuideAvatar avatar={avatar} size="xl" />

      {/* Listen Button */}
      <button
        onClick={handleListen}
        className="px-6 py-3 bg-gray-900 text-white rounded-full text-xs uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2"
      >
        {isSpeaking ? (
          <>
            <Square className="w-4 h-4" />
            Stop
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4" />
            Listen
          </>
        )}
      </button>
    </div>

    {/* Prayer Text */}
    <div
      ref={prayerRef}
      className="text-base md:text-lg leading-relaxed whitespace-pre-wrap text-black"
    >
      {prayer}
    </div>

  </div>
)}        </AnimatePresence>
      </div>
    </div>
  );
}

export default function PrayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-900/40 uppercase tracking-widest text-[10px]">
          Entering sacred space...
        </div>
      }
    >
      <PrayerContent />
    </Suspense>
  );
}