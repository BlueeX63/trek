"use client";

import { AlertTriangle, Clock } from "lucide-react";

interface TrekCancellationProps {
  cancellation: {
    policies: { timeFrame: string; refundOptions: string[] }[];
    emergencyCases: string;
    notes: string[];
  };
}

export default function TrekCancellation({ cancellation }: TrekCancellationProps) {
  return (
    <section id="cancellation" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 scroll-mt-24">
      <div className="mb-16 border-b border-[var(--color-ink)]/10 pb-8">
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-4 block">
          Policies
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] mb-4">
          Cancellation Terms
        </h2>
        <p className="text-[var(--color-ink)]/60 text-sm md:text-base max-w-xl font-light">
          Review our cancellation policies and refund options before booking.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Timeline Policies */}
        <div className="flex flex-col gap-8">
          {cancellation.policies.map((policy, idx) => (
            <div key={idx} className="bg-[var(--color-paper)] border border-[var(--color-ink)]/10 p-8 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-ink)]/10"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-4 h-4 text-[var(--color-ink)]/50" />
                <h3 className="font-serif text-xl text-[var(--color-ink)]">{policy.timeFrame}</h3>
              </div>
              
              <ul className="space-y-3">
                {policy.refundOptions.map((option, oIdx) => (
                  <li key={oIdx} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5 shrink-0"></div>
                    <span className="text-[var(--color-ink)]/70 font-sans font-light text-sm">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency & Notes */}
        <div className="flex flex-col gap-8">
          
          <div className="bg-[var(--color-stone)]/30 border border-[var(--color-ink)]/10 p-8 relative">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-[var(--color-primary)]" />
              <h3 className="font-serif text-2xl text-[var(--color-ink)]">Emergency Cases</h3>
            </div>
            <p className="text-[var(--color-ink)]/70 font-sans font-light text-sm leading-relaxed">
              {cancellation.emergencyCases}
            </p>
          </div>

          <div className="bg-[var(--color-paper)] border border-[var(--color-ink)]/10 p-8">
            <h3 className="font-serif text-xl text-[var(--color-ink)] mb-6">Important Notes</h3>
            <ul className="space-y-4">
              {cancellation.notes.map((note, idx) => (
                <li key={idx} className="flex gap-3 items-start border-b border-[var(--color-ink)]/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[var(--color-ink)]/40 font-serif text-sm">{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="text-[var(--color-ink)]/70 font-sans font-light text-sm">{note}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
