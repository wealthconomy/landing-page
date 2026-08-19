"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Rss, Calendar, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogItem } from "@/lib/blog-service";

export default function NewslettersPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [recentBriefings, setRecentBriefings] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs?limit=4")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.items) {
          setRecentBriefings(data.items);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-background font-display">
      {/* Hero Subscription Section */}
      <section className="bg-gradient-to-b from-surface-soft/80 to-background pt-20 sm:pt-28 pb-16 lg:pt-32 lg:pb-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-primary mb-6">
            <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> The Wealth Briefing
          </div>
          
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
            Smarter Wealth Insights, <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Direct to Your Inbox.</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals getting weekly, actionable financial intelligence. No spam. No jargon. Just pure value to help you make smarter money moves.
          </p>

          {subscribed ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-6 py-3 text-xs sm:text-sm font-semibold text-primary">
              🎉 Thanks for subscribing! You will receive our next briefing in your inbox.
            </div>
          ) : (
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email.trim() || isSubscribing) return;
                setIsSubscribing(true);
                try {
                  await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email.trim(), source: "newsletter_page" }),
                  });
                  setSubscribed(true);
                } catch (err) {
                  console.error("Newsletter error:", err);
                  setSubscribed(true);
                } finally {
                  setIsSubscribing(false);
                }
              }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full max-w-xl mx-auto bg-background border border-border rounded-2xl sm:rounded-full p-2 shadow-soft focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all"
            >
              <Mail className="hidden sm:block h-5 w-5 text-muted-foreground ml-3 shrink-0" />
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground w-full p-2.5 sm:p-0 min-w-0"
              />
              <Button 
                type="submit" 
                disabled={isSubscribing}
                className="w-full sm:w-auto rounded-xl sm:rounded-full bg-primary hover:bg-primary-glow text-white h-11 sm:h-12 px-6 sm:px-8 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </Button>
            </form>
          )}
          
          <p className="mt-4 text-xs text-muted-foreground">
            Trusted by subscribers across the continent. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Archive / Recent Editions Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground">Recent Editions</h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-medium">
              <Rss className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Archive
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-7 h-7 animate-spin text-primary mb-2" />
              <p className="text-xs text-muted-foreground">Loading recent briefings...</p>
            </div>
          ) : recentBriefings.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl p-6">
              <p className="text-xs sm:text-sm text-muted-foreground">No recent editions found.</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {recentBriefings.map((edition) => (
                <Link 
                  key={edition.id}
                  href={`/blog/${edition.id}`}
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-border bg-surface-soft/30 hover:bg-surface-soft hover:shadow-soft hover:border-primary/30 transition-all"
                >
                  <div className="w-full sm:w-44 shrink-0">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      <Calendar className="h-3.5 w-3.5 text-primary" /> {new Date(edition.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground bg-background inline-flex px-2 py-0.5 rounded-md border border-border">
                      {edition.readingDuration || "4 min read"}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {edition.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {edition.description || edition.content.slice(0, 140) + "..."}
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary">
                      Read edition <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
