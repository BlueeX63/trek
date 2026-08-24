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
    <section ref={containerRef} className="bg-[#1B4332] py-24 md:py-48 relative overflow-hidden clip-mountain-bottom pb-48 -mb-24 z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-20 text-center">
          How It Works
        </h2>

        <div className="relative">
          <div className="absolute left-[24px] md:left-[28px] top-0 bottom-0 w-[2px] bg-white/10" />
          
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[24px] md:left-[28px] top-0 w-[2px] bg-[#F4A261] origin-top"
          />

          <div className="flex flex-col gap-16">
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
                  className="flex items-start gap-8 md:gap-12 relative z-10"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1B4332] border-2 border-white/20 flex items-center justify-center text-lg font-bold text-white shadow-sm relative">
                    <motion.div 
                      style={{ opacity: stageOpacity }}
                      className="absolute inset-0 rounded-full border-2 border-[#F4A261]" 
                    />
                    {stage.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{stage.title}</h3>
                    <p className="text-white/70 max-w-sm leading-relaxed font-medium">{stage.desc}</p>
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
