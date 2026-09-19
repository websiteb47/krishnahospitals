import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Krishna Hospitals",
  description: "Get in touch with Krishna Hospitals in Guntur for emergencies, appointments, and inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient pt-24 pb-16 px-6 text-center text-white relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact <span className="text-[#00e5ff]">Us</span></h1>
          <p className="text-blue-100 text-lg">We are here to help you 24/7. Reach out for any emergencies, generic inquiries, or appointments.</p>
        </div>
      </section>

      <section className="bg-[#f0f5ff] py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-3xl font-extrabold text-[#1e3a5f] mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex gap-5 items-start bg-[#f8fbff] p-5 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#1a56db] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"/></svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e3a5f] text-xl">Hospital Address</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed text-sm sm:text-base">
                    Amaravathi Rd, beside B.V.R. Convention,<br/> 
                    Panduranga Nagar, Guntur, AP – 522007
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 items-start bg-[#f8fbff] p-5 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#1a56db] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.595-5.236-3.935-6.83-6.83l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                </div>
                <div className="w-full">
                  <h3 className="font-extrabold text-[#1e3a5f] text-xl">Phone Numbers</h3>
                  <div className="mt-2 flex flex-col gap-2 text-sm sm:text-base w-full">
                    <div className="flex justify-between items-center sm:max-w-xs border-b border-gray-100 pb-2">
                       <span className="text-gray-500 font-medium">Emergency / Info:</span> 
                       <a href="tel:7416888998" className="text-[#1a56db] font-extrabold hover:underline">7416888998</a>
                    </div>
                    <div className="flex justify-between items-center sm:max-w-xs border-b border-gray-100 pb-2">
                       <span className="text-gray-500 font-medium">OP &amp; Appt:</span> 
                       <a href="tel:6262787896" className="text-[#1a56db] font-extrabold hover:underline">6262787896</a>
                    </div>
                    <div className="flex justify-between items-center sm:max-w-xs">
                       <span className="text-gray-500 font-medium">General Help:</span> 
                       <a href="tel:8074699548" className="text-[#1a56db] font-extrabold hover:underline">8074699548</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 items-start bg-[#f8fbff] p-5 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#1a56db] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1e3a5f] text-xl">Email Address</h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    <a href="mailto:info@krishnahospitals.in" className="text-[#1565c0] font-bold hover:underline">info@krishnahospitals.in</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/917416888998" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold py-4 px-4 rounded-xl text-center transition-colors shadow-lg shadow-green-500/30">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
              <a href="tel:7416888998" className="flex-1 flex items-center justify-center gap-2 bg-[#1a56db] hover:bg-[#0d2d5e] text-white font-extrabold py-4 px-4 rounded-xl text-center transition-colors shadow-lg shadow-blue-500/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.595-5.236-3.935-6.83-6.83l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Connect</span>
              <h2 className="text-3xl font-extrabold text-[#1e3a5f] mt-2">Send a Message</h2>
              <p className="text-gray-500 mt-2 text-sm">Need help or want to book an appointment? Fill out the form and we'll immediately get back to you.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[500px] bg-gray-200">
        <iframe 
          title="Krishna Hospitals Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15315.782449908113!2d80.41866538715819!3d16.32572300000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b370806dcf7%3A0x99e4798d8e3e1425!2sKRISHNA%20HOSPITALS%20%26%20LABS!5e0!3m2!1sen!2sus!4v1789808641059!5m2!1sen!2sus"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
        />
      </section>
    </>
  );
}
