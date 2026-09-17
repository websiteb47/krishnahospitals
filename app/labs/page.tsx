import ContactForm from "@/components/ContactForm";

const testCategories = [
  {
    imgSrc: "/lab_tests.png",
    title: "Organ Function Tests",
    tests: [
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Complete Blood Count (CBC)",
      "Full Body Checkup",
    ],
  },
  {
    imgSrc: "/lab_tests.png",
    title: "Blood & Sugar Tests",
    tests: [
      "Sugar Test (Blood Glucose)",
      "HBA1c Test",
      "Widal Test",
      "Urine Test",
      "Stool Test",
      "Ferritin Test",
    ],
  },
  {
    imgSrc: "/lab_tests.png",
    title: "Infection & Disease Tests",
    tests: [
      "Dengue Test",
      "Malaria Test",
      "COVID-19 Test",
      "Typhoid / Widal",
      "Troponin I Test",
      "CRP Test",
    ],
  },
  {
    imgSrc: "/lab_tests.png",
    title: "Hormone & Specialty Tests",
    tests: [
      "Thyroid Test",
      "IL-06 Test",
      "D-Dimer Test",
      "Ferritin Test",
      "HBA1c Test",
    ],
  },
  {
    imgSrc: "/service_lab.png",
    title: "Imaging & Radiology",
    tests: [
      "X-Ray (Digital)",
      "Ultrasound / Sonography",
      "ECG / EKG",
      "2D Echo",
      "Doppler Study",
    ],
  },
  {
    imgSrc: "/lab_tests.png",
    title: "Health Packages",
    tests: [
      "Full Body Checkup",
      "Diabetes Panel",
      "Cardiac Profile",
      "Women's Health Package",
      "Senior Citizen Package",
      "Basic Health Checkup",
    ],
  },
];

const steps = [
  { imgSrc: "/lab_tests.png", step: "1", title: "Call or Book Online", desc: "Call us or fill the booking form to schedule your sample collection." },
  { imgSrc: "/service_home_visit.png", step: "2", title: "We Come to You", desc: "Our trained phlebotomist arrives at your location at the scheduled time." },
  { imgSrc: "/lab_tests.png", step: "3", title: "Sample Collected", desc: "Blood/urine/other samples collected safely and hygienically." },
  { imgSrc: "/lab_tests.png", step: "4", title: "Get Reports", desc: "Receive your digital reports via WhatsApp/email, same day for most tests." },
];

export default function LabsPage() {
  return (
    <>
      <section className="hero-gradient relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00acc1] rounded-full animate-pulse" />
              Free Home Sample Collection
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
              Krishna <span className="text-[#00e5ff]">Labs</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              All types of diagnostic tests under one roof — with discounted pricing and free bedside/home sample collection available full-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-white text-[#1e3a5f] font-bold px-7 py-3.5 rounded-full hover:shadow-xl transition-all hover:scale-105 text-sm">
                Book a Test
              </a>
              <a href="#home-collection" className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all text-sm">
                Home Collection
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { imgSrc: "/lab_tests.png", val: "500+", label: "Tests Available" },
              { imgSrc: "/service_home_visit.png", val: "FREE", label: "Home Collection" },
              { imgSrc: "/service_lab.png", val: "Same Day", label: "Reports" },
              { imgSrc: "/lab_tests.png", val: "Discounted", label: "Pricing" },
            ].map((s) => (
              <div key={s.label} className="bg-white/15 backdrop-blur border border-white/20 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-12 h-12 mb-3 rounded-full overflow-hidden border-2 border-white/40">
                  <img src={s.imgSrc} alt={s.label} className="w-full h-full object-cover" />
                </div>
                <p className="text-xl font-extrabold text-yellow-300">{s.val}</p>
                <p className="text-blue-100 text-sm font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 20C1200 50 960 5 720 20C480 35 240 5 0 20L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Home Collection Highlight */}
      <section id="home-collection" className="bg-gradient-to-r from-purple-700 to-purple-900 py-14 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="/service_home_visit.png" alt="Home Collection" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Free Bedside & Home Sample Collection</h2>
          <p className="text-purple-200 text-lg mb-6 max-w-2xl mx-auto">
            Can't visit the lab? No problem. Our trained team comes to your home or bedside to collect samples — completely free of charge, available full-time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="bg-white text-purple-700 font-extrabold px-8 py-3.5 rounded-full hover:shadow-xl transition-all inline-block text-sm">
              Schedule Home Collection →
            </a>
            <a href="tel:+919999999999" className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-purple-700 transition-all inline-block text-sm">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mt-2">How Home Collection Works</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a56db] to-purple-600 flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4 shadow-lg">
                {s.step}
              </div>
              <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden border-2 border-gray-100 shadow-sm">
                <img src={s.imgSrc} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-extrabold text-[#1e3a5f] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Test Categories */}
      <section id="tests" className="bg-[#f0f5ff] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Diagnostics</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mt-2">All Test Categories</h2>
            <div className="inline-block mt-3 bg-green-100 text-green-700 font-bold text-sm px-4 py-1.5 rounded-full">
              💰 Discounted Pricing Available on All Tests
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testCategories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 card-hover">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-gray-100 shadow-sm">
                    <img src={cat.imgSrc} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-extrabold text-[#1e3a5f] text-lg">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.tests.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-[#1a56db] font-bold text-xs">▶</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            Don't see your test? Call us — we likely have it. 500+ tests available.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Book Now</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mt-2">Book a Lab Test</h2>
          <p className="text-gray-500 mt-3">Choose home collection or walk-in. We make it easy.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
