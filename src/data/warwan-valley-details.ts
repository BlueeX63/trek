import { DetailedTrek } from "@/types/detailed-trek";

export const warwanValleyDetails: DetailedTrek = {
  slug: "warwan-valley",
  name: "Warwan Valley Trek",
  location: "Kishtwar",
  duration: "9 Days",
  maxAltitude: "14500 FT",
  distance: "80 km",
  grade: "Difficult",
  price: 22000,
  baseCamp: "Panikhar",
  season: "Summer",
  months: "July | August | September",
  railHead: "Jammu",
  airport: "Srinagar",
  trailType: "Pass Crossing",
  image: "https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
  overview: {
    description: [
      "The Warwan Valley Trek is one of the most secluded and epic crossover treks in the Himalayas. It connects the stark, arid landscapes of Zanskar (Suru Valley) with the incredibly lush, green expanse of the Warwan Valley in Kashmir.",
      "Considered the holy grail of treks for seasoned hikers, it features massive glaciers, deep crevasses, and untouched valleys that are isolated for most of the year."
    ],
    highlights: [
      { title: "Bhot Kol Glacier", description: "Traverse the massive Bhot Kol glacier, negotiating crevasses and moraines." },
      { title: "Lomar Crossing", description: "Cross the challenging Lomar pass at 14,500 ft." },
      { title: "Isolated Villages", description: "Interact with the isolated communities of Warwan Valley, cut off from the world for months." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Drive Srinagar to Panikhar",
      details: [
        "A long 10-hour drive through Kargil to Panikhar in Suru Valley.",
        "Overnight at a guesthouse."
      ]
    },
    {
      day: 2,
      title: "Panikhar to Denora",
      details: [
        "First day of trekking alongside the Suru river.",
        "Camp at Denora."
      ]
    },
    {
      day: 3,
      title: "Denora to Kalapari",
      details: [
        "Trek on the lateral moraine of the glacier.",
        "Reach Kalapari base camp."
      ]
    },
    {
      day: 4,
      title: "Kalapari to Kaintal via Lomar Pass",
      details: [
        "Toughest day of the trek.",
        "Cross the Lomar pass negotiating snow and glacier fields.",
        "Descend into the Kashmir side to Kaintal."
      ]
    },
    {
      day: 5,
      title: "Kaintal to Humpet",
      details: [
        "Trek through lush green meadows, a stark contrast to Zanskar.",
        "Camp at Humpet."
      ]
    },
    {
      day: 6,
      title: "Humpet to Sukhnai",
      details: [
        "Enter the first village of Warwan Valley, Sukhnai.",
        "Experience the unique architecture of wooden houses."
      ]
    },
    {
      day: 7,
      title: "Sukhnai to Chaudraman",
      details: [
        "Walk through the beautiful, expansive Warwan valley.",
        "Camp at Chaudraman."
      ]
    },
    {
      day: 8,
      title: "Chaudraman to Inshan",
      details: [
        "Final short trekking day to Inshan.",
        "Celebrate the completion of the trek."
      ]
    },
    {
      day: 9,
      title: "Inshan to Srinagar",
      details: [
        "Drive back to Srinagar via Margan Top.",
        "End of the expedition."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 15 years. Extensive prior trekking experience is strictly required.",
    fitnessCriteria: [
      "Stamina to jog 5 km in 25 mins.",
      "Ability to carry a 12 kg backpack comfortably for long hours."
    ],
    healthAwareness: [
      "Excellent physical and mental fitness.",
      "No severe medical conditions."
    ]
  },
  howToReach: {
    meetingPlace: "Srinagar",
    dropOff: "Srinagar",
    options: [
      "Fly into Srinagar airport a day prior to the trek."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in guesthouses and high-altitude tents.",
      "Nutritious meals.",
      "Expert trek leader, local guides, and technical staff.",
      "All necessary camping, technical, and safety equipment."
    ],
    exclusions: [
      "Personal trekking gear.",
      "Insurance."
    ]
  },
  essentials: {
    basicGear: [
      "60L backpack with rain cover",
      "Sturdy trekking shoes and a walking stick",
      "Thermal wear, down jacket, waterproof layers",
      "Personal medical kit"
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 30 days", refundOptions: ["10% deduction", "90% voucher"] },
      { timeFrame: "Between 29 and 15 days", refundOptions: ["50% deduction", "50% voucher"] },
      { timeFrame: "Less than 15 days", refundOptions: ["No refund", "No voucher"] }
    ],
    emergencyCases: "Medical emergencies will be reviewed case by case.",
    notes: ["Rescheduling not permitted within 15 days."]
  },
  faqs: [
    {
      question: "What is the best time to do the Warwan Valley Trek?",
      answer: "The best time to do the trek is from July to September. This is when the passes are generally clear of heavy snow and safe to cross."
    },
    {
      question: "How difficult is the Warwan Valley Trek?",
      answer: "The trek is graded as Difficult. Extensive prior high-altitude trekking experience is highly recommended."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached during the Warwan Valley Trek is approximately 14500 FT at the Lomar Pass."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "No, this trek involves long glacier crossings, crevasses, and extreme isolation. It is strictly not for beginners."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, nutritious meals are provided during the trek."
    },
    {
      question: "What kind of accommodation is provided?",
      answer: "Accommodation is in high-quality mountaineering tents during the trek and basic guesthouses at the start/end points."
    },
    {
      question: "Is technical gear required?",
      answer: "While basic ropes and ice axes might be carried by the guides for safety on the glacier, you generally do not need personal technical mountaineering gear."
    }
  ]
};
