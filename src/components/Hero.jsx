export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Authentic Indian Flavours in the heart of Revelstoke
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Savor rich curries, tandoor-grilled specialties, and fresh naan made to order. Warm hospitality and vibrant spices, just steps from Mackenzie Avenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center rounded-md bg-amber-600 px-6 py-3 text-white font-semibold shadow hover:bg-amber-700 transition">View Menu</a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-amber-600 px-6 py-3 text-amber-700 font-semibold hover:bg-amber-50">Book a Table</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Open daily • Dine-in • Takeout • Vegan & Gluten-free options</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588162621324-cb89e3580f89?q=80&w=1600&auto=format&fit=crop"
              alt="Indian feast with curries and naan"
              className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl shadow-xl"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden sm:flex flex-col gap-1">
              <span className="text-sm font-semibold text-gray-900">Family Owned</span>
              <span className="text-xs text-gray-600">Serving Revelstoke with love</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
