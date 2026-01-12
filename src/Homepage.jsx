import { useState, useEffect } from 'react';
import MenuBar from './components/menubar';
import Story from './Story';

function Homepage() {
  const [sponsorships, setSponsorships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsorships = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/sponsorships');
        const data = await response.json();
        setSponsorships(data.filter(s => s.active));
      } catch (error) {
        console.error('Error fetching sponsorships:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSponsorships();
  }, []);

  const premiumSponsors = sponsorships.filter(s => s.sponsorType === 'premium');
  const goldSponsors = sponsorships.filter(s => s.sponsorType === 'gold');
  const silverSponsors = sponsorships.filter(s => s.sponsorType === 'silver');

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      <MenuBar />

      <main>
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden">
          <div
            className="relative min-h-[78vh] md:min-h-[88vh] flex items-center justify-center bg-center bg-cover"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(12,10,8,0.65), rgba(12,10,8,0.75)), url('https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2000&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-neutral-950/85" />
            <div className="absolute -left-24 -top-24 w-72 h-72 bg-amber-500/20 blur-3xl rounded-full" />
            <div className="absolute right-0 -bottom-24 w-80 h-80 bg-rose-400/15 blur-3xl rounded-full" />

            {/* Centered content */}
            <div className="relative z-10 w-full">
              <div className="max-w-4xl mx-auto px-4 text-center space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm md:text-base tracking-wide">
                  <span>✨ A Musical Evening for Hope</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-5xl md:text-7xl font-serif font-bold drop-shadow-lg">Sankalana</h1>
                  <p className="text-3xl md:text-4xl text-amber-100/95 font-semibold tracking-wide">2026</p>
                </div>

                <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed bg-black/30 backdrop-blur rounded-2xl px-4 py-3 md:px- md:py-4 border border-white/10">
                  A charity musical show organized by the Department of Town &amp; Country Planning, Faculty of Architecture, University of Moratuwa — where every note played helps a student dream bigger.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#sponsor"
                    className="inline-flex items-center gap-2 rounded-md bg-amber-500 hover:bg-amber-600 text-neutral-950 px-6 py-3 font-semibold shadow-lg shadow-amber-500/20 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M11.645 20.91l-.007-.004-.022-.012a15.247 15.247 0 01-.364-.21 25.18 25.18 0 01-4.243-3.054C4.448 15.268 2.25 12.882 2.25 9.75 2.25 7.1 4.3 5.25 6.75 5.25c1.473 0 2.716.633 3.69 1.675a5.252 5.252 0 013.81-1.675c2.45 0 4.5 1.85 4.5 4.5 0 3.132-2.198 5.518-4.759 7.88a25.18 25.18 0 01-4.243 3.054 15.08 15.08 0 01-.364.21l-.022.012-.007.004-.003.002a.75.75 0 01-.704 0l-.003-.002z" />
                    </svg>
                    Become a Sponsor
                  </a>
                  <a
                    href="#packages"
                    className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 font-semibold transition"
                  >
                    View Sponsorship Packages
                  </a>
                </div>

                {/* Event meta */}
                <div className="grid sm:flex items-center justify-center gap-4 sm:gap-6 text-white/85 text-sm">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10">🗓️</span>
                    <span>Coming Soon 2026</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10">📍</span>
                    <span>University of Moratuwa, Sri Lanka</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10">🎵</span>
                    <span>A Musical Evening for Hope</span>
                  </div>
                </div>

                {/* Story highlight */}
                <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/85">
                  {[
                    { title: 'Premium Reach', copy: 'Homepage hero with your logo & brand story.' },
                    { title: 'Audience', copy: 'Engage students, alumni, partners & patrons.' },
                    { title: 'Impact', copy: 'Every rupee helps a student dream bigger.' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur px-4 py-3 shadow-lg shadow-black/20">
                      <p className="text-amber-100 font-semibold">{item.title}</p>
                      <p className="text-white/75 mt-1 leading-relaxed">{item.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main slot */}
          <div className="bg-neutral-950/95 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="max-w-6xl mx-auto rounded-2xl bg-white/5 backdrop-blur border-2 border-dashed border-amber-200/80 shadow-2xl">
                <div className="flex items-center justify-between gap-3 px-4 md:px-10 py-3 md:py-4">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-3 text-sm md:text-base text-white/90">
                    <span className="uppercase tracking-[0.2em] text-amber-100/90">Homepage Main Slot</span>
                    <span className="hidden md:inline text-white/50">•</span>
                    <span className="text-amber-100/90">Premium Partner</span>
                  </div>
                  <span className="font-semibold text-amber-100">Rs. 20,000</span>
                </div>
                <div className="pb-4 md:pb-5 grid place-items-center px-4 md:px-10">
                  {loading ? (
                    <p className="text-center text-white/70 text-sm">Loading...</p>
                  ) : premiumSponsors.length > 0 ? (
                    <div className="text-center space-y-3">
                      {premiumSponsors[0].imageUrl && (
                        <img 
                          src={`http://localhost:5000${premiumSponsors[0].imageUrl}`} 
                          alt={premiumSponsors[0].sponsorName}
                          className="max-h-20 mx-auto object-contain"
                        />
                      )}
                      <p className="text-white/90 font-semibold">{premiumSponsors[0].sponsorName}</p>
                      {premiumSponsors[0].description && (
                        <p className="text-white/70 text-sm max-w-xl mx-auto">{premiumSponsors[0].description}</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-center text-white/90 text-sm md:text-base">Your Brand Logo &amp; Message Here</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sub slots */}
          <div className="bg-neutral-950/95 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-3 text-center text-white/70">Loading sponsors...</div>
              ) : (
                [
                  { label: 'SUB SLOT A • Rs. 15,000', badge: 'Limited', sponsor: goldSponsors[0] },
                  { label: 'SUB SLOT B • Rs. 15,000', badge: 'Featured', sponsor: goldSponsors[1] },
                  { label: 'SUB SLOT C • Rs. 15,000', badge: 'Popular', sponsor: goldSponsors[2] },
                ].map((slot, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/5 border-2 border-dashed border-amber-200/70 p-5 shadow-xl shadow-black/20 backdrop-blur"
                  >
                    <div className="flex items-center justify-between text-xs md:text-sm text-white/85 mb-3">
                      <span>{slot.label}</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-100 border border-amber-200/50">
                        {slot.badge}
                      </span>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 grid place-items-center text-white/80 text-sm min-h-[120px]">
                      {slot.sponsor ? (
                        <div className="text-center space-y-2">
                          {slot.sponsor.imageUrl && (
                            <img 
                              src={`http://localhost:5000${slot.sponsor.imageUrl}`} 
                              alt={slot.sponsor.sponsorName}
                              className="max-h-16 mx-auto object-contain"
                            />
                          )}
                          <p className="text-white/90 font-medium">{slot.sponsor.sponsorName}</p>
                        </div>
                      ) : (
                        <p>Partner Logo</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Placeholder sections for anchors */}
        <section id="mission" className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-white/80">We aim to support students through the power of music and community sponsorships.</p>
        </section>

        {/* Story section */}
        <Story />
        <section id="placements" className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">Ad Placements</h2>
          <p className="text-white/80">Choose from homepage slots, partner placements, and event-day promotions.</p>
        </section>
        <section id="packages" className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">Packages</h2>
          <p className="text-white/80">Explore sponsorship packages tailored for brands of all sizes.</p>
        </section>
        <section id="event" className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">Event</h2>
          <p className="text-white/80">Sankalana 2026 will be announced soon. Stay tuned!</p>
        </section>
      </main>
    </div>
  );
}

export default Homepage;

