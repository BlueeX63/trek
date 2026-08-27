export interface ItineraryDay {
  day: number;
  title: string;
  details: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Highlight {
  title?: string;
  description: string;
}

export interface DetailedTrek {
  slug: string;
  name: string;
  location: string;
  duration: string;
  maxAltitude: string;
  distance: string;
  grade: string;
  price: number;
  baseCamp: string;
  season: string;
  months: string;
  railHead: string;
  airport: string;
  trailType: string;
  image?: string;
  
  overview: {
    description: string[];
    highlights: Highlight[];
  };
  
  itinerary: ItineraryDay[];
  
  eligibility?: {
    ageRequirement: string;
    fitnessCriteria: string[];
    healthAwareness: string[];
  };
  
  howToReach?: {
    meetingPlace: string;
    dropOff: string;
    options: string[];
  };
  
  costTerms?: {
    inclusions: string[];
    exclusions: string[];
  };
  
  essentials?: {
    basicGear: string[];
  };
  
  cancellation?: {
    policies: { timeFrame: string; refundOptions: string[] }[];
    emergencyCases: string;
    notes: string[];
  };

  faqs: FAQ[];
}
