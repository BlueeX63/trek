const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("Testing array...");
  const { data: d1, error: e1 } = await supabase.from('treks').select('*').contains('categories', ['Spiritual']);
  console.log("Error 1:", e1);
  
  console.log("Testing string...");
  const { data: d2, error: e2 } = await supabase.from('treks').select('*').contains('categories', '["Spiritual"]');
  console.log("Error 2:", e2);
}
run();
