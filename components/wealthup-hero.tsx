import { TrendingUp, Building2, Wheat, Banknote, ArrowUpRight } from "lucide-react";

const opportunities = [
  { icon: Building2, name: "Lagos Real Estate Notes", yield: "Fixed Returns", term: "12 months", risk: "Low–Med", status: "Almost Full", filled: 78 },
  { icon: Wheat, name: "Northern Agri Co-op", yield: "Premium Returns", term: "9 months", risk: "Medium", status: "Filling Fast", filled: 54 },
  { icon: Banknote, name: "Government T-Bills", yield: "Secure Returns", term: "3 months", risk: "Low", status: "Closing Soon", filled: 92 },
];

export function WealthUpHero() {
  return (
    <>
      <section className="bg-background/60 backdrop-blur-xl py-14 lg:py-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              <TrendingUp className="h-3.5 w-3.5" /> WealthUp
            </div>
            <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight md:text-6xl">
              When saving <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">isn't enough</span>.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Curated, vetted investment opportunities like fixed income, real-estate notes, agri-funds, and treasury bills, designed to be accessible to everyone.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {opportunities.map((o, i) => (
              <div
                key={o.name}
                className="group rounded-3xl border border-border bg-surface-soft/60 p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-teal"
                style={{ animation: `portfolio-slide-up 0.5s ease ${i * 0.08}s both` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <o.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">{o.yield}</span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">{o.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-muted-foreground">Term</div>
                    <div className="mt-1 font-semibold">{o.term}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Risk</div>
                    <div className="mt-1 font-semibold">{o.risk}</div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Funding Status</span>
                    <span>{o.status}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${o.filled}%` }} />
                  </div>
                </div>
                <button className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View deal <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
