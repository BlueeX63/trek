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
          Terms and <span className="italic font-light">Conditions</span>
        </h1>
        <p className="text-[var(--color-ink)]/50 font-sans text-sm tracking-widest uppercase mb-16">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-headings:text-[var(--color-ink)] prose-p:font-sans prose-p:font-light prose-p:text-[var(--color-ink)]/70 prose-a:text-[var(--color-primary)] prose-li:text-[var(--color-ink)]/70 prose-li:font-sans prose-li:font-light max-w-none">
          <p className="font-semibold text-lg mb-8">*Trek terms and conditions at &quot;XTD - Xplore The Dreams&quot;*</p>

          <h2>1. Travel Itinerary</h2>
          <p>
            All Itineraries are created and designed by &quot;Xplore The Dreams&quot; Mountain Experts. The time and distance mentioned are approx. Mountain Experts, Trek leader and Trek Guide have authority to change itinerary if circumstances or current situation is beyond our controls such as Natural calamity, landslides, vehicle breakdown, adverse weather condition, or any other circumstances.
          </p>

          <h2>2. Offers and Discounts</h2>
          <p>
            Company offers special offers and discounts time to time which are only applicable on current trek cost. Already reserved customers (after purchase has been made) are not eligible for current discounts and offers on purchased product.
          </p>

          <h2>3. Payment Terms</h2>
          <p>
            We have most feasible payment policy, which is as mentioned below:
          </p>
          <ul>
            <li>Pay 20% Advance of the total amount at the time of booking to reserve your seats.</li>
            <li>Pay 80% Remaining amount of the Invoice 7 days before the travel date.</li>
            <li>If failing to complete payment in given time period, company reserves all the right to cancel your booking or allot your slot to other customers without any prior notice and information, also, company shall not be liable for any refund.</li>
          </ul>

          <h2>4. Price and Costing</h2>
          <p>
            All prices that are mentioned on our website are based on current prices. Xplore The Dreams reserves all right to change already published prices without any prior notice. The cost of any travel product can be changed by company anytime unless you have secured your slot.
          </p>
          <p>
            <strong>Kindly Note:</strong> Even the quoted price at the time of enquiry can be changed unless booked within given time period.
          </p>

          <h2>5. Cancellation policy</h2>
          <p>
            We brings you a most convenient Cancellation policy as mentioned below:
          </p>
          <ul>
            <li>Cancellation Prior 25 days from trek start date 10% deduction of the total invoice amount, 90% is refunded as trek coupon with 1 year validity.</li>
            <li>Cancellation Prior 15 days from the trek start date 30% deduction of the total invoice amount, 70% is refunded as trek coupon with 1 year validity.</li>
            <li>Cancellation Prior 10 days from the trek start date 50% deduction of the total invoice amount, 50% is refunded as trek coupon with 1 year validity.</li>
            <li>Cancellation prior 7 days from the trek start date 100% deduction of the total invoice amount as Xplore The Dreams have made all the arrangements, and we are all set to take you to the trek.</li>
            <li>All the cancellation must be in written. No cancellation will be considered unless received by confirmation mail.</li>
          </ul>

          <h2>6. Trek Voucher or Refund</h2>
          <p>
            Cancelling your trek or trip with Xplore The Dreams in given time period will offer you a full refund as per cancellations terms and conditions in form of Trek or Trip Coupon.
          </p>
          <ul>
            <li>Trek coupon will be valid for 12 months from the date of cancellation.</li>
            <li>Trek coupon can be used for any trek or trips oraganised by Xplore The Dreams.</li>
            <li>Trek coupon amount will not be used for booking new slots.</li>
            <li>To use Trek coupon, its mandatory to inform us before 10 days of your travel date, last minute request will not be prioritised your reservation will depends upon avaibility of slots on that date.</li>
          </ul>
          <p>
            <strong>NOTE:</strong> Cash Refund is only applicable if Xplore The Dreams cancels the trek or trip.
          </p>

          <h2>7. Date Change Policy</h2>
          <p>
            Trek date request should be 7 days prior to the trek date.
          </p>
          <ul>
            <li>One time trek date change will be free, Second time onwards it will be charged to an additional cost of 10% of the total invoice amount.</li>
            <li>Once the Date change is done then booking is not eligible for cancellation.</li>
          </ul>

          <h2>8. Privacy Policy</h2>
          <p>
            At Xplore The Dreams one of our main priorities is the privacy of our visitors. The privacy policy applies only to are online activities. This policy is not applicable to any information collected offline or via channels other then this website. Information we collect and the reason&apos;s why your are asked to provided, will be made clear to at the point we ask you to provide your personal information.
          </p>

          <h2>9. Transportation</h2>
          <p>
            The vehicle assigned as per the group size; we use Bolero, Tempo Traveller, Dzire, Innova, Ertiga &amp; Buses depending upon group sizes.
          </p>
          <ul>
            <li>All travellers are requested to handle there luggage/ personal belongings carefully and only you will be responsible for your luggage.</li>
            <li>Please make sure you have checked and ensured that your luggage is safe and not left in vehicle itself.</li>
          </ul>

          <h2>10. Pickup &amp; Dropoff Locations</h2>
          <p>
            The pickup locations are selected keeping and mind one particular centralized point, which is convenient for all the trekkers coming from the Airport, Railway Station or Bus Stand.
          </p>
          <ul>
            <li>Pickup &amp; Dropoff Location is closed to railway or bus stations.</li>
            <li>In very special cases 30 minutes buffer time giving to the trekkers in case they are delayed due to any reason. The company will not be responsible for bearing/refunding any cost if one failing to reach the destination on the given time frame. He will be responsible to reaching the base camp on their own and at his own cost.</li>
          </ul>

          <h2>11. Health and Medical Condition</h2>
          <p>
            One should must be notify Xplore The Dreams in written at the time of booking of any medical condition, Physical challenge or any other mental challenge that may affect the fitness to travel.
          </p>
          <ul>
            <li>Smoking or Drinking alcohol during the excursion is strictly forbidden. If you are found to violate these rules, you will be banned from participalting in the trip and Xplore The Dreams team have full authority to immediately cancel the trek with any prior information or notice.</li>
            <li>If one fails to notify the company about health and medical condition it may result in cancellation and being refused to travel or take to the adventure and it also may result in 100% cancellation charges.</li>
          </ul>

          <h2>12. Insurance</h2>
          <p>
            Xplore The Dreams does not provide any travel, adventure or medical insurance nor do we charges the same charge from our customer.
          </p>
          <ul>
            <li>We strongly recommend each and every trekkers mandatorily get insurance.</li>
            <li>Our team will be happy to assist you in getting your insurance done from the third party insurance company.</li>
          </ul>

          <h2>13. Complaints &amp; Dispute</h2>
          <p>
            If you have any issues or any challenges during your adventure with us, inform us the relevant concerned person immediately when on trek, also you can inform your trek leader about the same or directly reach us out <a href="mailto:xplorethedreams@gmail.com">xplorethedreams@gmail.com</a> so that we can resolve your issue at the earliest possible.
          </p>
          <p className="mt-8 font-medium italic">
            All information given by the company, whether in written or orally, is to the best of the companies knowledge and believed correct at the time given and is given in good faith.
          </p>
        </div>
      </div>
    </main>
  );
}
