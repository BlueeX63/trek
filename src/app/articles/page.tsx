import { supabase } from "@/lib/supabase";
import ArticlesView from "./ArticlesView";

export const revalidate = 0;

export const metadata = {
  title: 'Journal | Xplore The Dreams',
  description: 'Curated narratives on high-altitude expeditions, technical gear mastery, and the profound philosophy of mountaineering.',
};

export default async function ArticlesPage() {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching articles:", error);
  }

  return <ArticlesView articles={articles || []} />;
}
