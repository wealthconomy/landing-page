import type { Metadata } from "next";
import { WealthUpHero } from "@/components/wealthup-hero";
import { WaitlistCta } from "@/components/waitlist-cta";

export const metadata: Metadata = {
  title: "WealthUp — Investment opportunities",
  description: "Vetted investment opportunities — fixed income, real-estate notes, agri-funds, treasury bills — packaged for everyday Nigerians.",
};

export default function WealthUpPage() {
  return (
    <>
      <WealthUpHero />
        <WaitlistCta />
    </>
  );
}
