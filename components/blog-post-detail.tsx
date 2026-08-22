"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Check,
  Heart,
  Bookmark,
  MessageSquare,
  Smartphone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogItem } from "@/lib/blog-service";
import { Reveal } from "@/components/ui/reveal";

interface ParsedSection {
  id: string;
  title: string;
  content: string;
}

function getInitials(name: string): string {
  if (!name) return "W";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function parseContentIntoSections(content: string, fallbackDesc?: string): ParsedSection[] {
  if (!content || !content.trim()) {
    if (fallbackDesc && fallbackDesc.trim()) {
      return [{ id: "overview", title: "Overview", content: fallbackDesc.trim() }];
    }
    return [];
  }

  const lines = content.split("\n");
  const parsedSections: ParsedSection[] = [];
  let currentSection: ParsedSection | null = null;
  let preHeadingText = "";

  const isHeadingLine = (line: string): { isHeading: boolean; title: string } => {
    const trimmed = line.trim();
    if (!trimmed) return { isHeading: false, title: "" };

    // Markdown heading: # Heading, ## Heading, ### Heading
    const mdMatch = trimmed.match(/^#+\s*(.+)$/);
    if (mdMatch) {
      return { isHeading: true, title: mdMatch[1].trim() };
    }

    // Numbered list heading (e.g., "1. Learn How to Create a Budget")
    const numMatch = trimmed.match(/^(\d+\.\s+[A-Z0-9].+)$/);
    if (numMatch && trimmed.length < 100) {
      return { isHeading: true, title: numMatch[1].trim() };
    }

    // Common landmark section titles
    const landmarkTitles = [
      "introduction",
      "conclusion",
      "summary",
      "final thoughts",
      "overview",
      "key takeaways",
      "why it matters",
      "financial literacy is a lifelong skill",
    ];
    if (landmarkTitles.includes(trimmed.toLowerCase())) {
      return { isHeading: true, title: trimmed };
    }

    // Standalone short headings (under 80 chars, doesn't end with a comma/semicolon/period, title case / question)
    if (
      trimmed.length <= 80 &&
      !trimmed.endsWith(".") &&
      !trimmed.endsWith(",") &&
      !trimmed.endsWith(";") &&
      /^[A-Z0-9]/.test(trimmed) &&
      (trimmed.endsWith("?") ||
        trimmed.endsWith(":") ||
        /^(What|Why|How|The Role|Challenges|Building|Understanding|Benefits|Step|Key)\b/i.test(trimmed))
    ) {
      return { isHeading: true, title: trimmed };
    }

    return { isHeading: false, title: "" };
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const { isHeading, title } = isHeadingLine(line);

    if (isHeading) {
      if (currentSection && (currentSection.content.trim() || currentSection.title)) {
        parsedSections.push({
          ...currentSection,
          content: currentSection.content.trim(),
        });
      }
      const id =
        title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-") || `section-${parsedSections.length + 1}`;

      currentSection = { id, title, content: "" };
    } else {
      if (currentSection) {
        currentSection.content += line + "\n";
      } else {
        if (line.trim()) {
          preHeadingText += line + "\n";
        }
      }
    }
  }

  if (currentSection && (currentSection.content.trim() || currentSection.title)) {
    parsedSections.push({
      ...currentSection,
      content: currentSection.content.trim(),
    });
  }

  // If there was text before the first heading, add it as the first section
  if (preHeadingText.trim()) {
    parsedSections.unshift({
      id: "introduction",
      title: "Introduction",
      content: preHeadingText.trim(),
    });
  }

  // If no sections were identified, put all content into a single section
  if (parsedSections.length === 0) {
    parsedSections.push({
      id: "article",
      title: "Article",
      content: content.trim(),
    });
  }

  return parsedSections;
}

export function BlogPostDetail({
  post,
  relatedPosts = [],
}: {
  post: BlogItem;
  relatedPosts?: BlogItem[];
}) {
  const [copied, setCopied] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalAction, setAuthModalAction] = useState<"like" | "bookmark" | "comment">("like");
  const [imageError, setImageError] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  // Safely grab current URL on client mount to avoid hydration mismatch
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Parse sections cleanly from post content without duplication
  const sections = useMemo(() => {
    return parseContentIntoSections(post.content, post.description);
  }, [post.content, post.description]);

  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  // Scroll spy for Table of Contents
  useEffect(() => {
    if (sections.length === 0) return;

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

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const handleShare = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.href : currentUrl;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: `${post.title} - Wealthconomy WiseUp Blog`,
          url: shareUrl,
        });
        return;
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const triggerAuthModal = (action: "like" | "bookmark" | "comment") => {
    setAuthModalAction(action);
    setShowAuthModal(true);
  };

  const dateFormatted = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const authorName = post.author?.name || "Wealthconomy Editorial";
  const authorInitials = getInitials(authorName);

  return (
    <article className="relative min-h-screen bg-background font-display overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:40px_40px] bg-[position:center_top] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[350px] sm:w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* Header & Meta Bar */}
      <section className="relative pt-14 sm:pt-20 pb-2 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
            <Link
              href="/blog"
              className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-background/80 shadow-soft text-foreground hover:scale-105 hover:bg-surface-soft active:scale-95 transition-all shrink-0"
              aria-label="Back to all articles"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-muted-foreground font-semibold">
              <span className="font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary uppercase tracking-widest text-[9px] sm:text-[10px]">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                {dateFormatted}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                {post.readingDuration || "4 min read"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Large Hero Banner Image at the TOP */}
      {post.image && (
        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6">
          <div className="overflow-hidden rounded-2xl sm:rounded-[32px] md:rounded-[40px] aspect-[16/10] sm:aspect-[21/9] border border-border shadow-soft bg-surface-soft relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-cover object-center"
            />
          </div>
        </section>
      )}

      {/* 2. Title & Author Info BELOW the image */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6">
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.1] tracking-tight text-foreground uppercase break-words">
          {post.title}
        </h1>

        {/* Author Avatar with Initial Fallback */}
        <div className="mt-3 sm:mt-5 flex items-center gap-3 sm:gap-4 border-y border-border/50 py-2.5 sm:py-3.5">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0">
            {post.author?.image && !imageError ? (
              <Image
                src={post.author.image}
                alt={authorName}
                width={44}
                height={44}
                onError={() => setImageError(true)}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-border object-cover"
              />
            ) : (
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-primary to-primary-glow text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-sm">
                {authorInitials}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-bold text-foreground truncate">{authorName}</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Financial Research & Wealth Strategies</p>
          </div>
        </div>

        {post.description &&
          post.description.trim() !== post.content.trim() &&
          post.description.trim().length < 250 && (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          )}
      </section>

      {/* 3. Main Two-Column Reading Body */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column: TOC and Engagement Tools (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-5">
              {sections.length > 1 && (
                <div className="rounded-3xl border border-border bg-surface-soft/40 p-5 backdrop-blur-sm">
                  <h4 className="font-display font-bold uppercase tracking-widest text-xs text-muted-foreground mb-3">
                    Table of Contents
                  </h4>
                  <nav className="space-y-2.5">
                    {sections.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`block w-full text-left text-xs sm:text-sm font-semibold transition-all duration-300 ${
                          activeSection === sec.id
                            ? "text-primary translate-x-1 font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {sec.title}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Engagement Tools */}
              <div className="rounded-3xl border border-border bg-surface-soft/40 p-5 backdrop-blur-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Interact</span>
                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => triggerAuthModal("like")}
                      className="rounded-full gap-1 text-xs font-bold hover:text-rose-500 hover:border-rose-500/30"
                      title="Like article (Registered users)"
                    >
                      <Heart className="w-3.5 h-3.5 text-rose-500" />
                      <span>{post.bookmarks || 0}</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => triggerAuthModal("comment")}
                      className="rounded-full gap-1 text-xs font-bold hover:text-primary hover:border-primary/30"
                      title="Comment on article (Registered users)"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-primary" />
                      <span>Comment</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => triggerAuthModal("bookmark")}
                      className="rounded-full p-2 hover:text-primary"
                      title="Save to reading list"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Share</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="rounded-full gap-1.5 text-xs font-semibold hover:border-primary/40 hover:text-primary transition-all active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-bold">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="h-3.5 w-3.5 text-primary" />
                        <span>Share Article</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Article Text Content */}
          <main className="lg:col-span-8 space-y-6 sm:space-y-8">
            {sections.map((sec) => (
              <Reveal key={sec.id} animation="up" threshold={0.1}>
                <div id={sec.id} className="scroll-mt-24 sm:scroll-mt-32 space-y-2.5 sm:space-y-3">
                  {sec.title !== "Overview" && sec.title !== "Article" && (
                    <h2 className="font-display text-base sm:text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase border-b border-border/40 pb-2 sm:pb-2.5">
                      {sec.title}
                    </h2>
                  )}
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line space-y-4 text-foreground/85">
                    {sec.content}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Mobile Interaction Bar */}
            <div className="lg:hidden flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-surface-soft/80 border border-border mt-6">
              <div className="flex items-center gap-1.5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => triggerAuthModal("like")}
                  className="rounded-full gap-1 text-[11px] font-bold h-8 px-2.5"
                >
                  <Heart className="w-3 h-3 text-rose-500" /> Like
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => triggerAuthModal("comment")}
                  className="rounded-full gap-1 text-[11px] font-bold h-8 px-2.5"
                >
                  <MessageSquare className="w-3 h-3 text-primary" /> Comment
                </Button>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border bg-background text-foreground hover:text-primary transition-all active:scale-95 text-xs font-semibold"
                title="Share article"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500 text-[10px] font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[11px]">Share</span>
                  </>
                )}
              </button>
            </div>

            {/* CTA Box */}
            <Reveal animation="in">
              <div className="rounded-2xl sm:rounded-3xl border border-primary/20 bg-primary/5 p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-8">
                <div className="space-y-1.5 text-left">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Take Action
                  </span>
                  <h3 className="font-display text-base sm:text-xl font-bold text-foreground">
                    Put this strategy into practice
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
                    Automate your wealth creation with Wealthconomy savings portfolios. Grow your money consistently and protect against inflation.
                  </p>
                </div>
                <Button asChild className="rounded-full w-full sm:w-auto px-6 h-10 sm:h-11 font-bold shrink-0">
                  <a href="https://forms.gle/M4NrF9w9HSny4YR49" target="_blank" rel="noopener noreferrer">
                    Start Saving <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </main>
        </div>
      </section>

      {/* Related Posts: 2-Column Mobile Grid */}
      {relatedPosts.length > 0 && (
        <section className="relative z-10 border-t border-border bg-surface-soft/30 py-10 sm:py-14 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-6 sm:mb-8 flex items-end justify-between">
              <div>
                <span className="font-display font-bold uppercase tracking-widest text-[10px] sm:text-xs text-primary">Keep Reading</span>
                <h2 className="mt-1 font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase">
                  Related Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="group inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-glow transition-colors"
              >
                Back to Blog <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
              {relatedPosts.map((rPost, idx) => (
                <Reveal key={rPost.id} animation="up" delay={idx * 50} className="group flex flex-col h-full bg-background rounded-xl sm:rounded-2xl md:rounded-[24px] border border-border/80 p-2.5 sm:p-4 hover:border-primary/20 hover:shadow-glow-teal transition-all duration-300">
                  <div className="overflow-hidden rounded-lg sm:rounded-xl aspect-[16/10] bg-surface-soft border border-border/60 relative mb-2.5 sm:mb-3.5">
                    <Link href={`/blog/${rPost.id}`}>
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </Link>
                  </div>
                  <div className="flex-1 flex flex-col px-0.5 sm:px-1">
                    <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-muted-foreground mb-1 sm:mb-1.5">
                      <span className="font-bold uppercase tracking-widest text-primary truncate">
                        {rPost.category}
                      </span>
                    </div>
                    <Link href={`/blog/${rPost.id}`} className="group-hover:text-primary transition-colors duration-300">
                      <h3 className="font-display font-bold text-xs sm:text-base tracking-tight text-foreground leading-snug line-clamp-2">
                        {rPost.title}
                      </h3>
                    </Link>
                    <p className="hidden md:block mt-1.5 text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-2">
                      {rPost.description || rPost.content.slice(0, 90) + "..."}
                    </p>
                    <div className="mt-auto pt-2 sm:pt-2.5 border-t border-border/40 flex items-center justify-between text-[9px] sm:text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />
                        {rPost.readingDuration || "4 min read"}
                      </span>
                      <Link href={`/blog/${rPost.id}`} className="inline-flex items-center font-bold text-primary">
                        <span className="hidden xs:inline">Read</span> <ArrowUpRight className="h-3 w-3 ml-0.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* App Required / Registered Users Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-center">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full border border-border hover:bg-surface-soft text-muted-foreground hover:text-foreground transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 border border-primary/20">
              <Smartphone className="w-7 h-7" />
            </div>

            <span className="inline-flex px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-3">
              App Exclusive Feature
            </span>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
              Registered Users Only
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
              {authModalAction === "like"
                ? "Liking articles is available for registered members in the Wealthconomy app."
                : authModalAction === "bookmark"
                ? "Saving articles to your personal reading list requires an active Wealthconomy account."
                : "Joining article discussions and community comments is available in the Wealthconomy app."}
            </p>

            <div className="flex flex-col gap-2.5">
              <Button
                asChild
                className="w-full h-11 sm:h-12 rounded-xl bg-primary hover:bg-primary-glow text-white font-bold"
              >
                <a
                  href="https://forms.gle/M4NrF9w9HSny4YR49"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowAuthModal(false)}
                >
                  Download Wealthconomy App
                </a>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setShowAuthModal(false)}
                className="rounded-xl text-xs text-muted-foreground"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
