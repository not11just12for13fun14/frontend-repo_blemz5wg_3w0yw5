import { motion } from 'framer-motion';
import { Leaf, Flame, Soup } from 'lucide-react';

const features = [
  { icon: Flame, title: 'Tandoor Classics', desc: 'Char-grilled kebabs and breads baked fresh.' },
  { icon: Soup, title: 'Slow-Simmered Curries', desc: 'Rich gravies with house-roasted masalas.' },
  { icon: Leaf, title: 'Veg & Vegan Friendly', desc: 'Plenty of plant-forward, gluten-free options.' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-neutral-950 text-white py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Rooted in tradition. Crafted for today.</h2>
            <p className="mt-4 text-white/80 max-w-prose">
              From fragrant biryanis to buttery naans, our kitchen brings the warmth of Indian hospitality to Revelstoke.
              We source quality ingredients and roast our spices in-house for deep, layered flavor.
            </p>

            <ul className="mt-8 grid sm:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4">
                  <Icon className="text-amber-400" size={20} />
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="text-sm text-white/70">{desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1604908554007-14e7f3e84cd0?q=80&w=1600&auto=format&fit=crop"
              alt="Plates of Indian food on a table"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
