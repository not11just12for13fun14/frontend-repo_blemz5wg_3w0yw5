import { motion } from 'framer-motion';

const items = [
  {
    category: 'Starters',
    dishes: [
      { name: 'Samosa Chaat', price: 12, desc: 'Crispy samosa, chickpeas, yogurt, chutneys.' },
      { name: 'Tandoori Chicken Tikka', price: 16, desc: 'Yogurt-marinated chicken, mint chutney.' },
    ],
  },
  {
    category: 'Mains',
    dishes: [
      { name: 'Butter Chicken', price: 21, desc: 'Creamy tomato sauce, fenugreek, cream.' },
      { name: 'Palak Paneer', price: 19, desc: 'Spinach gravy, cottage cheese, spices.' },
    ],
  },
  {
    category: 'Biryani & Breads',
    dishes: [
      { name: 'Hyderabadi Biryani', price: 22, desc: 'Fragrant basmati, saffron, caramelized onions.' },
      { name: 'Garlic Naan', price: 5, desc: 'Tandoor-baked, garlic butter, cilantro.' },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="relative bg-neutral-950 text-white py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(251,191,36,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Menu Highlights</h2>
          <p className="mt-3 text-white/70">Curated favorites, available for dine-in and takeout.</p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
            >
              <h3 className="font-semibold text-amber-400">{group.category}</h3>
              <ul className="mt-4 space-y-4">
                {group.dishes.map((d) => (
                  <li key={d.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{d.name}</p>
                      <p className="text-sm text-white/70">{d.desc}</p>
                    </div>
                    <span className="text-amber-400 font-semibold">${d.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
