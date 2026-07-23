"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Hospital",
    href: "/hospital",
    dropdown: [
      { label: "Emergency & OP", href: "/hospital#emergency" },
      { label: "Specialties", href: "/hospital#specialties" },
      { label: "Our Doctors", href: "/doctors" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Medicals",
    href: "/medical-shop",
    dropdown: [
      { label: "Wholesale", href: "/medical-shop#wholesale" },
      { label: "Retail", href: "/medical-shop#retail" },
      { label: "Home Delivery", href: "/medical-shop#delivery" },
    ],
  },
  {
    label: "Labs",
    href: "/labs",
    dropdown: [
      { label: "Lab Tests", href: "/labs#tests" },
      { label: "Home Collection", href: "/labs#home-collection" },
      { label: "Book a Test", href: "/labs#booking" },
    ],
  },
  {
    label: "Hospital Services",
    href: "/hospital",
    dropdown: [
      { label: "Emergency & OP", href: "/hospital#emergency" },
      { label: "Specialties", href: "/hospital#specialties" },
    ],
  },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Krishna Hospitals & Labs"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="font-extrabold text-[#1565c0] text-base leading-none">KRISHNA</p>
            <p className="text-[10px] text-gray-500 font-semibold tracking-wide uppercase">Hospitals &amp; Labs</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-600 hover:text-[#1565c0] transition-colors relative group"
              >
                {link.label}
                {link.dropdown && (
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {/* Active underline */}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1565c0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
              {link.dropdown && openDropdown === link.label && (
                <ul className="absolute top-full left-0 mt-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {link.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1565c0] hover:bg-[#e3f0fb] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right: emergency + CTA */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest leading-none">24/7 Emergency</p>
            <a href="tel:7416888998" className="text-[#1565c0] font-extrabold text-sm hover:text-[#0d2d5e] transition-colors">
              +91 7416888998
            </a>
          </div>
          <Link
            href="/hospital#appointment"
            className="bg-[#1565c0] hover:bg-[#0d2d5e] text-white text-xs font-bold px-4 py-2.5 rounded-md transition-colors shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-2 px-3 font-semibold text-gray-700 hover:text-[#1565c0] hover:bg-[#e3f0fb] rounded-lg text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="ml-4 space-y-0.5 mt-0.5">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block py-1.5 px-3 text-xs text-gray-500 hover:text-[#1565c0] hover:bg-[#e3f0fb] rounded-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      → {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            <a href="tel:7416888998" className="flex-1 text-center bg-red-600 text-white font-bold py-2.5 rounded-md text-sm">
              📞 Emergency
            </a>
            <Link href="/hospital#appointment" className="flex-1 text-center bg-[#1565c0] text-white font-bold py-2.5 rounded-md text-sm" onClick={() => setMobileOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
