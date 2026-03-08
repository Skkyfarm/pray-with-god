'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NameCaptureProps {
  onComplete: (name: string | null) => void;
}

export default function NameCapture({ onComplete }: NameCaptureProps) {
  const [name, setName] = useState('');

  const handleContinue = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    localStorage.setItem('pwg_user_name', trimmed);
    localStorage.removeItem('pwg_name_skipped');
    onComplete(trimmed);
  };

  const handleSkip = () => {
    localStorage.setItem('pwg_name_skipped', 'true');
    onComplete(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full text-center space-y-4"
      >
        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full bg-white/5 border border-black/10 rounded-full px-4 py-2.5 text-sm text-black focus:outline-none focus:border-black/20 transition-colors text-center placeholder:text-black/35"
            onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
            maxLength={40}
          />

          <div className="flex gap-3">
            <button
              onClick={handleSkip}
              className="flex-1 text-[10px] uppercase tracking-widest text-black/40 hover:text-black/70 transition-colors py-2"
            >
              Skip for now
            </button>

            <button
              onClick={handleContinue}
              disabled={!name.trim()}
              className="flex-1 bg-white/10 hover:bg-white/20 disabled:opacity-20 text-[10px] uppercase tracking-widest text-black rounded-full py-2 transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
