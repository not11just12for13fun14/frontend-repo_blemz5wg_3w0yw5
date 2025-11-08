const sections = [
  {
    title: "Starters",
    items: [
      { name: "Vegetable Samosa", desc: "Crispy pastry stuffed with spiced potatoes & peas", price: "$7" },
      { name: "Onion Bhaji", desc: "Golden-fried onion fritters with tamarind chutney", price: "$8" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Butter Chicken", desc: "Tandoor chicken in a creamy tomato sauce", price: "$19" },
      { name: "Chana Masala (V)", desc: "Chickpeas simmered with onions, tomatoes & spices", price: "$16" },
      { name: "Lamb Rogan Josh", desc: "Kashmiri-style curry with tender lamb", price: "$22" },
    ],
  },
  {
    title: "From the Tandoor",
    items: [
      { name: "Garlic Naan", desc: "Leavened bread with garlic & cilantro", price: "$4" },
      { name: "Paneer Tikka", desc: "Marinated cottage cheese grilled to perfection", price: "$17" },
    ],
  },
  {
    title: "Sides & Sweets",
    items: [
      { name: "Basmati Rice", desc: "Steamed fragrant rice", price: "$4" },
      { name: "Gulab Jamun", desc: "Warm milk-solid dumplings in cardamom syrup", price: "$7" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-amber-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Menu Highlights</h2>
        <p className="mt-3 text-gray-600 text-center">A taste of our guest favourites. Full menu available in-house.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-sm border border-amber-100 p-5">
              <h3 className="text-xl font-semibold text-amber-800">{section.title}</h3>
              <ul className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <span className="text-amber-700 font-semibold whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
