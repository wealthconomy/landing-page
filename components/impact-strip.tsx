import { Sprout, HandHeart, Globe } from "lucide-react";

const items = [
  { icon: Sprout, title: "Cause-linked goals", body: "Pledge a slice of every payout to a cause you care about, automatically." },
  { icon: HandHeart, title: "Community pools", body: "Communal saving pools that fund member emergencies before they become crises." },
  { icon: Globe, title: "Verified impact", body: "Track real-world outcomes from your contributions, reported on a quarterly cadence." },
];

export function ImpactStrip() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              Impact growth
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Wealth that <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">lifts others</span> too.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every Wealthconomy portfolio can route a sliver of its growth into community, climate, or family-of-choice causes, without slowing your own progress.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {items.map((it, i) => (
              <div
                key={it.title}
                className="rounded-3xl border border-border bg-surface-soft/60 p-6"
                style={{ animation: `portfolio-slide-up 0.5s ease ${i * 0.08}s both` }}
              >
                <it.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
