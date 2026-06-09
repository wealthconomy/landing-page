"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, Heart, BookOpen, Wallet, BarChart3, Mail, Clock, Tag, Target, AlertTriangle, Briefcase, Users, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ExploreWealthOptions() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="bg-surface-soft/40 py-14 lg:py-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-primary mb-2">Wealth Ecosystem</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Explore Your <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Wealth Options</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Wealthconomy helps Africans save smarter, grow wealth consistently, and achieve life goals. It’s Secure, Intelligent, and Inclusive.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          
          {/* WinUp */}
          <div className="order-1 group relative overflow-hidden rounded-3xl border border-border bg-background p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-teal flex flex-col justify-between h-full">
            {/* SVG Illustration */}
            <div className="absolute right-4 top-4 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 z-20">
              <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background glow */}
                <circle cx="60" cy="56" r="48" fill="url(#winup-grad)" fillOpacity="0.1" />
                <circle cx="60" cy="56" r="40" stroke="url(#winup-grad)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-spin-slow" />
                
                {/* Vault / Safe */}
                <rect x="40" y="45" width="40" height="32" rx="6" fill="url(#winup-grad)" fillOpacity="0.15" stroke="url(#winup-grad)" strokeWidth="2" />
                <path d="M40 55H80" stroke="url(#winup-grad)" strokeWidth="1.5" />
                <circle cx="60" cy="61" r="5" fill="none" stroke="url(#winup-grad)" strokeWidth="2" />
                
                {/* Upward graph path */}
                <path d="M30 85C45 72 55 62 90 42" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
                <path d="M82 42H90V50" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Floating elements */}
                <circle cx="45" cy="30" r="3" fill="#0D9488" />
                <circle cx="82" cy="32" r="2.5" fill="#0D9488" />
                <path d="M56 22L60 26L64 22L60 18L56 22Z" fill="#2DD4BF" />

                <defs>
                  <linearGradient id="winup-grad" x1="40" y1="45" x2="80" y2="77" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0D9488" />
                    <stop offset="1" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-bold uppercase tracking-wider text-primary">
                  WinUp
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground pr-20 sm:pr-24 lg:pr-28 leading-tight">
                Smart Savings Made Easy
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                Maximize your savings with competitive interest rates and impact drive tailored to help you achieve your financial goals.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Impact/Halal Savings:</strong> Compliant with Islamic principles, ensuring peace of mind and driving impact</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Interest Savings:</strong> Competitive interest rates to grow your money and achieve your goals</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span><strong>Mixed Savings:</strong> Wealth with purpose, contribute part of your interest to our WealthPact initiative, driving positive impact in communities.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <Button asChild className="rounded-full gap-2">
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                  Start Saving <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* WealthPact */}
          <div className="order-2 group relative overflow-hidden rounded-3xl border border-border bg-secondary p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft flex flex-col justify-between text-foreground h-full">
            {/* SVG Illustration */}
            <div className="absolute right-4 top-4 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 z-20">
              <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background circles */}
                <circle cx="60" cy="59" r="48" fill="url(#wealthpact-grad)" fillOpacity="0.1" />
                <circle cx="60" cy="59" r="40" stroke="url(#wealthpact-grad)" strokeWidth="1.2" strokeDasharray="5 5" className="animate-spin-slow" />
                
                {/* Heart */}
                <path d="M60 76C60 76 38 62 38 48C38 39.5 44.5 34 51.5 34C55.5 34 58.5 36 60 38.5C61.5 36 64.5 34 68.5 34C75.5 34 82 39.5 82 48C82 62 60 76 60 76Z" fill="url(#wealthpact-grad)" fillOpacity="0.15" stroke="url(#wealthpact-grad)" strokeWidth="1.8" strokeLinejoin="round" />
                
                {/* Tree / Growth from heart */}
                <path d="M60 55V44" stroke="url(#wealthpact-grad)" strokeWidth="2" strokeLinecap="round" />
                <path d="M60 48C56 46 54 44 54 44" stroke="url(#wealthpact-grad)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M60 46C64 44 66 42 66 42" stroke="url(#wealthpact-grad)" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Small circular leaves */}
                <circle cx="54" cy="44" r="2.5" fill="#FB7185" />
                <circle cx="66" cy="42" r="2.5" fill="#FB7185" />
                <circle cx="60" cy="40" r="3" fill="#F43F5E" />
                
                {/* Hands below heart */}
                <path d="M42 78C48 83 54 84 60 84C66 84 72 83 78 78" stroke="url(#wealthpact-grad)" strokeWidth="2" strokeLinecap="round" />
                <path d="M48 76C53 79 57 80 60 80C63 80 67 79 72 76" stroke="url(#wealthpact-grad)" strokeWidth="1.2" strokeLinecap="round" />
                
                <defs>
                  <linearGradient id="wealthpact-grad" x1="38" y1="34" x2="82" y2="84" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F43F5E" />
                    <stop offset="1" stopColor="#FB7185" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-amber-500/10 px-4 py-1 text-sm font-bold uppercase tracking-wider text-amber-700">
                  WealthPact
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground pr-20 sm:pr-24 lg:pr-28 leading-tight">
                Use Wealth to make Impact
              </h3>
              <p className="mt-2 text-muted-foreground text-sm mb-4">
                WealthPact is our vehicle for making a difference. Here, you contribute to meaningful community initiatives for women, the less privileged, youths, businesses and more. You can be an impact saver or just donate.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] border border-border bg-background px-2 py-1 rounded text-muted-foreground font-medium">Women empowerment</span>
                <span className="text-[10px] border border-border bg-background px-2 py-1 rounded text-muted-foreground font-medium">Youth development</span>
                <span className="text-[10px] border border-border bg-background px-2 py-1 rounded text-muted-foreground font-medium">Business support</span>
                <span className="text-[10px] border border-border bg-background px-2 py-1 rounded text-muted-foreground font-medium">Community funding</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center p-3 rounded-2xl bg-background border border-border">
                  <div className="font-display text-2xl font-bold text-foreground">300+</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold">Women Trained</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-background border border-border">
                  <div className="font-display text-2xl font-bold text-foreground">15+</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold">Businesses given grants</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-background border border-border">
                  <div className="font-display text-2xl font-bold text-foreground">5+</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold">New Impact Project</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold gap-2 flex-1">
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Start Impact Saving
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-border bg-background hover:bg-muted text-foreground gap-2 flex-1">
                <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Donate for Impact
                </a>
              </Button>
            </div>
          </div>

          {/* WiseUp */}
          <div className="order-3 lg:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-background p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft flex flex-col justify-between">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 flex-1">
              {/* Left Column */}
              <div className="flex flex-col relative z-10 h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-amber-500/10 px-4 py-1 text-sm font-bold uppercase tracking-wider text-amber-700">
                    WiseUp
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground leading-tight">
                  Your Financial Literacy Hub
                </h3>
                <p className="mt-1.5 text-muted-foreground text-sm mb-3">
                  Equip yourself with the knowledge to make informed financial decisions through our blogs, assessments, and reports.
                </p>
                
                <ul className="mt-2 mb-4 space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>Access to expert insights and tips.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>Engaging assessments to test your financial knowledge.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>Regular reports on market trends and financial strategies.</span>
                  </li>
                </ul>

                {/* Newsletter Signup point */}
                <div className="mb-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4">
                  <div className="text-xs font-bold text-amber-700 mb-1">WiseUp Newsletters</div>
                  <p className="text-[11px] text-muted-foreground mb-3">Subscribe to WiseUp newsletters and unlock full assessment results in the app.</p>
                  {subscribed ? (
                    <div className="text-xs font-medium text-emerald-500 flex items-center gap-1.5">
                      <Check className="w-4 h-4"/> Subscribed successfully!
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex gap-2">
                      <input 
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 text-xs px-3 py-2 rounded-full border border-border bg-background text-foreground focus:outline-none focus:border-gold"
                      />
                      <Button type="submit" size="sm" className="rounded-full bg-gold hover:bg-gold/90 text-black font-semibold text-xs py-2">
                        Subscribe
                      </Button>
                    </form>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-border">
                  <div className="bg-surface-soft rounded-2xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Market & Behavior Insights</div>
                      <BarChart3 className="h-4 w-4 text-amber-700" />
                    </div>
                    
                    {/* CSS Chart Mockup */}
                    <div className="flex items-end h-14 gap-2 border-b border-border/50 pb-1">
                      <div className="w-1/4 bg-primary/20 hover:bg-primary/40 rounded-t-sm h-[40%] transition-colors relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100">Trends</span></div>
                      <div className="w-1/4 bg-primary/40 hover:bg-primary/60 rounded-t-sm h-[70%] transition-colors relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100">Savings</span></div>
                      <div className="w-1/4 bg-primary/60 hover:bg-primary/80 rounded-t-sm h-[50%] transition-colors relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100">Growth</span></div>
                      <div className="w-1/4 bg-gold rounded-t-sm h-[90%] transition-colors relative group shadow-glow-teal"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100 text-amber-700">Wealth</span></div>
                    </div>
                  </div>
                </div>
                
                {/* SVG Illustration - background */}
                <div className="absolute right-0 top-0 w-32 h-32 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 z-0 opacity-10">
                  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="53" r="48" fill="url(#wiseup-grad)" fillOpacity="0.1" />
                    <circle cx="60" cy="53" r="42" stroke="url(#wiseup-grad)" strokeWidth="1.2" strokeDasharray="6 3" className="animate-spin-slow" />
                    <path d="M35 82C45 77 55 79 60 82C65 79 75 77 85 82V52C75 47 65 49 60 52C55 47 45 47 35 52V82Z" fill="url(#wiseup-grad)" fillOpacity="0.15" stroke="url(#wiseup-grad)" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M60 52V82" stroke="url(#wiseup-grad)" strokeWidth="1.8" />
                    <path d="M52 42C52 35.5 55.5 32 60 32C64.5 32 68 35.5 68 42C68 46 65 48 63 50V53H57V50C55 48 52 46 52 42Z" fill="url(#wiseup-grad)" fillOpacity="0.2" stroke="url(#wiseup-grad)" strokeWidth="1.5" />
                    <path d="M57 56H63" stroke="url(#wiseup-grad)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="60" y1="25" x2="60" y2="21" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="47" y1="31" x2="44" y2="28" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="73" y1="31" x2="76" y2="28" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M50 25L60 21L70 25L60 29L50 25Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" />
                    <path d="M55 27V30C55 31.5 65 31.5 65 30V27" stroke="#F59E0B" strokeWidth="1" fill="none" />
                    <path d="M68 25.5V30.5" stroke="#F59E0B" strokeWidth="1" />
                    <defs>
                      <linearGradient id="wiseup-grad" x1="35" y1="52" x2="85" y2="82" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D97706" />
                        <stop offset="1" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col relative z-10 h-full lg:border-l lg:border-border lg:pl-8">
                <div className="flex flex-col flex-1 gap-5">
                  
                  {/* Assessments */}
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2.5">Assessments</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="bg-surface-soft rounded-xl p-3 border border-border hover:border-gold/30 hover:bg-gold/5 transition-colors cursor-pointer text-left group/test flex flex-col shadow-sm">
                        <span className="text-xs font-medium text-foreground">Financial Position Test 1</span>
                        <span className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">Take test <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/test:opacity-100 transition-opacity" /></span>
                      </button>
                      <button onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))} className="bg-surface-soft rounded-xl p-3 border border-border hover:border-gold/30 hover:bg-gold/5 transition-colors cursor-pointer text-left group/test flex flex-col shadow-sm">
                        <span className="text-xs font-medium text-foreground">Financial Position Test 2</span>
                        <span className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">Take test <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/test:opacity-100 transition-opacity" /></span>
                      </button>
                    </div>
                  </div>

                  {/* Featured Insights */}
                  <div className="flex flex-col gap-2">
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">Featured Insights</div>
                    {[
                      { title: "Saving Discipline: The first step", category: "Basics", time: "3 min read", slug: "saving-discipline-the-first-step", icon: Target },
                      { title: "Common Financial Mistakes", category: "Strategy", time: "5 min read", slug: "common-financial-mistakes", icon: AlertTriangle },
                      { title: "Investment Basics 101", category: "Invest", time: "4 min read", slug: "investment-basics-101", icon: TrendingUp },
                    ].map((blog, i) => (
                      <Link href={`/blog/${blog.slug}`} key={i} className="flex items-center gap-3 border border-border rounded-xl p-2.5 bg-background/50 hover:bg-background hover:border-gold/30 hover:shadow-soft transition-all group">
                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-surface-soft shrink-0 border border-border group-hover:bg-gold/10 group-hover:border-gold/20 group-hover:text-gold transition-colors text-muted-foreground">
                          <blog.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] text-muted-foreground flex gap-2 items-center mb-0.5">
                            <span className="flex items-center gap-1 text-primary"><Tag className="w-3 h-3"/>{blog.category}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{blog.time}</span>
                          </div>
                          <h4 className="text-sm font-medium truncate text-foreground group-hover:text-primary transition-colors">{blog.title}</h4>
                        </div>
                        <div className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full border border-border group-hover:border-gold/30 group-hover:bg-gold/10 text-muted-foreground group-hover:text-gold transition-colors">
                          <ArrowUpRight className="h-3 w-3" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-border">
                  <Button variant="outline" asChild className="rounded-full gap-2 w-full hover:bg-gold hover:text-black hover:border-gold transition-all">
                    <Link href="/learn">Explore Learning Hub <ArrowUpRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* WealthUp */}
          <div className="order-4 lg:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-[#0e4143] p-8 lg:p-10 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-teal flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,207,101,0.25),transparent_60%)] z-0" />
            
            <div className="relative z-10 flex-1 w-full text-left">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-bold uppercase tracking-wider text-white">
                  WealthUp
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
                Future Investment Opportunities
              </h3>
              <p className="mt-3 text-white/90 text-sm lg:text-base max-w-xl">
                Stay tuned for our upcoming investment products designed to grow your wealth sustainably. Tailored investment portfolios to meet your risk appetite and financial goals.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <Button asChild className="rounded-full bg-white text-primary hover:bg-white/90 gap-2">
                  <Link href="/wealthup">Explore Investments <ArrowUpRight className="h-4 w-4" /></Link>
                </Button>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 shrink-0 mt-8 lg:mt-0">
              {/* SVG Illustration */}
              <div className="w-32 h-32 lg:w-48 lg:h-48 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative">
                <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background circles */}
                  <circle cx="60" cy="57" r="48" fill="url(#wealthup-grad)" fillOpacity="0.1" />
                  <circle cx="60" cy="57" r="40" stroke="url(#wealthup-grad)" strokeWidth="1" strokeDasharray="3 6" className="animate-spin-slow" />
                  
                  {/* Rocket body */}
                  <path d="M60 25C65 38 67 45 67 55V75H53V55C53 45 55 38 60 25Z" fill="url(#wealthup-grad)" fillOpacity="0.2" stroke="url(#wealthup-grad)" strokeWidth="1.8" />
                  <path d="M60 25V75" stroke="url(#wealthup-grad)" strokeWidth="1" strokeDasharray="2 2" />
                  
                  {/* Rocket fins */}
                  <path d="M53 65L45 75H53V65Z" fill="url(#wealthup-grad)" fillOpacity="0.3" stroke="url(#wealthup-grad)" strokeWidth="1.2" />
                  <path d="M67 65L75 75H67V65Z" fill="url(#wealthup-grad)" fillOpacity="0.3" stroke="url(#wealthup-grad)" strokeWidth="1.2" />
                  
                  {/* Window & Flame */}
                  <circle cx="60" cy="45" r="3.5" fill="#F59E0B" />
                  <path d="M57 78L60 88L63 78H57Z" fill="#F59E0B" />
                  
                  {/* Upward trend curve */}
                  <path d="M30 90C45 75 55 45 90 30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                  <path d="M80 30H90V40" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Sparkles */}
                  <path d="M85 55L87 57L85 59L83 57L85 55Z" fill="white" />
                  <path d="M35 40L36 41L35 42L34 41L35 40Z" fill="white" />
                  
                  <defs>
                    <linearGradient id="wealthup-grad" x1="53" y1="25" x2="67" y2="75" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="1" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
