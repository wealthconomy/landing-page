"use client";

import { Mail, ArrowRight, Rss, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pastEditions = [
  {
    title: "How to Build a Bulletproof Emergency Fund",
    date: "May 22, 2026",
    readTime: "4 min read",
    snippet: "An emergency fund is the bedrock of any solid financial plan. Here's how to calculate exactly how much you need..."
  },
  {
    title: "The Math Behind Compound Interest",
    date: "May 15, 2026",
    readTime: "6 min read",
    snippet: "Albert Einstein allegedly called compound interest the 8th wonder of the world. In this edition, we break down the math..."
  },
  {
    title: "Navigating High Inflation Economies",
    date: "May 08, 2026",
    readTime: "5 min read",
    snippet: "When inflation outpaces savings rates, holding cash means losing purchasing power. Discover assets that hedge against inflation..."
  },
  {
    title: "Automating Your Savings Habit",
    date: "May 01, 2026",
    readTime: "3 min read",
    snippet: "Willpower is a finite resource. If you have to manually transfer money to savings every month, you will eventually fail..."
  }
];

export default function NewslettersPage() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* Hero Subscription Section */}
      <section className="bg-gradient-to-b from-surface-soft/80 to-background pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary mb-6">
            <Mail className="h-4 w-4" /> The Wealth Briefing
          </div>
          
          <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-foreground">
            Smarter Wealth Insights, <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Direct to Your Inbox.</span>
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals getting weekly, actionable financial intelligence. No spam. No jargon. Just pure value to help you make smarter money moves.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-coming-soon-modal"));
            }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl mx-auto bg-background border border-border rounded-2xl sm:rounded-full p-2 shadow-soft focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all"
          >
            <Mail className="hidden sm:block h-5 w-5 text-muted-foreground ml-3 shrink-0" />
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              required
              className="bg-transparent border-none outline-none flex-1 text-base text-foreground placeholder:text-muted-foreground w-full p-3 sm:p-0"
            />
            <Button type="submit" className="w-full sm:w-auto rounded-xl sm:rounded-full bg-primary hover:bg-primary-glow text-white h-12 px-8 font-semibold">
              Subscribe Now
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-muted-foreground">
            Trusted by 50,000+ subscribers. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-display font-semibold text-foreground">Recent Editions</h2>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Rss className="h-4 w-4" /> Archive
            </div>
          </div>

          <div className="space-y-6">
            {pastEditions.map((edition, i) => (
              <div 
                key={i} 
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-3xl border border-border bg-surface-soft/30 hover:bg-surface-soft hover:shadow-soft hover:border-primary/30 transition-all cursor-pointer"
                onClick={() => window.dispatchEvent(new CustomEvent("open-coming-soon-modal"))}
              >
                <div className="w-full sm:w-48 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    <Calendar className="h-4 w-4 text-primary" /> {edition.date}
                  </div>
                  <div className="text-xs text-muted-foreground bg-background inline-flex px-2 py-1 rounded-md border border-border">
                    {edition.readTime}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {edition.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
                    {edition.snippet}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                    Read edition <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="rounded-full px-8 hover:bg-surface-soft">
              View Complete Archive
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
