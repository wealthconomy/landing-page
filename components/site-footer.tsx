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
  Facebook,
  Phone,
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
      </div>

      {/* Glass footer content */}
      <div className="relative w-full border-t border-white/10 bg-white/[0.03] backdrop-blur-2xl">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden">
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
          <div className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative px-7 pt-10 pb-12 lg:px-14 lg:pt-12 lg:pb-16">
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
                © 2026 Wealthconomy. Empowering Financial Growth Across Africa.
              </div>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-14 pt-14 md:grid-cols-3 lg:grid-cols-5">
              {/* Get started + social + newsletter */}
              <div className="col-span-2 lg:col-span-2">
                <FooterHeading>Connect</FooterHeading>
                <ul className="space-y-3.5 mb-10">
                  <FooterLink href="/#waitlist" primary>
                    Create an account
                  </FooterLink>
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
                  <SocialIcon icon={Facebook} href="#" />
                  <SocialIcon icon={Linkedin} href="#" />
                </div>
              </div>

              <div>
                <FooterHeading>Quick Links</FooterHeading>
                <ul className="space-y-3.5">
                  {[
                    { label: "About Us", to: "/about" },
                    { label: "Features", to: "/#how-it-works" },
                    { label: "Savings Plans", to: "/portfolios" },
                    { label: "Financial Education", to: "/learn" },
                    { label: "FAQs", to: "/#faq" },
                    { label: "Contact Us", to: "/contact" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              <div>
                <FooterHeading>Contact</FooterHeading>
                <ul className="space-y-3.5 mb-10">
                  <li>
                    <a href="mailto:hello@wealthconomy.org" className="group relative flex items-center text-[14px] text-white/75 transition-all duration-300 hover:text-white">
                      <Mail className="mr-2 h-4 w-4 text-primary" />
                      <span className="relative">hello@wealthconomy.org<span className="absolute -bottom-1 left-0 h-px w-0 bg-current opacity-70 transition-all duration-300 group-hover:w-full" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+2348116491114" className="group relative flex items-center text-[14px] text-white/75 transition-all duration-300 hover:text-white">
                      <Phone className="mr-2 h-4 w-4 text-primary" />
                      <span className="relative">+234 8116491114<span className="absolute -bottom-1 left-0 h-px w-0 bg-current opacity-70 transition-all duration-300 group-hover:w-full" /></span>
                    </a>
                  </li>
                </ul>
                <FooterHeading>Legal</FooterHeading>
                <ul className="space-y-3.5">
                  {[
                    { label: "Privacy & Terms", to: "/terms" },
                    { label: "Security", to: "/security" },
                    { label: "Cookies", to: "/cookies" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              <div>
                <FooterHeading>Insights</FooterHeading>
                <ul className="space-y-3.5">
                  {[
                    { label: "WiseUp Hub", to: "/learn" },
                    { label: "WiseUp Blog", to: "/blog" },
                    { label: "Market Insights", to: "/learn#insights" },
                    { label: "Wealth Score", to: "/learn#score" },
                    { label: "Tax Efficiency", to: "/learn#tax" },
                    { label: "Success Stories", to: "/company" },
                  ].map((item) => (
                    <FooterLink key={item.label} href={item.to}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
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

function ComplianceBadge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="group flex cursor-default items-center gap-2 opacity-40 transition-all duration-500 hover:opacity-100">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all group-hover:border-white/20 group-hover:bg-white/[0.05]">
        <Icon className="h-3.5 w-3.5 text-white/70" />
      </div>
      <span className="text-[9px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white">
        {label}
      </span>
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
