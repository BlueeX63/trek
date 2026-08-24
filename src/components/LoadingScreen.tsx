"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [altitude, setAltitude] = useState(0);
  const targetAltitude = 4270; // Example peak altitude

  useEffect(() => {
    // Altitude counter effect
    let start = 0;
    const duration = 2500;
    const increment = targetAltitude / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetAltitude) {
        setAltitude(targetAltitude);
        clearInterval(timer);
        setTimeout(() => setLoading(false), 800);
      } else {
        setAltitude(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal text-offwhite font-sans"
        >
          {/* Topographic background suggestion */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)"/>
             </svg>
          </div>

          <div className="z-10 text-center flex flex-col items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-widest leading-none">
                Xplore
              </h1>
              <h1 className="text-4xl md:text-6xl font-serif uppercase tracking-widest leading-none">
                The Dreams
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-sm tracking-[0.3em] text-ice/80">ALTITUDE</div>
              <div className="text-5xl font-mono tracking-tighter">
                {altitude.toString().padStart(4, "0")}M
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: altitude === targetAltitude ? 1 : 0 }}
              className="text-xs tracking-widest text-earth uppercase mt-8"
            >
              The journey begins.
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
