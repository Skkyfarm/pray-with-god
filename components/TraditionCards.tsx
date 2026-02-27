'use client';

import React from 'react';
import { Tradition } from '@/lib/avatars';
import { Cross, Star, Moon } from 'lucide-react';

interface TraditionCardsProps {
  selected: Tradition | null;
  onSelect: (tradition: Tradition) => void;
}

const TraditionCards: React.FC<TraditionCardsProps> = ({ selected, onSelect }) => {
  const traditions: { id: Tradition; label: string; icon: React.ReactNode }[] = [
    { id: 'christian', label: 'Christian', icon: <Cross className="w-5 h-5" /> },
    { id: 'jewish', label: 'Jewish', icon: <Star className="w-5 h-5" /> },
    { id: 'muslim', label: 'Muslim', icon: <Moon className="w-5 h-5" /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {traditions.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
            selected === t.id
              ? 'bg-white/10 border-spiritual-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.2)]'
              : 'bg-white/5 border-white/10 text-black/60 hover:bg-white/10 hover:border-white/20'
          }`}
        >
          <div className={`mb-2 ${selected === t.id ? 'text-spiritual-gold' : ''}`}>
            {t.icon}
          </div>
          <span className="text-[10px] uppercase tracking-widest font-medium">{t.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TraditionCards;
