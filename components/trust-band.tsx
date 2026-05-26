import { ShieldCheck, Lock, Zap, FileText, Headphones, Building2, Server } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "CBN & NDIC aligned", body: "Funds custodied with regulated partner banks" },
  { icon: Server, title: "Data privacy protection", body: "Bank grade encryption" },
  { icon: Zap, title: "Easy & secure transactions", body: "Easy and secure transaction infrastructure" },
  { icon: FileText, title: "Reliable transaction records", body: "Transparent and accessible logs" },
  { icon: Headphones, title: "Customer support you can trust", body: "Dedicated support team at hello@wealthconomy.org" },
];

export function TrustBand() {
  return (
    <section className="border-y border-border bg-surface-soft/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Your Money. Your Trust. Our Priority.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Wealthconomy is committed to security of funds, transparency, and responsible financial management. We leverage secure infrastructure and best practices to protect user funds and data.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-background p-6 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
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
