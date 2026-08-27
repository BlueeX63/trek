"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full bg-[var(--color-ink)] overflow-hidden flex flex-col justify-end">

      {/* Massive Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop"
          alt="Majestic Mountain Peaks"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale-[20%] opacity-70"
        />
        {/* Subtle vignette / gradient for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent opacity-90 z-10" />
      </div>

      <div className="relative z-20 w-full px-6 md:px-12 pb-16 md:pb-24 flex flex-col md:flex-row justify-between items-end">

        {/* Large Typography overlapping the image */}
        <div className="max-w-5xl">


          {/* Awwwards Style Typography */}
          <div className="relative w-full">
            {/* Massive Background Outline Text */}
            <div className="absolute -top-32 md:-top-48 -left-12 md:-left-24 text-[12rem] md:text-[20rem] lg:text-[28rem] font-sans font-black uppercase leading-none opacity-20 pointer-events-none select-none text-transparent" style={{ WebkitTextStroke: '2px var(--color-paper)' }}>
              XTD
            </div>

            {/* Foreground Scattered Text */}
            <h1 className="relative z-10 flex flex-col text-[var(--color-paper)] mix-blend-overlay w-full pt-12 md:pt-24">
              <span className="font-serif italic font-light text-7xl md:text-[10rem] lg:text-[13rem] leading-[0.7] ml-4 md:ml-12">
                xplore
              </span>

              <div className="flex items-center gap-6 mt-8 md:mt-12 ml-24 md:ml-64 z-20">
                <div className="w-12 md:w-24 h-[2px] bg-[var(--color-primary)]" />
                <span className="font-sans font-black uppercase tracking-[0.6em] text-lg md:text-3xl text-[var(--color-primary)]">
                  The
                </span>
              </div>

              <span className="font-sans font-black uppercase text-[6rem] md:text-[12rem] lg:text-[16rem] leading-[0.75] tracking-tighter mt-4 md:mt-8 ml-[-10px] md:ml-[-20px] drop-shadow-2xl">
                DREAMS
              </span>
            </h1>
          </div>
        </div>

        {/* Minimalist CTA & details */}
        <div className="flex flex-col items-start md:items-end mt-12 md:mt-0 text-left md:text-right">
          <p className="text-[var(--color-paper)]/70 max-w-xs font-sans text-sm font-light leading-relaxed mb-8">
            Curated high-altitude expeditions for those seeking raw wilderness without compromising the aesthetic.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <a
              href="https://wa.me/919520557784"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-[var(--color-paper)] text-xs uppercase tracking-widest font-semibold"
            >
              <span className="w-12 h-12 border border-[var(--color-paper)]/30 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-ink)] transition-all duration-500">
                <WhatsappIcon className="w-4 h-4" />
              </span>
              WhatsApp
            </a>

            <Link
              href="#featured"
              className="group flex items-center gap-4 text-[var(--color-paper)] text-xs uppercase tracking-widest font-semibold"
              aria-label="Scroll down to Featured Expeditions"
            >
              <span aria-hidden="true" className="w-12 h-12 border border-[var(--color-paper)]/30 rounded-full flex items-center justify-center group-hover:bg-[var(--color-paper)] group-hover:text-[var(--color-ink)] transition-all duration-500">
                <ArrowDown className="w-4 h-4" />
              </span>
              Begin Journey
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
