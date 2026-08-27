import { DetailedTrek } from "@/types/detailed-trek";

export const gurazValleyDetails: DetailedTrek = {
  slug: "guraz-valley",
  name: "Gurez Valley Trek",
  location: "Bandipora",
  duration: "6 Days",
  maxAltitude: "13000 FT",
  distance: "40 km",
  grade: "Moderate",
  price: 16000,
  baseCamp: "Dawar",
  season: "Summer",
  months: "July | August | September",
  railHead: "Jammu",
  airport: "Srinagar",
  trailType: "Circular trail | Starting and ending at Dawar.",
  image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80",
  overview: {
    description: [
      "The Gurez (or Guraz) Valley trek is a journey into one of the most remote and beautiful parts of Kashmir. Nestled high in the Himalayas, it is renowned for its stunning landscapes, traditional log houses, and the pristine Kishanganga River.",
      "Trekking in Gurez offers a rare glimpse into a region that remains largely untouched by commercial tourism. Experience true wilderness and the warm hospitality of the Dardic people."
    ],
    highlights: [
      { title: "Kishanganga River", description: "Trek alongside the mesmerizing turquoise waters of the Kishanganga river." },
      { title: "Habba Khatoon Peak", description: "Witness the majestic pyramid-shaped mountain named after the famous Kashmiri poetess." },
      { title: "Dardic Culture", description: "Explore the unique culture and architecture of the local Dard Shin tribe." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Drive from Srinagar to Dawar (Gurez)",
      details: [
        "A scenic drive covering roughly 120 km crossing the Razdan Pass.",
        "Check into a guesthouse or campsite in Dawar.",
        "Evening acclimatization walk."
      ]
    },
    {
      day: 2,
      title: "Dawar to Khandial Top",
      details: [
        "Begin the trek with a steep ascent towards Khandial Top.",
        "Enjoy panoramic views of the entire Dawar valley and Kishanganga river.",
        "Camp overnight at the top meadows."
      ]
    },
    {
      day: 3,
      title: "Khandial Top to Purgi",
      details: [
        "Trek through dense alpine forests.",
        "Spot local wildlife and diverse flora.",
        "Arrive at the serene Purgi campsite."
      ]
    },
    {
      day: 4,
      title: "Explore the Upper Meadows",
      details: [
        "A day dedicated to exploring the high-altitude meadows.",
        "Optional hike to higher ridges for spectacular views of the border regions.",
        "Return to Purgi for the night."
      ]
    },
    {
      day: 5,
      title: "Purgi to Dawar",
      details: [
        "Descend back towards the main valley.",
        "Follow a different trail passing through quaint villages.",
        "Final night camping in Dawar."
      ]
    },
    {
      day: 6,
      title: "Drive back to Srinagar",
      details: [
        "Morning departure from Dawar.",
        "Cross Razdan pass again.",
        "Drop off in Srinagar by late afternoon."
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
    meetingPlace: "Designated pickup point at Srinagar airport or city center",
    dropOff: "Same as meeting place",
    options: [
      "Fly into Srinagar airport.",
      "Overnight bus from Jammu to Srinagar."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in guesthouses and tents.",
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
      question: "Is Gurez Valley safe for trekking?",
      answer: "Yes, Gurez is perfectly safe and heavily secured. However, trekkers must stick to designated trails and always follow the trek leader's instructions."
    },
    {
      question: "What is the best time to do the Gurez Valley Trek?",
      answer: "The best time to do the trek is from July to September. It offers the most stable weather and lush green landscapes."
    },
    {
      question: "How difficult is the Gurez Valley Trek?",
      answer: "The trek is graded as Moderate. Prior fitness preparation is highly recommended to comfortably enjoy the trail."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached during the Gurez Valley Trek is approximately 13000 FT."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, nutritious meals are provided during the trek as part of the inclusions."
    },
    {
      question: "What kind of accommodation is provided?",
      answer: "Accommodation is typically in comfortable tents during the trek, and occasionally in guesthouses at Dawar."
    },
    {
      question: "Is there mobile network connectivity in Gurez?",
      answer: "Jio and Airtel work in Dawar (base camp) but network is unavailable once you begin the trek."
    }
  ]
};
