import { Wallet, Lock, Target, Users, Heart, Repeat, Check } from "lucide-react";

const portfolios = [
  {
    id: "flex",
    icon: Wallet,
    name: "WealthFlex",
    tagline: "Flexible. Liquid. Always within reach.",
    body: "Your everyday savings wallet. Top up, sweep, or withdraw any time — earn while your money waits.",
    rate: "Up to 10% p.a.",
    perks: ["No lock-in", "Withdraw any time", "Auto-sweep from salary", "Compound interest, paid monthly"],
  },
  {
    id: "fix",
    icon: Lock,
    name: "WealthFix",
    tagline: "Lock it. Forget it. Watch it compound.",
    body: "Commit a sum for a fixed term and earn the highest yield in our ecosystem. The longer the lock, the higher the rate.",
    rate: "Up to 18% p.a.",
    perks: ["3 / 6 / 12 month locks", "Higher yield for longer terms", "Auto-rollover available", "Early withdrawal at a transparent fee"],
  },
  {
    id: "goal",
    icon: Target,
    name: "WealthGoal",
    tagline: "A pot for every dream.",
    body: "Tie savings to a specific goal — a wedding, a flight, a down payment. We do the math on what to save and when.",
    rate: "Goal-tracked",
    perks: ["Visual progress bar", "Suggested contribution rhythm", "Milestone notifications", "Up to 12% bonus on hit goals"],
  },
  {
    id: "group",
    icon: Users,
    name: "WealthGroup",
    tagline: "Ajo, perfected.",
    body: "Digitised group savings with automated rotation, transparent fairness rules, and zero defaults.",
    rate: "Group-based payouts",
    perks: ["Choose or join cohorts", "Automated payout calendar", "Defaulter buffer pool", "Verifiable on-platform receipts"],
  },
  {
    id: "fam",
    icon: Heart,
    name: "WealthFam",
    tagline: "Save together. Grow together.",
    body: "A shared pot for households — school fees, rent, family travel — with role-based access for everyone involved.",
    rate: "Shared access",
    perks: ["Up to 5 linked profiles", "Joint goal tracking", "Children's literacy track", "Shared dashboard"],
  },
  {
    id: "flow",
    icon: Repeat,
    name: "WealthFlow",
    tagline: "The Automated Rhythm.",
    body: "Set a rule like 'save ₦2,000 every day' and forget it. Money flows automatically from your bank into Wealthconomy, on your schedule.",
    rate: "Up to 17% p.a.",
    perks: ["Daily / weekly / monthly rules", "Pay-yourself-first logic", "Pause or adjust any time", "Auto-sweep from bank"],
  },
];

export function PortfolioDetail() {
  return (
    <div className="space-y-20 py-20 lg:space-y-32 lg:py-28">
      {portfolios.map((p, i) => (
        <section key={p.id} id={p.id} className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-last" : ""}`}>
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">{p.name}</h2>
                <p className="mt-3 text-xl text-primary">{p.tagline}</p>
                <p className="mt-5 text-muted-foreground">{p.body}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 to-gold/10 blur-2xl" />
                <div className="relative rounded-3xl border border-border bg-card p-8 shadow-glow-teal">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Indicative rate</div>
                  <div className="mt-2 font-display text-5xl font-semibold tracking-tight text-primary">{p.rate}</div>
                  <div className="mt-8 h-px bg-border" />
                  <div className="mt-6 grid gap-2 text-sm">
                    {p.perks.slice(0, 3).map((perk) => (
                      <div key={perk} className="flex items-center justify-between rounded-xl bg-surface-soft/60 px-4 py-3">
                        <span className="text-muted-foreground">{perk}</span>
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
