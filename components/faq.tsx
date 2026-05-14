"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What exactly is Wealthconomy?",
    a: "Wealthconomy is a structured wealth ecosystem that combines automated savings portfolios (WealthFix, WealthGroup, WealthGoal and more) with financial education through WiseUp — built specifically for modern professionals who want discipline without the willpower tax.",
  },
  {
    q: "Is my money safe and regulated?",
    a: "Yes. Funds are held with licensed partner institutions, secured with bank-grade encryption, and every portfolio is governed by transparent on-platform rules. You can withdraw eligible balances at any time according to each portfolio's terms.",
  },
  {
    q: "How are the interest rates so high?",
    a: "Each portfolio routes funds into different yield strategies — fixed-term locks (WealthFix) earn the highest rates because capital is committed, while flexible wallets (WealthFlex) earn less. Group savings (WealthGroup) use rotational mechanics inspired by Ajo / Esusu.",
  },
  {
    q: "Do I have to pay to use Wealthconomy?",
    a: "Creating an account is free. You only pay small, transparent service fees on specific actions like early withdrawals or premium WiseUp content — never on your principal or your earned interest.",
  },
  {
    q: "Can I use Wealthconomy with my existing bank?",
    a: "Absolutely. Wealthconomy connects to your everyday bank account so you can automate transfers in and out without changing where you get paid.",
  },
  {
    q: "What happens if I miss a contribution?",
    a: "Nothing punitive. Your schedule pauses and we send a gentle nudge. For WealthGroup, our automated accountability system handles fairness so the group is never disadvantaged.",
  },
  {
    q: "Are you CBN/NDIC compliant?",
    a: "Yes. Wealthconomy partners exclusively with CBN-licensed institutions for fund custody, and all custodial accounts are NDIC-aware in their structuring. We publish our compliance posture in-app.",
  },
  {
    q: "What portfolios do you offer?",
    a: "Six: WealthFlex (flexible), WealthFix (locked terms), WealthGoal (target-based), WealthGroup (digital Ajo), WealthFam (household pots), and Emergency (instant-access reserve).",
  },
  {
    q: "How is WealthUp different from WiseUp?",
    a: "WiseUp is our financial literacy hub — lessons on saving, debt, taxes and investing fundamentals. WealthUp is the next step: curated, vetted investment opportunities (real estate, agri, T-bills) you can actually deploy capital into.",
  },
  {
    q: "Can I withdraw my money any time?",
    a: "WealthFlex and Emergency are always liquid — withdraw any time, no fees. WealthFix and WealthGroup have term-based rules clearly stated upfront. Early withdrawals on locked products incur a transparent service fee.",
  },
  {
    q: "How does group savings (digital Ajo) work?",
    a: "You join or create a cohort. Every member contributes on a fixed cadence. Each round, one member receives the pooled payout — order is set fairly at the start. Our defaulter buffer pool ensures the group is never disadvantaged.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur-sm">
            <MessageCircleQuestion className="h-3.5 w-3.5" /> FAQ
          </div>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Questions, <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">answered.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to know about building structured wealth with Wealthconomy.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "group rounded-2xl border bg-surface-soft/60 backdrop-blur-sm transition-all duration-500",
                  isOpen ? "border-primary/40 shadow-glow-teal" : "border-border hover:border-primary/20",
                )}
                style={{ animation: `portfolio-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.05}s both` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-foreground md:text-lg">{f.q}</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-500",
                      isOpen && "rotate-45 border-primary bg-primary text-primary-foreground",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-6 pr-16 text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          Still curious? <Link href="/contact" className="font-semibold text-primary hover:text-primary-glow">Talk to our team →</Link>
        </div>
      </div>
    </section>
  );
}

