"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Map, FileText, Plus, ChevronRight } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ treks: 0, articles: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const { count: treksCount } = await supabase.from('treks').select('*', { count: 'exact', head: true });
      const { count: articlesCount } = await supabase.from('articles').select('*', { count: 'exact', head: true });

      setStats({
        treks: treksCount || 0,
        articles: articlesCount || 0
      });
      setLoading(false);
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[50vh]">
        <div className="w-5 h-5 border-2 border-[var(--color-ink)]/20 border-t-[var(--color-ink)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 font-sans">

      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-[var(--color-ink)] mb-2 tracking-tight">Overview</h1>
        <p className="text-[var(--color-ink)]/60 text-sm">Manage your platform content and expeditions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        {/* Treks Card */}
        <div className="bg-white rounded-xl border border-[var(--color-ink)]/10 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-ink)]/5 flex items-center justify-center">
              <Map className="w-5 h-5 text-[var(--color-ink)]/70 stroke-[1.5]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-ink)]">Expeditions</p>
              <p className="text-xs text-[var(--color-ink)]/50">Active trekking routes</p>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-semibold text-[var(--color-ink)] tracking-tight">{stats.treks}</h3>
            <Link
              href="/admin/treks"
              className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-ink)] transition-colors flex items-center gap-1 group"
            >
              View all <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Articles Card */}
        <div className="bg-white rounded-xl border border-[var(--color-ink)]/10 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-ink)]/5 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[var(--color-ink)]/70 stroke-[1.5]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-ink)]">Articles</p>
              <p className="text-xs text-[var(--color-ink)]/50">Published journal entries</p>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <h3 className="text-4xl font-semibold text-[var(--color-ink)] tracking-tight">{stats.articles}</h3>
            <Link
              href="/admin/articles"
              className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-ink)] transition-colors flex items-center gap-1 group"
            >
              View all <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-[var(--color-ink)] mb-4 uppercase tracking-wider">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/admin/treks/new"
            className="flex items-center gap-3 p-4 bg-white border border-[var(--color-ink)]/10 rounded-xl hover:border-[var(--color-ink)]/30 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--color-ink)]/5 flex items-center justify-center">
              <Plus className="w-4 h-4 text-[var(--color-ink)]" />
            </div>
            <span className="text-sm font-medium text-[var(--color-ink)]">Create New Expedition</span>
          </Link>

          <Link
            href="/admin/articles/new"
            className="flex items-center gap-3 p-4 bg-white border border-[var(--color-ink)]/10 rounded-xl hover:border-[var(--color-ink)]/30 hover:shadow-sm transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--color-ink)]/5 flex items-center justify-center">
              <Plus className="w-4 h-4 text-[var(--color-ink)]" />
            </div>
            <span className="text-sm font-medium text-[var(--color-ink)]">Publish New Article</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
