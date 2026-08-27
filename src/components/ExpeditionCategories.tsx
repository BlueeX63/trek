"use client";

import Link from "next/link";
import Image from "next/image";
import { Compass, Users, Tent, Sparkles } from "lucide-react";

const CATEGORIES = [
  { id: "uttarakhand", title: "Uttarakhand", description: "The land of gods and legendary trails.", icon: Compass, image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000", link: "/categories/uttarakhand", size: "large" },
  { id: "himachal", title: "Himachal Pradesh", description: "Lush forests & alpine passes.", icon: Tent, image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000", link: "/categories/himachal", size: "small" },
  { id: "kashmir", title: "Kashmir", description: "Paradise on earth.", icon: Sparkles, image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000", link: "/categories/kashmir", size: "small" },
  { id: "ladakh", title: "Ladakh", description: "The cold desert and high passes.", icon: Users, image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000", link: "/categories/ladakh", size: "wide" },
  { id: "spiritual", title: "Spiritual", description: "Journeys of inner awakening.", icon: Sparkles, image: "https://images.unsplash.com/photo-1513689125086-6c432170e843?q=80&w=2000", link: "/categories/spiritual", size: "small" }
];

export default function ExpeditionCategories() {
  return (
    <section className="bg-[var(--color-paper)] py-24 px-6 md:px-12 relative z-10 border-t border-[var(--color-ink)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
               <div className="w-8 h-[1px] bg-[var(--color-primary)]"></div>
               <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/50">
                 The Collection
               </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] leading-none">
              Explore by <span className="italic font-light">Region</span>
            </h2>
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {CATEGORIES.map((category) => {
            const isLarge = category.size === "large";
            const isWide = category.size === "wide";
            
            return (
              <Link 
                key={category.id} 
                href={category.link}
                className={`group relative overflow-hidden bg-[var(--color-stone)] border border-[var(--color-ink)]/20 transition-all duration-500 ${
                  isLarge ? "md:col-span-2 md:row-span-2" : 
                  isWide ? "md:col-span-2 md:row-span-1" : 
                  "md:col-span-1 md:row-span-1"
                }`}
              >
                <div className="absolute inset-0">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale-[30%] opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/40 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-[var(--color-paper)]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-[var(--color-primary)] transition-transform">
                      <category.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className={`font-serif ${isLarge ? 'text-4xl' : 'text-2xl'} group-hover:text-[var(--color-primary)] transition-colors duration-300`}>
                      {category.title}
                    </h3>
                  </div>
                  <p className={`font-sans font-light opacity-80 ${isLarge ? 'text-base max-w-sm' : 'text-xs'}`}>
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
