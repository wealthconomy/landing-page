import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-gold" />
          Our Mission
        </div>
        
        <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
          Building the infrastructure for{" "}
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            disciplined wealth.
          </span>
        </h1>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Wealth isn't just about making money; it's about keeping it, growing it, and passing it on. 
          We are redesigning traditional saving culture into a structured, transparent, and automated 
          ecosystem for the modern professional.
        </p>
      </div>
    </section>
  );
}
