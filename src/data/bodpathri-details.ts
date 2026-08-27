import { DetailedTrek } from "@/types/detailed-trek";

export const bodpathriDetails: DetailedTrek = {
  slug: "bodpathri-trek",
  name: "Bodpathri Trek",
  location: "Budgam",
  duration: "5 Days",
  maxAltitude: "13500 FT",
  distance: "35 km",
  grade: "Moderate",
  price: 13000,
  baseCamp: "Doodhpathri",
  season: "Summer",
  months: "July | August | September",
  railHead: "Jammu",
  airport: "Srinagar",
  trailType: "Alpine Lake Trek",
  image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
  overview: {
    description: [
      "The Bodpathri Trek explores the hidden alpine lakes nestled in the Pir Panjal range. Starting from the famous meadows of Doodhpathri, this trek is an offbeat alternative to the Kashmir Great Lakes.",
      "Vast meadows, dense pine forests, and a sequence of stunning high-altitude lakes make this an unforgettable journey for nature lovers looking for solitude."
    ],
    highlights: [
      { title: "Alpine Lakes", description: "Discover hidden gems like Bodpathri and Pamsar lakes." },
      { title: "Doodhpathri Meadows", description: "Start the trek traversing the breathtaking 'Valley of Milk'." },
      { title: "Pir Panjal Views", description: "Get unmatched panoramic views of the entire Pir Panjal mountain range." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Srinagar to Doodhpathri",
      details: [
        "Drive from Srinagar to Doodhpathri (approx. 2 hours).",
        "Short acclimatization walk around the meadows.",
        "Overnight stay in tents."
      ]
    },
    {
      day: 2,
      title: "Doodhpathri to Ashtar Valley",
      details: [
        "Trek through thick pine forests and cross river streams.",
        "Arrive at the beautiful Ashtar valley.",
        "Overnight camping."
      ]
    },
    {
      day: 3,
      title: "Ashtar to Bodpathri Lake",
      details: [
        "Steep ascent towards the Bodpathri lakes.",
        "Explore the twin lakes and enjoy the serene environment.",
        "Camp near the lake."
      ]
    },
    {
      day: 4,
      title: "Bodpathri to Pamsar",
      details: [
        "Trek towards another beautiful alpine lake, Pamsar.",
        "Cross a small mountain pass.",
        "Overnight camping."
      ]
    },
    {
      day: 5,
      title: "Pamsar to Doodhpathri & Drive to Srinagar",
      details: [
        "Descend back to Doodhpathri via a different trail.",
        "Drive back to Srinagar."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 12 years. Prior trekking experience recommended.",
    fitnessCriteria: [
      "Stamina to jog 4 km in 30 mins.",
      "Ability to carry a 10 kg backpack comfortably."
    ],
    healthAwareness: [
      "Normal blood pressure and resting heart rate.",
      "No severe asthma, heart conditions, or epilepsy."
    ]
  },
  howToReach: {
    meetingPlace: "Designated pickup point at Srinagar",
    dropOff: "Same as meeting place",
    options: [
      "Fly into Srinagar airport.",
      "Overnight bus from Jammu to Srinagar."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in tents.",
      "Nutritious vegetarian meals.",
      "Expert trek leader, guides, and cook.",
      "All necessary camping and safety equipment."
    ],
    exclusions: [
      "Transport to Srinagar.",
      "Offloading of personal backpacks.",
      "Personal trekking gear."
    ]
  },
  essentials: {
    basicGear: [
      "50-60L backpack with rain cover",
      "Sturdy trekking shoes and a walking stick",
      "Warm layers, waterproof jacket, and gloves",
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
      question: "What is the best time to do the Bodpathri Trek?",
      answer: "The best time to do the trek is from July to September. It offers the most stable weather and clearest views of the lakes."
    },
    {
      question: "How difficult is the Bodpathri Trek?",
      answer: "The trek is graded as Moderate. Prior fitness preparation is highly recommended."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached during the Bodpathri Trek is approximately 13500 FT."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "Fit beginners can attempt it, but previous trekking experience at high altitudes is beneficial."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, nutritious meals are provided during the trek as part of the inclusions."
    },
    {
      question: "What kind of accommodation is provided?",
      answer: "Accommodation is in comfortable high-quality tents throughout the trek."
    },
    {
      question: "How do I reach the base camp?",
      answer: "We arrange pickups from Srinagar and drive you directly to Doodhpathri base camp."
    }
  ]
};
