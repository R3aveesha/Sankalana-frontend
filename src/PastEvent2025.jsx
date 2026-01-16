import { useEffect, useState } from 'react';
import MenuBar from './components/menubar';

const slides = [
  {
    image: '/images/events/01.jpeg',
    title: 'Opening Performance',
    caption: 'A stunning opening act with contemporary dancers setting the tone for an unforgettable evening.',
  },
  {
    image: '/images/events/2.jpeg',
    title: 'Standing Ovation',
    caption: 'The entire cast joins on stage as the audience celebrates with a roaring standing ovation.',
  },
  {
    image: '/images/events/03.jpeg',
    title: 'Packed Auditorium',
    caption: 'Over 1,100 attendees filled the Faculty of Architecture hall in support of student scholarships.',
  },
  {
    image: '/images/events/04.jpeg',
    title: 'Stage Production',
    caption: 'Immersive lighting and the iconic Sankalana logo projection created a mesmerizing atmosphere.',
  },
  {
    image: '/images/events/06.jpeg',
    title: 'Classical Fusion',
    caption: 'Guest violinist captivates the audience with a blend of classical and contemporary melodies.',
  },

];

function PastEvent2025() {
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

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(248,113,113,0.1),transparent_30%)]" />

        <header className="max-w-7xl mx-auto px-4 pt-12 pb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm backdrop-blur">
            <span>✔</span>
            <span>Past Event</span>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-amber-200/90 uppercase tracking-[0.2em] text-xs">January 2025 • Faculty of Architecture, University of Moratuwa</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Sankalana 2025 — A Night of Resonance</h1>
            <p className="text-white/80 max-w-3xl leading-relaxed">
              Sankalana 2025 united students, alumni, and partners to raise scholarships for aspiring planners. The evening blended
              acoustic soul, classical fusion, and contemporary dance, reminding us why music remains our favorite way to give back.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/85">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Event Highlights</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Community Support</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Partnership Success</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Student Impact</span>
            </div>
          </div>
        </header>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-16 space-y-14 relative z-10">
        <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur shadow-2xl shadow-black/30 overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <p className="text-amber-200 text-sm font-semibold">Highlights Reel</p>
                <h2 className="text-3xl font-serif font-bold">Relive the stage energy</h2>
                <p className="text-white/70 mt-2">Swipe or let it play — smooth slides keep the best 2025 moments in motion.</p>
              </div>
              <div className="flex gap-2 text-xs text-white/70">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">Auto-play</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">Manual control</span>
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

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur shadow-xl shadow-black/30">
            <h3 className="text-2xl font-serif font-bold">What made 2025 special</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>• Collaborative acts with alumni artists brought intergenerational music to the stage.</li>
              <li>• Stage design leaned on warm amber gradients to mirror our scholarship mission.</li>
              <li>• Community booths connected sponsors directly with students and families.</li>
              <li>• Every ticket and sponsorship fed directly into the scholarship trust.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur shadow-xl shadow-black/30">
          <h3 className="text-2xl font-serif font-bold">Evening timeline</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-white/80">
            {[ 
              { time: '6:00 PM', title: 'Welcome & prelude', detail: 'Campus choir set the tone with acoustic harmonies.' },
              { time: '7:00 PM', title: 'Feature acts', detail: 'Fusion ensemble with guest violinist turned the hall electric.' },
              { time: '8:30 PM', title: 'Gratitude walk', detail: 'Scholarship recipients shared stories with sponsors.' },
            ].map((slot) => (
              <div key={slot.time} className="rounded-xl border border-white/10 bg-black/30 p-5">
                <p className="text-amber-100 font-semibold">{slot.time}</p>
                <p className="text-lg font-semibold text-white mt-1">{slot.title}</p>
                <p className="text-white/70 mt-2 leading-relaxed">{slot.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur shadow-xl shadow-black/30">
          <h3 className="text-2xl font-serif font-bold">Event Gallery</h3>
          <p className="text-white/70 mt-2 mb-6">Captured moments from Sankalana 2025</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/events/05.jpeg', alt: 'Audience member recording the performance' },
              { src: '/images/events/07.jpeg', alt: 'Dancer performing with traditional elements' },
              { src: '/images/events/08.jpeg', alt: 'Performance highlights collage' },
              { src: '/images/events/10.jpeg', alt: 'Pianist performing on stage' },
              { src: '/images/events/06.jpeg', alt: 'Violinist in concert' },
              { src: '/images/events/12.jpeg', alt: 'Banners view' },
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

        <section className="rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-8 md:p-12 backdrop-blur-xl shadow-2xl shadow-black/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-200 text-sm font-semibold tracking-widest uppercase">Our Partners</p>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-4">Sponsors & Partners</h3>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">Our valued partners at every tier made Sankalana 2025 possible through their vision, support, and generosity.</p>
            </div>

            {/* Gold Tier */}
            <div className="mb-14">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />
                <h4 className="text-2xl font-semibold text-yellow-300 font-serif">Gold Partners</h4>
                <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { src: '/images/events/sponsers 2025/gold.jpeg', alt: 'Gold Partner 1' },
                  { src: '/images/events/sponsers 2025/gold2.jpeg', alt: 'Gold Partner 2' },
                  { src: '/images/events/sponsers 2025/gold3.jpeg', alt: 'Gold Partner 3' },
                  { src: '/images/events/sponsers 2025/gold4.jpeg', alt: 'Gold Partner 4' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500/15 via-yellow-500/5 to-transparent border border-yellow-400/40 p-8 flex items-center justify-center min-h-64 hover:border-yellow-300/80 transition-all duration-500 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20">
                    <img src={sponsor.src} alt={sponsor.alt} className="w-full h-full object-contain max-h-64 transition-all duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bronze Tier */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400" />
                <div className="h-2 w-2 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50" />
                <h4 className="text-2xl font-semibold text-orange-300 font-serif">Bronze Partners</h4>
                <div className="h-2 w-2 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400" />
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { src: '/images/events/sponsers 2025/bronze.jpeg', alt: 'Bronze Partner 1' },
                  { src: '/images/events/sponsers 2025/bronze2.jpeg', alt: 'Bronze Partner 2' },
                ].map((sponsor, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent border border-orange-400/40 p-4 flex items-center justify-center w-72 h-72 hover:border-orange-300/80 transition-all duration-500 shadow-sm shadow-orange-500/10 hover:shadow-orange-500/20">
                    <img src={sponsor.src} alt={sponsor.alt} className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Official Photography Partner */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400" />
                <div className="h-2 w-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
                <h4 className="text-2xl font-semibold text-purple-300 font-serif">Official Photography Partner</h4>
                <div className="h-2 w-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
              </div>
              <div className="flex justify-center gap-6">
                {[
                  { src: '/images/events/sponsers 2025/official photography.jpeg', alt: 'Official Photography Partner' }
                ].map((sponsor, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-transparent border border-purple-400/40 p-6 flex items-center justify-center w-96 h-64 hover:border-purple-300/80 transition-all duration-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
                    <img src={sponsor.src} alt={sponsor.alt} className="w-full h-full object-contain max-h-64 transition-all duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200/50 bg-amber-50/5 p-8 backdrop-blur shadow-xl shadow-amber-500/10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
            <div>
              <p className="text-amber-100 font-semibold">Looking ahead</p>
              <h3 className="text-3xl font-serif font-bold mt-2">Sankalana 2026 is coming</h3>
              <p className="text-white/75 mt-3 leading-relaxed">
                Inspired by 2025, we are crafting an even richer experience. If you loved the last show or wish to support more students,
                we would love to have you on board for the 2026 edition.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-500 hover:bg-amber-600 text-neutral-950 px-5 py-2.5 font-semibold shadow-lg shadow-amber-500/20 transition"
                >
                  Back to 2026 homepage
                </a>
               
              </div>
            </div>
            <div className="rounded-xl bg-black/30 border border-white/10 p-6 space-y-3 text-white/80">
              <p className="text-amber-100 font-semibold">How to stay involved</p>
              <p>• Volunteer with the organizing team.</p>
              <p>• Join as a creative partner for stage, light, or media.</p>
              <p>• Sponsor a student or fund a performance slot.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PastEvent2025;
