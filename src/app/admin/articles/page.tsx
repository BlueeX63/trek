"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Edit, Trash2, Plus } from "lucide-react";

export default function AdminArticlesList() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    setLoading(true);
    const { data } = await supabase.from('articles').select('id, title, slug, category, created_at, date, author').order('created_at', { ascending: false });
    if (data) setArticles(data);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this article? This action cannot be undone.")) {
      await supabase.from('articles').delete().eq('id', id);
      fetchArticles();
    }
  }

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-serif text-[var(--color-ink)] mb-2">Articles</h1>
          <p className="text-[var(--color-ink)]/60 font-sans text-sm">Manage your journal publications.</p>
        </div>
        <Link 
          href="/admin/articles/new" 
          className="bg-[var(--color-ink)] text-[var(--color-paper)] px-5 py-2.5 rounded text-xs font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[var(--color-ink)]/80 transition-colors"
        >
          <Plus className="w-4 h-4" /> New Article
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[var(--color-ink)]/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans border-collapse">
            <thead>
              <tr className="bg-[#F5F5F3] text-[var(--color-ink)]/50 text-[10px] font-bold uppercase tracking-widest border-b border-[var(--color-ink)]/5">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-ink)]/5 text-sm">
              {articles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[var(--color-ink)]/50 italic font-serif">
                    No articles found. Create your first one!
                  </td>
                </tr>
              ) : (
                articles.map(article => (
                  <tr key={article.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-[var(--color-ink)]">{article.title}</div>
                      <div className="text-[10px] text-[var(--color-ink)]/40 mt-1">{article.slug}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-amber-50 text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest rounded">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[var(--color-ink)]/70">{article.author}</td>
                    <td className="px-6 py-4 text-[var(--color-ink)]/70">{article.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <Link href={`/admin/articles/${article.id}`} className="text-blue-500 hover:text-blue-700 transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button onClick={() => handleDelete(article.id)} className="text-red-400 hover:text-red-600 transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
