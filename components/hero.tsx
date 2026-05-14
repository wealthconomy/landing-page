"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import phoneHome from "@/assets/phone-home.png";
import phonePortfolio from "@/assets/phone-portfolio.png";
import phoneWinup from "@/assets/phone-winup.png";

function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="relative aspect-[9/19.5] w-full rounded-[2.5rem] bg-neutral-900 p-[6px] shadow-[0_30px_70px_-20px_rgba(21,93,95,0.45)] ring-1 ring-black/10 transition-transform duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(21,93,95,0.6)] cursor-pointer">
        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
          <img src={src} alt={alt} className="h-full w-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
}

function MiniCard({
  ticker,
  company,
  className = "",
  delay = "0s",
}: {
  ticker: string;
  company: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`animate-card-drift flex items-center justify-between gap-6 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl px-5 py-3.5 shadow-soft transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-glow-teal hover:border-primary/40 cursor-pointer ${className}`}
      style={{ animationDelay: delay }}
    >
      <div>
        <div className="text-sm font-semibold text-foreground">{ticker}</div>
        <div className="text-xs text-muted-foreground">{company}</div>
      </div>
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-sm font-medium text-foreground">$124.20</span>
        <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          2.1%
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative overflow-hidden bg-background pb-0"
    >
      <style>{`
        @keyframes beam-vertical {
          0% { transform: translateY(-300px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(1000px); opacity: 0; }
        }
        @keyframes beam-horizontal {
          0% { transform: translateX(-300px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(1500px); opacity: 0; }
        }
      `}</style>

      {/* Interactive Grid & Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.06)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]"
        />

        {/* Animated Grid Beams (Lasers) */}
        <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_100%)]">
          {/* Vertical Beams */}
          <div className="absolute left-[calc(50%-220px)] top-0 bottom-0 w-[1px]">
            <div className="w-full h-[250px] bg-gradient-to-b from-transparent via-primary to-transparent" style={{ animation: 'beam-vertical 5s linear infinite' }} />
          </div>
          <div className="absolute left-[calc(50%+180px)] top-0 bottom-0 w-[1px]">
            <div className="w-full h-[200px] bg-gradient-to-b from-transparent via-gold to-transparent" style={{ animation: 'beam-vertical 7s linear infinite 2s' }} />
          </div>
          <div className="absolute left-[calc(50%-420px)] top-0 bottom-0 w-[1px]">
            <div className="w-full h-[300px] bg-gradient-to-b from-transparent via-emerald-500 to-transparent" style={{ animation: 'beam-vertical 6s linear infinite 1s' }} />
          </div>
          
          {/* Horizontal Beams */}
          <div className="absolute top-[160px] left-0 right-0 h-[1px]">
            <div className="h-full w-[350px] bg-gradient-to-r from-transparent via-primary to-transparent" style={{ animation: 'beam-horizontal 6s linear infinite 0.5s' }} />
          </div>
          <div className="absolute top-[360px] left-0 right-0 h-[1px]">
            <div className="h-full w-[400px] bg-gradient-to-r from-transparent via-gold to-transparent" style={{ animation: 'beam-horizontal 8s linear infinite 3s' }} />
          </div>
        </div>
        
        {/* Pulsating Center Glow */}
        <div 
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse pointer-events-none" 
          style={{ animationDuration: '4s' }} 
        />

        {/* Interactive Mouse Follower Glow */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(21,93,95,0.08), transparent 40%)`,
            opacity: isHovering ? 1 : 0
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 text-center lg:pt-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-foreground shadow-soft hover:shadow-glow-teal transition-all duration-500 cursor-default hover:bg-background">
          Trusted by 50K+ Professionals
          <span className="flex -space-x-1">
            <span className="h-4 w-4 rounded-full border border-background bg-primary" />
            <span className="h-4 w-4 rounded-full border border-background bg-gold" />
            <span className="h-4 w-4 rounded-full border border-background bg-emerald-500" />
          </span>
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Smart wealth management
          <br />
          for modern professionals
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Wealthconomy is your structured ecosystem for automated savings,
          financial discipline and lasting legacy — built on data, mentorship
          and culture.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="h-12 rounded-full px-6 transition-transform hover:scale-105 active:scale-95 duration-200">
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-border bg-background/50 backdrop-blur-md px-6 text-foreground hover:bg-surface-soft transition-transform hover:scale-105 active:scale-95 duration-200"
          >
            Book a demo
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Phones + floating cards */}
      <div className="relative mx-auto mt-20 max-w-[1400px] px-6 pb-24 lg:pb-32 z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
        {/* Floating ticker cards */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="pointer-events-auto">
            <MiniCard ticker="WLP" company="Wolio Inc" className="absolute left-2 top-8 w-64" delay="0s" />
            <MiniCard ticker="TWLP" company="Twolio Inc" className="absolute left-16 top-56 w-64" delay="0.8s" />
            <MiniCard ticker="GOOG" company="Alphabet Inc" className="absolute left-0 top-[26rem] w-64" delay="1.6s" />
            <MiniCard ticker="AAPL" company="Apple Inc" className="absolute right-2 top-8 w-64" delay="0.4s" />
            <MiniCard ticker="NVDA" company="Nvidia Corp" className="absolute right-16 top-56 w-64" delay="1.2s" />
            <MiniCard ticker="TSLA" company="Tesla Inc" className="absolute right-0 top-[26rem] w-64" delay="2s" />
          </div>
        </div>

        {/* Three phones */}
        <div className="relative mx-auto flex h-[600px] max-w-3xl items-end justify-center md:h-[680px]">
          {/* Glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />

          <PhoneFrame
            src={phonePortfolio.src}
            alt="Wealthconomy wealth portfolio screen"
            className="animate-phone-a absolute bottom-6 left-1/2 -translate-x-[88%] origin-bottom w-[200px] md:w-[230px]"
          />

          <PhoneFrame
            src={phoneHome.src}
            alt="Wealthconomy home dashboard"
            className="animate-phone-b relative z-10 origin-bottom w-[230px] md:w-[270px]"
          />

          <PhoneFrame
            src={phoneWinup.src}
            alt="Wealthconomy WinUp transactions"
            className="animate-phone-c absolute bottom-6 left-1/2 translate-x-[-12%] origin-bottom w-[200px] md:w-[230px]"
          />
        </div>
      </div>
    </section>
  );
}
