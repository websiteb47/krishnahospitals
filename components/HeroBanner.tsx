"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    type: "image",
    src: "/newbanner.png",
    alt: "Krishna Hospitals & Labs – Caring for Your Health 24/7",
  },
  {
    id: 2,
    type: "custom",
    bg: "from-[#0d2d5e] via-[#1565c0] to-[#1976d2]",
    tag: "Flat 22% Discount on All Medicines",
    tagColor: "bg-[#f57f17]",
    headline: "Wholesale & Retail\nMedical Shop",
    sub: "Open 24/7 · Free Home Delivery · Hospital Attached Discounts",
    cta: { label: "Order Medicines", href: "/medical-shop" },
    cta2: { label: "Call Now", href: "tel:7416888998" },
    illustration: "medicals",
  },
  {
    id: 3,
    type: "custom",
    bg: "from-[#004d6e] via-[#006d9a] to-[#0091c2]",
    tag: "Free Home Sample Collection",
    tagColor: "bg-green-600",
    headline: "Krishna Labs\nAll Tests With Discounts",
    sub: "LFT · KFT · CBC · Thyroid · Dengue · COVID · Full Body Checkup",
    cta: { label: "Book a Test", href: "/labs#booking" },
    cta2: { label: "View Tests", href: "/labs#tests" },
    illustration: "labs",
  },
  {
    id: 4,
    type: "custom",
    bg: "from-[#1a237e] via-[#1565c0] to-[#0288d1]",
    tag: "₹200 OP Consultation Fee",
    tagColor: "bg-[#00acc1]",
    headline: "Expert Doctors\nAvailable 24/7",
    sub: "10+ Specialists · Video Consultations · Home Visits · Emergency Care",
    cta: { label: "Book Appointment", href: "/hospital#appointment" },
    cta2: { label: "Our Doctors", href: "/doctors" },
    illustration: "hospital",
  },
];

function MedicalsIllustration() {
  return (
    <svg viewBox="0 0 300 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shelf 1 */}
      <rect x="20" y="58" width="260" height="7" rx="3" fill="white" opacity="0.3"/>
      {/* Shelf 2 */}
      <rect x="20" y="118" width="260" height="7" rx="3" fill="white" opacity="0.3"/>
      {/* Shelf 3 */}
      <rect x="20" y="178" width="260" height="7" rx="3" fill="white" opacity="0.3"/>
      {/* Row 1 boxes */}
      {[30,58,84,108,132,158,182,206,232,254].map((x, i) => (
        <rect key={i} x={x} y={i%2===0?28:33} width={i%3===0?22:18} height={i%2===0?28:23} rx="3"
          fill={["#42a5f5","#90caf9","#1976d2","#0d47a1","#26c6da","#42a5f5","#1565c0","#80deea","#1e88e5","#5c9bd1"][i]}
          opacity="0.85"/>
      ))}
      {/* Row 2 boxes */}
      {[30,55,82,106,130,156,182,208,234,256].map((x, i) => (
        <rect key={i} x={x} y={i%2===0?88:92} width={i%3===0?20:18} height={i%2===0?28:24} rx="3"
          fill={["#26c6da","#1565c0","#42a5f5","#0d47a1","#90caf9","#1976d2","#5c9bd1","#1e88e5","#42a5f5","#26c6da"][i]}
          opacity="0.85"/>
      ))}
      {/* Row 3 boxes */}
      {[30,56,82,108,132,158,184,208,232,256].map((x, i) => (
        <rect key={i} x={x} y={i%2===0?148:152} width={i%3===0?22:18} height={i%2===0?28:24} rx="3"
          fill={["#1e88e5","#0d47a1","#26c6da","#42a5f5","#1565c0","#90caf9","#1976d2","#5c9bd1","#80deea","#1565c0"][i]}
          opacity="0.85"/>
      ))}
      {/* Pills scattered */}
      <ellipse cx="60" cy="200" rx="12" ry="7" fill="white" opacity="0.4"/>
      <ellipse cx="120" cy="198" rx="10" ry="6" fill="#42a5f5" opacity="0.5"/>
      <ellipse cx="200" cy="202" rx="12" ry="7" fill="white" opacity="0.35"/>
      <ellipse cx="250" cy="199" rx="9" ry="5" fill="#26c6da" opacity="0.5"/>
    </svg>
  );
}

function LabsIllustration() {
  return (
    <svg viewBox="0 0 300 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lab bench */}
      <rect x="10" y="175" width="280" height="10" rx="4" fill="white" opacity="0.2"/>
      {/* Microscope */}
      <rect x="55" y="155" width="70" height="12" rx="4" fill="white" opacity="0.35"/>
      <rect x="82" y="90" width="16" height="67" rx="4" fill="white" opacity="0.35"/>
      <rect x="74" y="80" width="32" height="14" rx="5" fill="white" opacity="0.4"/>
      <ellipse cx="90" cy="76" rx="22" ry="11" fill="white" opacity="0.3"/>
      <rect x="87" y="38" width="9" height="38" rx="4" fill="white" opacity="0.45"/>
      <circle cx="91" cy="34" r="10" fill="white" opacity="0.4"/>
      <circle cx="91" cy="34" r="5" fill="#26c6da" opacity="0.8"/>
      <rect x="90" y="77" width="45" height="7" rx="3" fill="white" opacity="0.35" transform="rotate(-28 90 77)"/>
      <rect x="72" y="142" width="56" height="7" rx="3" fill="white" opacity="0.35"/>
      <rect x="82" y="115" width="16" height="27" rx="2" fill="#26c6da" opacity="0.3"/>
      {/* Test tubes */}
      {[
        { x: 160, h: 70, c: "#ef5350" },
        { x: 182, h: 80, c: "#26c6da" },
        { x: 204, h: 65, c: "#66bb6a" },
        { x: 226, h: 75, c: "#ffa726" },
        { x: 248, h: 60, c: "#ab47bc" },
      ].map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={175 - t.h} width="16" height={t.h} rx="8" fill={t.c} opacity="0.55"/>
          <rect x={t.x} y={175 - t.h * 0.45} width="16" height={t.h * 0.45} rx="8" fill={t.c} opacity="0.75"/>
          <rect x={t.x} y={175 - t.h} width="16" height="6" rx="3" fill="white" opacity="0.35"/>
        </g>
      ))}
      {/* Tube rack */}
      <rect x="152" y="173" width="118" height="9" rx="3" fill="white" opacity="0.3"/>
      {/* Beaker */}
      <path d="M20 120 L14 170 L50 170 L44 120 Z" fill="#26c6da" opacity="0.25"/>
      <rect x="15" y="117" width="28" height="6" rx="2" fill="white" opacity="0.3"/>
      <path d="M22 143 L16 168 L48 168 L42 143 Z" fill="#26c6da" opacity="0.35"/>
    </svg>
  );
}

function HospitalIllustration() {
  return (
    <svg viewBox="0 0 300 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Building */}
      <rect x="60" y="60" width="180" height="130" rx="6" fill="white" opacity="0.12"/>
      <rect x="60" y="60" width="180" height="130" rx="6" stroke="white" strokeWidth="2" opacity="0.2"/>
      {/* Floors */}
      <rect x="60" y="100" width="180" height="2" fill="white" opacity="0.15"/>
      <rect x="60" y="140" width="180" height="2" fill="white" opacity="0.15"/>
      {/* Windows row 1 */}
      {[80,110,140,170,200].map((x,i) => (
        <rect key={i} x={x} y="70" width="20" height="22" rx="3" fill="#26c6da" opacity="0.45"/>
      ))}
      {/* Windows row 2 */}
      {[80,110,140,170,200].map((x,i) => (
        <rect key={i} x={x} y="110" width="20" height="22" rx="3" fill="#26c6da" opacity="0.4"/>
      ))}
      {/* Windows row 3 */}
      {[80,110,170,200].map((x,i) => (
        <rect key={i} x={x} y="150" width="20" height="22" rx="3" fill="#26c6da" opacity="0.35"/>
      ))}
      {/* Door */}
      <rect x="135" y="155" width="30" height="35" rx="4" fill="white" opacity="0.25"/>
      {/* Cross sign */}
      <rect x="144" y="22" width="12" height="36" rx="3" fill="white" opacity="0.7"/>
      <rect x="132" y="34" width="36" height="12" rx="3" fill="white" opacity="0.7"/>
      {/* Ambulance */}
      <rect x="20" y="160" width="55" height="28" rx="5" fill="white" opacity="0.2"/>
      <circle cx="30" cy="192" r="8" fill="white" opacity="0.3"/>
      <circle cx="63" cy="192" r="8" fill="white" opacity="0.3"/>
      <rect x="22" y="164" width="20" height="14" rx="2" fill="#26c6da" opacity="0.5"/>
      <rect x="32" y="167" width="6" height="2" rx="1" fill="white" opacity="0.7"/>
      <rect x="36" y="164" width="2" height="6" rx="1" fill="white" opacity="0.7"/>
      {/* Trees */}
      <circle cx="26" cy="140" r="16" fill="white" opacity="0.1"/>
      <rect x="23" y="155" width="6" height="18" rx="2" fill="white" opacity="0.15"/>
      <circle cx="274" cy="138" r="14" fill="white" opacity="0.1"/>
      <rect x="271" y="151" width="6" height="18" rx="2" fill="white" opacity="0.15"/>
    </svg>
  );
}

const IllustrationMap: Record<string, React.FC> = {
  medicals: MedicalsIllustration,
  labs: LabsIllustration,
  hospital: HospitalIllustration,
};

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(320px, 55vw, 580px)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 10 : 0 }}
          aria-hidden={idx !== current}
        >
          {slide.type === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src!}
              alt={slide.alt!}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 47%" }}
            />
          ) : (
            /* Custom illustrated slide */
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg}`}>
              {/* Right illustration */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-60 pointer-events-none">
                {(() => {
                  const Comp = IllustrationMap[slide.illustration!];
                  return Comp ? <Comp /> : null;
                })()}
              </div>
              {/* Left-to-center content area */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
              <div className="relative h-full flex flex-col justify-center px-8 sm:px-14 lg:px-20 max-w-2xl">
                <span className={`inline-block ${slide.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit`}>
                  {slide.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3 whitespace-pre-line">
                  {slide.headline}
                </h2>
                <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-md">{slide.sub}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={slide.cta!.href}
                    className="bg-white text-[#1565c0] font-bold px-6 py-2.5 rounded-md hover:shadow-lg transition-all text-sm">
                    {slide.cta!.label}
                  </Link>
                  <Link href={slide.cta2!.href}
                    className="border-2 border-white/60 text-white font-semibold px-6 py-2.5 rounded-md hover:bg-white/10 transition-all text-sm">
                    {slide.cta2!.label}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? "w-7 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-16 z-20 bg-black/30 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
        {current + 1} / {total}
      </div>
    </div>
  );
}
