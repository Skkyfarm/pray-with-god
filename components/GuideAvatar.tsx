'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

interface GuideAvatarProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

export default function GuideAvatar({ src, fallbackSrc, alt, className = "" }: GuideAvatarProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isFinalFallback, setIsFinalFallback] = useState(false);

  const handleError = () => {
    if (currentSrc === src && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setIsFinalFallback(true);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Soft Glow */}
      <div className="absolute -inset-2 bg-orange-500/10 blur-2xl rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Frame Container */}
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 glass-panel bg-white/5">
        {!isFinalFallback ? (
          <Image
            src={currentSrc}
            alt={alt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            onError={handleError}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-black/20">
            <User className="w-1/2 h-1/2" />
          </div>
        )}
        
        {/* Sunrise Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)] pointer-events-none" />
      </div>
    </div>
  );
}
