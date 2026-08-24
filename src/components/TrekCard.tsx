import Image from "next/image";
import Link from "next/link";
import { Clock, Mountain, ArrowRight } from "lucide-react";
import { Trek } from "@/data/treks";

export default function TrekCard({ trek, index }: { trek: Trek; index: number }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[450px] border border-[#1B4332]/5 relative">
      {/* Image Container with Mountain Peak Clip Path */}
      <div className="relative h-56 w-full overflow-hidden clip-mountain z-10">
        <Image
          src={trek.heroImage}
          alt={trek.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/80 to-transparent" />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4 bg-[#F4A261] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
          {trek.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-20 -mt-6 bg-white rounded-t-3xl pt-8">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-[#F4A261] text-xs font-bold uppercase tracking-widest">{trek.region}</span>
            <h3 className="text-2xl font-display font-bold text-[#1B4332] mt-1 line-clamp-1">{trek.name}</h3>
          </div>
        </div>

        {/* Specs */}
        <div className="flex gap-4 mt-6">
          <div className="flex items-center gap-2 text-sm text-[#0A1910]/70 font-medium">
            <Clock className="w-4 h-4 text-[#F4A261]" />
            <span>{trek.duration.days}D</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#0A1910]/70 font-medium">
            <Mountain className="w-4 h-4 text-[#F4A261]" />
            <span>{trek.altitude.toLocaleString()}'</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-[#1B4332]/5">
          <div className="flex flex-col">
            <span className="text-xs text-[#0A1910]/50 font-medium">Starting from</span>
            <span className="font-bold text-lg text-[#1B4332]">₹{trek.price.toLocaleString()}</span>
          </div>
          <Link 
            href={`/treks/${trek.slug}`}
            className="w-10 h-10 rounded-full bg-[#1B4332]/5 flex items-center justify-center text-[#1B4332] group-hover:bg-[#F4A261] group-hover:text-white transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
