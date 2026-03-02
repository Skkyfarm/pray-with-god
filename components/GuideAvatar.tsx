'use client';

import Image from 'next/image';
import type { AvatarMetadata } from '@/lib/avatars';

type Size = 'sm' | 'md' | 'lg' | 'xl';

type GuideAvatarProps =
  | {
      // New, clean API:
      avatar: AvatarMetadata;
      size?: Size;
      className?: string;
      alt?: string; // optional override
    }
  | {
      // Backward compatible API:
      src: string;
      fallbackSrc?: string;
      alt: string;
      size?: Size;
      className?: string;
    };

const sizeToClass: Record<Size, string> = {
  sm: 'w-14 h-14',
  md: 'w-24 h-24',
  lg: 'w-28 h-28',
  xl: 'w-36 h-36',
};

export default function GuideAvatar(props: GuideAvatarProps) {
  const size = props.size ?? 'md';
  const sizeClass = sizeToClass[size];

  const src =
    'avatar' in props ? props.avatar.imagePath : props.src;

  const fallbackSrc =
    'avatar' in props ? props.avatar.fallbackPath : props.fallbackSrc;

  const alt =
    'avatar' in props
      ? props.alt ?? props.avatar.label
      : props.alt;

  const className = `${sizeClass} rounded-full overflow-hidden relative ${props.className ?? ''}`;

  // If image fails, we swap to fallback (or show a simple placeholder).
  // Note: next/image doesn't have native onError for src swap without state.
  // We'll use plain <img> inside for reliability.
  // (This avoids the “gray ovoid with X” getting stuck.)
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          if (fallbackSrc && (e.currentTarget.src.endsWith(src) || e.currentTarget.src.includes(src))) {
            e.currentTarget.src = fallbackSrc;
            return;
          }
          // last resort: hide broken img
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}
