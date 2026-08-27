"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full bg-[var(--color-ink)] overflow-hidden flex flex-col justify-end">
      
      {/* Massive Cinematic Image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1513689125086-6c432170e843?q=80&w=2500&auto=format&fit=crop"
          alt="Mountain Peaks"
          className="w-full h-full object-cover grayscale-[30%] opacity-80"
        />
        {/* Subtle vignette / gradient for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent opacity-90 z-10" />
      </div>

      <div className="relative z-20 w-full px-6 md:px-12 pb-16 md:pb-24 flex flex-col md:flex-row justify-between items-end">
        
        {/* Large Typography overlapping the image */}
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-[1px] bg-[var(--color-paper)]/50"></div>
             <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-paper)]">
               The Himalayan Standard
             </span>
          </div>
          
          <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-serif text-[var(--color-paper)] leading-[0.8] tracking-tighter mix-blend-overlay">
            Natural<br />
            <span className="italic font-light">Majesty.</span>
          </h1>
        </div>
        
        {/* Minimalist CTA & details */}
        <div className="flex flex-col items-start md:items-end mt-12 md:mt-0 text-left md:text-right">
          <p className="text-[var(--color-paper)]/70 max-w-xs font-sans text-sm font-light leading-relaxed mb-8">
            Curated high-altitude expeditions for those seeking raw wilderness without compromising the aesthetic.
          </p>
          
          <Link 
            href="#featured"
            className="group flex items-center gap-4 text-[var(--color-paper)] text-xs uppercase tracking-widest font-semibold"
          >
            <span className="w-12 h-12 border border-[var(--color-paper)]/30 rounded-full flex items-center justify-center group-hover:bg-[var(--color-paper)] group-hover:text-[var(--color-ink)] transition-all duration-500">
              <ArrowDown className="w-4 h-4" />
            </span>
            Begin Journey
          </Link>
        </div>
        
      </div>
    </section>
  );
}
