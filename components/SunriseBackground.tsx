export default function SunriseBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      {/* Base sky: cool at top, warm at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-slate-50 to-amber-100" />

      {/* Soft upper-sky cool atmosphere */}
      <div className="absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-sky-300/35 via-sky-100/12 to-transparent" />

      {/* Main sunrise glow from below */}
      <div className="absolute left-1/2 bottom-[-180px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-amber-200/60 blur-3xl" />

      {/* Warm horizon band */}
      <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-orange-200/40 via-amber-100/18 to-transparent" />

      {/* Gentle dawn tint */}
      <div className="absolute left-[8%] top-[34%] h-[240px] w-[240px] rounded-full bg-rose-200/22 blur-3xl" />

      {/* Cool sky accent */}
      <div className="absolute right-[10%] top-[12%] h-[260px] w-[260px] rounded-full bg-sky-200/30 blur-3xl" />

      {/* Overall sunrise wash rising from bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.78)_0%,rgba(254,243,199,0.42)_22%,rgba(253,186,116,0.18)_38%,transparent_64%)]" />
    </div>
  );
}