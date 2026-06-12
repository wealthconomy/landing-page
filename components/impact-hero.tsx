"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function ImpactHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div ref={containerRef} className="absolute inset-[-10%] h-[120%] w-[120%]">
          <Image
            src="/images/impact-hero.png"
            alt="WealthPact Community Impact"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/20 to-transparent md:w-2/3" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            WealthPact Initiative
          </div>
          
          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Wealth with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Purpose.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We believe that true wealth is measured by the difference we make. Through WealthPact, we channel your growth into meaningful community initiatives across Africa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
             <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:shadow-[0_0_60px_rgba(20,184,166,0.5)]">
               <span className="relative z-10 flex items-center gap-2">
                 Start Impact Saving
               </span>
               <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 transition-opacity group-hover:opacity-100" />
             </button>
             <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
               Donate Now
             </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
}
