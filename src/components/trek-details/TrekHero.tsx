"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface TrekHeroProps {
  title: string;
  image?: string;
  images?: string[];
  subtitle?: string;
}

export default function TrekHero({ title, image, images, subtitle }: TrekHeroProps) {
  // Combine all images into a clean array
  const imageList = (images && images.length > 0)
    ? images.filter(Boolean)
    : image
    ? [image]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (imageList.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  }, [imageList.length]);

  const handleNext = useCallback(() => {
    if (imageList.length <= 1) return;
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  }, [imageList.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  const currentImage = imageList[currentIndex] || image || "/images/uttarakhand/kedarkantha-trek.jpg";

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-[var(--color-ink)] overflow-hidden flex flex-col justify-end pt-32 pb-12 md:pb-24 group">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {imageList.map((imgSrc, idx) => (
          <div
            key={imgSrc + idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={imgSrc}
              alt={`Photo ${idx + 1} of ${title}`}
              fill
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cover grayscale-[25%] opacity-75 scale-105 transition-transform duration-1000"
            />
          </div>
        ))}

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Left & Right Arrow Controls (Visible when more than 1 image) */}
      {imageList.length > 1 && (
        <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 z-30 flex justify-between items-center pointer-events-none">
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-ink)]/40 hover:bg-[var(--color-primary)] hover:text-[var(--color-ink)] text-[var(--color-paper)] backdrop-blur-md border border-[var(--color-paper)]/20 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group/btn"
          >
            <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform duration-200" />
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-ink)]/40 hover:bg-[var(--color-primary)] hover:text-[var(--color-ink)] text-[var(--color-paper)] backdrop-blur-md border border-[var(--color-paper)]/20 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group/btn"
          >
            <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>
      )}

      {/* Main Title & Hero Content */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start text-left">
        <div className="max-w-5xl">
          {subtitle && (
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[var(--color-primary)]"></div>
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-paper)]">
                {subtitle}
              </span>
            </div>
          )}
          <h1 className={`font-serif font-medium text-[var(--color-paper)] leading-[0.9] tracking-tighter mb-12 mix-blend-overlay select-none ${
            title.length > 30
              ? "text-5xl md:text-7xl lg:text-8xl"
              : title.length > 18
              ? "text-5xl md:text-8xl lg:text-[8.5rem]"
              : "text-6xl md:text-8xl lg:text-[9rem]"
          }`}>
            {title}
          </h1>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Gallery Pagination Counter */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between mt-auto">
        {/* Scroll Down indicator */}
        <div className="flex items-center gap-4 text-[var(--color-paper)]/70">
          <div aria-hidden="true" className="w-10 h-10 border border-[var(--color-paper)]/30 rounded-full flex items-center justify-center">
            <ArrowDown className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
        </div>

        {/* Image Counter & Pagination Dots */}
        {imageList.length > 1 && (
          <div className="flex items-center gap-4 bg-[var(--color-ink)]/60 backdrop-blur-md border border-[var(--color-paper)]/15 px-4 py-2 rounded-full">
            <span className="text-xs font-serif font-bold text-[var(--color-primary)]">
              0{currentIndex + 1}
            </span>
            <span className="text-[10px] text-[var(--color-paper)]/40 font-sans">/</span>
            <span className="text-xs font-serif text-[var(--color-paper)]/60">
              0{imageList.length}
            </span>
            
            <div className="flex items-center gap-1.5 ml-2">
              {imageList.map((_, dotIdx) => (
                <button
                  key={`dot-${dotIdx}`}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentIndex
                      ? "w-5 bg-[var(--color-primary)]"
                      : "w-1.5 bg-[var(--color-paper)]/30 hover:bg-[var(--color-paper)]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
