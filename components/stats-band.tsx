"use client";

import { useEffect, useState, useRef } from "react";
import { ShieldCheck, Users, TrendingUp, Coins } from "lucide-react";

const stats = [
  { icon: Coins, value: 2.4, suffix: "B+", label: "Saved by members" },
  { icon: Users, value: 38000, suffix: "+", label: "Active savers" },
  { icon: TrendingUp, value: 0, suffix: "", label: "Missed group payouts" },
  { icon: ShieldCheck, value: "CBN", suffix: "", label: "Aligned & compliant" },
];

function CountUp({ end, suffix }: { end: number | string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || typeof end !== "number") return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const update = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [inView, end]);

  return (
    <div ref={ref} className="font-display text-3xl font-bold tracking-tight md:text-4xl tabular-nums">
      {typeof end === "number" 
        ? (end < 10 ? count.toFixed(1) : count.toLocaleString()) 
        : end}
      {suffix}
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="relative border-y border-border/40 bg-surface-soft/40 py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,oklch(0.42_0.06_195_/_0.03),transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 gap-x-8 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="relative flex flex-col items-center text-center group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-soft ring-1 ring-border transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-teal group-hover:ring-primary/40">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <CountUp end={s.value} suffix={s.suffix} />
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">{s.label}</div>
            
            {/* Divider for desktop */}
            {i < stats.length - 1 && (
              <div className="absolute right-[-1rem] top-1/2 hidden h-12 w-[1px] -translate-y-1/2 bg-border/40 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
