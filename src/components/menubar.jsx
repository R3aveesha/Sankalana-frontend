import { useState } from 'react';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#2a2a2a]/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl md:text-2xl font-semibold tracking-wide">
              Sankalana
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#mission" className="text-white/90 hover:text-white">Our Mission</a>
            <a href="#placements" className="text-white/90 hover:text-white">Ad Placements</a>
            <a href="#packages" className="text-white/90 hover:text-white">Packages</a>
            <a href="#event" className="text-white/90 hover:text-white">Event</a>
            <a href="#sponsor" className="ml-2 inline-flex items-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M11.645 20.91l-.007-.004-.022-.012a15.247 15.247 0 01-.364-.21 25.18 25.18 0 01-4.243-3.054C4.448 15.268 2.25 12.882 2.25 9.75 2.25 7.1 4.3 5.25 6.75 5.25c1.473 0 2.716.633 3.69 1.675a5.252 5.252 0 013.81-1.675c2.45 0 4.5 1.85 4.5 4.5 0 3.132-2.198 5.518-4.759 7.88a25.18 25.18 0 01-4.243 3.054 15.08 15.08 0 01-.364.21l-.022.012-.007.004-.003.002a.75.75 0 01-.704 0l-.003-.002z" />
                </svg>
              </span>
              <span>Sponsor</span>
              <span className="hidden lg:inline text-white/80">Rs. 20,000</span>
            </a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-white hover:bg-white/10">
              <svg className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 border-t border-white/10">
            <div className="grid gap-2 pt-2">
              <a href="#mission" className="text-white/90 hover:text-white">Our Mission</a>
              <a href="#placements" className="text-white/90 hover:text-white">Ad Placements</a>
              <a href="#packages" className="text-white/90 hover:text-white">Packages</a>
              <a href="#event" className="text-white/90 hover:text-white">Event</a>
              <a href="#sponsor" className="inline-flex items-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 w-fit">
                <span>Sponsor</span>
                <span className="text-white/80">Rs. 20,000</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
