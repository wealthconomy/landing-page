import { ChevronRight, TrendingUp, ShieldCheck, Target, LineChart, Star, Calculator } from "lucide-react";

export function WiseUp() {
  return (
    <section id="wiseup" className="bg-background py-24 lg:py-32 overflow-hidden font-display">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            WiseUp · The Education Pillar
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-display">
            Knowledge is the <br className="hidden md:block" /> <span className="text-gold">highest-yielding asset.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A structured bank account is useless without a structured mind. Master the core principles of wealth-building through our integrated, byte-sized education modules.
          </p>
        </div>

        <div className="space-y-32">
          {/* Block 1: Compounding */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   The Mathematics of Wealth
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Understand exactly how time and consistency multiply your money. We break down the mechanics of compounding interest, showing you how small, automated contributions in your WealthFix portfolio turn into massive, life-changing milestones over time.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                Master Compounding <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* UI Graphic: WealthFix Compounding Card */}
            <div className="order-1 lg:order-2 relative h-[350px] w-full flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[60%] w-[280px] rounded-3xl bg-surface-soft border border-border shadow-2xl p-6 transform rotate-6 transition-transform duration-500 hover:rotate-12">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">WealthFix · 3 Years</p>
                 <div className="font-display text-3xl font-bold text-foreground mb-6">₦2,500,000</div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                       <span className="text-muted-foreground">Principal</span>
                       <span className="text-foreground">₦1,800,000</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                       <span className="text-muted-foreground">Compound Interest</span>
                       <span className="text-emerald-500">+₦700,000</span>
                    </div>
                 </div>
                 {/* Mini graph line */}
                 <svg className="w-full h-12 mt-4 text-emerald-500 opacity-80" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,30 Q20,28 40,20 T80,10 T100,0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                 </svg>
              </div>

              {/* Overlapping Notification */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[75%] translate-y-[15%] w-[320px] rounded-2xl bg-surface-soft backdrop-blur-xl border border-border shadow-2xl p-4 transition-transform duration-500 hover:-translate-y-2 hover:shadow-glow-teal z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                    <span className="font-display text-primary-foreground font-bold text-[10px]">W</span>
                  </div>
                  <span className="font-display text-xs font-bold text-foreground">WEALTHCONOMY</span>
                  <span className="text-xs text-muted-foreground ml-auto font-medium">now</span>
                </div>
                <p className="text-[13px] text-foreground/90 leading-tight">
                  <span className="font-bold text-emerald-500">+₦12,500 interest</span> compounded on your WealthFix. The snowball effect is active.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2: Structured Discipline / Hitting Targets */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Target className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   Structured Discipline
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Willpower is limited, but systems are infinite. Learn how to construct a foolproof financial framework. We teach you how to split your income, budget efficiently, and reach your emergency fund goals without feeling restricted.
              </p>
              <a href="#" className="inline-flex items-center text-gold font-semibold hover:text-gold/80 transition-colors">
                Learn Smart Allocation <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* UI Graphic: Target reached / Progress */}
            <div className="order-1 lg:order-1 relative h-[300px] w-full flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 w-[360px] rounded-3xl bg-surface-soft backdrop-blur-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 transition-transform duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-5">
                   <div className="p-2.5 rounded-full bg-gold/20 text-gold"><Target className="w-5 h-5"/></div>
                   <div>
                      <h4 className="font-display font-bold text-foreground text-sm">Emergency Fund</h4>
                      <p className="text-xs text-muted-foreground">Target: ₦2,000,000</p>
                   </div>
                </div>
                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-border mb-3 overflow-hidden">
                   <div className="h-full bg-gold rounded-full w-[85%]" />
                </div>
                <div className="flex justify-between text-xs font-medium mb-6">
                   <span className="text-foreground">₦1,700,000 saved</span>
                   <span className="text-gold">85%</span>
                </div>
                
                <div className="rounded-xl bg-background/50 border border-border p-3 flex items-start gap-3">
                   <div className="text-lg">🎉</div>
                   <p className="text-xs text-foreground/90 leading-relaxed">
                     By sticking to the 50/30/20 rule, you're projected to hit your goal <span className="font-bold text-gold">3 months early.</span>
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: Beating Inflation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
                    <ShieldCheck className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   Protect Your Power
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sitting cash loses value. We demystify the economy, cutting out the financial noise and teaching you actionable strategies to protect your purchasing power against inflation, ensuring your wealth outpaces the market.
              </p>
              <a href="#" className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-500/80 transition-colors">
                Beat Inflation <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            {/* Graphic: Crossed out "Inflation" */}
            <div className="order-1 lg:order-2 relative h-[300px] w-full flex items-center justify-center">
              <div className="relative inline-block select-none group">
                <span className="font-display text-[70px] sm:text-[90px] md:text-[110px] font-black text-foreground tracking-tight transition-transform duration-500 group-hover:scale-105">
                  Inflation
                </span>
                
                {/* Zigzag SVG path for crossing out */}
                <svg 
                  viewBox="0 0 400 120" 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] text-rose-500 overflow-visible pointer-events-none drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]"
                >
                  <path
                    d="M 0,90 L 50,30 L 100,90 L 150,30 L 200,90 L 250,30 L 300,90 L 350,30 L 400,90"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Block 4: Market Insights */}
          <div id="insights" className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <LineChart className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   Market Insights
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Stay ahead of the curve with curated market intelligence. We distill complex global trends into 
                actionable insights for the Nigerian professional, helping you identify emerging opportunities 
                before they go mainstream.
              </p>
              <a href="#" className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-500/80 transition-colors">
                View Latest Analysis <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="order-1 lg:order-1 relative h-[300px] w-full flex items-center justify-center">
              <div className="relative w-[340px] rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow-teal backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">Market Trend</span>
                  <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold text-blue-400">Bullish</span>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-3 last:border-0">
                      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: `${90 - i * 15}%` }} />
                      </div>
                      <span className="text-xs font-bold text-white">{90 - i * 15}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Block 5: Wealth Score */}
          <div id="score" className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Star className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   The Wealth Score
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Measure what matters. Your Wealth Score isn't just about your balance—it's a reflection of your 
                discipline, diversification, and trajectory. Understand your financial health through a single, 
                powerful metric.
              </p>
              <a href="#" className="inline-flex items-center text-gold font-semibold hover:text-gold/80 transition-colors">
                Calculate My Score <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[300px] w-full flex items-center justify-center">
              <div className="relative flex flex-col items-center justify-center rounded-full border-8 border-gold/20 h-64 w-64 shadow-glow-gold">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Score</span>
                <span className="text-7xl font-black text-foreground">842</span>
                <span className="mt-2 text-xs font-bold text-emerald-500 uppercase tracking-widest">Elite Tier</span>
              </div>
            </div>
          </div>

          {/* Block 6: Tax Efficiency */}
          <div id="tax" className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 max-w-xl mx-auto lg:mx-0">
               <div className="flex items-center gap-3 mb-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Calculator className="h-5 w-5" />
                 </div>
                 <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                   Tax Efficiency
                 </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Keep more of what you earn. Our tax-smart strategies help you structure your savings and 
                investments to minimize liabilities legally, ensuring your gross gains translate into the 
                highest possible net wealth.
              </p>
              <a href="#" className="inline-flex items-center text-emerald-500 font-semibold hover:text-emerald-500/80 transition-colors">
                Explore Tax Guides <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="order-1 lg:order-1 relative h-[300px] w-full flex items-center justify-center">
              <div className="relative w-[340px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                   <div className="text-sm font-bold text-white">Tax Optimization</div>
                   <div className="text-emerald-400 font-bold">+12% Yield</div>
                </div>
                <div className="space-y-4">
                   <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[60%]" />
                   </div>
                   <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[40%]" />
                   </div>
                </div>
                <p className="mt-6 text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                  Optimized for Nigerian Tax Code 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
