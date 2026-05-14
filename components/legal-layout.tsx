import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function LegalLayout({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: ReactNode }) {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] portfolio-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] portfolio-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        {/* Header Section */}
        <div className="mb-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            Legal Infrastructure
          </div>
          <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl lg:text-8xl text-foreground">
            {title}
          </h1>
          <p className="mt-8 text-base font-medium text-muted-foreground uppercase tracking-widest">
            Last Updated · {lastUpdated}
          </p>
        </div>
        
        {/* Content Section with Glassmorphism */}
        <div className="relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-gold/5 blur-xl" />
          <div className="relative rounded-[2rem] border border-border bg-background/60 p-8 md:p-16 shadow-glow-teal backdrop-blur-3xl">
             <div className="prose prose-invert prose-satoshi max-w-none 
               prose-h2:font-display prose-h2:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:text-foreground prose-h2:mt-16 prose-h2:mb-8 prose-h2:flex prose-h2:items-center prose-h2:gap-4
               prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed 
               prose-li:text-lg prose-li:text-muted-foreground prose-li:mb-2
               prose-strong:text-foreground prose-strong:font-bold
               prose-ul:list-none prose-ul:pl-0">
              {children}
            </div>
          </div>
        </div>

        {/* Support CTA */}
        <div className="mt-20 text-center animate-in fade-in duration-1000 delay-700">
          <p className="text-muted-foreground">
            Questions about our terms? <a href="/contact" className="font-bold text-primary hover:text-primary-glow underline-offset-4 hover:underline transition-all">Reach out to our legal team</a>
          </p>
        </div>
      </div>
    </main>
  );
}
