import type { Metadata } from "next";
import { PortfolioDetail } from "@/components/portfolio-detail";
import { WaitlistCta } from "@/components/waitlist-cta";

export const metadata: Metadata = {
  title: "Portfolios — Wealthconomy",
  description: "WealthFlex, WealthFix, WealthGoal, WealthGroup, WealthFam and WealthFlow: six structured portfolios designed to build lasting wealth.",
};

export default function PortfoliosPage() {
  return (
    <div className="bg-mesh-gradient">
      <section className="bg-background/60 backdrop-blur-xl py-14 lg:py-20 border-b border-white/5">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-6">
              6 Ways to Build Wealth
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl text-foreground">
              Six rhythms of <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">discipline</span>.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Pick one or more or combine all. Each portfolio enforces a different way of putting your money to work towards your goals.
            </p>
            
            {/* Trust / Security Strip */}
            <div className="mt-10 mx-auto max-w-3xl border-y border-border/50 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                Bank-grade Security
              </div>
              <div className="hidden sm:block w-px h-4 bg-border/50" />
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                NDIC Insured
              </div>
              <div className="hidden sm:block w-px h-4 bg-border/50" />
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                Joined by 2,000+ early savers
              </div>
            </div>
          </div>
        </section>
        <PortfolioDetail />
        <WaitlistCta />
    </div>
  );
}
