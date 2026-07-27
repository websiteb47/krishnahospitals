import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d2d5e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.jpeg" alt="Krishna Logo" width={46} height={46} className="rounded-full bg-white p-0.5" />
            <div>
              <p className="font-extrabold text-white text-base leading-none tracking-wide">KRISHNA</p>
              <p className="text-xs text-[#90caf9] font-semibold">Hospitals &amp; Labs</p>
              <p className="text-[10px] text-[#00acc1] font-semibold italic">Your Health is Our Priority</p>
            </div>
          </div>
          <p className="text-[#90caf9] text-sm leading-relaxed">
            General &amp; Multi-Speciality Hospital, Guntur. Available 24/7 for emergency care, diagnostics, and medicines.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { label: "Facebook", icon: "f", href: "#" },
              { label: "Twitter", icon: "t", href: "#" },
              { label: "Instagram", icon: "in", href: "#" },
              { label: "WhatsApp", icon: "W", href: "https://wa.me/917416888998" },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1565c0] flex items-center justify-center transition-colors text-xs font-bold">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#90caf9]">
            {[
              { label: "Home", href: "/" },
              { label: "Hospital Services", href: "/hospital" },
              { label: "Our Doctors", href: "/doctors" },
              { label: "Krishna Labs", href: "/labs" },
              { label: "Medicals", href: "/medical-shop" },
              { label: "Gallery", href: "/gallery" },
              { label: "Book Appointment", href: "/hospital#appointment" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white transition-colors">→ {l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Services</h3>
          <ul className="space-y-2 text-sm text-[#90caf9]">
            {[
              "24/7 Emergency Care",
              "OP Consultation – ₹200",
              "Video / Home Visits",
              "Home Doctor Visit",
              "All Lab Tests",
              "Free Home Sample Collection",
              "22% Discount on Medicines",
              "Free Home Medicine Delivery",
            ].map((s) => (
              <li key={s} className="flex items-start gap-1.5">
                <span className="text-[#00acc1] mt-0.5 flex-shrink-0">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Contact</h3>
          <ul className="space-y-3 text-sm text-[#90caf9]">
            <li className="flex gap-2">
              <span className="flex-shrink-0">📍</span>
              <span>Amaravathi Rd, beside B.V.R. Convention, Panduranga Nagar, Guntur, AP – 522007</span>
            </li>
            <li className="flex gap-2 flex-col">
              <span className="flex items-center gap-2">
                📞 <a href="tel:7416888998" className="hover:text-white">7416888998</a>
              </span>
              <span className="flex items-center gap-2 pl-6">
                <a href="tel:6262787896" className="hover:text-white">6262787896</a>
              </span>
              <span className="flex items-center gap-2 pl-6">
                <a href="tel:8074699548" className="hover:text-white">8074699548</a>
              </span>
            </li>
            <li className="flex gap-2">
              <span>�</span>
              <span>Open 24 × 7 × 365</span>
            </li>
          </ul>
          <a href="https://wa.me/917416888998"
            className="mt-5 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors">
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#90caf9]">
          <div className="flex items-center gap-4">
            <span>📞 <a href="tel:7416888998" className="hover:text-white">+91 7416888998</a></span>
            <span>|</span>
            <span>📧 <a href="mailto:info@krishnahospitals.in" className="hover:text-white">info@krishnahospitals.in</a></span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span>|</span>
            <p>© {new Date().getFullYear()} Krishna Hospitals &amp; Labs, Guntur.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
