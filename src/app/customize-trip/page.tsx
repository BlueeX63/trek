"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919520557784"; 

const LOCATIONS = [
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    description: "Serene backwaters, lush tea gardens, and pristine beaches. Experience the perfect blend of nature and culture in an unhurried paradise.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000",
    attractions: ["Munnar Tea Gardens", "Alleppey Backwaters", "Wayanad Forests", "Fort Kochi"]
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun, Sand & Sea",
    description: "Explore vibrant beaches, historic Portuguese architecture, and lively culture in India's favorite coastal paradise.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000",
    attractions: ["Baga Beach", "Dudhsagar Falls", "Basilica of Bom Jesus", "Anjuna Flea Market"]
  },
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "Paradise on Earth",
    description: "Majestic snow-capped peaks, serene Dal Lake, and breathtaking valleys that look straight out of a painting.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2000",
    attractions: ["Dal Lake", "Gulmarg Gondola", "Pahalgam Valley", "Sonamarg Glaciers"]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    tagline: "Yoga Capital of the World",
    description: "The perfect mix of spiritual retreats by the holy Ganges and thrilling adventure sports like white-water rafting.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2000",
    attractions: ["Triveni Ghat", "Laxman Jhula", "Neelkanth Mahadev", "River Rafting"]
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    tagline: "Queen of the Hills",
    description: "Colonial charm, stunning waterfalls, and panoramic Himalayan views make this a classic hill station getaway.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2000",
    attractions: ["Kempty Falls", "Mall Road", "Lal Tibba", "Gun Hill Point"]
  },
  {
    id: "kanatal",
    name: "Kanatal",
    tagline: "Offbeat Serenity",
    description: "Escape the crowds. Quiet trails, dense pine forests, and raw, untouched mountain vistas await you.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000",
    attractions: ["Surkanda Devi Temple", "Tehri Dam", "Kaudia Forest", "Eco Park"]
  }
];

export default function CustomizeTripPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-32 font-sans selection:bg-[var(--color-primary)] selection:text-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="mb-32">
          <Link href="/" className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]/40 hover:text-[var(--color-ink)] transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-ink)]/40 mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-[var(--color-ink)]/20"></span>
                Bespoke Experiences
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[var(--color-ink)] leading-[0.9] tracking-tighter">
                Curate your <br/>
                <span className="italic font-light text-[var(--color-ink)]/70">Journey.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-sm md:text-base text-[var(--color-ink)]/60 font-light leading-relaxed max-w-sm">
                We craft highly personalized itineraries for these hand-picked destinations. Connect directly with our travel experts to plan an unforgettable escape.
              </p>
            </div>
          </div>
        </div>

        {/* Staggered Editorial Layout */}
        <div className="flex flex-col gap-32 md:gap-48">
          {LOCATIONS.map((loc, idx) => {
            const isEven = idx % 2 === 0;
            const message = encodeURIComponent(`Hi! I'm interested in customizing a trip to ${loc.name}. Can you help me plan an itinerary?`);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                key={loc.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 relative`}
              >
                
                {/* Massive Background Number */}
                <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} -translate-y-1/2 text-[20vw] font-serif font-bold text-[var(--color-ink)]/[0.03] pointer-events-none z-0 tracking-tighter leading-none`}>
                  0{idx + 1}
                </div>

                {/* Image Section */}
                <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[45%] relative z-10 group mx-auto lg:mx-0">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[var(--color-stone)]">
                    <Image 
                      src={loc.image}
                      alt={loc.name}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                    />
                    {/* Subtle grain/overlay */}
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[45%] flex flex-col justify-center relative z-10 mx-auto lg:mx-0">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px bg-[var(--color-ink)]/30"></div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-ink)]/50">
                      {loc.tagline}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] tracking-tighter mb-8 leading-none">
                    {loc.name}
                  </h2>
                  
                  <p className="text-base md:text-lg text-[var(--color-ink)]/60 font-light leading-relaxed mb-8 max-w-md">
                    {loc.description}
                  </p>

                  {/* Main Attractions */}
                  <div className="flex flex-wrap gap-2 mb-12 max-w-md">
                    {loc.attractions.map((attraction, i) => (
                      <span key={i} className="text-xs font-semibold px-4 py-2 border border-[var(--color-ink)]/10 rounded-full text-[var(--color-ink)]/70 bg-[var(--color-ink)]/5">
                        {attraction}
                      </span>
                    ))}
                  </div>
                  
                  {/* Elegant WhatsApp Link */}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-ink)] w-fit"
                  >
                    <span className="relative z-10">Plan via WhatsApp</span>
                    <div className="w-10 h-10 rounded-full border border-[var(--color-ink)]/20 flex items-center justify-center group-hover/btn:bg-[#25D366] group-hover/btn:border-[#25D366] group-hover/btn:text-white transition-all duration-500 z-10">
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-500" />
                    </div>
                    {/* Minimal hover underline */}
                    <span className="absolute left-0 bottom-1 w-0 h-px bg-[var(--color-ink)] group-hover/btn:w-full transition-all duration-500 delay-100 ease-out"></span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
