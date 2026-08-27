"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

interface AppContextType {
  user: User | null;
  logout: () => Promise<void>;
  wishlist: string[];
  toggleWishlist: (slug: string) => Promise<void>;
  isLoading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchWishlist = async (userId: string) => {
    const { data, error } = await supabase
      .from('wishlists')
      .select('slug')
      .eq('user_id', userId);
      
    if (!error && data) {
      setWishlist(data.map(item => item.slug));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchWishlist(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchWishlist(session.user.id);
      } else {
        setWishlist([]);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const toggleWishlist = async (slug: string) => {
    if (!user) {
      router.push("/signin");
      return;
    }

    const isWishlisted = wishlist.includes(slug);
    
    // Optimistic UI update
    setWishlist((prev) => 
      isWishlisted ? prev.filter(item => item !== slug) : [...prev, slug]
    );

    // Skip DB call if placeholders are still active to prevent crashes
    if (process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://your-project-id.supabase.co') return;

    if (isWishlisted) {
      await supabase
        .from('wishlists')
        .delete()
        .match({ user_id: user.id, slug });
    } else {
      await supabase
        .from('wishlists')
        .insert({ user_id: user.id, slug });
    }
  };

  return (
    <AppContext.Provider value={{ user, logout, wishlist, toggleWishlist, isLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
