import { Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-gold" />
            Our Mission
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl max-w-5xl text-balance text-foreground">
            To help everyone build lasting wealth by making smart saving,
            investing, and financial growth opportunities{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              accessible to all
            </span>
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed font-medium text-foreground/80">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-semibold">
                Wealthconomy is a people-first financial platform building the
                simplest and safest path for Africans to save, invest, learn and use
                their wealth to create positive change.
              </p>
              <p>
                We combine competitive savings, practical financial education, high-yielding investment
                opportunities and purpose-driven impact products so that every
                African can reach life goals, grow lasting wealth, and uplift
                others.
              </p>
              <p>
                We empower Africans to build financial resilience and generational
                wealth through secure, intelligent, and inclusive products that
                create measurable impact.
              </p>
            </div>
          </div>

          {/* Right Column Image Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0 relative">
            {/* Subtle glow behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/30 blur-[100px] pointer-events-none" />
            
            <div className="space-y-4 md:space-y-6 pt-12 md:pt-20">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 shadow-2xl aspect-[4/5] group">
                <Image 
                  src="/images/about_people_app.png" 
                  alt="People working together"
                  fill
                  sizes="(max-width: 768px) 50vw, 35vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/5 shadow-2xl aspect-[4/5] group">
                <Image 
                  src="/images/about_financial_app.png" 
                  alt="Financial growth concept"
                  fill
                  sizes="(max-width: 768px) 50vw, 35vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="h-1 w-12 rounded-full bg-primary mb-3" />
                  <p className="text-sm md:text-base font-medium text-white drop-shadow-md">Next-Gen Financial Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
