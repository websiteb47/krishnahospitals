import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import HeroBanner from "@/components/HeroBanner";

const hospitalServices = [
  { icon: "", label: "24/7 Emergency Care" },
  { icon: "", label: "₹200 OP Consultation Fee" },
  { icon: "", label: "Video Call Consultations" },
  { icon: "", label: "Home Visit Services" },
];

const features = [
  { icon: "🚑", title: "24/7 Emergency", desc: "Round-the-clock emergency care with a dedicated trauma team." },
  { icon: "📹", title: "Video Consultation", desc: "Consult specialist doctors from home via secure video call." },
  { icon: "🏠", title: "Home Visits", desc: "Medical staff visit your home for bedside treatment and care." },
  { icon: "🧪", title: "All Lab Tests", desc: "500+ diagnostics under one roof at discounted pricing." },
  { icon: "🚚", title: "Free Medicine Delivery", desc: "Order medicines 24/7 and get free doorstep delivery." },
  { icon: "💰", title: "Affordable Care", desc: "₹200 OP fee and flat 22% discount on all medicines." },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Patient", text: "Krishna Hospitals saved my father's life at 2 AM. The staff was incredibly caring and professional.", rating: 5 },
  { name: "Priya Sharma", role: "Regular Customer", text: "I save a lot on monthly medicines thanks to the 22% discount. Free delivery is a great bonus!", rating: 5 },
  { name: "Anand Reddy", role: "Lab Patient", text: "Home sample collection is so convenient. Got same-day reports on WhatsApp. Highly recommend!", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO BANNER CAROUSEL ─────────────────────────────── */}
      <HeroBanner />

      {/* ── MEDICAL SHOP + LABS CARDS ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-6">

        {/* Medical Shop card — pharmacy shelf background */}
        <div className="relative rounded-2xl shadow-md border border-gray-100 overflow-hidden card-hover" style={{minHeight: "220px"}}>
          {/* Background illustration: medicine shelves */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e3f0fb] via-[#cfe5f8] to-[#b8d9f5]">
            {/* Shelf SVG illustration */}
            <svg className="absolute right-0 bottom-0 w-56 h-full opacity-30" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Shelf lines */}
              <rect x="10" y="60" width="180" height="6" rx="3" fill="#1565c0"/>
              <rect x="10" y="120" width="180" height="6" rx="3" fill="#1565c0"/>
              <rect x="10" y="180" width="180" height="6" rx="3" fill="#1565c0"/>
              {/* Medicine boxes row 1 */}
              <rect x="18" y="30" width="22" height="28" rx="3" fill="#1976d2"/>
              <rect x="44" y="35" width="18" height="23" rx="3" fill="#42a5f5"/>
              <rect x="66" y="28" width="20" height="30" rx="3" fill="#0d47a1"/>
              <rect x="90" y="33" width="16" height="25" rx="3" fill="#1565c0"/>
              <rect x="110" y="30" width="22" height="28" rx="3" fill="#1e88e5"/>
              <rect x="136" y="36" width="18" height="22" rx="3" fill="#5c9bd1"/>
              <rect x="158" y="29" width="20" height="29" rx="3" fill="#0d47a1"/>
              {/* Medicine boxes row 2 */}
              <rect x="18" y="88" width="24" height="30" rx="3" fill="#42a5f5"/>
              <rect x="46" y="92" width="16" height="26" rx="3" fill="#1976d2"/>
              <rect x="66" y="86" width="20" height="32" rx="3" fill="#1565c0"/>
              <rect x="90" y="90" width="22" height="28" rx="3" fill="#0d47a1"/>
              <rect x="116" y="88" width="18" height="30" rx="3" fill="#1e88e5"/>
              <rect x="138" y="93" width="20" height="25" rx="3" fill="#42a5f5"/>
              <rect x="162" y="87" width="16" height="31" rx="3" fill="#1565c0"/>
              {/* Medicine boxes row 3 */}
              <rect x="18" y="148" width="20" height="28" rx="3" fill="#1e88e5"/>
              <rect x="42" y="152" width="24" height="24" rx="3" fill="#0d47a1"/>
              <rect x="70" y="147" width="18" height="29" rx="3" fill="#42a5f5"/>
              <rect x="92" y="150" width="22" height="26" rx="3" fill="#1565c0"/>
              <rect x="118" y="148" width="20" height="28" rx="3" fill="#1976d2"/>
              <rect x="142" y="153" width="16" height="23" rx="3" fill="#1e88e5"/>
              <rect x="162" y="147" width="20" height="29" rx="3" fill="#5c9bd1"/>
              {/* Pills */}
              <ellipse cx="40" cy="210" rx="8" ry="5" fill="#1565c0" opacity="0.6"/>
              <ellipse cx="80" cy="208" rx="6" ry="4" fill="#42a5f5" opacity="0.6"/>
              <ellipse cx="120" cy="210" rx="7" ry="4" fill="#0d47a1" opacity="0.5"/>
            </svg>
            {/* White left fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>
          {/* Content */}
          <div className="relative z-10 p-7">
            <h2 className="font-extrabold text-gray-800 text-lg mb-1">Wholesale &amp; Retail Medical Shop</h2>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[#1565c0] font-extrabold text-2xl">FLAT 22% OFF</span>
              <span className="text-[#00acc1] font-bold text-sm">+ FREE 24/7 HOME DELIVERY</span>
            </div>
            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-9 h-9 rounded-full bg-white/80 border border-blue-100 flex items-center justify-center text-[#1565c0] font-bold text-xs shadow-sm">24/7</div>
                Open 24/7
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-9 h-9 rounded-full bg-white/80 border border-blue-100 flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 text-[#1565c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                Hospital Attached Discounts
              </div>
            </div>
            <Link href="/medical-shop"
              className="inline-block bg-[#f57f17] hover:bg-[#ef6c00] text-white font-bold px-7 py-2.5 rounded-md transition-colors text-sm shadow">
              Order Now
            </Link>
          </div>
        </div>

        {/* Labs card — microscope + test tubes background */}
        <div className="relative rounded-2xl shadow-md border border-gray-100 overflow-hidden card-hover" style={{minHeight: "220px"}}>
          {/* Background illustration: lab equipment */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8f5fb] via-[#d4eef8] to-[#b8e0f5]">
            {/* Lab SVG illustration */}
            <svg className="absolute right-0 bottom-0 w-64 h-full opacity-35" viewBox="0 0 240 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Microscope body */}
              <rect x="80" y="140" width="60" height="10" rx="4" fill="#1565c0"/>
              <rect x="100" y="80" width="20" height="62" rx="3" fill="#1976d2"/>
              <rect x="95" y="72" width="30" height="14" rx="4" fill="#0d47a1"/>
              <ellipse cx="110" cy="70" rx="18" ry="10" fill="#1565c0"/>
              <rect x="106" y="40" width="8" height="32" rx="3" fill="#42a5f5"/>
              <circle cx="110" cy="38" r="8" fill="#0d47a1"/>
              <circle cx="110" cy="38" r="4" fill="#90caf9"/>
              {/* Arm */}
              <rect x="108" y="75" width="40" height="6" rx="3" fill="#1565c0" transform="rotate(-30 108 75)"/>
              {/* Stage */}
              <rect x="88" y="128" width="44" height="6" rx="3" fill="#1565c0"/>
              <rect x="103" y="107" width="14" height="22" rx="2" fill="#90caf9" opacity="0.5"/>
              {/* Test tubes - colorful */}
              <rect x="155" y="90" width="14" height="55" rx="7" fill="#ef5350"/>
              <rect x="155" y="110" width="14" height="35" rx="7" fill="#ef5350" opacity="0.8"/>
              <rect x="173" y="85" width="14" height="60" rx="7" fill="#26c6da"/>
              <rect x="173" y="118" width="14" height="27" rx="7" fill="#26c6da" opacity="0.85"/>
              <rect x="191" y="93" width="14" height="52" rx="7" fill="#66bb6a"/>
              <rect x="191" y="120" width="14" height="25" rx="7" fill="#66bb6a" opacity="0.8"/>
              <rect x="209" y="88" width="14" height="57" rx="7" fill="#ffa726"/>
              <rect x="209" y="115" width="14" height="30" rx="7" fill="#ffa726" opacity="0.8"/>
              {/* Tube rack */}
              <rect x="150" y="143" width="80" height="8" rx="3" fill="#1565c0"/>
              {/* Lab bench */}
              <rect x="60" y="150" width="170" height="10" rx="3" fill="#90caf9" opacity="0.4"/>
              {/* Beakers */}
              <path d="M70 110 L65 145 L90 145 L85 110 Z" fill="#42a5f5" opacity="0.5"/>
              <rect x="66" y="107" width="22" height="5" rx="2" fill="#1565c0" opacity="0.6"/>
              <path d="M72 125 L68 143 L88 143 L84 125 Z" fill="#26c6da" opacity="0.6"/>
            </svg>
            {/* White left fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
          </div>
          {/* Content */}
          <div className="relative z-10 p-7">
            <h2 className="font-extrabold text-[#1565c0] text-lg mb-1">Krishna Labs</h2>
            <p className="font-bold text-gray-800 text-base mb-2">All Lab Tests With Discounts</p>
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-5">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
              Free Home Sample Collection
            </div>
            <Link href="/labs#booking"
              className="inline-block bg-[#1565c0] hover:bg-[#0d2d5e] text-white font-bold px-7 py-2.5 rounded-md transition-colors text-sm shadow">
              Online Lab Booking
            </Link>
          </div>
        </div>

      </section>
      {/* ── HOSPITAL SERVICES BAR ─────────────────────────────── */}
      <section className="bg-[#f4f8fd] py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-extrabold text-gray-800 text-2xl mb-8 section-title-bar">
            Our Hospital Services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {hospitalServices.map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 card-hover">
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-gray-700 text-xs font-semibold leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERT CARE (hidden) ───────────────────────────────────────── */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center font-extrabold text-gray-800 text-2xl mb-10 section-title-bar">
          Expert Care, Anytime You Need
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover">
            <div className="bg-gradient-to-br from-[#1565c0] to-[#00acc1] h-44 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-2">📹</div>
                <p className="font-bold text-sm">Live Video Session</p>
              </div>
            </div>
            <div className="p-5 bg-white">
              <h3 className="font-extrabold text-[#1565c0] text-base mb-1">Video Call Consultations</h3>
              <p className="text-gray-500 text-sm">Consult our specialists from home via secure HD video call — no travel needed.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover">
            <div className="bg-gradient-to-br from-[#0d2d5e] to-[#1565c0] h-44 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-2">🏠</div>
                <p className="font-bold text-sm">Doctor Comes to You</p>
              </div>
            </div>
            <div className="p-5 bg-white">
              <h3 className="font-extrabold text-[#1565c0] text-base mb-1">Bedside Treatment at Home</h3>
              <p className="text-gray-500 text-sm">Our medical staff visit your home for bedside treatment, IV drips, and nursing care.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── SPECIALTIES & FEATURES ───────────────────────────── */}
      <section className="bg-[#f4f8fd] py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-extrabold text-[#1565c0] text-2xl mb-2 section-title-bar left">
              Specialties &amp; Facilities
            </h2>
            <p className="text-gray-500 text-sm mb-6 mt-4">Providing Advanced Medical Care for All Your Needs.</p>
            <ul className="space-y-3 mb-8">
              {["Experienced Specialists", "State-of-the-Art Facilities", "Compassionate Care", "Affordable Pricing", "24/7 Availability"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/doctors"
              className="inline-block bg-[#1565c0] hover:bg-[#0d2d5e] text-white font-bold px-7 py-3 rounded-md transition-colors text-sm">
              View All Specialties
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-hover">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#1565c0] text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center font-extrabold text-gray-800 text-2xl mb-10 section-title-bar">
          Patients Trust Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1565c0] flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="bg-[#f4f8fd] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-extrabold text-gray-800 text-2xl mb-10 section-title-bar">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {[
                { icon: "📍", title: "Address", val: "Amaravathi Rd, beside B.V.R. Convention, Panduranga Nagar, Guntur, AP – 522007" },
                { icon: "📞", title: "Phone / Emergency", val: "7416888998 | 6262787896 | 8074699548" },
                { icon: "🕐", title: "Working Hours", val: "24 × 7 × 365 – Always Open" },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{c.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
