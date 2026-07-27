import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Krishna Hospitals & Labs",
  description: "Privacy Policy for Krishna Hospitals & Labs, Guntur.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you voluntarily provide when you:
• Book an appointment or lab test through our website or contact form
• Call or message us on WhatsApp
• Visit our hospital, labs, or medical shop

This may include your name, phone number, email address, age, medical history relevant to the service requested, and address for home delivery or home sample collection.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information collected solely to:
• Confirm and manage appointments, lab test bookings, and medicine orders
• Provide home sample collection, home delivery, and home visit services
• Send appointment reminders or test report notifications (via WhatsApp/SMS)
• Improve our services and respond to your queries
• Comply with applicable laws and medical regulations

We do not use your information for unsolicited marketing or share it with third parties for commercial purposes.`,
  },
  {
    title: "3. Medical Confidentiality",
    content: `All patient medical records, test reports, prescriptions, and health-related information are treated with strict confidentiality in accordance with applicable Indian medical laws and ethical standards. Access to medical records is restricted to authorised medical staff only.`,
  },
  {
    title: "4. Data Sharing",
    content: `We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:
• With your treating doctor or referring specialist as part of your care
• With diagnostic laboratories for processing test samples
• When required by law, court order, or government authority
• With service partners (e.g., home delivery staff) strictly for fulfilling your order`,
  },
  {
    title: "5. Data Security",
    content: `We implement reasonable physical, electronic, and administrative safeguards to protect your personal information from unauthorised access, disclosure, or misuse. Our website uses SSL encryption for secure data transmission.`,
  },
  {
    title: "6. Cookies",
    content: `Our website may use basic cookies to improve your browsing experience (e.g., remembering preferences). These cookies do not store any personal health information. You can disable cookies in your browser settings, though this may affect certain website features.`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our website may contain links to third-party websites (e.g., Google Maps, WhatsApp). We are not responsible for the privacy practices of those websites. We encourage you to review their privacy policies separately.`,
  },
  {
    title: "8. Children's Privacy",
    content: `We provide medical services to patients of all ages including children. However, for children under 18, personal information is collected and used only with parental or guardian consent. Parents/guardians may contact us to review or delete their child's information.`,
  },
  {
    title: "9. Your Rights",
    content: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your information (subject to legal and medical record retention obligations)
• Withdraw consent for non-essential communications at any time

To exercise these rights, contact us at the details below.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "11. Contact Us",
    content: `For any privacy-related questions or requests, please contact:

Krishna Hospitals & Labs
Amaravathi Rd, beside B.V.R. Convention,
Panduranga Nagar, Guntur, Andhra Pradesh – 522007

Phone: 7416888998 | 6262787896 | 8074699548
WhatsApp: +91 7416888998`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-blue-100 text-sm">Last updated: July 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <p className="text-gray-600 text-sm leading-relaxed mb-8 p-4 bg-[#f4f8fd] rounded-xl border-l-4 border-[#1565c0]">
            Krishna Hospitals &amp; Labs ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal and medical information when you use our services or visit our website.
          </p>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-extrabold text-[#0d2d5e] text-base mb-3">{s.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
            <Link href="/" className="bg-[#1565c0] hover:bg-[#0d2d5e] text-white font-bold px-6 py-2.5 rounded-md text-sm transition-colors">
              ← Back to Home
            </Link>
            <Link href="/terms-and-conditions" className="border border-[#1565c0] text-[#1565c0] hover:bg-[#e3f0fb] font-bold px-6 py-2.5 rounded-md text-sm transition-colors">
              Terms &amp; Conditions →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
