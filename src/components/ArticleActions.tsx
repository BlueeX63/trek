"use client";

import React, { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Bookmark, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArticleActionsProps {
  slug: string;
  title: string;
  excerpt: string;
}

export default function ArticleActions({ slug, title, excerpt }: ArticleActionsProps) {
  const { bookmarks, toggleBookmark } = useAppContext();
  const isBookmarked = bookmarks.includes(slug);
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="flex gap-8 relative">
      <button 
        onClick={handleShare}
        className="text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors uppercase tracking-[0.2em] text-xs font-semibold font-sans flex items-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      <button 
        onClick={() => toggleBookmark(slug)}
        className="text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors uppercase tracking-[0.2em] text-xs font-semibold font-sans flex items-center gap-2"
      >
        <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </button>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-12 left-0 bg-[var(--color-ink)] text-[var(--color-paper)] text-xs font-sans px-4 py-2 rounded shadow-lg whitespace-nowrap"
          >
            Link copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
