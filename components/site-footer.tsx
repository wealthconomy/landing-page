"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  CheckCircle2,
  QrCode,
  Globe,
  Zap,
  Mail,
  ArrowUpRight,
  Sparkles,
  Lock,
  Award,
} from "lucide-react";
import logo from "@/assets/wealthconomy-logo-new.png";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] text-white">
      {/* Ambient gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px] animate-pulse-slow" />
        <div className="absolute -bottom-[20%] -right-[5%] h-[600px] w-[600px] rounded-full bg-gold/10 blur-[160px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at top, black, transparent 70%)",
          }}
        />
      </div>

      {/* Big CTA strip */}
      <div className="relative px-6 pt-24 pb-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/70 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Structured Wealth, Simplified
            </div>
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Start building <br />
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                wealth that lasts.
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#waitlist"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.5)]"
            >
              Start for free
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:bg-white/10"
            >
              See a demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Glass card */}
      <div className="relative px-3 pb-6 lg:px-6">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/[0.04] to-transparent" />
          <div className="pointer-events-none absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative px-7 py-12 lg:px-14 lg:py-16">
            {/* Top row: logo + meta */}
            <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center">
              <div className="flex items-center gap-5">
                <img src={logo.src} alt="Wealthconomy" className="h-9 w-auto" />
                <span className="hidden h-7 w-px bg-white/15 md:block" />
                <span className="text-xs font-medium text-white/50">
                  a structured wealth company
                </span>
              </div>
              <div className="text-xs font-medium tracking-wide text-white/40">
                {currentYear} © Wealthconomy Technologies Limited
              </div>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-14 pt-14 md:grid-cols-3 lg:grid-cols-6">
              {/* Get started + social + newsletter */}
              <div className="col-span-2 lg:col-span-2">
                <FooterHeading>Get Started</FooterHeading>
                <ul className="space-y-3.5 mb-10">
                  <FooterLink href="/#waitlist" primary>
                    Create an account
                  </FooterLink>
                  <FooterLink href="/#waitlist">Sign in</FooterLink>
                  <FooterLink href="/contact">Book a strategist</FooterLink>
                </ul>

                <FooterHeading>Stay in touch</FooterHeading>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="group mb-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 pl-4 backdrop-blur-xl transition-all focus-within:border-white/30 focus-within:bg-white/[0.07]"
                >
                  <Mail className="h-4 w-4 text-white/40" />
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-black transition-all hover:scale-105"
                  >
                    Join
                  </button>
                </form>

                <div className="flex items-center gap-3">
                  <SocialIcon icon={Twitter} href="#" />
                  <SocialIcon icon={Instagram} href="#" />
                  <SocialIcon icon={Linkedin} href="#" />
                </div>
              </div>

              <div>
                <FooterHeading>Products</FooterHeading>
                <ul className="space-y-3.5">
                  {[
                    { label: "WealthFix", to: "/portfolios#fix" },
                    { label: "WealthGroup", to: "/portfolios#group" },
                    { label: "WealthGoal", to: "/portfolios#goal" },
                    { label: "WealthFlex", to: "/portfolios#flex" },
                    { label: "WealthFam", to: "/portfolios#fam" },
                    { label: "Emergency", to: "/portfolios#emergency" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              <div>
                <FooterHeading>Use Cases</FooterHeading>
                <ul className="space-y-3.5">
                  {[
                    { label: "Disciplined Saving", to: "/portfolios#fix" },
                    { label: "Group Contributions", to: "/portfolios#group" },
                    { label: "Goal Funding", to: "/portfolios#goal" },
                    { label: "Family Vault", to: "/portfolios#fam" },
                    { label: "Auto-Investing", to: "/wealthup" },
                    { label: "Legacy Planning", to: "/about" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              <div>
                <FooterHeading>Company</FooterHeading>
                <ul className="space-y-3.5 mb-10">
                  {[
                    { label: "About Us", to: "/about" },
                    { label: "Pricing", to: "/pricing" },
                    { label: "Trust Center", to: "/security" },
                    { label: "Contact", to: "/contact" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
                <FooterHeading>Legal</FooterHeading>
                <ul className="space-y-3.5">
                  {[
                    { label: "Privacy Policy", to: "/privacy" },
                    { label: "Terms of Use", to: "/terms" },
                    { label: "Cookies", to: "/cookies" },
                    { label: "Disclaimer", to: "/terms" },
                    { label: "Security", to: "/security" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              <div>
                <FooterHeading>Resources</FooterHeading>
                <ul className="space-y-3.5 mb-10">
                  {[
                    { label: "WiseUp Hub", to: "/learn" },
                    { label: "Success Stories", to: "/company" },
                    { label: "Security", to: "/security" },
                    { label: "Support Desk", to: "/contact" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
                <FooterHeading>Intelligence</FooterHeading>
                <ul className="space-y-3.5">
                  {[
                    { label: "Market Insights", to: "/learn#insights" },
                    { label: "Wealth Score", to: "/learn#score" },
                    { label: "Tax Efficiency", to: "/learn#tax" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>

            {/* Compliance + QR */}
            <div className="mt-16 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 lg:flex-row lg:items-center">
              <div className="flex flex-wrap items-center gap-5">
                <ComplianceBadge icon={Shield} label="Military-Grade" sub="ENCRYPTION" />
                <ComplianceBadge icon={CheckCircle2} label="ISO 27001" sub="CERTIFIED" />
                <ComplianceBadge icon={Globe} label="Data Sovereignty" sub="COMPLIANT" />
                <ComplianceBadge icon={Lock} label="SOC 2 Type II" sub="AUDITED" />
                <ComplianceBadge icon={Award} label="PCI DSS" sub="LEVEL 1" />
              </div>

              <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl transition-all hover:bg-white/[0.08]">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                  <QrCode className="h-7 w-7 text-white/70 transition-colors group-hover:text-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white">
                    Get the mobile app
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                    Scan to download · iOS & Android
                  </span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 border-t border-white/5 pt-10">
              <p className="max-w-5xl text-[11px] italic leading-relaxed text-white/40">
                Wealthconomy Technologies Limited is a financial technology company, not a bank. Banking
                services are provided by our licensed partner banks. All investments involve risk and the
                past performance of a financial product does not guarantee future results or returns.
              </p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Structure · Discipline · Legacy
              </p>
            </div>
          </div>

          {/* Giant brand wordmark */}
          <div className="pointer-events-none relative -mt-2 select-none overflow-hidden">
            <div
              className="bg-gradient-to-b from-white/[0.06] to-transparent bg-clip-text text-center font-display font-black leading-[0.85] tracking-tighter text-transparent"
              style={{ fontSize: "clamp(80px, 18vw, 280px)" }}
            >
              wealthconomy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h4
      className={[
        "mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-white/40",
        className,
      ].join(" ")}
    >
      {children}
    </h4>
  );
}

function FooterLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className={[
          "group relative inline-flex items-center text-[14px] transition-all duration-300",
          primary ? "text-gold font-bold" : "text-white/75 hover:text-white",
        ].join(" ")}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-current opacity-70 transition-all duration-300 group-hover:w-full" />
        </span>
        {primary && <Zap className="ml-2 h-3.5 w-3.5 animate-pulse text-gold" />}
      </a>
    </li>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a
      href={href}
      className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white/10"
    >
      <Icon className="h-4.5 w-4.5 text-white/70 transition-colors group-hover:text-white" />
    </a>
  );
}

function ComplianceBadge({ icon: Icon, label, sub }: { icon: any; label: string; sub: string }) {
  return (
    <div className="group flex cursor-default items-center gap-2.5 opacity-50 transition-all duration-500 hover:opacity-100">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all group-hover:border-white/25 group-hover:bg-white/[0.08]">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-black uppercase tracking-tight text-white">{label}</span>
        <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">{sub}</span>
      </div>
    </div>
  );
}

// Pulse-slow animation injected globally
const style = typeof document !== "undefined" ? document.createElement("style") : null;
if (style && !document.getElementById("footer-styles")) {
  style.id = "footer-styles";
  style.textContent = `
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.1); }
    }
    .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
  `;
  document.head.appendChild(style);
}
