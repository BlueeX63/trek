"use client";

import Image from "next/image";
import Link from "next/link";
import { Compass, Users, Tent, Sparkles } from "lucide-react";

const CATEGORIES = [
  { id: "premium", title: "Premium Ascents", description: "Luxury service at extreme altitudes.", icon: Sparkles, image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000", link: "/categories/premium", size: "large" },
  { id: "family", title: "Family Trails", description: "Safe, guided experiences.", icon: Users, image: "https://images.unsplash.com/photo-1605649487212-4dcb81cb5cb1?q=80&w=2000", link: "/categories/family", size: "small" },
  { id: "summer", title: "Alpine Camps", description: "Learn mountaineering basics.", icon: Tent, image: "https://images.unsplash.com/photo-1563212879-1bf1712a23ab?q=80&w=2000", link: "/categories/summer", size: "small" },
  { id: "suggest", title: "Curate My Journey", description: "Let our experts decide.", icon: Compass, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000", link: "/contact", size: "wide" }
];

export default function ExpeditionCategories() {
  return (
    <section className="bg-[#FDFBF7] py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[#F4A261] font-bold tracking-widest uppercase text-sm mb-4 block">
              The Collection
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1B4332] leading-tight">
              Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4332] to-[#F4A261]">Experiences</span>
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
                className={`group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isLarge ? "md:col-span-2 md:row-span-2" : 
                  isWide ? "md:col-span-2 md:row-span-1" : 
                  "md:col-span-1 md:row-span-1"
                }`}
              >
                <div className="absolute inset-0 bg-[#1B4332]">
                  <Image src={category.image} alt={category.title} fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/20 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#F4A261] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className={`font-display font-bold ${isLarge ? 'text-3xl' : 'text-2xl'} group-hover:translate-x-2 transition-transform duration-300`}>
                      {category.title}
                    </h3>
                  </div>
                  <p className={`font-medium opacity-90 ${isLarge ? 'text-lg max-w-sm' : 'text-sm'} group-hover:translate-x-2 transition-transform duration-300 delay-75`}>
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
