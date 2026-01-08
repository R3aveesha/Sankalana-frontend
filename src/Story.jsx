function Story() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-8 shadow-xl shadow-black/30">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            The Story Behind the Music
          </h2>
          <p className="text-white/80 leading-relaxed">
            For over 15 years, the Department of Town &amp; Country Planning at the University of Moratuwa has organized Sankalana — a
            musical charity show that brings together talented artists, supportive sponsors, and a community that believes in the power of
            education.
          </p>
          <p className="text-white/80 leading-relaxed mt-4">
            Our scholarship program has helped dozens of students complete their degrees, transforming not just their lives but the
            communities they serve. When you sponsor Sankalana, you become part of this beautiful legacy.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-8 shadow-xl shadow-black/30 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 mb-4 rounded-full bg-amber-500/15 border border-amber-200/40 grid place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-amber-200">
              <path d="M3 10l9-5 9 5-9 5-9-5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 12v5c0 1.1 2.686 2 6 2s6-.9 6-2v-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-2xl md:text-3xl font-serif text-white/90 leading-snug">
            “Education is the most powerful weapon which you can use to change the world.”
          </p>
          <p className="text-sm text-white/70 mt-3">— Nelson Mandela</p>
        </div>
      </div>
    </section>
  );
}

export default Story;
