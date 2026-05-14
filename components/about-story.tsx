import { ShieldCheck, Target } from "lucide-react";

export function AboutStory() {
  return (
    <section className="relative bg-surface-soft/40 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Typography Story */}
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              From chaotic saving to <span className="text-gold">structured legacy.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For too long, building wealth has been a solitary, opaque journey. Traditional financial 
                systems offer generic products, while communal saving methods rely 
                heavily on blind trust and manual tracking.
              </p>
              <p>
                We realized that what modern professionals actually need isn't just another banking app—it's 
                <strong className="text-foreground"> discipline engineered into the platform itself</strong>.
              </p>
              <p>
                Wealthconomy was born from the desire to digitize accountability. By blending the best parts 
                of communal trust with military-grade automation and transparency, we've created an ecosystem 
                where your money has no choice but to grow.
              </p>
            </div>
          </div>
          
          {/* Right: Visual Element */}
          <div className="relative h-full min-h-[400px] w-full rounded-3xl border border-border bg-background/50 p-8 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none" />
            
            <div className="relative z-10 flex h-full flex-col justify-center space-y-8">
              <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-background p-5 transition-all hover:bg-surface-soft shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Built on Trust</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Every contribution, payout, and penalty is visible to the entire group. No surprises.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-background p-5 transition-all hover:bg-surface-soft shadow-sm lg:translate-x-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Engineered Discipline</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Our algorithms ensure you stay on track, turning good intentions into unbreakable habits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
