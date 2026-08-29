"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Save, Loader2, Code, Plus, Trash2, Image as ImageIcon, Star, Upload } from "lucide-react";
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
    coordinates: "",
    altitude: 0,
    duration_days: 0,
    duration_nights: 0,
    difficulty: "Moderate",
    price: 0,
    hero_image: "",
    gallery: [],
    categories: [],
    season: [],
    distance: "",
    base_camp: "",
    months: "",
    rail_head: "",
    airport: "",
    trail_type: "",
    overview: {
      description: [""],
      highlights: [{ title: "", description: "" }],
      stats: [{ label: "", value: "" }]
    },
    itinerary: [],
    eligibility: {
      ageRequirement: "",
      fitnessCriteria: [""],
      healthAwareness: [""]
    },
    how_to_reach: {
      meetingPlace: "",
      dropOff: "",
      options: [""]
    },
    cost_terms: { inclusions: [""], exclusions: [""] },
    essentials: {
      basicGear: [""]
    },
    cancellation: {
      policies: [],
      emergencyCases: "",
      notes: [""]
    },
    faqs: []
  });

  const [imageUrlInput, setImageUrlInput] = useState("");

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
        coordinates: data.coordinates || "",
        altitude: data.altitude || 0,
        duration_days: data.duration_days || 0,
        duration_nights: data.duration_nights || 0,
        difficulty: data.difficulty || "Moderate",
        price: data.price || 0,
        hero_image: data.hero_image || "",
        gallery: Array.isArray(data.gallery) ? data.gallery : [],
        categories: Array.isArray(data.categories) ? data.categories : [],
        season: Array.isArray(data.season) ? data.season : [],
        distance: data.distance || "",
        base_camp: data.base_camp || "",
        months: data.months || "",
        rail_head: data.rail_head || "",
        airport: data.airport || "",
        trail_type: data.trail_type || "",
        overview: data.overview || { description: [""], highlights: [], stats: [] },
        itinerary: data.itinerary || [],
        eligibility: data.eligibility || { ageRequirement: "", fitnessCriteria: [""], healthAwareness: [""] },
        how_to_reach: data.how_to_reach || { meetingPlace: "", dropOff: "", options: [""] },
        cost_terms: data.cost_terms || { inclusions: [""], exclusions: [""] },
        essentials: data.essentials || { basicGear: [""] },
        cancellation: data.cancellation || { policies: [], emergencyCases: "", notes: [""] },
        faqs: data.faqs || []
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

  const handleMultipleImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) return;
      const files = Array.from(e.target.files);
      setUploading(true);
      setError("");

      const uploadPromises = files.map(async (file) => {
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

        return publicUrl;
      });

      const uploadedUrls = await Promise.all(uploadPromises);

      setFormData((prev: any) => {
        const existingGallery = Array.isArray(prev.gallery) ? prev.gallery : [];
        const newGallery = [...existingGallery, ...uploadedUrls];
        return {
          ...prev,
          gallery: newGallery,
          hero_image: prev.hero_image || uploadedUrls[0] || ""
        };
      });
    } catch (err: any) {
      setError(err.message || "Error uploading images");
    } finally {
      setUploading(false);
      // Reset input value so same files can be re-uploaded if needed
      e.target.value = "";
    }
  };

  const handleAddImageUrl = () => {
    if (!imageUrlInput.trim()) return;
    const url = imageUrlInput.trim();
    setFormData((prev: any) => {
      const existingGallery = Array.isArray(prev.gallery) ? prev.gallery : [];
      return {
        ...prev,
        gallery: [...existingGallery, url],
        hero_image: prev.hero_image || url
      };
    });
    setImageUrlInput("");
  };

  const handleSetHeroImage = (url: string) => {
    setFormData((prev: any) => ({ ...prev, hero_image: url }));
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setFormData((prev: any) => {
      const existingGallery = Array.isArray(prev.gallery) ? [...prev.gallery] : [];
      const removedUrl = existingGallery[indexToRemove];
      existingGallery.splice(indexToRemove, 1);
      
      let newHero = prev.hero_image;
      if (prev.hero_image === removedUrl) {
        newHero = existingGallery[0] || "";
      }
      return {
        ...prev,
        gallery: existingGallery,
        hero_image: newHero
      };
    });
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

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Duration (Nights)</label>
                <input type="number" name="duration_nights" value={formData.duration_nights} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Coordinates</label>
                <input type="text" name="coordinates" value={formData.coordinates} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. 31°14' N 77°10' E" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Distance</label>
                <input type="text" name="distance" value={formData.distance} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. 45 km round trip" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Base Camp</label>
                <input type="text" name="base_camp" value={formData.base_camp} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. Sankri" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Best Months</label>
                <input type="text" name="months" value={formData.months} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. Apr, May, Oct, Nov" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Rail Head</label>
                <input type="text" name="rail_head" value={formData.rail_head} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. Dehradun Railway Station" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Nearest Airport</label>
                <input type="text" name="airport" value={formData.airport} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. Jolly Grant Airport, Dehradun" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Trail Type</label>
                <input type="text" name="trail_type" value={formData.trail_type} onChange={handleChange} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" placeholder="e.g. Forest, Meadow, Snow" />
              </div>
            </div>

            {/* Categories & Season Tags */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Categories (comma-separated)</label>
                <input 
                  type="text" 
                  value={(formData.categories || []).join(', ')} 
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, categories: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) }))} 
                  className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" 
                  placeholder="e.g. Snow Treks, Weekend Getaways, Beginner Friendly" 
                />
                <p className="text-[10px] text-[var(--color-ink)]/40">Separate with commas. Used for category filtering on the website.</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Season (comma-separated)</label>
                <input 
                  type="text" 
                  value={(formData.season || []).join(', ')} 
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, season: e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean) }))} 
                  className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none" 
                  placeholder="e.g. Spring, Summer, Autumn, Winter" 
                />
                <p className="text-[10px] text-[var(--color-ink)]/40">Separate with commas. e.g. Spring, Summer</p>
              </div>
            </div>

            {/* Section: Trek Images & Gallery */}
            <div className="mt-8 pt-6 border-t border-[var(--color-ink)]/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-ink)] flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-[var(--color-primary)]" /> Trek Images & Gallery
                  </h4>
                  <p className="text-xs text-[var(--color-ink)]/50 mt-0.5">
                    Upload multiple images. The selected Hero image will be the primary banner and carousel cover.
                  </p>
                </div>
                <span className="text-xs font-bold text-[var(--color-ink)]/60 bg-gray-100 px-3 py-1 rounded-full w-fit">
                  {formData.gallery?.length || (formData.hero_image ? 1 : 0)} Image(s)
                </span>
              </div>

              {/* Upload & Add Controls */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-gray-50/80 p-4 rounded-xl border border-gray-200/60">
                <div className="md:col-span-7">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)]/60 block mb-1.5">
                    Upload Multiple Files
                  </label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="file" 
                      multiple
                      accept="image/*" 
                      onChange={handleMultipleImagesUpload} 
                      disabled={uploading}
                      className="flex-1 p-2 border border-[var(--color-ink)]/10 rounded-lg outline-none text-xs bg-white file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-bold file:bg-[var(--color-primary)] file:text-[var(--color-ink)] hover:file:bg-[var(--color-primary)]/80 file:cursor-pointer cursor-pointer shadow-sm" 
                    />
                    {uploading && (
                      <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] shrink-0">
                        <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)]/60 block mb-1.5">
                    Or Add Image URL / Path
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={imageUrlInput}
                      onChange={(e) => setImageUrlInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddImageUrl(); } }}
                      placeholder="/images/uttarakhand/... or https://"
                      className="flex-1 p-2 text-xs border border-[var(--color-ink)]/10 rounded-lg bg-white outline-none focus:border-[var(--color-primary)]"
                    />
                    <button
                      type="button"
                      onClick={handleAddImageUrl}
                      disabled={!imageUrlInput.trim()}
                      className="px-3 py-2 bg-[var(--color-ink)] text-white text-xs font-bold rounded-lg hover:bg-[var(--color-primary)] hover:text-black transition-colors disabled:opacity-40 cursor-pointer shrink-0"
                    >
                      Add URL
                    </button>
                  </div>
                </div>
              </div>

              {/* Gallery Thumbnails Grid */}
              {((Array.isArray(formData.gallery) && formData.gallery.length > 0) || formData.hero_image) && (
                <div className="mt-4">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)]/50 block mb-3">
                    Gallery Preview & Hero Selection (Click to choose Primary Hero)
                  </label>
                  
                  {/* Collect all images for display */}
                  {(() => {
                    const displayedImages = Array.from(
                      new Set([formData.hero_image, ...(formData.gallery || [])].filter(Boolean))
                    );

                    return (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {displayedImages.map((imgUrl: string, idx: number) => {
                          const isHero = formData.hero_image === imgUrl;
                          return (
                            <div 
                              key={`${imgUrl}-${idx}`}
                              className={`group relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-200 shadow-sm bg-gray-100 ${
                                isHero 
                                  ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/30" 
                                  : "border-gray-200 hover:border-gray-400"
                              }`}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img 
                                src={imgUrl} 
                                alt={`Gallery image ${idx + 1}`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              />

                              {/* Hero Badge */}
                              {isHero && (
                                <div className="absolute top-2 left-2 bg-[var(--color-primary)] text-[var(--color-ink)] text-[9px] font-sans font-black tracking-wider uppercase px-2 py-0.5 rounded shadow-md flex items-center gap-1 z-10">
                                  <Star className="w-3 h-3 fill-current" /> HERO
                                </div>
                              )}

                              {/* Actions Overlay on Hover */}
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-2">
                                <div className="flex justify-end">
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveImage(idx)}
                                    title="Delete image"
                                    className="w-7 h-7 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow transition-transform hover:scale-110 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>

                                {!isHero && (
                                  <button
                                    type="button"
                                    onClick={() => handleSetHeroImage(imgUrl)}
                                    className="w-full py-1.5 bg-[var(--color-primary)] hover:bg-white text-[var(--color-ink)] text-[10px] font-sans font-bold uppercase tracking-wider rounded shadow transition-colors cursor-pointer text-center"
                                  >
                                    Set as Hero
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
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

          {/* Section: Eligibility */}
          <div>
            <h3 className="text-lg font-serif text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)]/10 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4" /> Eligibility & Fitness
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Age Requirement</label>
                <input type="text" value={formData.eligibility?.ageRequirement || ""} onChange={(e) => setFormData((prev: any) => ({ ...prev, eligibility: { ...prev.eligibility, ageRequirement: e.target.value } }))} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. Minimum 12 years" />
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Fitness Criteria</label>
                  <button type="button" onClick={() => addItem('eligibility', 'fitnessCriteria', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add</button>
                </div>
                <div className="space-y-2">
                  {formData.eligibility?.fitnessCriteria?.map((item: string, i: number) => (
                    <div key={`fc-${i}`} className="flex gap-2">
                      <input type="text" value={item} onChange={(e) => handleNestedChange('eligibility', 'fitnessCriteria', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. Able to jog 5km in 30 mins" />
                      <button type="button" onClick={() => removeItem('eligibility', i, 'fitnessCriteria')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Health Awareness</label>
                  <button type="button" onClick={() => addItem('eligibility', 'healthAwareness', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add</button>
                </div>
                <div className="space-y-2">
                  {formData.eligibility?.healthAwareness?.map((item: string, i: number) => (
                    <div key={`ha-${i}`} className="flex gap-2">
                      <input type="text" value={item} onChange={(e) => handleNestedChange('eligibility', 'healthAwareness', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. No history of heart conditions" />
                      <button type="button" onClick={() => removeItem('eligibility', i, 'healthAwareness')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: How To Reach */}
          <div>
            <h3 className="text-lg font-serif text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)]/10 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4" /> How To Reach
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Meeting Place</label>
                  <input type="text" value={formData.how_to_reach?.meetingPlace || ""} onChange={(e) => setFormData((prev: any) => ({ ...prev, how_to_reach: { ...prev.how_to_reach, meetingPlace: e.target.value } }))} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. Dehradun Bus Stand" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Drop Off</label>
                  <input type="text" value={formData.how_to_reach?.dropOff || ""} onChange={(e) => setFormData((prev: any) => ({ ...prev, how_to_reach: { ...prev.how_to_reach, dropOff: e.target.value } }))} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. Same as meeting point" />
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Travel Options</label>
                  <button type="button" onClick={() => addItem('how_to_reach', 'options', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Option</button>
                </div>
                <div className="space-y-2">
                  {formData.how_to_reach?.options?.map((opt: string, i: number) => (
                    <div key={`htr-${i}`} className="flex gap-2">
                      <input type="text" value={opt} onChange={(e) => handleNestedChange('how_to_reach', 'options', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. Take overnight bus from Delhi" />
                      <button type="button" onClick={() => removeItem('how_to_reach', i, 'options')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Essentials */}
          <div>
            <h3 className="text-lg font-serif text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)]/10 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4" /> Trek Essentials
            </h3>
            <div className="p-4 bg-gray-50 rounded border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Basic Gear Checklist</label>
                <button type="button" onClick={() => addItem('essentials', 'basicGear', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Item</button>
              </div>
              <div className="space-y-2">
                {formData.essentials?.basicGear?.map((item: string, i: number) => (
                  <div key={`gear-${i}`} className="flex gap-2">
                    <input type="text" value={item} onChange={(e) => handleNestedChange('essentials', 'basicGear', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. Backpack with rain cover (50-60 ltr)" />
                    <button type="button" onClick={() => removeItem('essentials', i, 'basicGear')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Cancellation */}
          <div>
            <h3 className="text-lg font-serif text-[var(--color-ink)] mb-4 border-b border-[var(--color-ink)]/10 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4" /> Cancellation Policy
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Emergency Cases</label>
                <textarea value={formData.cancellation?.emergencyCases || ""} onChange={(e) => setFormData((prev: any) => ({ ...prev, cancellation: { ...prev.cancellation, emergencyCases: e.target.value } }))} className="w-full p-3 border border-[var(--color-ink)]/10 rounded outline-none text-sm" rows={2} placeholder="e.g. In case of medical emergency with valid docs, 90% refund..." />
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Refund Policies</label>
                  <button type="button" onClick={() => setFormData((prev: any) => ({ ...prev, cancellation: { ...prev.cancellation, policies: [...(prev.cancellation?.policies || []), { timeFrame: '', refundOptions: [''] }] } }))} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Policy</button>
                </div>
                <div className="space-y-4">
                  {formData.cancellation?.policies?.map((policy: any, i: number) => (
                    <div key={`pol-${i}`} className="p-3 bg-white rounded border border-gray-200 space-y-2">
                      <div className="flex gap-2 items-center">
                        <input type="text" placeholder="Time Frame (e.g. Prior to 25 days)" value={policy.timeFrame} onChange={(e) => {
                          setFormData((prev: any) => {
                            const newPolicies = [...(prev.cancellation?.policies || [])];
                            newPolicies[i] = { ...newPolicies[i], timeFrame: e.target.value };
                            return { ...prev, cancellation: { ...prev.cancellation, policies: newPolicies } };
                          });
                        }} className="flex-1 p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm font-bold" />
                        <button type="button" onClick={() => {
                          setFormData((prev: any) => {
                            const newPolicies = [...(prev.cancellation?.policies || [])];
                            newPolicies.splice(i, 1);
                            return { ...prev, cancellation: { ...prev.cancellation, policies: newPolicies } };
                          });
                        }} className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                      </div>
                      <div className="pl-4 border-l-2 border-gray-200 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Refund Options</span>
                          <button type="button" onClick={() => {
                            setFormData((prev: any) => {
                              const newPolicies = [...(prev.cancellation?.policies || [])];
                              newPolicies[i] = { ...newPolicies[i], refundOptions: [...(newPolicies[i].refundOptions || []), ''] };
                              return { ...prev, cancellation: { ...prev.cancellation, policies: newPolicies } };
                            });
                          }} className="text-[10px] text-[var(--color-primary)] font-bold hover:underline">+ Add</button>
                        </div>
                        {policy.refundOptions?.map((opt: string, j: number) => (
                          <div key={`pol-${i}-opt-${j}`} className="flex gap-2">
                            <input type="text" value={opt} onChange={(e) => {
                              setFormData((prev: any) => {
                                const newPolicies = [...(prev.cancellation?.policies || [])];
                                const newOpts = [...newPolicies[i].refundOptions];
                                newOpts[j] = e.target.value;
                                newPolicies[i] = { ...newPolicies[i], refundOptions: newOpts };
                                return { ...prev, cancellation: { ...prev.cancellation, policies: newPolicies } };
                              });
                            }} className="w-full p-1.5 border border-[var(--color-ink)]/10 rounded outline-none text-xs" placeholder="e.g. 5% deduction of trek fee" />
                            <button type="button" onClick={() => {
                              setFormData((prev: any) => {
                                const newPolicies = [...(prev.cancellation?.policies || [])];
                                const newOpts = [...newPolicies[i].refundOptions];
                                newOpts.splice(j, 1);
                                newPolicies[i] = { ...newPolicies[i], refundOptions: newOpts };
                                return { ...prev, cancellation: { ...prev.cancellation, policies: newPolicies } };
                              });
                            }} className="text-red-400 hover:text-red-600"><Trash2 className="w-3 h-3" /></button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {(!formData.cancellation?.policies || formData.cancellation.policies.length === 0) && <p className="text-sm text-gray-400 italic">No refund policies added yet.</p>}
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-ink)]/50">Important Notes</label>
                  <button type="button" onClick={() => addItem('cancellation', 'notes', '')} className="text-xs text-[var(--color-primary)] font-bold flex items-center gap-1 hover:underline"><Plus className="w-3 h-3"/> Add Note</button>
                </div>
                <div className="space-y-2">
                  {formData.cancellation?.notes?.map((note: string, i: number) => (
                    <div key={`cnote-${i}`} className="flex gap-2">
                      <input type="text" value={note} onChange={(e) => handleNestedChange('cancellation', 'notes', i, e.target.value)} className="w-full p-2 border border-[var(--color-ink)]/10 rounded outline-none text-sm" placeholder="e.g. 30% rescheduling fee applies" />
                      <button type="button" onClick={() => removeItem('cancellation', i, 'notes')} className="text-red-400 hover:text-red-600 p-2"><Trash2 className="w-4 h-4" /></button>
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
