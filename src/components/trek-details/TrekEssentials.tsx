"use client";

import { Backpack } from "lucide-react";

interface TrekEssentialsProps {
  essentials: {
    basicGear?: string[];
  };
}

export default function TrekEssentials({ essentials }: TrekEssentialsProps) {
  return (
    <section id="essentials" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 scroll-mt-24">
      <div className="mb-16 border-b border-[var(--color-ink)]/10 pb-8">
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-4 block">
          Equipment
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] mb-4">
          Trek Essentials
        </h2>
        <p className="text-[var(--color-ink)]/60 text-sm md:text-base max-w-xl font-light">
          A comprehensive packing list to ensure you are well-prepared for the expedition.
        </p>
      </div>

      <div className="bg-[var(--color-stone)]/30 border border-[var(--color-ink)]/10 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <Backpack className="w-64 h-64" />
        </div>
        
        <h3 className="text-2xl font-serif text-[var(--color-ink)] mb-8 border-b border-[var(--color-ink)]/10 pb-4 inline-block">
          Basic Gear
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {(essentials.basicGear || []).map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-[var(--color-paper)] p-6 border border-[var(--color-ink)]/5 hover:border-[var(--color-primary)]/30 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-1.5 shrink-0"></div>
              <span className="text-[var(--color-ink)]/80 font-sans font-light text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
