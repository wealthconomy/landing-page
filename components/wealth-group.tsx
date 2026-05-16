"use client";

import { useEffect, useRef, useState } from "react";
import { Users, ShieldCheck, Sparkles, Bell, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import cinematic assets
import scene1 from "@/assets/wealthgroup/scene-1.png";
import scene2 from "@/assets/wealthgroup/scene-2.png";
import scene3 from "@/assets/wealthgroup/scene-3.png";
import scene4 from "@/assets/wealthgroup/scene-4.png";
import scene5 from "@/assets/wealthgroup/scene-5.png";

type Slide = {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
  alignment: "left" | "right";
};

const slides: Slide[] = [
  {
    id: "culture",
    label: "Built on Culture",
    title: "Traditional saving culture, redesigned.",
    body: "We've digitized the heart of communal saving — bringing transparency and accountability to the traditions we've always trusted.",
    image: scene1.src,
    alignment: "right",
  },
  {
    id: "flex",
    label: "Flexible Contribution",
    title: "The freedom to grow at your own pace.",
    body: "Join groups that move with your rhythm. No rigid schedules, just consistent progress toward a shared vision.",
    image: scene2.src,
    alignment: "left",
  },
  {
    id: "queue",
    label: "Transparent Payouts",
    title: "Total clarity. Structured trust.",
    body: "Everyone sees the cycle. Everyone knows their turn. A perfectly balanced system where accountability is built-in.",
    image: scene3.src,
    alignment: "left",
  },
  {
    id: "shield",
    label: "Automated Accountability",
    title: "Stability, powered by quiet intelligence.",
    body: "Our system monitors every contribution, protecting the group's health so you can focus on the goal.",
    image: scene4.src,
    alignment: "right",
  },
  {
    id: "impact",
    label: "Real Wealth Outcomes",
    title: "This is what disciplined saving unlocks.",
    body: "From business launches to home ownership — transform small contributions into life-changing milestones.",
    image: scene5.src,
    alignment: "right",
  },
];

export function WealthGroupSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalHeight = containerRef.current.offsetHeight - vh;

      const scrolled = Math.min(Math.max(-rect.top, 0), totalHeight);
      const p =
        totalHeight > 0 ? (scrolled / totalHeight) * (slides.length - 1) : 0;
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeIdx = Math.min(slides.length - 1, Math.round(progress));

  return (
    <section id="wealthgroup" className="relative bg-background font-display">
      {/* Intro Header */}
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-primary">
            The Movement
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            WealthGroup — <span className="text-gold">digitized Ajo.</span>
          </h2>
          <p className="mt-4 font-display text-lg text-muted-foreground max-w-lg mx-auto">
            Experience the future of communal saving. Structured, transparent,
            and entirely automated.
          </p>
        </div>
      </div>

      {/* Cinematic Full Screen Storytelling */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${slides.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          {/* Cinematic Background System */}
          <div className="absolute inset-0">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  i === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0",
                )}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
              </div>
            ))}
          </div>

          {/* Scoped Content Overlay */}
          <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 md:px-12">
            {/* Top Left Label */}
            <div className="absolute top-8 left-6 md:left-12 lg:top-24">
              {slides.map((slide, i) => (
                <div
                  key={`label-${slide.id}`}
                  className={cn(
                    "absolute top-0 left-0 transition-opacity duration-500 ease-in-out whitespace-nowrap",
                    i === activeIdx ? "opacity-100" : "opacity-0",
                  )}
                >
                  <span className="font-display text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-gold">
                    {slide.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Middle Content */}
            <div className="relative h-full w-full">
              {slides.map((slide, i) => (
                <div
                  key={slide.id}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out w-full max-w-full md:max-w-md lg:max-w-xl",
                    slide.alignment === "right"
                      ? "md:right-6 lg:right-12 text-left"
                      : "md:left-6 lg:left-12 text-left",
                    i === activeIdx
                      ? "opacity-100 translate-y-[-50%]"
                      : "opacity-0 translate-y-[calc(-50%+20px)] pointer-events-none",
                  )}
                >
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                    {slide.title}
                  </h3>
                  <p className="mt-6 font-display text-base sm:text-lg text-white/80 leading-relaxed font-medium max-w-lg">
                    {slide.body}
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-2 text-gold font-semibold hover:text-white transition-colors"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}

              {/* Floating UI Overlay System */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <SceneOverlays activeIdx={activeIdx} />
              </div>
            </div>

            {/* Clean Progress Indicator */}
            <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 transition-all duration-500 rounded-full",
                    i === activeIdx ? "w-8 bg-gold" : "w-2 bg-white/40",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-12" />
    </section>
  );
}

function SceneOverlays({ activeIdx }: { activeIdx: number }) {
  return (
    <div className="relative w-full h-full">
      {/* Scene 1 — Overlay Left */}
      <FloatingOverlay
        active={activeIdx === 0}
        position="top-1/3 left-12"
        delay={300}
      >
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl shadow-2xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <Bell className="h-5 w-5" />
          </div>
          <div className="text-left font-display">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold">
              Culture
            </p>
            <p className="text-sm font-semibold text-white">
              Tunde contributed ₦50k
            </p>
          </div>
        </div>
      </FloatingOverlay>

      {/* Scene 2 — Overlay Right */}
      <FloatingOverlay
        active={activeIdx === 1}
        position="top-1/3 right-12"
        delay={300}
      >
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl shadow-2xl min-w-[320px] font-display">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-4">
            Savings Progress
          </p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-display text-4xl font-bold text-white">
              ₦245,000
            </span>
            <span className="text-sm text-white/50">/ target</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden mt-4">
            <div className="h-full bg-gold w-[68%]" />
          </div>
          <p className="mt-4 text-xs font-medium text-white/60">
            6 members active
          </p>
        </div>
      </FloatingOverlay>

      {/* Scene 3 — Overlay Right */}
      <FloatingOverlay
        active={activeIdx === 2}
        position="bottom-1/4 right-12"
        delay={300}
      >
        <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl shadow-2xl min-w-[300px] font-display">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-5">
            Payout Queue
          </p>
          <div className="space-y-4 text-left">
            {[
              { name: "Musa", status: "Paid", accent: "text-emerald-400" },
              { name: "Amaka", status: "Next", accent: "text-gold" },
              { name: "Tunde", status: "In 30d", accent: "text-white/40" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm font-semibold text-white">
                  {item.name}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    item.accent,
                  )}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FloatingOverlay>

      {/* Scene 4 — Overlay Left */}
      <FloatingOverlay
        active={activeIdx === 3}
        position="bottom-1/3 left-12"
        delay={300}
      >
        <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-primary/40 backdrop-blur-xl p-5 shadow-2xl">
          <ShieldCheck className="h-8 w-8 text-emerald-400" />
          <div className="text-left font-display">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white">
              Protection Active
            </p>
            <p className="text-xs font-medium text-white/70">
              Monitoring health
            </p>
          </div>
        </div>
      </FloatingOverlay>

      {/* Scene 5 — Overlay Left */}
      <FloatingOverlay
        active={activeIdx === 4}
        position="top-1/4 left-12"
        delay={300}
      >
        <div className="rounded-3xl bg-gradient-to-br from-gold to-amber-500 p-8 text-left shadow-2xl min-w-[280px]">
          <Sparkles className="h-8 w-8 text-primary mb-6" />
          <p className="font-display text-[11px] font-bold uppercase tracking-widest text-primary/60">
            Milestone
          </p>
          <h4 className="font-display text-2xl font-bold text-primary mt-2 leading-tight">
            Your apartment keys are ready.
          </h4>
          <p className="font-display mt-4 text-sm font-medium text-primary/70">
            Building legacy together.
          </p>
        </div>
      </FloatingOverlay>
    </div>
  );
}

function FloatingOverlay({
  active,
  position,
  delay,
  children,
}: {
  active: boolean;
  position: string;
  delay: number;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => setMounted(true), delay);
      return () => clearTimeout(timer);
    } else {
      setMounted(false);
    }
  }, [active, delay]);

  return (
    <div
      className={cn(
        "absolute transition-all duration-700 ease-out",
        position,
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      )}
    >
      {children}
    </div>
  );
}

// Add global styles for any needed animations if not already present
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(style);
}
