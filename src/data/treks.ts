export type Trek = {
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

export const treks: Trek[] = [
  {
    "id": "ut-1",
    "slug": "kedarkantha",
    "name": "Kedarkantha",
    "location": "Sankri, Govind Pashu Vihar",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "31°01' N 78°09' E",
    "altitude": 12500,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Winter",
      "Spring",
      "Autumn"
    ],
    "price": 8500,
    "heroImage": "/images/uttarakhand/kedarkantha-trek.jpg",
    "gallery": [
      "/images/uttarakhand/kedarkantha-trek.jpg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.24 AM (1).jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.24 AM.jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.25 AM (1).jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.25 AM (2).jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.25 AM.jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.26 AM (1).jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.26 AM.jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.27 AM.jpeg",
      "/images/kedarkantha-more/WhatsApp Image 2026-08-30 at 10.51.28 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Winter",
      "Autumn",
      "January",
      "February",
      "April",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-2",
    "slug": "har-ki-dun",
    "name": "Har Ki Dun",
    "location": "Sankri, Govind Pashu Vihar",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "31°06' N 78°15' E",
    "altitude": 11700,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 11500,
    "heroImage": "/images/uttarakhand/har-ki-dun.jpg",
    "gallery": [
      "/images/uttarakhand/har-ki-dun.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-3",
    "slug": "kuari-pass",
    "name": "Kuari Pass",
    "location": "Joshimath",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°31' N 79°37' E",
    "altitude": 12516,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Winter",
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/kuari-pass.jpg",
    "gallery": [
      "/images/Uttrakhand Trek_s/Auli/Auli 1.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 2.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 3.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 4.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 5.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 6.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 7.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 8.webp"
    ],
    "categories": [
      "Uttarakhand",
      "Winter",
      "Summer",
      "Autumn",
      "January",
      "February",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-4",
    "slug": "roopkund",
    "name": "Roopkund Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 16499,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 12000,
    "heroImage": "/images/uttarakhand/roopkund.jpg",
    "gallery": [
      "/images/uttarakhand/roopkund.jpg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.24 AM (1).jpeg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.24 AM (2).jpeg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.24 AM.jpeg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.25 AM (1).jpeg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.25 AM (2).jpeg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.25 AM.jpeg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.26 AM (1).jpeg",
      "/images/roopkund-more/WhatsApp Image 2026-08-30 at 10.52.26 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-5",
    "slug": "panwali-kantha",
    "name": "Panwali Kantha Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 11500,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/panwali-kantha.jpg",
    "gallery": [
      "/images/uttarakhand/panwali-kantha.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-6",
    "slug": "gulabi-kantha",
    "name": "Gulabi Kantha Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12000,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 7500,
    "heroImage": "/images/uttarakhand/gulabi-kantha.jpg",
    "gallery": [
      "/images/uttarakhand/gulabi-kantha.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "April",
      "May",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-7",
    "slug": "valley-of-flowers",
    "name": "Valley of Flowers Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 14400,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Monsoon",
      "Autumn"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/valley-of-flowers.jpg",
    "gallery": [
      "/images/uttarakhand/valley-of-flowers.jpg",
      "/images/Uttrakhand Trek_s/Valley of Flower_s_/WhatsApp Image 2024-09-19 at 13.29.51_2fac3e87.jpg",
      "/images/Uttrakhand Trek_s/Valley of Flower_s_/WhatsApp Image 2024-09-19 at 13.29.52_4db418ab.jpg",
      "/images/Uttrakhand Trek_s/Valley of Flower_s_/WhatsApp Image 2024-09-19 at 13.29.52_7423eeda.jpg",
      "/images/Uttrakhand Trek_s/Valley of Flower_s_/WhatsApp Image 2024-09-19 at 13.29.52_bcf7b28a.jpg",
      "/images/Uttrakhand Trek_s/Valley of Flower_s_/WhatsApp Image 2024-09-19 at 13.29.53_176206da.jpg",
      "/images/Uttrakhand Trek_s/Valley of Flower_s_/WhatsApp Image 2024-09-19 at 13.29.53_4312171d.jpg",
      "/images/Uttrakhand Trek_s/Valley of Flower_s_/WhatsApp Image 2024-09-19 at 13.29.53_67c936f4.jpg",
      "/images/valley of flowers-more/WhatsApp Image 2026-08-30 at 10.53.01 AM (1).jpeg",
      "/images/valley of flowers-more/WhatsApp Image 2026-08-30 at 10.53.01 AM.jpeg",
      "/images/valley of flowers-more/WhatsApp Image 2026-08-30 at 10.53.02 AM (1).jpeg",
      "/images/valley of flowers-more/WhatsApp Image 2026-08-30 at 10.53.02 AM (2).jpeg",
      "/images/valley of flowers-more/WhatsApp Image 2026-08-30 at 10.53.02 AM.jpeg",
      "/images/valley of flowers-more/WhatsApp Image 2026-08-30 at 10.53.03 AM (1).jpeg",
      "/images/valley of flowers-more/WhatsApp Image 2026-08-30 at 10.53.03 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Monsoon",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ut-8",
    "slug": "brahmatal",
    "name": "Brahmatal Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12250,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/brahmatal.jpg",
    "gallery": [
      "/images/uttarakhand/brahmatal.jpg",
      "/images/Uttrakhand Trek_s/Brahamtal/Brahamtaal 1.jpg",
      "/images/Uttrakhand Trek_s/Brahamtal/Brahamtal 3.jpg",
      "/images/Uttrakhand Trek_s/Brahamtal/Brahamtal 4.jpg",
      "/images/Uttrakhand Trek_s/Brahamtal/Brahamtal 7.jpg",
      "/images/Uttrakhand Trek_s/Brahamtal/Brahamtal 9.jpg",
      "/images/Uttrakhand Trek_s/Brahamtal/brahmatal 2.jpg",
      "/images/Uttrakhand Trek_s/Brahamtal/Brahmatal 4.webp"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "April",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-9",
    "slug": "pangarchulla-peak",
    "name": "Pangarchulla Peak Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 15069,
    "duration": {
      "days": 2,
      "nights": 1
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 6500,
    "heroImage": "/images/uttarakhand/pangarchulla-peak.png",
    "gallery": [
      "/images/uttarakhand/pangarchulla-peak.png"
    ],
    "categories": [
      "Uttarakhand",
      "Weekend Getaways",
      "Summer",
      "Winter",
      "Autumn",
      "Spring"
    ]
  },
  {
    "id": "ut-10",
    "slug": "gaumukh-tapovan",
    "name": "Gaumukh Tapovan Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 14202,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 12000,
    "heroImage": "/images/uttarakhand/gaumukh-tapovan.png",
    "gallery": [
      "/images/uttarakhand/gaumukh-tapovan.png",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/fe35ad67-f59e-45dc-b5c7-314094d5c7d1_Gaumukh-Tapovan-Nitish-Waila-1.avif",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 1.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 2.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 4.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 8.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh7.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-11",
    "slug": "ranthan-kharak",
    "name": "Ranthan Kharak Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 13000,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 10500,
    "heroImage": "/images/uttarakhand/ranthan-kharak.jpg",
    "gallery": [
      "/images/uttarakhand/ranthan-kharak.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "April",
      "May",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-12",
    "slug": "chopta-chandrashila-deoriatal",
    "name": "Chopta Chandrashila Tungnath with Deoriatal",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12083,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 7500,
    "heroImage": "/images/uttarakhand/chopta-chandrashila.jpg",
    "gallery": [
      "/images/uttarakhand/chopta-chandrashila.jpg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.40 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.40 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.41 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.41 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.42 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.43 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.43 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.44 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.44 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.45 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.45 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.46 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.46 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-13",
    "slug": "chopta-chandrashila-3-day",
    "name": "Chopta Chandrashila 3 Day Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12083,
    "duration": {
      "days": 3,
      "nights": 2
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 4500,
    "heroImage": "/images/uttarakhand/chopta-chandrashila.jpg",
    "gallery": [
      "/images/uttarakhand/chopta-chandrashila.jpg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.40 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.40 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.41 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.41 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.42 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.43 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.43 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.44 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.44 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.45 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.45 AM.jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.46 AM (1).jpeg",
      "/images/chopta chandrashila/WhatsApp Image 2026-08-30 at 10.48.46 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-14",
    "slug": "gaumukh-gangotri",
    "name": "Gaumukh Gangotri Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 13200,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/gaumukh-gangotri.jpg",
    "gallery": [
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 1.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 2.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 4.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh7.jpg",
      "/images/Uttrakhand Trek_s/Gaumukh Tapovan/Gaumukh 8.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-15",
    "slug": "bali-pass",
    "name": "Bali Pass Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 16207,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Difficult",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 12000,
    "heroImage": "/images/uttarakhand/bali-pass.jpg",
    "gallery": [
      "/images/uttarakhand/bali-pass.jpg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.16 AM (1).jpeg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.16 AM (2).jpeg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.16 AM.jpeg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.17 AM (1).jpeg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.17 AM.jpeg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.18 AM (1).jpeg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.18 AM (2).jpeg",
      "/images/bali pass-more/WhatsApp Image 2026-08-30 at 11.18.18 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-16",
    "slug": "dayara-bugyal",
    "name": "Dayara Bugyal Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 11830,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 6000,
    "heroImage": "/images/uttarakhand/dayara-bugyal.jpg",
    "gallery": [
      "/images/uttarakhand/dayara-bugyal.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-17",
    "slug": "ali-bedni-bugyal",
    "name": "Ali Bedni Bugyal Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 11550,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/ali-bedni.png",
    "gallery": [
      "/images/uttarakhand/ali-bedni.png",
      "/images/Uttrakhand Trek_s/Ali Bedni Bugyal/Ali Bedni 2.jpg",
      "/images/Uttrakhand Trek_s/Ali Bedni Bugyal/Ali Bedni Bugyal.avif",
      "/images/Uttrakhand Trek_s/Ali Bedni Bugyal/Bedni 3.jpg",
      "/images/Uttrakhand Trek_s/Ali Bedni Bugyal/Bedni 4.avif",
      "/images/Uttrakhand Trek_s/Ali Bedni Bugyal/Bedni 5.avif",
      "/images/Uttrakhand Trek_s/Ali Bedni Bugyal/Bedni 8.jpg",
      "/images/Uttrakhand Trek_s/Ali Bedni Bugyal/Bedni 9.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-18",
    "slug": "aancha-top",
    "name": "Aancha Top Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12000,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 7500,
    "heroImage": "/images/uttarakhand/aancha-top.webp",
    "gallery": [
      "/images/uttarakhand/aancha-top.webp"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Winter",
      "January",
      "February",
      "March"
    ]
  },
  {
    "id": "ut-19",
    "slug": "nag-tibba",
    "name": "Nag Tibba Weekend Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 9915,
    "duration": {
      "days": 2,
      "nights": 1
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 3000,
    "heroImage": "/images/uttarakhand/nag-tibba.jpg",
    "gallery": [
      "/images/uttarakhand/nag-tibba.jpg",
      "/images/Uttrakhand Trek_s/Nagtibba/Nagtibba 1.jpg",
      "/images/Uttrakhand Trek_s/Nagtibba/Nagtibba 3.jpg",
      "/images/Uttrakhand Trek_s/Nagtibba/Nagtibba 4.jpg",
      "/images/Uttrakhand Trek_s/Nagtibba/Nagtibba 5.jpg",
      "/images/Uttrakhand Trek_s/Nagtibba/Nagtibba 6.jpg",
      "/images/Uttrakhand Trek_s/Nagtibba/Nagtibba 8.webp",
      "/images/Uttrakhand Trek_s/Nagtibba/Nagtibba 9.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "March",
      "April",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-20",
    "slug": "deoban",
    "name": "Deoban Weekend Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 9279,
    "duration": {
      "days": 2,
      "nights": 1
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 3000,
    "heroImage": "/images/uttarakhand/deoban.jpg",
    "gallery": [
      "/images/uttarakhand/deoban.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "March",
      "April",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-21",
    "slug": "chirbatiya",
    "name": "Chirbatiya Weekend Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 8500,
    "duration": {
      "days": 2,
      "nights": 1
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 3000,
    "heroImage": "/images/uttarakhand/chirbatiya.jpg",
    "gallery": [
      "/images/uttarakhand/chirbatiya.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "March",
      "April",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-22",
    "slug": "binsar",
    "name": "Binsar Weekend Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 7900,
    "duration": {
      "days": 2,
      "nights": 1
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 3000,
    "heroImage": "/images/uttarakhand/binsar.jpg",
    "gallery": [
      "/images/uttarakhand/binsar.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-23",
    "slug": "bagji-bugyal",
    "name": "Bagji Bugyal Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 10500,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 7500,
    "heroImage": "/images/uttarakhand/bagji-bugyal.png",
    "gallery": [
      "/images/uttarakhand/bagji-bugyal.png"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "Winter",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "September"
    ]
  },
  {
    "id": "ut-24",
    "slug": "surya-top",
    "name": "Surya Top Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12800,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/surya-top.jpg",
    "gallery": [
      "/images/uttarakhand/surya-top.jpg",
      "/images/Uttrakhand Trek_s/Surya Top/Surya top 1.jpg",
      "/images/Uttrakhand Trek_s/Surya Top/Surya Top 3.jpg",
      "/images/Uttrakhand Trek_s/Surya Top/Surya top 4.jpg",
      "/images/Uttrakhand Trek_s/Surya Top/Surya top 5.jpg",
      "/images/Uttrakhand Trek_s/Surya Top/Surya top 6.webp",
      "/images/Uttrakhand Trek_s/Surya Top/Surya top 8.jpg",
      "/images/Uttrakhand Trek_s/Surya Top/Surya Top 9.jpg",
      "/images/Uttrakhand Trek_s/Surya Top/Suryatop 2.jpg",
      "/images/surya top-more/WhatsApp Image 2026-08-30 at 10.55.13 AM (1).jpeg",
      "/images/surya top-more/WhatsApp Image 2026-08-30 at 10.55.13 AM.jpeg",
      "/images/surya top-more/WhatsApp Image 2026-08-30 at 10.55.14 AM (1).jpeg",
      "/images/surya top-more/WhatsApp Image 2026-08-30 at 10.55.14 AM (2).jpeg",
      "/images/surya top-more/WhatsApp Image 2026-08-30 at 10.55.14 AM.jpeg",
      "/images/surya top-more/WhatsApp Image 2026-08-30 at 10.55.15 AM (1).jpeg",
      "/images/surya top-more/WhatsApp Image 2026-08-30 at 10.55.15 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-25",
    "slug": "phulara-ridge",
    "name": "Phulara Ridge Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12100,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/phulara-ridge.jpg",
    "gallery": [
      "/images/uttarakhand/phulara-ridge.jpg",
      "/images/Uttrakhand Trek_s/Phulara Ridge/Phulara 1.jpg",
      "/images/Uttrakhand Trek_s/Phulara Ridge/Phulara 2.avif",
      "/images/Uttrakhand Trek_s/Phulara Ridge/Phulara 3.webp",
      "/images/Uttrakhand Trek_s/Phulara Ridge/Phulara 5.jpg",
      "/images/Uttrakhand Trek_s/Phulara Ridge/Phulara 7.webp",
      "/images/Uttrakhand Trek_s/Phulara Ridge/Phulara 9.webp"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-26",
    "slug": "dudhatoli",
    "name": "Dudhatoli Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 10500,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 7500,
    "heroImage": "/images/uttarakhand/dudhatoli.webp",
    "gallery": [
      "/images/uttarakhand/dudhatoli.webp"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-27",
    "slug": "satopanth-lake",
    "name": "Satopanth Lake Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 15100,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 12000,
    "heroImage": "/images/uttarakhand/satopanth-lake.jpg",
    "gallery": [
      "/images/uttarakhand/satopanth-lake.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-28",
    "slug": "satopanth-peak",
    "name": "Satopanth Peak Expedition",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 23212,
    "duration": {
      "days": 15,
      "nights": 14
    },
    "difficulty": "Challenging",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 22500,
    "heroImage": "/images/uttarakhand/satopanth-peak.png",
    "gallery": [
      "/images/uttarakhand/satopanth-peak.png"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "June",
      "July",
      "August"
    ]
  },
  {
    "id": "ut-29",
    "slug": "kedar-tal",
    "name": "Kedar Tal Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 15485,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Difficult",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 10500,
    "heroImage": "/images/uttarakhand/kedar-tal.png",
    "gallery": [
      "/images/uttarakhand/kedar-tal.png",
      "/images/Uttrakhand Trek_s/Kedartal/Kedartal 1.jpg",
      "/images/Uttrakhand Trek_s/Kedartal/Kedartal 3.jpg",
      "/images/Uttrakhand Trek_s/Kedartal/Kedartal 6.jpg",
      "/images/Uttrakhand Trek_s/Kedartal/Kedartal 8.avif",
      "/images/Uttrakhand Trek_s/Kedartal/Kedartal- 4.jpeg",
      "/images/Uttrakhand Trek_s/Kedartal/kedartal-2.jpg",
      "/images/Uttrakhand Trek_s/Kedartal/Kedartal-Trek-5.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-30",
    "slug": "audens-col",
    "name": "Auden's Col Expedition",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 18010,
    "duration": {
      "days": 14,
      "nights": 13
    },
    "difficulty": "Challenging",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 21000,
    "heroImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "gallery": [],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-31",
    "slug": "panchkedar",
    "name": "Panchkedar Trek & Drive",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 11800,
    "duration": {
      "days": 12,
      "nights": 11
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 18000,
    "heroImage": "/images/uttarakhand/panchkedar.png",
    "gallery": [
      "/images/uttarakhand/panchkedar.png"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-32",
    "slug": "mukta-top",
    "name": "Mukta Top Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 11800,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/mukta-top.jpg",
    "gallery": [
      "/images/uttarakhand/mukta-top.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-33",
    "slug": "dodital-darwa-pass",
    "name": "Dodital Darwa Pass Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 13500,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 9000,
    "heroImage": "/images/uttarakhand/dodital.png",
    "gallery": [
      "/images/uttarakhand/dodital.png"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "April",
      "May",
      "June",
      "October",
      "November"
    ]
  },
  {
    "id": "ut-34",
    "slug": "black-peak",
    "name": "Black Peak Expedition",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 20955,
    "duration": {
      "days": 14,
      "nights": 13
    },
    "difficulty": "Challenging",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 21000,
    "heroImage": "/images/uttarakhand/black-peak.png",
    "gallery": [
      "/images/uttarakhand/black-peak.png"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-35",
    "slug": "bagini-glacier",
    "name": "Bagini Glacier & Changbang Base Camp",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 14816,
    "duration": {
      "days": 9,
      "nights": 8
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 13500,
    "heroImage": "/images/uttarakhand/bagini-glacier.jpg",
    "gallery": [
      "/images/uttarakhand/bagini-glacier.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-36",
    "slug": "adi-kailash-om-parvat",
    "name": "Adi Kailash & Om Parvat",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 15500,
    "duration": {
      "days": 10,
      "nights": 9
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 15000,
    "heroImage": "/images/uttarakhand/adi-kailash-om-parvat.png",
    "gallery": [
      "/images/uttarakhand/adi-kailash-om-parvat.png"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "October"
    ]
  },
  {
    "id": "ut-37",
    "slug": "yoga-retreat",
    "name": "Yoga and Meditation Retreat in The Himalayas",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 6000,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 7500,
    "heroImage": "/images/uttarakhand/yoga-retreat.png",
    "gallery": [
      "/images/uttarakhand/yoga-retreat.png"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "April",
      "May"
    ]
  },
  {
    "id": "ut-38",
    "slug": "rudragaira-peak",
    "name": "Rudragaira Peak Expedition",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 19091,
    "duration": {
      "days": 12,
      "nights": 11
    },
    "difficulty": "Challenging",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 18000,
    "heroImage": "/images/uttarakhand/rudragaira-peak.jpg",
    "gallery": [
      "/images/uttarakhand/rudragaira-peak.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ut-39",
    "slug": "pindari-glacier",
    "name": "Pindari Glacier Trek",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°00' N 79°00' E",
    "altitude": 12000,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 10500,
    "heroImage": "/images/uttarakhand/pindari-glacier.jpg",
    "gallery": [
      "/images/uttarakhand/pindari-glacier.jpg",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindar 5.jpg",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindar 6.jpg",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindar 7.jpg",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindari 1.webp",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindari 2.jpg",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindari 3.jpg",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindari 4.jpg",
      "/images/Uttrakhand Trek_s/Pindri Glacier/Pindari 8.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Summer",
      "May"
    ]
  },
  {
    "id": "ka-1",
    "slug": "kashmir-great-lakes",
    "name": "Kashmir Great Lakes",
    "location": "Sonamarg, Ganderbal",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "34°17' N 75°11' E",
    "altitude": 13800,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Monsoon"
    ],
    "price": 18500,
    "heroImage": "/images/kashmir/kashmir-great-lakes.jpg",
    "gallery": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "Monsoon",
      "July",
      "August"
    ]
  },
  {
    "id": "ka-2",
    "slug": "tarsar-marsar",
    "name": "Tarsar Marsar",
    "location": "Aru Valley, Pahalgam",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "34°09' N 75°08' E",
    "altitude": 13201,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Monsoon"
    ],
    "price": 15500,
    "heroImage": "/images/kashmir/tarsar-marsar.jpg",
    "gallery": [
      "/images/kashmir/tarsar-marsar.jpg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.00 AM (1).jpeg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.00 AM (2).jpeg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.00 AM.jpeg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.01 AM.jpeg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.02 AM.jpeg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.03 AM (1).jpeg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.03 AM (2).jpeg",
      "/images/tarsar marsar-more/WhatsApp Image 2026-08-30 at 11.07.03 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "Monsoon",
      "July",
      "August"
    ]
  },
  {
    "id": "ka-3",
    "slug": "doodhpathri-trek",
    "name": "Doodhpathri Trek",
    "location": "Budgam",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "33°51' N 74°33' E",
    "altitude": 8957,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Monsoon",
      "Autumn"
    ],
    "price": 9500,
    "heroImage": "/images/kashmir/doodhpathri-trek.jpg",
    "gallery": [],
    "categories": [
      "Kashmir",
      "Summer",
      "Monsoon",
      "Autumn",
      "August"
    ]
  },
  {
    "id": "ka-4",
    "slug": "nafran-valley",
    "name": "Nafran Valley Trek",
    "location": "Pahalgam",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "34°01' N 75°19' E",
    "altitude": 14000,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Monsoon"
    ],
    "price": 16500,
    "heroImage": "/images/kashmir/nafran-valley.jpg",
    "gallery": [
      "/images/kashmir/nafran-valley.jpg",
      "/images/nafran valley-more/WhatsApp Image 2026-08-30 at 11.04.20 AM (1).jpeg",
      "/images/nafran valley-more/WhatsApp Image 2026-08-30 at 11.04.20 AM.jpeg",
      "/images/nafran valley-more/WhatsApp Image 2026-08-30 at 11.04.21 AM (1).jpeg",
      "/images/nafran valley-more/WhatsApp Image 2026-08-30 at 11.04.21 AM.jpeg",
      "/images/nafran valley-more/WhatsApp Image 2026-08-30 at 11.04.22 AM (1).jpeg",
      "/images/nafran valley-more/WhatsApp Image 2026-08-30 at 11.04.22 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "Monsoon",
      "July",
      "August"
    ]
  },
  {
    "id": "ka-5",
    "slug": "guraz-valley",
    "name": "Gurez Valley Trek",
    "location": "Bandipora",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "34°38' N 74°50' E",
    "altitude": 13000,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 16000,
    "heroImage": "/images/kashmir/guraz-valley.jpg",
    "gallery": [
      "/images/kashmir/guraz-valley.jpg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.13 AM (1).jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.13 AM (2).jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.13 AM.jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.14 AM (1).jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.14 AM (2).jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.14 AM.jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.15 AM (1).jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.15 AM.jpeg",
      "/images/gurez valley-more/WhatsApp Image 2026-08-30 at 11.01.16 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "Autumn",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ka-6",
    "slug": "bodpathri-trek",
    "name": "Bodpathri Trek",
    "location": "Budgam",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "33°50' N 74°35' E",
    "altitude": 13500,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 13000,
    "heroImage": "/images/kashmir/bodpathri-trek.jpg",
    "gallery": [
      "/images/kashmir/bodpathri-trek.jpg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.51 AM (1).jpeg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.51 AM.jpeg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.52 AM.jpeg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.53 AM (1).jpeg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.53 AM (2).jpeg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.53 AM.jpeg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.54 AM (1).jpeg",
      "/images/bodpathri/WhatsApp Image 2026-08-30 at 11.02.54 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "Autumn",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ka-7",
    "slug": "tulian-lake",
    "name": "Tulian Lake Trek",
    "location": "Pahalgam",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "34°00' N 75°18' E",
    "altitude": 12000,
    "duration": {
      "days": 3,
      "nights": 2
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Summer"
    ],
    "price": 7500,
    "heroImage": "/images/kashmir/tulian-lake.jpg",
    "gallery": [
      "/images/kashmir/tulian-lake.jpg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.50 AM (1).jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.50 AM.jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.51 AM (1).jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.51 AM.jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.54 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "June",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ka-8",
    "slug": "warwan-valley",
    "name": "Warwan Valley Trek",
    "location": "Kishtwar",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "33°52' N 75°45' E",
    "altitude": 14500,
    "duration": {
      "days": 9,
      "nights": 8
    },
    "difficulty": "Difficult",
    "season": [
      "Summer"
    ],
    "price": 22000,
    "heroImage": "/images/kashmir/warwan-valley.jpg",
    "gallery": [
      "/images/kashmir/warwan-valley.jpg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.15 AM (1).jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.15 AM (2).jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.15 AM.jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.16 AM (1).jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.16 AM.jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.17 AM (1).jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.17 AM.jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.18 AM (1).jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.18 AM.jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.19 AM (1).jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.19 AM (2).jpeg",
      "/images/warwan valley-more/WhatsApp Image 2026-08-30 at 11.00.19 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ka-9",
    "slug": "brammah-valley",
    "name": "Brammah Valley Trek",
    "location": "Kishtwar",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "33°20' N 76°05' E",
    "altitude": 13500,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 18000,
    "heroImage": "/images/kashmir/brammah-valley.jpg",
    "gallery": [
      "/images/kashmir/brammah-valley.jpg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.06 AM.jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.07 AM (1).jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.07 AM.jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.08 AM (1).jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.08 AM (2).jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.08 AM.jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.09 AM (1).jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.09 AM (2).jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.09 AM.jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.10 AM (1).jpeg",
      "/images/brammah valley-more/WhatsApp Image 2026-08-30 at 11.02.10 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "Autumn",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ka-10",
    "slug": "marchoi-trek",
    "name": "Marchoi Trek",
    "location": "Naranag",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "34°22' N 74°57' E",
    "altitude": 10500,
    "duration": {
      "days": 3,
      "nights": 2
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Winter",
      "Spring"
    ],
    "price": 6500,
    "heroImage": "/images/kashmir/marchoi-trek.jpg",
    "gallery": [
      "/images/kashmir/marchoi-trek.jpg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.38 AM (1).jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.38 AM.jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.39 AM (1).jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.39 AM (2).jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.39 AM.jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.40 AM (1).jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.40 AM (2).jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.40 AM.jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.41 AM (1).jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.41 AM.jpeg",
      "/images/marchoi-more/WhatsApp Image 2026-08-30 at 11.03.42 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Winter",
      "Spring",
      "January",
      "February",
      "March",
      "April",
      "November",
      "December"
    ]
  },
  {
    "id": "hp-1",
    "slug": "hampta-pass",
    "name": "Hampta Pass",
    "location": "Manali, Kullu",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°16' N 77°23' E",
    "altitude": 14100,
    "duration": {
      "days": 6,
      "nights": 5
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Monsoon",
      "Autumn"
    ],
    "price": 9500,
    "heroImage": "/images/himachal/hampta-pass.jpg",
    "gallery": [
      "https://images.unsplash.com/photo-1626027582299-fb9363bcde16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "Autumn",
      "June",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "hp-2",
    "slug": "pin-bhaba-pass",
    "name": "Pin Bhaba Pass",
    "location": "Kafnu, Kinnaur",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "31°45' N 77°58' E",
    "altitude": 16105,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Monsoon"
    ],
    "price": 16500,
    "heroImage": "/images/himachal/pin-bhaba-pass.jpg",
    "gallery": [
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "hp-3",
    "slug": "bhrigu-lake",
    "name": "Bhrigu Lake Trek",
    "location": "Manali, Kullu",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°17' N 77°14' E",
    "altitude": 14000,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Summer",
      "Monsoon",
      "Autumn"
    ],
    "price": 6500,
    "heroImage": "/images/himachal/bhrigu-lake.jpg",
    "gallery": [
      "/images/himachal/bhrigu-lake.jpg",
      "/images/bhrigu lake-more/WhatsApp Image 2026-08-30 at 11.09.27 AM (1).jpeg",
      "/images/bhrigu lake-more/WhatsApp Image 2026-08-30 at 11.09.27 AM.jpeg",
      "/images/bhrigu lake-more/WhatsApp Image 2026-08-30 at 11.09.28 AM.jpeg",
      "/images/bhrigu lake-more/WhatsApp Image 2026-08-30 at 11.09.29 AM.jpeg",
      "/images/bhrigu lake-more/WhatsApp Image 2026-08-30 at 11.09.30 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "Autumn",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "hp-4",
    "slug": "rupin-pass",
    "name": "Rupin Pass Trek",
    "location": "Dhaula, Shimla",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "31°12' N 78°07' E",
    "altitude": 15250,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 15500,
    "heroImage": "/images/himachal/rupin-pass.jpg",
    "gallery": [
      "/images/himachal/rupin-pass.jpg",
      "/images/rupin pass-more/WhatsApp Image 2026-08-30 at 11.15.34 AM.jpeg",
      "/images/rupin pass-more/WhatsApp Image 2026-08-30 at 11.15.35 AM (1).jpeg",
      "/images/rupin pass-more/WhatsApp Image 2026-08-30 at 11.15.35 AM (2).jpeg",
      "/images/rupin pass-more/WhatsApp Image 2026-08-30 at 11.15.35 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "hp-5",
    "slug": "buran-ghati",
    "name": "Buran Ghati Trek",
    "location": "Janglik, Shimla",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "31°15' N 78°02' E",
    "altitude": 15000,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 14500,
    "heroImage": "/images/himachal/buran-ghati.jpg",
    "gallery": [
      "/images/himachal/buran-ghati.jpg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.48 AM.jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.49 AM (1).jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.49 AM.jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.50 AM (1).jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.50 AM (2).jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.50 AM.jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.51 AM (1).jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.51 AM (2).jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.51 AM.jpeg",
      "/images/buran ghati-more/WhatsApp Image 2026-08-30 at 11.10.52 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "hp-6",
    "slug": "friendship-peak",
    "name": "Friendship Peak Expedition",
    "location": "Manali, Kullu",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°23' N 77°06' E",
    "altitude": 17350,
    "duration": {
      "days": 9,
      "nights": 8
    },
    "difficulty": "Challenging",
    "season": [
      "Summer",
      "Monsoon",
      "Autumn"
    ],
    "price": 25000,
    "heroImage": "/images/himachal/friendship-peak.jpg",
    "gallery": [
      "/images/himachal/friendship-peak.jpg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.22 AM (1).jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.22 AM.jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.23 AM (1).jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.23 AM (2).jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.23 AM.jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.24 AM (1).jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.24 AM (2).jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.24 AM.jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.25 AM (1).jpeg",
      "/images/friendship peak-more/WhatsApp Image 2026-08-30 at 11.13.25 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "Autumn",
      "May",
      "June",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "hp-7",
    "slug": "pin-parvati",
    "name": "Pin Parvati Pass Trek",
    "location": "Parvati Valley, Kullu",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "31°50' N 77°45' E",
    "altitude": 17450,
    "duration": {
      "days": 11,
      "nights": 10
    },
    "difficulty": "Challenging",
    "season": [
      "Summer",
      "Monsoon"
    ],
    "price": 28000,
    "heroImage": "/images/himachal/pin-parvati.jpg",
    "gallery": [],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "July",
      "August"
    ]
  },
  {
    "id": "hp-8",
    "slug": "kanamo-peak",
    "name": "Kanamo Peak Trek Expedition",
    "location": "Kibber, Spiti",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°20' N 78°00' E",
    "altitude": 19553,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Difficult",
    "season": [
      "Summer",
      "Monsoon"
    ],
    "price": 22000,
    "heroImage": "/images/himachal/kanamo-peak.jpg",
    "gallery": [],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "July",
      "August"
    ]
  },
  {
    "id": "hp-9",
    "slug": "chandrakhani-pass",
    "name": "Chandrakhani Pass Trek",
    "location": "Naggar, Kullu",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°05' N 77°14' E",
    "altitude": 12000,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Monsoon",
      "Autumn"
    ],
    "price": 7500,
    "heroImage": "/images/himachal/chandrakhani-pass.jpg",
    "gallery": [
      "/images/himachal/chandrakhani-pass.jpg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.38 AM (1).jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.38 AM.jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.39 AM (1).jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.39 AM (2).jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.39 AM.jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.40 AM (1).jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.40 AM (2).jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.40 AM.jpeg",
      "/images/chandrakhani pass-more/WhatsApp Image 2026-08-30 at 11.11.41 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "Autumn",
      "May",
      "June",
      "July",
      "August"
    ]
  },
  {
    "id": "hp-10",
    "slug": "yunam-peak",
    "name": "Yunam Peak Expedition",
    "location": "Bharatpur, Lahaul",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°45' N 77°23' E",
    "altitude": 20050,
    "duration": {
      "days": 9,
      "nights": 8
    },
    "difficulty": "Challenging",
    "season": [
      "Summer",
      "Monsoon",
      "Autumn"
    ],
    "price": 28000,
    "heroImage": "/images/himachal/yunam-peak.jpg",
    "gallery": [],
    "categories": [
      "Himachal",
      "Summer",
      "Monsoon",
      "Autumn",
      "June",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "hp-11",
    "slug": "beas-kund",
    "name": "Beas Kund Trek",
    "location": "Solang Valley, Manali",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°21' N 77°06' E",
    "altitude": 12772,
    "duration": {
      "days": 3,
      "nights": 2
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 5500,
    "heroImage": "/images/himachal/beas-kund.jpg",
    "gallery": [
      "/images/himachal/beas-kund.jpg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.45 AM.jpeg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.46 AM (1).jpeg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.46 AM.jpeg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.47 AM (1).jpeg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.47 AM.jpeg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.48 AM (1).jpeg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.48 AM.jpeg",
      "/images/beas-kund/WhatsApp Image 2026-08-30 at 11.08.49 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Autumn",
      "May",
      "June",
      "August",
      "September"
    ]
  },
  {
    "id": "hp-12",
    "slug": "kareri-lake",
    "name": "Kareri Lake Trek",
    "location": "Dharamshala, Kangra",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°18' N 76°16' E",
    "altitude": 9650,
    "duration": {
      "days": 3,
      "nights": 2
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 4500,
    "heroImage": "/images/himachal/kareri-lake.jpg",
    "gallery": [
      "/images/himachal/kareri-lake.jpg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.15 AM (1).jpeg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.15 AM.jpeg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.16 AM (1).jpeg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.16 AM (2).jpeg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.16 AM (3).jpeg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.16 AM.jpeg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.17 AM (1).jpeg",
      "/images/kareri lake-more/WhatsApp Image 2026-08-30 at 11.14.17 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Autumn",
      "Winter",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "hp-13",
    "slug": "sar-pass",
    "name": "Sar Pass Trek",
    "location": "Kasol, Parvati Valley",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "31°58' N 77°17' E",
    "altitude": 13800,
    "duration": {
      "days": 5,
      "nights": 4
    },
    "difficulty": "Moderate",
    "season": [
      "Summer"
    ],
    "price": 8500,
    "heroImage": "/images/himachal/sar-pass.jpg",
    "gallery": [],
    "categories": [
      "Himachal",
      "Summer",
      "May",
      "June"
    ]
  },
  {
    "id": "hp-14",
    "slug": "deo-tibba",
    "name": "Deo Tibba Peak Expedition",
    "location": "Manali, Kullu",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°11' N 77°23' E",
    "altitude": 19688,
    "duration": {
      "days": 14,
      "nights": 13
    },
    "difficulty": "Challenging",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 35000,
    "heroImage": "/images/himachal/deo-tibba-peak.jpg",
    "gallery": [
      "/images/himachal/deo-tibba-peak.jpg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.41 AM (1).jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.41 AM (2).jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.41 AM.jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.42 AM (1).jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.42 AM (2).jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.42 AM.jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.43 AM (1).jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.43 AM (2).jpeg",
      "/images/deo tibba-more/WhatsApp Image 2026-08-30 at 11.12.43 AM.jpeg"
    ],
    "categories": [
      "Himachal",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "sp-1",
    "slug": "do-dham-yatra",
    "name": "Do Dham Yatra",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°44' N 79°03' E",
    "altitude": 11755,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 22000,
    "heroImage": "/images/uttarakhand/do-dham-yatra.jpg",
    "gallery": [
      "/images/uttarakhand/do-dham-yatra.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Spiritual",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "sp-2",
    "slug": "char-dham-yatra",
    "name": "Char Dham Yatra",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°44' N 79°03' E",
    "altitude": 11755,
    "duration": {
      "days": 11,
      "nights": 10
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 35000,
    "heroImage": "/images/uttarakhand/char-dham-yatra.jpg",
    "gallery": [
      "/images/uttarakhand/char-dham-yatra.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Spiritual",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "sp-3",
    "slug": "kedarnath-yatra",
    "name": "Kedarnath Yatra",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°44' N 79°03' E",
    "altitude": 11755,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 12000,
    "heroImage": "/images/uttarakhand/kedarnath.jpg",
    "gallery": [
      "/images/uttarakhand/kedarnath.jpg",
      "/images/kedarnath-more/WhatsApp Image 2026-08-30 at 10.45.07 AM (1).jpeg",
      "/images/kedarnath-more/WhatsApp Image 2026-08-30 at 10.45.07 AM.jpeg",
      "/images/kedarnath-more/WhatsApp Image 2026-08-30 at 10.45.08 AM (1).jpeg",
      "/images/kedarnath-more/WhatsApp Image 2026-08-30 at 10.45.08 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Spiritual",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "sp-4",
    "slug": "amarnath-yatra",
    "name": "Amarnath Yatra",
    "location": "Pahalgam / Baltal",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "34°12' N 75°30' E",
    "altitude": 12756,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Moderate",
    "season": [
      "Summer"
    ],
    "price": 15000,
    "heroImage": "/images/kashmir/amarnath-yatra.jpg",
    "gallery": [],
    "categories": [
      "Kashmir",
      "Spiritual",
      "Summer",
      "July",
      "August"
    ]
  },
  {
    "id": "sp-5",
    "slug": "do-dham-chopta-chandrashila",
    "name": "Do Dham with Chopta Chandrashila",
    "location": "Uttarakhand",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°29' N 79°13' E",
    "altitude": 12083,
    "duration": {
      "days": 8,
      "nights": 7
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 21000,
    "heroImage": "/images/uttarakhand/chopta-chandrashila.jpg",
    "gallery": [
      "/images/uttarakhand/chopta-chandrashila.jpg"
    ],
    "categories": [
      "Uttarakhand",
      "Spiritual",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October"
    ]
  },
  {
    "id": "ld-1",
    "slug": "chadar-trek",
    "name": "Chadar Trek",
    "location": "Ladakh",
    "country": "India",
    "region": "Ladakh",
    "coordinates": "33°46' N 76°58' E",
    "altitude": 11123,
    "duration": {
      "days": 9,
      "nights": 8
    },
    "difficulty": "Difficult",
    "season": [
      "Winter"
    ],
    "price": 25000,
    "heroImage": "/images/ladakh/chadar-trek.jpg",
    "gallery": [
      "/images/ladakh/chadar-trek.jpg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.52 AM (1).jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.52 AM (2).jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.52 AM.jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.53 AM (1).jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.53 AM.jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.54 AM (1).jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.54 AM (2).jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.54 AM.jpeg",
      "/images/chadar trek-more/WhatsApp Image 2026-08-30 at 10.57.55 AM.jpeg"
    ],
    "categories": [
      "Ladakh",
      "Winter",
      "January",
      "February"
    ]
  },
  {
    "id": "ld-2",
    "slug": "ladakh-bike-tour",
    "name": "Leh Ladakh Bike Tour",
    "location": "Ladakh",
    "country": "India",
    "region": "Ladakh",
    "coordinates": "34°09' N 77°34' E",
    "altitude": 18380,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate to Difficult",
    "season": [
      "Summer"
    ],
    "price": 28000,
    "heroImage": "/images/ladakh/ladakh-bike-tour.jpg",
    "gallery": [
      "/images/ladakh/ladakh-bike-tour.jpg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.58.58 AM.jpeg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.58.59 AM (1).jpeg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.58.59 AM (2).jpeg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.58.59 AM.jpeg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.59.00 AM (1).jpeg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.59.00 AM.jpeg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.59.01 AM (1).jpeg",
      "/images/ladakh bike tour-more/WhatsApp Image 2026-08-30 at 10.59.01 AM.jpeg"
    ],
    "categories": [
      "Ladakh",
      "Summer",
      "June",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ut-auli",
    "slug": "auli-gorson-bugyal",
    "name": "Auli Gorson Bugyal Trek",
    "location": "Joshimath, Chamoli",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°31' N 79°34' E",
    "altitude": 11500,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Winter",
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 7500,
    "heroImage": "/images/Uttrakhand Trek_s/Auli/Auli 1.webp",
    "gallery": [
      "/images/Uttrakhand Trek_s/Auli/Auli 1.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 2.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 3.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 4.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 5.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 6.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 7.webp",
      "/images/Uttrakhand Trek_s/Auli/Auli 8.webp",
      "/images/Auli-more/WhatsApp Image 2026-08-30 at 10.57.11 AM (1).jpeg",
      "/images/Auli-more/WhatsApp Image 2026-08-30 at 10.57.11 AM.jpeg",
      "/images/Auli-more/WhatsApp Image 2026-08-30 at 10.57.12 AM.jpeg",
      "/images/Auli-more/WhatsApp Image 2026-08-30 at 10.57.13 AM (1).jpeg",
      "/images/Auli-more/WhatsApp Image 2026-08-30 at 10.57.13 AM (2).jpeg",
      "/images/Auli-more/WhatsApp Image 2026-08-30 at 10.57.13 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Winter",
      "Spring",
      "Summer",
      "Autumn",
      "January",
      "February",
      "March",
      "April",
      "May",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "ut-badrinath",
    "slug": "badrinath-yatra",
    "name": "Badrinath & Mana Village Spiritual Yatra",
    "location": "Badrinath, Chamoli",
    "country": "India",
    "region": "Uttarakhand",
    "coordinates": "30°44' N 79°29' E",
    "altitude": 10279,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Easy",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 11500,
    "heroImage": "/images/badrinath-more/WhatsApp Image 2026-08-30 at 10.45.06 AM.jpeg",
    "gallery": [
      "/images/badrinath-more/WhatsApp Image 2026-08-30 at 10.45.06 AM.jpeg",
      "/images/badrinath-more/WhatsApp Image 2026-08-30 at 10.45.07 AM.jpeg"
    ],
    "categories": [
      "Uttarakhand",
      "Spiritual",
      "Summer",
      "Autumn",
      "May",
      "June",
      "September",
      "October",
      "November"
    ]
  },
  {
    "id": "hp-bijli",
    "slug": "bijli-mahadev",
    "name": "Bijli Mahadev Trek",
    "location": "Kullu Valley",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "31°58' N 77°11' E",
    "altitude": 8000,
    "duration": {
      "days": 2,
      "nights": 1
    },
    "difficulty": "Easy",
    "season": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "price": 3999,
    "heroImage": "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM (1).jpeg",
    "gallery": [
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM (1).jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM (2).jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM.jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.12 AM (1).jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.12 AM.jpeg"
    ],
    "categories": [
      "Himachal Pradesh",
      "Weekend",
      "Summer",
      "Autumn",
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "hp-kheerganga",
    "slug": "kasol-kheerganga",
    "name": "Kasol Kheerganga Trek",
    "location": "Parvati Valley, Kullu",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "31°59' N 77°30' E",
    "altitude": 9711,
    "duration": {
      "days": 3,
      "nights": 2
    },
    "difficulty": "Easy to Moderate",
    "season": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "price": 4500,
    "heroImage": "/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.42 AM.jpeg",
    "gallery": [
      "/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.42 AM.jpeg",
      "/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.43 AM (1).jpeg",
      "/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.43 AM.jpeg",
      "/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.44 AM.jpeg",
      "/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.45 AM (1).jpeg",
      "/images/kasol kheerganga-more/WhatsApp Image 2026-08-30 at 11.14.45 AM.jpeg"
    ],
    "categories": [
      "Himachal Pradesh",
      "Weekend",
      "Summer",
      "Autumn",
      "March",
      "April",
      "May",
      "June",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  {
    "id": "hp-miyar",
    "slug": "miyar-valley",
    "name": "Miyar Valley Trek",
    "location": "Lahaul, Udaipur",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°44' N 76°53' E",
    "altitude": 14760,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 18500,
    "heroImage": "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.08 AM.jpeg",
    "gallery": [
      "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.08 AM.jpeg",
      "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.09 AM (1).jpeg",
      "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.09 AM.jpeg",
      "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.10 AM (1).jpeg",
      "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.10 AM.jpeg",
      "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.11 AM (1).jpeg",
      "/images/miyar valley-more/WhatsApp Image 2026-08-30 at 11.15.11 AM.jpeg"
    ],
    "categories": [
      "Himachal Pradesh",
      "Summer",
      "Autumn",
      "June",
      "July",
      "August",
      "September"
    ]
  },
  {
    "id": "ks-sinthan",
    "slug": "sinthan-top",
    "name": "Sinthan Top & Alpine Lakes Trek",
    "location": "Kishtwar - Breng Valley",
    "country": "India",
    "region": "Kashmir",
    "coordinates": "33°34' N 75°30' E",
    "altitude": 12450,
    "duration": {
      "days": 4,
      "nights": 3
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 12500,
    "heroImage": "/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.53 AM (1).jpeg",
    "gallery": [
      "/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.53 AM (1).jpeg",
      "/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.53 AM.jpeg",
      "/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.54 AM.jpeg",
      "/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.56 AM.jpeg",
      "/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.57 AM.jpeg",
      "/images/sinthon top-more/WhatsApp Image 2026-08-30 at 11.05.58 AM.jpeg"
    ],
    "categories": [
      "Kashmir",
      "Summer",
      "Autumn",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October"
    ]
  },
  {
    "id": "hp-spiti",
    "slug": "spiti-valley",
    "name": "Spiti Valley Circuit & Chandratal Expedition",
    "location": "Kaza, Spiti Valley",
    "country": "India",
    "region": "Himachal Pradesh",
    "coordinates": "32°13' N 78°04' E",
    "altitude": 15000,
    "duration": {
      "days": 7,
      "nights": 6
    },
    "difficulty": "Moderate",
    "season": [
      "Summer",
      "Autumn"
    ],
    "price": 22500,
    "heroImage": "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.36 AM (1).jpeg",
    "gallery": [
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.36 AM (1).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.36 AM.jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.37 AM (1).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.37 AM (2).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.37 AM.jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.15.38 AM.jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.21 AM (1).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.21 AM (2).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.21 AM.jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.22 AM (1).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.22 AM (2).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.22 AM.jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.23 AM (1).jpeg",
      "/images/spiti valley-more/WhatsApp Image 2026-08-30 at 11.16.23 AM.jpeg"
    ],
    "categories": [
      "Himachal Pradesh",
      "Summer",
      "Autumn",
      "June",
      "July",
      "August",
      "September",
      "October"
    ]
  }
];
