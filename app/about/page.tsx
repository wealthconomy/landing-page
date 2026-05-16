import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { AboutStory } from "@/components/about-story";
import { AboutValues } from "@/components/about-values";
import { AboutTeam } from "@/components/about-team";
import { WaitlistCta } from "@/components/waitlist-cta";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About Us — Wealthconomy",
  description: "Our mission to build the infrastructure for disciplined wealth and generational legacy.",
};

export default function AboutPage() {
  return (
    <div className="bg-mesh-gradient">
      <AboutHero />
      <Reveal animation="up">
        <AboutStory />
      </Reveal>
      <Reveal animation="up">
        <AboutValues />
      </Reveal>
      <Reveal animation="up">
        <AboutTeam />
      </Reveal>
      <Reveal animation="up">
        <WaitlistCta />
      </Reveal>
    </div>
  );
}
