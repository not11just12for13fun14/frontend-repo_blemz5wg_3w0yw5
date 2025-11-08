import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-3 text-gray-700">Located in downtown Revelstoke, BC.</p>
            <div className="mt-6 space-y-2 text-gray-800">
              <p><span className="font-semibold">Address:</span> 123 Mackenzie Ave, Revelstoke, BC</p>
              <p><span className="font-semibold">Phone:</span> (250) 555-0147</p>
              <p><span className="font-semibold">Hours:</span> Mon–Sun: 11:30am – 9:30pm</p>
            </div>
            <iframe
              title="map"
              className="mt-6 w-full h-56 rounded-xl border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Revelstoke,+BC&output=embed"
            />
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900">Send a message</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required name="name" type="text" className="mt-1 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:ring-amber-600 focus:border-amber-600" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-md bg-amber-600 px-5 py-2.5 text-white font-semibold hover:bg-amber-700">Submit</button>
            {status && <p className="mt-3 text-green-700 font-medium">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
