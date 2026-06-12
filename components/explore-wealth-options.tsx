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
            Explore Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-emerald-400 drop-shadow-sm">
              Wealth Options
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A secure, intelligent, and inclusive ecosystem designed to help you
            save smarter, grow your wealth consistently, and achieve your life
            goals.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* WinUp - 1x1 */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface-soft/40 backdrop-blur-xl p-8 transition-all duration-700 hover:border-primary/40 hover:bg-surface-soft/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.2)] flex flex-col justify-between">
            {/* Glowing Orb */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />

            {/* Visual Header */}
            <div className="relative h-44 mb-8 w-full rounded-2xl bg-gradient-to-br from-background/80 to-background/20 border border-border/50 flex items-center justify-center overflow-hidden shadow-inner">
              {/* Animated Chart */}
              <div className="flex items-end gap-3 h-24 z-10">
                <div className="w-10 bg-primary/30 rounded-t-xl h-[40%] group-hover:h-[60%] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <div className="w-10 bg-primary/60 rounded-t-xl h-[60%] group-hover:h-[80%] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] delay-75" />
                <div className="w-10 bg-gradient-to-t from-primary to-emerald-400 rounded-t-xl h-[80%] group-hover:h-[100%] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] delay-150 relative shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity delay-300 shadow-[0_0_10px_white]" />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-border/50 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-500">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold text-foreground">
                  Up to 15% APY
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-3 text-primary">
                <Wallet className="w-6 h-6" />
                <span className="text-lg font-bold uppercase tracking-widest">
                  WinUp
                </span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Smart Savings
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Whether you're saving for rent, a new car, or an emergency fund,
                WinUp gives you the flexibility to grow your money. Automate
                your savings daily, weekly, or monthly and enjoy market-leading
                returns.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  {
                    text: "Halal Savings: Ethical, interest-free growth aligned with Islamic finance principles.",
                    icon: ShieldCheck,
                  },
                  {
                    text: "Interest Savings: Earn up to 15% APY with fixed or flexible lock periods.",
                    icon: TrendingUp,
                  },
                  {
                    text: "Mixed Savings: A balanced approach to wealth building and community impact.",
                    icon: Sprout,
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-medium text-foreground/80"
                  >
                    <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-8">
              <Button
                asChild
                className="w-full h-12 rounded-xl bg-foreground text-background hover:bg-primary hover:text-white group/btn transition-all duration-300"
              >
                <a
                  href="https://forms.gle/M4NrF9w9HSny4YR49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6"
                >
                  <span className="font-semibold">Start Saving</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* WealthPact - 1x1 */}
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface-soft/40 backdrop-blur-xl p-8 transition-all duration-700 hover:border-rose-500/30 hover:bg-surface-soft/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(244,63,94,0.2)] flex flex-col justify-between">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-rose-500/10 rounded-full blur-[60px] group-hover:bg-rose-500/20 transition-colors duration-700 pointer-events-none" />

            {/* Visual Header */}
            <div className="relative h-44 mb-8 w-full rounded-2xl bg-gradient-to-br from-background/80 to-background/20 border border-border/50 flex items-center justify-center overflow-hidden shadow-inner">
              {/* Interactive Core */}
              <div className="relative flex items-center justify-center z-10">
                <div className="absolute w-28 h-28 rounded-full border border-rose-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute w-40 h-40 rounded-full border border-rose-500/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s]" />

                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-700 rounded-2xl rotate-12 flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.3)] group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>

                {/* Orbital nodes */}
                <div className="absolute -top-6 -left-10 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shadow-lg group-hover:-translate-y-3 group-hover:-translate-x-3 transition-transform duration-700 ease-out">
                  <Users className="w-4 h-4 text-rose-500" />
                </div>
                <div className="absolute -bottom-6 -right-8 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shadow-lg group-hover:translate-y-3 group-hover:translate-x-3 transition-transform duration-700 ease-out delay-75">
                  <Sprout className="w-4 h-4 text-rose-500" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md border border-border/50 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg transform group-hover:translate-y-1 transition-transform duration-500">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-[10px] font-bold text-foreground">
                  Community Impact
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-3 text-rose-500">
                <HeartHandshake className="w-6 h-6" />
                <span className="text-lg font-bold uppercase tracking-widest">
                  WealthPact
                </span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Drive Impact
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                WealthPact is our dedicated vehicle for creating real-world
                change. By allocating a portion of your interest or making
                direct donations, you fund vetted initiatives that uplift the
                underprivileged and drive sustainable economic growth.
              </p>

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
                  Save{" "}
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
                  Donate{" "}
                  <HeartHandshake className="ml-2 w-4 h-4 transition-transform group-hover/btn2:scale-110" />
                </a>
              </Button>
            </div>
          </div>

          {/* WiseUp - 1x2 (Tall) */}
          <div className="lg:row-span-2 group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-gradient-to-b from-surface-soft/60 to-background p-8 lg:p-10 transition-all duration-700 hover:border-amber-500/40 hover:shadow-[0_8px_40px_-12px_rgba(245,158,11,0.2)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col">
            <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-[80px] group-hover:bg-amber-500/10 transition-colors duration-1000 pointer-events-none" />

            {/* Visual Header */}
            <div className="relative h-56 mb-10 w-full rounded-2xl bg-gradient-to-br from-background to-background/40 border border-border/50 flex items-center justify-center overflow-hidden shadow-inner">
              {/* Layered Glass Cards */}
              <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-1000 ease-out">
                {/* Back Card */}
                <div className="absolute w-48 h-32 bg-surface-soft border border-border/50 rounded-2xl -rotate-6 translate-x-4 opacity-50 shadow-xl" />

                {/* Front Card */}
                <div className="relative w-56 h-36 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="w-8 h-2 bg-amber-500/20 rounded-full mb-2" />
                      <div className="w-16 h-2 bg-border rounded-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                      <BookOpen className="w-4 h-4 text-amber-500" />
                    </div>
                  </div>

                  {/* Mock Line Graph */}
                  <div className="relative h-12 w-full mt-4">
                    <svg
                      viewBox="0 0 100 40"
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,40 C20,30 30,35 50,15 C70,-5 80,10 100,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-amber-500 drop-shadow-[0_4px_4px_rgba(245,158,11,0.3)]"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -bottom-4 -right-2 w-36 h-16 bg-background border border-border rounded-xl shadow-xl p-3 flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-700 ease-out delay-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
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
              <div className="inline-flex items-center gap-2 mb-3 text-amber-500">
                <Lightbulb className="w-6 h-6" />
                <span className="text-lg font-bold uppercase tracking-widest">
                  WiseUp
                </span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Financial Literacy
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                True wealth begins with knowledge. WiseUp is your comprehensive
                educational hub featuring expert-led articles, deep-dive market
                reports, and interactive tools designed to transform beginners
                into savvy investors.
              </p>

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
                variant="ghost"
                asChild
                className="w-full justify-between hover:bg-amber-500/10 hover:text-amber-600 group/btn h-12 rounded-xl"
              >
                <Link href="/learn" className="font-semibold text-foreground">
                  Explore Learning Hub{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* WealthUp - 2x1 (Wide) */}
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
                  stroke="url(#gradient-line)"
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
                    id="gradient-line"
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
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
                WealthUp
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Go beyond traditional savings. WealthUp opens the door to
                high-yield, expertly managed alternative investment
                opportunities. Whether you are looking for short-term gains or
                long-term generational wealth, our upcoming platform will
                provide access to previously exclusive markets.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Real Estate",
                    desc: "Fractional property investments",
                  },
                  { title: "Agriculture", desc: "High-yield farm backing" },
                  {
                    title: "Bonds & Stocks",
                    desc: "Diversified market portfolios",
                  },
                  {
                    title: "Halal Assets",
                    desc: "Ethical & compliant ventures",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="font-bold text-foreground text-sm mb-1">
                      {item.title}
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
                  <Link
                    href="/wealthup"
                    className="flex items-center gap-2 font-bold"
                  >
                    Explore Investments{" "}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="h-14 rounded-full border-border bg-background hover:bg-surface-soft px-8 text-base"
                >
                  <Link href="/wealthup">View Portfolios</Link>
                </Button>
              </div>
            </div>

            {/* Visual Element Right */}
            <div className="relative z-10 hidden lg:flex w-64 h-64 items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl" />
              <div className="relative w-48 h-48 rounded-full border border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors duration-700">
                {/* Mock Portfolio Ring */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-4 -rotate-90"
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

                <div className="flex flex-col items-center">
                  <PieChart className="w-8 h-8 text-primary mb-1" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Portfolio
                  </span>
                </div>
              </div>

              {/* Orbiting element */}
              <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(45,212,191,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
