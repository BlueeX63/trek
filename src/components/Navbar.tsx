"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkPage = pathname === "/" || pathname.includes("/treks/");

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#1B4332]/95 backdrop-blur-md py-4 shadow-lg text-white" 
        : `py-6 ${isDarkPage ? 'text-white' : 'text-[#1B4332]'}`
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-wider uppercase leading-none">
              Xplore The
            </span>
            <span className={`font-display text-lg font-medium tracking-[0.2em] uppercase leading-none mt-1 ${isScrolled ? 'text-[#F4A261]' : isDarkPage ? 'text-[#F4A261]' : 'text-[#F4A261]'}`}>
              Dreams
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/expeditions" className="text-sm font-medium tracking-wide uppercase hover:text-[#F4A261] transition-colors">
            Expeditions
          </Link>
          <Link href="/journal" className="text-sm font-medium tracking-wide uppercase hover:text-[#F4A261] transition-colors">
            Journal
          </Link>
          <Link href="/about" className="text-sm font-medium tracking-wide uppercase hover:text-[#F4A261] transition-colors">
            About Us
          </Link>
          
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#1B4332] flex flex-col items-center justify-center gap-8 z-40 text-white">
            <Link href="/expeditions" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium tracking-widest uppercase">Expeditions</Link>
            <Link href="/journal" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium tracking-widest uppercase">Journal</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-medium tracking-widest uppercase">About Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
