"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import CustomSelect from "@/components/CustomSelect";

export default function ArticleForm({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const isNew = id === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "",
    author: "",
    date: "",
    read_time: "",
    image: "",
    content: "" // We will handle this as a newline separated string in the textarea
  });

  useEffect(() => {
    if (!isNew) {
      fetchArticle();
    }
  }, [isNew]);

  async function fetchArticle() {
    const { data, error } = await supabase.from('articles').select('*').eq('id', id).single();
    if (error) {
      setError("Failed to load article");
    } else if (data) {
      setFormData({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        category: data.category,
        author: data.author,
        date: data.date,
        read_time: data.read_time,
        image: data.image,
        content: Array.isArray(data.content) ? data.content.join('\n\n') : (data.content || "")
      });
    }
    setLoading(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSlugify = () => {
    setFormData(prev => ({
      ...prev,
      slug: prev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) return;
      const file = e.target.files[0];
      setUploading(true);
      setError("");

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('treks')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('treks')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image: publicUrl }));
    } catch (err: any) {
      setError(err.message || "Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const submitData = {
      ...formData,
      content: formData.content.split('\n\n').filter(p => p.trim() !== '')
    };

    if (isNew) {
      const { error } = await supabase.from('articles').insert([submitData]);
      if (error) setError(error.message);
      else router.push('/admin/articles');
    } else {
      const { error } = await supabase.from('articles').update(submitData).eq('id', id);
      if (error) setError(error.message);
      else router.push('/admin/articles');
    }
    setSaving(false);
  }

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/articles" className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-[var(--color-ink)]/50 hover:text-[var(--color-ink)] transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
        <h1 className="text-3xl font-serif text-[var(--color-ink)]">{isNew ? 'Create New Article' : 'Edit Article'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-[var(--color-ink)]/5 p-8 space-y-6 font-sans">
        
        {error && <div className="p-4 bg-red-50 text-red-600 text-sm rounded border border-red-100">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Title</label>
            <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all" placeholder="E.g., The Silent Majesty of Kedarkantha" />
          </div>

          <div className="space-y-2">
            <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">
              Slug
              <button type="button" onClick={handleSlugify} className="text-[var(--color-primary)] hover:underline">Auto-generate</button>
            </label>
            <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="the-silent-majesty" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Category</label>
            <CustomSelect
              value={formData.category || ""}
              onChange={(val) => setFormData({ ...formData, category: val === "All" ? "" : val })}
              options={["Culture & History", "Expedition Logs", "Gear & Prep", "Opinion", "Guides", "Interviews"]}
              placeholder="Select Category"
              className="bg-white p-3 border border-[var(--color-ink)]/10 rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Author</label>
            <input required type="text" name="author" value={formData.author} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="Arjun Sharma" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Date (Display)</label>
            <input required type="text" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="March 15, 2024" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Read Time</label>
            <input required type="text" name="read_time" value={formData.read_time} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="4 min read" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Hero Image</label>
            <div className="flex items-center gap-4">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                disabled={uploading}
                className="flex-1 p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-bold file:bg-[var(--color-primary)] file:text-[var(--color-ink)] hover:file:bg-[var(--color-primary)]/80 file:cursor-pointer cursor-pointer" 
              />
              {uploading && <Loader2 className="w-5 h-5 animate-spin text-[var(--color-primary)]" />}
            </div>
            {formData.image && (
              <div className="mt-4 relative w-full h-48 rounded overflow-hidden border border-[var(--color-ink)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={formData.image} alt="Article Preview" className="object-cover w-full h-full" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Excerpt (Short Description)</label>
          <textarea required name="excerpt" value={formData.excerpt} onChange={handleChange} rows={2} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none resize-y" placeholder="A brief summary of the article..." />
        </div>

        <div className="space-y-2">
          <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">
            Article Content
            <span className="text-[var(--color-ink)]/30 normal-case tracking-normal font-normal">Separate paragraphs with double newlines (Press Enter twice)</span>
          </label>
          <textarea required name="content" value={formData.content} onChange={handleChange} rows={15} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none resize-y font-mono text-sm leading-relaxed" placeholder="Write your article here..." />
        </div>

        <div className="pt-6 border-t border-[var(--color-ink)]/10 flex justify-end">
          <button 
            type="submit" 
            disabled={saving}
            className="bg-[var(--color-ink)] text-[var(--color-paper)] px-8 py-3 rounded text-xs font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[var(--color-ink)]/80 transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving...' : 'Save Article'}
          </button>
        </div>
      </form>
    </div>
  );
}
