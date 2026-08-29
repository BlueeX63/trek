"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

interface TrekEligibilityProps {
  eligibility: {
    ageRequirement?: string;
    fitnessCriteria?: string[];
    healthAwareness?: string[];
  };
}

export default function TrekEligibility({ eligibility }: TrekEligibilityProps) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight && height) {
      const hInMeters = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const calculatedBmi = w / (hInMeters * hInMeters);
      setBmi(Math.round(calculatedBmi * 10) / 10);
    }
  };

  const getBmiCategory = (value: number) => {
    if (value < 16.5) return { category: "Severely Underweight", color: "text-red-500" };
    if (value < 18.5) return { category: "Underweight", color: "text-[var(--color-primary)]" };
    if (value <= 25) return { category: "Normal", color: "text-[var(--color-ink)]" };
    if (value <= 30) return { category: "Overweight", color: "text-[var(--color-primary)]" };
    return { category: "Obese", color: "text-red-500" };
  };

  return (
    <section id="eligibility" className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 scroll-mt-24">
      
      <div className="mb-16 border-b border-[var(--color-ink)]/10 pb-8">
        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 mb-4 block">
          Preparation
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)] mb-4">
          Eligibility & Fitness
        </h2>
        <p className="text-[var(--color-ink)]/60 text-sm md:text-base max-w-xl font-light">
          High altitude treks require a baseline of physical fitness. Review the criteria below and check your readiness.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Fitness Requirements List */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-[var(--color-ink)]/10 pb-6">
            <span className="font-serif text-xl text-[var(--color-ink)]">Age Requirement</span>
            <span className="text-[var(--color-ink)]/60 text-sm font-light">{eligibility.ageRequirement || "No specific age requirement listed."}</span>
          </div>
          <div className="flex flex-col gap-2 border-b border-[var(--color-ink)]/10 pb-6">
            <span className="font-serif text-xl text-[var(--color-ink)]">Fitness Criteria</span>
            <ul className="text-[var(--color-ink)]/60 text-sm font-light list-disc list-inside space-y-2">
              {(eligibility.fitnessCriteria || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 border-b border-[var(--color-ink)]/10 pb-6">
            <span className="font-serif text-xl text-[var(--color-ink)]">Health & Awareness</span>
            <ul className="text-[var(--color-ink)]/60 text-sm font-light list-disc list-inside space-y-2">
              {(eligibility.healthAwareness || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* BMI Calculator */}
        <div className="bg-[var(--color-ink)] text-[var(--color-paper)] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 p-8 opacity-[0.03]">
            <Calculator className="w-64 h-64" />
          </div>
          
          <h3 className="text-3xl font-serif text-[var(--color-paper)] mb-10 relative z-10">
            Calculate Your BMI
          </h3>
          
          <div className="flex flex-col gap-8 relative z-10">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/50">Weight (KG)</label>
              <input 
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 75"
                className="bg-transparent border-b border-[var(--color-paper)]/30 py-3 text-2xl font-serif text-[var(--color-paper)] placeholder:text-[var(--color-paper)]/20 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/50">Height (CM)</label>
              <input 
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                className="bg-transparent border-b border-[var(--color-paper)]/30 py-3 text-2xl font-serif text-[var(--color-paper)] placeholder:text-[var(--color-paper)]/20 focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
            </div>

            <button 
              onClick={calculateBMI}
              className="mt-6 border border-[var(--color-paper)] text-[var(--color-paper)] text-xs font-sans font-bold uppercase tracking-widest py-4 hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)] transition-colors"
            >
              Calculate
            </button>

            {bmi !== null && (
              <div className="mt-8 bg-[var(--color-paper)] p-8 text-center text-[var(--color-ink)]">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]/50 block mb-2">Your BMI Value</span>
                <span className="text-6xl font-serif block mb-4">{bmi}</span>
                <span className={`text-sm font-sans font-bold uppercase tracking-widest ${getBmiCategory(bmi).color}`}>
                  {getBmiCategory(bmi).category}
                </span>
                
                {bmi > 29 && (
                  <p className="text-red-500 text-[10px] font-sans uppercase tracking-wider mt-6 border-t border-red-500/20 pt-4">
                    * If a trekker's BMI is more than the normal range, consult our coordinator before booking.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
