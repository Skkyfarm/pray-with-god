export default function SunriseBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-140px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute right-[8%] top-[18%] h-[260px] w-[260px] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute left-[6%] top-[36%] h-[220px] w-[220px] rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),transparent_55%)]" />
    </div>
  );
}