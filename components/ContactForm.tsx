"use client";
import { useState } from "react";
const doctorsBySpecialty: Record<string, string[]> = {
  "Cardiology": ["Dr. Navali Krishna Prasad"],
  "Neurology": [],
  "Neuro Spine": [],
  "Orthopedics": ["Dr. Prudhvi Pinnaka"],
  "Gynecology & Obstetrics": ["Dr. D. Meenakshi Pranavi"],
  "Pulmonology": [],
  "General Medicine": ["Dr. M. Adam Khan", "Dr. Gayam Srikanth Reddy"],
  "Surgical Gastroenterology": ["Dr. K. Venkat Ram"],
  "Urology & Nephrology": [],
  "Nephrology": [],
  "Vascular Surgery": [],
  "Dentistry": ["Dr. Asha Dharmala"]
};

// Derive specialties array from the keys above
const specialties = Object.keys(doctorsBySpecialty);

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    let message = `*🗓️ New Appointment Request*\n\n`;
    message += `*Name:* ${data.fullName}\n`;
    message += `*Phone:* ${data.phone}\n`;
    if (data.email) message += `*Email:* ${data.email}\n`;
    message += `*Service:* ${data.service}\n`;
    if (data.speciality) message += `*Speciality:* ${data.speciality}\n`;
    if (data.doctor) message += `*Preferred Doctor:* ${data.doctor}\n`;
    message += `*Date:* ${data.date}\n`;
    message += `*Time:* ${data.time}\n`;
    if (data.notes) message += `*Notes:* ${data.notes}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917416888998?text=${encodedMessage}`, "_blank");

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-extrabold text-[#002f5d] mb-2">Thank You!</h3>
        <p className="text-gray-500 text-sm">Your appointment request has been sent. We will contact you shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-[#002f5d] text-sm font-semibold hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#002f5d] mb-2">Book an Appointment</h3>
        <p className="text-gray-500 text-sm">Schedule your visit with our expert doctors</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Row 1: Name and Phone */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          <div className="space-y-1.5">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Row 2: Email Address */}
        <div className="space-y-1.5">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
          />
        </div>

        {/* Row 3: Service & Doctor */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">
              Service *
            </label>
            <select
              required
              name="service"
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value);
                setSelectedSpecialty("");
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
            >
              <option value="">Select Service</option>
              <option value="OP Consultation">OP Consultation</option>
              <option value="Lab Test">Lab Test</option>
              <option value="Video Consultation">Video Consultation</option>
              <option value="Emergency Care">Emergency Care</option>
            </select>
          </div>
          {["OP Consultation", "Video Consultation"].includes(selectedService) && (
            <div className="space-y-1.5 animate-in fade-in zoom-in duration-300">
              <label className="block text-sm font-medium text-gray-700">
                Speciality *
              </label>
              <select
                required
                name="speciality"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
              >
                <option value="">Select Speciality</option>
                {specialties.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          {/* Conditional Row: Preferred Doctor (Only if Speciality chosen) */}
          {["OP Consultation", "Video Consultation"].includes(selectedService) && selectedSpecialty && (
            <div className="space-y-1.5 sm:col-span-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="block text-sm font-medium text-gray-700">
                Preferred Doctor
              </label>
              <select
                name="doctor"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
              >
                <option value="">Any Available Doctor</option>
                {doctorsBySpecialty[selectedSpecialty]?.map(doc => (
                  <option key={doc} value={doc}>{doc}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Row 4: Date & Time */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
            />
          </div>
          <div className="space-y-1.5">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Preferred Time *
            </label>
            <select
              required
              name="time"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
            >
              <option value="">Select Time</option>
              <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
              <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
              <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
            </select>
          </div>
        </div>

        {/* Row 5: Notes */}
        <div className="space-y-1.5">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1.5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Additional Notes
          </label>
          <textarea
            rows={3}
            name="notes"
            placeholder="Any specific concerns or information you'd like to share..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#004d40] hover:bg-[#00382e] text-white font-bold py-3 rounded-lg transition-colors text-sm"
        >
          Send Appointment Request
        </button>
      </form>
    </div>
  );
}
