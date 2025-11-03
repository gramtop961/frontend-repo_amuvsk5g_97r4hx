import { useState } from 'react';
import { Instagram, Youtube, MessageCircle, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Order', href: '#order' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">SS</div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">[Your Name] Sketch Studio</p>
              <p className="text-xs text-gray-500">Turning Emotions into Art</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-gray-100">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-full hover:bg-gray-100">
              <Youtube size={18} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 rounded-full hover:bg-gray-100">
              <MessageCircle size={18} />
            </a>
          </div>

          <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <p className="font-semibold">Menu</p>
              <button aria-label="Close menu" className="p-2" onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg text-gray-800"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full hover:bg-gray-100">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-full hover:bg-gray-100">
                  <Youtube size={20} />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 rounded-full hover:bg-gray-100">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
