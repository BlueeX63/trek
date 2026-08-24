export type Trek = {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: string;
  region: 'Uttarakhand' | 'Kashmir' | 'Himachal Pradesh' | string;
  coordinates: string; // e.g., "32°14' N 77°10' E"
  altitude: number;
  duration: { days: number; nights: number };
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
  season: string[];
  price: number;
  heroImage: string;
  gallery: string[];
};

export const treks: Trek[] = [
  // Uttarakhand
  {
    id: 'ut-1',
    slug: 'kedarkantha',
    name: 'Kedarkantha',
    location: 'Sankri, Govind Pashu Vihar',
    country: 'India',
    region: 'Uttarakhand',
    coordinates: "31°01' N 78°09' E",
    altitude: 12500,
    duration: { days: 6, nights: 5 },
    difficulty: 'Easy',
    season: ['Winter', 'Spring'],
    price: 8500,
    heroImage: 'https://images.unsplash.com/photo-1544211181-7dc8ccaf6cf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'ut-2',
    slug: 'har-ki-dun',
    name: 'Har Ki Dun',
    location: 'Sankri, Govind Pashu Vihar',
    country: 'India',
    region: 'Uttarakhand',
    coordinates: "31°06' N 78°15' E",
    altitude: 11700,
    duration: { days: 7, nights: 6 },
    difficulty: 'Moderate',
    season: ['Spring', 'Autumn'],
    price: 11500,
    heroImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'ut-3',
    slug: 'kuari-pass',
    name: 'Kuari Pass',
    location: 'Joshimath',
    country: 'India',
    region: 'Uttarakhand',
    coordinates: "30°31' N 79°37' E",
    altitude: 12516,
    duration: { days: 6, nights: 5 },
    difficulty: 'Moderate',
    season: ['Winter', 'Spring', 'Autumn'],
    price: 9000,
    heroImage: 'https://images.unsplash.com/photo-1605649487212-4dcb81cb5cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  
  // Kashmir
  {
    id: 'ka-1',
    slug: 'kashmir-great-lakes',
    name: 'Kashmir Great Lakes',
    location: 'Sonamarg, Ganderbal',
    country: 'India',
    region: 'Kashmir',
    coordinates: "34°17' N 75°11' E",
    altitude: 13800,
    duration: { days: 8, nights: 7 },
    difficulty: 'Challenging',
    season: ['Summer'],
    price: 18500,
    heroImage: 'https://images.unsplash.com/photo-1626244686008-60144d156557?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602058372481-8077c5c06497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1589417031124-71be0e588806?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'ka-2',
    slug: 'tarsar-marsar',
    name: 'Tarsar Marsar',
    location: 'Aru Valley, Pahalgam',
    country: 'India',
    region: 'Kashmir',
    coordinates: "34°09' N 75°08' E",
    altitude: 13201,
    duration: { days: 7, nights: 6 },
    difficulty: 'Moderate',
    season: ['Summer'],
    price: 15500,
    heroImage: 'https://images.unsplash.com/photo-1616869911961-393bafdfadce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },

  // Himachal Pradesh
  {
    id: 'hp-1',
    slug: 'hampta-pass',
    name: 'Hampta Pass',
    location: 'Manali, Kullu',
    country: 'India',
    region: 'Himachal Pradesh',
    coordinates: "32°16' N 77°23' E",
    altitude: 14100,
    duration: { days: 6, nights: 5 },
    difficulty: 'Moderate',
    season: ['Summer', 'Monsoon'],
    price: 9500,
    heroImage: 'https://images.unsplash.com/photo-1563212879-1bf1712a23ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626027582299-fb9363bcde16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'hp-2',
    slug: 'pin-bhaba-pass',
    name: 'Pin Bhaba Pass',
    location: 'Kafnu, Kinnaur',
    country: 'India',
    region: 'Himachal Pradesh',
    coordinates: "31°45' N 77°58' E",
    altitude: 16105,
    duration: { days: 8, nights: 7 },
    difficulty: 'Challenging',
    season: ['Summer', 'Monsoon'],
    price: 16500,
    heroImage: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ]
  }
];
