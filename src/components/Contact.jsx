import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-neutral-950 text-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Visit & Contact</h2>
            <p className="mt-3 text-white/70">Downtown Revelstoke — cozy dining room and friendly service.</p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><MapPin size={18} className="text-amber-400" /> 123 Mackenzie Ave, Revelstoke, BC</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-amber-400" /> (250) 555-0123</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-amber-400" /> hello@revelstokeindian.ca</li>
            </ul>

            <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Map of Revelstoke Indian Kitchen"
                src="https://www.google.com/maps?q=Revelstoke%2C%20BC&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-white/70">Name</span>
                <input
                  aria-label="Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70">Email</span>
                <input
                  aria-label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block mt-4">
              <span className="text-sm text-white/70">Message</span>
              <textarea
                aria-label="Message"
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                required
                className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="How can we help?"
              />
            </label>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-amber-500 transition-colors"
              >
                Send Message
              </button>
              {sent && <span className="text-sm text-amber-400">Thanks! We'll be in touch.</span>}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
