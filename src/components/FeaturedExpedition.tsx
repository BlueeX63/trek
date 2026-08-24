"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Mountain } from "lucide-react";
import { treks } from "@/data/treks";

export default function FeaturedExpedition() {
  const featuredTrek = treks.find(t => t.slug === 'kashmir-great-lakes') || treks[0];

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-[#1B4332]/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          <div className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl clip-mountain">
            <Image
              src={featuredTrek.heroImage}
              alt={featuredTrek.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-8 left-8 bg-[#F4A261] text-white px-4 py-2 rounded-full shadow-md text-xs font-bold uppercase tracking-widest">
              Featured Expedition
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#1B4332] mb-6 leading-tight">
              {featuredTrek.name}
            </h2>
            <p className="text-[#0A1910]/70 text-lg mb-10 leading-relaxed font-medium">
              Experience the alpine lakes and breathtaking meadows of Kashmir. This expedition is highly curated for those seeking a mix of moderate challenges and unmatched scenic beauty.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="bg-[#1B4332]/5 p-3 rounded-full text-[#F4A261]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#1B4332]/50 font-bold uppercase tracking-widest">Region</div>
                  <div className="font-bold text-[#1B4332]">{featuredTrek.region}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#1B4332]/5 p-3 rounded-full text-[#F4A261]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#1B4332]/50 font-bold uppercase tracking-widest">Duration</div>
                  <div className="font-bold text-[#1B4332]">{featuredTrek.duration.days} Days</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#1B4332]/5 p-3 rounded-full text-[#F4A261]">
                  <Mountain className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#1B4332]/50 font-bold uppercase tracking-widest">Max Altitude</div>
                  <div className="font-bold text-[#1B4332]">{featuredTrek.altitude.toLocaleString()} ft</div>
                </div>
              </div>
            </div>

            <Link 
              href={`/treks/${featuredTrek.slug}`} 
              className="inline-flex items-center justify-center gap-4 bg-[#1B4332] text-white px-8 py-4 rounded-full font-bold hover:bg-[#F4A261] transition-all duration-300 w-fit shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Explore Itinerary
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
