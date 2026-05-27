"use client";

import {
  Wallet, Lock, Target, Users, Heart, Repeat, Check, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolios = [
  {
    id: "flex",
    icon: Wallet,
    name: "WealthFlex",
    tagline: "Emergency buffer with maximum access",
    bestFor: "The Cautious Saver",
    body: "Flexible savings to meet your emergency needs. Earn competitive yield while keeping your cash accessible for unexpected expenses with zero penalty fees.",
    howItWorks: "WealthFlex gives you the best of both worlds: daily yield accrual and instant access. Set up an emergency buffer, customize your withdrawal rules, and save with the confidence that your funds are available 24/7.",
    rate: "Flexible",
    steps: [
      "Deposit any amount into your WealthFlex savings wallet.",
      "Earn daily yield, updated and paid out every month.",
      "Withdraw instantly at any time with zero penalties.",
    ],
    perks: [
      "Instant withdrawals with zero penalty fees",
      "Up to 7 free withdrawals every month",
      "Interest accrues daily, paid out monthly",
      "Easily roll over to WealthFix or WealthGoal",
    ],
    cta: "Start flexible saving",
    glowColor: "from-red-500/20 via-rose-400/10 to-transparent",
  },
  {
    id: "flow",
    icon: Repeat,
    name: "WealthFlow",
    tagline: "Consistency and automation without the stress",
    bestFor: "The Busy Professional",
    body: "Automate your savings and watch your wealth grow without thinking about it. Link your card, choose a frequency, and relax.",
    howItWorks: "WealthFlow automates your savings based on your custom schedule. Link your bank card or funding source, choose how much you want to save, and set the frequency (daily, weekly, monthly). WealthFlow handles the rest silently in the background.",
    rate: "Automated",
    steps: [
      "Link your debit card or preferred funding source.",
      "Set your frequency (daily, weekly, monthly) and amount.",
      "Relax as WealthFlow accumulates your savings in the background.",
    ],
    perks: [
      "Set custom schedules (daily, weekly, monthly)",
      "Link multiple funding cards or bank accounts",
      "Automate transfers seamlessly with bank-grade security",
      "Pause, resume, or adjust savings amount anytime",
    ],
    cta: "Automate my savings",
    glowColor: "from-sky-500/20 via-blue-400/10 to-transparent",
  },
  {
    id: "goal",
    icon: Target,
    name: "WealthGoal",
    tagline: "Targeted savings to smash your milestones",
    bestFor: "The Big-Ticket Planner",
    body: "Create purpose-driven savings plans for specific targets. Save manually or automate debits to stay on track until you cross the finish line.",
    howItWorks: "Whether you are saving for a new laptop, rent, a vacation, or school tuition, WealthGoal helps you stay motivated. Choose a target amount, set a deadline, and track your visual progress with milestone rewards.",
    rate: "Goal-tracked",
    steps: [
      "Create a savings goal (e.g. Travel, Rent, Laptop).",
      "Set your target amount and completion deadline.",
      "Save manually or enable automated milestone debits.",
    ],
    perks: [
      "Create custom goals (vacation, tuition, devices, rent)",
      "Define target amount and deadline for each goal",
      "Save manually or enable goal-based auto-debit",
      "Visual progress trackers, milestone badges, and reminders",
    ],
    cta: "Create a goal",
    glowColor: "from-pink-500/20 via-rose-400/10 to-transparent",
  },
  {
    id: "fix",
    icon: Lock,
    name: "WealthFix",
    tagline: "Locked vaults to enforce ultimate discipline",
    bestFor: "The Impulsive Saver",
    body: "Stay disciplined and fix your money or savings for guaranteed premium returns. Locks in your savings for a fixed term that matches your plan.",
    howItWorks: "If you struggle with the temptation to spend your savings, WealthFix is the perfect solution. Lock your funds for a specific period (3 to 12 months) at our highest interest rate. No early withdrawals allowed, enforcing total savings discipline.",
    rate: "Locked Vault",
    steps: [
      "Choose your locked duration (3, 6, or 12 months).",
      "Deposit your principal capital into the discipline vault.",
      "Unlock capital plus your premium returns at maturity.",
    ],
    perks: [
      "Lock funds for fixed periods (3, 6, or 12 months)",
      "Earn our highest premium interest rates",
      "Strict maturity lock with no early withdrawals allowed",
      "Solid interest accumulation with zero default risk",
    ],
    cta: "Lock and grow",
    glowColor: "from-amber-500/20 via-yellow-400/10 to-transparent",
  },
  {
    id: "fam",
    icon: Heart,
    name: "WealthFam",
    tagline: "Securing the future for the ones you love",
    bestFor: "The Legacy Builder",
    body: "Create dedicated savings plans for family and friends, including spouses and kids. Manage contributions and set individual goals.",
    howItWorks: "WealthFam is designed for cooperative family savings. Secure your children's school fees, pool funds with your spouse for a family project, or support relatives. Set separate targets, monitor joint contributions, and build a lasting family foundation.",
    rate: "Shared Pool",
    steps: [
      "Create a family vault (e.g. Kids School Fees).",
      "Invite spouse, children, or relatives via secure code.",
      "Co-contribute and track progress collectively.",
    ],
    perks: [
      "Create plans for spouses, children, or relatives",
      "Multiple contributors can add money to the same pool",
      "Track progress individually or collectively",
      "Separate vaults for different family needs (tuition, welfare)",
    ],
    cta: "Start a family plan",
    glowColor: "from-purple-500/20 via-violet-400/10 to-transparent",
  },
  {
    id: "group",
    icon: Users,
    name: "WealthGroup",
    tagline: "Cooperative, rotational savings digitized",
    bestFor: "The Social Saver",
    body: "Save together as a group. Friends, staff, and cooperatives use this for secure, transparent, and automated rotational payouts.",
    howItWorks: "WealthGroup digitizes the traditional Ajo/Esusu rotational savings system. Bring your friends, colleagues, or market association members together. Our smart contract engine automates collections, schedules rotation cycles, and manages payouts transparently.",
    rate: "Rotational",
    steps: [
      "Start a new savings group or join via invite link.",
      "Set group contribution limits and rotational payout cycles.",
      "Automate collections and rotational payouts directly to bank accounts.",
    ],
    perks: [
      "Create or join a group with customized rules and cycles",
      "Automatic rotational payouts (Ajo / Esusu style)",
      "Secure and transparent ledger of all contributions",
      "Direct bank payouts to the scheduled recipient",
    ],
    cta: "Start or Join a Group",
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

function PhoneFrame({ id, name, glowColor }: { id: string; name: string; glowColor: string }) {
  const src = portfolioScreenshots[id];
  return (
    <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] select-none">
      {/* Ambient glow behind phone */}
      <div
        className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full blur-3xl bg-gradient-to-b ${glowColor} pointer-events-none opacity-80`}
      />

      {/* Phone shell — exact same as how-it-works */}
      <div
        className="relative w-full aspect-[1/2.16] bg-gray-950 rounded-[2rem] lg:rounded-[3rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-900/10"
      >
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
                      Join the Waitlist <ChevronRight className="h-4 w-4" />
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
