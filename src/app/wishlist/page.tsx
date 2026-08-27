"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { supabase } from "@/lib/supabase";
import TrekCard from "@/components/TrekCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, user } = useAppContext();

  const [mounted, setMounted] = useState(false);
  const [wishlistedTreks, setWishlistedTreks] = useState<any[]>([]);
  const [loadingTreks, setLoadingTreks] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!user || wishlist.length === 0) {
      setWishlistedTreks([]);
      setLoadingTreks(false);
      return;
    }

    const fetchWishlist = async () => {
      setLoadingTreks(true);
      const { data, error } = await supabase
        .from('treks')
        .select('*')
        .in('slug', wishlist);

      if (!error && data) {
        // Map to expected local format
        const mappedTreks = data.map(dbTrek => ({
          id: dbTrek.id,
          slug: dbTrek.slug,
          name: dbTrek.name,
          location: dbTrek.location,
          country: dbTrek.country,
          region: dbTrek.region,
          altitude: dbTrek.altitude,
          duration: { days: dbTrek.duration_days, nights: dbTrek.duration_nights },
          difficulty: dbTrek.difficulty,
          season: dbTrek.season || [],
          price: dbTrek.price,
          heroImage: dbTrek.hero_image,
          categories: dbTrek.categories || []
        }));
        setWishlistedTreks(mappedTreks);
      }
      setLoadingTreks(false);
    };

    fetchWishlist();
  }, [user, wishlist]);

  if (!mounted || loadingTreks) {
    return (
      <div className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-8 h-[1px] bg-[var(--color-primary)]"></div>
             <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/50">
               {user ? `${user.user_metadata?.full_name?.split(' ')[0] || user.email?.split('@')[0] || 'Explorer'}'s Collection` : "Your Collection"}
             </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] leading-none">
            Saved <br /><span className="italic font-light">Expeditions</span>
          </h1>
        </div>

        {wishlistedTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
            <AnimatePresence mode="popLayout">
              {wishlistedTreks.map((trek, index) => (
                <motion.div
                  key={trek.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <TrekCard trek={trek} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/5"
          >
            <Compass className="w-12 h-12 text-[var(--color-ink)]/30 mb-6" strokeWidth={1} />
            <h2 className="text-2xl font-serif text-[var(--color-ink)] mb-4">No expeditions saved yet</h2>
            <p className="text-sm font-sans text-[var(--color-ink)]/60 mb-8 max-w-md">
              Explore our curated list of high-altitude treks and start building your dream adventure collection.
            </p>
            <Link 
              href="/expeditions"
              className="group relative px-8 py-4 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden flex items-center gap-3"
            >
              <span className="relative z-10 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
                Explore Treks
              </span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[var(--color-primary)] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
