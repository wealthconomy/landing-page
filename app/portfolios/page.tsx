import type { Metadata } from "next";
import { PortfolioDetail } from "@/components/portfolio-detail";
import { WaitlistCta } from "@/components/waitlist-cta";

export const metadata: Metadata = {
  title: "Portfolios — Wealthconomy",
  description: "WealthFlex, WealthFix, WealthGoal, WealthGroup, WealthFam and WealthFlow — six structured portfolios designed to build lasting wealth.",
};

export default function PortfoliosPage() {
  return (
    <>
      <section className="bg-surface-soft/40 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              Portfolios
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Six rhythms of <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">discipline</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Pick one. Combine all. Each portfolio enforces a different way of putting your money to work.
            </p>
          </div>
        </section>
        <PortfolioDetail />
        <WaitlistCta />
    </>
  );
}
