"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Edit, Trash2, Plus, Search } from "lucide-react";

export default function AdminTreksList() {
  const [treks, setTreks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTreks = treks.filter(trek => 
    trek.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    trek.region?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trek.slug?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchTreks();
  }, []);

  async function fetchTreks() {
    setLoading(true);
    const { data } = await supabase.from('treks').select('id, name, slug, region, duration_days, difficulty, price').order('name');
    if (data) setTreks(data);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this trek? This action cannot be undone.")) {
      await supabase.from('treks').delete().eq('id', id);
      fetchTreks();
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif text-[var(--color-ink)] mb-2">Expeditions</h1>
          <p className="text-[var(--color-ink)]/60 font-sans text-sm">Manage your trek listings and details.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-ink)]/40" />
            <input
              type="text"
              placeholder="Search expeditions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm font-sans bg-white border border-[var(--color-ink)]/10 rounded focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>
          <Link 
            href="/admin/treks/new" 
            className="shrink-0 bg-[var(--color-ink)] text-[var(--color-paper)] px-5 py-2.5 rounded text-xs font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[var(--color-ink)]/80 transition-colors"
          >
            <Plus className="w-4 h-4" /> New Trek
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[var(--color-ink)]/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-sans border-collapse">
            <thead>
              <tr className="bg-[#F5F5F3] text-[var(--color-ink)]/50 text-[10px] font-bold uppercase tracking-widest border-b border-[var(--color-ink)]/5">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Region</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Difficulty</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-ink)]/5 text-sm">
              {filteredTreks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[var(--color-ink)]/50 italic font-serif">
                    No treks found. Create your first one!
                  </td>
                </tr>
              ) : (
                filteredTreks.map(trek => (
                  <tr key={trek.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-[var(--color-ink)]">{trek.name}</div>
                      <div className="text-[10px] text-[var(--color-ink)]/40 mt-1">{trek.slug}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-[var(--color-ink)]/5 text-[var(--color-ink)] text-[10px] font-bold uppercase tracking-widest rounded">
                        {trek.region}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[var(--color-ink)]/70">{trek.duration_days} Days</td>
                    <td className="px-6 py-4 text-[var(--color-ink)]/70">{trek.difficulty}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <Link href={`/admin/treks/${trek.id}`} className="text-blue-500 hover:text-blue-700 transition-colors" title="Edit">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button onClick={() => handleDelete(trek.id)} className="text-red-400 hover:text-red-600 transition-colors" title="Delete">
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
