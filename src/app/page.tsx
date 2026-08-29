import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

const ExpeditionCategories = dynamic(() => import("@/components/ExpeditionCategories"), {
  loading: () => <div className="min-h-[600px] w-full bg-[var(--color-paper)]" />
});
const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"), {
  loading: () => <div className="min-h-[600px] w-full bg-[var(--color-ink)]" />
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[500px] w-full bg-[var(--color-paper)]" />
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="min-h-[500px] w-full bg-[var(--color-ink)]" />
});
const ExpeditionFAQ = dynamic(() => import("@/components/ExpeditionFAQ"), {
  loading: () => <div className="min-h-[600px] w-full bg-[var(--color-paper)]" />
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Hero />
      <Intro />
      {/* <ExpeditionStats /> */}
      <ExpeditionCategories />
      {/* <TrekExplorer limit={8} showViewMore={true} /> */}
      {/* <FeaturedExpedition /> */}
      <ProcessTimeline />
      <Testimonials />
      <WhyChooseUs />
      <ExpeditionFAQ />
    </main>
  );
}
