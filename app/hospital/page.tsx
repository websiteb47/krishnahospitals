import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const specialties = [
  { img: "/cardio.JPG",                      name: "Cardiology" },
  { img: "/neuro.JPG",                       name: "Neurology" },
  { img: "/neuro%20spine.JPG",               name: "Neuro Spine" },
  { img: "/ortho.JPG",                       name: "Orthopedics" },
  { img: "/gynecology.JPG",                  name: "Gynecology & Obstetrics" },
  { img: "/pulmonology.JPG",                 name: "Pulmonology" },
  { img: "/gen%20medicine.JPG",              name: "General Medicine" },
  { img: "/surgical%20gastro.JPG",           name: "Surgical Gastroenterology" },
  { img: "/urology%20and%20nephrology.JPG",  name: "Urology & Nephrology" },
  { img: "/nephrology.JPG",                  name: "Nephrology" },
  { img: "/vascular.JPG",                    name: "Vascular Surgery" },
  { img: "/Doctorroom.jpeg",                 name: "Dentistry" },
];

const services = [
  {
    imgSrc: "/service_ward.png",
    title: "24/7 Emergency Care",
    desc: "Fully equipped emergency ward with trained trauma staff available round the clock.",
  },
  {
    imgSrc: "/service_consultation.png",
    title: "Outpatient (OP) – ₹200",
    desc: "Consult any specialist with our lowest ₹200 OP fee, no hidden charges.",
  },
  {
    imgSrc: "/service_inpatient.png",
    title: "Inpatient (IP) Services",
    desc: "Comfortable private and semi-private rooms with 24/7 nursing care.",
  },
  {
    imgSrc: "/service_lab.png",
    title: "Advanced Diagnostics",
    desc: "In-house lab, X-ray, ECG, ultrasound and more available on site.",
  },
  {
    imgSrc: "/service_pharmacy.png",
    title: "Pharmacy On-Site",
    desc: "24/7 in-house pharmacy with 22% discount on all medicines.",
  },
  {
    imgSrc: "/service_emergency.png",
    title: "Ambulance Service",
    desc: "GPS-tracked ambulances available 24/7 for emergency transport.",
  },
];

const gallery = [
  { label: "Main Building", bg: "from-blue-600 to-blue-800" },
  { label: "Emergency Ward", bg: "from-red-500 to-red-700" },
  { label: "Operation Theatre", bg: "from-teal-500 to-teal-700" },
  { label: "ICU", bg: "from-purple-600 to-purple-800" },
  { label: "Lab & Diagnostics", bg: "from-indigo-500 to-indigo-700" },
  { label: "Patient Rooms", bg: "from-sky-500 to-sky-700" },
];

export default function HospitalPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00acc1] rounded-full animate-pulse" />
              Open 24 × 7 × 365
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
              Krishna <span className="text-[#00e5ff]">Hospital</span> Services
            </h1>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-lg">
              Comprehensive healthcare for all diseases. Emergency care, specialist OPs, telemedicine, and bedside home visits — all under one trusted name.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#appointment" className="bg-white text-[#1565c0] font-bold px-7 py-3 rounded-md hover:shadow-xl transition-all text-sm">
                Book Appointment
              </a>
              <a href="tel:7416888998" className="border-2 border-white/60 text-white font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-all text-sm">
                📞 Emergency Call
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "24/7", label: "Emergency" },
              { val: "₹200", label: "OP Fee" },
              { val: "10+", label: "Specialists" },
              { val: "100+", label: "Beds" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-extrabold text-[#00e5ff]">{s.val}</p>
                <p className="text-blue-100 text-xs font-semibold mt-1">{s.label}</p>
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

      {/* Services */}
      <section id="emergency" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#1565c0] font-bold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2d5e] mt-2">Hospital Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 card-hover">
              <div className="mb-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 overflow-hidden flex items-center justify-center border-white shadow-sm ring-2 ring-gray-50 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.imgSrc} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-extrabold text-[#0d2d5e] text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OP Fee highlight */}
      <section className="bg-[#1e3a5f] py-14 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="text-6xl font-extrabold text-yellow-300 mb-3">₹200</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Outpatient Consultation Fee</h2>
          <p className="text-blue-200 text-lg mb-6">
            Consult any of our specialist doctors for just ₹200. No hidden fees, no extras.
          </p>
          <a href="#appointment" className="bg-yellow-400 text-[#0d2d5e] font-extrabold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition-all inline-block">
            Book OP Now →
          </a>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="bg-[#f4f8fd] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1565c0] font-bold text-sm uppercase tracking-widest">Departments</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2d5e] mt-2">Our Specialties</h2>
            <p className="text-gray-400 text-sm mt-2">More specialties being added – contact us for the full list.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {specialties.map((s) => (
              <div key={s.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                <div className="relative w-full h-36">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* subtle dark overlay at bottom for label contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="px-3 py-2.5 text-center">
                  <p className="font-bold text-[#0d2d5e] text-sm leading-snug">{s.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#f4f8fd] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1565c0] font-bold text-sm uppercase tracking-widest">Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2d5e] mt-2">Our Facilities</h2>
            <p className="text-gray-400 text-sm mt-2">Original photos will be updated soon. Contact us to share hospital images.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {gallery.map((g) => (
              <div
                key={g.label}
                className={`bg-gradient-to-br ${g.bg} rounded-2xl h-48 flex items-end p-4 shadow-md card-hover`}
              >
                <span className="text-white font-bold text-sm bg-black/30 px-3 py-1.5 rounded-full backdrop-blur">
                  {g.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="text-[#1565c0] font-bold text-sm uppercase tracking-widest">Appointments</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2d5e] mt-2">Book an Appointment</h2>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

