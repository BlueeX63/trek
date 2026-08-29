import { supabase } from "@/lib/supabase";
import CategoryTrekGrid from "@/components/CategoryTrekGrid";
import { Sparkles, Users, Tent, Compass } from "lucide-react";
import Image from "next/image";

// In a real app, this would be fetched from a CMS
const CATEGORY_DATA: Record<string, any> = {
  uttarakhand: {
    title: "Uttarakhand Treks",
    description: "Explore the legendary Garhwal and Kumaon Himalayas. Home to pristine meadows, ancient temples, and some of the most iconic trekking trails in India.",
    icon: Compass,
    filterFn: (query: any) => query.eq('region', 'Uttarakhand'),
    image: "/images/uttarakhand/kedarkantha-trek.jpg"
  },
  himachal: {
    title: "Himachal Treks",
    description: "Journey through lush pine forests, dramatic alpine passes, and the rugged terrain of Spiti and Lahaul.",
    icon: Tent,
    filterFn: (query: any) => query.eq('region', 'Himachal Pradesh'),
    image: "/images/himachal/hampta-pass.jpg"
  },
  kashmir: {
    title: "Kashmir Treks",
    description: "Trek the paradise on earth. Discover alpine lakes, vast meadows, and the unparalleled beauty of the Kashmir valley.",
    icon: Sparkles,
    filterFn: (query: any) => query.eq('region', 'Kashmir'),
    image: "/images/kashmir/kashmir-great-lakes.jpg"
  },
  ladakh: {
    title: "Ladakh Treks",
    description: "Venture into the cold desert. Experience stark lunar landscapes, high altitude passes, and deep Buddhist culture.",
    icon: Users,
    filterFn: (query: any) => query.eq('region', 'Ladakh'),
    image: "/images/ladakh/chadar-trek.jpg"
  },
  spiritual: {
    title: "Spiritual Journeys",
    description: "Follow the ancient pilgrimage routes. Treks that offer both physical challenge and profound spiritual awakening.",
    icon: Sparkles,
    filterFn: (query: any) => query.contains('categories', '["Spiritual"]'),
    image: "/images/uttarakhand/kedarnath.jpg"
  }
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;
  const categoryInfo = CATEGORY_DATA[categoryId];

  if (!categoryInfo) {
    return (
      <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24 flex items-center justify-center">
        <h1 className="text-4xl font-serif text-[var(--color-ink)]">Category Not Found</h1>
      </main>
    );
  }

  const Icon = categoryInfo.icon;
  
  let query = supabase.from('treks').select('*');
  query = categoryInfo.filterFn(query);
  
  const { data: dbTreks, error } = await query;
  
  if (error) {
    console.error("Error fetching treks for category:", error);
  }

  // Map DB format to local Trek format expected by CategoryTrekGrid
  const filteredTreks = (dbTreks || []).map((dbTrek: any) => ({
    id: dbTrek.id,
    slug: dbTrek.slug,
    name: dbTrek.name,
    location: dbTrek.location,
    country: dbTrek.country,
    region: dbTrek.region,
    altitude: dbTrek.altitude,
    duration: { days: dbTrek.duration_days, nights: dbTrek.duration_nights },
    difficulty: dbTrek.difficulty,
    season: dbTrek.season || [],
    price: dbTrek.price,
    heroImage: dbTrek.hero_image,
    categories: dbTrek.categories || [],
    coordinates: dbTrek.coordinates || "",
    gallery: dbTrek.gallery || []
  }));

  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      {/* Category Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-[var(--color-ink)] overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={categoryInfo.image}
            alt={categoryInfo.title}
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover grayscale-[30%] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/60 to-transparent opacity-90 z-10" />
        </div>

        <div className="relative z-20 w-full px-6 md:px-12 pb-16 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[var(--color-primary)]">
              <Icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div className="w-12 h-[1px] bg-[var(--color-paper)]/50"></div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-paper)]">
              Collection
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-[var(--color-paper)] leading-none tracking-tighter mb-6">
            {categoryInfo.title.split(' ')[0]}<br />
            <span className="italic font-light">{categoryInfo.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-[var(--color-paper)]/80 font-sans text-sm md:text-base font-light leading-relaxed max-w-xl">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Trek Grid with Filters */}
      <CategoryTrekGrid initialTreks={filteredTreks} />
    </main>
  );
}
