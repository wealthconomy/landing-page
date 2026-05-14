import type { Metadata } from "next";
import { PricingTable } from "@/components/pricing-table";
import { FAQ } from "@/components/faq";

export const metadata: Metadata = {
  title: "Pricing — Wealthconomy",
  description: "Free to start. Transparent Naira pricing. Never hidden fees on your principal.",
};

export default function PricingPage() {
  return (
    <>
      <PricingTable />
        <FAQ />
    </>
  );
}
