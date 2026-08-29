import { DetailedTrek } from "@/types/detailed-trek";

export const deoTibbaDetails: DetailedTrek = {
  slug: "deo-tibba",
  name: "Deo Tibba Peak Expedition",
  location: "Manali",
  duration: "13 Days",
  maxAltitude: "19700 FT",
  distance: "60 km",
  grade: "Challenging",
  price: 15000, // Default placeholder
  baseCamp: "Manali",
  season: "Summer | Autumn",
  months: "May | June | September | October",
  railHead: "Chandigarh is the nearest rail head to the base camp",
  airport: "Bhuntar, which is 52 km away from Manali",
  trailType: "Summit, Point to point | Scale a peak, Camping at the same location upon returning.",
  image: "/images/himachal/deo-tibba-peak.jpg",
  overview: {
    description: [
      "Step into a living canvas with the Deo Tibba Peak Expedition. This extraordinary adventure invites you to traverse rugged terrains that seamlessly melt into lush, vibrant grasslands. It's an unforgettable odyssey that rewards your endurance with some of the most dramatic and awe-inspiring views the region has to offer.",
      "Equipped with expert guides and well-planned itineraries, we ensure that your journey is as safe as it is spectacular. Embrace the challenge and let the mountains transform you."
    ],
    highlights: [
      { title: "Thrilling Terrain", description: "Experience the adrenaline rush of navigating diverse landscapes, from gradual ascents in lush valleys to challenging rocky ridges." },
      { title: "Serene Campsites", description: "Spend your nights under a blanket of stars at some of the most picturesque campsites, nestled perfectly beside glacial streams and vast meadows." },
      { title: "Breathtaking Vistas", description: "Witness sweeping, panoramic views of the surrounding Himalayan giants. The sheer scale of these snow-capped peaks will leave you in absolute awe." }
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
    meetingPlace: "Designated pickup point at Chandigarh is the nearest rail head to the base camp or Bhuntar, which is 52 km away from Manali",
    dropOff: "Same as meeting place",
    options: [
      "Take an overnight bus from major nearby cities.",
      "Take a train to Chandigarh is the nearest rail head to the base camp.",
      "Fly into Bhuntar, which is 52 km away from Manali a day in advance."
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
      question: "What is the best time to do the Deo Tibba Peak Expedition?",
      answer: "The best time to do the Deo Tibba Peak Expedition is typically during the Summer | Autumn season. It offers the most stable weather and clearest views."
    },
    {
      question: "How difficult is the Deo Tibba Peak Expedition?",
      answer: "The Deo Tibba Peak Expedition is graded as Challenging. Prior fitness preparation is highly recommended to comfortably enjoy the trail."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached during the Deo Tibba Peak Expedition is 19700 FT."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "For a Challenging trek, fit beginners can attempt it if it's easy-moderate. However, difficult grades require prior trekking experience and good physical stamina."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, nutritious meals are provided during the trek as part of the inclusions. We ensure you are well-fed and energized."
    },
    {
      question: "How difficult is the Deo Tibba Peak Expedition?",
      answer: "The trek is graded as Challenging. Ensure you meet the fitness criteria before booking."
    },
    {
      question: "What is the maximum altitude?",
      answer: "You will reach a maximum altitude of 19700 FT."
    }
  ]
};
