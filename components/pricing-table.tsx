import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    blurb: "Everything you need to start saving with structure.",
    features: [
      ["WealthFlex + WealthGoal portfolios", true],
      ["Unified dashboard", true],
      ["WiseUp basics", true],
      ["WealthFix locked savings", false],
      ["WealthGroup access", false],
      ["WealthUp investment opportunities", false],
    ],
    cta: "Get started",
  },
  {
    name: "Wealth+",
    price: "₦1,500/mo",
    blurb: "Unlock the full ecosystem and the highest yields.",
    features: [
      ["All Starter features", true],
      ["WealthFix locked savings", true],
      ["WealthGroup access", true],
      ["WealthUp investment opportunities", true],
      ["Priority human support", true],
      ["Dedicated growth coach", false],
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Family",
    price: "₦3,500/mo",
    blurb: "Wealthconomy for households of up to five.",
    features: [
      ["All Wealth+ features", true],
      ["WealthFam shared pots", true],
      ["Up to 5 linked profiles", true],
      ["Joint goal tracking", true],
      ["Children's literacy track", true],
      ["Dedicated growth coach", true],
    ],
    cta: "Start family plan",
  },
];

export function PricingTable() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Pricing
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Transparent. Always in <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Naira</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Start free. Upgrade only when you're ready for the full ecosystem. Never any hidden fees on your principal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border p-8 ${
                t.highlight
                  ? "border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-glow-teal"
                  : "border-border bg-surface-soft/60"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <div className="mt-3 font-display text-4xl font-semibold tracking-tight">{t.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
              <Button className={`mt-6 w-full rounded-full ${t.highlight ? "" : "bg-foreground text-background hover:bg-foreground/90"}`}>{t.cta}</Button>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map(([label, ok]) => (
                  <li key={label as string} className="flex items-start gap-3">
                    {ok ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                    )}
                    <span className={ok ? "text-foreground" : "text-muted-foreground/60"}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans support unlimited deposits & withdrawals on flexible portfolios. Service fees apply only to early withdrawals on locked terms.
        </p>
      </div>
    </section>
  );
}
