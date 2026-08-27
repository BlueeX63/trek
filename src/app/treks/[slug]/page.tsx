import { notFound } from "next/navigation";
import { valleyOfFlowersDetails } from "@/data/valley-of-flowers-details";
import { rupinPassDetails } from "@/data/rupin-pass-details";
import { kedarkanthaDetails } from "@/data/kedarkantha-details";
import { suryaTopDetails } from "@/data/surya-top-details";
import { pinBhabaPassDetails } from "@/data/pin-bhaba-pass-details";
import { hamptaPassDetails } from "@/data/hampta-pass-details";
import { bhriguLakeDetails } from "@/data/bhrigu-lake-details";
import { buranGhatiDetails } from "@/data/buran-ghati-details";
import { friendshipPeakDetails } from "@/data/friendship-peak-details";
import { pinParvatiDetails } from "@/data/pin-parvati-details";
import { kanamoPeakDetails } from "@/data/kanamo-peak-details";
import { chandrakhaniPassDetails } from "@/data/chandrakhani-pass-details";
import { yunamPeakDetails } from "@/data/yunam-peak-details";
import { beasKundDetails } from "@/data/beas-kund-details";
import { kareriLakeDetails } from "@/data/kareri-lake-details";
import { sarPassDetails } from "@/data/sar-pass-details";
import { deoTibbaDetails } from "@/data/deo-tibba-details";
import { kashmirGreatLakesDetails } from "@/data/kashmir-great-lakes-details";
import { tarsarMarsarDetails } from "@/data/tarsar-marsar-details";
import { doodhpathriTrekDetails } from "@/data/doodhpathri-trek-details";
import { nafranValleyDetails } from "@/data/nafran-valley-details";
import { roopkundDetails } from "@/data/roopkund-details";
import { panwaliKanthaDetails } from "@/data/panwali-kantha-details";
import { gulabiKanthaDetails } from "@/data/gulabi-kantha-details";
import { brahmatalDetails } from "@/data/brahmatal-details";
import { pangarchullaPeakDetails } from "@/data/pangarchulla-peak-details";
import { gaumukhTapovanDetails } from "@/data/gaumukh-tapovan-details";
import { kuariPassDetails } from "@/data/kuari-pass-details";
import { ranthanKharakDetails } from "@/data/ranthan-kharak-details";
import { choptaChandrashilaDeoriatalDetails } from "@/data/chopta-chandrashila-deoriatal-details";
import { choptaChandrashila3DayDetails } from "@/data/chopta-chandrashila-3-day-details";
import { gaumukhGangotriDetails } from "@/data/gaumukh-gangotri-details";
import { baliPassDetails } from "@/data/bali-pass-details";
import { dayaraBugyalDetails } from "@/data/dayara-bugyal-details";
import { aliBedniBugyalDetails } from "@/data/ali-bedni-bugyal-details";
import { harKiDunDetails } from "@/data/har-ki-dun-details";
import { aanchaTopDetails } from "@/data/aancha-top-details";
import { nagTibbaDetails } from "@/data/nag-tibba-details";
import { deobanDetails } from "@/data/deoban-details";
import { chirbatiyaDetails } from "@/data/chirbatiya-details";
import { binsarDetails } from "@/data/binsar-details";
import { bagjiBugyalDetails } from "@/data/bagji-bugyal-details";
import { phularaRidgeDetails } from "@/data/phulara-ridge-details";
import { dudhatoliDetails } from "@/data/dudhatoli-details";
import { satopanthLakeDetails } from "@/data/satopanth-lake-details";
import { satopanthPeakDetails } from "@/data/satopanth-peak-details";
import { kedarTalDetails } from "@/data/kedar-tal-details";
import { audensColDetails } from "@/data/audens-col-details";
import { panchkedarDetails } from "@/data/panchkedar-details";
import { muktaTopDetails } from "@/data/mukta-top-details";
import { doditalDarwaPassDetails } from "@/data/dodital-darwa-pass-details";
import { blackPeakDetails } from "@/data/black-peak-details";
import { baginiGlacierDetails } from "@/data/bagini-glacier-details";
import { adiKailashDetails } from "@/data/adi-kailash-details";
import { yogaMeditationRetreatDetails } from "@/data/yoga-meditation-retreat-details";
import { rudragairaPeakDetails } from "@/data/rudragaira-peak-details";
import { pindariGlacierDetails } from "@/data/pindari-glacier-details";
import { treks } from "@/data/treks";
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

export default async function TrekDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let trekData: DetailedTrek;

  if (slug === "valley-of-flowers") {
    const vof: any = { ...valleyOfFlowersDetails };
    trekData = { 
      ...vof,
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2500&auto=format&fit=crop",
      overview: {
        description: [vof.overview.description],
        highlights: vof.overview.highlights.map((h: string) => ({ description: h }))
      }
    };
  } else if (slug === "rupin-pass") {
    trekData = rupinPassDetails;
  } else if (slug === "kedarkantha") {
    trekData = kedarkanthaDetails;
  } else if (slug === "surya-top") {
    trekData = suryaTopDetails;
  } else {
    // Look up basic info from treks.ts
    const basicTrek = treks.find(t => t.slug === slug);
    if (!basicTrek) {
      notFound();
    }
    
    // Generic itinerary generator based on duration
    const genItinerary = Array.from({ length: basicTrek.duration.days }).map((_, i) => ({
      day: i + 1,
      title: i === 0 ? `Arrival at ${basicTrek.location} Base Camp` : i === basicTrek.duration.days - 1 ? "Departure and Journey Back" : `Trekking Day ${i}`,
      details: [
        i === 0 ? "Acclimatization, team briefing, and preparation." : i === basicTrek.duration.days - 1 ? "Descent and departure to onward destinations." : "Trek through scenic trails, ascending towards the next campsite.",
        "Enjoy panoramic views of the Himalayan ranges.",
        "Overnight stay in camps or local homestays."
      ]
    }));

    // Create a fallback detailed object mapping basicTrek to the detailed schema
    trekData = {
      slug: basicTrek.slug,
      name: basicTrek.name,
      location: basicTrek.location,
      duration: `${basicTrek.duration.days} days`,
      maxAltitude: `${basicTrek.altitude} ft`,
      distance: "Detailed distance TBD",
      grade: basicTrek.difficulty,
      price: basicTrek.price,
      baseCamp: basicTrek.location,
      season: basicTrek.season.join(", "),
      months: "Check fixed departures",
      railHead: `Nearest station to ${basicTrek.region}`,
      airport: `Nearest airport in ${basicTrek.region}`,
      trailType: "Standard Mountain Trail",
      image: basicTrek.heroImage,
      overview: {
        description: [
          `Experience the breathtaking ${basicTrek.name} trek in the majestic ${basicTrek.region} region. This ${basicTrek.duration.days}-day adventure takes you to an impressive altitude of ${basicTrek.altitude} feet.`,
          `Known for its ${basicTrek.difficulty.toLowerCase()} grade, this trek offers a perfect blend of thrilling ascents and serene natural beauty. Trekking through the ${basicTrek.location} landscape, you'll encounter pristine valleys, dense forests, and potentially snow-capped peaks.`,
          `Our expert guides ensure a safe and memorable journey. Make sure to prepare adequately for the altitude and weather conditions typical of the ${basicTrek.season.join(" and ")} seasons.`
        ],
        highlights: [
          { title: "Scenic Trails", description: `Explore the untouched beauty of ${basicTrek.location}.` },
          { title: "High Altitude Experience", description: `Reach a maximum altitude of ${basicTrek.altitude} ft.` },
          { title: "Immersive Adventure", description: `Enjoy ${basicTrek.duration.days} days of premium trekking with expert support.` }
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
        meetingPlace: `Designated pickup point in ${basicTrek.region} (Usually main bus stand or railway station).`,
        dropOff: `Same as pickup point.`,
        options: [
          `Take an overnight bus from major cities (Delhi/Chandigarh/Dehradun) to ${basicTrek.region}.`,
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
          question: `What is the Best Time to do the ${basicTrek.name}?`,
          answer: `The best seasons are ${basicTrek.season.join(" and ")}. During these times, the weather is most stable and the views are clear.`
        },
        {
          question: `How difficult is the ${basicTrek.name}?`,
          answer: `This trek is rated as ${basicTrek.difficulty}. You should prepare accordingly based on the fitness criteria.`
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
    <div className="bg-[var(--color-paper)] min-h-screen">
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
    </div>
  );
}
