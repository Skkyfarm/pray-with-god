import React from 'react';
import { AvatarMetadata } from '@/lib/avatars';

interface AvatarHeroProps {
  avatar: AvatarMetadata;
  size?: 'sm' | 'lg';
}

const AvatarHero: React.FC<AvatarHeroProps> = ({ avatar, size = 'lg' }) => {
  const sizeClasses = size === 'lg' ? 'w-64 h-64' : 'w-32 h-32';
  
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative animate-float">
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl glow-soft" />
        
        {/* Avatar Container */}
        <div className={`${sizeClasses} rounded-full overflow-hidden border border-white/10 relative z-10 glass-panel flex items-center justify-center`}>
           {/* Placeholder UI since local assets aren't uploaded yet */}
           <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
             <div className="text-white/10 text-6xl font-serif italic select-none">
               {avatar.name[0]}
             </div>
           </div>
           {/* In production, we would use <Image src={avatar.imagePath} ... /> here */}
        </div>
        
        {/* Decorative Ring */}
        <div className="absolute -inset-2 rounded-full border border-white/5 z-0" />
      </div>
      
      <div className="text-center z-20">
        <h2 className="text-2xl font-serif italic text-spiritual-gold tracking-wide drop-shadow-sm">
          {avatar.label}
        </h2>
        <div className="h-px w-12 bg-spiritual-gold/30 mx-auto my-2" />
        <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">
          {avatar.guidance}
        </p>
      </div>
    </div>
  );
};

export default AvatarHero;
