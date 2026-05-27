import type { Metadata } from "next";
import { WealthUpHero } from "@/components/wealthup-hero";
import { WaitlistCta } from "@/components/waitlist-cta";

export const metadata: Metadata = {
  title: "WealthUp — Investment opportunities",
  description: "Vetted investment opportunities like fixed income, real-estate notes, agri-funds, and treasury bills, designed to be accessible to everyone.",
};

export default function WealthUpPage() {
  return (
    <div className="bg-mesh-gradient">
      <WealthUpHero />
      <WaitlistCta />
    </div>
  );
}
