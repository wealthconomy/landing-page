import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { StatsBand } from "@/components/stats-band";
import { PortfolioSegments } from "@/components/portfolio-segments";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { WealthGroupSection } from "@/components/wealth-group";
import { HowItWorks } from "@/components/how-it-works";
import { DashboardPreview } from "@/components/dashboard-preview";
import { PillarsLearnInvest } from "@/components/pillars-learn-invest";
import { ImpactStrip } from "@/components/impact-strip";
import { TrustBand } from "@/components/trust-band";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { WaitlistCta } from "@/components/waitlist-cta";

export const metadata: Metadata = {
  title: "Wealthconomy — Structured Wealth for Modern Professionals",
  description: "Save consistently, build financial discipline, grow wealth and impact — all in one structured Naira-first platform.",
};

export default function Index() {
  return (
    <>
      <Hero />
        <StatsBand />
        <PortfolioSegments />
        <PortfolioGrid />
        <WealthGroupSection />
        <HowItWorks />
        <DashboardPreview />
        <PillarsLearnInvest />
        <ImpactStrip />
        <TrustBand />
        <Testimonials />
        <FAQ />
        <WaitlistCta />
    </>
  );
}
