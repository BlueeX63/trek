import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase env vars in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function generateSlug(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

async function main() {
  const content = fs.readFileSync(path.join(process.cwd(), 'AGENTS.md'), 'utf-8');
  const lines = content.split('\n').map(l => l.trim()).filter(l => l);

  const parsedTreks: any[] = [];
  let currentTrek: any = null;
  let currentDay: any = null;

  // Parse AGENTS.md
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.endsWith(' Itinerary')) {
      if (currentTrek && currentDay) {
        currentTrek.itinerary.push(currentDay);
      }
      if (currentTrek) {
        parsedTreks.push(currentTrek);
      }
      const name = line.replace(' Itinerary', '').trim();
      currentTrek = { name, itinerary: [] };
      currentDay = null;
      continue;
    }
    
    const dayMatch = line.match(/^Day\s+(\d+)\s*(?:-|&|to|and)?\s*(\d+)?$/i);
    if (dayMatch && currentTrek) {
      if (currentDay) {
        currentTrek.itinerary.push(currentDay);
      }
      // Next line is usually the title
      let nextIdx = i + 1;
      let title = 'Trekking Day';
      if (nextIdx < lines.length && !lines[nextIdx].match(/^Day\s+\d+/i) && !lines[nextIdx].endsWith(' Itinerary')) {
        title = lines[nextIdx];
        i = nextIdx;
      }
      currentDay = { day: parseInt(dayMatch[1], 10), title, details: [] };
      continue;
    }
    
    if (currentDay && line !== 'Quick' && line !== 'Detailed' && line !== 'Trek Graph' && line !== 'Food At TTH' && line !== 'Accomodation At TTH' && !line.startsWith('Note:')) {
      currentDay.details.push(line);
    }
  }

  if (currentTrek && currentDay) {
    currentTrek.itinerary.push(currentDay);
  }
  if (currentTrek) parsedTreks.push(currentTrek);

  console.log(`Parsed ${parsedTreks.length} treks from AGENTS.md`);

  // Fetch DB treks
  const { data: dbTreks, error } = await supabase.from('treks').select('id, slug, name');
  if (error || !dbTreks) {
    console.error("Failed to fetch treks from DB:", error);
    process.exit(1);
  }

  let updatedCount = 0;

  for (const pTrek of parsedTreks) {
    const pName = pTrek.name;
    const pNameClean = pName.replace(/ Trek$/i, '').replace(/ Expedition$/i, '').replace(/ Weekend Trek$/i, '').trim();
    const pSlug1 = generateSlug(pName);
    const pSlug2 = generateSlug(pNameClean);

    // Find match
    const manualMap: Record<string, string> = {
      "Yoga & Meditation Retreat In The Himalayas": "yoga-meditation-retreat"
    };

    const targetSlug = manualMap[pName];

    if (targetSlug) {
      if (!manualMap[pName]) continue; // Only process these 3
      
      const { error: updateErr } = await supabase
        .from('treks')
        .update({ itinerary: pTrek.itinerary })
        .eq('slug', targetSlug);
      
      if (updateErr) {
        console.error(`Error updating ${targetSlug}:`, updateErr.message);
      } else {
        console.log(`[Success] Updated ${targetSlug} (matched to ${pName})`);
        updatedCount++;
      }
    } else {
      console.warn(`[Warning] No database match found for parsed trek: "${pName}"`);
    }
  }

  console.log(`\nMigration complete! Successfully updated ${updatedCount} out of ${parsedTreks.length} parsed treks.`);
}

main();
