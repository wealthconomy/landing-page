"use client";
import Link from "next/link";

export function ImpactCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-1/2 -translate-x-1/3 rounded-full bg-gold/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center rounded-3xl border border-white/10 bg-surface/50 p-12 md:p-20 backdrop-blur-xl shadow-2xl">
        <h2 className="font-display text-4xl font-bold md:text-6xl mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of other Wealthconomy members who are growing their wealth while funding meaningful change across Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-semibold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:shadow-[0_0_60px_rgba(20,184,166,0.5)]">
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Start Impact Saving
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          
          <Link href="/contact" className="group relative w-full sm:w-auto inline-flex h-16 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-transparent px-10 font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5">
            <span className="text-lg">Donate for Impact</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
