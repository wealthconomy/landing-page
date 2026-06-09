"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Sparkles, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-coming-soon-modal", handleOpen);
    return () => window.removeEventListener("open-coming-soon-modal", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-[#080808] p-8 text-center text-white shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Decorative background glow */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-[60px]" />
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-gold/10 blur-[60px]" />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 rounded-full border border-white/5 bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-white transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Fancy Icon Header */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 shadow-glow-teal animate-pulse">
          <Smartphone className="h-8 w-8 text-primary" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary mb-4">
          <Sparkles className="h-3 w-3 text-gold" />
          Mobile App
        </div>

        {/* Content */}
        <h3 className="font-display text-3xl font-extrabold tracking-tight text-white uppercase">
          Coming Soon
        </h3>
        <p className="mt-3 text-sm text-white/60 leading-relaxed">
          The Wealthconomy mobile app is currently in private testing. We are polishing the dashboard to bring structured, automated wealth building to iOS and Android.
        </p>

        {/* Feature Checkmarks */}
        <div className="my-6 rounded-2xl bg-white/[0.02] border border-white/5 p-4 text-left space-y-2.5">
          <div className="flex items-center gap-2.5 text-xs text-white/80 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Automated Daily & Weekly Vaults</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-white/80 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Synergy Group Savings & Yields</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-white/80 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Legacy Planning & Wealth Sweep</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button 
            asChild
            className="w-full h-12 rounded-full font-bold group bg-primary hover:bg-primary-glow"
            onClick={() => setIsOpen(false)}
          >
            <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
              Access Portfolios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-xs font-semibold text-white/40 hover:text-white/60 py-2 transition-colors"
          >
            Keep Browsing Site
          </button>
        </div>
      </div>
    </div>
  );
}
