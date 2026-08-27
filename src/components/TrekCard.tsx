"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { Trek } from "@/data/treks";
import { useAppContext } from "@/context/AppContext";

export default function TrekCard({ trek, index }: { trek: Trek; index: number }) {
  const { wishlist, toggleWishlist } = useAppContext();
  const isWishlisted = wishlist.includes(trek.slug);

  return (
    <Link 
      href={`/treks/${trek.slug}`} 
      className="group flex flex-col h-full border border-[var(--color-ink)]/15 hover:border-[var(--color-ink)]/40 hover:shadow-2xl hover:shadow-[var(--color-ink)]/5 transition-all duration-500 bg-[var(--color-paper)] p-5 pb-7 hover:-translate-y-1"
    >
      
      {/* Raw Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-stone)] mb-6">
        
        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(trek.slug);
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-[var(--color-paper)]/80 backdrop-blur-md border border-[var(--color-ink)]/10 hover:bg-[var(--color-paper)] hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <Heart 
            className={`w-4 h-4 transition-colors duration-300 ${isWishlisted ? 'fill-[var(--color-terracotta)] text-[var(--color-terracotta)]' : 'text-[var(--color-ink)]'}`} 
            strokeWidth={1.5}
          />
        </button>

        <Image
          src={trek.heroImage}
          alt={`View of ${trek.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover grayscale-[15%] transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
        />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4 bg-[var(--color-paper)]/95 backdrop-blur-sm text-[var(--color-ink)] px-3 py-1.5 text-[9px] font-sans font-bold uppercase tracking-[0.2em] shadow-sm">
          {trek.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-5">
          <div className="flex flex-col">
            <span className="text-[var(--color-terracotta)] text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-3 border-b border-[var(--color-terracotta)]/30 pb-1 w-fit">{trek.region}</span>
            <h3 className="text-[32px] font-serif text-[var(--color-ink)] line-clamp-2 leading-[1.1] tracking-tight group-hover:text-[var(--color-terracotta)] transition-colors duration-300">{trek.name}</h3>
          </div>
        </div>

        {/* Specs Table */}
        <div className="grid grid-cols-2 gap-y-3 mt-4 text-[10px] font-sans tracking-[0.15em] uppercase text-[var(--color-ink)]/50">
          <div className="border-b border-[var(--color-ink)]/10 pb-1.5 flex justify-between pr-2">
            <span>Duration</span>
            <span className="text-[var(--color-ink)] font-bold">{trek.duration.days}D</span>
          </div>
          <div className="border-b border-[var(--color-ink)]/10 pb-1.5 flex justify-between pl-2 border-l border-[var(--color-ink)]/10">
            <span>Altitude</span>
            <span className="text-[var(--color-ink)] font-bold">{trek.altitude}'</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-[var(--color-ink)]/40 font-sans tracking-[0.2em] uppercase mb-1">Starting From</span>
            <span className="font-serif text-2xl text-[var(--color-ink)] leading-none">₹{trek.price.toLocaleString()}</span>
          </div>
          
          <div 
            aria-hidden="true"
            className="w-10 h-10 rounded-full border border-[var(--color-ink)]/30 flex items-center justify-center text-[var(--color-ink)] group-hover:bg-[var(--color-ink)] group-hover:border-[var(--color-ink)] group-hover:text-[var(--color-paper)] transition-all duration-300 overflow-hidden relative"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
