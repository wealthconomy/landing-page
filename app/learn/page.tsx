import type { Metadata } from "next";
import { WiseUp } from "@/components/wiseup";

export const metadata: Metadata = {
  title: "Learn — WiseUp by Wealthconomy",
  description: "Master compounding, structured discipline and protecting purchasing power with WiseUp.",
};

export default function LearnPage() {
  return (
    <>
      <WiseUp />
    </>
  );
}
