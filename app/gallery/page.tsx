"use client";
import { useState } from "react";
import Image from "next/image";

// Gallery items — real photos from /public
const galleryItems = [
  {
    src: "/hospital-ward.jpeg",
    alt: "Krishna Hospitals – Patient Ward",
    label: "Patient Ward",
    category: "Facilities",
  },
  {
    src: "/Ward2.jpeg",
    alt: "Krishna Hospitals – Ward Room",
    label: "Ward Room",
    category: "Facilities",
  },
  {
    src: "/Doctorroom.jpeg",
    alt: "Krishna Hospitals – Doctor's Room",
    label: "Doctor's Room",
    category: "Facilities",
  },
  {
    src: "/Doctor%20room2.jpeg",
    alt: "Krishna Hospitals – Consultation Room",
    label: "Consultation Room",
    category: "Facilities",
  },
  {
    src: "/Doctor%20visit.jpeg",
    alt: "Doctor Visiting Patient at Krishna Hospitals",
    label: "Doctor Visit",
    category: "Care",
  },
  {
    src: "/Doctor%20visit%20and%20monitor.jpeg",
    alt: "Doctor Monitoring Patient at Krishna Hospitals",
    label: "Patient Monitoring",
    category: "Care",
  },
  {
    src: "/Medical%20shop.jpeg",
    alt: "Krishna Hospitals Medical Shop",
    label: "Medical Shop",
    category: "Medical Shop",
  },
  {
    src: "/logo.jpeg",
    alt: "Krishna Hospitals & Labs Logo – Your Health is Our Priority",
    label: "Krishna Hospitals & Labs",
    category: "About",
  },
];

const categories = ["All", "Facilities", "Care", "Medical Shop", "About"];

const categoryColors: Record<string, string> = {
  Facilities: "from-blue-600 to-blue-800",
  Care: "from-teal-600 to-teal-800",
  "Medical Shop": "from-green-600 to-green-700",
  About: "from-[#0d2d5e] to-[#1565c0]",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[0]>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
            Our Facilities &amp; Team
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Photo <span className="text-[#00e5ff]">Gallery</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            A glimpse into our hospital, labs, patient care facilities, and medical shop at Krishna Hospitals & Labs, Guntur.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 20C1200 50 960 5 720 20C480 35 240 5 0 20L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                  ? "bg-[#1565c0] text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-[#e3f0fb] hover:text-[#1565c0]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
          {filtered.map((item) => (
            <button
              key={item.src}
              onClick={() => setLightbox(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md card-hover text-left focus:outline-none focus:ring-2 focus:ring-[#1a56db]"
              aria-label={`View ${item.label}`}
            >
              {/* Image with gradient fallback */}
              <div className={`relative w-full aspect-[3/4] bg-gradient-to-br ${categoryColors[item.category] || "from-gray-500 to-gray-700"}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => {
                    // Hide broken image, show gradient fallback
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</span>
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                <p className="text-white text-xs font-bold">{item.label}</p>
                <p className="text-white/70 text-xs">{item.category}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#f4f8fd] py-10 px-6 text-center">
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Want to see more? Visit us at Amaravathi Rd, beside B.V.R. Convention, Panduranga Nagar, Guntur.
        </p>
        <a href="tel:7416888998" className="inline-block mt-4 bg-[#1565c0] hover:bg-[#0d2d5e] text-white font-bold px-7 py-2.5 rounded-md text-sm transition-colors">
          📞 Call Us: 7416888998
        </a>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${categoryColors[lightbox.category] || "from-gray-500 to-gray-700"}`}>
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="p-5 flex items-start justify-between">
              <div>
                <h3 className="font-extrabold text-[#1e3a5f] text-lg">{lightbox.label}</h3>
                <p className="text-gray-500 text-sm mt-0.5">{lightbox.alt}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-4 py-2 rounded-xl text-sm transition-colors ml-4 flex-shrink-0"
              >
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
