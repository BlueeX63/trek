"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      router.push("/wishlist");
    }
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/wishlist`,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-paper)] flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] noise-overlay" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-[var(--color-ink)] mb-4 tracking-tight">
            Welcome <span className="italic font-light">Back</span>
          </h1>
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-[var(--color-ink)]/50">
            Continue Your Journey
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-sm font-sans text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="relative">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b-2 border-[var(--color-ink)]/20 py-4 text-[var(--color-ink)] text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors peer placeholder-transparent"
              placeholder="Email"
              id="email"
            />
            <label htmlFor="email" className="absolute left-0 top-4 text-[var(--color-ink)]/50 text-lg transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[var(--color-ink)] peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase cursor-text">
              Email Address
            </label>
          </div>

          <div className="relative">
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b-2 border-[var(--color-ink)]/20 py-4 text-[var(--color-ink)] text-lg focus:outline-none focus:border-[var(--color-primary)] transition-colors peer placeholder-transparent"
              placeholder="Password"
              id="password"
            />
            <label htmlFor="password" className="absolute left-0 top-4 text-[var(--color-ink)]/50 text-lg transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[var(--color-ink)] peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase cursor-text">
              Password
            </label>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="group relative w-full overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)] py-5 mt-4 flex items-center justify-center gap-3 disabled:opacity-70"
          >
            <span className="relative z-10 text-xs font-sans font-bold tracking-[0.2em] uppercase">
              {loading ? "Signing in..." : "Sign In"}
            </span>
            {!loading && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform" />}
            <div className="absolute inset-0 bg-[var(--color-primary)] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          </button>

          <div className="flex items-center gap-4 my-2">
            <div className="h-[1px] flex-grow bg-[var(--color-ink)]/10"></div>
            <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-[var(--color-ink)]/40">OR</span>
            <div className="h-[1px] flex-grow bg-[var(--color-ink)]/10"></div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-[var(--color-ink)]/20 text-[var(--color-ink)] py-5 flex items-center justify-center gap-3 hover:bg-[var(--color-ink)]/5 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase">Continue with Google</span>
          </button>
        </form>

        <div className="mt-12 text-center text-sm font-sans text-[var(--color-ink)]/60">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-[var(--color-ink)] font-bold tracking-widest uppercase text-[10px] hover:text-[var(--color-primary)] transition-colors ml-2 underline underline-offset-4 decoration-[var(--color-ink)]/30">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
