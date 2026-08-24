"use client";

import { useState } from "react";
import TrekCard from "./TrekCard";
import { SlidersHorizontal, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { treks } from "@/data/treks";

const FILTERS = ["Country", "Season", "Region", "Month", "Difficulty", "Interests", "Theme"];
const QUICK_FILTERS = ["Upcoming Treks", "Uttarakhand", "Kashmir", "Himachal Pradesh", "Winter", "Summer", "Moderate"];

export default function TrekExplorer() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Upcoming Treks");

  const filteredTreks = treks.filter(trek => {
    if (activeFilter === "Upcoming Treks") return true;
    if (activeFilter === "Uttarakhand" || activeFilter === "Kashmir" || activeFilter === "Himachal Pradesh") {
      return trek.region === activeFilter;
    }
    if (activeFilter === "Winter" || activeFilter === "Summer") {
      return trek.season.includes(activeFilter);
    }
    if (activeFilter === "Moderate") {
      return trek.difficulty === "Moderate";
    }
    return true;
  });

  return (
    <section className="bg-[#FDFBF7] text-[#0A1910] py-24 px-6 md:px-12 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <span className="text-[#F4A261] font-bold tracking-widest uppercase text-sm mb-4 block">
            The Expeditions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-[#1B4332]">
            Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4332] to-[#F4A261]">Next Adventure</span>
          </h2>
        </div>
        
        <button 
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center gap-2 text-sm font-bold border-2 border-[#1B4332]/20 text-[#1B4332] px-6 py-3 rounded-full hover:bg-[#1B4332]/5 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-w-7xl mx-auto overflow-hidden border-t border-b border-[#1B4332]/10 mb-12"
          >
            <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {FILTERS.map((filter) => (
                <div key={filter} className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-[#F4A261] uppercase tracking-widest">{filter}</span>
                  <select className="bg-transparent border-b border-[#1B4332]/20 pb-2 text-sm font-bold text-[#1B4332] focus:border-[#F4A261] focus:outline-none transition-colors cursor-pointer appearance-none rounded-none">
                    <option value="">All {filter}s</option>
                  </select>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto mb-12 flex gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-[#1B4332]/10">
        {QUICK_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
              activeFilter === filter 
                ? "bg-[#1B4332] text-white border-2 border-[#1B4332] scale-105" 
                : "bg-white text-[#1B4332]/70 border-2 border-[#1B4332]/10 hover:border-[#1B4332]/30 hover:text-[#1B4332]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredTreks.map((trek, index) => (
            <motion.div
              key={trek.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TrekCard trek={trek} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
