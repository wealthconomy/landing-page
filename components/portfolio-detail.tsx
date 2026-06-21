"use client";

import {
  Wallet,
  Lock,
  Target,
  Users,
  Heart,
  Repeat,
  Check,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolios = [
  {
    id: "flex",
    icon: Wallet,
    name: "WealthFlex",
    tagline: "Don’t be stranded...",
    bestFor: "Flexible savings to meet your emergency needs",
    body: "Earn or Impact while keeping cash accessible for unexpected needs.",
    howItWorks: "Perfect for an emergency buffer without penalties.",
    rate: "Flexible",
    steps: [
      "Instant withdrawals",
      "7 free withdrawals / month",
      "Interest/Impact accrues daily",
    ],
    perks: [
      "Instant withdrawals with zero penalty fees",
      "Up to 7 free withdrawals every month",
      "Interest/Impact accrues daily, paid out monthly",
      "Easily roll over to WealthFix or WealthGoal",
    ],
    cta: "Start flexible saving",
    glowColor: "from-red-500/20 via-rose-400/10 to-transparent",
  },
  {
    id: "flow",
    icon: Repeat,
    name: "WealthFlow",
    tagline: "Consistency without stress",
    bestFor: "Automate and grow",
    body: "Automate your savings and go to sleep while your wealth accumulate",
    howItWorks:
      "Set a schedule (daily, weekly, monthly), link a funding source, and automate transfers so your savings grow without thinking about it. Review progress, pause or adjust anytime.",
    rate: "Automated",
    steps: [
      "Set a schedule (daily, weekly, monthly)",
      "Link a funding source",
      "Automate transfers to grow without stress",
    ],
    perks: [
      "Automate transfers so your savings grow without thinking about it",
      "Review progress, pause, or adjust anytime",
      "Link multiple funding cards or bank accounts",
      "Go to sleep while your wealth accumulates",
    ],
    cta: "Automate my savings",
    glowColor: "from-sky-500/20 via-blue-400/10 to-transparent",
  },
  {
    id: "goal",
    icon: Target,
    name: "WealthGoal",
    tagline: "Save with discipline and smash your goals with targeted savings",
    bestFor: "Goal-oriented savings",
    body: "Keeps you motivated until you hit the goal.",
    howItWorks:
      "Create a goal (trip, tuition, down payment), choose a target amount and deadline, save manually or enable auto-debit to stay on track. Receive visual progress and reminders.",
    rate: "Goal-tracked",
    steps: [
      "Create a goal (trip, tuition, down payment)",
      "Choose a target amount and deadline",
      "Save manually or enable auto-debit to stay on track",
    ],
    perks: [
      "Save manually or enable auto-debit for your goals",
      "Receive visual progress and reminders to stay motivated",
      "Separate goals for travel, tuition, rent, down payment",
      "Milestone notifications and rewards as you save",
    ],
    cta: "Create a goal",
    glowColor: "from-pink-500/20 via-rose-400/10 to-transparent",
  },
  {
    id: "fix",
    icon: Lock,
    name: "WealthFix",
    tagline: "Locked savings for guaranteed returns",
    bestFor: "Disciplined locked savings",
    body: "Stay disciplined and fix your money or savings for guaranteed returns.",
    howItWorks:
      "Lock in your savings for a fixed term that matches your plan. No withdrawals until maturity. Reward for discipline and penalty for default keeps you disciplined and rewarded.",
    rate: "Locked Vault",
    steps: [
      "Lock in your savings for a fixed term matching your plan",
      "Earn guaranteed returns with zero early withdrawals",
      "Get rewarded for discipline and penalized for default",
    ],
    perks: [
      "Lock in your savings for a fixed term matching your plan",
      "Choose the term length that matches your goals",
      "Strict zero-withdrawal policy until maturity to enforce discipline",
      "Highest guaranteed interest rates on fixed savings",
    ],
    cta: "Lock and grow",
    glowColor: "from-amber-500/20 via-yellow-400/10 to-transparent",
  },
  {
    id: "fam",
    icon: Heart,
    name: "WealthFam",
    tagline: "Build financial security for those you love",
    bestFor: "Family & loved ones",
    body: "Create savings plans for family and friends, including spouses and kids.",
    howItWorks:
      "Create plans for spouses, children, or relatives. Manage contributions individually or collectively, and set custom goals for school fees, welfare, or household projects.",
    rate: "Shared Pool",
    steps: [
      "Create plans for spouses, children, or relatives",
      "Set individual or collective goals",
      "Manage contributions transparently",
    ],
    perks: [
      "Create plans for spouses, children, or relatives",
      "Manage individual contributions and goals under one vault",
      "Separate funds for school fees, family trips, or emergency pool",
      "Build generational legacy for your kids and loved ones",
    ],
    cta: "Start a family plan",
    glowColor: "from-purple-500/20 via-violet-400/10 to-transparent",
  },
  {
    id: "group",
    icon: Users,
    name: "WealthGroup",
    tagline: "Collective saving made easy",
    bestFor: "Friends, staff & cooperatives",
    body: "Save together as a group. Friends, staff, cooperatives use this for secure and transparent group savings.",
    howItWorks:
      "Create or join a group with friends, colleagues or community members. Set contribution rules, timelines and shared goals, and track group progress in a transparent, digitized ledger.",
    rate: "Rotational / Group",
    steps: [
      "Create or join a group with friends, colleagues, or cooperatives",
      "Set contribution rules, timelines, and shared goals",
      "Track group progress and automate secure payouts",
    ],
    perks: [
      "Save together securely with friends, staff, or cooperatives",
      "Set custom contribution rules and payout timelines",
      "Transparent group progress tracking and shared goals",
      "Secure and reliable digital group savings ledger",
    ],
    cta: "Start a Group, Join a Group",
    glowColor: "from-emerald-500/20 via-teal-400/10 to-transparent",
  },
];

const portfolioScreenshots: Record<string, string> = {
  flex: "/images/wealthflex-screen.png",
  flow: "/images/wealthflow-screen.png",
  goal: "/images/wealthgoal-screen.png",
  fix: "/images/wealthfix-screen.png",
  fam: "/images/wealthfam-screen.png",
  group: "/images/wealthgroup-screen.png",
};

function PhoneFrame({
  id,
  name,
  glowColor,
}: {
  id: string;
  name: string;
  glowColor: string;
}) {
  const src = portfolioScreenshots[id];
  return (
    <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] select-none">
      {/* Ambient glow behind phone */}
      <div
        className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full blur-3xl bg-gradient-to-b ${glowColor} pointer-events-none opacity-80`}
      />

      {/* Phone shell — exact same as how-it-works */}
      <div className="relative w-full aspect-[1/2.16] bg-gray-950 rounded-[2rem] lg:rounded-[3rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-900/10">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-black rounded-full z-40 flex items-center justify-between px-2 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-800/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
        </div>

        {/* Pinned Top Bar — status bar from screenshot */}
        <div
          className="absolute top-0 left-0 w-full h-[6.5%] z-30 bg-no-repeat"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
            backgroundColor: "white",
          }}
        >
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-b from-white/5 to-transparent" />
        </div>

        {/* Pinned Bottom Bar — nav bar from screenshot */}
        <div
          className="absolute bottom-0 left-0 w-full h-[12%] z-30 bg-no-repeat"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "100% auto",
            backgroundPosition: "bottom center",
            backgroundColor: "white",
          }}
        >
          <div className="absolute -top-2 left-0 w-full h-2 bg-gradient-to-t from-white/5 to-transparent" />
        </div>

        {/* Scrolling Screen Content */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat animate-app-scroll z-10"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "100% auto",
          }}
        />

        {/* Screen Glare — same as how-it-works */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-50" />
      </div>
    </div>
  );
}

export function PortfolioDetail() {
  return (
    <div className="space-y-8 py-6 lg:space-y-10 lg:py-8">
      {portfolios.map((p, i) => (
        <section key={p.id} id={p.id} className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6">
            <div
              className={`grid items-center gap-12 lg:grid-cols-12 ${
                i % 2 ? "lg:[&>*:first-child]:order-last" : ""
              }`}
            >
              {/* Left Column — Text Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/10">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
                    {p.bestFor}
                  </div>
                </div>

                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  {p.name}
                </h2>
                <p className="mt-2 text-xl text-foreground font-semibold leading-snug">
                  {p.tagline}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-base">
                  {p.body}
                </p>

                {/* How it works */}
                <div className="mt-6 border-l-2 border-primary/20 pl-4 space-y-3.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    How it works:
                  </h4>
                  <div className="space-y-2.5">
                    {p.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-[10px] shadow-sm">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 h-px bg-border/40" />

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {p.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    asChild
                    className="rounded-full gap-2 px-6 py-5 bg-primary hover:bg-primary/95 text-white shadow-glow-teal font-semibold text-sm transition-all hover:scale-102"
                  >
                    <a
                      href="https://forms.gle/M4NrF9w9HSny4YR49"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.cta} <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <div className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider border-l border-border pl-4 hidden sm:block">
                    Available on iOS &amp; Android
                  </div>
                </div>
              </div>

              {/* Right Column — Real App Screenshot in Phone Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full flex justify-center items-center py-8">
                  <PhoneFrame id={p.id} name={p.name} glowColor={p.glowColor} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA Banner */}
      <section className="mx-auto max-w-5xl px-6 pt-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#0e4143] px-8 py-8 text-center text-primary-foreground md:px-16 md:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,207,101,0.2),transparent_60%)]" />
          <div className="relative space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Need help choosing the right portfolio?
            </h3>
            <p className="mx-auto max-w-xl text-white/75 text-sm md:text-base">
              We&apos;ll recommend the best fit based on your goals in the app.
            </p>
            <div className="pt-2">
              <Button
                asChild
                className="h-12 rounded-full bg-gold px-8 text-black hover:bg-gold/90 font-bold shadow-md transition-all hover:scale-102"
              >
                <a
                  href="https://forms.gle/M4NrF9w9HSny4YR49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
