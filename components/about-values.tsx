import { Lock, Scale, Network, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Uncompromising Discipline",
    desc: "We don't just encourage saving; we enforce it through structured rhythms and accountability.",
  },
  {
    icon: Scale,
    title: "Radical Transparency",
    desc: "Every member sees exactly where they stand. Fair rotation, clear payouts, and no hidden rules.",
  },
  {
    icon: Network,
    title: "Communal Growth",
    desc: "Wealth is a team sport. We believe in the power of the collective to pull everyone forward.",
  },
  {
    icon: TrendingUp,
    title: "Generational Legacy",
    desc: "We are playing the long game. Everything we build is designed to outlast the current cycle.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            The principles that <br />
            <span className="text-primary">guide our code.</span>
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => (
            <div
              key={val.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface-soft/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-teal"
              style={{ animation: `portfolio-slide-up 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <val.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-8 font-display text-xl font-bold text-foreground">{val.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
