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
  { category: "Family Treks", question: "How does my family get updated about my Trek?", answer: "Our expedition leaders carry satellite communication devices. We send daily evening updates to a designated emergency contact." }
];

export default function ExpeditionFAQ() {
  const [activeCategory, setActiveCategory] = useState("Beginners Guide");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(faq => faq.category === activeCategory);

  return (
    <section className="bg-[#FDFBF7] py-24 px-6 md:px-12 border-t border-[#1B4332]/10 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#F4A261] font-bold tracking-widest uppercase text-sm mb-4 block">
            Briefing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1B4332] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#0A1910]/70 font-medium">Everything you need to know before you go.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-sm ${
                activeCategory === cat 
                  ? "bg-[#1B4332] text-white border-2 border-[#1B4332] scale-105" 
                  : "bg-white text-[#1B4332]/70 border-2 border-[#1B4332]/10 hover:border-[#1B4332]/30 hover:text-[#1B4332]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col border-t border-[#1B4332]/10">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b border-[#1B4332]/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-display font-bold text-[#1B4332] group-hover:text-[#F4A261] transition-colors pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 text-[#1B4332]/40 group-hover:text-[#F4A261] transition-colors">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                    <p className="pb-6 text-[#0A1910]/70 font-medium leading-relaxed">
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
