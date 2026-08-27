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
    <section className="bg-[var(--color-paper)] py-24 px-6 md:px-12 border-t border-[var(--color-ink)]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                index !== STATS.length - 1 ? "md:border-r md:border-[var(--color-ink)]/10" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-ink)] mb-4">
                {stat.value}
              </div>
              <div className="text-[10px] font-sans font-semibold text-[var(--color-ink)]/60 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
