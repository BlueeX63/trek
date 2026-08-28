import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const articles = [
  {
    title: "Understanding Altitude Sickness: Prevention and Care",
    slug: "understanding-altitude-sickness",
    category: "Gear & Prep",
    author: "Xplore The Dreams Team",
    date: "August 28, 2026",
    read_time: "5 min read",
    excerpt: "A comprehensive guide to understanding, preventing, and treating Acute Mountain Sickness (AMS) during high-altitude expeditions.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2000",
    content: [
      "Altitude sickness, also known as Acute Mountain Sickness (AMS), is one of the most common challenges trekkers face when ascending to high elevations. It typically occurs above 8,000 feet (2,400 meters) when the body struggles to adapt to the lower air pressure and reduced oxygen levels.",
      "The early symptoms of AMS are subtle but important to recognize. They often include a persistent headache, dizziness, nausea, fatigue, and difficulty sleeping. If left untreated, AMS can progress into more severe conditions like High Altitude Pulmonary Edema (HAPE) or High Altitude Cerebral Edema (HACE), which are life-threatening.",
      "The golden rule of altitude sickness is prevention through proper acclimatization. 'Climb high, sleep low' is a vital strategy used by seasoned mountaineers. This involves ascending to a higher altitude during the day to trigger the body's adaptive responses, but descending to a lower altitude to sleep and recover.",
      "Hydration is another critical factor. At high altitudes, the air is dry and respiratory rates increase, leading to rapid fluid loss. Trekkers should aim to drink at least 3 to 4 liters of water a day. However, avoid alcohol and caffeine, as they can contribute to dehydration and mask AMS symptoms.",
      "Many trekkers also use Acetazolamide (commonly known as Diamox) as a prophylactic measure to speed up acclimatization. While it is highly effective, it requires a doctor's prescription and is not a substitute for ascending slowly. If symptoms of altitude sickness develop and do not improve with rest, the only definitive cure is immediate descent."
    ]
  },
  {
    title: "The Ultimate Guide to Trekking Fitness",
    slug: "health-and-trekking-fitness",
    category: "Gear & Prep",
    author: "Xplore The Dreams Team",
    date: "August 28, 2026",
    read_time: "6 min read",
    excerpt: "How to physically and mentally prepare your body for the rigorous demands of high-altitude Himalayan trekking.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2000",
    content: [
      "Trekking in the Himalayas is a test of both physical endurance and mental fortitude. Unlike a casual weekend hike, high-altitude expeditions involve long hours of walking, steep ascents, heavy backpacks, and thin air. Preparing your body months in advance is crucial for a successful and enjoyable journey.",
      "Cardiovascular fitness should be the foundation of your training. Activities like running, cycling, swimming, and stair climbing significantly improve your heart and lung capacity, which is vital when oxygen levels drop at higher altitudes. Aim for at least 3 to 4 sessions of intense cardio per week, progressively increasing your duration.",
      "Strength training is equally important. Your legs, core, and back will bear the brunt of the physical load. Focus on exercises such as squats, lunges, deadlifts, and step-ups to build lower body power. A strong core will help you maintain balance on uneven terrain and prevent lower back pain from carrying a heavy rucksack.",
      "Don't underestimate the power of 'simulation training.' The best way to prepare for trekking is by actually trekking. Find local hills or trails and hike them with a weighted backpack. Start with 5kg and gradually increase the weight until you are comfortable carrying the load you expect to have on the actual expedition.",
      "Finally, cultivate mental resilience. High-altitude trekking will push you out of your comfort zone. You will face cold nights, physical exhaustion, and unpredictable weather. Practicing mindfulness, staying positive, and learning how to pace yourself will ensure that when the physical challenge peaks, your mental strength carries you through."
    ]
  },
  {
    title: "The Crown Jewels of Uttarakhand",
    slug: "main-attractions-uttarakhand",
    category: "Expedition Logs",
    author: "Xplore The Dreams Team",
    date: "August 28, 2026",
    read_time: "7 min read",
    excerpt: "Discover the breathtaking beauty of Devbhoomi. From the Valley of Flowers to the spiritual heights of Kedarnath, explore Uttarakhand's finest.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2000",
    content: [
      "Uttarakhand, affectionately known as 'Devbhoomi' or the Land of the Gods, is a paradise for trekkers, nature lovers, and spiritual seekers. Nestled in the lap of the Himalayas, this stunning state offers a diverse range of landscapes, from dense alpine forests and sprawling meadows to towering snow-capped peaks and sacred rivers.",
      "One of the most iconic attractions in Uttarakhand is the Valley of Flowers National Park, a UNESCO World Heritage site. Discovered in 1931 by British mountaineer Frank S. Smythe, this high-altitude valley comes alive during the monsoon season, carpeting the landscape in millions of vibrant, endemic alpine flowers set against a backdrop of majestic glaciers.",
      "For winter trekking enthusiasts, the Kedarkantha Trek is unparalleled. Standing at an altitude of 12,500 feet, the summit offers a mesmerizing 360-degree view of famous Himalayan peaks including Swargarohini, Black Peak, and Bandarpoonch. The trail takes you through silent pine forests and pristine snowscapes, making it a definitive winter wonderland experience.",
      "Uttarakhand is also home to the sacred Char Dham Yatra, a spiritual circuit that includes Yamunotri, Gangotri, Kedarnath, and Badrinath. Kedarnath, situated near the head of the Mandakini River, is not only one of the holiest Hindu shrines but also a marvel of ancient architecture and breathtaking mountainous beauty.",
      "Another jewel is the Roopkund Trek, famous for its mysterious glacial lake that reveals hundreds of ancient human skeletons when the ice melts. Beyond the mystery, the trek is renowned for the twin meadows of Ali and Bedni Bugyal, which are considered some of the largest and most beautiful high-altitude meadows in Asia. Whether you seek adrenaline, tranquility, or spiritual awakening, Uttarakhand delivers an experience unlike any other."
    ]
  }
];

async function seed() {
  console.log("Inserting articles...");
  for (const article of articles) {
    const { data, error } = await supabase.from('articles').insert([article]);
    if (error) {
      console.error(`Error inserting ${article.title}:`, error.message);
    } else {
      console.log(`Successfully inserted: ${article.title}`);
    }
  }
  console.log("Done!");
}

seed();
