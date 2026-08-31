import { DetailedTrek } from "@/types/detailed-trek";

export const bijliMahadevDetails: DetailedTrek = {
  slug: "bijli-mahadev",
  name: "Bijli Mahadev Trek",
  location: "Kullu Valley, Himachal Pradesh",
  duration: "2 Days / 1 Night",
  maxAltitude: "8,000 FT",
  distance: "6 km",
  grade: "Easy",
  price: 3999,
  baseCamp: "Kullu / Chansari Village",
  season: "All Year (Best: Mar to Jun & Sep to Dec)",
  months: "January | February | March | April | May | June | September | October | November | December",
  railHead: "Chandigarh Railway Station (260 km)",
  airport: "Bhuntar Airport, Kullu (15 km)",
  trailType: "Ridge & Forest Trail | Gradual ascent through fragrant pine groves and expansive meadow ridge",
  image: '/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM (1).jpeg',
  gallery: [
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM (1).jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM (2).jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.10 AM.jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.12 AM (1).jpeg",
      "/images/bijli mahadev-more/WhatsApp Image 2026-08-30 at 11.10.12 AM.jpeg"
  ],
  overview: {
    description: [
      "Perched on the Mathan plateau at an altitude of 8,000 feet, Bijli Mahadev is one of the most sacred and visually dramatic temples in Himachal Pradesh. The temple is dedicated to Lord Shiva and is renowned for its 60-foot tall wooden staff that attracts celestial lightning bolts, which shatter the Shiva Lingam inside only for it to be restored with butter and sattu by the temple priests.",
      "The trek ascends through serene pine forests and opens up onto a vast grassy ridge that offers an unparalleled 360-degree vantage point overlooking the confluences of the Beas and Parvati rivers, along with sweeping vistas of the snow-clad Pir Panjal and Dhauladhar ranges."
    ],
    highlights: [
      { title: "360-Degree Valley Panorama", description: "Breathtaking views encompassing both the Kullu Valley and the Parvati Valley from a single elevated ridge." },
      { title: "Mystical Lightning Temple", description: "Learn the centuries-old legends and marvel at the 60-foot pine mast that draws cosmic lightning strikes." },
      { title: "Pristine Deodar & Pine Trails", description: "Walk through scented pine and deodar forests, ideal for weekend nature enthusiasts, birdwatchers, and families." },
      { title: "Sunset & Sunrise from Ridge Camp", description: "Camp on the grassy hilltop under starry night skies and watch the dawn illuminate the Kullu peaks." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Kullu to Chansari Village & Trek to Bijli Mahadev",
      details: [
        "Meet at Kullu / Bhuntar and take a short drive to Chansari base village (15 km, 45 mins).",
        "Begin the gentle 3 km uphill hike through dense pine and oak trees with well-marked stone steps.",
        "Reach the plateau of Bijli Mahadev (8,000 ft) by early afternoon.",
        "Visit the ancient wooden temple, witness the traditional Pahadi architecture, and soak in the expansive valley views.",
        "Evening campfire, stargazing, and camping/homestay stay on the ridge."
      ]
    },
    {
      day: 2,
      title: "Sunrise over Himalayas, Descent & Departure",
      details: [
        "Wake up early to catch a mesmerizing Himalayan sunrise illuminating the snow peaks.",
        "Post breakfast, explore the plateau and ancient apple orchards.",
        "Descend back to Chansari village (1.5 - 2 hrs).",
        "Drive back to Kullu / Bhuntar / Manali for departure."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Open to all age groups (children above 6 years).",
    fitnessCriteria: [
      "Ability to hike 3-4 km with modest elevation gain.",
      "Ideal for beginner hikers and family getaways."
    ],
    healthAwareness: [
      "Standard physical condition; no specialized acclimatization required."
    ]
  },
  howToReach: {
    meetingPlace: "Kullu Bus Stand / Bhuntar Airport at 9:00 AM on Day 1",
    dropOff: "Kullu / Bhuntar by 3:00 PM on Day 2",
    options: [
      "Overnight Volvo bus from Delhi / Chandigarh to Kullu.",
      "Fly directly into Bhuntar Airport (Kullu-Manali Airport).",
      "Regular local buses and taxis connect Kullu to Chansari base."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation: Alpine camping / local boutique homestay on the ridge.",
      "Meals: 1 Breakfast, 1 Lunch, 1 Dinner, plus morning/evening tea.",
      "Certified local trekking guide.",
      "Camping equipment (tents, sleeping bags, mats).",
      "Forest entry and environmental clearances."
    ],
    exclusions: [
      "Transport to and from Chansari (available at nominal shared taxi cost).",
      "Personal items, trekking gear, and beverages.",
      "Insurance and tips."
    ]
  },
  essentials: {
    basicGear: [
      "Small daypack (20-30L)",
      "Walking shoes with decent grip",
      "Warm fleece or jacket for chilly evenings",
      "Refillable water bottle",
      "Sunscreen, sunglasses, and cap"
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 7 days", refundOptions: ["Full refund minus 5% processing fee", "100% voucher"] },
      { timeFrame: "3 to 6 days", refundOptions: ["50% refund", "80% voucher"] },
      { timeFrame: "Less than 3 days", refundOptions: ["No cash refund", "50% voucher"] }
    ],
    emergencyCases: "Full voucher provided for severe weather disturbances.",
    notes: ["Flexible rescheduling up to 48 hours prior."]
  },
  faqs: [
    {
      question: "Can beginners and children do the Bijli Mahadev Trek?",
      answer: "Absolutely. The trek is only 3 km each way with well-laid stone paths and gentle gradients, making it one of the easiest weekend hikes in Himachal."
    },
    {
      question: "Why is it called Bijli Mahadev?",
      answer: "The name 'Bijli' translates to lightning. The high mast atop the temple attracts lightning strikes during thunderstorms, which devotees believe absorbs negative celestial energy to protect the inhabitants of the valley."
    },
    {
      question: "Is mobile network available at the summit?",
      answer: "Yes, 4G connectivity (Jio and Airtel) is generally available throughout the trail and at the temple plateau."
    }
  ]
};
