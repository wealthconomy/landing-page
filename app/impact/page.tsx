import { Metadata } from "next";
import { ImpactHero } from "@/components/impact-hero";
import { ImpactStats } from "@/components/impact-stats";
import { ImpactInitiatives } from "@/components/impact-initiatives";
import { ImpactEvents } from "@/components/impact-events";
import { ImpactGallery } from "@/components/impact-gallery";
import { ImpactCTA } from "@/components/impact-cta";

export const metadata: Metadata = {
  title: "WealthPact - Impact | Wealthconomy",
  description: "Use wealth to make an impact. Contribute to meaningful community initiatives for women, the less privileged, youths, and businesses through WealthPact.",
};

export default function ImpactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <ImpactHero />
      <ImpactStats />
      <ImpactInitiatives />
      <ImpactGallery />
      <ImpactEvents />
      <ImpactCTA />
    </main>
  );
}
