import { DetailedTrek } from "@/types/detailed-trek";

export const kedarnathDetails: DetailedTrek = {
  slug: "kedarnath-yatra",
  name: "Kedarnath Yatra",
  location: "Uttarakhand",
  duration: "4 Days",
  maxAltitude: "11755 FT",
  distance: "36 km (trekking) + driving",
  grade: "Moderate to Difficult",
  price: 12000,
  baseCamp: "Haridwar/Dehradun",
  season: "Summer | Autumn",
  months: "May | June | September | October | November",
  railHead: "Haridwar/Rishikesh",
  airport: "Jolly Grant Airport, Dehradun",
  trailType: "Pilgrimage Route | Deep Himalayan trek.",
  image: "https://images.unsplash.com/photo-1626714486981-9b0c95021db9?q=80&w=2500",
  overview: {
    description: [
      "The Kedarnath Yatra is a profound pilgrimage to one of the twelve Jyotirlingas of Lord Shiva. Located at a staggering altitude of 11,755 feet in the Garhwal Himalayas, the ancient stone temple stands majestically against the snow-capped Kedarnath peaks.",
      "The journey demands a steep 18km trek starting from Gaurikund, alongside the rushing Mandakini river. It is an intense test of devotion and physical endurance, rewarding pilgrims with an incredibly powerful spiritual atmosphere."
    ],
    highlights: [
      { title: "The 18km Ascent", description: "Trek through rugged mountain paths, crossing waterfalls and deep gorges alongside the Mandakini river." },
      { title: "Kedarnath Temple", description: "Witness the magnificent 8th-century temple built by Adi Shankaracharya that survived the 2013 floods." },
      { title: "Bhairav Nath Temple", description: "A short 1km hike above Kedarnath to the guardian deity of the temple, offering stunning views of the valley." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Haridwar to Guptkashi/Sonprayag",
      details: [
        "Morning pickup from Haridwar/Dehradun.",
        "Drive approximately 200 km to Guptkashi or Sonprayag.",
        "Check into hotel and rest to prepare for the trek."
      ]
    },
    {
      day: 2,
      title: "Guptkashi/Sonprayag to Kedarnath",
      details: [
        "Early morning drive to Gaurikund.",
        "Begin the steep 18km trek to Kedarnath. The trek takes about 7-9 hours on average.",
        "Reach Kedarnath in the evening, check into your camp/guesthouse.",
        "Attend the mesmerizing evening Aarti at the temple."
      ]
    },
    {
      day: 3,
      title: "Kedarnath Darshan and trek down to Guptkashi",
      details: [
        "Wake up early for the morning Darshan at the temple.",
        "Optional 1km hike to Bhairav Nath temple for panoramic valley views.",
        "Begin the 18km descent back to Gaurikund.",
        "Drive back to Guptkashi/Sonprayag for the night."
      ]
    },
    {
      day: 4,
      title: "Guptkashi to Haridwar",
      details: [
        "Check out from the hotel and drive back to Haridwar.",
        "En route visit Devprayag or Rishikesh if time permits.",
        "Drop off at Haridwar railway station in the evening."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 12 years. Strict fitness required for the steep trek.",
    fitnessCriteria: [
      "Ability to walk long distances on steep inclines.",
      "Stamina to trek 18km in a single day."
    ],
    healthAwareness: [
      "Altitude sickness can be severe. Proper hydration and acclimatization are required."
    ]
  },
  howToReach: {
    meetingPlace: "Haridwar Railway Station",
    dropOff: "Haridwar Railway Station",
    options: [
      "Train/Bus to Haridwar from New Delhi.",
      "Fly to Dehradun (Jolly Grant) and take a cab to Haridwar."
    ]
  },
  costTerms: {
    inclusions: [
      "Accommodation in standard hotels/guesthouses.",
      "Daily Breakfast and Dinner.",
      "Dedicated transport (Innova/Tempo Traveler)."
    ],
    exclusions: [
      "Helicopter tickets, pony/palki charges.",
      "Lunches and personal expenses."
    ]
  },
  essentials: {
    basicGear: [
      "Heavy woolen clothing.",
      "Good quality trekking shoes with ankle support.",
      "Raincoat/Poncho.",
      "Personal first aid kit with AMS medication."
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 30 days", refundOptions: ["90% refund"] },
      { timeFrame: "15 to 30 days", refundOptions: ["50% refund"] },
      { timeFrame: "Less than 15 days", refundOptions: ["No refund"] }
    ],
    emergencyCases: "Rescheduling allowed up to 1 year for medical emergencies.",
    notes: ["Helicopter refunds are entirely subject to the aviation operator's policy."]
  },
  faqs: [
    {
      question: "Can I book a helicopter directly at Guptkashi?",
      answer: "It is highly recommended to book helicopter tickets online well in advance via the official IRCTC portal, as on-the-spot bookings are extremely rare due to high demand."
    },
    {
      question: "How cold does it get at night?",
      answer: "Temperatures can drop below freezing (0 to -5 degrees Celsius) at night, even in summer months like May and June."
    }
  ]
};
