import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Wealthconomy",
  description: "Questions, partnerships, press — we'd love to hear from you. Response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
    </>
  );
}
