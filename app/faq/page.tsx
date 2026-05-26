import { FAQClient } from "./faq-client";
import { MessageCircleQuestion } from "lucide-react";

export const metadata = {
  title: "FAQ - Wealthconomy",
  description: "Frequently asked questions about Wealthconomy.",
};

export default function FAQPage() {
  return (
    <main className="relative flex min-h-screen flex-col pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur-sm">
          <MessageCircleQuestion className="h-3.5 w-3.5" /> FAQ
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Everything you need to know about <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Wealthconomy.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Find answers to common questions about our platform, security, and portfolios.
        </p>
      </div>

      <FAQClient />
    </main>
  );
}
