"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, Heart, BookOpen, Wallet, BarChart3, Mail, Clock, Tag, Target, AlertTriangle, Briefcase, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ExploreWealthOptions() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-surface-soft/40 py-24 lg:py-32 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-primary mb-3">Wealth Ecosystem</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Explore Your <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Wealth Options</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Wealthconomy helps Africans save smarter, grow wealth consistently, and achieve life goals. It's Secure, Intelligent, and Inclusive.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          
          {/* WinUp */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-teal flex flex-col justify-between">
            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Wallet className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">1. WinUp: Smart Savings Made Easy</h3>
              <p className="mt-3 text-muted-foreground text-sm">
                Maximize your savings with competitive interest rates and impact-driven savings designed to help you achieve your financial goals.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Impact / Halal Savings:</strong> Compliant with Islamic principles, ensures ethical saving structure, and supports impact-driven financial growth.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Interest Savings:</strong> Competitive interest rates helps users grow wealth steadily and supports personal financial goals.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Mixed Savings:</strong> Wealth with purpose model, part of interest contributes to WealthPact, drives community impact initiatives.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <Button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="rounded-full gap-2">
                Start Saving <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* WiseUp */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft flex flex-col justify-between">
            <div className="absolute right-0 top-0 w-64 h-64 bg-gold/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">2. WiseUp: Your Financial Literacy Hub</h3>
              <p className="mt-3 text-muted-foreground text-sm mb-6">
                Equip users with financial knowledge through structured learning tools including blogs, assessments, and financial insights.
              </p>
              
              {/* Infographic mini-dashboard / Insights */}
              <div className="bg-surface-soft rounded-2xl p-4 mb-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Market & Behavior Insights</div>
                  <BarChart3 className="h-4 w-4 text-gold" />
                </div>
                
                {/* CSS Chart Mockup */}
                <div className="flex items-end h-16 gap-2 mb-4 border-b border-border/50 pb-2">
                  <div className="w-1/4 bg-primary/20 hover:bg-primary/40 rounded-t-sm h-[40%] transition-colors relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100">Trends</span></div>
                  <div className="w-1/4 bg-primary/40 hover:bg-primary/60 rounded-t-sm h-[70%] transition-colors relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100">Savings</span></div>
                  <div className="w-1/4 bg-primary/60 hover:bg-primary/80 rounded-t-sm h-[50%] transition-colors relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100">Growth</span></div>
                  <div className="w-1/4 bg-gold rounded-t-sm h-[90%] transition-colors relative group shadow-glow-teal"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100 text-gold">Wealth</span></div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="bg-background rounded-xl p-3 border border-border hover:border-gold/30 transition-colors cursor-pointer text-left group/test flex flex-col">
                    <span className="text-xs font-medium">Financial health assessment</span>
                    <span className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">Take test <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/test:opacity-100 transition-opacity" /></span>
                  </button>
                  <button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="bg-background rounded-xl p-3 border border-border hover:border-gold/30 transition-colors cursor-pointer text-left group/test flex flex-col">
                    <span className="text-xs font-medium">Savings readiness test</span>
                    <span className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">Take test <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/test:opacity-100 transition-opacity" /></span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Featured Insights</div>
                {[
                  { title: "Saving Discipline: The first step", category: "Basics", time: "3 min read", slug: "saving-discipline-the-first-step", icon: Target },
                  { title: "Common Financial Mistakes", category: "Strategy", time: "5 min read", slug: "common-financial-mistakes", icon: AlertTriangle },
                  { title: "Investment Basics 101", category: "Invest", time: "4 min read", slug: "investment-basics-101", icon: Briefcase },
                ].map((blog, i) => (
                  <Link href={`/blog/${blog.slug}`} key={i} className="flex items-center gap-4 border border-border rounded-xl p-3 bg-background/50 hover:bg-background hover:border-gold/30 hover:shadow-soft transition-all group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-soft shrink-0 border border-border group-hover:bg-gold/10 group-hover:border-gold/20 group-hover:text-gold transition-colors text-muted-foreground">
                      <blog.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-muted-foreground flex gap-2 items-center mb-1">
                        <span className="flex items-center gap-1 text-primary"><Tag className="w-3 h-3"/>{blog.category}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{blog.time}</span>
                      </div>
                      <h4 className="text-sm font-semibold truncate text-foreground group-hover:text-primary transition-colors">{blog.title}</h4>
                    </div>
                    <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full border border-border group-hover:border-gold/30 group-hover:bg-gold/10 text-muted-foreground group-hover:text-gold transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border space-y-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 rounded-full border border-border bg-background p-1 pl-4 focus-within:border-gold/50 transition-colors">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="Join WiseUp Newsletter" 
                  className="flex-1 bg-transparent text-sm focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button size="sm" className="rounded-full bg-gold hover:bg-gold/90 text-black h-8 px-4">Subscribe</Button>
              </form>
              <Button variant="outline" asChild className="rounded-full gap-2 w-full">
                <Link href="/learn">Start Learning <ArrowUpRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          {/* 
          WealthGroup (The Movement) - Digitized Ajo
          Commented out for now, to be used in the future if needed.
          
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-soft flex flex-col justify-between">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">WealthGroup: The Movement</h3>
              <p className="mt-3 text-muted-foreground text-sm mb-6">
                A modernized Ajo (Esusu) system designed to build community-driven wealth. Form groups, contribute periodically, and take turns receiving bulk payouts.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Check className="h-3 w-3" />
                  </div>
                  Private and Public Groups
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Check className="h-3 w-3" />
                  </div>
                  Contribution Tracking
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Check className="h-3 w-3" />
                  </div>
                  Payout Schedule Management
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <Button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="w-full rounded-full bg-violet-600 hover:bg-violet-700 text-white gap-2">
                Join a WealthGroup
              </Button>
            </div>
          </div>
          */}

          {/* WealthPact */}
          <div className="group relative overflow-hidden rounded-3xl border border-gold/50 bg-gold p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-gold flex flex-col justify-between text-black">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/10 text-black backdrop-blur-sm">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">3. WealthPact: Make an Impact</h3>
              <p className="mt-3 text-black/70 text-sm mb-6">
                A social impact system where users contribute to community development initiatives.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[10px] border border-black/10 bg-black/5 px-2 py-1 rounded text-black/80 font-medium">Women empowerment</span>
                <span className="text-[10px] border border-black/10 bg-black/5 px-2 py-1 rounded text-black/80 font-medium">Youth development</span>
                <span className="text-[10px] border border-black/10 bg-black/5 px-2 py-1 rounded text-black/80 font-medium">Business support</span>
                <span className="text-[10px] border border-black/10 bg-black/5 px-2 py-1 rounded text-black/80 font-medium">Community funding</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 rounded-2xl bg-black/5 border border-black/10">
                  <div className="font-display text-2xl font-bold text-black">300+</div>
                  <div className="text-[10px] uppercase tracking-wider text-black/70 mt-1 font-semibold">women trained</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-black/5 border border-black/10">
                  <div className="font-display text-2xl font-bold text-black">15+</div>
                  <div className="text-[10px] uppercase tracking-wider text-black/70 mt-1 font-semibold">businesses funded</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-black/5 border border-black/10">
                  <div className="font-display text-2xl font-bold text-black">5+</div>
                  <div className="text-[10px] uppercase tracking-wider text-black/70 mt-1 font-semibold">ongoing impact projects</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap gap-3">
              <Button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="rounded-full bg-black hover:bg-black/80 text-gold font-semibold gap-2 flex-1">
                Start Impact Saving
              </Button>
              <Button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} variant="outline" className="rounded-full border-black/20 bg-transparent hover:bg-black/5 text-black gap-2 flex-1">
                Donate for Impact
              </Button>
            </div>
          </div>

          {/* WealthUp */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-[#0e4143] p-8 lg:p-10 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-teal flex flex-col justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,207,101,0.25),transparent_60%)]" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold backdrop-blur-sm">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">4. WealthUp: Future Investments</h3>
              <p className="mt-3 text-white/75 text-sm">
                Upcoming investment products designed for sustainable wealth growth.
              </p>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>Risk-based investment portfolios.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>Personalized investment options.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/90">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>Long-term wealth planning.</span>
                </li>
              </ul>
            </div>
            
            <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
              <Button asChild className="rounded-full bg-white text-primary hover:bg-white/90 gap-2">
                <Link href="/wealthup">Explore Investments <ArrowUpRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
