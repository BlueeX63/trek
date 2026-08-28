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

const dataDir = path.join(process.cwd(), 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('-details.ts'));

async function main() {
  let updatedCount = 0;

  for (const file of files) {
    try {
      const filePath = path.join(dataDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Extract the slug
      const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
      if (!slugMatch) {
        console.warn(`No slug found in ${file}. Skipping.`);
        continue;
      }
      const slug = slugMatch[1];

      // Find the itinerary array using bracket counting
      const itinStartIdx = content.indexOf('itinerary:');
      if (itinStartIdx === -1) {
        console.warn(`No itinerary block found in ${file}. Skipping.`);
        continue;
      }
      
      const bracketStartIdx = content.indexOf('[', itinStartIdx);
      if (bracketStartIdx === -1) continue;

      let bracketCount = 0;
      let bracketEndIdx = -1;
      
      // Count brackets to extract the exact array string
      for (let i = bracketStartIdx; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        if (content[i] === ']') bracketCount--;
        
        if (bracketCount === 0) {
          bracketEndIdx = i;
          break;
        }
      }
      
      if (bracketEndIdx !== -1) {
        const itinString = content.substring(bracketStartIdx, bracketEndIdx + 1);
        
        // Use eval to convert the raw JS array string into a JS object
        const itinerary = eval(`(${itinString})`);
        
        if (Array.isArray(itinerary) && itinerary.length > 0) {
          const { error } = await supabase
            .from('treks')
            .update({ itinerary })
            .eq('slug', slug);
            
          if (error) {
            console.error(`Error updating ${slug} in DB:`, error.message);
          } else {
            console.log(`[Success] Updated ${slug} (${itinerary.length} days)`);
            updatedCount++;
          }
        } else {
          console.warn(`Itinerary parsed as empty or invalid for ${slug}`);
        }
      }
    } catch (err: any) {
      console.error(`Failed to process ${file}:`, err.message);
    }
  }
  
  console.log(`\nMigration complete! Successfully updated ${updatedCount} treks.`);
}

main();
