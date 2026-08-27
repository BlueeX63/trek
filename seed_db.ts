import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

import { articles } from './src/data/articles';
import { treks } from './src/data/treks';

async function seed() {
  console.log('Seeding articles...');
  for (const article of articles) {
    const { error } = await supabase.from('articles').upsert({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      read_time: article.readTime,
      author: article.author,
      date: article.date,
      image: article.image,
      content: article.content
    }, { onConflict: 'slug' });
    
    if (error) console.error(`Error inserting article ${article.slug}:`, error);
  }
  console.log('Articles seeded.');

  console.log('Loading detailed treks dynamically...');
  const dataDir = path.join(process.cwd(), 'src/data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('-details.ts'));
  
  const allDetails: Record<string, any> = {};

  for (const file of files) {
    try {
      // dynamically import using tsx loader
      const mod = await import(`./src/data/${file}`);
      // Find the exported object that ends with 'Data'
      const exportName = Object.keys(mod).find(k => k.endsWith('Data'));
      if (exportName) {
        // We can link it back to the trek by slug.
        // Wait, how do we know the slug? Usually the file name is {slug}-details.ts.
        // There might be exceptions (e.g. chopta-chandrashila-deoriatal-details.ts -> chopta-chandrashila-deoriatal)
        const slug = file.replace('-details.ts', '');
        allDetails[slug] = mod[exportName];
      }
    } catch (e) {
      console.warn(`Could not load ${file}:`, e);
    }
  }

  console.log('Seeding treks...');
  for (const trek of treks) {
    // some slugs might not perfectly match the file name, but we will do our best.
    // e.g. "do-dham-with-chopta-chandrashila" might be in "dodham-chopta-chandrashila-details.ts"
    // So we'll try exact match first, then a fuzzy match.
    let detailData = allDetails[trek.slug];
    
    if (!detailData) {
      // Try to find the closest file match by ignoring hyphens and matching characters
      const cleanSlug = trek.slug.replace(/-/g, '');
      const possibleKey = Object.keys(allDetails).find(k => k.replace(/-/g, '').includes(cleanSlug) || cleanSlug.includes(k.replace(/-/g, '')));
      if (possibleKey) {
        detailData = allDetails[possibleKey];
      }
    }
    
    const trekRecord = {
      slug: trek.slug,
      name: trek.name,
      location: trek.location,
      country: trek.country,
      region: trek.region,
      coordinates: trek.coordinates || null,
      altitude: trek.altitude,
      duration_days: trek.duration.days,
      duration_nights: trek.duration.nights,
      difficulty: trek.difficulty,
      price: trek.price,
      hero_image: trek.heroImage,
      gallery: trek.gallery,
      categories: trek.categories,
      season: trek.season,
      
      // Detailed Info
      distance: detailData?.distance || null,
      base_camp: detailData?.baseCamp || null,
      months: detailData?.months || null,
      rail_head: detailData?.railHead || null,
      airport: detailData?.airport || null,
      trail_type: detailData?.trailType || null,
      overview: detailData?.overview || [],
      itinerary: detailData?.itinerary || [],
      eligibility: detailData?.eligibility || [],
      how_to_reach: detailData?.howToReach || [],
      cost_terms: detailData?.costTerms || {},
      essentials: detailData?.essentials || {},
      cancellation: detailData?.cancellation || [],
      faqs: detailData?.faqs || []
    };

    const { error } = await supabase.from('treks').upsert(trekRecord, { onConflict: 'slug' });
    if (error) {
      console.error(`Error inserting trek ${trek.slug}:`, error.message);
    } else {
      console.log(`Inserted ${trek.slug}`);
    }
  }
  console.log('Treks seeded.');
}

seed().catch(console.error);
