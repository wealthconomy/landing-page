"use client";

import { useState, useSyncExternalStore } from "react";
import Image, { type StaticImageData } from "next/image";
import { Check, Copy, Download, UserPlus, KeyRound } from "lucide-react";
import { appLinks } from "@/lib/appLinks";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import phoneHome from "@/assets/phone-home.png";
import phonePortfolio from "@/assets/phone-portfolio.png";

interface InviteClientProps {
  code: string | null;
}

type Platform = "ios" | "android" | "both";

function getPlatformSnapshot(): Platform {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "both";
  }
  const ua = navigator.userAgent || "";
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);

  if (isIOS) return "ios";
  if (isAndroid) return "android";
  return "both";
}

function getServerPlatformSnapshot(): Platform {
  return "both";
}

function subscribe() {
  return () => {};
}

function AppleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 170 170" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.98-5.77-8.91-10.37-18.96-13.8-30.15-3.43-11.19-5.15-22.19-5.15-32.99 0-14.36 3.69-26.44 11.07-36.23 7.38-9.79 16.73-14.77 28.05-14.94 4.58 0 9.87 1.25 15.86 3.75 5.99 2.5 9.77 3.75 11.34 3.75 1.57 0 5.61-1.35 12.12-4.05 6.51-2.7 12.06-3.89 16.65-3.56 12.7.99 22.84 5.75 30.42 14.28-11.07 6.74-16.49 16.03-16.26 27.87.23 9.38 3.76 17.29 10.59 23.73 6.83 6.44 14.88 10.15 24.15 11.13-2.22 6.74-4.99 13.38-8.31 19.92zM119.22 31.84c0-7.18 2.6-13.88 7.8-20.1 5.2-6.22 11.69-10.13 19.47-11.74.88 8.04-1.47 15.35-7.05 21.93-5.58 6.58-12.32 10.45-20.22 11.61-.22-.57-.33-1.14-.33-1.7z" />
    </svg>
  );
}

function GooglePlayLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.609 1.814C3.23 2.222 3 2.84 3 3.649v16.702c0 .809.23 1.427.609 1.835l.096.096L13.06 12.927v-.254L3.705 1.718l-.096.096z"
        fill="#00D7FF"
      />
      <path
        d="M16.177 16.044l-3.117-3.117v-.254l3.117-3.117.07.04 3.693 2.098c1.055.599 1.055 1.58 0 2.18l-3.693 2.098-.07.072z"
        fill="#FFC800"
      />
      <path
        d="M16.247 15.972L13.06 12.785 3.609 22.236c.435.46 1.157.518 1.977.052l10.661-6.316z"
        fill="#FF3A44"
      />
      <path
        d="M16.247 8.828L5.586 2.512C4.766 2.046 4.044 2.104 3.609 2.564L13.06 12.015l3.187-3.187z"
        fill="#00E676"
      />
    </svg>
  );
}

function RealisticPhone({
  src,
  alt,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer Phone Frame */}
      <div className="relative aspect-[9/19.5] w-full rounded-[2.2rem] sm:rounded-[2.6rem] bg-neutral-950 p-[5px] sm:p-[6px] shadow-[0_30px_70px_-20px_rgba(21,93,95,0.45)] ring-1 ring-white/15">
        {/* Dynamic Island Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        </div>

        {/* Screen Bezel & Real Screen Display */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] sm:rounded-[2.3rem] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 240px, 320px"
            priority
            className="object-cover object-top"
          />
          {/* Glass Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
        </div>
      </div>
    </div>
  );
}

export function InviteClient({ code }: InviteClientProps) {
  const platform = useSyncExternalStore(
    subscribe,
    getPlatformSnapshot,
    getServerPlatformSnapshot
  );
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      toast.success("Referral code copied to clipboard!");
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.warn("Could not copy code to clipboard:", err);
      toast.error("Failed to copy code. Please copy manually.");
    }
  };

  const handleGetApp = async (targetPlatform: "ios" | "android") => {
    if (code) {
      try {
        await navigator.clipboard.writeText(`WEALTHCONOMY-REF:${code}`);
      } catch (err) {
        console.warn("Could not write referral code to clipboard:", err);
      }
    }

    const url = targetPlatform === "ios" ? appLinks.ios : appLinks.android;
    if (url) {
      window.location.href = url;
    } else {
      if (code) {
        toast.info("Referral code saved to clipboard! Wealthconomy mobile app is launching soon.");
      } else {
        toast.info("Wealthconomy mobile app is launching soon!");
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden text-foreground">
      {/* Dynamic ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:48px_48px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-32 -left-32 h-[650px] w-[650px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute top-10 -right-24 h-[600px] w-[600px] rounded-full bg-gold/20 blur-[150px]" />
        <div className="absolute bottom-20 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
      </div>

      {/* Main Hero Container */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-12 md:pt-16 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Code Pass, Store Buttons, Trust Proof */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.08]">
              {code ? (
                <>
                  You&apos;ve been invited to{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Wealthconomy
                  </span>
                </>
              ) : (
                <>
                  Join{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                    Wealthconomy
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {code
                ? "Create your account with this referral code and start building wealth."
                : "Create your account and start building wealth with automated savings and disciplined investing."}
            </p>

            {/* Referral Code Pass Card (Only rendered when valid code exists) */}
            {code && (
              <div className="w-full max-w-xl rounded-2xl border-2 border-primary/20 bg-surface-soft/90 p-4 sm:p-5 backdrop-blur-md shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
                  <span>Your Referral Code</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Auto-Applied
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-background rounded-xl p-3 border border-border">
                  <span className="font-mono text-2xl sm:text-3xl font-black tracking-[0.2em] text-primary select-all">
                    {code}
                  </span>
                  <Button
                    type="button"
                    onClick={handleCopyCode}
                    className="w-full sm:w-auto rounded-lg px-5 py-2.5 h-10 text-xs font-bold gap-2 bg-primary hover:bg-primary-glow text-white shadow-soft transition-all active:scale-95 cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy code</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Official Store Badges (Clean, No Coming Soon tag) */}
            <div className="pt-2 w-full max-w-xl">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                {/* Apple App Store Badge */}
                {(platform === "ios" || platform === "both") && (
                  <button
                    type="button"
                    onClick={() => handleGetApp("ios")}
                    className="w-full sm:w-auto flex items-center justify-center gap-3.5 rounded-xl bg-black hover:bg-neutral-900 border border-white/20 hover:border-white/40 px-6 py-3 text-white transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer min-w-[190px]"
                  >
                    <AppleLogo className="h-7 w-7 text-white shrink-0" />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] font-medium tracking-wide text-white/70">
                        Download on the
                      </div>
                      <div className="text-base font-bold tracking-tight text-white font-sans">
                        App Store
                      </div>
                    </div>
                  </button>
                )}

                {/* Google Play Store Badge */}
                {(platform === "android" || platform === "both") && (
                  <button
                    type="button"
                    onClick={() => handleGetApp("android")}
                    className="w-full sm:w-auto flex items-center justify-center gap-3.5 rounded-xl bg-black hover:bg-neutral-900 border border-white/20 hover:border-white/40 px-6 py-3 text-white transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer min-w-[190px]"
                  >
                    <GooglePlayLogo className="h-6 w-6 shrink-0" />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] font-medium tracking-wide text-white/70">
                        GET IT ON
                      </div>
                      <div className="text-base font-bold tracking-tight text-white font-sans">
                        Google Play
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Trust and Social Proof Strip */}
            <div className="pt-6 border-t border-border/80 w-full max-w-xl grid grid-cols-3 gap-3 text-left">
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-foreground">50,000+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Active Savers</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground mt-0.5">Automated Discipline</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-gold">Bank-Grade</div>
                <div className="text-xs text-muted-foreground mt-0.5">256-bit Security</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Realistic Phone Mockups of the REAL Wealthconomy App */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 lg:py-0">
            {/* Ambient circular backlights */}
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/30 via-gold/20 to-emerald-500/15 blur-[100px]" />

            <div className="relative flex items-center justify-center w-full max-w-[420px] sm:max-w-[480px]">
              {/* Secondary Phone (Background - Wealthconomy Portfolios & Vaults screen) */}
              <div className="w-[185px] sm:w-[220px] -rotate-6 translate-x-5 sm:translate-x-7 translate-y-3 opacity-90 transition-transform duration-500 hover:rotate-0 hover:scale-105 z-10">
                <RealisticPhone
                  src={phonePortfolio}
                  alt="Wealthconomy Portfolios & Vaults"
                />
              </div>

              {/* Primary Phone (Foreground - Wealthconomy Home Dashboard screen) */}
              <div className="w-[205px] sm:w-[245px] rotate-3 -translate-x-3 sm:-translate-x-5 -translate-y-3 z-20 transition-transform duration-500 hover:rotate-0 hover:scale-105 shadow-2xl">
                <RealisticPhone
                  src={phoneHome}
                  alt="Wealthconomy Home Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps Section (Clean Web & Mobile Layout) */}
      <section className="relative z-10 border-t border-border/80 bg-surface-soft/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Fast Onboarding
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              How to claim your invite in 3 steps
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-muted-foreground">
              Follow these simple steps to activate your Wealthconomy account and unlock disciplined savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="rounded-3xl border border-border/80 bg-background p-6 lg:p-8 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-1 duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-lg mb-5">
                <Download className="h-6 w-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                Step 1
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Download the app
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Get Wealthconomy on iOS or Android directly from the App Store or Google Play.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-border/80 bg-background p-6 lg:p-8 shadow-sm transition-all hover:border-gold/40 hover:-translate-y-1 duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold font-bold text-lg mb-5">
                <UserPlus className="h-6 w-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
                Step 2
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Create your account
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Complete your basic profile in under two minutes to configure your personalized vaults.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-border/80 bg-background p-6 lg:p-8 shadow-sm transition-all hover:border-emerald-500/40 hover:-translate-y-1 duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-5">
                <KeyRound className="h-6 w-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">
                Step 3
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Enter the referral code if it isn&apos;t filled in for you
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Paste your unique code during onboarding if it wasn&apos;t automatically pre-populated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
