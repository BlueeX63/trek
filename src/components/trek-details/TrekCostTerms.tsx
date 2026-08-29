"use client";

import { Check, X } from "lucide-react";

interface TrekCostTermsProps {
  inclusions?: string[];
  exclusions?: string[];
}

export default function TrekCostTerms({ inclusions, exclusions }: TrekCostTermsProps) {
  return (
    <section id="cost-terms" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 scroll-mt-24">
      <div className="mb-16 border-b border-[var(--color-ink)]/10 pb-8">
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-4 block">
          Pricing
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] mb-4">
          Cost Terms
        </h2>
        <p className="text-[var(--color-ink)]/60 text-sm md:text-base max-w-xl font-light">
          What is included and excluded in the expedition cost.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Inclusions */}
        <div>
          <h3 className="text-3xl font-serif text-[var(--color-ink)] mb-8 flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[var(--color-stone)] flex items-center justify-center">
              <Check className="w-5 h-5 text-[var(--color-ink)]" />
            </span>
            Inclusions
          </h3>
          <ul className="space-y-4">
            {(inclusions || []).map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start pb-4 border-b border-[var(--color-ink)]/5 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0"></div>
                <span className="text-[var(--color-ink)]/70 font-sans font-light text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div>
          <h3 className="text-3xl font-serif text-[var(--color-ink)] mb-8 flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[var(--color-stone)] flex items-center justify-center">
              <X className="w-5 h-5 text-[var(--color-primary)]" />
            </span>
            Exclusions
          </h3>
          <ul className="space-y-4">
            {(exclusions || []).map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start pb-4 border-b border-[var(--color-ink)]/5 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink)]/20 mt-2 shrink-0"></div>
                <span className="text-[var(--color-ink)]/70 font-sans font-light text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
