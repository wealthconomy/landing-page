import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ExploreWealthOptions } from "@/components/explore-wealth-options";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { TrustBand } from "@/components/trust-band";
import { HowItWorks } from "@/components/how-it-works";
import { DashboardPreview } from "@/components/dashboard-preview";
import { Testimonials } from "@/components/testimonials";

import { WaitlistCta } from "@/components/waitlist-cta";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Wealthconomy — Structured Wealth for Modern Professionals",
  description:
    "Save consistently, build financial discipline, grow wealth and impact, all in one structured Naira-first platform.",
};

export default function Index() {
  return (
    <div className="bg-mesh-gradient">
      <Hero />

      <Reveal animation="up" threshold={0.05}>
        <ExploreWealthOptions />
      </Reveal>

      <Reveal animation="up" threshold={0.05}>
        <PortfolioGrid />
      </Reveal>

      <Reveal animation="up" threshold={0.15}>
        <HowItWorks />
      </Reveal>

      <Reveal animation="up" threshold={0.1}>
        <TrustBand />
      </Reveal>

      <Reveal animation="in" threshold={0.2}>
        <DashboardPreview />
      </Reveal>

      <Reveal animation="up" threshold={0.1}>
        <Testimonials />
      </Reveal>


      <Reveal animation="up" threshold={0.1}>
        <WaitlistCta />
      </Reveal>
    </div>
  );
}
