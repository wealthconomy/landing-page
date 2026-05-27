import { LockKeyhole, BadgeCheck, Fingerprint, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function Trust() {
  return (
    <section id="trust" className="bg-background py-14 lg:py-20 overflow-hidden border-t border-border relative">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="security-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#security-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span>Trust & Security</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Your wealth, <span className="text-muted-foreground">impenetrable.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We employ bank-grade security protocols, uncompromising compliance, and biometric locks to ensure your money and data are completely protected.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Large Card: Encryption (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 rounded-[2rem] border border-border bg-surface-soft p-8 md:p-12 relative overflow-hidden group">
            {/* Glowing abstract background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col h-full min-h-[280px]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background/50 border border-border backdrop-blur-md transition-transform duration-500 group-hover:scale-110 text-primary">
                  <LockKeyhole className="h-8 w-8" />
                </div>
                {/* Decorative dots to simulate encryption running */}
                <div className="flex gap-1.5 opacity-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-150" />
                </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Military-Grade Encryption
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Your data is shielded by AES-256 bit encryption and strict TLS protocols. We secure millions of transactions flawlessly, ensuring your financial privacy is mathematically guaranteed.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column for smaller cards */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            
            {/* Top Right Card: Regulation */}
            <div className="flex-1 rounded-[2rem] border border-border bg-surface-soft p-8 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold/20 blur-[50px] rounded-full transition-colors duration-700 group-hover:bg-gold/30" />
              
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/50 border border-border backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 text-gold mb-6">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <h4 className="font-display text-2xl font-bold text-foreground mb-3">Fully Regulated</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your capital is fully insured and monitored by CBN & NDIC standards. Zero risk of institutional failure.
                </p>
              </div>
            </div>
            
            {/* Bottom Right Card: Access */}
            <div className="flex-1 rounded-[2rem] border border-border bg-surface-soft p-8 relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-rose-500/20 blur-[50px] rounded-full transition-colors duration-700 group-hover:bg-rose-500/30" />
              
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/50 border border-border backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1 text-rose-500 mb-6">
                  <Fingerprint className="h-6 w-6" />
                </div>
                <h4 className="font-display text-2xl font-bold text-foreground mb-3">Ironclad Access</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Multi-factor authentication and strict biometric locks ensure that absolutely no one but you can move your money.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
