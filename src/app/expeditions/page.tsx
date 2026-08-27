import ExpeditionCategories from "@/components/ExpeditionCategories";
import Image from "next/image";

export default function ExpeditionsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[var(--color-ink)]/30"></div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/70">
                The collection
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[var(--color-ink)] leading-none tracking-tighter mb-8">
              Choose your<br />
              <span className="italic font-light">Mountain.</span>
            </h1>
            <div className="text-[var(--color-ink)]/70 font-sans text-sm md:text-base font-light leading-relaxed max-w-md space-y-6">
              <p>
                From the gentle alpine meadows of the Himalayas to the grueling slopes of extreme altitude peaks, our curated expeditions cater to both the novice and the seasoned mountaineer.
              </p>
              <p>
                Explore our comprehensive list of upcoming treks, filter by difficulty or region, and find the perfect journey that resonates with your adventurous spirit.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden">
             <Image 
               src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1500&auto=format&fit=crop"
               alt="Mountaineer looking at peaks"
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
               className="object-cover grayscale-[20%]"
             />
          </div>
        </div>
      </section>

      {/* Categories / Folders Component */}
      <div className="border-t border-[var(--color-ink)]/10">
        <ExpeditionCategories />
      </div>
    </main>
  );
}
