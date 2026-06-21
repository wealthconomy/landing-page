"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  TrendingUp,
  HeartHandshake,
  BookOpen,
  Wallet,
  BarChart3,
  Mail,
  Target,
  Check,
  Rocket,
  ShieldCheck,
  Sprout,
  Lightbulb,
  Users,
  Sparkles,
  Activity,
  PieChart,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ExploreWealthOptions() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-background py-20 lg:py-32 overflow-hidden relative">
      {/* Master Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-500/5 blur-[120px]" />

        {/* Sleek dotted grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[85rem] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-soft border border-border text-xs font-bold uppercase tracking-widest text-foreground shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Wealth Ecosystem
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Explore Your Wealth Options
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Wealthconomy helps Africans save smarter, grow wealth consistently, and achieve life goals. It’s Secure, Intelligent, and Inclusive.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* WinUp - 2x1 (Wide) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface-soft/40 backdrop-blur-xl p-8 lg:p-12 transition-all duration-700 hover:border-primary/40 hover:bg-surface-soft/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.2)] flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background sweeping graphic */}
            <div className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
              <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[80px]" />
              <svg
                viewBox="0 0 400 400"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] text-primary"
                fill="none"
              >
                <path
                  d="M-50,350 C100,250 200,350 450,50"
                  stroke="url(#gradient-line-winup)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                />
                <path
                  d="M-50,350 C100,250 200,350 450,50"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="1 10"
                  className="opacity-50 animate-[dash_20s_linear_infinite]"
                />
                <defs>
                  <linearGradient
                    id="gradient-line-winup"
                    x1="0"
                    y1="350"
                    x2="400"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="currentColor" stopOpacity="0" />
                    <stop
                      offset="0.5"
                      stopColor="currentColor"
                      stopOpacity="1"
                    />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative z-10 flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2.5 mb-3.5 text-primary">
                <Wallet className="w-8 h-8" />
                <span className="text-2xl font-black uppercase tracking-widest">
                  WinUp
                </span>
              </div>
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Smart Savings Made Easy
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Maximize your savings with competitive interest rates and impact drive tailored to help you achieve your financial goals.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Interest Savings",
                    desc: "Competitive interest rates to grow your money and achieve your goals.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Impact/Halal Savings",
                    desc: "Compliant with Islamic principles, ensuring peace of mind and driving impact.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Mixed Savings",
                    desc: "Wealth with purpose, contribute part of your interest to our WealthPact initiative, driving positive impact in communities.",
                    icon: Sprout,
                  },
                  {
                    title: "Automated Growth",
                    desc: "Set your schedule—daily, weekly, or monthly—and let our smart engine save for you.",
                    icon: Wallet,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-4 h-4 text-primary shrink-0" />
                      <div className="font-bold text-foreground text-sm">
                        {item.title}
                      </div>
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-tight">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn px-8 text-base shadow-[0_8px_20px_-6px_rgba(45,212,191,0.4)] transition-all duration-300 border-none"
                >
                  <a
                    href="https://forms.gle/M4NrF9w9HSny4YR49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold"
                  >
                    Start Saving{" "}
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.dispatchEvent(
                      new CustomEvent("open-coming-soon-modal"),
                    )
                  }
                  className="h-14 rounded-full border-border bg-background hover:bg-surface-soft px-8 text-base text-foreground"
                >
                  View Savings Plans
                </Button>
              </div>
            </div>

            {/* Visual Element Right */}
            <div className="relative z-10 hidden lg:flex w-80 h-80 items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
              
              {/* Outer Orbiting Ring */}
              <div className="absolute w-72 h-72 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              
              {/* Main Circular Card (No overflow-hidden on this wrapper so the badge can float outside!) */}
              <div className="relative w-56 h-56 rounded-full border border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl flex items-center justify-center group-hover:border-primary/45 hover:shadow-[0_0_35px_rgba(45,212,191,0.25)] transition-all duration-700">
                
                {/* Inner container with overflow-hidden for the bar chart only */}
                <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
                  {/* Subtle inner grid lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(circle_at_center,white_80%,transparent_100%)]" />
                  
                  {/* Animated Chart */}
                  <div className="flex items-end gap-3.5 h-28 z-10 mt-6">
                    <div className="w-11 bg-primary/20 border border-primary/10 rounded-t-xl h-[35%] group-hover:h-[55%] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <div className="w-11 bg-primary/45 border border-primary/20 rounded-t-xl h-[55%] group-hover:h-[75%] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75" />
                    <div className="w-11 bg-gradient-to-t from-primary via-emerald-400 to-primary rounded-t-xl h-[75%] group-hover:h-[95%] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 relative shadow-[0_0_25px_rgba(45,212,191,0.5)]">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500 shadow-[0_0_12px_white]" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge (Placed outside the overflow-hidden container so it never clips!) */}
                <div className="absolute -top-3 -left-3 bg-background/95 border border-primary/30 px-3.5 py-2 rounded-full flex items-center gap-2 shadow-2xl transform group-hover:-translate-y-1.5 transition-transform duration-700 z-20">
                  <TrendingUp className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-[11px] font-black text-foreground uppercase tracking-wider">
                    High-Yield Returns
                  </span>
                </div>

                {/* Second Floating Badge for balance */}
                <div className="absolute -bottom-2 -right-4 bg-background/95 border border-border/50 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xl transform group-hover:translate-y-1 transition-transform duration-700 z-20">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[9.5px] font-bold text-muted-foreground uppercase tracking-widest">
                    Secure
                  </span>
                </div>
              </div>

              {/* Orbiting Dot 1 */}
              <div className="absolute w-72 h-72 animate-[spin_12s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-gradient-to-br from-primary to-emerald-400 shadow-[0_0_20px_rgba(45,212,191,0.9)] transition-transform group-hover:scale-110" />
              </div>

              {/* Orbiting Dot 2 (Opposite direction for complexity) */}
              <div className="absolute w-72 h-72 animate-[spin_18s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-400 to-gold shadow-[0_0_15px_rgba(245,158,11,0.7)]" />
              </div>
            </div>
          </div>

          {/* WiseUp - 1x2 (Tall) */}
          <div className="lg:row-span-2 group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-gradient-to-b from-surface-soft/60 to-background p-8 lg:p-10 transition-all duration-700 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.2)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col">
            <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-[80px] group-hover:bg-amber-500/10 transition-colors duration-1000 pointer-events-none" />

            {/* Visual Header */}
            <div className="relative h-64 mb-10 w-full rounded-[2rem] bg-gradient-to-br from-background/85 to-background/30 border border-border/50 flex items-center justify-center overflow-visible shadow-inner group/header">
              {/* Background ambient glow */}
              <div className="absolute w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

              {/* Layered Glass Cards Wrapper */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Back Card (Slightly larger, rotated, floats in opposition) */}
                <div className="absolute w-52 h-36 bg-surface-soft border border-border/40 rounded-3xl -rotate-12 -translate-x-4 opacity-40 shadow-xl transition-all duration-700 group-hover/header:-rotate-6 group-hover/header:-translate-x-2" />

                {/* Front Card (Floats smoothly) */}
                <div className="relative w-60 h-40 bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col justify-between transition-transform duration-700 ease-out group-hover/header:-translate-y-2.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="w-10 h-2 bg-amber-500/25 rounded-full mb-2" />
                      <div className="w-20 h-2 bg-border/60 rounded-full" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/25 shadow-[inset_0_1px_1px_rgba(245,158,11,0.2)]">
                      <BookOpen className="w-5 h-5 text-amber-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Mock Line Graph (Multi-layered & animated) */}
                  <div className="relative h-14 w-full mt-4 overflow-visible">
                    <svg
                      viewBox="0 0 100 40"
                      className="w-full h-full overflow-visible animate-[pulse_3s_ease-in-out_infinite]"
                      preserveAspectRatio="none"
                    >
                      {/* Secondary underlay line */}
                      <path
                        d="M0,35 C15,30 25,32 45,18 C65,5 75,15 100,8"
                        fill="none"
                        stroke="rgba(245,158,11,0.2)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      {/* Main line */}
                      <path
                        d="M0,35 C20,25 30,30 50,12 C70,-6 80,8 100,3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        className="text-amber-500 drop-shadow-[0_4px_6px_rgba(245,158,11,0.4)]"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Floating Health Score Badge */}
                <div className="absolute bottom-2 -right-4 w-40 h-16 bg-background/95 border border-amber-500/35 rounded-2xl shadow-2xl p-3.5 flex items-center gap-3 transform group-hover/header:translate-x-2.5 transition-transform duration-700 ease-out delay-75 z-20">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0 border border-emerald-500/25">
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-black">
                      Health Score
                    </div>
                    <div className="text-sm font-black text-foreground">
                      Excellent
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="inline-flex items-center gap-2.5 mb-3.5 text-amber-500">
                <Lightbulb className="w-8 h-8" />
                <span className="text-2xl font-black uppercase tracking-widest">
                  WiseUp
                </span>
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Your Financial Literacy Hub
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Equip yourself with the knowledge to make informed financial decisions through our money school. WiseUp delivers programs, courses, expert insights, interactive assessments, and regular market reports to help you make confident money decisions.
              </p>

              {/* Extra details to fill up space and make it look premium */}
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Access to Expert Insights",
                    desc: "Weekly tips, market assessments, and trends to build your financial competency.",
                  },
                  {
                    title: "Engaging Assessments",
                    desc: "Interactive tools to test your financial positions and discover areas for improvement.",
                  },
                  {
                    title: "Regular Financial Reports",
                    desc: "Data-driven strategy sheets and newsletters explaining macroeconomic moves.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-3 bg-background/40 border border-border/50 rounded-xl hover:bg-background/80 transition-colors">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 font-bold text-[10px] mt-0.5">✓</span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Lessons & Assessments */}
              <div className="mt-8 flex flex-col gap-6">
                {/* Featured Lessons (Horizontal Scroll) */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-amber-500" />{" "}
                      Featured Lessons
                    </div>
                  </div>
                  <div
                    className="flex gap-3 overflow-x-auto pb-2 snap-x hide-scrollbar"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {[
                      {
                        title: "Saving Discipline: The first step",
                        time: "3 min",
                      },
                      { title: "Common Financial Mistakes", time: "5 min" },
                      { title: "Investment Basics 101", time: "4 min" },
                    ].map((lesson, i) => (
                      <Link
                        href="#"
                        key={i}
                        className="group/lesson flex flex-col justify-between min-w-[160px] bg-background/50 hover:bg-background border border-border hover:border-amber-500/30 rounded-xl p-4 transition-all shadow-sm hover:shadow-md snap-start"
                      >
                        <div className="text-[10px] font-medium text-muted-foreground mb-3 flex items-center justify-between">
                          <span className="bg-surface-soft px-2 py-0.5 rounded-full border border-border">
                            {lesson.time}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/lesson:opacity-100 group-hover/lesson:text-amber-500 group-hover/lesson:translate-x-0.5 group-hover/lesson:-translate-y-0.5 transition-all" />
                        </div>
                        <div className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover/lesson:text-amber-500 transition-colors">
                          {lesson.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Assessments */}
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-amber-500" />{" "}
                      Assessments
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent("open-coming-soon-modal"),
                        )
                      }
                      className="w-full group/test relative overflow-hidden bg-gradient-to-r from-background/80 to-background/40 hover:from-amber-500/10 hover:to-background border border-border hover:border-amber-500/40 rounded-xl p-4 transition-all text-left shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-soft border border-border flex items-center justify-center shrink-0 group-hover/test:bg-amber-500/20 group-hover/test:border-amber-500/30 transition-colors">
                            <Activity className="w-4 h-4 text-muted-foreground group-hover/test:text-amber-500 transition-colors" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-foreground group-hover/test:text-amber-500 transition-colors">
                              Financial Position Test 1
                            </span>
                            <span className="block text-xs text-muted-foreground mt-1 leading-snug pr-4">
                              Asset-to-liability ratio & net worth distribution check
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-2">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">3 Min</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/test:text-amber-500 group-hover/test:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent("open-coming-soon-modal"),
                        )
                      }
                      className="w-full group/test relative overflow-hidden bg-gradient-to-r from-background/80 to-background/40 hover:from-amber-500/10 hover:to-background border border-border hover:border-amber-500/40 rounded-xl p-4 transition-all text-left shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface-soft border border-border flex items-center justify-center shrink-0 group-hover/test:bg-amber-500/20 group-hover/test:border-amber-500/30 transition-colors">
                            <ShieldCheck className="w-4 h-4 text-muted-foreground group-hover/test:text-amber-500 transition-colors" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-foreground group-hover/test:text-amber-500 transition-colors">
                              Financial Position Test 2
                            </span>
                            <span className="block text-xs text-muted-foreground mt-1 leading-snug pr-4">
                              Savings capacity & emergency buffer readiness score
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-2">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">5 Min</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/test:text-amber-500 group-hover/test:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-10 bg-surface-soft/80 border border-border rounded-2xl p-6 relative overflow-hidden group/news">
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-amber-500" />
                    <span className="text-base font-bold text-foreground">
                      WiseUp Newsletter
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                    Subscribe to unlock full assessment results and expert tips.
                  </p>

                  {subscribed ? (
                    <div className="text-sm font-medium text-emerald-500 flex items-center gap-2 bg-emerald-500/10 px-4 py-3 rounded-xl border border-emerald-500/20">
                      <Check className="w-4 h-4" /> Subscribed successfully!
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubscribed(true);
                      }}
                      className="flex flex-col gap-3"
                    >
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-sm px-4 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-muted-foreground/50 shadow-inner"
                      />
                      <Button
                        type="submit"
                        className="w-full h-12 rounded-xl bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] transition-all"
                      >
                        Join Community
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-border">
              <Button
                asChild
                className="w-full justify-between bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 group/btn h-12 rounded-xl border border-amber-500/20 transition-all font-semibold"
              >
                <Link href="/learn" className="font-semibold text-foreground">
                  Explore Learning Hub{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* WealthPact - 1x1 */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface-soft/40 backdrop-blur-xl p-8 transition-all duration-700 hover:border-rose-500/30 hover:bg-surface-soft/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(244,63,94,0.2)] flex flex-col justify-between">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-rose-500/10 rounded-full blur-[60px] group-hover:bg-rose-500/20 transition-colors duration-700 pointer-events-none" />

            {/* Visual Header */}
            <div className="relative h-64 mb-8 w-full rounded-[2rem] bg-gradient-to-br from-background/80 to-background/20 border border-border/50 flex items-center justify-center overflow-visible shadow-inner group/header">
              {/* Ripple Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-36 h-36 rounded-full border-2 border-rose-500/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute w-52 h-52 rounded-full border border-rose-500/5 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1.5s]" />
                <div className="absolute w-64 h-64 rounded-full border border-rose-500/[0.02] animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_3s]" />
              </div>

              {/* Interactive Core */}
              <div className="relative flex items-center justify-center z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 rounded-3xl rotate-12 flex items-center justify-center shadow-[0_12px_40px_-6px_rgba(244,63,94,0.4)] group-hover/header:rotate-0 group-hover/header:scale-110 transition-all duration-700">
                  <HeartHandshake className="w-10 h-10 text-white animate-pulse" />
                </div>

                {/* Orbital nodes (Uplifting nodes that bounce outwards on hover) */}
                <div className="absolute -top-10 -left-12 w-12 h-12 rounded-2xl bg-background border border-border flex flex-col items-center justify-center shadow-2xl transform group-hover/header:-translate-y-4 group-hover/header:-translate-x-4 transition-all duration-700 ease-out">
                  <Users className="w-5 h-5 text-rose-500" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-12 h-12 rounded-2xl bg-background border border-border flex flex-col items-center justify-center shadow-2xl transform group-hover/header:translate-y-4 group-hover/header:translate-x-4 transition-all duration-700 ease-out delay-75">
                  <Sprout className="w-5 h-5 text-rose-500" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 left-4 bg-background/95 border border-rose-500/35 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl transform group-hover/header:-translate-y-1.5 transition-transform duration-700 z-20">
                <Sparkles className="w-4 h-4 text-rose-500 animate-spin-slow" />
                <span className="text-[11px] font-black text-foreground uppercase tracking-wider">
                  Community Impact
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 mb-3.5 text-rose-500">
                <HeartHandshake className="w-8 h-8" />
                <span className="text-2xl font-black uppercase tracking-widest">
                  WealthPact
                </span>
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Use Wealth to make Impact
              </h3>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                WealthPact is our vehicle for making a difference. Here, you contribute to meaningful community initiatives for women, the less privileged, youths, businesses and more. You can be an impact saver or just donate.
              </p>

              {/* Vetted Stats */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-y border-border/40 py-4">
                <div className="text-center">
                  <div className="text-lg font-black text-rose-500">300+</div>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground leading-none">Women Trained</div>
                </div>
                <div className="text-center border-x border-border/40">
                  <div className="text-lg font-black text-rose-500">15+</div>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground leading-none">Grants Given</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-black text-rose-500">5+</div>
                  <div className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground leading-none">New Projects</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-background/60 backdrop-blur-sm border border-border/50 p-3.5 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">
                      Women Empowerment
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                      Funding female founders & education
                    </div>
                  </div>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-border/50 p-3.5 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">
                      Youth Development
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                      Tech, leadership & vocational skills
                    </div>
                  </div>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-border/50 p-3.5 rounded-2xl flex items-center gap-3 sm:col-span-2">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-rose-500/10 flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">
                      Business & Community Support
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                      Micro-loans for SMEs to scale locally and infrastructure
                      funding
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 h-12 rounded-xl bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20 transition-all duration-300 border-none group/btn"
              >
                <a
                  href="https://forms.gle/M4NrF9w9HSny4YR49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Impact Saving{" "}
                  <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 h-12 rounded-xl border-rose-500/30 text-rose-500 hover:bg-rose-500/10 hover:text-rose-600 transition-all duration-300 group/btn2"
              >
                <a
                  href="https://forms.gle/M4NrF9w9HSny4YR49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate for Impact{" "}
                  <HeartHandshake className="ml-2 w-4 h-4 transition-transform group-hover/btn2:scale-110" />
                </a>
              </Button>
            </div>
          </div>

          {/* WealthUp - 1x1 */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface-soft/40 backdrop-blur-xl p-8 transition-all duration-700 hover:border-emerald-400/40 hover:bg-surface-soft/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.2)] flex flex-col justify-between">
            {/* Glowing Orb */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-[60px] group-hover:bg-emerald-400/20 transition-colors duration-700 pointer-events-none" />

            {/* Visual Header */}
            <div className="relative h-44 mb-8 w-full rounded-2xl bg-gradient-to-br from-background/80 to-background/20 border border-border/50 flex items-center justify-center overflow-hidden shadow-inner">
              {/* Mock Portfolio Ring */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full -rotate-90"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-border"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="100"
                    className="text-primary drop-shadow-[0_0_5px_rgba(45,212,191,0.5)] group-hover:strokeDashoffset-[50] transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="210"
                    className="text-emerald-400 group-hover:strokeDashoffset-[180] transition-all duration-1000 ease-out delay-100"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute flex flex-col items-center">
                  <PieChart className="w-6 h-6 text-primary mb-0.5" />
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                    Portfolio
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 mb-3.5 text-emerald-400">
                <PieChart className="w-8 h-8" />
                <span className="text-2xl font-black uppercase tracking-widest">
                  WealthUp
                </span>
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Future Investment Opportunities
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Stay tuned for our upcoming investment products designed to grow your wealth sustainably. Access premium portfolios curated for long-term compounding.
              </p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-2xl border border-border/60 bg-background/50 backdrop-blur-sm">
                  <span className="text-xs font-bold text-primary block uppercase tracking-wider mb-2">Key Portfolio Design</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Tailored investment portfolios designed to meet your specific risk appetite and long-term financial goals.
                  </p>
                </div>

                {/* Upcoming Asset Classes Grid */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { name: "Fractional Real Estate", tag: "Property Backed" },
                    { name: "Alternative Agri-Debt", tag: "Impact Returns" },
                    { name: "Shariah Compliant Assets", tag: "Ethical Funds" },
                    { name: "High-Yield Sovereign Bonds", tag: "Low-Risk Reserves" },
                  ].map((item, i) => (
                    <div key={i} className="bg-background/60 backdrop-blur-sm border border-border/50 p-3 rounded-xl text-left hover:border-emerald-400/30 transition-colors">
                      <span className="block text-[11px] font-bold text-foreground leading-tight">{item.name}</span>
                      <span className="block text-[9px] text-emerald-400 font-bold uppercase tracking-wider mt-1">{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <Button
                asChild
                className="w-full h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/10 group/btn transition-all duration-300 border-none"
              >
                <Link
                  href="/wealthup"
                  className="flex items-center justify-between px-6"
                >
                  <span className="font-semibold">Explore Portfolios</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
