"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface TrekGalleryProps {
  images: string[];
  trekName: string;
}

export default function TrekGallery({ images, trekName }: TrekGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Dynamic grid layout based on image count
  const getGridLayout = () => {
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  };

  return (
    <>
      <section id="gallery" className="w-full bg-[var(--color-ink)] py-24 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-16 border-b border-[var(--color-paper)]/10 pb-8">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/50 mb-4 block">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-paper)] mb-4">
              Gallery
            </h2>
            <p className="text-[var(--color-paper)]/60 text-sm md:text-base max-w-xl font-light">
              Explore the breathtaking landscapes and moments from the {trekName} expedition.
            </p>
          </div>

          {/* Image Grid */}
          <div className={`grid ${getGridLayout()} gap-3 md:gap-4`}>
            {images.map((imgSrc, idx) => {
              return (
                <div
                  key={`gallery-${idx}`}
                  onClick={() => openLightbox(idx)}
                  className="group relative overflow-hidden cursor-pointer rounded-lg aspect-[4/3]"
                >
                  <Image
                    src={imgSrc}
                    alt={`${trekName} gallery image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-paper)]/20 backdrop-blur-sm border border-[var(--color-paper)]/30 flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-[var(--color-paper)]" />
                      </div>
                    </div>
                  </div>

                  {/* Image number badge */}
                  <div className="absolute bottom-3 right-3 bg-[var(--color-ink)]/70 backdrop-blur-sm text-[var(--color-paper)] text-[9px] font-sans font-bold tracking-wider px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-[var(--color-ink)]/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[var(--color-paper)]/10 hover:bg-[var(--color-paper)]/20 text-[var(--color-paper)] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-[var(--color-paper)]/10 hover:bg-[var(--color-primary)] hover:text-[var(--color-ink)] text-[var(--color-paper)] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-[var(--color-paper)]/10 hover:bg-[var(--color-primary)] hover:text-[var(--color-ink)] text-[var(--color-paper)] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          {/* Active Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${trekName} - Image ${activeIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Bottom counter + dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[var(--color-ink)]/60 backdrop-blur-md border border-[var(--color-paper)]/15 px-5 py-2.5 rounded-full">
            <span className="text-sm font-serif font-bold text-[var(--color-primary)]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-xs text-[var(--color-paper)]/40">/</span>
            <span className="text-sm font-serif text-[var(--color-paper)]/60">
              {String(images.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              {images.map((_, dotIdx) => (
                <button
                  key={`lb-dot-${dotIdx}`}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(dotIdx); }}
                  aria-label={`Go to image ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === activeIndex
                      ? "w-5 bg-[var(--color-primary)]"
                      : "w-1.5 bg-[var(--color-paper)]/30 hover:bg-[var(--color-paper)]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
