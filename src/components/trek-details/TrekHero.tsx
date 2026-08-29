"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

interface TrekHeroProps {
  title: string;
  image: string;
  subtitle?: string;
}

export default function TrekHero({ title, image, subtitle }: TrekHeroProps) {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-[var(--color-ink)] overflow-hidden flex flex-col justify-end pb-12 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={`Hero image for ${title}`}
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover grayscale-[30%] opacity-70 scale-105"
          />
        </div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start text-left">
        <div className="max-w-5xl">
          {subtitle && (
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[var(--color-primary)]"></div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-paper)]">
                {subtitle}
              </span>
            </div>
          )}
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-medium text-[var(--color-paper)] leading-[0.9] tracking-tighter mb-12 mix-blend-overlay">
            {title}
          </h1>
        </div>
      </div>

      {/* Scroll Down indicator */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-4 text-[var(--color-paper)]/70">
        <div aria-hidden="true" className="w-10 h-10 border border-[var(--color-paper)]/30 rounded-full flex items-center justify-center">
          <ArrowDown className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
      </div>
    </section>
  );
}
