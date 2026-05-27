"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, TrendingUp, Wallet, Target, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const allocations = [
  { label: "WealthFix", pct: 40, color: "bg-primary", text: "text-primary" },
  { label: "WealthGoal", pct: 25, color: "bg-gold", text: "text-gold" },
  { label: "WealthFlex", pct: 20, color: "bg-emerald-500", text: "text-emerald-500" },
  { label: "WealthFam", pct: 15, color: "bg-rose-400", text: "text-rose-400" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.25 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export function DisciplineEngine() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-background py-14 lg:py-20">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px] portfolio-blob" />
        <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[120px] portfolio-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]" />
      </div>

      <div ref={ref} className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left: Copy */}
        <div className={cn("space-y-7", inView && "portfolio-detail-enter")}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" /> The Discipline Engine
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Willpower is limited.
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Our system isn't.</span>
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Wealthconomy removes the burden of "trying to save." Real-time visual progress and automated rules mean you don't just see numbers. You see your dreams getting closer every single day.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Sparkles, title: "Smart Income Splitting", body: "Auto-allocate every paycheck across your portfolio." },
              { icon: TrendingUp, title: "Trajectory Forecasting", body: "See exactly when you'll hit each goal." },
            ].map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-surface-soft/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-teal"
                style={inView ? { animation: `portfolio-slide-up 0.55s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.1}s both` } : undefined}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>

          <a href="#portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-glow">
            Explore the engine <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right: Animated mock UI */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-gold/20 blur-2xl" />

          {/* Main card */}
          <div
            className={cn(
              "relative rounded-3xl border border-border bg-surface-soft/80 p-6 shadow-glow-teal backdrop-blur-xl",
              inView && "portfolio-detail-enter",
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Paycheck split · Nov</div>
                <div className="mt-1 font-display text-3xl font-bold">₦450,000</div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                <Wallet className="h-5 w-5" />
              </div>
            </div>

            {/* Stacked allocation bar */}
            <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full bg-border">
              {allocations.map((a, i) => (
                <div
                  key={a.label}
                  className={cn(a.color, "h-full origin-left")}
                  style={
                    inView
                      ? { width: `${a.pct}%`, animation: `portfolio-progress 0.9s cubic-bezier(0.22,1,0.36,1) ${0.3 + i * 0.12}s both` }
                      : { width: 0 }
                  }
                />
              ))}
            </div>

            {/* Allocation legend */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {allocations.map((a, i) => (
                <div
                  key={a.label}
                  className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-3 py-2 transition-all hover:border-primary/30 hover:shadow-soft"
                  style={inView ? { animation: `portfolio-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) ${0.5 + i * 0.08}s both` } : undefined}
                >
                  <div className="flex items-center gap-2">
                    <span className={cn("h-2.5 w-2.5 rounded-full", a.color)} />
                    <span className="text-xs font-medium text-foreground">{a.label}</span>
                  </div>
                  <span className={cn("text-xs font-semibold", a.text)}>{a.pct}%</span>
                </div>
              ))}
            </div>

            {/* Forecast mini-chart */}
            <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold text-foreground">Goal trajectory</span>
                </div>
                <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">on track</span>
              </div>
              <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="mt-3 h-14 w-full text-primary">
                <defs>
                  <linearGradient id="dline" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,55 Q40,50 60,42 T110,28 T160,15 T200,5 L200,60 L0,60 Z"
                  fill="url(#dline)"
                  className={inView ? "[stroke-dasharray:600] [stroke-dashoffset:0] animate-[portfolio-slide-up_0.9s_ease-out_0.6s_both]" : ""}
                />
                <path
                  d="M0,55 Q40,50 60,42 T110,28 T160,15 T200,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="5" r="4" fill="currentColor" className="portfolio-pulse-ring" />
              </svg>
              <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Today</span>
                <span className="font-semibold text-foreground">Goal hit · Mar 2027</span>
              </div>
            </div>
          </div>

          {/* Floating notification card */}
          <div
            className="animate-card-drift absolute -right-4 top-8 hidden w-60 rounded-2xl border border-border bg-background/90 p-4 shadow-soft backdrop-blur-xl md:block"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="text-xs font-semibold">Auto-split complete</div>
            </div>
            <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
              ₦180,000 routed to WealthFix. You're <span className="font-semibold text-emerald-600">3 weeks ahead</span> of schedule.
            </p>
          </div>

          {/* Floating yield card */}
          <div
            className="animate-card-drift absolute -left-6 bottom-10 hidden w-52 rounded-2xl border border-border bg-background/90 p-4 shadow-soft backdrop-blur-xl md:block"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Daily yield</div>
            <div className="mt-1 flex items-end justify-between">
              <span className="font-display text-2xl font-bold text-foreground">+₦2,140</span>
              <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[11px] font-semibold text-primary">+1.8%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

