import { DetailedTrek } from "@/types/detailed-trek";

export const marchoiTrekDetails: DetailedTrek = {
  slug: "marchoi-trek",
  name: "Marchoi Trek",
  location: "Naranag",
  duration: "3 Days",
  maxAltitude: "10500 FT",
  distance: "18 km",
  grade: "Easy to Moderate",
  price: 6500,
  baseCamp: "Naranag",
  season: "Winter",
  months: "January | February | March | April | November | December",
  railHead: "Jammu",
  airport: "Srinagar",
  trailType: "Out and Back",
  image: "/images/kashmir/marchoi-trek.jpg",
  overview: {
    description: [
      "The Marchoi Trek is one of the best winter treks in Kashmir. Starting from the historical village of Naranag, it offers a magical snowy trail through the dense pine forests of the Wangat Valley.",
      "It is an ideal trek for beginners to experience a winter wonderland, complete with frozen streams and a peaceful atmosphere."
    ],
    highlights: [
      { title: "Winter Wonderland", description: "Experience deep snow and frozen landscapes." },
      { title: "Naranag Temple Ruins", description: "Visit the ancient 8th-century Shiva temple complex at the base camp." },
      { title: "Wangat River", description: "Trek alongside the picturesque partially frozen Wangat river." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Srinagar to Naranag and trek to Dumail",
      details: [
        "Drive from Srinagar to Naranag (approx 2 hours).",
        "Start the trek towards Dumail.",
        "Camp at Dumail."
      ]
    },
    {
      day: 2,
      title: "Dumail to Marchoi Top and back to Dumail",
      details: [
        "Ascend towards Marchoi Top.",
        "Enjoy panoramic views of the snow-clad peaks.",
        "Return to Dumail for the night."
      ]
    },
    {
      day: 3,
      title: "Dumail to Naranag and Drive to Srinagar",
      details: [
        "Trek back to Naranag.",
        "Drive back to Srinagar."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 10 years.",
    fitnessCriteria: [
      "Ability to walk 5-6 km a day in snow."
    ],
    healthAwareness: [
      "Normal blood pressure."
    ]
  },
  howToReach: {
    meetingPlace: "Srinagar Tourist Reception Centre",
    dropOff: "Same as meeting place",
    options: [
      "Fly into Srinagar airport."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in winter-grade tents.",
      "Nutritious hot meals.",
      "Expert trek leader and guides.",
      "Micro-spikes and gaiters if required."
    ],
    exclusions: [
      "Transport to Srinagar.",
      "Personal trekking gear."
    ]
  },
  essentials: {
    basicGear: [
      "40L backpack with rain cover",
      "Sturdy waterproof trekking shoes",
      "Thermal wear, heavy down jacket, waterproof pants",
      "Winter gloves and woolen cap"
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
      question: "What is the best time to do the Marchoi Trek?",
      answer: "The best time is during winter, from December to March, to experience the snow."
    },
    {
      question: "How difficult is the Marchoi Trek?",
      answer: "The trek is graded as Easy to Moderate. Walking in snow can be tiring, but the trail itself is not technically difficult."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached is approximately 10500 FT at Marchoi Top."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "Yes, it is highly recommended for beginners looking for their first winter trekking experience."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, hot meals are provided during the trek."
    },
    {
      question: "What kind of accommodation is provided?",
      answer: "Accommodation is in high-quality winter-grade tents to keep you warm."
    },
    {
      question: "Will I need special equipment for walking in the snow?",
      answer: "We provide micro-spikes and gaiters if the snow conditions require them."
    }
  ]
};
