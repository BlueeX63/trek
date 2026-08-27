"use client";

import { CheckCircle2 } from "lucide-react";

interface Highlight {
  title?: string;
  description: string;
}

interface TrekOverviewProps {
  description: string[];
  highlights: Highlight[];
  stats: {
    label: string;
    value: string;
  }[];
}

export default function TrekOverview({ description, highlights, stats }: TrekOverviewProps) {
  return (
    <section id="overview" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-16 scroll-mt-24 bg-[var(--color-paper)]">
      <div className="flex flex-col lg:flex-row gap-16 border-t border-[var(--color-ink)]/10 pt-16">
        
        {/* Left Column: Description & Highlights */}
        <div className="lg:w-2/3 pr-0 lg:pr-16">
          <div>
            <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-8 border-l border-[var(--color-primary)] pl-4">
              Overview
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] mb-8 leading-tight">
              A Look at the Trek
            </h2>
            
            <div className="prose prose-lg text-[var(--color-ink)]/70 font-sans font-light leading-relaxed mb-16 max-w-none">
              {description.map((paragraph, idx) => (
                <p key={idx} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
            
            <div className="border border-[var(--color-ink)]/10 p-8 lg:p-12 relative">
              <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--color-primary)] -translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-3xl font-serif text-[var(--color-ink)] mb-8">
                Highlights
              </h3>
              
              <ul className="grid md:grid-cols-2 gap-y-6 gap-x-8">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" strokeWidth={1.5} />
                    <div className="flex flex-col">
                      {highlight.title && (
                        <span className="text-[var(--color-ink)] font-sans font-medium text-sm mb-1">{highlight.title}</span>
                      )}
                      <span className="text-[var(--color-ink)]/80 font-sans font-light text-sm">{highlight.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="lg:w-1/3">
          <div className="bg-[var(--color-stone)]/30 border border-[var(--color-ink)]/10 p-8 lg:p-10 sticky top-32">
            <h3 className="text-2xl font-serif mb-8 text-[var(--color-ink)] border-b border-[var(--color-ink)]/10 pb-4">
              Quick Facts
            </h3>
            
            <div className="flex flex-col gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col pb-4 border-b border-[var(--color-ink)]/5 last:border-0 last:pb-0">
                  <span className="text-[var(--color-ink)]/40 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] mb-1">
                    {stat.label}
                  </span>
                  <span className="text-lg font-serif text-[var(--color-ink)]">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
