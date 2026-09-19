"use client";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/917416888998?text=Hello%2C%20I%20need%20assistance%20from%20Krishna%20Hospitals%20%26%20Labs"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-20 sm:bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip label */}
      <span
        className={`bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        Chat with us
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25d366] shadow-lg hover:scale-110 transition-transform duration-200">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white relative z-10"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.648 4.829 1.778 6.865L2 30l7.335-1.922A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.555 11.555 0 0 1-5.89-1.608l-.422-.25-4.352 1.14 1.16-4.24-.276-.435A11.556 11.556 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.336-8.664c-.347-.174-2.055-1.014-2.374-1.13-.32-.116-.552-.174-.784.174-.232.347-.899 1.13-1.102 1.362-.203.232-.406.26-.753.087-.347-.174-1.464-.54-2.788-1.72-1.03-.92-1.726-2.056-1.929-2.403-.203-.347-.022-.535.153-.708.157-.156.347-.406.52-.61.174-.202.232-.347.348-.578.116-.232.058-.435-.029-.61-.087-.174-.784-1.888-1.073-2.587-.283-.68-.57-.587-.784-.598l-.667-.011c-.232 0-.61.087-.928.435-.319.347-1.218 1.19-1.218 2.9s1.247 3.364 1.42 3.596c.174.232 2.454 3.748 5.944 5.257.831.358 1.48.572 1.985.733.834.265 1.594.228 2.194.138.669-.1 2.055-.84 2.345-1.652.29-.812.29-1.508.203-1.652-.086-.145-.318-.232-.666-.406z"/>
        </svg>
      </div>
    </a>
  );
}
