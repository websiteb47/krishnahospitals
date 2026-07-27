import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions – Krishna Hospitals & Labs",
  description: "Terms and Conditions for using services of Krishna Hospitals & Labs, Guntur.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing our website, booking an appointment, ordering medicines, or using any service provided by Krishna Hospitals & Labs ("we", "our", "us"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.`,
  },
  {
    title: "2. Services Offered",
    content: `Krishna Hospitals & Labs provides the following services:
• Outpatient (OP) consultations at ₹200 per visit
• 24/7 emergency medical care
• Inpatient (IP) hospitalisation and nursing care
• Diagnostic lab tests with discounts
• Free bedside and home sample collection
• Wholesale and retail medicine supply with flat 22% discount
• Free 24/7 home delivery of medicines
• Home visits by medical staff for bedside treatment

All services are subject to availability and medical discretion of our staff.`,
  },
  {
    title: "3. Medical Disclaimer",
    content: `The content on our website is for general informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always consult a qualified medical professional for health concerns.

Treatment outcomes may vary between patients. Krishna Hospitals & Labs does not guarantee specific medical results. Our doctors and staff will provide the best possible care based on individual patient conditions.`,
  },
  {
    title: "4. Appointments & Bookings",
    content: `• Appointment bookings made online or via phone are subject to doctor availability.
• We reserve the right to reschedule or cancel appointments in cases of emergency or unforeseen circumstances.
• Patients are requested to arrive at least 10 minutes before their scheduled appointment time.
• In case of a no-show without prior cancellation, the appointment slot may be forfeited.
• For video consultations, a stable internet connection is the patient's responsibility.`,
  },
  {
    title: "5. Medicine Orders & Delivery",
    content: `• Medicine orders are subject to availability of stock.
• Prescription medicines will only be dispensed against a valid prescription from a registered medical practitioner.
• The flat 22% discount applies to MRP on all medicines available at our shop.
• Free home delivery is available 24/7 within our serviceable area.
• Delivery timelines may vary depending on location and order volume.
• We are not liable for delays caused by circumstances beyond our control (traffic, weather, etc.).
• Medicines once dispensed cannot be returned or exchanged unless there is a dispensing error on our part.`,
  },
  {
    title: "6. Lab Tests",
    content: `• Lab test reports are provided within the stated turnaround time for each test. Urgent tests may be prioritised on request.
• Reports are sent via WhatsApp/email to the contact number/email provided at the time of booking.
• Home sample collection is free of charge and subject to service area availability.
• Test results are confidential and will only be shared with the patient and their treating doctor.
• We use certified, quality-controlled reagents and equipment for all diagnostics.`,
  },
  {
    title: "7. Payments",
    content: `• Payments for services can be made via cash, UPI, or other accepted digital payment methods at the facility.
• All prices are inclusive of applicable taxes unless stated otherwise.
• The ₹200 OP fee covers the consultation only; any investigations, medicines, or procedures are billed separately.
• Receipts will be provided for all transactions.`,
  },
  {
    title: "8. Patient Rights & Responsibilities",
    content: `Patients have the right to:
• Receive respectful and dignified care
• Be informed about their diagnosis and treatment options
• Refuse treatment (with informed consent documentation)
• Access their medical records

Patients are responsible for:
• Providing accurate and complete medical history
• Following prescribed treatment plans
• Informing staff of any allergies or adverse reactions
• Treating hospital staff with respect`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the fullest extent permitted by law, Krishna Hospitals & Labs shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the amount paid by the patient for the specific service in question.`,
  },
  {
    title: "10. Privacy",
    content: `Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal and medical information.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Guntur, Andhra Pradesh.`,
  },
  {
    title: "12. Changes to Terms",
    content: `We reserve the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page with a revised date. Continued use of our services after any changes constitutes your acceptance of the new terms.`,
  },
  {
    title: "13. Contact",
    content: `For any questions regarding these Terms and Conditions, please contact:

Krishna Hospitals & Labs
Amaravathi Rd, beside B.V.R. Convention,
Panduranga Nagar, Guntur, Andhra Pradesh – 522007

Phone: 7416888998 | 6262787896 | 8074699548
WhatsApp: +91 7416888998`,
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-blue-100 text-sm">Last updated: July 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <p className="text-gray-600 text-sm leading-relaxed mb-8 p-4 bg-[#f4f8fd] rounded-xl border-l-4 border-[#1565c0]">
            Please read these Terms and Conditions carefully before using the services of Krishna Hospitals &amp; Labs. These terms constitute a legally binding agreement between you and Krishna Hospitals &amp; Labs.
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
            <Link href="/privacy-policy" className="border border-[#1565c0] text-[#1565c0] hover:bg-[#e3f0fb] font-bold px-6 py-2.5 rounded-md text-sm transition-colors">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
