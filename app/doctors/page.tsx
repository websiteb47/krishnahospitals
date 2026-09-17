import Link from "next/link";

const doctors = [
  {
    name: "Dr. M. Adam Khan",
    qualifications: "M.B.B.S., F.C.I.P.",
    specialty: "Physician & Surgeon",
    imgSrc: "/doc_male.png",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Dr. Nagarjuna Chadalavada",
    qualifications: "M.B.B.S., M.D. Paed., FIAP",
    specialty: "Child Specialist (Pediatrician)",
    imgSrc: "/doc_male.png",
    color: "from-sky-500 to-sky-700",
  },
  {
    name: "Dr. K. Venkat Ram",
    qualifications: "MS., F.M.A.S.",
    specialty: "General & Laparoscopic Surgeon",
    imgSrc: "/doc_male.png",
    color: "from-teal-600 to-teal-800",
  },
  {
    name: "Dr. D. Meenakshi Pranavi",
    qualifications: "DGO, F.M.A.S.",
    specialty: "Laparoscopic & Infertility Specialist",
    imgSrc: "/doc_female.png",
    color: "from-pink-600 to-pink-800",
  },
  {
    name: "Dr. Gayam Srikanth Reddy",
    qualifications: "M.B.B.S., M.D., F.DIAB",
    specialty: "General Physician & Diabetologist",
    imgSrc: "/doc_male.png",
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Dr. Prudhvi Pinnaka",
    qualifications: "M.B.B.S., M.S., F.I.O.T.",
    specialty: "Orthopedic Surgeon",
    imgSrc: "/doc_male.png",
    color: "from-orange-600 to-orange-700",
  },
  {
    name: "Dr. Asha Dharmala",
    qualifications: "B.D.S.",
    specialty: "Dental Surgeon",
    imgSrc: "/doc_female.png",
    color: "from-cyan-600 to-cyan-800",
  },
  {
    name: "Dr. Navali Krishna Prasad",
    qualifications: "M.B.B.S., M.D. Medicine, D.M. Cardiology",
    specialty: "Cardiologist",
    imgSrc: "/doc_male.png",
    color: "from-red-600 to-red-800",
  },
  {
    name: "Dr. T. Raja Shekhar",
    qualifications: "",
    specialty: "Physiotherapist",
    imgSrc: "/doc_male.png",
    color: "from-green-600 to-green-700",
  },
  {
    name: "Dr. Sandya Dilip Yas",
    qualifications: "",
    specialty: "Physiotherapist",
    imgSrc: "/doc_female.png",
    color: "from-emerald-600 to-emerald-800",
  },
];

const onCallSpecialties = [
  { imgSrc: "/neuro.JPG", name: "Neurology" },
  { imgSrc: "/Doctorroom.jpeg", name: "ENT (Ear, Nose & Throat)" },
  { imgSrc: "/Doctorroom.jpeg", name: "Nose" },
  { imgSrc: "/Doctorroom.jpeg", name: "Throat" },
  { imgSrc: "/surgical gastro.JPG", name: "Gastro Entrology" },
];

export default function DoctorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#00acc1] rounded-full animate-pulse" />
            General &amp; Multi-Speciality
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our <span className="text-[#00e5ff]">Specialist Doctors</span>
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto mb-8">
            Krishna Hospitals brings together experienced specialists across multiple disciplines — all under one roof, available for consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hospital#appointment" className="bg-white text-[#1565c0] font-bold px-7 py-3 rounded-md hover:shadow-xl transition-all text-sm">
              Book Appointment
            </Link>
            <a href="tel:7416888998" className="border-2 border-white/60 text-white font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-all text-sm">
              📞 7416888998
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 20C1200 50 960 5 720 20C480 35 240 5 0 20L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#1565c0] font-bold text-sm uppercase tracking-widest">Medical Team</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2d5e] mt-2 section-title-bar">Meet Our Doctors</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Our team of qualified specialists is committed to providing the highest standard of patient care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div key={doc.name} className="card-hover rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
              {/* Top colored bar */}
              <div className={`bg-gradient-to-r ${doc.color} p-6 text-center`}>
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-3">
                  <svg viewBox="0 0 24 24" fill="white" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <div className="inline-block bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                  Specialist
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-extrabold text-[#0d2d5e] text-base leading-snug mb-1">{doc.name}</h3>
                {doc.qualifications && (
                  <p className="text-[#1565c0] text-xs font-semibold mb-2">{doc.qualifications}</p>
                )}
                <div className="inline-block bg-[#e3f0fb] text-[#1565c0] text-xs font-bold px-3 py-1.5 rounded-full mt-1">
                  {doc.specialty}
                </div>
              </div>
              <div className="px-5 pb-5">
                <Link
                  href="/hospital#appointment"
                  className="block w-full text-center bg-[#1565c0] hover:bg-[#0d2d5e] text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Book Appointment →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* On-Call Specialties */}
      <section className="bg-[#1e3a5f] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-300 font-bold text-sm uppercase tracking-widest">On-Call Services</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3">
            Additional Specialties Available On-Call
          </h2>
          <p className="text-blue-200 text-sm mb-10">
            Specialist doctors available on call for the following departments.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {onCallSpecialties.map((s) => (
              <div key={s.name} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-8 py-5 text-center min-w-[140px] flex flex-col items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mb-2 border-2 border-white/40">
                  <img src={s.imgSrc} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-white font-bold text-sm">{s.name}</p>
                <p className="text-blue-300 text-xs mt-1">On Call</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:+917416888998" className="bg-white text-[#1565c0] font-bold px-6 py-3 rounded-full hover:shadow-xl transition-all inline-block text-sm">
              Call: 7416888998
            </a>
            <a href="tel:6262787896" className="bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-all text-sm">
              Call: 6262787896
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e3a5f] mb-3">Need to See a Doctor?</h2>
        <p className="text-gray-500 mb-7">
          Walk in any time or book an appointment in advance. OP fee is just ₹200.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/hospital#appointment" className="bg-[#1a56db] hover:bg-[#1e3a5f] text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm shadow-lg">
            📅 Book Appointment
          </Link>
          <a href="https://wa.me/917416888998" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full transition-all inline-flex items-center gap-2 text-sm">
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
