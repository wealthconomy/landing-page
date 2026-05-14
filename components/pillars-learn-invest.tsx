import Link from "next/link";
import { GraduationCap, TrendingUp, ArrowUpRight } from "lucide-react";

export function PillarsLearnInvest() {
  return (
    <section className="bg-surface-soft/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Learn the game. <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Then play it.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            WiseUp turns you into a more confident saver. WealthUp turns those savings into investable capital.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Link
            href="/learn"
            className="group relative overflow-hidden rounded-3xl border border-border bg-background p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-teal"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">WiseUp</h3>
              <p className="mt-3 text-muted-foreground">
                Bite-sized financial literacy — bookkeeping, budgeting, debt, taxes — taught by people who've actually built wealth.
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore lessons <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link
            href="/wealthup"
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-[#0e4143] p-10 text-primary-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-teal"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,207,101,0.25),transparent_60%)]" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold backdrop-blur-sm">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">WealthUp</h3>
              <p className="mt-3 text-white/75">
                Curated investment opportunities — fixed income, real-estate notes, agri-funds — vetted and structured for everyday savers.
              </p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                See opportunities <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
