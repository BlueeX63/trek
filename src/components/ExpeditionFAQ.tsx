"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_CATEGORIES = ["Beginners Guide", "Booking Guide", "Family Treks", "Rent", "Policies"];
const FAQS = [
  { category: "Beginners Guide", question: "How to choose the right trek?", answer: "Start by evaluating your fitness level and previous hiking experience. For beginners, we recommend treks classified as 'Easy' or 'Moderate' with lower altitudes and shorter daily walking distances. Our 'Suggest Me' feature can also help curate the perfect first experience." },
  { category: "Beginners Guide", question: "Can a beginner choose a tough trek?", answer: "We strongly advise against it. Tough treks require prior high-altitude experience, significant cardiovascular endurance, and mental resilience." },
  { category: "Beginners Guide", question: "What is the age limit for a beginner trekker?", answer: "Generally, our easy to moderate treks are suitable for ages 10 to 65, provided the individual is physically fit." },
  { category: "Booking Guide", question: "How do I confirm my booking?", answer: "Bookings are confirmed once a 30% advance payment is received. You will receive a detailed expedition dossier." },
  { category: "Booking Guide", question: "What is the cancellation policy?", answer: "Cancellations made 30 days before departure receive a 90% refund. Cancellations within 15 days are non-refundable but can be converted into credit for future treks." },
  { category: "Booking Guide", question: "Do you offer group discounts?", answer: "Yes, we offer a 5% discount for groups of 4 or more, and a 10% discount for groups of 8 or more." },
  { category: "Family Treks", question: "How does my family get updated about my Trek?", answer: "Our expedition leaders carry satellite communication devices. We send daily evening updates to a designated emergency contact." },
  { category: "Family Treks", question: "Are family treks safe for children under 10?", answer: "Yes, our family-specific trails are designed for younger participants. However, an accompanying adult is required at all times." },
  { category: "Rent", question: "Can I rent trekking gear instead of buying?", answer: "Absolutely. We offer premium quality rentals for jackets, trekking poles, sleeping bags, and crampons at all our basecamps." },
  { category: "Rent", question: "How do I book rental gear?", answer: "Rental gear can be pre-booked through your expedition dashboard after confirming your trek. We recommend booking at least 14 days in advance." },
  { category: "Policies", question: "What is your environmental policy?", answer: "We follow a strict Leave No Trace policy. All waste is carried back to basecamp, and we employ local clean-up initiatives every season." },
  { category: "Policies", question: "Is travel insurance mandatory?", answer: "Yes, high-altitude trekking insurance covering emergency helicopter evacuation is mandatory for all participants." }
];

export default function ExpeditionFAQ() {
  const [activeCategory, setActiveCategory] = useState("Beginners Guide");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = FAQS.filter(faq => faq.category === activeCategory);

  return (
    <section className="bg-[var(--color-paper)] py-24 px-6 md:px-12 border-t border-[var(--color-ink)]/10 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-8 h-[1px] bg-[var(--color-primary)]"></div>
             <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[var(--color-ink)]/50">
               Briefing
             </span>
             <div className="w-8 h-[1px] bg-[var(--color-primary)]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] mb-6">
            FAQ
          </h2>
          <p className="text-[var(--color-ink)]/60 font-sans font-light">Everything you need to know before you go.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-6 py-3 text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat 
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]" 
                  : "bg-transparent text-[var(--color-ink)]/75 border-[var(--color-ink)]/20 hover:border-[var(--color-ink)]/50 hover:text-[var(--color-ink)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col border-t border-[var(--color-ink)]/20">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b border-[var(--color-ink)]/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="w-full py-8 flex items-center justify-between text-left group cursor-pointer hover:cursor-pointer"
              >
                <span className={`text-xl md:text-2xl font-serif transition-colors pr-8 ${openIndex === index ? 'text-amber-800' : 'text-[var(--color-ink)] group-hover:text-[var(--color-ink)]/70'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transition-colors ${openIndex === index ? 'text-amber-800' : 'text-[var(--color-ink)]/40 group-hover:text-[var(--color-ink)]/70'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" strokeWidth={1} /> : <Plus className="w-5 h-5" strokeWidth={1} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[var(--color-ink)]/80 font-sans font-light leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
