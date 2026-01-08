import { useState } from 'react';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-white text-2xl font-bold hover:text-gray-100 transition-colors duration-300"
            >
              Sanakalana
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a 
              href="/" 
              className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              About
            </a>
            <a 
              href="/services" 
              className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
            <a 
              href="/login" 
              className="text-white bg-white bg-opacity-20 hover:bg-white hover:text-blue-600 border border-white px-4 py-2 rounded-md transition-all duration-300 font-medium"
            >
              Login
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 focus:outline-none transition-colors duration-300"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-gradient-to-r from-blue-600 to-purple-600 border-t border-white border-opacity-10">
            <a 
              href="/" 
              className="block text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-colors duration-300 mb-2"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="block text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-colors duration-300 mb-2"
            >
              About
            </a>
            <a 
              href="/services" 
              className="block text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-colors duration-300 mb-2"
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="block text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-colors duration-300 mb-2"
            >
              Contact
            </a>
            <a 
              href="/login" 
              className="block text-white bg-white bg-opacity-20 hover:bg-white hover:text-blue-600 border border-white px-3 py-2 rounded-md transition-colors duration-300 font-medium"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
