import ContactForm from "@/components/ContactForm";

const shopFeatures = [
  {
    imgSrc: "/service_pharmacy.png",
    title: "Flat 22% Discount",
    desc: "Guaranteed 22% off on all medicines — retail, wholesale, and hospital-attached purchases.",
    highlight: true,
  },
  {
    imgSrc: "/medicine delivery.png",
    title: "Free 24/7 Home Delivery",
    desc: "Order any time of day or night and get your medicines delivered to your door free of charge.",
    highlight: false,
  },
  {
    imgSrc: "/service_pharmacy.png",
    title: "Open 24/7",
    desc: "Our medical shop never closes. Get medicines at midnight, weekends, or during holidays.",
    highlight: false,
  },
  {
    imgSrc: "/shop_medicines.png",
    title: "Wholesale Supply",
    desc: "Bulk purchase for clinics, nursing homes, hospitals, and pharmacies at wholesale rates + 22% off.",
    highlight: false,
  },
  {
    imgSrc: "/shop_medicines.png",
    title: "All Brands Available",
    desc: "Branded and generic medicines, surgical items, medical equipment and health products.",
    highlight: false,
  },
  {
    imgSrc: "/service_pharmacy.png",
    title: "Genuine & Quality Assured",
    desc: "All medicines sourced directly from certified distributors. 100% genuine products guaranteed.",
    highlight: false,
  },
];

const categories = [
  { imgSrc: "/shop_medicines.png", name: "Tablets & Capsules" },
  { imgSrc: "/shop_medicines.png", name: "Syrups & Liquids" },
  { imgSrc: "/shop_medicines.png", name: "Injectables" },
  { imgSrc: "/shop_medicines.png", name: "Surgical & Disposables" },
  { imgSrc: "/shop_medicines.png", name: "Dressings & Bandages" },
  { imgSrc: "/shop_medicines.png", name: "Medical Devices" },
  { imgSrc: "/shop_medicines.png", name: "Cosmetics & Skin Care" },
  { imgSrc: "/shop_medicines.png", name: "Nutritional Supplements" },
  { imgSrc: "/shop_medicines.png", name: "Baby & Mother Care" },
  { imgSrc: "/shop_medicines.png", name: "Cardiac Medicines" },
  { imgSrc: "/shop_medicines.png", name: "Dental Products" },
  { imgSrc: "/shop_medicines.png", name: "Ayurvedic & Herbal" },
];

const wholesaleSteps = [
  { imgSrc: "/shop_medicines.png", step: "1", title: "Submit Your Requirement", desc: "Share your medicine list with quantities via our form or WhatsApp." },
  { imgSrc: "/shop_medicines.png", step: "2", title: "Get Wholesale Quote", desc: "Receive a competitive quote with 22% discount applied automatically." },
  { imgSrc: "/shop_medicines.png", step: "3", title: "Confirm & Pay", desc: "Confirm your order and complete payment securely." },
  { imgSrc: "/medicine delivery.png", step: "4", title: "Fast Delivery", desc: "Bulk order delivered quickly to your facility." },
];

export default function MedicalShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#00acc1] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#00acc1] rounded-full animate-pulse" />
              Wholesale &amp; Retail Medical Shop
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3">
              Medicines at <span className="text-[#00e5ff]">Flat 22% Off</span>
            </h1>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-lg">
              24/7 open medical shop offering wholesale and retail medicines with guaranteed flat 22% discount. Free home delivery around the clock.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#order" className="bg-[#f57f17] hover:bg-[#ef6c00] text-white font-bold px-7 py-3 rounded-md transition-all text-sm">
                Order Medicines Now
              </a>
              <a href="https://wa.me/917416888998" className="border-2 border-white/60 text-white font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-all text-sm">
                WhatsApp Order
              </a>
            </div>
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-xl">
              <span className="text-[#00e5ff] text-2xl font-extrabold">22%</span>
              <div className="text-white text-sm">
                <p className="font-bold">Flat Discount</p>
                <p className="text-blue-200 text-xs">On ALL purchases – wholesale, retail &amp; hospital</p>
              </div>
            </div>
          </div>
          {/* Big discount badge */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#1565c0] to-[#00acc1] flex flex-col items-center justify-center shadow-2xl">
                <p className="text-white text-base font-bold">FLAT</p>
                <p className="text-white text-6xl font-extrabold leading-none">22%</p>
                <p className="text-white text-lg font-extrabold">DISCOUNT</p>
                <p className="text-blue-100 text-xs mt-1 text-center px-4">On ALL medicines</p>
              </div>
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-[#1e3a5f] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg">
                + FREE Delivery
              </div>
              <div className="absolute -bottom-3 -left-3 bg-red-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg">
                24/7 Open
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 20C1200 50 960 5 720 20C480 35 240 5 0 20L0 50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section id="retail" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Why Shop With Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mt-2">Everything You Need</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopFeatures.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl p-7 shadow-md border card-hover ${f.highlight
                ? "bg-gradient-to-br from-green-600 to-green-700 text-white border-green-500"
                : "bg-white border-gray-100"
                }`}
            >
              <div className="mb-5 w-16 h-16 rounded-full border-4 overflow-hidden flex items-center justify-center border-white shadow-sm ring-2 ring-gray-50 bg-gray-50">
                <img src={f.imgSrc} alt={f.title} className="w-full h-full object-cover" />
              </div>
              <h3 className={`font-extrabold text-base mb-2 ${f.highlight ? "text-white" : "text-[#1e3a5f]"}`}>
                {f.title}
              </h3>
              <p className={`text-sm leading-relaxed ${f.highlight ? "text-green-100" : "text-gray-500"}`}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Wholesale section */}
      <section id="wholesale" className="bg-[#1e3a5f] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-300 font-bold text-sm uppercase tracking-widest">Bulk Orders</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Wholesale Supply</h2>
            <p className="text-blue-200 mt-3 max-w-2xl mx-auto">
              Supplying medicines to hospitals, clinics, nursing homes, and pharmacies with guaranteed 22% discount on all bulk orders.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {wholesaleSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1a56db] flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4">
                  {s.step}
                </div>
                <div className="mb-4 w-16 h-16 mx-auto rounded-full border-2 overflow-hidden flex items-center justify-center border-white shadow-sm ring-2 ring-gray-50 bg-gray-50">
                  <img src={s.imgSrc} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-blue-300 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#order"
              className="bg-green-500 hover:bg-green-400 text-white font-extrabold px-10 py-4 rounded-full transition-all hover:scale-105 inline-block text-sm shadow-xl"
            >
              Place Wholesale Order
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#f0f5ff] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Products</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mt-2">Product Categories</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 card-hover">
                <div className="mb-4 w-16 h-16 mx-auto rounded-full border-4 overflow-hidden flex items-center justify-center border-white shadow-sm ring-2 ring-gray-50 bg-gray-50">
                  <img src={c.imgSrc} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-[#1e3a5f] text-sm">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Delivery */}
      <section id="delivery" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="bg-gradient-to-br from-[#1a56db] to-[#1e3a5f] rounded-3xl p-10 text-white shadow-2xl text-center">
            <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden border-4 border-white/20">
              <img src="/medicine delivery.png" alt="Delivery" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Free 24/7 Home Delivery</h3>
            <p className="text-blue-200 mb-6 text-sm">Never run out of medicines again. We deliver to your door anytime.</p>
            <div className="grid grid-cols-2 gap-4 text-left">
              {[
                "Free delivery always",
                "Available 24/7",
                "Fast & reliable",
                "Contactless delivery",
                "All medicines in stock",
                "No minimum order",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-blue-100">
                  <span className="text-green-400 font-bold">✓</span> {f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Free Delivery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mt-3 mb-5">
              Medicines Delivered Free to Your Door
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Whether it's midnight or a holiday, our team ensures your medicines reach you. Place an order via call or WhatsApp and we handle the rest — for free.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { t: "Call or WhatsApp your medicine list" },
                { t: "Confirm availability & 22% discounted price" },
                { t: "Receive at your doorstep — free, fast, safe" },
              ].map((s) => (
                <div key={s.t} className="flex gap-3 items-center bg-[#f0f5ff] rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full border-2 overflow-hidden flex items-center justify-center border-white shadow-sm ring-1 ring-gray-50 shrink-0">
                    <img src="/shop_medicines.png" alt="step" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-gray-700 text-sm font-semibold">{s.t}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#order" className="bg-[#1a56db] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1e3a5f] transition-colors text-sm">
                Order Now
              </a>
              <a href="https://wa.me/919999999999" className="bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 transition-colors text-sm">
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="bg-[#f0f5ff] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#1a56db] font-bold text-sm uppercase tracking-widest">Order</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e3a5f] mt-2">Order Medicines</h2>
            <p className="text-gray-500 mt-3">Fill in your details and we'll contact you to confirm your order with 22% discount applied.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
