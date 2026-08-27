"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Heart, User, LogOut } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Since the scrolled navbar is light, and the tops of all current pages (Home, About, Contact) are light,
  // we can safely use the dark ink color everywhere without relying on buggy mix-blend-modes.
  const textClass = "text-[var(--color-ink)] transition-colors duration-300";

  const getLinkClass = (path: string) => {
    const isActive = pathname === path || (path === "/expeditions" && pathname?.startsWith("/treks"));
    return `text-[10px] font-sans font-semibold tracking-[0.2em] uppercase transition-colors ${
      isActive ? "text-[var(--color-primary)]" : `hover:text-[var(--color-primary)] ${textClass}`
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path || (path === "/expeditions" && pathname?.startsWith("/treks"));
    return `text-4xl font-serif font-medium tracking-wide transition-colors ${
      isActive ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
    }`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b py-4 ${
      isScrolled 
        ? "bg-[var(--color-paper)]/80 backdrop-blur-md border-[var(--color-ink)]/10" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group z-50">
          <div className="relative w-40 h-12 md:w-56 md:h-16 transition-transform group-hover:scale-105 duration-300">
            <Image
              src="/logo.png"
              alt="Xplore The Dreams Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/expeditions" className={getLinkClass("/expeditions")}>
            Expeditions
          </Link>

          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
          
          <div className="flex items-center gap-6 border-l border-[var(--color-ink)]/10 pl-6 ml-2">
            <button 
              onClick={() => router.push(user ? '/wishlist' : '/signin')}
              className={`hover:text-[var(--color-primary)] transition-colors ${textClass}`} 
              title="Wishlist"
            >
              <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            {user ? (
              <button 
                onClick={logout}
                className={`hover:text-[var(--color-primary)] transition-colors ${textClass} flex items-center gap-2`} 
                title="Logout"
              >
                <LogOut className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest">
                  {user.user_metadata?.full_name?.split(' ')[0] || user.email?.split('@')[0] || 'User'}
                </span>
              </button>
            ) : (
              <button 
                onClick={() => router.push('/signin')}
                className={`hover:text-[var(--color-primary)] transition-colors ${textClass}`} 
                title="Profile"
              >
                <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 p-2 ${textClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[var(--color-paper)] flex flex-col items-center justify-center gap-12 z-40 text-[var(--color-ink)]">
            <Link href="/expeditions" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/expeditions")}>Expeditions</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/about")}>About</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/contact")}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
