import { treks } from "@/data/treks";
import TrekCard from "@/components/TrekCard";
import { Sparkles, Users, Tent, Compass } from "lucide-react";

// In a real app, this would be fetched from a CMS
const CATEGORY_DATA: Record<string, any> = {
  premium: {
    title: "Premium Ascents",
    description: "Luxury service at extreme altitudes. Uncompromising comfort, expert sherpa support, and the finest basecamp amenities available in the Himalayas.",
    icon: Sparkles,
    filterFn: (trek: any) => trek.price >= 15000 || trek.difficulty === 'Challenging',
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000"
  },
  family: {
    title: "Family Trails",
    description: "Safe, guided experiences designed for families and beginners. Enjoy the majesty of the mountains with manageable altitudes and comfortable trekking days.",
    icon: Users,
    filterFn: (trek: any) => trek.difficulty === 'Easy' || trek.difficulty === 'Moderate',
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000"
  },
  summer: {
    title: "Alpine Camps",
    description: "Learn mountaineering basics and experience pristine summer trails. Perfect for building your high-altitude resume.",
    icon: Tent,
    filterFn: (trek: any) => trek.season.includes('Summer'),
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000"
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
  const filteredTreks = treks.filter(categoryInfo.filterFn);

  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      {/* Category Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-[var(--color-ink)] overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={categoryInfo.image}
            alt={categoryInfo.title}
            className="w-full h-full object-cover grayscale-[30%] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/60 to-transparent opacity-90 z-10" />
        </div>

        <div className="relative z-20 w-full px-6 md:px-12 pb-16 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[var(--color-terracotta)]">
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

      {/* Trek Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 border-b border-[var(--color-ink)]/10 pb-6 gap-4">
          <h2 className="text-3xl font-serif text-[var(--color-ink)]">
            Available <span className="italic font-light">Expeditions</span>
          </h2>
          <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 border border-[var(--color-ink)]/20 px-4 py-2">
            {filteredTreks.length} Treks Found
          </span>
        </div>

        {filteredTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
            {filteredTreks.map((trek, index) => (
              <TrekCard key={trek.id} trek={trek} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-lg font-serif text-[var(--color-ink)]/60">No expeditions currently available in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
