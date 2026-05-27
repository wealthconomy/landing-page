import { ShieldCheck, Smartphone, BookOpen, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Security & trust",
    body: "Your funds and transactions are protected with advanced industry standard security and compliance standards.",
  },
  {
    icon: Smartphone,
    title: "Intelligent products",
    body: "Goal-driven features and personalized insights that help you achieve your goals.",
  },
  {
    icon: Heart,
    title: "Inclusive impact",
    body: "Options for Halal-compliant and impact-focused saving so your money supports results you care about.",
  },
  {
    icon: BookOpen,
    title: "Expert Resources",
    body: "Access to financial literacy tools and resources.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Why Choose Wealthconomy
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            We are redefining how Africans save, invest, and grow wealth.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl border border-border bg-surface-soft/40 p-8 hover:bg-surface-soft transition-colors"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
