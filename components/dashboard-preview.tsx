import { ArrowUpRight, TrendingUp } from "lucide-react";

const portfolios = [
  { name: "WealthFlex", value: "₦480,200", pct: 32, tone: "from-primary to-primary-glow" },
  { name: "WealthFix", value: "₦1,250,000", pct: 84, tone: "from-emerald-500 to-emerald-400" },
  { name: "WealthGoal · Lagos Apt", value: "₦620,000", pct: 62, tone: "from-amber-400 to-amber-300" },
  { name: "WealthGroup · Cohort 14", value: "₦210,000", pct: 45, tone: "from-violet-500 to-violet-400" },
];

export function DashboardPreview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              Wealth tracking
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              See every naira <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">working</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              One dashboard for all your portfolios — live balances, projected yield, and progress against every goal you set.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Unified Naira balance across all portfolios",
                "Goal progress bars + projected hit dates",
                "Interest accrual streamed in real time",
                "Group payout calendar at a glance",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-gold/20 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-glow-teal">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Total wealth</div>
                  <div className="mt-1 font-display text-4xl font-semibold tracking-tight">₦2,560,200</div>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                  <TrendingUp className="h-3.5 w-3.5" /> +12.4% MoM
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {portfolios.map((p, i) => (
                  <div key={p.name} style={{ animation: `portfolio-slide-up 0.5s ease ${0.1 + i * 0.1}s both` }}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{p.name}</span>
                      <span className="font-semibold">{p.value}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-soft">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${p.tone}`}
                        style={{ width: `${p.pct}%`, transition: "width 1.2s ease" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between rounded-2xl border border-border bg-surface-soft/60 p-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Next payout</div>
                  <div className="mt-1 font-display text-lg font-semibold">WealthGroup · ₦340,000</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
