import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ArrowLeft } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import ArticleActions from "@/components/ArticleActions";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Xplore The Dreams Journal`,
    description: article.excerpt,
    openGraph: {
      images: [article.image],
    }
  };
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-32 selection:bg-[var(--color-primary)] selection:text-black">
      <ScrollToTop />
      
      <article className="max-w-[1000px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-ink)]/50 hover:text-[var(--color-primary)] transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Journal
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              {article.category}
            </span>
            <span className="text-[10px] font-sans tracking-[0.1em] text-[var(--color-ink)]/50">
              {article.date} • {article.read_time}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-[var(--color-ink)] mb-8">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 border-t border-[var(--color-ink)]/10 pt-6">
            <div className="w-10 h-10 rounded-full bg-[var(--color-ink)]/5 flex items-center justify-center text-[var(--color-ink)] font-serif italic text-xl">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-sans font-semibold text-[var(--color-ink)]">{article.author}</p>
              <p className="text-xs font-sans text-[var(--color-ink)]/50">Xplore The Dreams Editorial</p>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <figure className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-16 md:mb-24 bg-[var(--color-ink)]/5">
          {article.image && (
            <Image 
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </figure>

        {/* Article Body */}
        <div className="max-w-[720px] mx-auto prose prose-lg md:prose-xl prose-stone">
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--color-ink)] mb-12 italic">
            {article.excerpt}
          </p>

          <div className="font-sans font-light text-[var(--color-ink)]/80 leading-[1.8] space-y-8">
            {article.content?.map((paragraph: string, idx: number) => {
              // Create drop cap for first paragraph
              if (idx === 0) {
                return (
                  <p key={idx} className="first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-serif first-letter:text-[var(--color-primary)] first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                    {paragraph}
                  </p>
                );
              }

              // Handle bolding formatting in content strings if they exist (e.g. "**Bold text**: rest of text")
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={idx}>
                    {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-[var(--color-ink)]">{part}</strong> : part)}
                  </p>
                );
              }

              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Footer/Share block */}
        <div className="max-w-[720px] mx-auto mt-24 pt-12 border-t border-[var(--color-ink)]/10 flex justify-between items-center">
          <p className="font-serif italic text-lg text-[var(--color-ink)]/50">End of article.</p>
          <ArticleActions slug={article.slug} title={article.title} excerpt={article.excerpt} />
        </div>
      </article>
    </main>
  );
}
