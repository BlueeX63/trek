import { DetailedTrek } from "@/types/detailed-trek";

export const pangarchullaPeakDetails: DetailedTrek = {
  slug: "pangarchulla-peak",
  name: "Pangarchulla Peak Trek",
  location: "Pipalkoti",
  duration: "7 Days",
  maxAltitude: "15100 FT",
  distance: "39 km",
  grade: "Moderate to Difficult",
  price: 15000, // Default placeholder
  baseCamp: "Pipalkoti",
  season: "Spring",
  months: "March | April",
  railHead: "Rishikesh",
  airport: "Jolly Grant Airport, which is 21 km away from Rishikesh",
  trailType: "Summit, Point to point | Scale a peak, Camping at the same location upon returning.",
  image: "/images/uttarakhand/pangarchulla-peak.png",
  overview: {
    description: [
      "Experience the raw, untamed beauty of the wilderness on the Pangarchulla Peak Trek. Every day on this trail brings a new landscape, from cascading mountain streams to towering snow-capped summits. This trek is an absolute must-do for adventurers looking to capture the ultimate essence of high-altitude exploration.",
      "Equipped with expert guides and well-planned itineraries, we ensure that your journey is as safe as it is spectacular. Embrace the challenge and let the mountains transform you."
    ],
    highlights: [
      { title: "Serene Campsites", description: "Spend your nights under a blanket of stars at some of the most picturesque campsites, nestled perfectly beside glacial streams and vast meadows." },
      { title: "Breathtaking Vistas", description: "Witness sweeping, panoramic views of the surrounding Himalayan giants. The sheer scale of these snow-capped peaks will leave you in absolute awe." },
      { title: "Untouched Trails", description: "Trek through pristine, less-crowded paths that offer a deep sense of serenity and an intimate connection with nature." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Arrival at Base Camp",
      details: [
        "Arrive at the designated meeting point.",
        "Briefing by the expedition leader.",
        "Overnight stay to acclimatize to the mountain air."
      ]
    },
    {
      day: 2,
      title: "The Journey Begins",
      details: [
        "Early morning start towards the first high-altitude campsite.",
        "Trek through lush trails and scenic viewpoints.",
        "Pitch tents and enjoy a warm, nutritious meal."
      ]
    },
    {
      day: 3,
      title: "Summit or High Pass Push",
      details: [
        "The most challenging and rewarding day of the trek.",
        "Reach the maximum altitude and enjoy 360-degree panoramic views.",
        "Safe descent back to a lower campsite."
      ]
    },
    {
      day: 4,
      title: "Descent and Departure",
      details: [
        "Trek back to the base camp.",
        "Collect your completion certificate and bid farewell to the mountains.",
        "Departure to onward destinations."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 12 years. Prior trekking experience recommended for difficult grades.",
    fitnessCriteria: [
      "Stamina to jog 5 km in 30 mins or cycle 15 km in 45 mins.",
      "Ability to carry a 10-12 kg backpack comfortably."
    ],
    healthAwareness: [
      "Normal blood pressure and resting heart rate.",
      "No severe asthma, heart conditions, or epilepsy."
    ]
  },
  howToReach: {
    meetingPlace: "Designated pickup point at Rishikesh or Jolly Grant Airport, which is 21 km away from Rishikesh",
    dropOff: "Same as meeting place",
    options: [
      "Take an overnight bus from major nearby cities.",
      "Take a train to Rishikesh.",
      "Fly into Jolly Grant Airport, which is 21 km away from Rishikesh a day in advance."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in guesthouses and tents.",
      "Nutritious vegetarian meals (with eggs).",
      "Expert trek leader, guides, and cook.",
      "All necessary camping and safety equipment including medical kits.",
      "Forest permits and entry fees."
    ],
    exclusions: [
      "Transport to base camp (unless booked separately).",
      "Offloading of personal backpacks.",
      "Personal trekking gear and insurance."
    ]
  },
  essentials: {
    basicGear: [
      "50-60L backpack with rain cover",
      "Sturdy trekking shoes and a walking stick",
      "Hydration pack or water bottles",
      "Warm layers, waterproof jacket, and gloves",
      "Personal medical kit"
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 25 days", refundOptions: ["5% deduction", "100% voucher"] },
      { timeFrame: "Between 24 and 15 days", refundOptions: ["30% deduction", "85% voucher"] },
      { timeFrame: "Less than 9 days", refundOptions: ["No cash refund", "10% voucher"] }
    ],
    emergencyCases: "In case of medical emergencies, a 90% refund and 10% voucher is provided with valid documents.",
    notes: [
      "Rescheduling incurs a 30% fee."
    ]
  },
  faqs: [
    {
      question: "What is the best time to do the Pangarchulla Peak Trek?",
      answer: "The best time to do the Pangarchulla Peak Trek is typically during the Spring season. It offers the most stable weather and clearest views."
    },
    {
      question: "How difficult is the Pangarchulla Peak Trek?",
      answer: "The Pangarchulla Peak Trek is graded as Moderate to Difficult. Prior fitness preparation is highly recommended to comfortably enjoy the trail."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached during the Pangarchulla Peak Trek is 15100 FT."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "For a Moderate to Difficult trek, fit beginners can attempt it if it's easy-moderate. However, difficult grades require prior trekking experience and good physical stamina."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, nutritious meals are provided during the trek as part of the inclusions. We ensure you are well-fed and energized."
    },
    {
      question: "How difficult is the Pangarchulla Peak Trek?",
      answer: "The trek is graded as Moderate to Difficult. Ensure you meet the fitness criteria before booking."
    },
    {
      question: "What is the maximum altitude?",
      answer: "You will reach a maximum altitude of 15100 FT."
    }
  ]
};
