import { DetailedTrek } from "@/types/detailed-trek";

export const pindariGlacierDetails: DetailedTrek = {
  slug: "pindari-glacier",
  name: "Pindari Glacier Trek",
  location: "Kharkia",
  duration: "6 Days",
  maxAltitude: "12300 FT",
  distance: "50 km",
  grade: "Moderate",
  price: 15000, // Default placeholder
  baseCamp: "Kharkia",
  season: "Summer",
  months: "May",
  railHead: "Kathgodam",
  airport: "Pantnagar, which is 22 km away from Haldwani",
  trailType: "Circle trail | Camping in various locations, starting and ending at the same point.",
  image: "/images/uttarakhand/pindari-glacier.jpg",
  overview: {
    description: [
      "Embark on a mesmerizing journey with the Pindari Glacier Trek, where every step unveils a new facet of nature's grandeur. This expedition takes you through diverse landscapes, offering an unparalleled blend of thrill and tranquility. Away from the clamor of the city, you'll find solace among towering peaks and sweeping valleys.",
      "Equipped with expert guides and well-planned itineraries, we ensure that your journey is as safe as it is spectacular. Embrace the challenge and let the mountains transform you."
    ],
    highlights: [
      { title: "Breathtaking Vistas", description: "Witness sweeping, panoramic views of the surrounding Himalayan giants. The sheer scale of these snow-capped peaks will leave you in absolute awe." },
      { title: "Untouched Trails", description: "Trek through pristine, less-crowded paths that offer a deep sense of serenity and an intimate connection with nature." },
      { title: "Rich Biodiversity", description: "Walk amidst ancient forests of oak and rhododendron, and keep an eye out for rare high-altitude wildlife and vibrant alpine flowers." }
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
    meetingPlace: "Designated pickup point at Kathgodam or Pantnagar, which is 22 km away from Haldwani",
    dropOff: "Same as meeting place",
    options: [
      "Take an overnight bus from major nearby cities.",
      "Take a train to Kathgodam.",
      "Fly into Pantnagar, which is 22 km away from Haldwani a day in advance."
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
      question: "What is the best time to do the Pindari Glacier Trek?",
      answer: "The best time to do the Pindari Glacier Trek is typically during the Summer season. It offers the most stable weather and clearest views."
    },
    {
      question: "How difficult is the Pindari Glacier Trek?",
      answer: "The Pindari Glacier Trek is graded as Moderate. Prior fitness preparation is highly recommended to comfortably enjoy the trail."
    },
    {
      question: "What is the maximum altitude reached?",
      answer: "The maximum altitude reached during the Pindari Glacier Trek is 12300 FT."
    },
    {
      question: "Is this trek safe for beginners?",
      answer: "For a Moderate trek, fit beginners can attempt it if it's easy-moderate. However, difficult grades require prior trekking experience and good physical stamina."
    },
    {
      question: "Do I need to carry my own food?",
      answer: "No, nutritious meals are provided during the trek as part of the inclusions. We ensure you are well-fed and energized."
    },
    {
      question: "How difficult is the Pindari Glacier Trek?",
      answer: "The trek is graded as Moderate. Ensure you meet the fitness criteria before booking."
    },
    {
      question: "What is the maximum altitude?",
      answer: "You will reach a maximum altitude of 12300 FT."
    }
  ]
};
