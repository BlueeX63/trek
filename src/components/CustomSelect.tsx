"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function CustomSelect({ value, onChange, options, placeholder, icon, className = "" }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-transparent border border-[var(--color-ink)]/20 py-2 pr-10 text-sm font-sans focus:outline-none focus:border-[var(--color-primary)] transition-colors text-[var(--color-ink)] flex items-center justify-between text-left hover:border-[var(--color-ink)]/40 ${icon ? 'pl-10' : 'pl-4'} ${className}`}
      >
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink)]/40 pointer-events-none">{icon}</div>}
        <span className="truncate">{value === "All" || !value ? placeholder : value}</span>
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-ink)]/40 transition-transform duration-300 pointer-events-none ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-[var(--color-paper)] border border-[var(--color-ink)]/10 shadow-2xl max-h-60 overflow-y-auto flex flex-col origin-top animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            className={`w-full text-left px-4 py-2.5 text-sm font-sans transition-colors ${value === "All" ? 'text-[var(--color-primary)] bg-[var(--color-ink)]/5' : 'text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5 hover:text-[var(--color-primary)]'}`}
            onClick={() => {
              onChange("All");
              setIsOpen(false);
            }}
          >
            {placeholder}
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`w-full text-left px-4 py-2.5 text-sm font-sans transition-colors ${value === opt ? 'text-[var(--color-primary)] bg-[var(--color-ink)]/5' : 'text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5 hover:text-[var(--color-primary)]'}`}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
