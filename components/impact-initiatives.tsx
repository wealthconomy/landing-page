export function ImpactInitiatives() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Core Initiatives</h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
          Driving measurable change across key sectors through dedicated funding and community support.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Women Empowerment", desc: "Funding female-led SMEs and micro-businesses across Africa." },
          { title: "Youth Financial Literacy", desc: "Educating thousands of young professionals on savings and investment principles." },
          { title: "Community Grants", desc: "Direct support for underprivileged communities to build sustainable livelihoods." },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-3xl border border-border bg-surface-soft/30 hover:border-primary/30 transition-all">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
