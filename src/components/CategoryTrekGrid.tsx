"use client";

import { useState, useMemo } from "react";
import { Trek } from "@/data/treks";
import TrekCard from "@/components/TrekCard";
import CustomSelect from "@/components/CustomSelect";
import { Search, Filter } from "lucide-react";

const DIFFICULTIES = [
  "Easy",
  "Easy to Moderate",
  "Moderate",
  "Moderate to Difficult",
  "Difficult",
  "Challenging",
  "Extreme"
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export default function CategoryTrekGrid({ initialTreks }: { initialTreks: Trek[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [monthFilter, setMonthFilter] = useState("All");

  const filteredTreks = useMemo(() => {
    return initialTreks.filter((trek) => {
      // Search
      const matchesSearch = trek.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            trek.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Difficulty
      const matchesDifficulty = difficultyFilter === "All" || trek.difficulty === difficultyFilter;
      
      // Month
      const matchesMonth = monthFilter === "All" || (trek.categories && trek.categories.includes(monthFilter));

      return matchesSearch && matchesDifficulty && matchesMonth;
    });
  }, [initialTreks, searchQuery, difficultyFilter, monthFilter]);

  return (
    <section className="py-12 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 border-b border-[var(--color-ink)]/10 pb-6 gap-6 relative z-30">
        
        <div>
          <h2 className="text-3xl font-serif text-[var(--color-ink)]">
            Available <span className="italic font-light">Expeditions</span>
          </h2>
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mt-2 block">
            {filteredTreks.length} Treks Found
          </span>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <input 
              type="text" 
              placeholder="Search treks..."
              aria-label="Search treks"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border border-[var(--color-ink)]/20 px-4 py-2 pl-10 text-sm font-sans focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder-[var(--color-ink)]/30 text-[var(--color-ink)]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-ink)]/40 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Difficulty Filter */}
          <div className="relative w-full sm:w-56 z-20">
            <CustomSelect
              value={difficultyFilter}
              onChange={setDifficultyFilter}
              options={DIFFICULTIES}
              placeholder="All Difficulties"
              icon={<Filter className="w-4 h-4" />}
            />
          </div>

          {/* Month Filter */}
          <div className="relative w-full sm:w-48 z-10">
            <CustomSelect
              value={monthFilter}
              onChange={setMonthFilter}
              options={MONTHS}
              placeholder="Any Month"
              icon={<Filter className="w-4 h-4" />}
            />
          </div>

        </div>
      </div>

      {/* Grid */}
      {filteredTreks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
          {filteredTreks.map((trek, index) => (
            <TrekCard key={trek.id} trek={trek} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 flex flex-col items-center justify-center">
          <p className="text-lg font-serif text-[var(--color-ink)]/60 mb-4">No expeditions match your current filters.</p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setDifficultyFilter("All");
              setMonthFilter("All");
            }}
            className="text-xs font-sans uppercase tracking-widest text-[var(--color-primary)] hover:opacity-80 transition-opacity"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
}
