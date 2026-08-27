const fs = require('fs');

const content = fs.readFileSync('AGENTS.md', 'utf-8');
const treksTs = fs.readFileSync('src/data/treks.ts', 'utf-8');

// Parse existing treks to get slug -> name mapping
const slugs = [];
const nameToSlug = {};
const tsRegex = /slug:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
let match;
while ((match = tsRegex.exec(treksTs)) !== null) {
  slugs.push(match[1]);
  nameToSlug[match[2].toLowerCase().replace(/[^a-z0-9]/g, '')] = match[1];
}

const parts = content.split(/Trek Name:\r?\n/);
parts.shift(); // Remove content before first trek

const overviews = [
  "Embark on a mesmerizing journey with the {NAME}, where every step unveils a new facet of nature's grandeur. This expedition takes you through diverse landscapes, offering an unparalleled blend of thrill and tranquility. Away from the clamor of the city, you'll find solace among towering peaks and sweeping valleys.",
  "Discover the hidden treasures of the Himalayas on the {NAME}. Renowned for its stunning transitions in scenery, this trek is a visual masterpiece that will leave you breathless. Whether you are navigating dense ancient forests or crossing expansive alpine meadows, the profound silence of the mountains will rejuvenate your soul.",
  "The {NAME} is not just a trek; it's an immersive experience into the heart of the wild. Designed for those who seek both challenge and beauty, this trail promises spectacular panoramic vistas at every turn. It is the perfect escape to reconnect with nature in its most pristine and powerful form.",
  "Step into a living canvas with the {NAME}. This extraordinary adventure invites you to traverse rugged terrains that seamlessly melt into lush, vibrant grasslands. It's an unforgettable odyssey that rewards your endurance with some of the most dramatic and awe-inspiring views the region has to offer.",
  "Experience the raw, untamed beauty of the wilderness on the {NAME}. Every day on this trail brings a new landscape, from cascading mountain streams to towering snow-capped summits. This trek is an absolute must-do for adventurers looking to capture the ultimate essence of high-altitude exploration."
];

const highlightTemplates = [
  { title: "Breathtaking Vistas", desc: "Witness sweeping, panoramic views of the surrounding Himalayan giants. The sheer scale of these snow-capped peaks will leave you in absolute awe." },
  { title: "Untouched Trails", desc: "Trek through pristine, less-crowded paths that offer a deep sense of serenity and an intimate connection with nature." },
  { title: "Rich Biodiversity", desc: "Walk amidst ancient forests of oak and rhododendron, and keep an eye out for rare high-altitude wildlife and vibrant alpine flowers." },
  { title: "Thrilling Terrain", desc: "Experience the adrenaline rush of navigating diverse landscapes, from gradual ascents in lush valleys to challenging rocky ridges." },
  { title: "Serene Campsites", desc: "Spend your nights under a blanket of stars at some of the most picturesque campsites, nestled perfectly beside glacial streams and vast meadows." }
];

function toCamelCase(str) {
  return str.split('-').map((word, index) => {
    if (index === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

let generatedCount = 0;
const generatedSlugs = [];

for (let i = 0; i < parts.length; i++) {
  const part = parts[i];
  const lines = part.split('\n').map(l => l.trim());
  const rawName = lines[0].trim();
  
  const normName = rawName.toLowerCase().replace(/[^a-z0-9]/g, '');
  let slug = nameToSlug[normName];
  if (!slug) slug = nameToSlug[normName.replace('trek', '')];
  if (!slug && normName.includes('choptachandrashila')) slug = 'chopta-chandrashila';
  if (!slug && normName.includes('adikailash')) slug = 'adi-kailash';
  if (!slug && normName.includes('yogameditation')) slug = 'yoga-meditation-retreat';
  if (!slug && normName.includes('auden')) slug = 'audens-col';
  
  // Skip already detailed treks
  if (['valley-of-flowers', 'rupin-pass', 'kedarkantha', 'surya-top'].includes(slug)) {
    continue;
  }
  
  if (!slug) {
    console.log('Could not find slug for:', rawName);
    continue;
  }

  const extract = (key) => {
    const idx = lines.findIndex(l => l.startsWith(key));
    return (idx !== -1 && idx + 1 < lines.length) ? lines[idx + 1] : '';
  };

  const days = extract('Days:') || 'N/A';
  const altitude = extract('Altitude:') || 'N/A';
  const distance = extract('Distance:') || 'N/A';
  const grade = extract('Grade:') || 'Moderate';
  const baseCamp = extract('Base Camp:') || 'TBD';
  const season = extract('Season:') || 'Check details';
  const months = extract('Months:') || 'Check details';
  const railHead = extract('Rail Head:') || 'TBD';
  const airport = extract('Airport:') || 'TBD';
  const trailType = extract('Trail Type:') || 'Standard Trail';
  
  const overviewDesc = overviews[i % overviews.length].replace(/{NAME}/g, rawName);
  const selectedHighlights = [
    highlightTemplates[i % highlightTemplates.length],
    highlightTemplates[(i + 1) % highlightTemplates.length],
    highlightTemplates[(i + 2) % highlightTemplates.length]
  ];

  const objName = toCamelCase(slug) + 'Details';
  
  const tsContent = `import { DetailedTrek } from "@/types/detailed-trek";

export const ${objName}: DetailedTrek = {
  slug: "${slug}",
  name: "${rawName}",
  location: "${baseCamp}",
  duration: "${days} Days",
  maxAltitude: "${altitude}",
  distance: "${distance}",
  grade: "${grade}",
  price: 15000, // Default placeholder
  baseCamp: "${baseCamp}",
  season: "${season}",
  months: "${months}",
  railHead: "${railHead}",
  airport: "${airport}",
  trailType: "${trailType}",
  image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
  overview: {
    description: [
      "${overviewDesc}",
      "Equipped with expert guides and well-planned itineraries, we ensure that your journey is as safe as it is spectacular. Embrace the challenge and let the mountains transform you."
    ],
    highlights: [
      ${selectedHighlights.map(h => `{ title: "${h.title}", description: "${h.desc}" }`).join(',\n      ')}
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Arrival at Base Camp",
      details: [
        "Arrive at the designated meeting point.",
        "Briefing by the expedition leader.",
        "Overnight stay to acclimatize to the mountain air."
      ]
    },
    {
      day: 2,
      title: "The Journey Begins",
      details: [
        "Early morning start towards the first high-altitude campsite.",
        "Trek through lush trails and scenic viewpoints.",
        "Pitch tents and enjoy a warm, nutritious meal."
      ]
    },
    {
      day: 3,
      title: "Summit or High Pass Push",
      details: [
        "The most challenging and rewarding day of the trek.",
        "Reach the maximum altitude and enjoy 360-degree panoramic views.",
        "Safe descent back to a lower campsite."
      ]
    },
    {
      day: 4,
      title: "Descent and Departure",
      details: [
        "Trek back to the base camp.",
        "Collect your completion certificate and bid farewell to the mountains.",
        "Departure to onward destinations."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 12 years. Prior trekking experience recommended for difficult grades.",
    fitnessCriteria: [
      "Stamina to jog 5 km in 30 mins or cycle 15 km in 45 mins.",
      "Ability to carry a 10-12 kg backpack comfortably."
    ],
    healthAwareness: [
      "Normal blood pressure and resting heart rate.",
      "No severe asthma, heart conditions, or epilepsy."
    ]
  },
  howToReach: {
    meetingPlace: "Designated pickup point at ${railHead} or ${airport}",
    dropOff: "Same as meeting place",
    options: [
      "Take an overnight bus from major nearby cities.",
      "Take a train to ${railHead}.",
      "Fly into ${airport} a day in advance."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in guesthouses and tents.",
      "Nutritious vegetarian meals (with eggs).",
      "Expert trek leader, guides, and cook.",
      "All necessary camping and safety equipment including medical kits.",
      "Forest permits and entry fees."
    ],
    exclusions: [
      "Transport to base camp (unless booked separately).",
      "Offloading of personal backpacks.",
      "Personal trekking gear and insurance."
    ]
  },
  essentials: {
    basicGear: [
      "50-60L backpack with rain cover",
      "Sturdy trekking shoes and a walking stick",
      "Hydration pack or water bottles",
      "Warm layers, waterproof jacket, and gloves",
      "Personal medical kit"
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 25 days", refundOptions: ["5% deduction", "100% voucher"] },
      { timeFrame: "Between 24 and 15 days", refundOptions: ["30% deduction", "85% voucher"] },
      { timeFrame: "Less than 9 days", refundOptions: ["No cash refund", "10% voucher"] }
    ],
    emergencyCases: "In case of medical emergencies, a 90% refund and 10% voucher is provided with valid documents.",
    notes: [
      "Rescheduling incurs a 30% fee."
    ]
  },
  faqs: [
    {
      question: "How difficult is the ${rawName}?",
      answer: "The trek is graded as ${grade}. Ensure you meet the fitness criteria before booking."
    },
    {
      question: "What is the maximum altitude?",
      answer: "You will reach a maximum altitude of ${altitude}."
    }
  ]
};
`;

  fs.writeFileSync(`src/data/${slug}-details.ts`, tsContent);
  generatedCount++;
  generatedSlugs.push(slug);
}

console.log('Generated', generatedCount, 'files.');
fs.writeFileSync('generated_slugs.json', JSON.stringify(generatedSlugs));
