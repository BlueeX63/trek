import { DetailedTrek } from "@/types/detailed-trek";

export const tulianLakeDetails: DetailedTrek = {
  slug: "tulian-lake",
  name: "Tulian Lake Trek",
  location: "Pahalgam",
  duration: "3 Days",
  maxAltitude: "12000 FT",
  distance: "16 km",
  grade: "Easy to Moderate",
  price: 7500,
  baseCamp: "Pahalgam",
  season: "Summer",
  months: "June | July | August | September",
  railHead: "Jammu",
  airport: "Srinagar",
  trailType: "Out and Back",
  image: "/images/kashmir/tulian-lake.jpg",
  gallery: [
      "/images/kashmir/tulian-lake.jpg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.50 AM (1).jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.50 AM.jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.51 AM (1).jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.51 AM.jpeg",
      "/images/tulian lake-more/WhatsApp Image 2026-08-30 at 11.07.54 AM.jpeg"
  ],
  overview: {
    description: [
      "The Tulian Lake trek is a magnificent short trek starting from Pahalgam, leading to a turquoise alpine lake shaped like a figure eight.",
      "Surrounded by snow-capped peaks on three sides, Tulian Lake offers one of the most rewarding views in Kashmir for a relatively short effort."
    ],
    highlights: [
      { title: "Tulian Lake", description: "Witness the stunning 'figure-eight' shaped alpine lake." },
      { title: "Baisaran Valley", description: "Pass through the famous Baisaran meadow, also known as Mini Switzerland." },
      { title: "Pahalgam", description: "Start and end your journey in the beautiful tourist town of Pahalgam." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Pahalgam to Tulian Valley",
      details: [
        "Start trekking from Pahalgam via Baisaran.",
        "Trek through thick pine and fir forests.",
        "Camp overnight at Tulian Valley."
      ]
    },
    {
      day: 2,
      title: "Tulian Valley to Tulian Lake & Back",
      details: [
        "Steep ascent to Tulian Lake.",
        "Spend time taking in the breathtaking views.",
        "Descend back to the Tulian Valley campsite for the night."
      ]
    },
    {
      day: 3,
      title: "Tulian Valley to Pahalgam",
      details: [
        "Easy descent back to Pahalgam.",
        "Disperse for onward journey."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 10 years.",
    fitnessCriteria: [
      "Ability to walk 5-6 km a day comfortably."
    ],
    healthAwareness: [
      "Normal blood pressure."
    ]
  },
  howToReach: {
    meetingPlace: "Pahalgam Bus Stand",
    dropOff: "Same as meeting place",
    options: [
      "Take a shared cab from Srinagar to Pahalgam."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in tents.",
      "Nutritious vegetarian meals.",
      "Expert trek leader, guides, and cook."
    ],
    exclusions: [
      "Transport to Pahalgam.",
      "Personal trekking gear."
    ]
  },
  essentials: {
    basicGear: [
      "40L backpack with rain cover",
      "Sturdy trekking shoes",
      "Warm jacket and rain gear",
      "Personal medical kit"
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 25 days", refundOptions: ["10% deduction", "90% voucher"] },
      { timeFrame: "Between 24 and 15 days", refundOptions: ["30% deduction", "70% voucher"] },
      { timeFrame: "Less than 10 days", refundOptions: ["No cash refund", "50% voucher"] }
    ],
    emergencyCases: "Medical emergencies will be reviewed case by case.",
    notes: ["Rescheduling may incur additional fees."]
  },
  faqs: [
    {
      question: "What is the best time to visit Tulian Lake?",
      answer: "The best time to do the trek is from June to September. The lake might be frozen in early June."
    },
    {
      question: "How difficult is the Tulian Lake Trek?",
      answer: "The trek is graded as Easy to Moderate, making it a great weekend trek for beginners."
    },
    {
      question: "What is the maximum altitude?",
      answer: "The maximum altitude reached is approximately 12000 FT at the lake."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "Yes, it is very safe for beginners and families, provided basic fitness levels are met."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, all meals are provided during the trek."
    },
    {
      question: "What kind of accommodation is provided?",
      answer: "We provide high-quality camping tents at the Tulian Valley campsite."
    },
    {
      question: "Can I rent horses or ponies?",
      answer: "Yes, ponies can be rented at Pahalgam for offloading luggage or riding up to Baisaran."
    }
  ]
};
