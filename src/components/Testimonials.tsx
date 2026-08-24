"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

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
    <section className="bg-white py-24 px-6 md:px-12 border-t border-[#1B4332]/10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/3 flex flex-col">
          <span className="text-[#F4A261] font-bold tracking-widest uppercase text-sm mb-4 block">
            The Logbook
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1B4332] mb-6">
            Real Experiences from Real Trekkers.
          </h2>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl font-display font-bold text-[#1B4332]">4.9</span>
            <div className="flex flex-col">
              <div className="flex text-[#F4A261]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-[#0A1910]/50 font-bold uppercase tracking-widest mt-1">
                Based on 12,000+ Reviews
              </span>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#1B4332]/10 flex items-center justify-center hover:border-[#F4A261] hover:text-[#F4A261] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#1B4332]/10 flex items-center justify-center hover:border-[#F4A261] hover:text-[#F4A261] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="md:w-2/3 w-full relative min-h-[250px] bg-[#FDFBF7] rounded-3xl shadow-lg p-8 md:p-12 clip-mountain-bottom">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full"
            >
              <div className="flex text-[#F4A261] mb-6">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-3xl font-display font-medium text-[#1B4332] leading-relaxed mb-12 flex-1 italic">
                "{REVIEWS[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#1B4332]/10">
                  <Image src={REVIEWS[currentIndex].avatar} alt={REVIEWS[currentIndex].name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold font-display text-lg text-[#1B4332]">{REVIEWS[currentIndex].name}</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#F4A261]">{REVIEWS[currentIndex].date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
