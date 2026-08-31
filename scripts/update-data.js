const fs = require('fs');
const path = require('path');

const base = path.join(process.cwd(), 'public/images');
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function getImagesInDir(sub) {
  const full = path.join(base, sub);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(f => imageExtensions.has(path.extname(f).toLowerCase()))
    .map(f => '/images/' + sub.split(path.sep).join('/') + '/' + f);
}

const galleries = {
  'auli-gorson-bugyal': [
    ...getImagesInDir('Uttrakhand Trek_s/Auli'),
    ...getImagesInDir('Auli-more')
  ],
  'badrinath-yatra': [
    ...getImagesInDir('badrinath-more')
  ],
  'bijli-mahadev': [
    ...getImagesInDir('bijli mahadev-more')
  ],
  'kasol-kheerganga': [
    ...getImagesInDir('kasol kheerganga-more')
  ],
  'miyar-valley': [
    ...getImagesInDir('miyar valley-more')
  ],
  'sinthan-top': [
    ...getImagesInDir('sinthon top-more')
  ],
  'spiti-valley': [
    ...getImagesInDir('spiti valley-more')
  ],
  'bali-pass': [
    '/images/uttarakhand/bali-pass.jpg',
    ...getImagesInDir('bali pass-more')
  ],
  'beas-kund': [
    '/images/himachal/beas-kund.jpg',
    ...getImagesInDir('beas-kund')
  ],
  'bhrigu-lake': [
    '/images/himachal/bhrigu-lake.jpg',
    ...getImagesInDir('bhrigu lake-more')
  ],
  'bodpathri-trek': [
    '/images/kashmir/bodpathri-trek.jpg',
    ...getImagesInDir('bodpathri')
  ],
  'brammah-valley': [
    '/images/kashmir/brammah-valley.jpg',
    ...getImagesInDir('brammah valley-more')
  ],
  'buran-ghati': [
    '/images/himachal/buran-ghati.jpg',
    ...getImagesInDir('buran ghati-more')
  ],
  'chadar-trek': [
    '/images/ladakh/chadar-trek.jpg',
    ...getImagesInDir('chadar trek-more')
  ],
  'chandrakhani-pass': [
    '/images/himachal/chandrakhani-pass.jpg',
    ...getImagesInDir('chandrakhani pass-more')
  ],
  'chopta-chandrashila-deoriatal': [
    '/images/uttarakhand/chopta-chandrashila.jpg',
    ...getImagesInDir('chopta chandrashila')
  ],
  'chopta-chandrashila-3-day': [
    '/images/uttarakhand/chopta-chandrashila.jpg',
    ...getImagesInDir('chopta chandrashila')
  ],
  'deo-tibba': [
    '/images/himachal/deo-tibba-peak.jpg',
    ...getImagesInDir('deo tibba-more')
  ],
  'friendship-peak': [
    '/images/himachal/friendship-peak.jpg',
    ...getImagesInDir('friendship peak-more')
  ],
  'guraz-valley': [
    '/images/kashmir/guraz-valley.jpg',
    ...getImagesInDir('gurez valley-more')
  ],
  'kareri-lake': [
    '/images/himachal/kareri-lake.jpg',
    ...getImagesInDir('kareri lake-more')
  ],
  'kedarkantha': [
    '/images/uttarakhand/kedarkantha-trek.jpg',
    ...getImagesInDir('kedarkantha-more')
  ],
  'kedarnath-yatra': [
    '/images/uttarakhand/kedarnath.jpg',
    ...getImagesInDir('kedarnath-more')
  ],
  'ladakh-bike-tour': [
    '/images/ladakh/ladakh-bike-tour.jpg',
    ...getImagesInDir('ladakh bike tour-more')
  ],
  'marchoi-trek': [
    '/images/kashmir/marchoi-trek.jpg',
    ...getImagesInDir('marchoi-more')
  ],
  'nafran-valley': [
    '/images/kashmir/nafran-valley.jpg',
    ...getImagesInDir('nafran valley-more')
  ],
  'roopkund': [
    '/images/uttarakhand/roopkund.jpg',
    ...getImagesInDir('roopkund-more')
  ],
  'rupin-pass': [
    '/images/himachal/rupin-pass.jpg',
    ...getImagesInDir('rupin pass-more')
  ],
  'surya-top': [
    '/images/uttarakhand/surya-top.jpg',
    ...getImagesInDir('Uttrakhand Trek_s/Surya Top'),
    ...getImagesInDir('surya top-more')
  ],
  'tarsar-marsar': [
    '/images/kashmir/tarsar-marsar.jpg',
    ...getImagesInDir('tarsar marsar-more')
  ],
  'tulian-lake': [
    '/images/kashmir/tulian-lake.jpg',
    ...getImagesInDir('tulian lake-more')
  ],
  'valley-of-flowers': [
    '/images/uttarakhand/valley-of-flowers.jpg',
    ...getImagesInDir('Uttrakhand Trek_s/Valley of Flower_s_'),
    ...getImagesInDir('valley of flowers-more')
  ],
  'warwan-valley': [
    '/images/kashmir/warwan-valley.jpg',
    ...getImagesInDir('warwan valley-more')
  ],
  'ali-bedni-bugyal': [
    '/images/uttarakhand/ali-bedni.png',
    ...getImagesInDir('Uttrakhand Trek_s/Ali Bedni Bugyal')
  ],
  'brahmatal': [
    '/images/uttarakhand/brahmatal.jpg',
    ...getImagesInDir('Uttrakhand Trek_s/Brahamtal')
  ],
  'gaumukh-tapovan': [
    '/images/uttarakhand/gaumukh-tapovan.png',
    ...getImagesInDir('Uttrakhand Trek_s/Gaumukh Tapovan')
  ],
  'kedar-tal': [
    '/images/uttarakhand/kedar-tal.png',
    ...getImagesInDir('Uttrakhand Trek_s/Kedartal')
  ],
  'nag-tibba': [
    '/images/uttarakhand/nag-tibba.jpg',
    ...getImagesInDir('Uttrakhand Trek_s/Nagtibba')
  ],
  'phulara-ridge': [
    '/images/uttarakhand/phulara-ridge.jpg',
    ...getImagesInDir('Uttrakhand Trek_s/Phulara Ridge')
  ],
  'pindari-glacier': [
    '/images/uttarakhand/pindari-glacier.jpg',
    ...getImagesInDir('Uttrakhand Trek_s/Pindri Glacier')
  ]
};

// 1. Update individual detail files
const dataDir = path.join(process.cwd(), 'src/data');
const detailFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('-details.ts'));

for (const [slug, imgList] of Object.entries(galleries)) {
  const matchingFile = detailFiles.find(f => f === `${slug}-details.ts` || f.replace('-details.ts', '') === slug);
  if (matchingFile) {
    const fullPath = path.join(dataDir, matchingFile);
    let content = fs.readFileSync(fullPath, 'utf8');
    const galleryStr = 'gallery: ' + JSON.stringify(imgList, null, 4).replace(/\n/g, '\n  ') + ',';
    if (content.includes('gallery:')) {
      content = content.replace(/gallery:\s*\[[\s\S]*?\],/, galleryStr);
    } else if (content.includes('image:')) {
      content = content.replace(/(image:\s*['"`].*?['"`],)/, '$1\n  ' + galleryStr);
    }
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Updated detail file gallery for:', matchingFile);
  }
}

// 2. Load treks from treks.ts and update them
const { treks } = require('../src/data/treks.ts');

const newTreks = [
  {
    id: 'ut-auli',
    slug: 'auli-gorson-bugyal',
    name: 'Auli Gorson Bugyal Trek',
    location: 'Joshimath, Chamoli',
    country: 'India',
    region: 'Uttarakhand',
    coordinates: "30°31' N 79°34' E",
    altitude: 11500,
    duration: { days: 4, nights: 3 },
    difficulty: 'Easy to Moderate',
    season: ['Winter', 'Spring', 'Summer', 'Autumn'],
    price: 7500,
    heroImage: '/images/Uttrakhand Trek_s/Auli/Auli 1.webp',
    gallery: galleries['auli-gorson-bugyal'],
    categories: ['Uttarakhand', 'Winter', 'Spring', 'Summer', 'Autumn', 'January', 'February', 'March', 'April', 'May', 'October', 'November', 'December']
  },
  {
    id: 'ut-badrinath',
    slug: 'badrinath-yatra',
    name: 'Badrinath & Mana Village Spiritual Yatra',
    location: 'Badrinath, Chamoli',
    country: 'India',
    region: 'Uttarakhand',
    coordinates: "30°44' N 79°29' E",
    altitude: 10279,
    duration: { days: 4, nights: 3 },
    difficulty: 'Easy',
    season: ['Summer', 'Autumn'],
    price: 11500,
    heroImage: '/images/badrinath-more/WhatsApp Image 2026-08-30 at 10.45.06 AM.jpeg',
    gallery: galleries['badrinath-yatra'],
    categories: ['Uttarakhand', 'Spiritual', 'Summer', 'Autumn', 'May', 'June', 'September', 'October', 'November']
  },
  {
    id: 'hp-bijli',
    slug: 'bijli-mahadev',
    name: 'Bijli Mahadev Trek',
    location: 'Kullu Valley',
    country: 'India',
    region: 'Himachal Pradesh',
    coordinates: "31°58' N 77°11' E",
    altitude: 8000,
    duration: { days: 2, nights: 1 },
    difficulty: 'Easy',
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    price: 3999,
    heroImage: '/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM (1).jpeg',
    gallery: galleries['bijli-mahadev'],
    categories: ['Himachal Pradesh', 'Weekend', 'Summer', 'Autumn', 'March', 'April', 'May', 'June', 'September', 'October', 'November', 'December']
  },
  {
    id: 'hp-kheerganga',
    slug: 'kasol-kheerganga',
    name: 'Kasol Kheerganga Trek',
    location: 'Parvati Valley, Kullu',
    country: 'India',
    region: 'Himachal Pradesh',
    coordinates: "31°59' N 77°30' E",
    altitude: 9711,
    duration: { days: 3, nights: 2 },
    difficulty: 'Easy to Moderate',
    season: ['Spring', 'Summer', 'Autumn'],
    price: 4500,
    heroImage: '/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.42 AM.jpeg',
    gallery: galleries['kasol-kheerganga'],
    categories: ['Himachal Pradesh', 'Weekend', 'Summer', 'Autumn', 'March', 'April', 'May', 'June', 'September', 'October', 'November', 'December']
  },
  {
    id: 'hp-miyar',
    slug: 'miyar-valley',
    name: 'Miyar Valley Trek',
    location: 'Lahaul, Udaipur',
    country: 'India',
    region: 'Himachal Pradesh',
    coordinates: "32°44' N 76°53' E",
    altitude: 14760,
    duration: { days: 7, nights: 6 },
    difficulty: 'Moderate',
    season: ['Summer', 'Autumn'],
    price: 18500,
    heroImage: '/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.08 AM.jpeg',
    gallery: galleries['miyar-valley'],
    categories: ['Himachal Pradesh', 'Summer', 'Autumn', 'June', 'July', 'August', 'September']
  },
  {
    id: 'ks-sinthan',
    slug: 'sinthan-top',
    name: 'Sinthan Top & Alpine Lakes Trek',
    location: 'Kishtwar - Breng Valley',
    country: 'India',
    region: 'Kashmir',
    coordinates: "33°34' N 75°30' E",
    altitude: 12450,
    duration: { days: 4, nights: 3 },
    difficulty: 'Moderate',
    season: ['Summer', 'Autumn'],
    price: 12500,
    heroImage: '/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.53 AM (1).jpeg',
    gallery: galleries['sinthan-top'],
    categories: ['Kashmir', 'Summer', 'Autumn', 'May', 'June', 'July', 'August', 'September', 'October']
  },
  {
    id: 'hp-spiti',
    slug: 'spiti-valley',
    name: 'Spiti Valley Circuit & Chandratal Expedition',
    location: 'Kaza, Spiti Valley',
    country: 'India',
    region: 'Himachal Pradesh',
    coordinates: "32°13' N 78°04' E",
    altitude: 15000,
    duration: { days: 7, nights: 6 },
    difficulty: 'Moderate',
    season: ['Summer', 'Autumn'],
    price: 22500,
    heroImage: '/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.36 AM (1).jpeg',
    gallery: galleries['spiti-valley'],
    categories: ['Himachal Pradesh', 'Summer', 'Autumn', 'June', 'July', 'August', 'September', 'October']
  }
];

// Update existing treks
const treksMap = new Map();
for (const t of treks) {
  if (galleries[t.slug]) {
    t.gallery = galleries[t.slug];
  }
  treksMap.set(t.slug, t);
}

// Add new treks
for (const nt of newTreks) {
  treksMap.set(nt.slug, nt);
}

const finalTreks = Array.from(treksMap.values());
console.log('Final total treks:', finalTreks.length);

// Generate treks.ts content
const treksTsContent = `export type Trek = {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: string;
  region: 'Uttarakhand' | 'Kashmir' | 'Himachal Pradesh' | 'Ladakh' | string;
  coordinates: string; // e.g., "32°14' N 77°10' E"
  altitude: number;
  duration: { days: number; nights: number };
  difficulty: 'Easy' | 'Easy to Moderate' | 'Moderate' | 'Moderate to Difficult' | 'Difficult' | 'Challenging' | 'Extreme';
  season: string[];
  price: number;
  heroImage: string;
  gallery: string[];
  categories: string[];
};

export const treks: Trek[] = ${JSON.stringify(finalTreks, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/treks.ts'), treksTsContent, 'utf8');
console.log('Successfully updated src/data/treks.ts!');
