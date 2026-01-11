import { useEffect, useState } from 'react';
import MenuBar from './components/menubar';

const slides = [
  {
    image: '/images/events/01.jpeg',
    title: 'Opening Performance',
    caption: 'Contemporary dancers set the stage for an evening of culture and giving.',
  },
  {
    image: '/images/events/2.jpeg',
    title: 'Full Ensemble',
    caption: 'The entire cast joins together for the grand finale celebration.',
  },
  {
    image: '/images/events/03.jpeg',
    title: 'Packed Auditorium',
    caption: 'Hundreds of supporters came together to raise funds for student scholarships.',
  },
  {
    image: '/images/events/04.jpeg',
    title: 'Stage Production',
  },
  {
    image: '/images/events/08.jpeg',
    title: 'Performance Moments',
  },
];

function PastEvent2024() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const goTo = (nextIndex) => {
    setCurrent((nextIndex + slides.length) % slides.length);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      <MenuBar />
      <header className="max-w-6xl mx-auto px-4 pt-12 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur">
          <span>✔</span>
          <span>Past Event</span>
        </div>
        <div className="mt-6 space-y-3">
          <p className="text-amber-200/90 uppercase tracking-[0.2em] text-xs">January 2024 • Faculty of Architecture, University of Moratuwa</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Sankalana 2024 — Roots and Rhythms</h1>
          <p className="text-white/80 max-w-3xl leading-relaxed">
            An intimate evening that blended folk traditions with contemporary grooves, Sankalana 2024 focused on raising starter grants
            for students balancing studies and family commitments. The night reaffirmed why the community rallies for this cause each year.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16 space-y-10">
        <section className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-xl shadow-black/30 overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <p className="text-amber-200 text-sm font-semibold">Event Highlights</p>
                <h2 className="text-3xl font-serif font-bold">Captured Moments</h2>
                <p className="text-white/70 mt-2">Relive the best moments from Sankalana 2024</p>
              </div>
              <div className="flex gap-2 text-xs text-white/70">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">Auto-play</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <div className="aspect-[16/9] relative">
                {slides.map((slide, idx) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      current === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                    }`}
                    aria-hidden={current !== idx}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-amber-100/90 font-semibold">{slide.title}</p>
                        <p className="text-white/85 text-base md:text-lg leading-snug">{slide.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6">
                <button
                  onClick={() => goTo(current - 1)}
                  className="p-2 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60 transition"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  onClick={() => goTo(current + 1)}
                  className="p-2 rounded-full bg-black/40 border border-white/20 text-white hover:bg-black/60 transition"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`h-2 w-7 rounded-full transition-all ${
                      current === idx ? 'bg-amber-400 w-8' : 'bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur shadow-xl shadow-black/30">
          <h2 className="text-2xl font-serif font-bold">Highlights</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            <li>• Opening acoustic set with student songwriters sharing original pieces.</li>
            <li>• Collaborative drum circle that brought the audience on stage.</li>
            <li>• Partner showcases that connected scholarships with real student stories.</li>
            <li>• Funds channeled to emergency stipends and learning materials.</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur shadow-xl shadow-black/30">
          <h3 className="text-2xl font-serif font-bold">Impact snapshot</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm md:text-base">
            {[ 
              { label: 'Scholarships supported', value: '9' },
              { label: 'Funds raised', value: 'LKR 1.6M' },
              { label: 'Partners', value: '6' },
              { label: 'Volunteer hours', value: '700+' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-black/30 border border-white/10 p-4">
                <p className="text-amber-100 text-sm font-semibold">{item.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur shadow-xl shadow-black/30">
          <h3 className="text-2xl font-serif font-bold">Event Gallery</h3>
          <p className="text-white/70 mt-2 mb-6">Highlights from Sankalana 2024</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/events/01.jpeg', alt: 'Opening performance with dancers' },
              { src: '/images/events/2.jpeg', alt: 'Full cast on stage' },
              { src: '/images/events/03.jpeg', alt: 'Packed auditorium' },
              { src: '/images/events/04.jpeg', alt: 'Sankalana stage production' },
              { src: '/images/events/08.jpeg', alt: 'Performance moments' },
              { src: '/images/events/06.jpeg', alt: 'Musical performance' },
            ].map((photo, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg aspect-[4/3] bg-black/30">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200/50 bg-amber-50/5 p-8 backdrop-blur shadow-xl shadow-amber-500/10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
            <div>
              <p className="text-amber-100 font-semibold">Looking forward</p>
              <h3 className="text-3xl font-serif font-bold mt-2">Carry the momentum to 2026</h3>
              <p className="text-white/75 mt-3 leading-relaxed">
                The 2024 edition laid groundwork for larger partnerships and deeper student support. Join us as we build toward an even
                more ambitious Sankalana 2026.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="/sankalana-2025"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-2.5 font-semibold shadow-lg shadow-amber-500/20 transition"
                >
                  View Sankalana 2025
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 font-semibold transition"
                >
                  Back to 2026 homepage
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-6 space-y-3 text-white/80">
              <p className="text-amber-100 font-semibold">Ways to help</p>
              <p>• Sponsor a student stipend.</p>
              <p>• Lend expertise for stage, media, or logistics.</p>
              <p>• Connect us with community partners for 2026.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PastEvent2024;
