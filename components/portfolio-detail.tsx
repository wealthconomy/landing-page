import { Wallet, Lock, Target, Users, Heart, Repeat, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolios = [
  {
    id: "flex",
    icon: Wallet,
    name: "WealthFlex",
    tagline: "Don’t be stranded...",
    body: "Flexible savings to meet your emergency needs. Earn or Impact while keeping cash accessible for unexpected needs. Perfect for an emergency buffer without penalties.",
    rate: "Daily Accrual",
    perks: ["Instant withdrawals", "7 free withdrawals / month", "Interest/Impact accrues daily"],
    cta: "Start flexible saving",
  },
  {
    id: "flow",
    icon: Repeat,
    name: "WealthFlow",
    tagline: "Consistency without stress",
    body: "Automate transfers so your savings grow without thinking about it. Automate your savings and go to sleep while your wealth accumulates.",
    rate: "Automated Flow",
    perks: [
      "Set a schedule (daily, weekly, monthly)",
      "Link a funding source",
      "Automate transfers seamlessly",
      "Review progress, pause or adjust anytime"
    ],
    cta: "Automate my savings",
  },
  {
    id: "goal",
    icon: Target,
    name: "WealthGoal",
    tagline: "Save with discipline and smash your goals",
    body: "Create a targeted savings plan and save manually or trigger auto-debit for it. Keeps you motivated until you hit the goal.",
    rate: "Goal-tracked",
    perks: [
      "Create a goal (trip, tuition, down payment)",
      "Choose a target amount and deadline",
      "Save manually or enable auto-debit to stay on track",
      "Receive visual progress and reminders"
    ],
    cta: "Create a goal",
  },
  {
    id: "fix",
    icon: Lock,
    name: "WealthFix",
    tagline: "Locked savings for guaranteed returns",
    body: "Stay disciplined and fix your money or savings for guaranteed returns. Locks in your savings for a fixed term that matches your plan.",
    rate: "Guaranteed Returns",
    perks: [
      "Lock in your savings for a fixed term",
      "Choose the term length that matches your plan",
      "No withdrawals until maturity",
      "Reward for discipline and penalty for default"
    ],
    cta: "Lock and grow",
  },
  {
    id: "fam",
    icon: Heart,
    name: "WealthFam",
    tagline: "Build financial security for those you love",
    body: "Create dedicated savings plans for family and friends, including spouses and kids. Manage contributions and set individual goals.",
    rate: "Shared Legacy",
    perks: [
      "Create plans for spouses, children, or relatives",
      "Manage contributions",
      "Set individual goals"
    ],
    cta: "Start a family plan",
  },
  {
    id: "group",
    icon: Users,
    name: "WealthGroup",
    tagline: "Collective saving made easy",
    body: "Save together as a group. Friends, staff, cooperatives use this for secure and transparent group savings.",
    rate: "Transparent Ajo",
    perks: [
      "Create or join a group with friends, colleagues or community members",
      "Set contribution rules, timelines and shared goals",
      "Track group progress"
    ],
    cta: "Start a Group, Join a Group",
  },
];

export function PortfolioDetail() {
  return (
    <div className="space-y-20 py-20 lg:space-y-32 lg:py-28">
      {portfolios.map((p, i) => (
        <section key={p.id} id={p.id} className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-last" : ""}`}>
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-5xl">{p.name}</h2>
                <p className="mt-3 text-xl text-primary font-semibold">{p.tagline}</p>
                <p className="mt-5 text-muted-foreground">{p.body}</p>
                
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild className="rounded-full gap-2">
                    <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                      {p.cta} <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 to-gold/10 blur-2xl" />
                <div className="relative rounded-3xl border border-border bg-card p-8 shadow-glow-teal">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Ecosystem features</div>
                  <div className="mt-2 font-display text-3xl font-semibold tracking-tight text-primary">{p.rate}</div>
                  <div className="mt-8 h-px bg-border" />
                  <div className="mt-6 grid gap-2 text-sm">
                    {p.perks.slice(0, 3).map((perk) => (
                      <div key={perk} className="flex items-center justify-between rounded-xl bg-surface-soft/60 px-4 py-3">
                        <span className="text-muted-foreground">{perk}</span>
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom Recommendation Banner */}
      <section className="mx-auto max-w-5xl px-6 pt-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#0e4143] px-8 py-12 text-center text-primary-foreground md:px-16 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,207,101,0.2),transparent_60%)]" />
          <div className="relative space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Need help choosing the right portfolio?
            </h3>
            <p className="mx-auto max-w-xl text-white/75 text-sm md:text-base">
              We’ll recommend the best fit based on your goals in the app.
            </p>
            <div className="pt-2">
              <Button asChild className="h-12 rounded-full bg-gold px-8 text-black hover:bg-gold/90 font-bold">
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
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
