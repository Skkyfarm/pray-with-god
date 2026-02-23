'use client';

import Link from 'next/link';

export default function FooterLinkArray() {
  return (
    <footer className="w-full bg-[#6b553b] relative overflow-hidden">

      {/* Inner readability veil */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Spiritual */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-950/80">
              Spiritual
            </div>
            <ul className="space-y-2 text-[14px]">
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Daily Prayer</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Meditation</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Scripture</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Traditions</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-950/80">
              Community
            </div>
            <ul className="space-y-2 text-[14px]">
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Prayer Requests</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Testimonies</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Circles</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-950/80">
              Resources
            </div>
            <ul className="space-y-2 text-[14px]">
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Library</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Guides</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Podcasts</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Videos</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-gray-950/80">
              About
            </div>
            <ul className="space-y-2 text-[14px]">
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Our Mission</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Grace</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Privacy</Link></li>
              <li><Link className="text-gray-950/70 hover:text-gray-950" href="#">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] uppercase tracking-[0.25em] text-gray-950/60">
            PrayWithGod.ai
          </div>
          <div className="text-[12px] text-gray-950/60">
            © {new Date().getFullYear()} • Calm, respectful, non-coercive support.
          </div>
        </div>
      </div>
    </footer>
  );
}
