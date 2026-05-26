import { UserPlus, Layers, LineChart } from "lucide-react";
import phoneHome from "@/assets/phone-home.png";

const steps = [
  { icon: UserPlus, title: "Create Your Account", body: "Sign up in minutes using your phone number or email." },
  { icon: Layers, title: "Choose Your Wealth Portfolio", body: "Choose the type of savings and what you want to save towards and customize your plan." },
  { icon: LineChart, title: "Save Consistently & Grow", body: "Automate savings, monitor progress, and build wealth" },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface-soft/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              How it works
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Start Building Wealth in <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">3 Easy Steps</span>
            </h2>
            
            <div className="mt-12 space-y-8">
              {steps.map((s, i) => (
                <div key={s.title} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/80 shadow-soft group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    {i !== steps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-border to-transparent mt-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-bold text-primary mb-1">Step 0{i + 1}</div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[280px] lg:max-w-[300px] aspect-[1/2.16] bg-gray-950 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-900/10">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-40 flex items-center justify-between px-2 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-gray-800/80" />
              <div className="w-2 h-2 rounded-full bg-blue-900/40" />
            </div>

            {/* Pinned Top Bar (Status Bar ONLY) */}
            <div 
              className="absolute top-0 left-0 w-full h-[6.5%] z-30 bg-no-repeat bg-background"
              style={{ backgroundImage: `url(${phoneHome.src})`, backgroundSize: '100% auto', backgroundPosition: 'top center' }}
            >
              {/* Optional slight drop shadow overlay to hide scroll seam */}
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-b from-black/5 to-transparent" />
            </div>

            {/* Pinned Bottom Bar (Nav Bar) */}
            <div 
              className="absolute bottom-0 left-0 w-full h-[12%] z-30 bg-no-repeat"
              style={{ backgroundImage: `url(${phoneHome.src})`, backgroundSize: '100% auto', backgroundPosition: 'bottom center' }}
            >
              {/* Optional slight drop shadow overlay to hide scroll seam */}
              <div className="absolute -top-2 left-0 w-full h-2 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
            
            {/* Scrolling Screen Content */}
            <div 
              className="absolute inset-0 w-full h-full bg-no-repeat animate-app-scroll z-10"
              style={{ backgroundImage: `url(${phoneHome.src})`, backgroundSize: '100% auto' }}
            />
            
            {/* Screen Glare (Realistic touch) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-50" />
          </div>
        </div>

      </div>
    </section>
  );
}
