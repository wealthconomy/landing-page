"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WaitlistCta() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="waitlist" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#0e4143] px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,207,101,0.2),transparent_60%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Now in beta · invite only
            </span>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Start building <span className="text-gold">wealth that lasts.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Join the waitlist and be among the first to experience structured, disciplined, impact-aligned wealth building.
            </p>

            {done ? (
              <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> You're on the list — see you soon.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur-sm focus:border-gold focus:outline-none"
                />
                <Button type="submit" className="h-12 rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90">
                  Join waitlist <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/50">No spam. We email when your invite is ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

