"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513689125086-6c432170e843?q=80&w=2500&auto=format&fit=crop"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#1B4332] overflow-hidden flex flex-col justify-center pt-20">
      
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={BACKGROUND_IMAGES[currentIndex]}
              alt="Mountain Peaks"
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft luxury overlay */}
        <div className="absolute inset-0 bg-[#1B4332]/40 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4A261]/20 border border-[#F4A261]/30 text-[#F4A261] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Premium Expeditions
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[1.1] tracking-tight mb-8">
            Experience Absolute <br/>
            <span className="italic font-light text-[#FDFBF7]/90">Natural Majesty.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#FDFBF7]/80 max-w-2xl font-light leading-relaxed mb-10">
            Xplore the Dreams crafts premium high-altitude expeditions for those seeking extraordinary landscapes without compromising on safety or comfort.
          </p>
          
          <Link 
            href="/expeditions"
            className="group flex items-center gap-4 bg-[#F4A261] text-white px-8 py-4 rounded-full font-medium hover:bg-[#E39050] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Find Your Expedition
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {BACKGROUND_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex ? "w-12 bg-[#F4A261]" : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
