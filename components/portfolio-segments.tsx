import Link from "next/link";
import { Wallet, Lock, Target, Users, Heart, ShieldAlert, ArrowUpRight, Repeat } from "lucide-react";

const segments = [
  { id: "flex", icon: Wallet, name: "WealthFlex", line: "Flexible savings you can top up or withdraw any time.", rate: "Flexible Savings" },
  { id: "fix", icon: Lock, name: "WealthFix", line: "Lock funds for a fixed term and earn the highest yield.", rate: "Locked Vault" },
  { id: "goal", icon: Target, name: "WealthGoal", line: "Target-based savings tied to a milestone or date.", rate: "Goal-tracked" },
  { id: "group", icon: Users, name: "WealthGroup", line: "Digitised Ajo with automated, fair rotation.", rate: "Group-based" },
  { id: "fam", icon: Heart, name: "WealthFam", line: "Family pots for school fees, rent, or shared dreams.", rate: "Shared access" },
  { id: "flow", icon: Repeat, name: "WealthFlow", line: "Automated savings for continuous wealth flow.", rate: "Automated" },
];

export function PortfolioSegments() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Portfolios
          </div>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Six structured ways to <span className="bg-gradient-to-r from-primary via-primary-glow to-gold bg-clip-text text-transparent">build wealth</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Pick one, mix many. Each portfolio enforces a different rhythm of discipline so your money keeps moving forward.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Link
              key={s.id}
              href={`/portfolios#${s.id}`}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface-soft/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-teal"
              style={{ animation: `portfolio-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s both` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground">{s.rate}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.line}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
