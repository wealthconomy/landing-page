"use client";

import Link from "next/link";
import {
  Lock,
  Users,
  Target,
  Wallet,
  Heart,
  Repeat,
  ArrowUpRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  bestFor: string;
  short: string;
  accent: string;
};

const products: Product[] = [
  {
    id: "wealthflex",
    icon: Wallet,
    name: "WealthFlex",
    tagline: "Smart Flexible Savings",
    bestFor: "The Cautious Saver",
    short: "Prepare for emergencies through flexible savings",
    accent: "flex",
  },
  {
    id: "wealthfix",
    icon: Lock,
    name: "WealthFix",
    tagline: "The Discipline Vault",
    bestFor: "The Impulsive Saver",
    short:
      "Stay disciplined and fix your money or savings for guaranteed returns.",
    accent: "fix",
  },
  {
    id: "wealthgoal",
    icon: Target,
    name: "WealthGoal",
    tagline: "Purpose-Driven Savings",
    bestFor: "The Big-Ticket Planner",
    short:
      "Got a goal? Create a targeted savings plan and save manually or trigger auto-debit for it.",
    accent: "goal",
  },
  {
    id: "wealthfam",
    icon: Heart,
    name: "WealthFam",
    tagline: "Legacy Foundation",
    bestFor: "The Legacy Builder",
    short:
      "Create savings plans for family and friends, including spouses and kids.",
    accent: "fam",
  },
  {
    id: "wealthflow",
    icon: Repeat,
    name: "WealthFlow",
    tagline: "Automated Cycle",
    bestFor: "The Busy Professional",
    short:
      "Set your savings schedule, automate the flow, accumulate your savings.",
    accent: "flow",
  },
  {
    id: "wealthgroup",
    icon: Users,
    name: "WealthGroup",
    tagline: "Digital Ajo / Esusu",
    bestFor: "The Social Saver",
    short:
      "Save together as a group. Friends, staff, cooperatives use this for secure and transparent group savings.",
    accent: "group",
  },
];

const accentMap: Record<
  string,
  { iconBg: string; badgeBg: string; glow: string }
> = {
  flex: {
    iconBg: "bg-red-500/10 text-red-500 border border-red-500/10",
    badgeBg:
      "bg-red-500/5 text-red-600 dark:text-red-400 border border-red-500/10",
    glow: "bg-red-500/10",
  },
  fix: {
    iconBg:
      "bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/10",
    badgeBg:
      "bg-amber-500/5 text-amber-700 dark:text-amber-400 border border-amber-500/10",
    glow: "bg-amber-500/10",
  },
  goal: {
    iconBg: "bg-pink-500/10 text-pink-500 border border-pink-500/10",
    badgeBg:
      "bg-pink-500/5 text-pink-600 dark:text-pink-400 border border-pink-500/10",
    glow: "bg-pink-500/10",
  },
  fam: {
    iconBg: "bg-violet-500/10 text-violet-500 border border-violet-500/10",
    badgeBg:
      "bg-violet-500/5 text-violet-600 dark:text-violet-400 border border-violet-500/10",
    glow: "bg-violet-500/10",
  },
  flow: {
    iconBg: "bg-sky-500/10 text-sky-500 border border-sky-500/10",
    badgeBg:
      "bg-sky-500/5 text-sky-600 dark:text-sky-400 border border-sky-500/10",
    glow: "bg-sky-500/10",
  },
  group: {
    iconBg: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/10",
    badgeBg:
      "bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10",
    glow: "bg-emerald-500/10",
  },
};

const dotMap: Record<string, string> = {
  flex: "bg-red-500",
  fix: "bg-amber-500",
  goal: "bg-pink-500",
  fam: "bg-violet-500",
  flow: "bg-sky-500",
  group: "bg-emerald-500",
};

export function PortfolioGrid() {
  return (
    <section
      id="portfolio"
      className="bg-background py-10 lg:py-14 border-b border-border/40 relative overflow-hidden"
    >
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 dark:opacity-10" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            A Menu of Financial Portfolios
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How would you want to Save?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore diverse savings options to meet your needs
          </p>
        </div>

        {/* Showcase Grid of Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const pa = accentMap[p.accent];
            const anchorId = p.id.replace("wealth", "");
            return (
              <div
                key={p.id}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-card to-background p-[18px] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft flex flex-col justify-between"
              >
                {/* Background decorative blur */}
                <div
                  className={cn(
                    "absolute -right-16 -top-16 h-36 w-36 rounded-full blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-60 pointer-events-none",
                    pa.glow,
                  )}
                />

                <div>
                  {/* Top row: Icon Badge and Pulsing Status */}
                  <div className="flex items-center justify-between">
                    <div className="relative flex items-center justify-center h-12 w-12">
                      {/* Decorative outer spinning circle */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full border border-dashed animate-spin-slow pointer-events-none transition-colors duration-500",
                          p.accent === "flex"
                            ? "border-red-500/40"
                            : p.accent === "fix"
                              ? "border-amber-500/40"
                              : p.accent === "goal"
                                ? "border-pink-500/40"
                                : p.accent === "fam"
                                  ? "border-violet-500/40"
                                  : p.accent === "flow"
                                    ? "border-sky-500/40"
                                    : "border-emerald-500/40",
                        )}
                      />
                      {/* Inner blur glow */}
                      <div
                        className={cn(
                          "absolute inset-1 rounded-full blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                          pa.glow,
                        )}
                      />
                      {/* Colored icon container */}
                      <div
                        className={cn(
                          "relative flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 z-10",
                          pa.iconBg,
                        )}
                      >
                        <p.icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Tiny pulsing action indicator matching card accent */}
                    <span className="relative flex h-1.5 w-1.5 mr-1">
                      <span
                        className={cn(
                          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                          dotMap[p.accent],
                        )}
                      ></span>
                      <span
                        className={cn(
                          "relative inline-flex rounded-full h-1.5 w-1.5",
                          dotMap[p.accent],
                        )}
                      ></span>
                    </span>
                  </div>

                  {/* Info */}
                  <div className="mt-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-wider mb-2",
                        pa.badgeBg,
                      )}
                    >
                      {p.bestFor}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {p.short}
                    </p>
                  </div>
                </div>

                {/* Bottom row: Link */}
                <div className="mt-4 pt-2.5 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                    Explore Portfolio
                  </span>
                  <Link
                    href={`/portfolios#${anchorId}`}
                    className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105"
                  >
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-8 text-center">
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 px-7 py-5 text-xs font-bold text-white shadow-glow-teal transition-all duration-300 hover:scale-102"
          >
            <a
              href="https://forms.gle/M4NrF9w9HSny4YR49"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore a Wealth Portfolio{" "}
              <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
