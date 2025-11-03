import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import OrderContact from './components/OrderContact';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Gallery />
      <OrderContact />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-4 py-3 shadow-lg hover:scale-105 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} /> Chat Now
      </a>
    </div>
  );
}
