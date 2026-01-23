import { useState, useEffect } from 'react';

function AkuruaranSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.22 (1).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.22 (2).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.22.jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.23 (1).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.23 (2).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.23.jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.24 (1).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.24.jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.25 (1).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.25 (2).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.25.jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.26 (1).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.26.jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.27 (1).jpeg',
    '/images/akuruaran/WhatsApp Image 2026-01-23 at 11.59.27.jpeg',
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-amber-100 mb-4 text-center">
          Akuru Aran Project - Location Gallery
        </h2>

        {/* Slideshow Container */}
        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-lg shadow-amber-500/10 bg-black">
          {/* Main Image */}
          <div className="relative h-56 md:h-72 overflow-hidden bg-black">
            <img
              src={slides[currentSlide]}
              alt={`Akuru Aran location slide ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 111.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1 py-2 bg-neutral-900 flex-wrap px-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-amber-500 w-4'
                    : 'bg-white/30 hover:bg-white/50 w-1.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="p-8 bg-white/5">
          <h3 className="text-xl font-semibold text-white mb-3">About This Location</h3>
          <p className="text-white/80 leading-relaxed mb-4">
            The Akuru Aran Project represents our commitment to providing relief and fostering resilience in communities that need it most. These images capture the essence of our work at the project location, showcasing the direct impact of collective efforts from our university community.
          </p>
          <p className="text-white/70 text-sm">
            Every rupee contributed through Sankalana directly strengthens this journey of transformation and hope.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AkuruaranSlideshow;
