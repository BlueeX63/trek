"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Mail, Phone } from "lucide-react";

// Inline SVGs for social icons to avoid lucide-react export issues
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)] pt-20 pb-12 px-6 md:px-12 relative overflow-hidden z-20 border-t border-[var(--color-paper)]/10">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-32">

          {/* Brand Column */}
          <div className="lg:col-span-5 pr-8">
            <Link href="/" className="inline-flex mb-8 bg-white px-3 py-2 rounded-xl">
              <div className="relative w-40 h-12 md:w-56 md:h-16">
                <Image
                  src="/logo.png"
                  alt="Xplore The Dreams Logo"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </Link>
            <p className="text-[var(--color-paper)]/60 font-sans font-light text-sm leading-relaxed max-w-sm mb-12">
              We craft premium high-altitude expeditions for those seeking extraordinary landscapes without compromising on safety or comfort.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1H9J64uyDG/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-paper)]/20 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/xplorethedreams" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-paper)]/20 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/xplore-the-dreams-6977b3329?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-paper)]/20 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/xplorethedreams" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-paper)]/20 flex items-center justify-center hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Expeditions */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-semibold text-[10px] mb-8 uppercase tracking-[0.3em] text-[var(--color-primary)]">Expeditions</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="/categories/uttarakhand" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Uttarakhand Treks</Link></li>
              <li><Link href="/categories/himachal" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Himachal Pradesh</Link></li>
              <li><Link href="/categories/kashmir" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Kashmir Trails</Link></li>
              <li><Link href="/categories/ladakh" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Ladakh Expeditions</Link></li>
              <li><Link href="/categories/spiritual" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Spiritual Journeys</Link></li>
              <li><Link href="/customize-trip" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Customize Your Trip</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-semibold text-[10px] mb-8 uppercase tracking-[0.3em] text-[var(--color-primary)]">Office Address</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-1" strokeWidth={1.5} />
                <a href="https://maps.google.com/?q=GMS+Road+Dehradun+248001" target="_blank" rel="noopener noreferrer" className="text-[var(--color-paper)]/60 text-sm font-sans font-light leading-relaxed hover:text-[var(--color-primary)] transition-colors">
                  GMS Road<br />Dehradun 248001
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-4 h-4 text-[var(--color-primary)] shrink-0" strokeWidth={1.5} />
                <div className="flex gap-2">
                  <a href="tel:+919520557784" className="text-[var(--color-paper)]/60 text-sm font-sans font-light hover:text-[var(--color-primary)] transition-colors">9520557784</a>
                </div>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-4 h-4 text-[var(--color-primary)] shrink-0" strokeWidth={1.5} />
                <a href="mailto:xplorethedreams@gmail.com" className="text-[var(--color-paper)]/60 text-sm font-sans font-light hover:text-[var(--color-primary)] transition-colors">xplorethedreams@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-paper)]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--color-paper)]/40 text-[10px] font-sans font-semibold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Xplore The Dreams. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/cancellation-policy" className="text-[var(--color-paper)]/40 hover:text-[var(--color-paper)] text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors">Cancellation Policy</Link>
            <Link href="/privacy" className="text-[var(--color-paper)]/40 hover:text-[var(--color-paper)] text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[var(--color-paper)]/40 hover:text-[var(--color-paper)] text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
