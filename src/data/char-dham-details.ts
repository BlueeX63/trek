import { DetailedTrek } from "@/types/detailed-trek";

export const charDhamDetails: DetailedTrek = {
  slug: "char-dham-yatra",
  name: "Char Dham Yatra",
  location: "Uttarakhand",
  duration: "11 Days",
  maxAltitude: "11755 FT",
  distance: "Extensive Driving + 42 km Trekking (Total)",
  grade: "Moderate",
  price: 35000,
  baseCamp: "Haridwar/Dehradun",
  season: "Summer | Autumn",
  months: "May | June | September | October | November",
  railHead: "Haridwar/Rishikesh",
  airport: "Jolly Grant Airport, Dehradun",
  trailType: "Major Pilgrimage Route | Multi-day road trip with significant high-altitude trekking.",
  image: "https://images.unsplash.com/photo-1513689125086-6c432170e843?q=80&w=2000",
  overview: {
    description: [
      "The Char Dham Yatra is the most revered pilgrimage circuit in Hinduism, covering four divine sites nestled high in the Garhwal Himalayas: Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      "This 11-day epic journey traces the sources of the sacred rivers Yamuna and Ganga, culminating in profound spiritual experiences at the temples of Lord Shiva and Lord Vishnu. It is a journey that purifies the soul while testing physical endurance through steep Himalayan trails."
    ],
    highlights: [
      { title: "Yamunotri & Gangotri", description: "Visit the sources of India's most sacred rivers. Trek 6km to the Yamunotri temple and drive to the stunning Gangotri shrine." },
      { title: "Kedarnath Trek", description: "A deeply challenging but rewarding 18km trek to the Kedarnath temple, surrounded by massive snow-clad peaks." },
      { title: "Badrinath & Mana", description: "Darshan at Badrinath and a visit to Mana, the last Indian village on the Indo-Tibet border." }
    ]
  },
  itinerary: [
    {
      day: 1,
      title: "Haridwar to Barkot",
      details: [
        "Pick up from Haridwar/Dehradun and drive to Barkot via Mussoorie.",
        "Check into the hotel/camp in Barkot for an overnight stay."
      ]
    },
    {
      day: 2,
      title: "Barkot to Yamunotri to Barkot",
      details: [
        "Drive to Janki Chatti, then begin the 6km trek to Yamunotri.",
        "Cook rice in the hot springs (Surya Kund), take Darshan, and trek back down.",
        "Return to Barkot for the night."
      ]
    },
    {
      day: 3,
      title: "Barkot to Uttarkashi",
      details: [
        "Drive from Barkot to Uttarkashi.",
        "Visit the famous Vishwanath Temple in the evening.",
        "Overnight stay in Uttarkashi."
      ]
    },
    {
      day: 4,
      title: "Uttarkashi to Gangotri to Uttarkashi",
      details: [
        "Early morning drive to Gangotri via the beautiful Harsil valley.",
        "Holy dip in the freezing Bhagirathi river and Darshan at Gangotri Temple.",
        "Drive back to Uttarkashi."
      ]
    },
    {
      day: 5,
      title: "Uttarkashi to Guptkashi",
      details: [
        "Long drive from Uttarkashi to Guptkashi.",
        "Rest and prepare for the Kedarnath trek.",
        "Overnight stay in Guptkashi."
      ]
    },
    {
      day: 6,
      title: "Guptkashi to Kedarnath",
      details: [
        "Drive to Sonprayag/Gaurikund early morning.",
        "Start the 18km trek to Kedarnath. Option to hire mules or helicopters.",
        "Evening Aarti and overnight stay in Kedarnath."
      ]
    },
    {
      day: 7,
      title: "Kedarnath to Guptkashi",
      details: [
        "Morning Darshan at the Kedarnath temple.",
        "Trek 18km back down to Gaurikund and drive to Guptkashi for the night."
      ]
    },
    {
      day: 8,
      title: "Guptkashi to Badrinath",
      details: [
        "Drive from Guptkashi to Badrinath through winding mountain roads.",
        "Check into hotel. Evening visit to the Badrinath temple."
      ]
    },
    {
      day: 9,
      title: "Badrinath Darshan and drive to Pipalkoti",
      details: [
        "Morning bath in Tapt Kund and Darshan at Badrinath.",
        "Visit Mana Village (Vyas Gufa, Ganesh Gufa, Bhim Pul).",
        "Drive down to Pipalkoti or Srinagar for the night."
      ]
    },
    {
      day: 10,
      title: "Pipalkoti to Haridwar",
      details: [
        "Drive back to Haridwar. En route visit Devprayag (confluence of Alaknanda and Bhagirathi).",
        "Tour concludes with a drop-off at Haridwar railway station."
      ]
    }
  ],
  eligibility: {
    ageRequirement: "Minimum 12 years. High stamina is required due to back-to-back travel and trekking.",
    fitnessCriteria: [
      "Ability to handle long mountain drives (6-8 hours a day).",
      "Stamina to trek 18km in a single day at high altitude."
    ],
    healthAwareness: [
      "Strictly not recommended for individuals with severe cardiac or respiratory issues."
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
      "Dedicated transport (Innova/Tempo Traveler) for the entire 10 days.",
      "Toll, parking, and driver allowances."
    ],
    exclusions: [
      "Helicopter tickets, pony/palki charges.",
      "VIP Darshan tickets.",
      "Lunches and personal expenses."
    ]
  },
  essentials: {
    basicGear: [
      "Heavy woolen clothing (temperatures can drop below freezing at Kedarnath).",
      "Good quality trekking shoes.",
      "Umbrella/Raincoat.",
      "Personal first aid kit with altitude sickness and motion sickness pills."
    ]
  },
  cancellation: {
    policies: [
      { timeFrame: "Prior to 30 days", refundOptions: ["90% refund"] },
      { timeFrame: "15 to 30 days", refundOptions: ["50% refund"] },
      { timeFrame: "Less than 15 days", refundOptions: ["No refund"] }
    ],
    emergencyCases: "Rescheduling allowed up to 1 year for medical emergencies with a nominal fee.",
    notes: ["Helicopter refunds are entirely subject to the aviation operator's policy."]
  },
  faqs: [
    {
      question: "Is it safe for elderly people?",
      answer: "Elderly people frequently complete the Char Dham Yatra. However, they must use mules, palkis, or helicopters for the trekking portions and consult a doctor prior to the trip."
    },
    {
      question: "Are VIP Darshan tickets included?",
      answer: "No, VIP Darshan tickets must be procured directly by the traveler if desired."
    }
  ]
};
