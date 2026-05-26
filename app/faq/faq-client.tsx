"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/components/faq";

export function FAQClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-4xl px-6 w-full">
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={cn(
                "group rounded-2xl border bg-surface-soft/60 backdrop-blur-sm transition-all duration-500",
                isOpen ? "border-primary/40 shadow-glow-teal" : "border-border hover:border-primary/20",
              )}
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
    </div>
  );
}
