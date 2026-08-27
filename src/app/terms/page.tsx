import { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Terms of Service | Xplore The Dreams",
  description: "Terms and conditions for booking expeditions with Xplore The Dreams.",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--color-paper)] pt-32 pb-24 px-6 md:px-12">
      <ScrollToTop />
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] mb-8">
          Terms of <span className="italic font-light">Service</span>
        </h1>
        <p className="text-[var(--color-ink)]/50 font-sans text-sm tracking-widest uppercase mb-16">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-headings:text-[var(--color-ink)] prose-p:font-sans prose-p:font-light prose-p:text-[var(--color-ink)]/70 prose-a:text-[var(--color-primary)] prose-li:text-[var(--color-ink)]/70 prose-li:font-sans prose-li:font-light max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing our website or booking an expedition with Xplore The Dreams, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2>2. Booking and Payments</h2>
          <p>
            To secure your spot on an expedition, a deposit or full payment is required at the time of booking. All prices are subject to change without prior notice, but confirmed bookings will not be affected by price increases.
          </p>

          <h2>3. Cancellation Policy</h2>
          <p>
            Cancellations must be made in writing. Our standard cancellation policy applies unless specified otherwise on the specific expedition page:
          </p>
          <ul>
            <li>More than 30 days before departure: 90% refund.</li>
            <li>15 to 30 days before departure: 50% refund.</li>
            <li>Less than 15 days before departure: No refund.</li>
          </ul>

          <h2>4. Health and Fitness</h2>
          <p>
            Our expeditions require varying levels of physical fitness. It is your responsibility to ensure you meet the fitness requirements for your chosen trek and to consult with a physician if necessary. We reserve the right to refuse participation to anyone deemed medically unfit for the journey.
          </p>

          <h2>5. Itinerary Changes</h2>
          <p>
            Mountain weather and conditions are unpredictable. We reserve the right to alter the itinerary or cancel the expedition for safety reasons. In such events, we will make every effort to provide a suitable alternative or apply our cancellation policies.
          </p>
        </div>
      </div>
    </main>
  );
}
