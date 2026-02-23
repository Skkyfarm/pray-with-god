'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Mic, Send, RotateCcw, Heart, Wind, Volume2, Square } from 'lucide-react';
import GuideAvatar from '@/components/GuideAvatar';
import NameCapture from '@/components/NameCapture';
import { GoogleGenAI } from "@google/genai";
import { AVATARS, Tradition } from '@/lib/avatars';

const FEELINGS = [
  'anxious', 'grateful', 'lonely', 'overwhelmed', 
  'hopeful', 'angry', 'seeking guidance', 'afraid'
];

function PrayerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = (searchParams.get('path') || 'grace') as Tradition;
  const avatar = AVATARS[path] || AVATARS.grace;

  const [input, setInput] = useState('');
  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([]);
  const [step, setStep] = useState<'input' | 'reflecting' | 'prayer' | 'silence'>('input');
  const [prayer, setPrayer] = useState('');
  const [showDoorway, setShowDoorway] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const prayerRef = useRef<HTMLDivElement>(null);
  const outputTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUserName(localStorage.getItem('pwg_user_name'));
  }, []);

  // Scroll to prayer when it appears
  useEffect(() => {
    if (step === 'prayer' && prayerRef.current && path !== 'quiet') {
      // Wait for layout update
      const handle = requestAnimationFrame(() => {
        if (prayerRef.current) {
          const rect = prayerRef.current.getBoundingClientRect();
          // Only scroll if the prayer container is not already comfortably in view near the top
          if (rect.top < 0 || rect.top > 200) {
            const targetY = window.scrollY + rect.top - 80; // 80px offset for header/breathing room
            window.scrollTo({
              top: Math.max(0, targetY),
              behavior: 'smooth'
            });
          }
        }
      });
      return () => cancelAnimationFrame(handle);
    }
  }, [step, path]);

  // Scroll to output top when prayer is ready
  useEffect(() => {
    if (prayer && step === 'prayer') {
      const handle = requestAnimationFrame(() => {
        outputTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(handle);
    }
  }, [prayer, step]);

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

  // Handle reflection and prayer generation
  useEffect(() => {
    if (step === 'reflecting') {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      const generatePrayer = async () => {
        try {
          // Lazy initialization of AI client
          const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "" });
          
          const toneInstructions: Record<string, string> = {
            grace: "simplest, universal language, deeply inclusive, avoiding religious jargon",
            catholic: "slightly traditional phrasing, respectful of liturgy, using terms like 'Lord' or 'Heavenly Father'",
            protestant: "pastoral conversational tone, focused on grace and personal relationship",
            jewish: "reflective wisdom tone, grounded in tradition, using terms like 'Hashem' or 'Eternal One'",
            muslim: "grounded trust language, focused on submission and mercy, using terms like 'Allah' or 'Most Merciful'",
            hindu: "gentle poetic imagery, focused on the divine within and universal connection",
            buddhist: "minimal present-focused language, focused on mindfulness, compassion, and equanimity"
          };

          const systemInstruction = `You are a spiritual guide named ${avatar.label}. 
          Your goal is to provide a calm, tradition-aware prayer or reflection that feels deeply human and personal, not like an AI.
          ${userName ? `The person's name is ${userName}. Use it gently if it feels natural to the tradition.` : ""}
          
          Rules:
          - Length: 4–7 sentences.
          - Tone: ${toneInstructions[path] || "calm and universal"}.
          - Structure:
            1) Acknowledge the person gently and specifically.
            2) Name the feeling or situation they shared with empathy.
            3) Offer a prayer or reflection that addresses their specific words.
            4) Provide a gentle hope-filled line for their journey ahead.
            5) End with a quiet tradition-appropriate release (e.g., "Amen", "Shalom", "Peace be with you", "Namaste").
          
          Avoid generic AI phrases like "I understand you are feeling..." or "Here is a prayer for you...". 
          Speak directly and soulfully. Do not use any markdown formatting. Just plain text.`;

          const prompt = `The person is feeling: ${selectedFeelings.join(', ')}. 
          They shared: "${input}". 
          Please offer a prayer or reflection as ${avatar.label} in the ${path} tradition.`;

          const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
              systemInstruction,
              temperature: 0.8,
            },
          });

          const text = response.text?.trim();
          if (text) {
            setPrayer(text);
          } else {
            throw new Error("Empty response from AI");
          }
          setStep('prayer');
        } catch (error) {
          console.error("Prayer generation failed:", error);
          setPrayer(generateFallbackPrayer(path, input, selectedFeelings));
          setStep('prayer');
        }
      };

      generatePrayer();
    }
  }, [step, path, input, selectedFeelings, avatar.label]);

  // Handle post-prayer silence doorway
  useEffect(() => {
    if (step === 'prayer') {
      const timer = setTimeout(() => {
        setShowDoorway(true);
      }, 15000); // 15 seconds of silence
      return () => clearTimeout(timer);
    }
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
    utterance.rate = 0.9; // Slightly slower for a calmer tone
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
    requestAnimationFrame(() => {
      outputTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const toggleFeeling = (feeling: string) => {
    setSelectedFeelings(prev => 
      prev.includes(feeling) ? prev.filter(f => f !== feeling) : [...prev, feeling]
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
    const name = AVATARS[p]?.label || 'Grace';
    const feelingContext = feelings.length > 0 ? `We acknowledge the ${feelings.join(' and ')} within.` : '';
    const closings: Record<string, string> = {
      jewish: "Shalom.",
      muslim: "Peace be with you.",
      hindu: "Namaste.",
      buddhist: "May you be at peace.",
      catholic: "Amen.",
      protestant: "Amen.",
      grace: "Peace."
    };
    
    return `Divine Presence, we come before you in this sacred moment of connection. ${feelingContext} We lift up the words shared here: "${text.substring(0, 60)}${text.length > 60 ? '...' : ''}". May the light of ${name}'s guidance shine upon this path, bringing clarity where there is doubt and peace where there is unrest. Grant the strength to carry this intention forward with a heart that is open and a spirit that is renewed. Let the stillness of this space remain as a sanctuary throughout the day. ${closings[p] || "Amen."}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden text-gray-900">
      {/* Background Rays (Standardized) */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${path === 'quiet' ? 'opacity-10' : 'opacity-40'}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-gradient-to-b from-blue-400/10 via-transparent to-transparent blur-[120px]" />
      </div>

      {/* Top Navigation */}
      <div className="absolute top-8 left-8 flex gap-8 z-50">
        <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-900/50 hover:text-gray-900 transition-colors">
          <ChevronLeft className="w-3 h-3" />
          Back to Home
        </Link>
        {path !== 'grace' && (
          <Link href="/pray?path=grace" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-900/50 hover:text-gray-900 transition-colors">
            <RotateCcw className="w-3 h-3" />
            Return to Grace
          </Link>
        )}
      </div>

      <div className="max-w-2xl w-full relative z-10 min-h-[50vh]">
        <div ref={outputTopRef} className="absolute -top-24" />
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
                      <>Welcome back, {userName}.<br />{path === 'grace' ? "What’s on your heart?" : "What would you like to bring into prayer?"}</>
                    ) : (
                      path === 'grace' ? "What’s on your heart?" : "What would you like to bring into prayer?"
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
                  className="w-full h-40 bg-transparent border-none focus:ring-0 text-lg font-serif italic text-gray-900/90 placeholder:text-gray-900/30 resize-none"
                />

                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest text-gray-900/40 font-medium">How are you feeling?</p>
                  <div className="flex flex-wrap gap-2">
                    {FEELINGS.map(f => (
                      <button
                        key={f}
                        onClick={() => toggleFeeling(f)}
                        className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                          selectedFeelings.includes(f)
                            ? 'bg-black/10 border-black/20 text-gray-900'
                            : 'bg-black/5 border-black/5 text-gray-900/50 hover:border-black/20'
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
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="space-y-4"
              >
                <p className="text-xl font-serif italic text-gray-900/40">
                  Holding this for a moment...
                </p>
                <div className="flex justify-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
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
              <div className="space-y-6 opacity-40 transition-opacity duration-1000 hover:opacity-100">
                <GuideAvatar 
                  src={AVATARS.grace.imagePath}
                  fallbackSrc={AVATARS.grace.fallbackPath}
                  alt="Grace"
                  className="w-24 h-24 grayscale opacity-50"
                />
                <p className="text-xl font-serif italic text-gray-900/60">
                  We can sit together.
                </p>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={handleBeginPrayer}
                className="text-[10px] uppercase tracking-[0.3em] text-gray-900/50 hover:text-gray-900 transition-colors"
              >
                Begin prayer
              </motion.button>
            </motion.div>
          )}

          {step === 'prayer' && (
            <motion.div 
              key="prayer"
              ref={prayerRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-xl mx-auto text-center space-y-12"
            >
              <div className="space-y-8">
                <AnimatePresence>
                  <motion.div
                    key="prayer-text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="space-y-8"
                  >
                    <p className="text-xl md:text-2xl font-serif italic text-gray-900 leading-relaxed">
                      {prayer}
                    </p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="flex justify-center"
                    >
                      <button
                        onClick={handleListen}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-black/10 text-[10px] uppercase tracking-widest text-gray-900/80 hover:text-gray-900 hover:bg-black/10 transition-all"
                      >
                        {isSpeaking ? (
                          <>
                            <Square className="w-3 h-3 fill-current" />
                            Stop
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3" />
                            Listen
                          </>
                        )}
                      </button>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, duration: 2 }}
                      className="text-[12px] uppercase tracking-[0.2em] text-gray-900/30 pt-4"
                    >
                      You can return whenever you need.
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {showDoorway && (
                  <motion.div 
                    key="doorway"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="pt-12 space-y-8"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-900/40">Would you like to share more?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <button 
                        onClick={handleShareMore}
                        className="text-[10px] uppercase tracking-widest text-gray-900/60 hover:text-gray-900 transition-colors flex items-center gap-2"
                      >
                        <Heart className="w-3 h-3" />
                        Share more
                      </button>
                      <button 
                        onClick={handleSitQuietly}
                        className="text-[10px] uppercase tracking-widest text-gray-900/60 hover:text-gray-900 transition-colors flex items-center gap-2"
                      >
                        <Wind className="w-3 h-3" />
                        Sit quietly
                      </button>
                      <button 
                        onClick={() => {
                          if (path === 'grace') {
                            handleShareMore();
                          } else {
                            router.push('/pray?path=grace');
                          }
                        }}
                        className="text-[10px] uppercase tracking-widest text-gray-900/60 hover:text-gray-900 transition-colors flex items-center gap-2"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Return to Grace
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function PrayPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white/10 uppercase tracking-widest text-[10px]">Entering sacred space...</div>}>
      <PrayerContent />
    </Suspense>
  );
}
