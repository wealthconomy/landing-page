import { ShieldCheck, Users, TrendingUp, Coins } from "lucide-react";

const stats = [
  { icon: Coins, value: "₦2.4B+", label: "Saved by members" },
  { icon: Users, value: "38,000+", label: "Active savers" },
  { icon: TrendingUp, value: "0", label: "Missed group payouts" },
  { icon: ShieldCheck, value: "CBN", label: "Aligned & compliant" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border bg-surface-soft/60 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <s.icon className="mb-3 h-6 w-6 text-primary" />
            <div className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
