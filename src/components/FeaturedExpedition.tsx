"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { treks } from "@/data/treks";

export default function FeaturedExpedition() {
  const featuredTrek = treks.find(t => t.slug === 'kashmir-great-lakes') || treks[0];

  return (
    <section className="bg-[var(--color-paper)] py-32 px-6 md:px-12 border-t border-[var(--color-ink)]/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-stretch gap-12 lg:gap-0">
          
          {/* Left Text Side - Minimalist */}
          <div className="w-full md:w-5/12 flex flex-col justify-center pr-0 lg:pr-16 relative z-20">
            <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-8 border-l border-[var(--color-terracotta)] pl-4">
              Featured Expedition
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-medium text-[var(--color-ink)] mb-8 leading-[0.9] tracking-tight">
              {featuredTrek.name.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
            
            <p className="text-[var(--color-ink)]/70 text-sm md:text-base mb-12 font-sans max-w-sm font-light leading-relaxed">
              Experience the alpine lakes and breathtaking meadows of Kashmir. This expedition is highly curated for those seeking a mix of moderate challenges and unmatched scenic beauty.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-16 border-t border-[var(--color-ink)]/10 pt-8">
              <div>
                <div className="text-[10px] text-[var(--color-ink)]/40 uppercase tracking-widest mb-1">Region</div>
                <div className="font-serif text-lg text-[var(--color-ink)]">{featuredTrek.region}</div>
              </div>
              <div>
                <div className="text-[10px] text-[var(--color-ink)]/40 uppercase tracking-widest mb-1">Duration</div>
                <div className="font-serif text-lg text-[var(--color-ink)]">{featuredTrek.duration.days} Days</div>
              </div>
              <div>
                <div className="text-[10px] text-[var(--color-ink)]/40 uppercase tracking-widest mb-1">Altitude</div>
                <div className="font-serif text-lg text-[var(--color-ink)]">{featuredTrek.altitude.toLocaleString()} ft</div>
              </div>
            </div>

            <Link 
              href={`/treks/${featuredTrek.slug}`} 
              className="group inline-flex items-center gap-4 text-[var(--color-ink)] text-sm uppercase tracking-widest font-medium w-fit"
            >
              Explore Itinerary
              <span aria-hidden="true" className="w-10 h-10 border border-[var(--color-ink)]/20 rounded-full flex items-center justify-center group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-paper)] transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Right Image Side - Raw standard img */}
          <div className="w-full md:w-7/12 relative aspect-[4/5] md:aspect-auto md:h-auto min-h-[600px] -ml-0 md:-ml-12 overflow-hidden bg-[var(--color-stone)]">
            <Image
              src={featuredTrek.heroImage}
              alt={`Featured Expedition: ${featuredTrek.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale-[20%] contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
