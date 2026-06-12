"use client";

import { Heart, Scale, ShieldCheck } from "lucide-react";

const initiatives = [
  {
    title: "Donate for Impact",
    description: "Make direct contributions to our ongoing community projects. 100% of your donations go directly to funding women entrepreneurs, youth education, and community development.",
    icon: Heart,
    color: "from-rose-500/20 to-rose-500/0",
    iconColor: "text-rose-500",
  },
  {
    title: "Halal Savings",
    description: "Impact-aligned savings fully compliant with Islamic principles. Grow your wealth ethically while ensuring your funds support community-approved, positive results.",
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-500",
  },
  {
    title: "Mixed Savings",
    description: "Wealth with purpose. Grow your money with our high-yield plans, and automatically contribute a portion of your interest to the WealthPact initiative.",
    icon: Scale,
    color: "from-blue-500/20 to-blue-500/0",
    iconColor: "text-blue-500",
  },
];

export function ImpactInitiatives() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold md:text-5xl mb-6">How You Can Participate</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you want to donate directly or grow your wealth while making a difference, WealthPact offers multiple ways to create positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <div key={i} className="group relative rounded-3xl border border-border bg-surface p-8 transition-all hover:bg-surface-soft hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
              <div className={`absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-bl ${item.color} -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700`} />
              
              <div className="relative z-10">
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-background border border-border shadow-sm ${item.iconColor}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {item.description}
                </p>
                
                <button className={`font-semibold ${item.iconColor} flex items-center gap-2 group/btn`}>
                  Learn more 
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
