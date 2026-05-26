"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Lock, Users, Target, Zap, Heart, Repeat, ArrowUpRight, ArrowRight, Check, Pause, Play, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Product = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  rate: string;
  rateNum: number;
  bestFor: string;
  short: string;
  how: string;
  features: string[];
  accent: string;
};

const products: Product[] = [
  { id: "wealthflex", icon: Zap, name: "WealthFlex", tagline: "Smart Flexible Savings", rate: "5%", rateNum: 5, bestFor: "The Cautious Saver", short: "Prepare for emergencies through flexible savings", how: "A high-interest wallet — earn while you wait. Withdraw any time penalty-free, whenever life happens.", features: ["Instant withdrawals", "7 free withdrawals / month", "Interest accrues daily"], accent: "flex" },
  { id: "wealthfix", icon: Lock, name: "WealthFix", tagline: "The Discipline Vault", rate: "25%", rateNum: 25, bestFor: "The Impulsive Saver", short: "Stay disciplined and fix your money or savings for guaranteed returns.", how: "Lock a lump sum for 3, 6, or 12 months. Because it can't be touched until maturity, you earn our highest individual rate.", features: ["Fixed terms: 3 / 6 / 12 months", "Highest yield in the ecosystem", "Zero-temptation withdrawal lock"], accent: "fix" },
  { id: "wealthgoal", icon: Target, name: "WealthGoal", tagline: "Purpose-Driven Savings", rate: "20%", rateNum: 20, bestFor: "The Big-Ticket Planner", short: "Got a goal? Create a targeted savings plan and save manually or trigger auto-debit for it.", how: "Pick a category, set a target and a deadline. Track real-time progress with a visual bar that shows exactly how close you are to smashing it.", features: ["Purpose-tagged sub-accounts", "Visual progress milestones", "Smart deadline reminders"], accent: "goal" },
  { id: "wealthfam", icon: Heart, name: "WealthFam", tagline: "Legacy Foundation", rate: "14%", rateNum: 14, bestFor: "The Legacy Builder", short: "create savings plans for family and friends, including spouses and kids.", how: "A dedicated portfolio for family-centric needs — school fees, a spouse's venture, the family home. Separates Family Wealth from Personal Wealth.", features: ["Shared family vault", "Dedicated legacy planning", "Multi-beneficiary support"], accent: "fam" },
  { id: "wealthflow", icon: Repeat, name: "WealthFlow", tagline: "Automated Cycle", rate: "17%", rateNum: 17, bestFor: "The Busy Professional", short: "Set your savings schedule, automate the flow, accumulate your savings.", how: "Set a rule like 'save ₦2,000 every day' and forget it. Money flows automatically from your bank into Wealthconomy, on your schedule.", features: ["Daily / weekly / monthly rules", "Pay-yourself-first logic", "Pause or adjust any time"], accent: "flow" },
  { id: "wealthgroup", icon: Users, name: "WealthGroup", tagline: "Digital Ajo / Esusu", rate: "30%", rateNum: 30, bestFor: "The Social Saver", short: "Save together as a group. Friends, staff, cooperatives use this for secure and transparent group savings.", how: "Form a group with friends, family or colleagues. Choose Rotational (take turns receiving the pot) or Fixed (save together toward one goal).", features: ["Rotational & fixed contribution modes", "Transparent payout schedule", "Automatic dispute resolution"], accent: "group" },
];

const accentMap: Record<string, { tint: string; iconBg: string; ring: string; dot: string; glow: string; chipActive: string }> = {
  flex: { 
    tint: "bg-[#FFF0EF]", 
    iconBg: "bg-[#F443361A] text-[#F44336]", 
    ring: "ring-[#F443364D]", 
    dot: "bg-[#F44336]", 
    glow: "bg-[#F443361A]", 
    chipActive: "border-[#F44336] bg-[#F44336] text-white" 
  },
  fix: { 
    tint: "bg-[#FAF2DF]", 
    iconBg: "bg-[#F6AD0C1A] text-[#F6AD0C]", 
    ring: "ring-[#F6AD0C4D]", 
    dot: "bg-[#F6AD0C]", 
    glow: "bg-[#F6AD0C1A]", 
    chipActive: "border-[#F6AD0C] bg-[#F6AD0C] text-white" 
  },
  goal: { 
    tint: "bg-[#F8E5EE]", 
    iconBg: "bg-[#F3007A1A] text-[#F3007A]", 
    ring: "ring-[#F3007A4D]", 
    dot: "bg-[#F3007A]", 
    glow: "bg-[#F3007A1A]", 
    chipActive: "border-[#F3007A] bg-[#F3007A] text-white" 
  },
  fam: { 
    tint: "bg-[#F1E7FF]", 
    iconBg: "bg-[#8A38F51A] text-[#8A38F5]", 
    ring: "ring-[#8A38F54D]", 
    dot: "bg-[#8A38F5]", 
    glow: "bg-[#8A38F51A]", 
    chipActive: "border-[#8A38F5] bg-[#8A38F5] text-white" 
  },
  flow: { 
    tint: "bg-[#C2E4FF]", 
    iconBg: "bg-[#007EE01A] text-[#007EE0]", 
    ring: "ring-[#007EE04D]", 
    dot: "bg-[#007EE0]", 
    glow: "bg-[#007EE01A]", 
    chipActive: "border-[#007EE0] bg-[#007EE0] text-white" 
  },
  group: { 
    tint: "bg-[#FFFFFF]", 
    iconBg: "bg-[#CDCDCD1A] text-[#CDCDCD]", 
    ring: "ring-[#CDCDCD4D]", 
    dot: "bg-[#CDCDCD]", 
    glow: "bg-[#CDCDCD1A]", 
    chipActive: "border-[#CDCDCD] bg-[#CDCDCD] text-white" 
  },
};

const AUTOPLAY_MS = 5500;

function useCountUp(target: number, deps: unknown[]) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 700;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return val;
}

export function PortfolioGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const active = products[activeIdx];
  const a = accentMap[active.accent];
  const counted = useCountUp(active.rateNum, [activeIdx]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (paused || hovered || !inView) return;
    const t = setTimeout(() => setActiveIdx((i) => (i + 1) % products.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [activeIdx, paused, hovered, inView]);

  const playing = !paused && !hovered && inView;

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="bg-background py-24 lg:py-32"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-primary">A Menu of Financial Habits</div>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            How would you want to Save?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Explore diverse savings options to meet your needs
          </p>
        </div>

        {/* Chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {products.map((p, i) => {
            const isActive = i === activeIdx;
            const pa = accentMap[p.accent];
            return (
              <button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? cn(pa.chipActive, "shadow-soft scale-105")
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground hover:scale-105",
                )}
              >
                {isActive && <span className={cn("absolute inset-0 -z-0 portfolio-pulse-ring rounded-full", pa.dot, "opacity-30")} />}
                <p.icon className={cn("h-3.5 w-3.5 transition-transform", isActive && "rotate-12")} />
                <span className="relative z-10">{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Auto-play progress */}
        <div className="mx-auto mt-6 flex max-w-md items-center gap-3">
          <button
            onClick={() => setPaused((p) => !p)}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted"
            aria-label={paused ? "Play" : "Pause"}
          >
            {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
          </button>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              key={`${activeIdx}-${playing}`}
              className={cn("absolute inset-y-0 left-0 rounded-full", a.dot, playing && "portfolio-progress-bar")}
              style={{ "--portfolio-duration": `${AUTOPLAY_MS}ms`, width: playing ? undefined : "0%" } as React.CSSProperties}
            />
          </div>
          <div className="text-xs tabular-nums text-muted-foreground">
            {String(activeIdx + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </div>
        </div>

        {/* Showcase */}
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Detail */}
          <div
            key={active.id}
            className={cn(
              "portfolio-detail-enter relative overflow-hidden rounded-3xl border border-border p-8 md:p-10 lg:col-span-3",
              a.tint,
            )}
          >
            {/* animated blobs */}
            <div className={cn("portfolio-blob absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl", a.glow)} />
            <div className={cn("portfolio-blob absolute -bottom-24 -left-16 h-64 w-64 rounded-full blur-3xl opacity-60", a.glow)} style={{ animationDelay: "-5s" }} />

            <div className="relative flex flex-col gap-8">
              <div className="flex items-start justify-between gap-4">
                <div className={cn("portfolio-icon-pop flex h-14 w-14 items-center justify-center rounded-2xl", a.iconBg)}>
                  <active.icon className="h-6 w-6" />
                </div>
                <div className="portfolio-shimmer relative flex items-center gap-2 overflow-hidden rounded-full bg-white/80 px-4 py-2 backdrop-blur">
                  <span className="font-display text-2xl font-semibold leading-none text-gold tabular-nums">{counted}%</span>
                  <span className="text-xs font-medium text-muted-foreground">p.a.</span>
                </div>
              </div>

              <div className="portfolio-stagger" style={{ animationDelay: "0.05s" }}>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary/80">{active.tagline}</div>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">{active.name}</h3>
                <p className="mt-3 text-lg text-foreground/80">{active.short}</p>
              </div>

              <div className="portfolio-stagger rounded-2xl bg-white/70 p-5 backdrop-blur" style={{ animationDelay: "0.15s" }}>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How it works</div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{active.how}</p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {active.features.map((f, i) => (
                  <div
                    key={f}
                    className="portfolio-stagger flex items-start gap-2 text-sm text-foreground/85"
                    style={{ animationDelay: `${0.25 + i * 0.08}s` }}
                  >
                    <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white", a.dot)}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              <div className="portfolio-stagger flex items-center justify-between border-t border-foreground/10 pt-5" style={{ animationDelay: "0.5s" }}>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Best for</div>
                  <div className="font-display text-base font-semibold">{active.bestFor}</div>
                </div>
                <Link
                  href={`/portfolios#${active.id.replace("wealth", "")}`}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:gap-2.5 hover:scale-105"
                >
                  <span className="text-sm font-medium transition-colors group-hover:text-primary">
                    Read More
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </div>
            </div>
          </div>

          {/* Side list */}
          <div className="grid gap-3 lg:col-span-2">
            {products.map((p, i) => {
              const isActive = i === activeIdx;
              const pa = accentMap[p.accent];
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "group relative flex items-center gap-4 overflow-hidden rounded-2xl border bg-background p-4 text-left transition-all duration-300",
                    isActive
                      ? cn("-translate-y-0.5 border-transparent shadow-soft ring-2", pa.ring)
                      : "border-border hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft",
                  )}
                >
                  {isActive && (
                    <span className={cn("absolute left-0 top-0 h-full w-1", pa.dot)} />
                  )}
                  <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-500", pa.iconBg, isActive && "rotate-6 scale-110")}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-display text-base font-semibold text-foreground">{p.name}</div>
                      <div className="font-display text-sm font-semibold text-gold">{p.rate}</div>
                    </div>
                    <div className="truncate text-xs text-muted-foreground">{p.tagline} · {p.bestFor}</div>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "h-4 w-4 shrink-0 transition-all duration-300",
                      isActive ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Global CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://forms.gle/M4NrF9w9HSny4YR49"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-primary/90 shadow-glow-teal"
          >
            Explore a Wealth Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

