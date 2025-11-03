import { useEffect, useState } from 'react';

const slides = [
  {
    src:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
    alt: 'Pencil portrait sketch',
  },
  {
    src:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
    alt: 'Charcoal sketch of a woman',
  },
  {
    src:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    alt: 'Digital art portrait in soft tones',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative">
      <div className="relative h-[60vh] md:h-[72vh] w-full overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">Turning Emotions into Art</h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Hand-drawn portraits, expressive sketches, and refined digital artwork crafted with care.
          </p>
          <div className="mt-6">
            <a href="#order" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white shadow hover:shadow-md">
              Order Now
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1000&auto=format&fit=crop"
            alt="Artist portrait"
            className="w-full h-64 md:h-72 object-cover rounded-xl shadow-sm"
          />
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">About the Artist</h2>
            <p className="mt-4 text-gray-600">
              I’m a sketch artist specializing in pencil, charcoal, and digital portraits. My work focuses on
              capturing subtle emotions and storytelling through minimal lines and soft textures. Every piece is
              custom-made to reflect your personality and memories.
            </p>
            <p className="mt-3 text-gray-600">
              Whether it’s a gift, a keepsake, or a creative collaboration — I’m here to bring your idea to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
