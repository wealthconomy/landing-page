"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, Lightbulb, Share2, Twitter, Linkedin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost, blogPosts } from "@/lib/blog";
import { Reveal } from "@/components/ui/reveal";

export function BlogPostDetail({ post }: { post: BlogPost }) {
  const [activeSection, setActiveSection] = useState(post.sections[0]?.id || "");
  const [copied, setCopied] = useState(false);

  // Scroll spy to highlight active section in TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -50% 0px" }
    );

    post.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post.sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Find related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="relative min-h-screen bg-background font-display overflow-hidden">
      {/* Decorative Grid & Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[350px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Post Hero Section */}
      <section className="relative pt-24 pb-16 z-10">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back Navigation & Meta */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/blog"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 shadow-soft text-foreground hover:scale-105 hover:bg-surface-soft active:scale-95 transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground uppercase">
            {post.title}
          </h1>

          {/* Introduction Excerpt */}
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {post.introduction}
          </p>
        </div>
      </section>

      {/* Big Banner Image */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 mb-16 md:mb-24">
        <div className="overflow-hidden rounded-[32px] md:rounded-[48px] aspect-[21/9] border border-border shadow-soft bg-surface-soft">
          <img
            src={post.image.src}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Two-Column Reading Canvas */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20">
          {/* Left Column: Sticky Index Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <div className="rounded-3xl border border-border bg-surface-soft/40 p-6 backdrop-blur-sm">
                <h4 className="font-display font-bold uppercase tracking-widest text-xs text-muted-foreground mb-4">
                  Table of Contents
                </h4>
                <nav className="space-y-3.5">
                  {post.sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`block w-full text-left text-sm font-semibold transition-all duration-300 ${
                        activeSection === sec.id
                          ? "text-primary translate-x-1"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {sec.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Share Tools */}
              <div className="rounded-3xl border border-border bg-surface-soft/40 p-6 backdrop-blur-sm flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Share Article</span>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-surface-soft hover:text-primary transition-all active:scale-95"
                    title="Copy Link"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Share2 className="h-4 w-4" />}
                  </button>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-surface-soft hover:text-[#1DA1F2] transition-all active:scale-95"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-surface-soft hover:text-[#0A66C2] transition-all active:scale-95"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Reading Body */}
          <main className="lg:col-span-8 space-y-12">
            {post.sections.map((sec) => (
              <Reveal key={sec.id} animation="up" threshold={0.15}>
                <div id={sec.id} className="scroll-mt-32 space-y-4">
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase border-b border-border/40 pb-3">
                    {sec.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed text-justify">
                    {sec.content}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Pro Tip Callout Box */}
            {post.proTip && (
              <Reveal animation="in">
                <div className="rounded-3xl border-l-4 border-l-gold border border-border bg-gold/5 p-6 md:p-8 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-2">
                      💡 Pro Tip: {post.proTip.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.proTip.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Conclusion */}
            <Reveal animation="up">
              <div className="space-y-4 border-t border-border/60 pt-8">
                <h4 className="font-display text-lg font-bold tracking-tight text-foreground uppercase">
                  Closing Thoughts
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  {post.conclusion}
                </p>
              </div>
            </Reveal>
          </main>
        </div>
      </section>

      {/* Bottom Related Posts Carousel/Grid */}
      <section className="relative z-10 border-t border-border bg-surface-soft/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="font-display font-bold uppercase tracking-widest text-xs text-primary">Keep Reading</span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground uppercase">
                Related Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center text-sm font-bold text-primary hover:text-primary-glow transition-colors"
            >
              Back to Blog <ArrowUpRight className="h-4 w-4 ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((rPost, idx) => (
              <Reveal key={rPost.slug} animation="up" delay={idx * 100} className="group flex flex-col h-full bg-background rounded-[24px] border border-border/80 p-4 hover:border-primary/20 hover:shadow-glow-teal transition-all duration-300">
                <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-surface-soft border border-border/60 relative mb-4">
                  <Link href={`/blog/${rPost.slug}`}>
                    <img
                      src={rPost.image.src}
                      alt={rPost.title}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col px-1">
                  <span className="font-display font-bold text-[9px] uppercase tracking-widest text-primary mb-2">
                    {rPost.category}
                  </span>
                  <Link href={`/blog/${rPost.slug}`} className="group-hover:text-primary transition-colors duration-300">
                    <h3 className="font-display font-bold text-base tracking-tight text-foreground leading-snug">
                      {rPost.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-2">
                    {rPost.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {rPost.date}
                    </span>
                    <Link href={`/blog/${rPost.slug}`} className="inline-flex items-center font-bold text-primary">
                      Read <ArrowUpRight className="h-3 w-3 ml-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
