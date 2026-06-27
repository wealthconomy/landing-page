"use client";

import { FileText, Download, ArrowRight, TrendingUp, Search, BookOpen } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const reports = [
  {
    title: "State of African Wealth 2026",
    category: "Market Research",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    desc: "An in-depth analysis of changing wealth patterns, investment behaviors, and the rise of digital finance across the continent.",
  },
  {
    title: "The Future of Digital Ajo",
    category: "Whitepaper",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    desc: "How traditional communal savings methods are evolving with blockchain and modern fintech solutions.",
  },
  {
    title: "Inflation & Investment Strategies",
    category: "Quarterly Report",
    date: "Q1 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    desc: "Tactical asset allocation strategies to preserve purchasing power against double-digit inflation.",
  },
  {
    title: "Youth & Personal Finance",
    category: "Survey Data",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    desc: "Insights from over 10,000 young professionals on budgeting, saving, and their top financial fears.",
  },
  {
    title: "Real Estate vs. Stocks in 2026",
    category: "Comparative Analysis",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    desc: "A data-driven comparison of returns, liquidity, and risks in the current macro-economic environment.",
  },
  {
    title: "The Psychology of Wealth Building",
    category: "Research",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    desc: "Understanding behavioral finance, overcoming money anxiety, and establishing disciplined saving habits.",
  }
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-surface-soft/40 pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-6">
              <BookOpen className="h-4 w-4" /> Research Library
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-foreground">
              Market Intelligence & <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Reports</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Empower your financial decisions with our deeply researched reports, whitepapers, and market analyses focused on wealth creation in emerging economies.
            </p>

            <div className="mt-8 flex items-center gap-3 w-full max-w-md bg-background border border-border rounded-full p-2 shadow-soft focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
              <Search className="h-5 w-5 text-muted-foreground ml-2" />
              <input 
                type="text" 
                placeholder="Search reports by topic..." 
                className="bg-transparent border-none outline-none flex-1 text-sm text-foreground placeholder:text-muted-foreground"
              />
              <Button className="rounded-full bg-primary hover:bg-primary-glow text-white">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, i) => (
              <div key={i} className="group flex flex-col rounded-3xl border border-border bg-background overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Image 
                    src={report.image} 
                    alt={report.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {report.category}
                    </span>
                    <span className="bg-black/50 backdrop-blur-sm text-white/90 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {report.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm flex-1">
                    {report.desc}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between rounded-xl group/btn hover:border-primary hover:bg-primary/5"
                      onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))}
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" /> Read Summary
                      </span>
                      <Download className="h-4 w-4 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button variant="outline" className="rounded-full px-8 hover:bg-surface-soft">
              Load More Reports
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
