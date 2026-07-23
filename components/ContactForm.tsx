"use client";
import { useState } from "react";

export default function ContactForm({ title = "Send Us a Message" }: { title?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-extrabold text-[#1e3a5f] mb-2">Thank You!</h3>
        <p className="text-gray-500 text-sm">We received your message and will get back to you shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-[#1a56db] text-sm font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
      <h3 className="text-lg font-extrabold text-[#1e3a5f] mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
            <input
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Service Required</label>
          <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] focus:border-transparent text-gray-600">
            <option value="">Select a service</option>
            <option>Hospital / OP Appointment</option>
            <option>Lab Test Booking</option>
            <option>Home Sample Collection</option>
            <option>Medicine Order</option>
            <option>Video Consultation</option>
            <option>Home Doctor Visit</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Message</label>
          <textarea
            rows={3}
            placeholder="Tell us how we can help..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a56db] focus:border-transparent resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#1a56db] hover:bg-[#1e3a5f] text-white font-bold py-3 rounded-xl transition-colors text-sm"
        >
          Send Message →
        </button>
      </form>
    </div>
  );
}
