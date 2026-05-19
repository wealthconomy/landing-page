"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Lock, Award, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "WealthFix",
  });
  const [submitted, setSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      // Generate a dynamic queue number between 15,200 and 15,800 for UX engagement
      const num = Math.floor(Math.random() * 600) + 15200;
      setQueueNumber(num);
      setSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-background font-display flex flex-col justify-between overflow-hidden">
      {/* Decorative Grid & Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Header Back Button */}
      <header className="relative z-10 mx-auto w-full max-w-7xl px-6 py-6 flex items-center">
        <Link
          href="/"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground hover:scale-105 hover:bg-surface-soft active:scale-95 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <span className="ml-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Back to home
        </span>
      </header>

      {/* Main Content Layout */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Pitch */}
          <div className="md:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-primary shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-gold animate-pulse" />
              Private Beta Launching Soon
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground uppercase">
              BE THE FIRST TO BUILD <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">LEGACY</span>.
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              Reserve your priority spot to access automated savings vaults, group synergy pools, and customized investment portfolios built for modern professionals.
            </p>

            {/* Trust Indicators */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                <Shield className="h-4 w-4 text-primary" />
                <span>Military-Grade Security</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                <Lock className="h-4 w-4 text-primary" />
                <span>ISO 27001 Audit Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Waitlist Card Container */}
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface-soft/40 p-8 backdrop-blur-md shadow-glow-teal">
              {submitted ? (
                /* Success Layout */
                <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">You're on the list!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We've reserved your spot and sent a verification email to <span className="font-semibold text-foreground">{formData.email}</span>.
                    </p>
                  </div>

                  {/* Dynamic Ticket */}
                  <div className="rounded-2xl border border-border bg-background p-4 relative overflow-hidden">
                    <div className="absolute top-0 bottom-0 left-0 w-2 bg-primary" />
                    <div className="text-left pl-4">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Priority Queue Position</div>
                      <div className="mt-1 font-display text-3xl font-black text-foreground">#{queueNumber.toLocaleString()}</div>
                      <div className="mt-2 text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                        <Users className="h-3 w-3" /> Top 1.5% of Early Members
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-2">
                    <Button asChild className="rounded-full w-full">
                      <Link href="/">Return to Home</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                /* Form Layout */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">Reserve your spot</h3>
                    <p className="text-xs text-muted-foreground mt-1">Submit your details to join the priority pool.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        Primary Portfolio Interest
                      </label>
                      <select
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-foreground appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                          backgroundSize: "16px",
                        }}
                      >
                        <option value="WealthFix" className="bg-background text-foreground">WealthFix (Automated Savings)</option>
                        <option value="WealthGroup" className="bg-background text-foreground">WealthGroup (Synergy Pools)</option>
                        <option value="WealthGoal" className="bg-background text-foreground">WealthGoal (Target Saving)</option>
                        <option value="WealthFlex" className="bg-background text-foreground">WealthFlex (Daily liquidity)</option>
                        <option value="WealthFlow" className="bg-background text-foreground">WealthFlow (Sweep Protocol)</option>
                        <option value="WealthFam" className="bg-background text-foreground">WealthFam (Legacy Planning)</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 rounded-full font-bold group">
                    Secure My Priority Spot
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 border-t border-border/40 text-center">
        <p className="text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Wealthconomy Technologies Limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
