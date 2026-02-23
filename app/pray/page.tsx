'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Mic, Send, RotateCcw, Heart, Wind, Volume2, Square } from 'lucide-react';
import GuideAvatar from '@/components/GuideAvatar';
import NameCapture from '@/components/NameCapture';
import { GoogleGenAI } from "@google/genai";
import { AVATARS, Tradition } from '@/lib/avatars';

const FEELINGS = [
  'anxious','grateful','lonely','overwhelmed',
  'hopeful','angry','seeking guidance','afraid'
];

function PrayerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = (searchParams.get('path') || 'grace') as Tradition;
  const avatar = AVATARS[path] || AVATARS.grace;

  const [input,setInput] = useState('');
  const [selectedFeelings,setSelectedFeelings] = useState<string[]>([]);
  const [step,setStep] = useState<'input'|'reflecting'|'prayer'|'silence'>('input');
  const [prayer,setPrayer] = useState('');
  const [showDoorway,setShowDoorway] = useState(false);
  const [isSpeaking,setIsSpeaking] = useState(false);
  const [userName,setUserName] = useState<string|null>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const prayerRef = useRef<HTMLDivElement>(null);
  const outputTopRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{ setUserName(localStorage.getItem('pwg_user_name')); },[]);

  useEffect(()=>{
    if(step==='reflecting'){
      const id=setTimeout(()=>{
        outputTopRef.current?.scrollIntoView({behavior:'smooth',block:'start'});
      },0);
      return ()=>clearTimeout(id);
    }
  },[step]);

  useEffect(()=>{
    if(prayer && step==='prayer'){
      outputTopRef.current?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  },[prayer,step]);

  const handleSubmit=(e?:React.FormEvent)=>{
    e?.preventDefault();
    if(!input.trim() && selectedFeelings.length===0) return;
    setStep('reflecting');
  };

  const toggleFeeling=(f:string)=>{
    setSelectedFeelings(p=>p.includes(f)?p.filter(x=>x!==f):[...p,f]);
  };

  const generateFallbackPrayer=(p:string,text:string,feelings:string[])=>{
    const closings:any={
      jewish:"Shalom.",
      muslim:"Peace be with you.",
      hindu:"Namaste.",
      buddhist:"May you be at peace.",
      catholic:"Amen.",
      protestant:"Amen.",
      grace:"Peace."
    };
    return `Divine Presence, we hold these words gently: "${text}". May clarity arise where there is confusion, peace where there is unrest, and strength for the next step forward. ${closings[p]||"Amen."}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden text-gray-900">

      {/* READABILITY VEIL */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] pointer-events-none" />

      {/* SUNRISE RAYS */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-gradient-to-b from-blue-400/10 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <div ref={outputTopRef} className="h-0 scroll-mt-24" />

        <AnimatePresence mode="wait">
          {step==='input' && (
            <motion.div key="input" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0}}>
              <GuideAvatar src={avatar.imagePath} fallbackSrc={avatar.fallbackPath} alt={avatar.label} className="w-24 h-24"/>
              <textarea
                ref={inputRef}
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder="Share in your own words..."
                className="w-full h-40 bg-transparent border-none focus:ring-0 text-lg font-serif italic"
              />
              <button onClick={handleSubmit} className="px-10 py-4 bg-gray-900 text-white rounded-full">
                Form prayer
              </button>
            </motion.div>
          )}

          {step==='reflecting' && (
            <motion.div key="reflecting" initial={{opacity:0}} animate={{opacity:1}}>
              Holding this for a moment…
            </motion.div>
          )}

          {step==='prayer' && (
            <motion.div key="prayer" ref={prayerRef} initial={{opacity:0}} animate={{opacity:1}}>
              <p className="text-xl font-serif italic">{prayer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function PrayPage(){
  return(
    <Suspense fallback={<div>Entering sacred space…</div>}>
      <PrayerContent/>
    </Suspense>
  );
}
