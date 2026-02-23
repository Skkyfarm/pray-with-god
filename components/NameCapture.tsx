'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NameCaptureProps {
  onComplete: (name: string | null) => void;
}

export default function NameCapture({ onComplete }: NameCaptureProps) {
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('pwg_user_name');
    const skipped = localStorage.getItem('pwg_name_skipped');
    
    if (!storedName && !skipped) {
      setIsVisible(true);
    }
  }, []);

  const handleContinue = () => {
    if (name.trim()) {
      localStorage.setItem('pwg_user_name', name.trim());
      setIsVisible(false);
      onComplete(name.trim());
    }
  };

  const handleSkip = () => {
    localStorage.setItem('pwg_name_skipped', 'true');
    setIsVisible(false);
    onComplete(null);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-sm glass-panel p-6 rounded-2xl border-white/10 mb-12 text-center space-y-4"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Grace asks</p>
        <p className="text-lg font-serif italic text-white/80">"What name should I call you?"</p>
        
        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name..."
            className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 transition-colors text-center"
            onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
          />
          
          <div className="flex gap-3">
            <button
              onClick={handleSkip}
              className="flex-1 text-[10px] uppercase tracking-widest text-white/20 hover:text-white/40 transition-colors py-2"
            >
              Skip
            </button>
            <button
              onClick={handleContinue}
              disabled={!name.trim()}
              className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-20 text-[10px] uppercase tracking-widest text-white rounded-full py-2 transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
