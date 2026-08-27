import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

// Inline SVGs for social icons to avoid lucide-react export issues
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-paper)] pt-32 pb-12 px-6 md:px-12 relative overflow-hidden z-20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-32">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 pr-8">
            <Link href="/" className="flex flex-col mb-8">
              <span className="font-serif text-4xl leading-none">
                Xplore The
              </span>
              <span className="font-serif text-4xl leading-none italic font-light text-[var(--color-terracotta)] mt-1">
                Dreams
              </span>
            </Link>
            <p className="text-[var(--color-paper)]/60 font-sans font-light text-sm leading-relaxed max-w-sm mb-12">
              We craft premium high-altitude expeditions for those seeking extraordinary landscapes without compromising on safety or comfort.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 border border-[var(--color-paper)]/20 flex items-center justify-center hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-[var(--color-paper)]/20 flex items-center justify-center hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-[var(--color-paper)]/20 flex items-center justify-center hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Expeditions */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-semibold text-[10px] mb-8 uppercase tracking-[0.3em] text-[var(--color-terracotta)]">Expeditions</h4>
            <ul className="flex flex-col gap-5">
              <li><Link href="#" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Premium Ascents</Link></li>
              <li><Link href="#" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Family Trails</Link></li>
              <li><Link href="#" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Alpine Camps</Link></li>
              <li><Link href="#" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">Custom Journeys</Link></li>
              <li><Link href="#" className="text-[var(--color-paper)]/60 hover:text-[var(--color-paper)] transition-colors text-sm font-sans font-light">View All Regions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-semibold text-[10px] mb-8 uppercase tracking-[0.3em] text-[var(--color-terracotta)]">Basecamp</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-4 h-4 text-[var(--color-terracotta)] shrink-0 mt-1" strokeWidth={1.5} />
                <span className="text-[var(--color-paper)]/60 text-sm font-sans font-light leading-relaxed">
                  144 Alpine Way, Mountaineer's District<br />Manali, HP 175131, India
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-4 h-4 text-[var(--color-terracotta)] shrink-0" strokeWidth={1.5} />
                <span className="text-[var(--color-paper)]/60 text-sm font-sans font-light">+91 98765 43210</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-4 h-4 text-[var(--color-terracotta)] shrink-0" strokeWidth={1.5} />
                <span className="text-[var(--color-paper)]/60 text-sm font-sans font-light">expeditions@xplorethedreams.com</span>
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
            <Link href="#" className="text-[var(--color-paper)]/40 hover:text-[var(--color-paper)] text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="#" className="text-[var(--color-paper)]/40 hover:text-[var(--color-paper)] text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors">Terms</Link>
            <Link href="#" className="text-[var(--color-paper)]/40 hover:text-[var(--color-paper)] text-[10px] font-sans font-semibold uppercase tracking-widest transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
