"use client";

import { useState } from "react";
import { ChevronRight, TrendingUp, ShieldCheck, Target, LineChart, Star, Calculator, Mail, BookOpen, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WiseUp() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubsubscribed] = useState(false);

  const handleScrollToModules = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("learning-modules");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="wiseup" className="bg-background py-24 lg:py-32 overflow-hidden font-display">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Intro Header Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <BookOpen className="h-4 w-4 text-gold" />
              WiseUp: Your Financial Literacy Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Equip yourself with the knowledge to make <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">informed financial decisions</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Wealth building requires structured knowledge. Access our blogs, assessments, and regular market trend reports to build long-term discipline.
            </p>
            
            <ul className="space-y-3 pt-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <CheckIcon />
                <span>Access to expert insights and tips.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckIcon />
                <span>Engaging assessments to test your financial knowledge.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckIcon />
                <span>Regular reports on market trends and financial strategies.</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button onClick={handleScrollToModules} className="rounded-full h-11 px-6 gap-2">
                Start Learning <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Infographic / Chart Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 to-gold/5 blur-2xl pointer-events-none" />
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-glow-teal">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Growth of ₦10,000 (Adjusted for Inflation)</div>
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </div>
              
              {/* Infographic Chart Lines */}
              <div className="h-48 w-full border-b border-l border-border/80 relative mt-6 mb-2 flex items-end">
                {/* Y Axis Labels */}
                <div className="absolute left-1 top-0 text-[9px] text-muted-foreground">₦120k</div>
                <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[9px] text-muted-foreground">₦60k</div>
                <div className="absolute left-1 bottom-1 text-[9px] text-muted-foreground">₦10k</div>

                {/* X Axis Labels */}
                <div className="absolute bottom-1 right-2 text-[9px] text-muted-foreground">5 Years</div>

                {/* Line 1: Structured Savings (Primary Glow) */}
                <svg className="absolute inset-0 h-full w-full text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,90 Q 25,85 50,60 T 100,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 0,90 Q 25,85 50,60 T 100,10 L 100,100 L 0,100 Z" fill="url(#grad-primary)" opacity="0.1" />
                  <defs>
                    <linearGradient id="grad-primary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Line 2: Sitting Cash under inflation (Red/Orange) */}
                <svg className="absolute inset-0 h-full w-full text-rose-500/60" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,90 Q 30,92 60,94 T 100,96" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                </svg>

                {/* Highlight dot */}
                <span className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-gold border-2 border-background shadow-glow-teal animate-ping" />
                <span className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-gold border-2 border-background shadow-glow-teal" />
              </div>

              <div className="flex justify-between text-[10px] font-semibold tracking-wider uppercase text-muted-foreground pt-2">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary" /> WinUp Compound Plan</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" /> Cash in hand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Financial Position Tests */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground uppercase">
              Financial Position Tests
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Test your savings readiness and financial position. Please note that after taking the test, full results can only be unlocked via the Wealthconomy app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-gold/30 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-gold/10 px-2 py-1 rounded">Assessment 01</span>
                <h3 className="text-xl font-semibold mt-4">Financial Position Test 1</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Evaluate your current asset-to-liability ratio and understand your immediate net worth distribution category.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">Unlocks via Mobile App</span>
                <Button variant="outline" size="sm" onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="rounded-full gap-1 text-xs">
                  Take test <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>

            <div className="group rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-gold/30 hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-gold/10 px-2 py-1 rounded">Assessment 02</span>
                <h3 className="text-xl font-semibold mt-4">Financial Position Test 2</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Analyze your savings capacity and emergency buffer readiness score to verify your risk defense category.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">Unlocks via Mobile App</span>
                <Button variant="outline" size="sm" onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="rounded-full gap-1 text-xs">
                  Take test <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Blog Line */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground uppercase">
              Featured Money Lessons
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Browse our latest blogs linking directly to deeper deep-dives in the mobile app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Saving Discipline: The first step", desc: "Why willpower fails and automated habits win the long-term wealth game.", cat: "Basics" },
              { title: "Common Financial Mistakes", desc: "Top portfolio pitfalls that keep Africans working for money instead of money working for them.", cat: "Strategy" },
              { title: "Investment Basics 101", desc: "Demystifying returns, risks, and compounding horizons for modern professionals.", cat: "Invest" }
            ].map((b, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-surface-soft/40 p-6 hover:bg-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-primary font-bold">{b.cat}</span>
                  <h4 className="text-base font-semibold mt-3 group-hover:text-primary transition-colors">{b.title}</h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{b.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <Button variant="ghost" onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="p-0 hover:bg-transparent text-xs text-primary font-bold group-hover:text-primary-glow flex items-center gap-1">
                    Read on App <ArrowUpRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Newsletter subscription */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#0e4143] px-8 py-12 text-center text-primary-foreground md:px-16 md:py-16 mb-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,207,101,0.2),transparent_60%)] pointer-events-none" />
          <div className="relative max-w-xl mx-auto space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
              WiseUp Newsletter
            </h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Subscribe to WiseUp newsletters and unlock full assessment results in the app.
            </p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
                🎉 Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubsubscribed(true); }} className="flex flex-col sm:flex-row gap-2 mt-4">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
                />
                <Button type="submit" className="rounded-full bg-gold text-black hover:bg-gold/90 h-12 px-6 font-bold">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Learning Modules Section Header */}
        <div id="learning-modules" className="mb-20 text-center max-w-3xl mx-auto scroll-mt-24">
          <div className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Curriculum modules
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground font-display">
            The Mathematics of Wealth
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Explore byte-sized lessons on time value, leverage, asset allocation, and tax-efficiency.
          </p>
        </div>

        {/* Learning Blocks */}
        <div className="space-y-32">
          {/* Block 1: Compounding */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   The Mathematics of Wealth
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Understand exactly how time and consistency multiply your money. We break down the mechanics of compounding interest, showing you how small, automated contributions in your WealthFix portfolio turn into massive, life-changing milestones over time.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                Master Compounding <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* UI Graphic: WealthFix Compounding Card */}
            <div className="order-1 lg:order-2 relative h-[350px] w-full flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[60%] w-[280px] rounded-3xl bg-surface-soft border border-border shadow-2xl p-6 transform rotate-6 transition-transform duration-500 hover:rotate-12">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">WealthFix · 3 Years</p>
                 <div className="font-display text-3xl font-bold text-foreground mb-6">₦2,500,000</div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                       <span className="text-muted-foreground">Principal</span>
                       <span className="text-foreground">₦1,800,000</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                       <span className="text-muted-foreground">Compound Interest</span>
                       <span className="text-emerald-500">+₦700,000</span>
                    </div>
                 </div>
                 <svg className="w-full h-12 mt-4 text-emerald-500 opacity-80" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,30 Q20,28 40,20 T80,10 T100,0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                 </svg>
              </div>

              {/* Overlapping Notification */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[75%] translate-y-[15%] w-[320px] rounded-2xl bg-surface-soft backdrop-blur-xl border border-border shadow-2xl p-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-glow-teal z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                    <span className="font-display text-primary-foreground font-bold text-[10px]">W</span>
                  </div>
                  <span className="font-display text-xs font-bold text-foreground">WEALTHCONOMY</span>
                  <span className="text-xs text-muted-foreground ml-auto font-medium">now</span>
                </div>
                <p className="text-[13px] text-foreground/90 leading-tight">
                  <span className="font-bold text-emerald-500">+₦12,500 interest</span> compounded on your WealthFix. The snowball effect is active.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2: Structured Discipline */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Target className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   Structured Discipline
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Willpower is limited, but systems are infinite. Learn how to construct a foolproof financial framework. We teach you how to split your income, budget efficiently, and reach your emergency fund goals without feeling restricted.
              </p>
              <a href="#" className="inline-flex items-center text-gold font-semibold hover:text-gold/80 transition-colors">
                Learn Smart Allocation <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="order-1 lg:order-1 relative h-[300px] w-full flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 w-[360px] rounded-3xl bg-surface-soft backdrop-blur-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 transition-transform duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-5">
                   <div className="p-2.5 rounded-full bg-gold/20 text-gold"><Target className="w-5 h-5"/></div>
                   <div>
                      <h4 className="font-display font-bold text-foreground text-sm">Emergency Fund</h4>
                      <p className="text-xs text-muted-foreground">Target: ₦2,000,000</p>
                   </div>
                </div>
                <div className="h-2 w-full rounded-full bg-border mb-3 overflow-hidden">
                   <div className="h-full bg-gold rounded-full w-[85%]" />
                </div>
                <div className="flex justify-between text-xs font-medium mb-6">
                   <span className="text-foreground">₦1,700,000 saved</span>
                   <span className="text-gold">85%</span>
                </div>
                
                <div className="rounded-xl bg-background/50 border border-border p-3 flex items-start gap-3">
                   <div className="text-lg">🎉</div>
                   <p className="text-xs text-foreground/90 leading-relaxed">
                     By sticking to the 50/30/20 rule, you're projected to hit your goal <span className="font-bold text-gold">3 months early.</span>
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: Beating Inflation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
                    <ShieldCheck className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   Protect Your Power
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sitting cash loses value. We demystify the economy, cutting out the financial noise and teaching you actionable strategies to protect your purchasing power against inflation, ensuring your wealth outpaces the market.
              </p>
              <a href="#" className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-500/80 transition-colors">
                Beat Inflation <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[300px] w-full flex items-center justify-center">
              <div className="relative inline-block select-none group">
                <span className="font-display text-[70px] sm:text-[90px] md:text-[110px] font-black text-foreground tracking-tight transition-transform duration-500 group-hover:scale-105">
                  Inflation
                </span>
                <svg 
                  viewBox="0 0 400 120" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] text-rose-500 overflow-visible pointer-events-none drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]"
                >
                  <path
                    d="M 0,90 L 50,30 L 100,90 L 150,30 L 200,90 L 250,30 L 300,90 L 350,30 L 400,90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}
