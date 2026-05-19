"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp, Send, CheckCircle2, Search, Calendar, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, BlogPost } from "@/lib/blog";
import { Reveal } from "@/components/ui/reveal";

const categories = ["All", "Fintech", "Budgeting", "Investment", "Inflation", "Personal Finance"];

export function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // Filter posts based on activeCategory and searchQuery
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" ||
      post.category.toLowerCase() === activeCategory.toLowerCase() ||
      post.tags.some(t => t.toLowerCase() === activeCategory.toLowerCase());
      
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Featured post is always the first post in our data (or first matching search)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  // Remaining posts are the rest
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : (filteredPosts.length === 1 && searchQuery !== "" ? filteredPosts : filteredPosts.slice(1));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen bg-background font-display overflow-hidden">
      {/* Decorative Grid & Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.04)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 text-center z-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-primary shadow-soft mb-8">
            <BookOpen className="h-3.5 w-3.5" />
            WiseUp Hub · Knowledge is Wealth
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            WISEUP BLOG
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Get smarter about money — Straight to your inbox. Actionable guides on automated compound savings, inflation hedging, and financial discipline.
          </p>

          {/* Newsletter Input Form */}
          <div className="mt-10 max-w-md mx-auto relative z-20">
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-6 py-4 text-emerald-500 text-sm animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>Thanks for subscribing! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 p-1.5 rounded-full border border-border bg-background/40 backdrop-blur-md focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <Button type="submit" size="sm" className="rounded-full px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/95 transition-all">
                  Subscribe <Send className="h-3.5 w-3.5 ml-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Main Overlapping Content Container */}
      <section className="relative z-10 -mt-16 bg-background rounded-t-[40px] md:rounded-t-[80px] border-t border-border shadow-[0_-20px_50px_rgba(21,93,95,0.05)] pb-24">
        {/* Decorative top anchor bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-border" />

        <div className="mx-auto max-w-7xl px-6 pt-16">
          {/* Featured Post (Double-column layout) */}
          {featuredPost && searchQuery === "" && (
            <Reveal animation="up" className="mb-20">
              <div className="group relative grid gap-8 lg:grid-cols-12 items-center rounded-[32px] md:rounded-[48px] border border-border bg-surface-soft/40 p-6 md:p-8 hover:border-primary/20 hover:shadow-glow-teal transition-all duration-500">
                {/* Content Side */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[10px]">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="rounded-full px-6 group/btn">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Article
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:col-span-7 overflow-hidden rounded-[24px] md:rounded-[36px] aspect-[16/10] bg-surface-soft border border-border relative">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <img
                      src={featuredPost.image.src}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          )}

          {/* Interactive Filters Bar */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between border-b border-border pb-8">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
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
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-surface-soft/40 px-10 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border rounded-3xl">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
              <Button variant="outline" className="mt-4 rounded-full" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {(featuredPost && searchQuery !== "" ? filteredPosts : gridPosts).map((post, idx) => (
                <Reveal key={post.slug} animation="up" delay={idx * 100} className="group flex flex-col h-full">
                  {/* Card Image */}
                  <div className="overflow-hidden rounded-[32px] aspect-[16/10] bg-surface-soft border border-border relative mb-6">
                    <Link href={`/blog/${post.slug}`}>
                      <img
                        src={post.image.src}
                        alt={post.title}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </Link>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-3">
                      <span className="font-semibold px-2 py-0.5 rounded-md bg-secondary text-primary uppercase tracking-widest text-[9px]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors duration-300">
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground leading-snug">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 font-semibold">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-bold text-primary hover:text-primary-glow transition-colors">
                        Read More <ArrowUpRight className="h-3.5 w-3.5 ml-0.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow-teal transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-4"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
