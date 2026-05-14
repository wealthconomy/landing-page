import type { Metadata } from "next";
import { HowItWorks } from "@/components/how-it-works";
import { DashboardPreview } from "@/components/dashboard-preview";
import { WaitlistCta } from "@/components/waitlist-cta";

export const metadata: Metadata = {
  title: "How it works — Wealthconomy",
  description: "From paycheck to portfolio in four steps. See how Wealthconomy automates discipline and visualises wealth.",
};

export default function HowPage() {
  return (
    <>
      <HowItWorks />
        <DashboardPreview />
        <WaitlistCta />
    </>
  );
}
