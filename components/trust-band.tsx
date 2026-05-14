import { ShieldCheck, Lock, Banknote, Headphones } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "CBN & NDIC aligned", body: "Funds custodied with regulated partner banks." },
  { icon: Lock, title: "Bank-grade encryption", body: "End-to-end TLS, 256-bit at rest, biometric login." },
  { icon: Banknote, title: "Easy withdrawals", body: "Pull eligible balances anytime — transparent terms." },
  { icon: Headphones, title: "Real human support", body: "24/7 in-app chat, response under 5 minutes." },
];

export function TrustBand() {
  return (
    <section className="border-y border-border bg-surface-soft/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Built to be trusted with your future.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-background p-6">
              <p.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
