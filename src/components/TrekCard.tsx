"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Trek } from "@/data/treks";
import { useState } from "react";

export default function TrekCard({ trek, index }: { trek: Trek; index: number }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Link href={`/treks/${trek.slug}`} className="group flex flex-col h-full border border-[var(--color-ink)]/20 hover:border-[var(--color-ink)] transition-colors duration-500 bg-[var(--color-paper)] p-4 pb-6">
      
      {/* Raw Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-stone)] mb-6">
        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 z-10 w-[30px] h-[30px] flex items-center justify-center bg-[var(--color-paper)]/90 backdrop-blur-sm border border-[var(--color-ink)]/10 hover:bg-[var(--color-paper)] transition-all duration-300"
        >
          <Heart 
            className={`w-[14px] h-[14px] transition-colors duration-300 ${isWishlisted ? 'fill-[var(--color-terracotta)] text-[var(--color-terracotta)]' : 'text-[var(--color-ink)]'}`} 
            strokeWidth={1.5}
          />
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={trek.heroImage}
          alt={trek.name}
          className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
        />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4 bg-[var(--color-paper)] text-[var(--color-ink)] px-2 py-1 text-[10px] font-sans font-bold uppercase tracking-widest border border-[var(--color-ink)]/10">
          {trek.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="text-[var(--color-terracotta)] text-[10px] font-sans font-bold uppercase tracking-widest mb-2 border-b border-[var(--color-terracotta)]/30 pb-1 w-fit">{trek.region}</span>
            <h3 className="text-3xl font-serif text-[var(--color-ink)] line-clamp-2 leading-tight">{trek.name}</h3>
          </div>
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-2 gap-y-2 mt-4 text-[10px] font-sans tracking-widest uppercase text-[var(--color-ink)]/50">
          <div className="border-b border-[var(--color-ink)]/10 pb-1 flex justify-between">
            <span>Duration</span>
            <span className="text-[var(--color-ink)] font-bold">{trek.duration.days}D</span>
          </div>
          <div className="border-b border-[var(--color-ink)]/10 pb-1 flex justify-between ml-2">
            <span>Altitude</span>
            <span className="text-[var(--color-ink)] font-bold">{trek.altitude}'</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-[var(--color-ink)]/40 font-sans tracking-widest uppercase mb-1">From</span>
            <span className="font-serif text-xl text-[var(--color-ink)]">₹{trek.price.toLocaleString()}</span>
          </div>
          
          <div className="w-8 h-8 rounded-full border border-[var(--color-ink)] flex items-center justify-center text-[var(--color-ink)] group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-paper)] transition-all duration-300">
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  );
}
