import type { Metadata } from "next";
import { AboutHero } from "@/components/about-hero";
import { AboutStory } from "@/components/about-story";
import { AboutValues } from "@/components/about-values";
import { AboutTeam } from "@/components/about-team";
import { WaitlistCta } from "@/components/waitlist-cta";

export const metadata: Metadata = {
  title: "About Us — Wealthconomy",
  description: "Our mission to build the infrastructure for disciplined wealth and generational legacy.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <WaitlistCta />
    </>
  );
}
