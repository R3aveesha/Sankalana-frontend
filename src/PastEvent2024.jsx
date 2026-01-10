import MenuBar from './components/menubar';

function PastEvent2024() {
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
