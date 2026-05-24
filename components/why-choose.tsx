import { ShieldCheck, Smartphone, Target, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure transactions",
    body: "Built on rigorous compliance standards to ensure your funds and data are always protected.",
  },
  {
    icon: Smartphone,
    title: "User-friendly experience",
    body: "An intuitive interface designed to make wealth management simple, accessible, and completely stress-free.",
  },
  {
    icon: Target,
    title: "Wealth building with purpose",
    body: "Save and invest toward your goals while contributing to impactful community initiatives.",
  },
  {
    icon: BookOpen,
    title: "Financial education tools",
    body: "Access tailored insights, interactive tests, and rich content to boost your financial literacy.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Why Choose Wealthconomy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are redefining how Africans save, invest, and grow wealth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl border border-border bg-surface-soft/40 p-8 hover:bg-surface-soft transition-colors"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
