"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WaitlistCta() {
  return (
    <section id="portfolio" className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#0e4143] px-8 py-12 text-center text-primary-foreground md:px-16 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,207,101,0.2),transparent_60%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Now in beta · invite only
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Start building <span className="text-gold">wealth that lasts.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Explore our Portfolios and be among the first to experience structured, disciplined, impact-aligned wealth building.
            </p>

            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                className="h-12 rounded-full bg-gold px-8 text-black hover:bg-gold/90 font-bold transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Start your wealth journey
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 font-bold transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                <a href="https://chat.whatsapp.com/LTUgZfloaYK8KcXB2yVkdy?mode=gi_t" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Join our community
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/50">Follow our journey and grow wealth together.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

