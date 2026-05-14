const press = ["TechCabal", "BusinessDay", "Nairametrics", "TechPoint", "Stears", "Guardian Ng"];

export function PressLogos() {
  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">As featured in</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {press.map((p) => (
            <span key={p} className="font-display text-lg font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
