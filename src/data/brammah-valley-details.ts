import { DetailedTrek } from "@/types/detailed-trek";

export const brammahValleyDetails: DetailedTrek = {
  slug: "brammah-valley",
  name: "Brammah Valley Trek",
  location: "Kishtwar",
  duration: "7 Days",
  maxAltitude: "13500 FT",
  distance: "55 km",
  grade: "Moderate to Difficult",
  price: 18000,
  baseCamp: "Sounder",
  season: "Summer",
  months: "July | August | September",
  railHead: "Jammu",
  airport: "Srinagar",
  trailType: "Out and Back",
  image: "/images/kashmir/brammah-valley.jpg",
  gallery: [
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
  overview: {
    description: [
      "The Brammah Valley trek takes you into the heart of Kishtwar National Park, an area famous for its dramatic peaks, dense forests, and untamed rivers.",
      "The trail leads to the base of the mighty Brammah peaks, offering spectacular views and a true sense of exploration in one of the least visited valleys of Jammu & Kashmir."
    ],
    highlights: [
      { title: "Kishtwar National Park", description: "Trek through a pristine wildlife sanctuary." },
      { title: "Brammah Peaks", description: "Get up close to the towering Brammah I and Brammah II peaks." },
      { title: "Remote Villages", description: "Experience the unique culture of remote mountain settlements." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Jammu/Srinagar to Sounder",
      details: [
        "Drive to Sounder, the roadhead for the trek.",
        "Overnight stay at a guesthouse."
      ]
    },
    {
      day: 2,
      title: "Sounder to Sirshi",
      details: [
        "Start the trek along the Marusudar river.",
        "Pass through dense coniferous forests.",
        "Camp at Sirshi."
      ]
    },
    {
      day: 3,
      title: "Sirshi to Kibar",
      details: [
        "Continue ascending through the valley.",
        "The views of the surrounding peaks start to open up.",
        "Camp at Kibar meadows."
      ]
    },
    {
      day: 4,
      title: "Kibar to Brammah Base Camp",
      details: [
        "Trek towards the base camp of the Brammah peaks.",
        "Reach the highest point of the trek.",
        "Enjoy the majestic views of the glaciers and peaks."
      ]
    },
    {
      day: 5,
      title: "Explore Base Camp and return to Kibar",
      details: [
        "Morning exploration around the base camp.",
        "Descend back to Kibar."
      ]
    },
    {
      day: 6,
      title: "Kibar to Sounder",
      details: [
        "Descend back through Sirshi to Sounder.",
        "Last night of the trek."
      ]
    },
    {
      day: 7,
      title: "Sounder to Jammu/Srinagar",
      details: [
        "Drive back to your departure point."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 14 years. Prior trekking experience recommended.",
    fitnessCriteria: [
      "Stamina to jog 5 km in 30 mins.",
      "Ability to carry a 10 kg backpack."
    ],
    healthAwareness: [
      "Normal blood pressure."
    ]
  },
  howToReach: {
    meetingPlace: "Jammu Railway Station or Srinagar",
    dropOff: "Same as meeting place",
    options: [
      "Train to Jammu.",
      "Flight to Srinagar."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in tents and guesthouses.",
      "Nutritious meals.",
      "Expert trek leader and guides."
    ],
    exclusions: [
      "Transport to base camp.",
      "Personal gear."
    ]
  },
  essentials: {
    basicGear: [
      "50-60L backpack",
      "Sturdy trekking shoes",
      "Warm layers and rain gear"
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
      question: "What is the best time to do the Brammah Valley Trek?",
      answer: "The best time to do the trek is from July to September when the weather is clear."
    },
    {
      question: "How difficult is the Brammah Valley Trek?",
      answer: "The trek is graded as Moderate to Difficult due to long walking days and rugged terrain."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached is approximately 13500 FT at the Brammah Base Camp."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "It is not recommended for absolute beginners. Prior high altitude trekking experience helps."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, meals are provided during the trek."
    },
    {
      question: "What kind of accommodation is provided?",
      answer: "Accommodation is in comfortable tents during the trek."
    },
    {
      question: "Is Kishtwar National Park open to tourists?",
      answer: "Yes, but special permits are required, which our team will arrange in advance."
    }
  ]
};
