"use client";

interface ItineraryDay {
  day: number;
  title: string;
  details: string[];
}

interface TrekItineraryProps {
  itinerary: ItineraryDay[];
}

export default function TrekItinerary({ itinerary }: TrekItineraryProps) {
  return (
    <section id="itinerary" className="w-full bg-[var(--color-ink)] py-24 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex flex-col items-start border-l border-[var(--color-terracotta)] pl-6">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/50 mb-4">
            Day by Day
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-[var(--color-paper)] leading-none mb-6">
            The Itinerary
          </h2>
          <p className="text-[var(--color-paper)]/60 text-sm md:text-base font-sans font-light max-w-xl">
            A carefully crafted journey ensuring you experience the best of the landscape while acclimatizing safely.
          </p>
        </div>

        <div className="flex flex-col">
          {itinerary.map((dayData, index) => (
            <ItineraryRow 
              key={dayData.day} 
              dayData={dayData} 
              isLast={index === itinerary.length - 1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ItineraryRow({ dayData, isLast }: { dayData: ItineraryDay; isLast: boolean }) {
  return (
    <div className="flex flex-col md:flex-row items-stretch group">
      
      {/* Timeline Column */}
      <div className="w-full md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-start relative border-t md:border-t-0 border-[var(--color-paper)]/10 pt-8 md:pt-0 pb-8 md:pb-0">
        <div className="font-serif text-5xl md:text-7xl text-[var(--color-paper)]/10 group-hover:text-[var(--color-terracotta)] transition-colors duration-500 mr-6 md:mr-0">
          {String(dayData.day).padStart(2, '0')}
        </div>
        {!isLast && (
          <div className="hidden md:block absolute left-4 top-20 bottom-0 w-[1px] bg-[var(--color-paper)]/10"></div>
        )}
      </div>

      {/* Content Column */}
      <div className={`w-full pb-16 md:pb-24 pt-2 md:pt-4 ${!isLast ? 'border-b border-[var(--color-paper)]/10' : ''}`}>
        <h3 className="text-2xl md:text-4xl font-serif text-[var(--color-paper)] mb-8">
          {dayData.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {dayData.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] mt-2 shrink-0"></span>
              <span className="text-[var(--color-paper)]/60 text-sm md:text-base font-sans font-light leading-relaxed">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
