import { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Privacy Policy | Xplore The Dreams",
  description: "Privacy policy and data protection guidelines for Xplore The Dreams.",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--color-paper)] pt-32 pb-24 px-6 md:px-12">
      <ScrollToTop />
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-ink)] mb-8">
          Privacy <span className="italic font-light">Policy</span>
        </h1>
        <p className="text-[var(--color-ink)]/50 font-sans text-sm tracking-widest uppercase mb-16">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-headings:text-[var(--color-ink)] prose-p:font-sans prose-p:font-light prose-p:text-[var(--color-ink)]/70 prose-a:text-[var(--color-primary)] prose-li:text-[var(--color-ink)]/70 prose-li:font-sans prose-li:font-light max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            When you interact with Xplore The Dreams, we may collect personal information such as your name, email address, phone number, and physical fitness details necessary for expedition planning. This information is collected when you fill out forms, subscribe to our newsletter, or book a trek.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is primarily used to ensure your safety and comfort during our expeditions. We use your data to:
          </p>
          <ul>
            <li>Process bookings and manage logistics.</li>
            <li>Communicate important updates regarding your expedition.</li>
            <li>Send promotional materials, only if you have explicitly opted in.</li>
            <li>Improve our website and customer service experience.</li>
          </ul>

          <h2>3. Data Protection and Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. Your data is stored securely and is only accessible to authorized personnel who require it to perform their duties. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.
          </p>

          <h2>4. Cookies and Tracking</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. Cookies help us understand how you interact with our site, allowing us to improve functionality and tailor content to your preferences. You can choose to disable cookies through your browser settings, though this may affect site functionality.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions regarding this privacy policy or how your data is handled, please contact us at expeditions@xplorethedreams.com.
          </p>
        </div>
      </div>
    </main>
  );
}
