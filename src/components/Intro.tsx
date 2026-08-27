"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"]
  });

  const words = [
    "Some", "places", "are", "visited.",
    "Others", "become", "part", "of", "you."
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[var(--color-paper)] text-[var(--color-ink)] flex flex-col items-center justify-center px-6 md:px-12 py-32"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-serif text-center leading-tight flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end], [20, 0]);
            
            return (
              <motion.span 
                key={i} 
                style={{ opacity, y }}
                className={word.includes(".") ? "text-[var(--color-primary)] mr-4" : ""}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
