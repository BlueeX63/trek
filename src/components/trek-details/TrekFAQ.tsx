"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface TrekFAQProps {
  faqs: FAQ[];
}

export default function TrekFAQ({ faqs }: TrekFAQProps) {
  return (
    <section id="faqs" className="w-full bg-[var(--color-paper)] py-24 scroll-mt-24 border-t border-[var(--color-ink)]/10">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 flex items-center justify-between border-b border-[var(--color-ink)]/20 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ink)]">
            FAQ
          </h2>
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-ink)]/50">
            Know before you go
          </span>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-ink)]/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
      >
        <span className={`font-serif text-xl md:text-2xl transition-colors ${isOpen ? 'text-[var(--color-terracotta)]' : 'text-[var(--color-ink)] group-hover:text-[var(--color-ink)]/70'}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[var(--color-terracotta)]' : 'text-[var(--color-ink)]/30'}`}>
          <ChevronDown className="w-6 h-6" strokeWidth={1} />
        </div>
      </button>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}
      >
        <div className="text-[var(--color-ink)]/70 leading-relaxed font-sans font-light max-w-3xl">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
