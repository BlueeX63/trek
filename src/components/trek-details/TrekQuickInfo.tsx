"use client";

import React from "react";
import { MapPin, Clock, Mountain, Activity, Navigation, Phone, Mail, ArrowRight } from "lucide-react";

interface TrekQuickInfoProps {
  location: string;
  duration: string;
  maxAltitude: string;
  distance: string;
  grade: string;
  price: number;
}

export default function TrekQuickInfo({
  location,
  duration,
  maxAltitude,
  distance,
  grade,
  price
}: TrekQuickInfoProps) {
  return (
    <section className="relative w-full border-t border-[var(--color-ink)]/20 bg-[var(--color-paper)]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row border-x border-[var(--color-ink)]/10 mx-6 md:mx-12">
        
        {/* Left Side: Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 flex-grow border-b lg:border-b-0 border-[var(--color-ink)]/10">
          <StatItem icon={<MapPin />} label="Location" value={location} className="border-r border-b md:border-b-0 border-[var(--color-ink)]/10" />
          <StatItem icon={<Clock />} label="Duration" value={duration} className="border-r md:border-r border-b md:border-b-0 border-[var(--color-ink)]/10" />
          <StatItem icon={<Mountain />} label="Max Altitude" value={maxAltitude} className="border-r border-b md:border-b-0 border-[var(--color-ink)]/10" />
          <StatItem icon={<Navigation />} label="Distance" value={distance} className="border-r border-b md:border-b-0 border-[var(--color-ink)]/10" />
          <StatItem icon={<Activity />} label="Grade" value={grade} className="border-[var(--color-ink)]/10" />
        </div>

        {/* Right Side: Price & Contact */}
        <div className="flex flex-col md:flex-row items-center border-l border-[var(--color-ink)]/10">
          
          <div className="flex flex-col justify-center p-6 lg:p-8 border-r md:border-r border-b md:border-b-0 border-[var(--color-ink)]/10 bg-[var(--color-stone)]/30 min-h-full">
            <span className="text-[10px] font-bold text-[var(--color-ink)]/50 uppercase tracking-[0.2em] mb-4">Support</span>
            <a href="tel:+919520557784" className="flex items-center gap-3 text-xs text-[var(--color-ink)] font-medium font-sans mb-3 hover:text-[var(--color-primary)] transition-colors cursor-pointer">
              <Phone className="w-3 h-3" />
              <span>9520557784 / 9520547784</span>
            </a>
            <a href="mailto:xplorethedreams@gmail.com" className="flex items-center gap-3 text-xs text-[var(--color-ink)] font-medium font-sans hover:text-[var(--color-primary)] transition-colors cursor-pointer">
              <Mail className="w-3 h-3" />
              <span>xplorethedreams@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-col justify-center items-center p-6 lg:p-10 min-h-full">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]/40 mb-2">Starting from</span>
            <div className="text-3xl md:text-5xl font-serif text-[var(--color-ink)] leading-none mb-6">
              ₹{price.toLocaleString()}
            </div>
            <a 
              href="https://wa.me/919520557784" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full border border-[var(--color-ink)] px-6 py-4 text-xs font-sans font-semibold uppercase tracking-widest text-[var(--color-ink)] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
            >
              Chat on WhatsApp
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

function StatItem({ icon, label, value, className = "" }: { icon: React.ReactNode; label: string; value: string; className?: string }) {
  return (
    <div className={`flex flex-col justify-center p-6 lg:p-8 hover:bg-[var(--color-ink)]/5 transition-colors ${className}`}>
      <div className="text-[var(--color-ink)]/30 mb-6">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
      </div>
      <span className="text-[10px] font-sans font-semibold text-[var(--color-ink)]/40 uppercase tracking-[0.2em] mb-2">{label}</span>
      <span className="font-serif text-xl md:text-2xl text-[var(--color-ink)] leading-tight">{value}</span>
    </div>
  );
}
