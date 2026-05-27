"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

import { Calculator, FileText, Rss, Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "Save", to: "/portfolios" as const },
  // { label: "Learn", to: "/learn" as const },
  { label: "Invest", to: "/wealthup" as const },
  { label: "Impact", to: "/#impact" as const },
  { label: "FAQ", to: "/#faq" as const },
];

const resourcesItems = [
  {
    label: "Calculator",
    to: "/resources/calculator",
    icon: Calculator,
    desc: "Calculate your wealth projection.",
  },
  {
    label: "Reports",
    to: "/resources/reports",
    icon: FileText,
    desc: "Market trends and financial reports.",
  },
  {
    label: "Blogs",
    to: "/blog",
    icon: Rss,
    desc: "Insights and tips for wealth building.",
  },
  {
    label: "Newsletters",
    to: "/resources/newsletters",
    icon: Mail,
    desc: "Subscribe to our latest updates.",
  },
];

const aboutItem = { label: "About Us", to: "/about" as const };

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

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
        style={{ "--x": `${mousePos.x}px`, "--y": `${mousePos.y}px` } as any}
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-105"
        >
          <img src={logo.src} alt="Wealthconomy" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Resources{" "}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="w-[320px] rounded-3xl border border-border bg-background/95 p-3 shadow-glow-teal backdrop-blur-xl">
                  <div className="space-y-1 p-2">
                    {resourcesItems.map((p) => (
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
                </div>
              </div>
            )}
          </div>

          <Link
            href={aboutItem.to}
            className={`relative text-sm transition-colors hover:text-foreground ${pathname === aboutItem.to ? "text-foreground font-medium" : "text-muted-foreground"}`}
          >
            {aboutItem.label}
            {pathname === aboutItem.to && (
              <span className="absolute -bottom-2 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
            )}
          </Link>
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
            className="hidden md:flex group h-10 rounded-full px-5 transition-transform hover:scale-105 active:scale-95"
          >
            <a
              href="https://forms.gle/M4NrF9w9HSny4YR49"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Saving
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-soft text-foreground transition-all hover:bg-surface-soft/80 active:scale-95"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Custom Smooth Mobile Drawer (Portaled to body to escape header's stacking context) */}
      {mounted &&
        createPortal(
          <>
            <div
              className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
                mobileOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMobileOpen(false)}
            />

            <div
              className={`fixed inset-y-0 right-0 z-[100] w-[85vw] max-w-[360px] bg-background/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
                mobileOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-full flex-col overflow-y-auto px-6 py-8">
                <Link
                  href="/"
                  className="flex items-center mb-10"
                  onClick={() => setMobileOpen(false)}
                >
                  <img
                    src={logo.src}
                    alt="Wealthconomy"
                    className="h-8 w-auto"
                  />
                </Link>

                <nav className="flex flex-1 flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-primary ${pathname === item.to ? "text-primary" : "text-foreground"}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-semibold">
                      Resources
                    </p>
                    <div className="flex flex-col gap-5">
                      {resourcesItems.map((p) => (
                        <Link
                          key={p.label}
                          href={p.to}
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-center gap-4 text-base font-medium text-foreground hover:text-primary transition-colors"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft border border-border group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                            <p.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border mt-auto">
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-full border border-border bg-surface-soft px-4 py-3 text-center text-sm font-medium text-foreground hover:bg-surface-soft/80 transition-colors"
                      >
                        Contact us
                      </Link>
                      <Button
                        asChild
                        className="rounded-full h-12 w-full bg-primary hover:bg-primary-glow text-white shadow-glow-teal"
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
                </nav>
              </div>
            </div>
          </>,
          document.body,
        )}
    </header>
  );
}
