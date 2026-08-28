import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import { supabase } from "@/lib/supabase";
import { DetailedTrek } from "@/types/detailed-trek";

import TrekHero from "@/components/trek-details/TrekHero";
import TrekQuickInfo from "@/components/trek-details/TrekQuickInfo";
import TrekStickyNav from "@/components/trek-details/TrekStickyNav";
import TrekOverview from "@/components/trek-details/TrekOverview";
import TrekItinerary from "@/components/trek-details/TrekItinerary";
import TrekEligibility from "@/components/trek-details/TrekEligibility";
import TrekHowToReach from "@/components/trek-details/TrekHowToReach";
import TrekCostTerms from "@/components/trek-details/TrekCostTerms";
import TrekEssentials from "@/components/trek-details/TrekEssentials";
import TrekCancellation from "@/components/trek-details/TrekCancellation";
import TrekFAQ from "@/components/trek-details/TrekFAQ";

export const revalidate = 0;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: basicTrek } = await supabase
    .from('treks')
    .select('name, region, duration_days, altitude, hero_image')
    .eq('slug', slug)
    .single();
  
  if (!basicTrek) {
    return { title: 'Trek Not Found' };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${basicTrek.name} Trek`,
    description: `Join the ${basicTrek.name} expedition in ${basicTrek.region}. A ${basicTrek.duration_days}-day trek reaching ${basicTrek.altitude} ft.`,
    openGraph: {
      title: `${basicTrek.name} | Xplore The Dreams`,
      description: `Experience the ${basicTrek.name} trek in ${basicTrek.region}.`,
      images: [basicTrek.hero_image, ...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${basicTrek.name} | Xplore The Dreams`,
      description: `Experience the ${basicTrek.name} trek in ${basicTrek.region}.`,
      images: [basicTrek.hero_image],
    },
  };
}

export default async function TrekDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { data: dbTrek } = await supabase
    .from('treks')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!dbTrek) {
    notFound();
  }

  // Generate fallback detailed info if it's not present
  const isBasicOnly = !dbTrek.overview || (Array.isArray(dbTrek.overview) && dbTrek.overview.length === 0) || (Object.keys(dbTrek.overview).length === 0);
  
  let trekData: DetailedTrek;

  if (!isBasicOnly) {
    trekData = {
      slug: dbTrek.slug,
      name: dbTrek.name,
      location: dbTrek.location,
      duration: `${dbTrek.duration_days} days`,
      maxAltitude: `${dbTrek.altitude} ft`,
      distance: dbTrek.distance,
      grade: dbTrek.difficulty,
      price: dbTrek.price,
      baseCamp: dbTrek.base_camp,
      season: dbTrek.season?.join(', '),
      months: dbTrek.months,
      railHead: dbTrek.rail_head,
      airport: dbTrek.airport,
      trailType: dbTrek.trail_type,
      image: dbTrek.hero_image,
      overview: dbTrek.overview,
      itinerary: dbTrek.itinerary,
      eligibility: dbTrek.eligibility,
      howToReach: dbTrek.how_to_reach,
      costTerms: dbTrek.cost_terms,
      essentials: dbTrek.essentials,
      cancellation: dbTrek.cancellation,
      faqs: dbTrek.faqs
    };
  } else {
    // Generic fallback itinerary generator based on duration
    const genItinerary = Array.from({ length: dbTrek.duration_days }).map((_, i) => ({
      day: i + 1,
      title: i === 0 ? `Arrival at ${dbTrek.location} Base Camp` : i === dbTrek.duration_days - 1 ? "Departure and Journey Back" : `Trekking Day ${i}`,
      details: [
        i === 0 ? "Acclimatization, team briefing, and preparation." : i === dbTrek.duration_days - 1 ? "Descent and departure to onward destinations." : "Trek through scenic trails, ascending towards the next campsite.",
        "Enjoy panoramic views of the Himalayan ranges.",
        "Overnight stay in camps or local homestays."
      ]
    }));

    // Create a fallback detailed object
    trekData = {
      slug: dbTrek.slug,
      name: dbTrek.name,
      location: dbTrek.location,
      duration: `${dbTrek.duration_days} days`,
      maxAltitude: `${dbTrek.altitude} ft`,
      distance: "Detailed distance TBD",
      grade: dbTrek.difficulty,
      price: dbTrek.price,
      baseCamp: dbTrek.location,
      season: dbTrek.season?.join(", "),
      months: "Check fixed departures",
      railHead: `Nearest station to ${dbTrek.region}`,
      airport: `Nearest airport in ${dbTrek.region}`,
      trailType: "Standard Mountain Trail",
      image: dbTrek.hero_image,
      overview: {
        description: [
          `Experience the breathtaking ${dbTrek.name} trek in the majestic ${dbTrek.region} region. This ${dbTrek.duration_days}-day adventure takes you to an impressive altitude of ${dbTrek.altitude} feet.`,
          `Known for its ${dbTrek.difficulty?.toLowerCase()} grade, this trek offers a perfect blend of thrilling ascents and serene natural beauty. Trekking through the ${dbTrek.location} landscape, you'll encounter pristine valleys, dense forests, and potentially snow-capped peaks.`,
          `Our expert guides ensure a safe and memorable journey. Make sure to prepare adequately for the altitude and weather conditions typical of the ${dbTrek.season?.join(" and ")} seasons.`
        ],
        highlights: [
          { title: "Scenic Trails", description: `Explore the untouched beauty of ${dbTrek.location}.` },
          { title: "High Altitude Experience", description: `Reach a maximum altitude of ${dbTrek.altitude} ft.` },
          { title: "Immersive Adventure", description: `Enjoy ${dbTrek.duration_days} days of premium trekking with expert support.` }
        ]
      },
      itinerary: genItinerary,
      eligibility: {
        ageRequirement: "Minimum 12 years. Prior trekking experience recommended for difficult/extreme grades.",
        fitnessCriteria: [
          "Sufficient stamina to jog 5 km in 30-40 mins without stress.",
          "Able to carry a 10-12 kg backpack if not offloading."
        ],
        healthAwareness: [
          "Pulse rate at rest must be between 60-100 bpm.",
          "Blood pressure should be normal (100-130 / 75-85).",
          "No history of severe asthma, heart problems, or epilepsy."
        ]
      },
      howToReach: {
        meetingPlace: `Designated pickup point in ${dbTrek.region} (Usually main bus stand or railway station).`,
        dropOff: `Same as pickup point.`,
        options: [
          `Take an overnight bus from major cities (Delhi/Chandigarh/Dehradun) to ${dbTrek.region}.`,
          `Hire a private cab or join shared taxis from the nearest railway station or airport.`
        ]
      },
      costTerms: {
        inclusions: [
          "Accommodation: Homestays and Camping on twin sharing basis.",
          "Meals: Highly nutritious Veg + Egg meals during the trek.",
          "Support: Mountaineering & First aid qualified Trek Leader, Guides, and Cook.",
          "Equipment: Sleeping bags, mattresses, tents, dining/toilet tents.",
          "First aid: Comprehensive medical kit, oxygen cylinder, stretcher.",
          "Permits: All necessary forest permits and entry fees."
        ],
        exclusions: [
          "Transportation to and from the base camp (unless booked as add-on).",
          "Off-loading of personal backpacks (available as an add-on).",
          "Personal trekking gear (shoes, jackets, sticks).",
          "Any personal expenses or insurance."
        ]
      },
      essentials: {
        basicGear: [
          "Backpack with rain cover (50 - 60 ltr)",
          "Day pack (20 - 30 ltr) if offloading main bag",
          "Sturdy trekking shoes and walking stick",
          "Water Bottles / Hydration pack (2 liters)",
          "Waterproof gloves and warm layers (fleece/down jacket)",
          "Poncho or high-quality raincoat",
          "Personal Medical Kit and toiletries"
        ]
      },
      cancellation: {
        policies: [
          { timeFrame: "Prior to 25 days", refundOptions: ["5% deduction of trek fee", "100% cash voucher for 1 year"] },
          { timeFrame: "Between 24 and 15 days", refundOptions: ["30% deduction of trek fee", "85% cash voucher for 1 year"] },
          { timeFrame: "Less than 9 days", refundOptions: ["No cash refund", "10% cash voucher for 1 year"] }
        ],
        emergencyCases: "In case of a medical emergency (with valid documents), 90% refund and 10% voucher provided.",
        notes: [
          "To reschedule a trek, a 30% rescheduling fee applies.",
          "Transferring a trek to a friend is possible subject to eligibility."
        ]
      },
      faqs: [
        {
          question: `What is the Best Time to do the ${dbTrek.name}?`,
          answer: `The best seasons are ${dbTrek.season?.join(" and ")}. During these times, the weather is most stable and the views are clear.`
        },
        {
          question: `How difficult is the ${dbTrek.name}?`,
          answer: `This trek is rated as ${dbTrek.difficulty}. You should prepare accordingly based on the fitness criteria.`
        },
        {
          question: `What is the maximum altitude reached on this trek?`,
          answer: `The maximum altitude reached during the ${dbTrek.name} is ${dbTrek.altitude} ft.`
        },
        {
          question: `Is the ${dbTrek.name} safe for beginners?`,
          answer: `For a ${dbTrek.difficulty} trek, appropriate preparation is required. Beginners can attempt easy to moderate treks, but higher grades require prior experience.`
        },
        {
          question: `Do I need to carry my own food?`,
          answer: `No, highly nutritious vegetarian meals (along with eggs) are provided during the trek as part of the package.`
        },
        {
          question: `What kind of accommodation is provided?`,
          answer: `We provide comfortable camping in tents and occasionally homestays/guesthouses on a twin-sharing basis.`
        },
        {
          question: `Is there mobile network connectivity on the trail?`,
          answer: `Network connectivity is usually available at the base camp, but expect to be completely disconnected while on the trail.`
        }
      ]
    };
  }

  // Derive stats array from the object
  const stats = [
    { label: "Base Camp", value: trekData.baseCamp },
    { label: "Season", value: trekData.season },
    { label: "Months", value: trekData.months },
    { label: "Rail Head", value: trekData.railHead },
    { label: "Airport", value: trekData.airport },
    { label: "Trail Type", value: trekData.trailType },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--color-paper)]">
      <ScrollToTop />
      <TrekHero 
        title={trekData.name}
        subtitle="Himalayan Standard"
        image={trekData.image || ""}
      />
      
      <TrekQuickInfo 
        location={trekData.location}
        duration={trekData.duration}
        maxAltitude={trekData.maxAltitude}
        distance={trekData.distance}
        grade={trekData.grade}
        price={trekData.price}
      />

      <TrekStickyNav />

      <TrekOverview 
        trekName={trekData.name}
        description={trekData.overview.description}
        highlights={trekData.overview.highlights}
        stats={stats}
      />

      {trekData.itinerary && trekData.itinerary.length > 0 ? (
        <TrekItinerary itinerary={trekData.itinerary} />
      ) : (
        <section id="itinerary" className="w-full bg-[var(--color-ink)] py-32 scroll-mt-24 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[var(--color-paper)]/50 mb-4 block">Day by Day</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-paper)] mb-6">Itinerary Curating Soon</h2>
          <p className="text-[var(--color-paper)]/60 font-sans font-light max-w-md">The editorial details for this expedition are currently being finalized.</p>
        </section>
      )}

      {trekData.eligibility && (
        <TrekEligibility eligibility={trekData.eligibility} />
      )}

      {trekData.howToReach && (
        <TrekHowToReach howToReach={trekData.howToReach} />
      )}

      {trekData.costTerms && (
        <TrekCostTerms inclusions={trekData.costTerms.inclusions} exclusions={trekData.costTerms.exclusions} />
      )}

      {trekData.essentials && (
        <TrekEssentials essentials={trekData.essentials} />
      )}

      {trekData.cancellation && (
        <TrekCancellation cancellation={trekData.cancellation} />
      )}

      {trekData.faqs && trekData.faqs.length > 0 && (
         <TrekFAQ faqs={trekData.faqs} />
      )}
      
      {/* Spacer before footer if needed */}
      <div className="h-24 bg-[var(--color-paper)] border-t border-[var(--color-ink)]/10"></div>
    </main>
  );
}
