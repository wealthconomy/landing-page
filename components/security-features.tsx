import { ShieldCheck, Lock, Fingerprint, FileCheck, Eye, ServerCog } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Regulator-aligned custody", body: "Funds held with CBN-licensed partner institutions, NDIC-aware structuring on all custodial accounts." },
  { icon: Lock, title: "256-bit AES at rest", body: "Every record, including balances, transactions, and KYC, is encrypted at rest. TLS 1.3 in transit." },
  { icon: Fingerprint, title: "Biometric + 2FA", body: "Face ID, fingerprint, and TOTP authentication on every sensitive action." },
  { icon: FileCheck, title: "On-platform receipts", body: "Every transaction generates a verifiable, exportable receipt, useful for taxes and audits." },
  { icon: Eye, title: "Transparent rules", body: "Every portfolio's mechanics, including rates, locks, and fees, are documented in plain English in-app." },
  { icon: ServerCog, title: "Continuous monitoring", body: "24/7 fraud monitoring, anomaly detection, and quarterly third-party penetration tests." },
];

export function SecurityFeatures() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            Security
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Trusted with your <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">future</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Your wealth deserves more than promises. Here's exactly how we protect it from top to bottom.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-3xl border border-border bg-surface-soft/60 p-7"
              style={{ animation: `portfolio-slide-up 0.5s ease ${i * 0.06}s both` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
