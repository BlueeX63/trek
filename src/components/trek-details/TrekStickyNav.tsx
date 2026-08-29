"use client";

import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "eligibility", label: "Eligibility" },
  { id: "how-to-reach", label: "How to Reach" },
  { id: "cost-terms", label: "Cost Terms" },
  { id: "essentials", label: "Essentials" },
  { id: "cancellation", label: "Policies" },
  { id: "gallery", label: "Gallery" },
  { id: "faqs", label: "FAQs" },
];

export default function TrekStickyNav() {
  const [activeSection, setActiveSection] = useState("overview");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) { 
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate the active indicator pill
  useEffect(() => {
    const activeBtn = buttonRefs.current.get(activeSection);
    const indicator = indicatorRef.current;
    if (activeBtn && indicator) {
      const { offsetLeft, offsetWidth } = activeBtn;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by 90px to account for the top Navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full z-20 bg-[var(--color-paper)] border-b border-[var(--color-ink)]/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <nav
          ref={navRef}
          className="relative flex items-center gap-1 overflow-x-auto no-scrollbar py-3"
          role="tablist"
        >
          {/* Sliding active indicator */}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-[2px] bg-[var(--color-ink)] rounded-full transition-all duration-300 ease-out"
            style={{ width: 0 }}
          />

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                ref={(el) => { if (el) buttonRefs.current.set(item.id, el); }}
                onClick={() => scrollToSection(item.id)}
                role="tab"
                aria-selected={isActive}
                className={`relative px-4 py-2.5 text-[11px] font-sans font-medium tracking-[0.12em] uppercase whitespace-nowrap transition-all duration-200 rounded-sm cursor-pointer ${
                  isActive 
                    ? "text-[var(--color-ink)]" 
                    : "text-[var(--color-ink)]/35 hover:text-[var(--color-ink)]/70"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
