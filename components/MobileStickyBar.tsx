import Link from "next/link";
import React from "react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden bg-white/90 backdrop-blur-md px-3 py-3 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.1)] justify-center gap-2">
      {/* Call Us Button */}
      <a
        href="tel:7416888998"
        className="flex-1 bg-gradient-to-r from-[#813efd] to-[#4527f6] text-white rounded-xl flex items-center justify-between px-3.5 py-2.5 shadow-lg shadow-indigo-500/30 active:scale-95 transition-transform"
      >
        <svg className="w-6 h-6 shrink-0 ml-1 text-white fill-white drop-shadow-sm" fill="white" viewBox="0 0 24 24">
          <path d="M20.005 15.65c-.886.9-2.072 1.341-3.557 1.32-.423-.006-.889-.046-1.398-.12-3.13-.456-6.195-2.274-8.798-5.234-2.478-2.822-4.041-5.918-4.485-8.895-.145-.96-.13-1.84.042-2.613C2.102-.405 3.52-.008 4.09.28c.451.229 1.944 3.011 2.378 4.223.468 1.3.176 2.052-.399 2.508l-1.047.835c.784 1.838 2.227 3.868 4.3 5.485 1.7 1.324 3.328 2.32 4.908 2.898l.613-.934c.594-.906 1.488-1.282 2.686-1.127 1.109.144 3.754 1.258 4.7 1.983.844.646.669 2.029-.224 2.9h0z" />
        </svg>
        <div className="flex whitespace-nowrap flex-1 mx-2 overflow-hidden items-start text-left">
          <span className="text-[13px] font-bold  leading-tight tracking-[0.02em]">CALL US</span>
          {/* <span className="text-[10px] font-medium leading-tight opacity-90 mt-0.5">7416888998</span> */}
        </div>
        <svg className="w-4 h-4 shrink-0 mr-0.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Book Appointment Button */}
      <Link
        href="/hospital#appointment"
        className="flex-1 bg-gradient-to-r from-[#ff8700] to-[#ff0042] text-white rounded-xl flex items-center justify-between px-3.5 py-2.5 shadow-lg shadow-rose-500/30 active:scale-95 transition-transform"
      >
        <svg className="w-6 h-6 shrink-0 ml-1 text-white fill-white drop-shadow-sm" fill="white" viewBox="0 0 24 24">
          <path d="M19.5 4h-1V2.5a.5.5 0 0 0-1 0V4h-11V2.5a.5.5 0 0 0-1 0V4h-1a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 5.5 22h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 4zm-14 2h13a.5.5 0 0 1 .5.5v2.5H5V6.5a.5.5 0 0 1 .5-.5zm14 13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V10h14v9.5z" />
          <path d="M7.75 13.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zm4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zm4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
        </svg>
        <div className="flex flex-col flex-1 mx-2 overflow-hidden items-start text-left">
          <span className="text-[11px] md:text-[12px] font-bold leading-tight tracking-[0.01em]">BOOK APPOINTMENT</span>
          <span className="text-[9px] font-medium leading-tight opacity-90 mt-0.5">Schedule Your Visit</span>
        </div>
        <svg className="w-4 h-4 shrink-0 mr-0.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
