import Image from "next/image";
import { Star } from "lucide-react";

const REVIEWS = [
  { id: 1, name: "Vikas Jain", date: "30/07/26", rating: 5, text: "Dear Pankaj and Arun, Just completed the Pin Bhaba Pass trek... And it was an incredible experience! The views were absolutely breathtaking and the logistics were seamless.", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" },
  { id: 2, name: "Aisha Patel", date: "15/06/26", rating: 5, text: "An absolute dream. The food at 14,000ft was better than most restaurants in the city. The attention to detail is unmatched.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { id: 3, name: "Rahul Verma", date: "02/05/26", rating: 5, text: "I've trekked with many companies, but Xplore The Dreams sets a new standard for high-altitude luxury and safety.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" },
];

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-paper)] py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Minimal Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-[var(--color-ink)]/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-ink)] tracking-tighter">
            The <span className="italic font-light">Logbook.</span>
          </h2>
          <div className="flex items-center gap-6">
            <span className="text-5xl font-serif text-[var(--color-ink)]">4.9</span>
            <div className="flex flex-col">
              <div className="flex text-[var(--color-primary)] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" strokeWidth={1} />
                ))}
              </div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/50">
                Based on 12,000+ Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {REVIEWS.map((review) => (
            <div key={review.id} className="flex flex-col">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image 
                    src={review.avatar} 
                    alt={review.name}
                    fill
                    sizes="40px"
                    className="object-cover grayscale" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg text-[var(--color-ink)] leading-none mb-1">{review.name}</span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[var(--color-ink)]/40">{review.date}</span>
                </div>
              </div>

              <div className="flex text-[var(--color-primary)] mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" strokeWidth={1} />
                ))}
              </div>

              <p className="text-lg font-serif text-[var(--color-ink)]/80 leading-relaxed italic">
                "{review.text}"
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
