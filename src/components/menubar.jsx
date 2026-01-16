import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const eventsRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isEventsOpen && eventsRef.current && !eventsRef.current.contains(e.target)) {
        setIsEventsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isEventsOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#2a2a2a]/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl md:text-2xl font-serif tracking-wide">
              Sankalana
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#mission" className="text-white/90 hover:text-white">Our Vision</a>
            <a href="/#objectives" className="text-white/90 hover:text-white">Objectives</a>
            <a href="/#packages" className="text-white/90 hover:text-white">Packages</a>
            <div className="relative" ref={eventsRef}>
              <button
                type="button"
                className="text-white/90 hover:text-white inline-flex items-center gap-1"
                onClick={() => setIsEventsOpen((prev) => !prev)}
              >
                Events
                <span className={`transition-transform ${isEventsOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {isEventsOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-lg border border-white/10 bg-neutral-900/95 backdrop-blur shadow-xl shadow-black/30">
                  <Link
                    to="/sankalana-2025"
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10"
                    onClick={() => setIsEventsOpen(false)}
                  >
                    Sankalana 2024/25
                  </Link>
                  <Link
                    to="/sankalana-2024"
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10"
                    onClick={() => setIsEventsOpen(false)}
                  >
                    Sankalana 2023/24
                  </Link>
                </div>
              )}
            </div>
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
              <a href="/#mission" className="text-white/90 hover:text-white" onClick={() => setIsOpen(false)}>Our Mission</a>
              <a href="/#objectives" className="text-white/90 hover:text-white" onClick={() => setIsOpen(false)}>Objectives</a>
              <a href="/#packages" className="text-white/90 hover:text-white" onClick={() => setIsOpen(false)}>Packages</a>
              <div className="rounded-lg border border-white/10 bg-white/5">
                <p className="px-3 pt-2 text-white/70 text-xs uppercase">Events</p>
                <div className="flex flex-col pb-2">
                  <Link to="/sankalana-2025" className="px-3 py-1 text-white/90 hover:text-white">Sankalana 2024/25</Link>
                  <Link to="/sankalana-2024" className="px-3 py-1 text-white/90 hover:text-white">Sankalana 2023/24</Link>
                </div>
              </div>
           
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
