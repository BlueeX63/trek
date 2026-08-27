"use client";

import { MapPin, Navigation, Map } from "lucide-react";

interface TrekHowToReachProps {
  howToReach: {
    meetingPlace: string;
    dropOff: string;
    options: string[];
  };
}

export default function TrekHowToReach({ howToReach }: TrekHowToReachProps) {
  return (
    <section id="how-to-reach" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 scroll-mt-24">
      <div className="mb-16 border-b border-[var(--color-ink)]/10 pb-8">
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-4 block">
          Logistics
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] mb-4">
          How to Reach
        </h2>
        <p className="text-[var(--color-ink)]/60 text-sm md:text-base max-w-xl font-light">
          Details on arriving at the base camp and meeting points.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        
        {/* Left Col: Pick up / Drop off */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <div className="bg-[var(--color-ink)] p-8 text-[var(--color-paper)] relative overflow-hidden">
            <div className="absolute -top-4 -right-4 opacity-[0.05]">
              <MapPin className="w-32 h-32" />
            </div>
            
            <h3 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/50 mb-2">Meeting Point</h3>
            <p className="font-serif text-2xl mb-8 relative z-10">{howToReach.meetingPlace}</p>
            
            <h3 className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/50 mb-2 border-t border-[var(--color-paper)]/20 pt-6">Drop Off</h3>
            <p className="font-serif text-xl relative z-10">{howToReach.dropOff}</p>
          </div>
        </div>

        {/* Right Col: Options */}
        <div className="lg:col-span-2">
          <div className="bg-[var(--color-paper)] border border-[var(--color-ink)]/10 p-8 md:p-12 h-full">
            <h3 className="text-2xl font-serif text-[var(--color-ink)] mb-8 flex items-center gap-4 border-b border-[var(--color-ink)]/10 pb-4">
              <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
              Travel Options
            </h3>
            
            <ul className="flex flex-col gap-6">
              {howToReach.options.map((option, idx) => (
                <li key={idx} className="flex gap-6 items-start pb-6 border-b border-[var(--color-ink)]/5 last:border-0 last:pb-0">
                  <span className="text-[var(--color-ink)]/30 font-serif text-3xl leading-none mt-1">{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="text-[var(--color-ink)]/80 font-sans font-light text-sm leading-relaxed">{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
