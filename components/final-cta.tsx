import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-40">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#155D5F]/20 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFCF65]/10 blur-[120px]" />
        {/* Subtle geometric lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-xl mb-10">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#FFCF65]" />
          <span>Join 50,000+ Smart Savers</span>
        </div>

        <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tighter text-white md:text-7xl lg:text-8xl">
          Start building your <br className="hidden md:block" />
          <span className="text-[#FFCF65]">wealth legacy</span> today.
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-lg text-white/60 md:text-xl leading-relaxed">
          Wealthconomy provides the structure and discipline you need to
          transform your financial habits into lasting freedom.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="h-14 rounded-full bg-white px-10 text-black hover:bg-white/90 font-bold transition-all hover:scale-105 active:scale-95"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))
            }
          >
            Start for free
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-14 rounded-full border-white/20 bg-transparent px-10 text-white hover:bg-white/5 font-bold transition-all hover:scale-105 active:scale-95"
          >
            <a
              href="https://forms.gle/M4NrF9w9HSny4YR49"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Saving
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
