"use client";

import Image from "next/image";
import Link from "next/link";

export function ImpactGallery() {
  return (
    <section className="py-24 px-6 relative">
      <div className="mx-auto max-w-7xl text-center mb-16">
        <h2 className="font-display text-3xl font-bold md:text-5xl mb-6">Wealthconomy in Action</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real people, real impact. See how our community is leveraging wealth to build better lives, cleaner environments, and stronger communities for everyone.
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          {/* Main large image */}
          <div className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden group">
            <Image
              src="/images/impact-gallery-1.png"
              alt="Empowering Women Entrepreneurs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <h3 className="text-white font-bold text-3xl shadow-sm">Empowering Women Entrepreneurs</h3>
            </div>
          </div>
          
          {/* Top right */}
          <div className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden group bg-surface-soft">
            <Image
              src="/images/impact-teaching.png"
              alt="Community Education"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <h3 className="text-white font-bold text-xl shadow-sm">Financial Education</h3>
            </div>
          </div>

          {/* Middle right */}
          <div className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden group bg-surface-soft">
            <Image
              src="/images/impact-environment.png"
              alt="Environmental Cleanup"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <h3 className="text-white font-bold text-xl shadow-sm">Community Building</h3>
            </div>
          </div>

          {/* Bottom left (Span 4) */}
          <div className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden group bg-surface-soft">
             <Image
              src="/images/impact-event.png"
              alt="Training Workshop"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <h3 className="text-white font-bold text-xl shadow-sm">Skill Workshops</h3>
            </div>
          </div>

          {/* Bottom right CTA (Span 8) */}
          <div className="md:col-span-8 md:row-span-1 relative rounded-3xl overflow-hidden bg-primary/10 border border-primary/20 p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-3 text-primary">Got a story?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg">Have you or your community benefited from WealthPact? We would love to share your story with the world.</p>
            <Link href="/contact" className="font-semibold text-primary flex items-center gap-2 group/btn">
              Share your story 
              <span className="transition-transform group-hover/btn:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
