import { useMemo, useState } from 'react';

const ALL_ITEMS = [
  { id: 1, category: 'Pencil', src: 'https://images.unsplash.com/photo-1593472807861-5bb884af28f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZW5jaWwlMjBza2V0Y2glMjAxfGVufDB8MHx8fDE3NjIxNzc0MjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Pencil sketch 1' },
  { id: 2, category: 'Pencil', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', alt: 'Pencil sketch 2' },
  { id: 3, category: 'Charcoal', src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', alt: 'Charcoal sketch 1' },
  { id: 4, category: 'Digital', src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', alt: 'Digital art 1' },
  { id: 5, category: 'Charcoal', src: 'https://images.unsplash.com/photo-1593472807861-5bb884af28f6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZW5jaWwlMjBza2V0Y2glMjAxfGVufDB8MHx8fDE3NjIxNzc0MjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Charcoal sketch 2' },
  { id: 6, category: 'Digital', src: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop', alt: 'Digital art 2' },
  { id: 7, category: 'Pencil', src: 'https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=1200&auto=format&fit=crop', alt: 'Pencil sketch 3' },
  { id: 8, category: 'Digital', src: 'https://images.unsplash.com/photo-1750586255344-32578feeb759?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGFyY29hbCUyMHNrZXRjaCUyMDF8ZW58MHwwfHx8MTc2MjE3NzQyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Digital art 3' },
];

const CATEGORIES = ['All', 'Pencil', 'Charcoal', 'Digital'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(() => {
    return active === 'All' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.category === active);
  }, [active]);

  return (
    <section id="gallery" className="bg-[#faf7f2] py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Gallery</h2>
            <p className="text-gray-600 mt-1">A selection of sketches and portraits</p>
          </div>
          <div className="flex items-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  active === cat ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm"
              aria-label={`Open ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} className="h-40 md:h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute left-2 top-2 text-xs bg-white/80 backdrop-blur px-2 py-1 rounded-full">{item.category}</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <div className="flex items-center justify-between mt-3">
              <p className="text-white/90 text-sm">{lightbox.alt}</p>
              <button
                className="px-4 py-2 rounded-full bg-white text-gray-900"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
