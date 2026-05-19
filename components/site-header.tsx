"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Wallet,
  Lock,
  Target,
  Users,
  Heart,
  Repeat,
  GraduationCap,
  TrendingUp,
  Workflow,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/wealthconomy-logo-new.png";

const productItems = [
  {
    label: "Portfolios",
    to: "/portfolios" as const,
    icon: Wallet,
    desc: "Six structured savings rhythms.",
  },
  {
    label: "How it works",
    to: "/how-it-works" as const,
    icon: Workflow,
    desc: "Paycheck to portfolio in 4 steps.",
  },
  {
    label: "WealthUp",
    to: "/wealthup" as const,
    icon: TrendingUp,
    desc: "Vetted investment opportunities.",
  },
  {
    label: "WiseUp",
    to: "/learn" as const,
    icon: GraduationCap,
    desc: "Bite-sized financial literacy.",
  },
  {
    label: "Security",
    to: "/security" as const,
    icon: ShieldCheck,
    desc: "How we protect your wealth.",
  },
];

const portfolioPeek = [
  {
    icon: Wallet,
    name: "WealthFlex",
    to: "/portfolios" as const,
    hash: "flex",
  },
  { icon: Lock, name: "WealthFix", to: "/portfolios" as const, hash: "fix" },
  {
    icon: Target,
    name: "WealthGoal",
    to: "/portfolios" as const,
    hash: "goal",
  },
  {
    icon: Users,
    name: "WealthGroup",
    to: "/portfolios" as const,
    hash: "group",
  },
  { icon: Heart, name: "WealthFam", to: "/portfolios" as const, hash: "fam" },
  {
    icon: Repeat,
    name: "WealthFlow",
    to: "/portfolios" as const,
    hash: "flow",
  },
];

const navItems = [
  { label: "About", to: "/about" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "FAQ", to: "/#faq" as const },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <header 
      onMouseMove={handleMouseMove}
      className="group sticky top-0 z-50 w-full border-b border-white/[0.05] bg-background/60 backdrop-blur-xl transition-all duration-300"
    >
      <div 
        className="mouse-light opacity-0 group-hover:opacity-100" 
        style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any}
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <img src={logo.src} alt="Wealthconomy" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Products{" "}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="grid w-[640px] grid-cols-2 gap-2 rounded-3xl border border-border bg-background/95 p-3 shadow-glow-teal backdrop-blur-xl">
                  <div className="space-y-1 p-2">
                    {productItems.map((p) => (
                      <Link
                        key={p.label}
                        href={p.to}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-soft"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <p.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{p.label}</div>
                          <div className="text-xs text-muted-foreground">
                            {p.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-surface-soft/60 p-4">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      Portfolios
                    </div>
                    <div className="mt-3 grid gap-1">
                      {portfolioPeek.map((p) => (
                        <Link
                          key={p.name}
                          href={`${p.to}#${p.hash}`}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-background"
                        >
                          <p.icon className="h-4 w-4 text-primary" />
                          <span>{p.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.to}
              className={`relative text-sm transition-colors hover:text-foreground ${pathname === item.to ? "text-foreground font-medium" : "text-muted-foreground"}`}
            >
              {item.label}
              {pathname === item.to && (
                <span className="absolute -bottom-2 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm hover:bg-surface-soft hover:text-foreground transition-all sm:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Contact us
          </Link>
          <Button
            size="sm"
            asChild
            className="group h-10 rounded-full px-5 transition-transform hover:scale-105 active:scale-95"
          >
            <Link href="/waitlist">
              Join the waitlist
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
