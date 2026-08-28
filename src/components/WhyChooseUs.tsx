"use client";

import { useRef } from "react";
import { ShieldCheck, Mountain, Users, Leaf, Compass, Star } from "lucide-react";

const features = [
  {
    title: "Uncompromising Safety",
    description: "Your safety is our absolute priority. We deploy highly certified guides and medical equipment on every expedition.",
    icon: ShieldCheck,
  },
  {
    title: "Curated Expeditions",
    description: "We don't just run trails; we craft premium high-altitude experiences tailored for true adventurers.",
    icon: Mountain,
  },
  {
    title: "Small Group Dynamics",
    description: "Intimate group sizes ensure personalized attention, stronger camaraderie, and a minimal ecological footprint.",
    icon: Users,
  },
  {
    title: "Expert Leadership",
    description: "Led by seasoned mountaineers with decades of Himalayan experience and deep local knowledge.",
    icon: Compass,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-paper)] py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-24">
          <div className="md:w-1/2">
            <h2 className="font-display text-5xl md:text-7xl leading-tight mb-8">
              Why Choose <br />
              <span className="text-[var(--color-primary)] italic">Xplore The Dreams?</span>
            </h2>
          </div>
          <div className="md:w-1/2 flex items-end">
            <p className="font-sans font-light text-lg md:text-xl text-[var(--color-paper)]/80 leading-relaxed max-w-lg">
              We redefine high-altitude adventure by blending raw wilderness with refined logistics, ensuring your journey is as seamless as it is spectacular.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative border border-[var(--color-paper)]/10 p-8 hover:bg-[var(--color-paper)]/5 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Number indicator */}
              <div className="text-[var(--color-paper)]/20 font-display text-4xl mb-8 group-hover:text-[var(--color-primary)]/40 transition-colors duration-500">
                0{index + 1}
              </div>
              
              <div className="mb-6 text-[var(--color-primary)]">
                <feature.icon strokeWidth={1.5} className="w-8 h-8" />
              </div>
              
              <h3 className="font-display text-2xl mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="font-sans font-light text-[var(--color-paper)]/60 text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>

              {/* Decorative line */}
              <div className="w-0 h-[1px] bg-[var(--color-primary)] mt-8 group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
