"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Heart, Bookmark, User, LogOut, ShieldCheck, ChevronDown, Sparkles } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, wishlist = [], bookmarks = [] } = useAppContext();
  const isAdmin = user?.email?.toLowerCase() === process.env.NEXT_PUBLIC_ADMIN_EMAIL?.toLowerCase() || user?.user_metadata?.role === 'admin';
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };

    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text colors
  const textClass = "text-[var(--color-ink)] transition-colors duration-300";

  const getLinkClass = (path: string) => {
    const isActive = pathname === path || (path === "/expeditions" && pathname?.startsWith("/treks"));
    return `text-[10px] font-sans font-semibold tracking-[0.2em] uppercase transition-colors ${isActive ? "text-[var(--color-primary)]" : `hover:text-[var(--color-primary)] ${textClass}`
      }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path || (path === "/expeditions" && pathname?.startsWith("/treks"));
    return `text-4xl font-serif font-medium tracking-wide transition-colors ${isActive ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
      }`;
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 border-b py-4 ${isScrolled
        ? "bg-[var(--color-paper)] border-[var(--color-ink)]/10 shadow-sm"
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
              sizes="(max-width: 768px) 160px, 224px"
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
          <Link href="/articles" className={getLinkClass("/articles")}>
            Journal
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>

          <div className="flex items-center gap-6 border-l border-[var(--color-ink)]/10 pl-6 ml-2">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className={`group flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all duration-300 ${profileDropdownOpen
                      ? "border-[var(--color-primary)] bg-[var(--color-ink)] text-[var(--color-paper)] shadow-md"
                      : "border-[var(--color-ink)]/15 hover:border-[var(--color-ink)]/40 hover:bg-[var(--color-ink)]/5 text-[var(--color-ink)]"
                    }`}
                  aria-expanded={profileDropdownOpen}
                  aria-label="Open User Menu"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-[var(--color-ink)] flex items-center justify-center text-[10px] font-sans font-black uppercase">
                    {(user.user_metadata?.full_name || user.email || 'U')[0]}
                  </div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest hidden lg:block">
                    {user.user_metadata?.full_name?.split(' ')[0] || user.email?.split('@')[0] || 'Explorer'}
                  </span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 opacity-60 ${profileDropdownOpen ? 'rotate-180 text-[var(--color-primary)]' : 'group-hover:translate-y-0.5'}`} />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-[#0F0F0F]/95 backdrop-blur-2xl border border-white/10 text-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] p-2 z-[110] flex flex-col origin-top-right animate-in fade-in zoom-in-95 duration-200">

                    {/* User Identity Header */}
                    <div className="p-3 pb-3.5 mb-1 bg-white/[0.03] border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-amber-200 text-[#0F0F0F] flex items-center justify-center font-serif text-base font-bold shadow-md">
                            {(user.user_metadata?.full_name || user.email || 'U')[0].toUpperCase()}
                          </div>
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0F0F0F]" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-serif font-medium text-white truncate">
                            {user.user_metadata?.full_name || user.email?.split('@')[0]}
                          </span>
                          <span className="text-[10px] font-sans text-white/50 truncate font-light">
                            {user.email}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                          {isAdmin ? "Expedition Admin" : "Verified Explorer"}
                        </span>
                        <span className="text-[9px] font-sans tracking-widest text-white/40 uppercase">PRO</span>
                      </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="flex flex-col gap-0.5 my-1">
                      <Link
                        href="/wishlist"
                        className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-[11px] font-sans font-medium text-white/80 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-[var(--color-primary)]/20 flex items-center justify-center text-white/70 group-hover:text-[var(--color-primary)] transition-colors">
                            <Heart className="w-3.5 h-3.5" strokeWidth={1.75} />
                          </div>
                          <span>Trek Wishlist</span>
                        </div>
                        <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-md bg-white/5 text-white/60 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors">
                          {wishlist.length}
                        </span>
                      </Link>

                      <Link
                        href="/bookmarks"
                        className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-[11px] font-sans font-medium text-white/80 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-[var(--color-primary)]/20 flex items-center justify-center text-white/70 group-hover:text-[var(--color-primary)] transition-colors">
                            <Bookmark className="w-3.5 h-3.5" strokeWidth={1.75} />
                          </div>
                          <span>Saved Articles</span>
                        </div>
                        <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-md bg-white/5 text-white/60 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors">
                          {bookmarks.length}
                        </span>
                      </Link>

                      {isAdmin && (
                        <>
                          <div className="h-[1px] bg-white/10 my-1 mx-2" />
                          <Link
                            href="/admin"
                            className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-[11px] font-sans font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)] hover:text-black transition-all duration-200"
                            onClick={() => setProfileDropdownOpen(false)}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-[var(--color-primary)]/20 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                                <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2} />
                              </div>
                              <span className="font-bold tracking-wide">Admin Control</span>
                            </div>
                            <Sparkles className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                          </Link>
                        </>
                      )}
                    </div>

                    {/* Footer / Sign Out */}
                    <div className="pt-1 mt-1 border-t border-white/10">
                      <button
                        onClick={() => { setProfileDropdownOpen(false); logout(); }}
                        className="w-full group flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[11px] font-sans font-medium text-red-400 hover:text-red-200 hover:bg-red-500/15 transition-all duration-200 text-left"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center transition-colors">
                          <LogOut className="w-3.5 h-3.5 text-red-400" strokeWidth={1.75} />
                        </div>
                        <span>Sign Out</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>
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
            <Link href="/articles" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/articles")}>Journal</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/about")}>About</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/contact")}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
