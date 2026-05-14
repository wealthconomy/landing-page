import type { Metadata } from "next";
import { SecurityFeatures } from "@/components/security-features";
import { TrustBand } from "@/components/trust-band";

export const metadata: Metadata = {
  title: "Security — Wealthconomy",
  description: "How Wealthconomy protects your wealth — CBN-aligned custody, bank-grade encryption, biometric auth, and continuous monitoring.",
};

export default function SecurityPage() {
  return (
    <>
      <SecurityFeatures />
        <TrustBand />
    </>
  );
}
