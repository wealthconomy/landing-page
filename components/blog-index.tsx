"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, Send, CheckCircle2, Search, Calendar, Clock, BookOpen, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogItem } from "@/lib/blog-service";
import { Reveal } from "@/components/ui/reveal";

const categories = [
  "All",
  "General",
  "WealthFlex",
  "WealthFlow",
  "WealthGoal",
  "WealthFix",
  "WealthFam",
  "WealthGroup",
];

function getInitials(name: string): string {
  if (!name) return "W";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function BlogIndex() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Fetch blogs on load or when category/search changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      fetch(`/api/blogs?category=${encodeURIComponent(activeCategory)}&q=${encodeURIComponent(searchQuery)}`)
        .then((res) => res.json())
        .then((data) => {
          if (isMounted) {
            if (data.success && data.items) {
              setBlogs(data.items);
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error fetching blogs:", err);
          if (isMounted) setLoading(false);
        });
    }, 150);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [activeCategory, searchQuery]);

  // Monitor scroll to show/hide "scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubscribing) return;
    setIsSubscribing(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "blog_index" }),
      });
      if (res.ok) {
        setIsSubscribed(true);
        setEmail("");
      }
    } catch {
      setIsSubscribed(true);
    } finally {
      setIsSubscribing(false);
    }
  };

  const featuredPost = blogs.length > 0 ? blogs[0] : null;
  const gridPosts = blogs.length > 1 ? blogs.slice(1) : searchQuery !== "" ? blogs : [];

  return (
    <div className="relative min-h-screen bg-background font-display overflow-hidden">
      {/* Decorative Grid & Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:40px_40px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] sm:h-[400px] bg-primary/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 text-center z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-3.5 py-1 text-[11px] sm:text-xs font-medium text-primary shadow-soft mb-3 sm:mb-5">
            <BookOpen className="h-3.5 w-3.5" />
            WiseUp Hub · Knowledge is Wealth
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
            WISEUP BLOG
          </h1>

          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2">
            Get smarter about money straight to your inbox. Actionable guides on automated compound savings, inflation hedging, and financial discipline.
          </p>

          {/* Newsletter Input Form */}
          <div className="mt-6 sm:mt-8 max-w-md mx-auto relative z-20">
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-3 text-emerald-500 text-xs sm:text-sm animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span>Thanks for subscribing! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 p-1.5 rounded-full border border-border bg-background/60 backdrop-blur-md focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-3 sm:px-4 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
                />
                <Button type="submit" disabled={isSubscribing} size="sm" className="rounded-full px-4 sm:px-5 py-2 bg-primary text-primary-foreground hover:bg-primary/95 transition-all text-xs font-semibold shrink-0 disabled:opacity-75">
                  {isSubscribing ? (
                    <>
                      <Loader2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin mr-1" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-1" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Main Overlapping Content Container */}
      <section className="relative z-10 -mt-4 sm:-mt-8 bg-background rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[64px] border-t border-border shadow-[0_-20px_50px_rgba(21,93,95,0.05)] pb-16 sm:pb-20">
        <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1 rounded-full bg-border" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-10">
          {/* Featured Post */}
          {!loading && featuredPost && searchQuery === "" && (
            <Reveal animation="up" className="mb-8 sm:mb-12">
              <div className="group relative grid gap-5 sm:gap-8 lg:grid-cols-12 items-center rounded-2xl sm:rounded-[32px] md:rounded-[40px] border border-border bg-surface-soft/40 p-3.5 sm:p-6 md:p-8 hover:border-primary/20 hover:shadow-glow-teal transition-all duration-500">
                {/* Content Side */}
                <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2.5 sm:mb-3">
                    <span className="font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[9px] sm:text-[10px]">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] sm:text-xs">
                      <Calendar className="h-3 w-3" />
                      {new Date(featuredPost.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <h2 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="mt-2.5 sm:mt-3 text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base line-clamp-3">
                    {featuredPost.description || featuredPost.content.slice(0, 160) + "..."}
                  </p>

                  <div className="mt-3 sm:mt-5 flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1 text-[11px] sm:text-xs">
                      <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {featuredPost.readingDuration || "4 min read"}
                    </span>
                    {featuredPost.author?.name && (
                      <span className="text-foreground/80 font-medium text-[11px] sm:text-xs truncate">
                        By {featuredPost.author.name}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <Button asChild className="rounded-full px-5 sm:px-6 h-9 sm:h-11 text-xs sm:text-sm font-semibold group/btn w-full sm:w-auto">
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read Article
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:col-span-7 overflow-hidden rounded-xl sm:rounded-[22px] md:rounded-[32px] aspect-[16/10] bg-surface-soft border border-border relative order-1 lg:order-2">
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          )}

          {/* Interactive Filters Bar */}
          <div className="mb-6 sm:mb-8 flex flex-col md:flex-row gap-3 sm:gap-6 md:items-center md:justify-between border-b border-border pb-4 sm:pb-6">
            {/* Category tabs: Swipeable on mobile without screen break */}
            <div className="flex overflow-x-auto gap-2 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap" style={{ scrollbarWidth: "none" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-glow-teal"
                      : "bg-surface-soft/60 border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-surface-soft/40 px-9 sm:px-10 py-2 sm:py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16 sm:py-20">
              <Loader2 className="w-7 h-7 sm:w-8 sm:h-8 animate-spin text-primary mb-3" />
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">Fetching latest insights...</p>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && blogs.length === 0 ? (
            <div className="text-center py-16 sm:py-20 border border-dashed border-border rounded-2xl sm:rounded-3xl p-6">
              <p className="text-sm text-muted-foreground">No articles found matching your criteria.</p>
              <Button variant="outline" className="mt-4 rounded-full text-xs" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}>
                Reset Filters
              </Button>
            </div>
          ) : (
            !loading && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                {(featuredPost && searchQuery !== "" ? blogs : gridPosts).map((post, idx) => (
                  <Reveal key={post.id} animation="up" delay={idx * 50} className="group flex flex-col h-full bg-card/40 rounded-xl sm:rounded-2xl md:rounded-[32px] border border-border/70 p-2.5 sm:p-4 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <div className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-[22px] aspect-[16/10] bg-surface-soft border border-border relative mb-2.5 sm:mb-4">
                      <Link href={`/blog/${post.id}`}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </Link>
                    </div>

                    <div className="flex-1 flex flex-col px-0.5 sm:px-1">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] text-muted-foreground mb-1.5 sm:mb-3">
                        <span className="font-semibold px-1.5 sm:px-2 py-0.5 rounded-md bg-secondary text-primary uppercase tracking-widest text-[7.5px] sm:text-[9px] truncate">
                          {post.category}
                        </span>
                        <span className="hidden sm:flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      </div>

                      <Link href={`/blog/${post.id}`} className="block group-hover:text-primary transition-colors duration-300">
                        <h3 className="font-display text-xs sm:text-base md:text-lg font-bold tracking-tight text-foreground leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="hidden md:block mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2 lg:line-clamp-3">
                        {post.description || post.content.slice(0, 120) + "..."}
                      </p>

                      <div className="mt-auto pt-2.5 sm:pt-3 border-t border-border/50 flex items-center justify-between text-[9.5px] sm:text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 font-semibold">
                          <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          {post.readingDuration || "4 min read"}
                        </span>
                        <Link href={`/blog/${post.id}`} className="inline-flex items-center font-bold text-primary hover:text-primary-glow transition-colors">
                          <span className="hidden xs:inline">Read</span>
                          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 ml-0.5" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )
          )}
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-teal transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      )}
    </div>
  );
}
