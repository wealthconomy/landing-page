import { Link2, Layers, Zap, LineChart } from "lucide-react";

const steps = [
  { icon: Link2, title: "Connect your bank", body: "Link your everyday account in under a minute. Bank-grade encryption end-to-end." },
  { icon: Layers, title: "Pick your portfolios", body: "Choose any mix of WealthFlex, WealthFix, WealthGoal, WealthGroup, WealthFam or WealthFlow." },
  { icon: Zap, title: "Automate discipline", body: "We auto-split every paycheck on your schedule — no willpower required." },
  { icon: LineChart, title: "Track & withdraw", body: "Watch your wealth compound on a unified dashboard. Withdraw on each portfolio's terms." },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface-soft/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            How it works
          </div>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            From paycheck to portfolio in <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">four steps</span>.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl border border-border bg-background/80 p-7 backdrop-blur-sm"
              style={{ animation: `portfolio-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow-teal">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-5xl font-bold text-primary/10">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
