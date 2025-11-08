export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
              alt="Tandoor oven"
              className="w-full h-72 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We bring the culinary traditions of India to the mountains of British Columbia. Our chefs craft each dish using time-honoured techniques, aromatic spices, and the freshest local ingredients.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Whether you're fueling up after a day on the slopes or gathering with friends, you'll find warm hospitality and flavours that feel like home.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-600"/>Tandoor-grilled specialties</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-600"/>Vegan & Gluten-free options</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-600"/>Locally sourced ingredients</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-600"/>Takeout & Dine-in</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
