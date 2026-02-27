import React from 'react';
import Link from 'next/link';
import { AVATARS } from '@/lib/avatars';

const GraceCard = () => {
  const grace = AVATARS.grace;

  return (
    <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-xl w-full flex flex-col space-y-8 border-white/5">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif italic text-black leading-tight">
          {grace.greeting}
        </h1>
        <p className="text-gray-400 font-light leading-relaxed">
          In this sacred digital space, we transcend boundaries to find peace. 
          Whether you seek a moment of quiet reflection or a guided prayer, 
          I am here to accompany you on your journey.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link 
          href="/prayer-request?mode=quick"
          className="flex-1 bg-white text-black px-8 py-4 rounded-full font-medium text-center hover:bg-spiritual-gold hover:text-white transition-all duration-300 uppercase tracking-widest text-xs"
        >
          Quick Prayer
        </Link>
        <Link 
          href="/prayer-request?mode=denom"
          className="flex-1 border border-black/20 text-black px-8 py-4 rounded-full font-medium text-center hover:bg-white/5 transition-all duration-300 uppercase tracking-widest text-xs"
        >
          Denominational
        </Link>
      </div>
      
      <div className="pt-6 flex items-center space-x-2 text-[10px] text-black/40 uppercase tracking-[0.2em]">
        <div className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
        <span>Grace is currently holding space</span>
      </div>
    </div>
  );
};

export default GraceCard;
