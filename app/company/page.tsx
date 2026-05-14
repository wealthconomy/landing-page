import type { Metadata } from "next";
import { Trust } from "@/components/trust";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Company — Wealthconomy",
  description: "Why thousands of professionals trust Wealthconomy to build their wealth legacy.",
};

export default function CompanyPage() {
  return (
    <>
      <Trust />
        <Testimonials />
    </>
  );
}
