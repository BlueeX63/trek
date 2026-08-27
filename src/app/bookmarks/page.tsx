"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookmarkX } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

export default function BookmarksPage() {
  const { bookmarks, toggleBookmark, user, isLoading } = useAppContext();
  const [mounted, setMounted] = useState(false);
  const [savedArticles, setSavedArticles] = useState<any[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!user || bookmarks.length === 0) {
      setSavedArticles([]);
      setLoadingArticles(false);
      return;
    }

    const fetchArticles = async () => {
      setLoadingArticles(true);
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .in('slug', bookmarks);

      if (!error && data) {
        setSavedArticles(data);
      }
      setLoadingArticles(false);
    };

    fetchArticles();
  }, [user, bookmarks]);

  if (!mounted || isLoading) return null;

  if (!user) {
    return (
      <div className="min-h-screen bg-[var(--color-paper)] flex items-center justify-center pt-32 pb-24 text-center px-6">
        <div className="max-w-md">
          <h1 className="text-4xl font-serif text-[var(--color-ink)] mb-4">Saved Articles</h1>
          <p className="font-sans font-light text-[var(--color-ink)]/70 mb-8">
            Please sign in to view your bookmarked journal articles.
          </p>
          <Link href="/signin" className="inline-block bg-[var(--color-primary)] text-white font-sans font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-full hover:bg-[var(--color-ink)] transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  if (loadingArticles) {
    return (
      <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24 selection:bg-[var(--color-primary)] selection:text-black">
      <ScrollToTop />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-ink)] mb-4">Saved Articles</h1>
          <p className="font-sans font-light text-[var(--color-ink)]/70">
            {savedArticles.length} {savedArticles.length === 1 ? 'article' : 'articles'} in your library
          </p>
        </div>

        {savedArticles.length === 0 ? (
          <div className="text-center py-32 border border-dashed border-[var(--color-ink)]/20 rounded-2xl">
            <p className="font-serif italic text-2xl text-[var(--color-ink)]/50 mb-6">Your library is empty</p>
            <Link href="/articles" className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-ink)] transition-colors">
              Explore the Journal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedArticles.map((article) => (
              <div key={article.slug} className="group flex flex-col h-full relative">
                <Link href={`/articles/${article.slug}`} className="flex flex-col h-full">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                        {article.category}
                      </span>
                      <span className="text-[10px] font-sans tracking-[0.1em] text-[var(--color-ink)]/50">
                        {article.read_time}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif leading-tight text-[var(--color-ink)] mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </Link>
                
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleBookmark(article.slug);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-ink)] hover:text-red-500 hover:bg-white transition-all shadow-sm z-10"
                  title="Remove bookmark"
                >
                  <BookmarkX className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
