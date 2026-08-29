import { DetailedTrek } from "@/types/detailed-trek";

export const amarnathDetails: DetailedTrek = {
  slug: "amarnath-yatra",
  name: "Amarnath Yatra",
  location: "Pahalgam / Baltal",
  duration: "4 Days",
  maxAltitude: "12756 FT",
  distance: "32 km (from Pahalgam) / 14 km (from Baltal)",
  grade: "Moderate",
  price: 15000,
  baseCamp: "Pahalgam / Baltal",
  season: "Summer",
  months: "July | August",
  railHead: "Jammu",
  airport: "Srinagar",
  trailType: "Pilgrimage Trail",
  image: "/images/kashmir/amarnath-yatra.jpg",
  overview: {
    description: [
      "The Amarnath Yatra is one of the most revered pilgrimages in Hinduism, dedicated to Lord Shiva. The journey takes you to the holy Amarnath Cave, situated high in the mountains of Jammu and Kashmir, where the legendary ice Shiva Lingam naturally forms every year.",
      "The yatra challenges devotees both physically and spiritually, offering an unparalleled experience of devotion amidst stunning Himalayan landscapes."
    ],
    highlights: [
      { title: "Holy Ice Lingam", description: "Witness the naturally forming ice stalagmite representing Lord Shiva inside the sacred cave." },
      { title: "Scenic Beauty", description: "Experience the incredible beauty of the Pahalgam and Baltal valleys." },
      { title: "Spiritual Fervor", description: "Be part of a deeply moving journey joined by thousands of devotees chanting 'Bam Bam Bhole'." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Srinagar to Pahalgam/Baltal",
      details: [
        "Arrival in Srinagar and immediate transfer to the base camp (Pahalgam or Baltal).",
        "Overnight stay and acclimatization at the base camp."
      ]
    },
    {
      day: 2,
      title: "Base Camp to Holy Cave & Return (or overnight stay)",
      details: [
        "Early morning start. The trek from Baltal is shorter and steeper, while Pahalgam is longer but gradual.",
        "Reach the holy cave for Darshan of the Ice Lingam.",
        "Depending on the route and pace, trek back to base camp or stay at Panchtarni."
      ]
    },
    {
      day: 3,
      title: "Return to Base Camp and Drive to Srinagar",
      details: [
        "Complete the descent back to Baltal or Pahalgam.",
        "Drive back to Srinagar.",
        "Rest and overnight stay in a hotel or houseboat."
      ]
    },
    {
      day: 4,
      title: "Departure",
      details: [
        "Morning at leisure for local sightseeing or shopping (if time permits).",
        "Drop at Srinagar Airport."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 13 years, Maximum 70 years. Compulsory health certificate (CHC) is required by the Shrine Board.",
    fitnessCriteria: [
      "Must be physically fit to walk in high-altitude conditions."
    ],
    healthAwareness: [
      "No history of severe respiratory issues, heart conditions, or high blood pressure."
    ]
  },
  howToReach: {
    meetingPlace: "Srinagar Airport or Jammu Railway Station",
    dropOff: "Srinagar Airport or Jammu Railway Station",
    options: [
      "Fly into Srinagar Airport.",
      "Take a train to Jammu and drive to Srinagar/Base camp."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in tents/guesthouses.",
      "Basic vegetarian meals at Langars.",
      "Assistance with Yatra registration (if applicable)."
    ],
    exclusions: [
      "Helicopter tickets, pony, or palanquin rides.",
      "Personal medical expenses."
    ]
  },
  essentials: {
    basicGear: [
      "Sturdy walking shoes",
      "Warm clothing including thermals, heavy jacket, and raincoat/poncho",
      "Walking stick",
      "Personal medical kit and essential medicines"
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 25 days", refundOptions: ["10% deduction", "90% voucher"] },
      { timeFrame: "Between 24 and 15 days", refundOptions: ["30% deduction", "70% voucher"] },
      { timeFrame: "Less than 10 days", refundOptions: ["No cash refund", "50% voucher"] }
    ],
    emergencyCases: "Medical emergencies will be reviewed case by case.",
    notes: ["Yatra relies on weather and government clearances. Cancellations due to these factors will be handled per our standard policy."]
  },
  faqs: [
    {
      question: "What is the best time for the Amarnath Yatra?",
      answer: "The Yatra is typically open only during July and August (Shravan month), subject to government announcement."
    },
    {
      question: "How difficult is the Amarnath Yatra?",
      answer: "The trek is graded as Moderate, but altitude sickness and unpredictable weather can make it challenging. Proper fitness and a Compulsory Health Certificate are required."
    },
    {
      question: "What is the maximum altitude reached on this trek?",
      answer: "The maximum altitude reached is approximately 12756 FT at the Holy Cave."
    },
    {
      question: "Is the Amarnath Yatra safe for elderly pilgrims?",
      answer: "The Yatra has strict age limits (13 to 70 years). Elderly pilgrims must be extremely fit and have a valid health certificate. Helicopter or pony options are available."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, free highly nutritious vegetarian food is provided throughout the route by various 'Langars'."
    },
    {
      question: "What kind of accommodation is provided?",
      answer: "Accommodation is provided in basic tents at base camps and halting points."
    },
    {
      question: "Do I need special permits for the Yatra?",
      answer: "Yes, mandatory registration and a Compulsory Health Certificate (CHC) authorized by the Shrine Board are required to undertake the Yatra."
    }
  ]
};
