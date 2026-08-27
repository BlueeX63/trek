"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "eligibility", label: "Eligibility" },
  { id: "how-to-reach", label: "How to Reach" },
  { id: "cost-terms", label: "Cost Terms" },
  { id: "essentials", label: "Essentials" },
  { id: "cancellation", label: "Policies" },
  { id: "faqs", label: "FAQS" },
];

export default function TrekStickyNav() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSticky, setIsSticky] = useState(false);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by 180px to account for both the main Navbar and this TrekStickyNav
      const y = element.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full z-40 sticky top-[72px] bg-[var(--color-paper)]/95 backdrop-blur-md py-4 border-b border-[var(--color-ink)]/10 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative py-2 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase whitespace-nowrap transition-colors ${
                activeSection === item.id 
                  ? "text-[var(--color-ink)]" 
                  : "text-[var(--color-ink)]/40 hover:text-[var(--color-ink)]"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-terracotta)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
