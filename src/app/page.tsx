import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ExpeditionStats from "@/components/ExpeditionStats";
import ExpeditionCategories from "@/components/ExpeditionCategories";
import TrekExplorer from "@/components/TrekExplorer";
import FeaturedExpedition from "@/components/FeaturedExpedition";
import Testimonials from "@/components/Testimonials";
import ExpeditionFAQ from "@/components/ExpeditionFAQ";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Hero />
      <Intro />
      <ExpeditionStats />
      <ExpeditionCategories />
      <TrekExplorer />
      <FeaturedExpedition />
      <ProcessTimeline />
      <Testimonials />
      <ExpeditionFAQ />
    </main>
  );
}
