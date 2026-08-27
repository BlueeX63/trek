"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const REVIEWS = [
  { id: 1, name: "Vikas Jain", date: "30/07/26", text: "Dear Pankaj and Arun, Just completed the Pin Bhaba Pass trek... And it was an incredible experience! The views were absolutely breathtaking and the logistics were seamless.", rating: 5, avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" },
  { id: 2, name: "Parag Desai", date: "29/07/26", text: "Arun was an outstanding trek leader for our Pin Bhaba Pass trek. His clear, detailed instructions and constant encouragement made a challenging terrain feel conquerable.", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { id: 3, name: "Keshav Sharma", date: "29/07/26", text: "Completing the Pin Bhaba Pass in the Himalayas was an unforgettable journey. The team was phenomenal in managing safety while ensuring we enjoyed every moment of the wilderness.", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="bg-[var(--color-paper)] py-24 px-6 md:px-12 border-t border-[var(--color-ink)]/10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-stretch">
        
        <div className="md:w-1/3 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-8 h-[1px] bg-[var(--color-terracotta)]"></div>
             <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/50">
               The Logbook
             </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] mb-8 leading-tight">
            Real Experiences.
          </h2>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl font-serif text-[var(--color-ink)]">4.9</span>
            <div className="flex flex-col">
              <div className="flex text-[var(--color-terracotta)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" strokeWidth={1} />
                ))}
              </div>
              <span className="text-[10px] text-[var(--color-ink)]/50 font-sans font-semibold uppercase tracking-[0.2em] mt-2">
                Based on 12,000+ Reviews
              </span>
            </div>
          </div>

          <div className="flex gap-4 mt-auto pt-8 border-t border-[var(--color-ink)]/10">
            <button 
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 border border-[var(--color-ink)]/20 flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1} />
            </button>
            <button 
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-[var(--color-ink)]/20 flex items-center justify-center hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="md:w-2/3 w-full relative min-h-[300px] border border-[var(--color-ink)]/10 p-8 md:p-16 flex items-center bg-[var(--color-stone)]/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full w-full"
            >
              <div className="flex text-[var(--color-terracotta)] mb-8">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" strokeWidth={1} />
                ))}
              </div>
              <p className="text-xl md:text-3xl font-serif text-[var(--color-ink)] leading-relaxed mb-12 flex-1 italic">
                "{REVIEWS[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-6 mt-auto">
                <div className="relative w-14 h-14 border border-[var(--color-ink)]/20 p-1">
                  <div className="relative w-full h-full">
                    <Image 
                      src={REVIEWS[currentIndex].avatar} 
                      alt={`Avatar of ${REVIEWS[currentIndex].name}`} 
                      fill
                      sizes="50px"
                      className="object-cover grayscale" 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-xl text-[var(--color-ink)]">{REVIEWS[currentIndex].name}</span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-ink)]/50">{REVIEWS[currentIndex].date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
