export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[var(--color-ink)]/30"></div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/70">
                Our Story
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-[var(--color-ink)] leading-none tracking-tighter mb-8">
              Beyond the<br />
              <span className="italic font-light">Summit.</span>
            </h1>
            <div className="text-[var(--color-ink)]/70 font-sans text-sm md:text-base font-light leading-relaxed max-w-md space-y-6">
              <p>
                We started Xplore The Dreams with a singular vision: to redefine the high-altitude expedition. Moving away from mass tourism, we curate raw, unfiltered wilderness experiences without compromising on the aesthetic.
              </p>
              <p>
                Our philosophy is rooted in the belief that true adventure shouldn&apos;t come at the cost of refinement. We painstakingly craft every journey to balance the rugged intensity of the mountains with impeccable safety standards and elevated expedition design.
              </p>
              <p>
                Whether you are navigating glacial moraines or resting at our meticulously designed basecamps, you will experience the mountains not just as a physical challenge, but as an immersive, transformative aesthetic.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1500&auto=format&fit=crop"
               alt="Mountaineer"
               className="w-full h-full object-cover grayscale-[20%]"
             />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[var(--color-paper)] pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-2 md:gap-[1px] items-stretch">
          <div 
            className="flex-1 bg-[var(--color-ink)] text-[var(--color-paper)] pt-40 pb-16 px-8 md:px-10 flex flex-col justify-end text-left group"
            style={{ clipPath: 'polygon(0% 25%, 35% 10%, 55% 18%, 80% 13%, 100% 25%, 100% 100%, 0% 100%)' }}
          >
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight mb-4">Raw Wilderness.</h3>
              <p className="text-[var(--color-paper)]/70 text-sm font-light leading-relaxed max-w-[300px]">
                We guide you to places untouched by the modern world. Where silence is profound and nature is absolute.
              </p>
            </div>
          </div>
          <div 
            className="flex-1 bg-[var(--color-ink)] text-[var(--color-paper)] pt-40 pb-16 px-8 md:px-10 flex flex-col justify-end text-left group"
            style={{ clipPath: 'polygon(0% 10%, 30% 22%, 60% 0%, 85% 14%, 100% 5%, 100% 100%, 0% 100%)' }}
          >
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight mb-4">Uncompromising Safety.</h3>
              <p className="text-[var(--color-paper)]/70 text-sm font-light leading-relaxed max-w-[300px]">
                Led by seasoned mountaineers, every route is meticulously planned. We leave nothing to chance.
              </p>
            </div>
          </div>
          <div 
            className="flex-1 bg-[var(--color-ink)] text-[var(--color-paper)] pt-40 pb-16 px-8 md:px-10 flex flex-col justify-end text-left group"
            style={{ clipPath: 'polygon(0% 5%, 45% 0%, 100% 25%, 100% 100%, 0% 100%)' }}
          >
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight mb-4">The Aesthetic.</h3>
              <p className="text-[var(--color-paper)]/70 text-sm font-light leading-relaxed max-w-[300px]">
                From our gear to our camps, we believe the journey should be as visually arresting as the destination itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
