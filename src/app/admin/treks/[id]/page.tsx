"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Save, Loader2, Code, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import CustomSelect from "@/components/CustomSelect";

export default function TrekForm({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const isNew = id === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<any>({
    name: "",
    slug: "",
    location: "",
    country: "India",
    region: "",
    altitude: 0,
    duration_days: 0,
    duration_nights: 0,
    difficulty: "Moderate",
    price: 0,
    hero_image: "",
    overview: {
      description: [""],
      highlights: [{ title: "", description: "" }],
      stats: [{ label: "", value: "" }]
    },
    itinerary: [],
    faqs: [],
    cost_terms: { inclusions: [""], exclusions: [""] }
  });

  useEffect(() => {
    if (!isNew) {
      fetchTrek();
    }
  }, [isNew]);

  async function fetchTrek() {
    const { data, error } = await supabase.from('treks').select('*').eq('id', id).single();
    if (error) {
      setError("Failed to load trek");
    } else if (data) {
      setFormData({
        name: data.name || "",
        slug: data.slug || "",
        location: data.location || "",
        country: data.country || "India",
        region: data.region || "",
        altitude: data.altitude || 0,
        duration_days: data.duration_days || 0,
        duration_nights: data.duration_nights || 0,
        difficulty: data.difficulty || "Moderate",
        price: data.price || 0,
        hero_image: data.hero_image || "",
        overview: data.overview || { description: [""], highlights: [], stats: [] },
        itinerary: data.itinerary || [],
        faqs: data.faqs || [],
        cost_terms: data.cost_terms || { inclusions: [""], exclusions: [""] }
      });
    }
    setLoading(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    setFormData((prev: any) => ({ ...prev, [e.target.name]: value }));
  };

  const handleSlugify = () => {
    setFormData((prev: any) => ({
      ...prev,
      slug: prev.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    }));
  };


  const handleNestedChange = (field: string, subfield: string, index: number, value: any, subsubfield?: string) => {
    setFormData((prev: any) => {
      const newField = { ...prev[field] };
      if (subsubfield) {
        newField[subfield][index][subsubfield] = value;
      } else {
        newField[subfield][index] = value;
      }
      return { ...prev, [field]: newField };
    });
  };

  const handleArrayChange = (field: string, index: number, value: any, subfield?: string, detailIndex?: number) => {
    setFormData((prev: any) => {
      const newArr = [...prev[field]];
      if (subfield) {
        if (detailIndex !== undefined) {
          newArr[index][subfield][detailIndex] = value;
        } else {
          newArr[index][subfield] = value;
        }
      } else {
        newArr[index] = value;
      }
      return { ...prev, [field]: newArr };
    });
  };

  const addItem = (field: string, subfield?: string, defaultItem: any = "") => {
    setFormData((prev: any) => {
      if (subfield) {
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [subfield]: [...(prev[field][subfield] || []), defaultItem]
          }
        };
      }
      return {
        ...prev,
        [field]: [...(prev[field] || []), defaultItem]
      };
    });
  };

  const removeItem = (field: string, index: number, subfield?: string) => {
    setFormData((prev: any) => {
      if (subfield) {
        const newArr = [...prev[field][subfield]];
        newArr.splice(index, 1);
        return {
          ...prev,
          [field]: {
            ...prev[field],
            [subfield]: newArr
          }
        };
      }
      const newArr = [...prev[field]];
      newArr.splice(index, 1);
      return {
        ...prev,
        [field]: newArr
      };
    });
  };

  const addItineraryDetail = (dayIndex: number) => {
    setFormData((prev: any) => {
      const newItin = [...prev.itinerary];
      if (!newItin[dayIndex].details) newItin[dayIndex].details = [];
      newItin[dayIndex].details.push("");
      return { ...prev, itinerary: newItin };
    });
  };

  const removeItineraryDetail = (dayIndex: number, detailIndex: number) => {
    setFormData((prev: any) => {
      const newItin = [...prev.itinerary];
      newItin[dayIndex].details.splice(detailIndex, 1);
      return { ...prev, itinerary: newItin };
    });
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

      setFormData((prev: any) => ({ ...prev, hero_image: publicUrl }));
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

    try {
      const submitData = { ...formData };

      if (isNew) {
        const { error } = await supabase.from('treks').insert([submitData]);
        if (error) throw error;
        router.push('/admin/treks');
      } else {
        const { error } = await supabase.from('treks').update(submitData).eq('id', id);
        if (error) throw error;
        router.push('/admin/treks');
      }
    } catch (err: any) {
      setError(err.message || "Invalid JSON format in one of the data fields.");
    } finally {
      setSaving(false);
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
      <div className="mb-8">
        <Link href="/admin/treks" className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-[var(--color-ink)]/50 hover:text-[var(--color-ink)] transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Treks
        </Link>
        <h1 className="text-3xl font-serif text-[var(--color-ink)]">{isNew ? 'Create New Trek' : 'Edit Trek'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-[var(--color-ink)]/5 font-sans overflow-hidden">
        
        {error && <div className="p-4 mx-8 mt-8 bg-red-50 text-red-600 text-sm rounded border border-red-100">{error}</div>}

        <div className="p-8 space-y-8">
          
          {/* Section: Basic Info */}
          <div>
            <h3 className="text-lg font-serif text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)]/10 pb-2">Basic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Trek Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none" placeholder="Valley of Flowers" />
              </div>

              <div className="space-y-2">
                <label className="flex justify-between text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">
                  Slug
                  <button type="button" onClick={handleSlugify} className="text-[var(--color-primary)] hover:underline">Auto-generate</button>
                </label>
                <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="valley-of-flowers" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Region</label>
                <CustomSelect
                  value={formData.region || ""}
                  onChange={(val) => setFormData({ ...formData, region: val === "All" ? "" : val })}
                  options={["Uttarakhand", "Himachal Pradesh", "Kashmir", "Ladakh"]}
                  placeholder="Select Region"
                  className="bg-white p-3 border border-[var(--color-ink)]/10 rounded"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Location Base</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. Govindghat" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Difficulty</label>
                <CustomSelect
                  value={formData.difficulty || "Moderate"}
                  onChange={(val) => setFormData({ ...formData, difficulty: val === "All" ? "Moderate" : val })}
                  options={["Easy", "Easy to Moderate", "Moderate", "Moderate to Difficult", "Difficult", "Pro"]}
                  placeholder="Select Difficulty"
                  className="bg-white p-3 border border-[var(--color-ink)]/10 rounded"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Max Altitude (ft)</label>
                <input type="number" name="altitude" value={formData.altitude} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Duration (Days)</label>
                <input type="number" name="duration_days" value={formData.duration_days} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Price (INR)</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" />
              </div>
            </div>
            <div className="mt-6 space-y-2">
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
              {formData.hero_image && (
                <div className="mt-4 relative w-full h-48 rounded overflow-hidden border border-[var(--color-ink)]/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={formData.hero_image} alt="Hero Preview" className="object-cover w-full h-full" />
                </div>
              )}
            </div>
          </div>

          {/* Section: Overview (Dynamic) */}
          <div>
            <h3 className="text-lg font-serif text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)]/10 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4" /> Overview Data
            </h3>
            
            <div className="space-y-6">
              {/* Descriptions */}
              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Description Paragraphs</label>
                  <button type="button" onClick={() => addItem('overview', 'description', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Paragraph</button>
                </div>
                <div className="space-y-3">
                  {formData.overview?.description?.map((desc: string, i: number) => (
                    <div key={`desc-${i}`} className="flex gap-2">
                      <textarea value={desc} onChange={(e) => handleNestedChange('overview', 'description', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" rows={2} />
                      <button type="button" onClick={() => removeItem('overview', i, 'description')} className="text-red-400 hover:text-red-600 p-2 h-fit"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Highlights</label>
                  <button type="button" onClick={() => addItem('overview', 'highlights', {title: '', description: ''})} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Highlight</button>
                </div>
                <div className="space-y-3">
                  {formData.overview?.highlights?.map((hl: any, i: number) => (
                    <div key={`hl-${i}`} className="flex gap-4 items-start p-3 bg-white rounded border border-gray-200">
                      <div className="flex-1 space-y-2">
                        <input type="text" placeholder="Title" value={hl.title} onChange={(e) => handleNestedChange('overview', 'highlights', i, e.target.value, 'title')} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" />
                        <textarea placeholder="Description" value={hl.description} onChange={(e) => handleNestedChange('overview', 'highlights', i, e.target.value, 'description')} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" rows={2} />
                      </div>
                      <button type="button" onClick={() => removeItem('overview', i, 'highlights')} className="text-red-400 hover:text-red-600 mt-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Quick Stats</label>
                  <button type="button" onClick={() => addItem('overview', 'stats', {label: '', value: ''})} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Stat</button>
                </div>
                <div className="space-y-3">
                  {formData.overview?.stats?.map((st: any, i: number) => (
                    <div key={`st-${i}`} className="flex gap-2">
                      <input type="text" placeholder="Label (e.g. Distance)" value={st.label} onChange={(e) => handleNestedChange('overview', 'stats', i, e.target.value, 'label')} className="w-1/3 p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" />
                      <input type="text" placeholder="Value (e.g. 45 km)" value={st.value} onChange={(e) => handleNestedChange('overview', 'stats', i, e.target.value, 'value')} className="w-2/3 p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" />
                      <button type="button" onClick={() => removeItem('overview', i, 'stats')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Itinerary (Dynamic) */}
          <div>
            <div className="flex justify-between items-end mb-4 border-b border-[var(--color-ink)]/10 pb-2">
              <h3 className="text-lg font-serif text-[var(--color-ink)] flex items-center gap-2">
                <Code className="w-4 h-4" /> Day-by-Day Itinerary
              </h3>
              <button type="button" onClick={() => addItem('itinerary', undefined, {day: (formData.itinerary?.length || 0) + 1, title: '', details: ['']})} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Day</button>
            </div>
            
            <div className="space-y-4">
              {formData.itinerary?.map((day: any, i: number) => (
                <div key={`day-${i}`} className="p-4 bg-gray-50 rounded border border-gray-100 flex gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-4">
                      <input type="number" placeholder="Day #" value={day.day} onChange={(e) => handleArrayChange('itinerary', i, Number(e.target.value), 'day')} className="w-20 p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm font-bold" />
                      <input type="text" placeholder="Day Title (e.g. Arrive at Basecamp)" value={day.title} onChange={(e) => handleArrayChange('itinerary', i, e.target.value, 'title')} className="flex-1 p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm font-bold" />
                    </div>
                    <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink)]/50 flex justify-between">
                        Details / Bullet Points
                        <button type="button" onClick={() => addItineraryDetail(i)} className="text-[var(--color-primary)] hover:underline">Add Point</button>
                      </label>
                      {day.details?.map((detail: string, j: number) => (
                        <div key={`day-${i}-det-${j}`} className="flex gap-2">
                          <input type="text" value={detail} onChange={(e) => handleArrayChange('itinerary', i, e.target.value, 'details', j)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" />
                          <button type="button" onClick={() => removeItineraryDetail(i, j)} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button type="button" onClick={() => removeItem('itinerary', i)} className="text-red-400 hover:text-red-600 h-fit mt-2"><Trash2 className="w-5 h-5" /></button>
                </div>
              ))}
              {(!formData.itinerary || formData.itinerary.length === 0) && <p className="text-sm text-gray-400 italic">No itinerary days added yet.</p>}
            </div>
          </div>

          {/* Section: Cost Terms */}
          <div>
            <h3 className="text-lg font-serif text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)]/10 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4" /> Cost Terms
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Inclusions</label>
                  <button type="button" onClick={() => addItem('cost_terms', 'inclusions', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add</button>
                </div>
                <div className="space-y-2">
                  {formData.cost_terms?.inclusions?.map((inc: string, i: number) => (
                    <div key={`inc-${i}`} className="flex gap-2">
                      <input type="text" value={inc} onChange={(e) => handleNestedChange('cost_terms', 'inclusions', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" />
                      <button type="button" onClick={() => removeItem('cost_terms', i, 'inclusions')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Exclusions</label>
                  <button type="button" onClick={() => addItem('cost_terms', 'exclusions', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add</button>
                </div>
                <div className="space-y-2">
                  {formData.cost_terms?.exclusions?.map((exc: string, i: number) => (
                    <div key={`exc-${i}`} className="flex gap-2">
                      <input type="text" value={exc} onChange={(e) => handleNestedChange('cost_terms', 'exclusions', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" />
                      <button type="button" onClick={() => removeItem('cost_terms', i, 'exclusions')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: FAQs */}
          <div>
            <div className="flex justify-between items-end mb-4 border-b border-[var(--color-ink)]/10 pb-2">
              <h3 className="text-lg font-serif text-[var(--color-ink)] flex items-center gap-2">
                <Code className="w-4 h-4" /> FAQs
              </h3>
              <button type="button" onClick={() => addItem('faqs', undefined, {question: '', answer: ''})} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add FAQ</button>
            </div>
            
            <div className="space-y-3">
              {formData.faqs?.map((faq: any, i: number) => (
                <div key={`faq-${i}`} className="flex gap-4 p-4 bg-gray-50 rounded border border-gray-100">
                  <div className="flex-1 space-y-2">
                    <input type="text" placeholder="Question" value={faq.question} onChange={(e) => handleArrayChange('faqs', i, e.target.value, 'question')} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm font-bold" />
                    <textarea placeholder="Answer" value={faq.answer} onChange={(e) => handleArrayChange('faqs', i, e.target.value, 'answer')} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" rows={2} />
                  </div>
                  <button type="button" onClick={() => removeItem('faqs', i)} className="text-red-400 hover:text-red-600 mt-2 h-fit"><Trash2 className="w-5 h-5" /></button>
                </div>
              ))}
              {(!formData.faqs || formData.faqs.length === 0) && <p className="text-sm text-gray-400 italic">No FAQs added yet.</p>}
            </div>
          </div>

        </div>

        <div className="px-8 py-5 bg-gray-50 border-t border-[var(--color-ink)]/10 flex justify-end">

          <button 
            type="submit" 
            disabled={saving}
            className="bg-[var(--color-ink)] text-[var(--color-paper)] px-8 py-3 rounded text-xs font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[var(--color-ink)]/80 transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? 'Saving...' : 'Save Expedition'}
          </button>
        </div>
      </form>
    </div>
  );
}
