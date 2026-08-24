"use client";

import { motion } from "framer-motion";

export default function ExpeditionStats() {
  const STATS = [
    { label: "Active Expeditions", value: "24+" },
    { label: "High-Altitude Summits", value: "12,400" },
    { label: "Safety Record", value: "100%" },
    { label: "Global Mountaineers", value: "85K" }
  ];

  return (
    <section className="bg-[#1B4332] py-24 px-6 md:px-12 relative overflow-hidden clip-mountain z-20 -mt-12">
      <div className="absolute inset-0 bg-[#0A1910]/40" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#F4A261] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
