"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STAGES = [
  { num: "01", title: "Discover", desc: "Find the expedition that calls to you based on your fitness level and interests." },
  { num: "02", title: "Plan", desc: "We handle the logistics. You focus on gathering the required gear and physical training." },
  { num: "03", title: "Prepare", desc: "Physical and mental preparation for altitude. Follow our training plans." },
  { num: "04", title: "Explore", desc: "The ascent begins. One step at a time, guided by our expert leaders." },
  { num: "05", title: "Return", desc: "Come back changed. Share your memories and get certified." }
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="bg-[var(--color-ink)] py-32 md:py-48 relative overflow-hidden z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-paper)] mb-24 text-center">
          How It Works
        </h2>

        <div className="relative">
          <div className="absolute left-[36px] md:left-[44px] top-0 bottom-0 w-[1px] bg-[var(--color-paper)]/10" />
          
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[36px] md:left-[44px] top-0 w-[1px] bg-[var(--color-terracotta)] origin-top"
          />

          <div className="flex flex-col gap-24">
            {STAGES.map((stage, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const stageOpacity = useTransform(
                scrollYProgress, 
                [Math.max(0, (i - 1) / STAGES.length), i / STAGES.length], 
                [0.3, 1]
              );
              
              return (
                <motion.div 
                  key={stage.num}
                  style={{ opacity: stageOpacity }}
                  className="flex items-start gap-12 md:gap-16 relative z-10"
                >
                  <div className="flex-shrink-0 font-serif text-5xl md:text-7xl text-[var(--color-paper)]/20 group-hover:text-[var(--color-terracotta)] transition-colors duration-500 w-20 text-center bg-[var(--color-ink)] py-2">
                    {stage.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-3xl md:text-4xl font-serif text-[var(--color-paper)] mb-4">{stage.title}</h3>
                    <p className="text-[var(--color-paper)]/60 max-w-sm leading-relaxed font-sans font-light">{stage.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
