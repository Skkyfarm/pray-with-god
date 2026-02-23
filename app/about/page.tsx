import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-serif italic mb-6">About PrayWithGod.ai</h1>
      <p className="max-w-2xl text-white/60 leading-relaxed mb-12">
        We provide a sacred digital space for prayer and reflection across all traditions. 
        Our mission is to hold space for every soul seeking connection.
      </p>
      <Link href="/" className="text-xs uppercase tracking-widest border border-white/10 px-8 py-3 rounded-full hover:bg-white/5 transition-all">
        Return Home
      </Link>
    </div>
  );
}
