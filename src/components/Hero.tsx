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

      <div className="relative z-20 w-full px-6 md:px-12 pb-16 md:pb-24 flex flex-col xl:flex-row justify-between items-end gap-16 xl:gap-24">

        {/* Large Typography overlapping the image */}
        <div className="w-full xl:w-auto flex-1">


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

              <span className="font-sans font-black uppercase text-[6rem] md:text-[11rem] lg:text-[15rem] leading-[0.75] tracking-tighter mt-4 md:mt-8 ml-[-10px] md:ml-[-20px] drop-shadow-2xl">
                DREAMS
              </span>
            </h1>
          </div>
        </div>

        {/* Minimalist CTA & details */}
        <div className="flex flex-col items-center sm:items-start xl:items-end mt-20 xl:mt-0 text-center sm:text-left xl:text-right shrink-0 relative z-30 pb-4 w-full xl:w-auto">
          <p className="text-[var(--color-paper)]/70 max-w-xs font-sans text-sm font-light leading-relaxed mb-8 mx-auto sm:mx-0">
            Curated high-altitude expeditions for those seeking raw wilderness without compromising the aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <a
              href="https://wa.me/919520557784"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[var(--color-primary)] text-[var(--color-ink)] px-7 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 hover:bg-[var(--color-paper)] transition-all duration-300 shadow-[0_0_30px_rgba(255,192,0,0.3)] w-full sm:w-auto"
            >
              <WhatsappIcon className="w-4 h-4 shrink-0" />
              Get in touch
            </a>

            <Link
              href="#featured"
              className="group flex items-center justify-center gap-3 bg-[var(--color-paper)]/10 backdrop-blur-md border border-[var(--color-paper)]/30 text-[var(--color-paper)] px-7 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              aria-label="Scroll down to Featured Expeditions"
            >
              <ArrowDown className="w-4 h-4 shrink-0 group-hover:translate-y-1 transition-transform duration-300" />
              Begin Journey
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
