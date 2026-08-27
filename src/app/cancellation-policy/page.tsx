import { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Cancellation Policy | Xplore The Dreams",
  description: "Cancellation policy for expeditions with Xplore The Dreams.",
};

export default function CancellationPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--color-paper)] pt-32 pb-24 px-6 md:px-12">
      <ScrollToTop />
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] mb-8">
          Cancellation <span className="italic font-light">Policy</span>
        </h1>
        <p className="text-[var(--color-ink)]/50 font-sans text-sm tracking-widest uppercase mb-16">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-headings:text-[var(--color-ink)] prose-p:font-sans prose-p:font-light prose-p:text-[var(--color-ink)]/70 prose-a:text-[var(--color-primary)] prose-li:text-[var(--color-ink)]/70 prose-li:font-sans prose-li:font-light max-w-none">
          <p className="font-semibold text-lg mb-8">*Cancellation &amp; Refund Policy at &quot;XTD - Xplore The Dreams&quot;*</p>

          <h2>1. Cancellation policy</h2>
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

          <h2>2. Trek Voucher or Refund</h2>
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

          <h2>3. Date Change Policy</h2>
          <p>
            Trek date request should be 7 days prior to the trek date.
          </p>
          <ul>
            <li>One time trek date change will be free, Second time onwards it will be charged to an additional cost of 10% of the total invoice amount.</li>
            <li>Once the Date change is done then booking is not eligible for cancellation.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
