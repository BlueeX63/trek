"use client";

import { useState, useEffect } from "react";
import TrekCard from "./TrekCard";
import { SlidersHorizontal, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { treks } from "@/data/treks";
import Link from "next/link";

const COMPREHENSIVE_FILTERS = [
  {
    name: "SEASON",
    options: ["Spring", "Summer", "Autumn", "Monsoon", "Winter"]
  },
  {
    name: "REGION",
    options: ["Himachal Pradesh", "Kashmir", "Ladakh", "Uttarakhand"]
  },
  {
    name: "MONTH",
    options: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  {
    name: "DIFFICULTY",
    options: ["Easy", "Easy to Moderate", "Moderate", "Moderate to Difficult", "Difficult", "Challenging"]
  }
];

const QUICK_FILTERS = ["All Treks", ...COMPREHENSIVE_FILTERS.flatMap(c => c.options)];

export default function TrekExplorer({ limit, showViewMore }: { limit?: number, showViewMore?: boolean }) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All Treks");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const filter = params.get('filter');
      // Allow any filter from QUICK_FILTERS or COMPREHENSIVE_FILTERS
      const allOptions = QUICK_FILTERS.concat(COMPREHENSIVE_FILTERS.flatMap(f => f.options));
      if (filter && allOptions.includes(filter)) {
        setActiveFilter(filter);
      }
    }
  }, []);

  const filteredTreks = treks.filter(trek => {
    const matchesFilter = activeFilter === "All Treks" || 
                          trek.categories?.includes(activeFilter) || 
                          trek.difficulty === activeFilter || 
                          trek.season?.includes(activeFilter) || 
                          trek.region === activeFilter;
                          
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = query === "" ||
                          trek.name.toLowerCase().includes(query) ||
                          trek.location.toLowerCase().includes(query) ||
                          trek.region.toLowerCase().includes(query) ||
                          trek.difficulty.toLowerCase().includes(query) ||
                          (trek.season && trek.season.some(s => s.toLowerCase().includes(query))) ||
                          (trek.categories && trek.categories.some(c => c.toLowerCase().includes(query)));
                          
    return matchesFilter && matchesSearch;
  });

  const displayedTreks = limit ? filteredTreks.slice(0, limit) : filteredTreks;

  return (
    <section className="bg-[var(--color-paper)] text-[var(--color-ink)] py-24 px-6 md:px-12 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
             <div className="w-8 h-[1px] bg-[var(--color-terracotta)]"></div>
             <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/50">
               The Expeditions
             </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] leading-none">
            Plan Your <br /><span className="italic font-light">Next Adventure</span>
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search expeditions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-[var(--color-ink)]/30 text-[var(--color-ink)] px-2 py-3 pl-8 focus:outline-none focus:border-[var(--color-ink)] transition-colors text-sm font-sans placeholder-[var(--color-ink)]/40"
            />
            <Search className="w-4 h-4 absolute left-1 top-1/2 -translate-y-1/2 text-[var(--color-ink)]/40" />
          </div>

          <button 
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center justify-center gap-3 text-[10px] w-full sm:w-auto font-sans font-bold uppercase tracking-widest border border-[var(--color-ink)]/30 text-[var(--color-ink)] px-6 py-3 min-h-[46px] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors shrink-0"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-w-7xl mx-auto overflow-hidden border-t border-[var(--color-ink)]/10"
          >
            <div className="py-12 flex flex-col gap-10">
              {COMPREHENSIVE_FILTERS.map((category) => (
                <div key={category.name} className="flex flex-col gap-4">
                  <span className="text-sm font-sans font-bold text-[var(--color-ink)]/60 uppercase tracking-[0.1em]">
                    {category.name}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {category.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setActiveFilter(option)}
                        className={`px-5 py-2.5 rounded-full border text-sm font-sans transition-all duration-300 ${
                          activeFilter === option
                            ? "bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]"
                            : "bg-transparent text-[var(--color-ink)] border-[var(--color-ink)]/20 hover:border-[var(--color-ink)]/60"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto mb-16 flex gap-6 overflow-x-auto pb-4 no-scrollbar border-b border-[var(--color-ink)]/10">
        {QUICK_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap pb-2 text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 border-b-2 ${
              activeFilter === filter 
                ? "text-[var(--color-ink)] border-[var(--color-terracotta)]" 
                : "text-[var(--color-ink)]/40 border-transparent hover:text-[var(--color-ink)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {displayedTreks.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {displayedTreks.map((trek, index) => (
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
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto py-24 flex flex-col items-center justify-center text-center border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/5"
        >
          <Search className="w-12 h-12 text-[var(--color-ink)]/30 mb-6" strokeWidth={1} />
          <h3 className="text-2xl font-serif text-[var(--color-ink)] mb-2">No expeditions found</h3>
          <p className="text-sm font-sans text-[var(--color-ink)]/60 max-w-md">
            We couldn't find any treks matching your current search or filters. Try adjusting your search query or clearing some filters.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("All Treks");
            }}
            className="mt-8 text-[10px] font-sans font-bold uppercase tracking-widest text-[var(--color-terracotta)] hover:text-[var(--color-ink)] transition-colors border-b border-[var(--color-terracotta)]/30 pb-1"
          >
            Clear Search & Filters
          </button>
        </motion.div>
      )}

      {showViewMore && displayedTreks.length > 0 && (
        <div className="max-w-7xl mx-auto mt-16 flex justify-center">
          <Link 
            href={`/expeditions${activeFilter !== "All Treks" ? `?filter=${encodeURIComponent(activeFilter)}` : ""}`} 
            className="group relative px-8 py-4 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden flex items-center gap-3"
          >
            <span className="relative z-10 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
              View All Expeditions
            </span>
            <div className="absolute inset-0 bg-[var(--color-terracotta)] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          </Link>
        </div>
      )}
    </section>
  );
}
