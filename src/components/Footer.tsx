import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

// Inline SVGs for social icons to avoid lucide-react export issues
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden z-20">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current" preserveAspectRatio="none">
          <polygon points="100,0 0,100 100,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 pr-8">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-display text-3xl font-bold tracking-wider uppercase leading-none">
                Xplore The
              </span>
              <span className="font-display text-2xl font-medium tracking-[0.2em] uppercase leading-none mt-1 text-[#F4A261]">
                Dreams
              </span>
            </Link>
            <p className="text-white/70 font-medium text-sm leading-relaxed max-w-sm mb-8">
              We craft premium high-altitude expeditions for those seeking extraordinary landscapes without compromising on safety or comfort.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4A261] transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4A261] transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4A261] transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Expeditions */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest text-[#F4A261]">Expeditions</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Premium Ascents</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Family Trails</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Alpine Camps</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Custom Journeys</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">View All Regions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest text-[#F4A261]">Basecamp</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-medium leading-relaxed">
                  144 Alpine Way, Mountaineer's District<br />Manali, HP 175131, India
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#F4A261] shrink-0" />
                <span className="text-white/70 text-sm font-medium">+91 98765 43210</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#F4A261] shrink-0" />
                <span className="text-white/70 text-sm font-medium">expeditions@xplorethedreams.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs font-medium uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Xplore The Dreams. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="#" className="text-white/50 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors">Terms</Link>
            <Link href="#" className="text-white/50 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
