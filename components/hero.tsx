"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, Lock, Users, Repeat, GraduationCap, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import phoneHome from "@/assets/phone-home.png";
import phonePortfolio from "@/assets/phone-portfolio.png";
import phoneWinup from "@/assets/phone-winup.png";
import heroPeople from "@/assets/hero-people.png";

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
  label,
  value,
  subtext,
  icon: Icon,
  trend,
  className = "",
  delay = "0s",
  scrollY = 0,
  side = "left",
}: {
  label: string;
  value: string;
  subtext: string;
  icon: any;
  trend?: string;
  className?: string;
  delay?: string;
  scrollY?: number;
  side?: "left" | "right";
}) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let rafId: number;
    const startTime = Math.random() * 100;
    const update = (t: number) => {
      setTime((t / 1000) + startTime);
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Base float physics
  const floatY = Math.sin(time * 0.8) * 8;
  const floatX = Math.cos(time * 0.6) * 4;

  // Absorption Physics
  // We want the cards to accelerate toward the center-bottom of the phone
  const scrollThreshold = 800;
  const progress = Math.max(0, Math.min(1, scrollY / scrollThreshold));
  
  // Power curve for "pull" intensity (quadratic for acceleration)
  const pull = Math.pow(progress, 2);
  
  // Horizontal convergence toward center (moderate drift to keep them visible on the sides)
  const convergeX = side === "left" ? pull * 180 : pull * -180;
  // Vertical suction toward the phone body (noticeable parallax)
  const suctionY = pull * 220;
  
  // Visual effects for "entering" the device (moderate scale reduction)
  const scale = 1 - (pull * 0.12);
  
  // Keep the cards 100% visible and sharp throughout the entire scroll threshold
  const blur = 0;
  const opacity = 1;

  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-white/30 hover:shadow-[0_20px_60px_-20px_rgba(255,255,255,0.2)] cursor-default ${className}`}
      style={{ 
        opacity: opacity,
        transform: `translate3d(${floatX + convergeX}px, ${floatY + suctionY}px, 0) scale(${scale})`,
        filter: `blur(${blur}px)`,
        pointerEvents: opacity < 0.2 ? 'none' : 'auto',
        willChange: 'transform, opacity, filter'
      }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{label}</span>
          {trend && (
            <span className="text-[10px] font-bold text-emerald-400">{trend}</span>
          )}
        </div>
        <div className="mt-0.5 text-base font-black tracking-tight text-white">{value}</div>
        <div className="text-[10px] font-medium text-white/70">{subtext}</div>
      </div>
    </div>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [smoothScrollY, setSmoothScrollY] = useState(0);
  const scrollYRef = useRef(0);
  const smoothScrollYRef = useRef(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    let rafId: number;
    const update = () => {
      // Faster lerp for more intentional feel
      const lerpFactor = 0.15; 
      smoothScrollYRef.current += (scrollYRef.current - smoothScrollYRef.current) * lerpFactor;
      
      if (Math.abs(scrollYRef.current - smoothScrollYRef.current) > 0.05) {
        setSmoothScrollY(smoothScrollYRef.current);
      }
      
      rafId = requestAnimationFrame(update);
    };
    
    rafId = requestAnimationFrame(update);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

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
      className="relative overflow-hidden bg-primary pb-0"
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
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]"
        />

        {/* Animated Grid Beams (Lasers) */}
        <div className="absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_100%)]">
          {/* Vertical Beams */}
          <div className="absolute left-[calc(50%-220px)] top-0 bottom-0 w-[1px]">
            <div className="w-full h-[250px] bg-gradient-to-b from-transparent via-white/30 to-transparent" style={{ animation: 'beam-vertical 5s linear infinite' }} />
          </div>
          <div className="absolute left-[calc(50%+180px)] top-0 bottom-0 w-[1px]">
            <div className="w-full h-[200px] bg-gradient-to-b from-transparent via-gold/80 to-transparent" style={{ animation: 'beam-vertical 7s linear infinite 2s' }} />
          </div>
          <div className="absolute left-[calc(50%-420px)] top-0 bottom-0 w-[1px]">
            <div className="w-full h-[300px] bg-gradient-to-b from-transparent via-emerald-400/80 to-transparent" style={{ animation: 'beam-vertical 6s linear infinite 1s' }} />
          </div>
          
          {/* Horizontal Beams */}
          <div className="absolute top-[160px] left-0 right-0 h-[1px]">
            <div className="h-full w-[350px] bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ animation: 'beam-horizontal 6s linear infinite 0.5s' }} />
          </div>
          <div className="absolute top-[360px] left-0 right-0 h-[1px]">
            <div className="h-full w-[400px] bg-gradient-to-r from-transparent via-gold/80 to-transparent" style={{ animation: 'beam-horizontal 8s linear infinite 3s' }} />
          </div>
        </div>
        
        {/* Darkening Center Gradient for extra depth */}
        <div 
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] bg-black/30 blur-[150px] rounded-full pointer-events-none" 
        />

        {/* Interactive Mouse Follower Glow */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%)`,
            opacity: isHovering ? 1 : 0
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 lg:pt-32 pb-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white shadow-soft hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-default hover:bg-white/10 w-fit">
              Trusted by 50K+ Professionals
              <span className="flex -space-x-1">
                <span className="h-4 w-4 rounded-full border border-primary bg-white" />
                <span className="h-4 w-4 rounded-full border border-primary bg-gold" />
                <span className="h-4 w-4 rounded-full border border-primary bg-emerald-400" />
              </span>
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both mt-8 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-white" style={{ animationDelay: '150ms' }}>
              Wealthconomy: Where your Money <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Grows into Wealth</span>
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both mt-6 max-w-xl text-base md:text-lg text-white/80 font-medium" style={{ animationDelay: '300ms' }}>
              Your platform to Save, Invest, Learn, Achieve your Financial goals and Impact Lives.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both mt-10 flex flex-wrap justify-center lg:justify-start gap-4" style={{ animationDelay: '450ms' }}>
              <Button 
                size="lg" 
                className="h-14 rounded-full px-8 text-base transition-transform hover:scale-105 active:scale-95 duration-200 bg-gold text-gold-foreground hover:bg-gold/90 shadow-[0_0_40px_-10px_rgba(255,207,101,0.5)]"
                asChild
              >
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                  Start your wealth journey
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 rounded-full px-8 text-base transition-transform hover:scale-105 active:scale-95 duration-200 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="https://chat.whatsapp.com/LTUgZfloaYK8KcXB2yVkdy?mode=gi_t" target="_blank" rel="noopener noreferrer">
                  Join our community
                  <Users className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-300 mt-10 lg:mt-0 lg:translate-x-8 xl:translate-x-12">
            {/* Container for premium overlapping visuals */}
            <div className="relative w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] aspect-[4/4.5] lg:aspect-[4/5] rounded-[3rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md p-3 lg:p-4 mt-8 lg:mt-0">
              {/* Main People Image */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden group">
                <img 
                  src={heroPeople.src} 
                  alt="African young persons building wealth" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80" />
              </div>
              
              {/* Floating App Mockup over the corner */}
              <div className="absolute -bottom-10 -left-2 sm:-bottom-16 sm:-left-12 lg:-bottom-24 lg:-left-28 w-[140px] sm:w-[180px] lg:w-[230px] animate-phone-b z-30">
                <PhoneFrame
                  src={phoneHome.src}
                  alt="Wealthconomy home dashboard"
                  className="w-full"
                />
                {/* Glow behind phone */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-gold/30 blur-[50px] animate-pulse" />
              </div>

              {/* Decorative elements / MiniCards positioned absolutely */}
              <div className="absolute -right-6 lg:-right-12 top-12 z-20 hidden sm:block">
                <MiniCard 
                  label="Wealth Score" 
                  value="842" 
                  subtext="Elite Status" 
                  icon={Star} 
                  trend="Top 1%"
                  className="w-48 lg:w-56" 
                  delay="0.4s" 
                  scrollY={smoothScrollY}
                  side="right"
                />
              </div>
              
              <div className="absolute -left-10 lg:-left-24 top-1/2 z-20 hidden sm:block">
                <MiniCard 
                  label="WealthFlow" 
                  value="Daily Active" 
                  subtext="₦5,000 swept today" 
                  icon={Repeat} 
                  className="w-48 lg:w-56" 
                  delay="1.2s" 
                  scrollY={smoothScrollY}
                  side="left"
                />
              </div>
            </div>

            {/* Behind glows */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
          </div>

        </div>
      </div>
    </section>
  );
}
