import { useMemo, useState } from 'react';
import { Mail, Send, Instagram, Youtube, MessageCircle } from 'lucide-react';

function encodeMailto(subject, body) {
  return `mailto:${encodeURIComponent('your.email@example.com')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function OrderContact() {
  const [order, setOrder] = useState({
    name: '',
    email: '',
    type: 'Pencil',
    delivery: 'Digital (Email Delivery)',
    notes: '',
  });
  const [fileName, setFileName] = useState('');

  const orderMailto = useMemo(() => {
    const subject = `New Art Order - ${order.type} by ${order.name || 'Client'}`;
    const body = `Name: ${order.name}\nEmail: ${order.email}\nType of Sketch: ${order.type}\nDelivery Preference: ${order.delivery}\nUploaded Photo: ${fileName || 'Will be shared via reply/WhatsApp'}\n\nNotes:\n${order.notes}\n\n(If you attached a reference photo, please reply to the confirmation email with the image or send via WhatsApp.)`;
    return encodeMailto(subject, body);
  }, [order, fileName]);

  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const contactMailto = useMemo(() => {
    const subject = `Inquiry from ${contact.name || 'Visitor'}`;
    const body = `Name: ${contact.name}\nEmail: ${contact.email}\n\nMessage:\n${contact.message}`;
    return encodeMailto(subject, body);
  }, [contact]);

  return (
    <section id="order" className="py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Place a Custom Order</h3>
            <p className="text-gray-600 mt-1">Fill in the details and I will reply with timeline and pricing. Secure payment link will be shared upon confirmation.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = orderMailto; }}>
              <div>
                <label className="block text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  value={order.name}
                  onChange={(e) => setOrder({ ...order, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={order.email}
                  onChange={(e) => setOrder({ ...order, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700">Type of Sketch</label>
                  <select
                    value={order.type}
                    onChange={(e) => setOrder({ ...order, type: e.target.value })}
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                  >
                    <option>Pencil</option>
                    <option>Charcoal</option>
                    <option>Digital</option>
                    <option>Portrait</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Delivery Preference</label>
                  <select
                    value={order.delivery}
                    onChange={(e) => setOrder({ ...order, delivery: e.target.value })}
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                  >
                    <option>Digital (Email Delivery)</option>
                    <option>Shipped Artwork (Courier)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Upload Photo (reference)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                  className="mt-1 block w-full text-sm text-gray-600"
                />
                <p className="text-xs text-gray-500 mt-1">Attachments may not send via email link. You can reply with the photo or share on WhatsApp.</p>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Additional Notes</label>
                <textarea
                  rows={4}
                  value={order.notes}
                  onChange={(e) => setOrder({ ...order, notes: e.target.value })}
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                  placeholder="Pose, background, size, deadline, etc."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 hover:shadow-md"
              >
                <Send size={18} /> Submit Order
              </button>
            </form>
          </div>

          <div id="contact" className="space-y-6">
            <div className="bg-[#faf7f2] rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
              <p className="text-gray-600 mt-1">Have a question or a custom idea? Send a message or reach me on social.</p>

              <div className="flex items-center gap-3 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border hover:shadow">
                  <Instagram size={18} /> Instagram
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border hover:shadow">
                  <Youtube size={18} /> YouTube
                </a>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border hover:shadow">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <a href="mailto:your.email@example.com" className="mt-4 inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <Mail size={18} /> your.email@example.com
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Quick Message</h3>
              <form className="mt-4 space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = contactMailto; }}>
                <div>
                  <label className="block text-sm text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={contact.message}
                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                    placeholder="How can I help?"
                  />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 hover:shadow-md">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} [Your Name] Sketch Studio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
