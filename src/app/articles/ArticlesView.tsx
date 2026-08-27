"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

export default function ArticlesView({ articles }: { articles: any[] }) {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-24 selection:bg-[var(--color-primary)] selection:text-black">
      <ScrollToTop />
      
      {/* Header Section */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[var(--color-ink)]/30"></div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/70">
              Editorial & Insights
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-[var(--color-ink)] leading-none tracking-tighter mb-8">
            The <br />
            <span className="italic font-light">Journal.</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg font-sans font-light text-[var(--color-ink)]/70 leading-relaxed">
            Curated narratives on high-altitude expeditions, technical gear mastery, and the profound philosophy of mountaineering.
          </p>
        </motion.div>
      </section>

      {/* Featured Article (Index 0) */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-20 md:mb-24">
        {articles.length > 0 && (
          <Link href={`/articles/${articles[0].slug}`} className="group block">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              <div className="lg:col-span-8 relative w-full aspect-[16/9] overflow-hidden bg-[var(--color-ink)]/5">
                {articles[0].image && (
                  <Image 
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                )}
              </div>
              
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                    {articles[0].category}
                  </span>
                  <span className="text-[10px] font-sans tracking-[0.1em] text-[var(--color-ink)]/50">
                    {articles[0].read_time}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-ink)] leading-tight mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {articles[0].title}
                </h2>
                <p className="text-[var(--color-ink)]/70 font-sans font-light leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-ink)]/5 flex items-center justify-center text-[var(--color-ink)] font-serif italic text-sm">
                    {articles[0].author.charAt(0)}
                  </div>
                  <span className="text-xs font-sans font-semibold text-[var(--color-ink)]">
                    {articles[0].author}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        )}
      </section>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <div className="w-full h-px bg-[var(--color-ink)]/10"></div>
      </div>

      {/* Grid Articles */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12">
          {articles.slice(1).map((article, index) => (
            <motion.div 
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <Link href={`/articles/${article.slug}`} className="group flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-[var(--color-ink)]/5">
                  {article.image && (
                    <Image 
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                      {article.category}
                    </span>
                    <span className="text-[10px] font-sans tracking-[0.1em] text-[var(--color-ink)]/50">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-[var(--color-ink)] mb-3 leading-snug group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[var(--color-ink)]/70 font-sans font-light leading-relaxed text-sm">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
