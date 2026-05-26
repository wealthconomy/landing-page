import { ShieldCheck, Target, Heart, BookOpen, Wallet, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutStory() {
  return (
    <div className="space-y-24 py-24 lg:space-y-32 lg:py-32 overflow-hidden">
      
      {/* What We Do Section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Core Pillars</div>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            What we do
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We combine savings, education, and social impact into one unified, structured platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Smarter Saving */}
          <div className="group rounded-3xl border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/30 hover:shadow-soft transition-all duration-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Smarter saving</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                WinUp offers interest saving plan, Halal savings plan (impact‑aligned) and Mixed savings plans with competitive rates and flexible goals so members can grow wealth and reach their financial milestones faster.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60">
              <Button asChild className="rounded-full gap-1.5 w-full">
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                  Start saving <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Financial Literacy */}
          <div className="group rounded-3xl border border-border bg-card p-8 flex flex-col justify-between hover:border-gold/30 hover:shadow-soft transition-all duration-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Financial literacy</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                WiseUp is our money school that delivers programs, courses, expert insights, interactive assessments and regular market reports, helping users make confident money decisions.
              </p>
              <p className="text-[11px] font-semibold text-gold mt-3">
                * Subscribe to WiseUp newsletters and unlock full assessment results in the app.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60">
              <Button variant="outline" asChild className="rounded-full gap-1.5 w-full">
                <a href="/learn">
                  Explore WiseUp <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Impact Initiatives */}
          <div className="group rounded-3xl border border-border bg-card p-8 flex flex-col justify-between hover:border-rose-500/30 hover:shadow-soft transition-all duration-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Impact Initiatives</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                WealthPact channels a portion of savings yield from impact savers or donations to impact or community projects such as training women, supporting youth and small businesses, and funding grassroot initiatives.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/60">
              <Button asChild className="rounded-full bg-rose-500 hover:bg-rose-600 text-white gap-1.5 w-full">
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                  Start Impact Saving <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Wealthconomy Section */}
      <section className="bg-surface-soft/40 py-24 border-y border-border relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(21,93,95,0.03),transparent_70%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Why Choose Wealthconomy?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We engineer security, transparency, and impact directly into the platform core.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Security & trust",
                body: "Your funds and transactions are protected with advanced industry standard security and compliance standards."
              },
              {
                icon: Target,
                title: "Intelligent products",
                body: "Goal-driven features and personalized insights that help you achieve your goals"
              },
              {
                icon: Heart,
                title: "Inclusive impact",
                body: "Options for Halal-compliant and impact-focused saving so your money supports results you care about."
              },
              {
                icon: BookOpen,
                title: "Expert Resources",
                body: "Access to financial literacy tools and resources."
              }
            ].map((f, i) => (
              <div key={i} className="group relative rounded-2xl border border-border bg-background p-6 hover:shadow-soft transition-all duration-300">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                  <f.icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-semibold mb-2">{f.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-[#0e4143] px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,207,101,0.25),transparent_60%)] pointer-events-none" />
          <div className="relative space-y-8">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-gold" />
              Join us
            </div>
            
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-none uppercase">
              Together we grow wealth <br /> and make a difference
            </h3>
            
            <p className="mx-auto max-w-xl text-white/75 text-sm md:text-base leading-relaxed">
              Start your wealth journey today; Save with WinUp, Learn with WiseUp, or give through WealthPact.
            </p>
            
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button asChild className="h-12 rounded-full bg-gold px-8 text-black hover:bg-gold/90 font-bold transition-transform hover:scale-105 duration-200">
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                  Start your wealth journey
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
