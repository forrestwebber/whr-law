import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-sm border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <span className="text-cream font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold tracking-tight">
                WHR Law
              </span>
              <span className="hidden sm:inline text-cream/60 text-sm font-[family-name:var(--font-body)]">
                | William H. Russell
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <a
                href="#practice-areas"
                className="hidden md:inline-block text-cream/80 hover:text-accent-light transition-colors text-sm font-[family-name:var(--font-body)]"
              >
                Practice Areas
              </a>
              <a
                href="#about"
                className="hidden md:inline-block text-cream/80 hover:text-accent-light transition-colors text-sm font-[family-name:var(--font-body)]"
              >
                About
              </a>
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-cream px-4 py-2 sm:px-5 sm:py-2.5 rounded text-sm font-semibold transition-colors font-[family-name:var(--font-body)]"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-forest overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light z-10" />
        <div className="absolute inset-0 z-10 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(245,240,232,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="text-accent-light text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                Austin & Georgetown, Texas
              </span>
              <div className="h-px bg-accent/40 mt-2" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-4 sm:mb-6">
              Trusted Counsel.{" "}
              <span className="text-accent-light">Proven Results.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/80 mb-3 leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              Attorney William H. Russell has served Central Texas families and
              individuals for over 37 years with integrity, experience, and a
              commitment to justice.
            </p>
            <p className="text-base sm:text-lg text-cream/60 mb-8 sm:mb-10 font-[family-name:var(--font-body)]">
              Probate &bull; Family Law &bull; Estate Planning &bull; Criminal Defense
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-cream px-8 py-4 rounded text-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/20 font-[family-name:var(--font-body)]"
              >
                Schedule a Free Consultation
              </a>
              <a
                href="tel:0000000000"
                className="inline-flex items-center justify-center border-2 border-cream/40 text-cream hover:bg-cream hover:text-forest px-8 py-4 rounded text-lg font-semibold transition-all font-[family-name:var(--font-body)]"
              >
                Call Our Office
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent z-20" />
      </section>

      {/* Trust Bar */}
      <section className="bg-cream py-8 sm:py-12 border-b border-cream-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: "37+ Years Experience",
                desc: "Decades of proven results",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
                title: "Austin & Georgetown",
                desc: "Williamson & Travis Counties",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: "Fourth-Gen Texan",
                desc: "Deep community roots",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "Free Consultation",
                desc: "No-obligation case review",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 sm:gap-3">
                {item.icon}
                <h3 className="text-forest font-bold text-sm sm:text-base font-[family-name:var(--font-body)]">
                  {item.title}
                </h3>
                <p className="text-forest/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
              How We Can Help
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-4 sm:mb-6">
              Practice Areas
            </h2>
            <p className="text-forest/70 text-base sm:text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              William H. Russell provides experienced, personal legal
              representation across four core areas of Texas law.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                title: "Probate",
                desc: "Guiding families through the probate process with care and efficiency. From estate administration to will contests, William provides steady counsel during difficult transitions.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
                details: ["Estate Administration", "Will Contests", "Heirship Proceedings", "Guardianship"],
              },
              {
                title: "Family Law",
                desc: "Protecting what matters most: your family. William handles divorce, custody, child support, and modifications with sensitivity and fierce advocacy for your interests.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                ),
                details: ["Divorce & Separation", "Child Custody & Support", "Modifications", "Prenuptial Agreements"],
              },
              {
                title: "Estate Planning",
                desc: "Securing your legacy and protecting your loved ones. From simple wills to comprehensive estate plans, William helps you plan for the future with confidence.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
                details: ["Wills & Trusts", "Powers of Attorney", "Advance Directives", "Asset Protection"],
              },
              {
                title: "Criminal Defense",
                desc: "When your freedom is at stake, you need an experienced advocate. William provides vigorous defense for misdemeanor and felony charges across Central Texas.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                details: ["DWI / DUI Defense", "Felony & Misdemeanor", "Drug Offenses", "Expunctions & Record Sealing"],
              },
            ].map((area, i) => (
              <div
                key={i}
                className="group bg-cream-light rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-cream-dark/20 hover:border-accent/30"
              >
                <div className="text-forest/60 group-hover:text-accent transition-colors mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-forest mb-3">
                  {area.title}
                </h3>
                <p className="text-forest/60 leading-relaxed font-[family-name:var(--font-body)] text-sm sm:text-base mb-4">
                  {area.desc}
                </p>
                <ul className="grid grid-cols-2 gap-1.5">
                  {area.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-forest/50 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                      <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-forest hover:bg-forest-dark text-cream px-8 py-4 rounded text-lg font-semibold transition-all font-[family-name:var(--font-body)]"
            >
              Discuss Your Case &mdash; Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About William */}
      <section id="about" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                Meet Your Attorney
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-6 sm:mb-8">
                William H. Russell
              </h2>
            </div>

            <div className="space-y-5 text-forest/70 leading-relaxed font-[family-name:var(--font-body)] text-base sm:text-lg">
              <p>
                William H. Russell is a{" "}
                <strong className="text-forest">fourth-generation Texan</strong>{" "}
                who has called the Georgetown and Austin area home for more than
                37 years. That deep connection to Central Texas is not just
                personal&mdash;it is the foundation of his law practice.
              </p>
              <p>
                With decades of experience across{" "}
                <strong className="text-forest">
                  Williamson and Travis counties
                </strong>
                , William has built a reputation for providing thoughtful,
                effective legal counsel in Probate, Family Law, Estate Planning,
                and Criminal Defense. He understands the local courts, the local
                judges, and the unique needs of Central Texas families.
              </p>
              <p>
                William believes the law should serve people&mdash;not the other
                way around. Every client receives personalized attention, clear
                communication, and a legal strategy tailored to their specific
                situation. Whether you are navigating a difficult divorce,
                planning your estate, settling a loved one&apos;s affairs, or
                facing criminal charges, William provides the steady,
                experienced counsel you need.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-cream-dark/20">
                <div className="text-accent text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">37+</div>
                <div className="text-forest/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                  Years in Central TX
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-cream-dark/20">
                <div className="text-accent text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">4th</div>
                <div className="text-forest/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                  Generation Texan
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-cream-dark/20">
                <div className="text-accent text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">2</div>
                <div className="text-forest/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                  Counties Served
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-cream-dark/20">
                <div className="text-accent text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">4</div>
                <div className="text-forest/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                  Practice Areas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WHR Law */}
      <section className="py-16 sm:py-24 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent-light text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
              The WHR Law Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-4 sm:mb-6">
              Why Choose William H. Russell
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Decades of Experience",
                desc: "Over 37 years living and practicing in Central Texas means William knows the courts, the judges, and the law inside and out.",
                num: "01",
              },
              {
                title: "Personal Attention",
                desc: "You work directly with William, not a paralegal or associate. Your case gets the focused attention it deserves from start to finish.",
                num: "02",
              },
              {
                title: "Local Knowledge",
                desc: "As a fourth-generation Texan rooted in the Georgetown/Austin community, William understands the people and institutions that matter to your case.",
                num: "03",
              },
              {
                title: "Straightforward Counsel",
                desc: "No jargon. No runaround. William gives you honest, clear advice so you can make informed decisions about your legal situation.",
                num: "04",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-6 sm:p-8 border border-cream/10 rounded-lg hover:border-accent/40 transition-colors group"
              >
                <span className="text-cream/10 text-5xl sm:text-6xl font-bold absolute top-4 right-4 font-[family-name:var(--font-heading)] group-hover:text-cream/20 transition-colors">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-accent-light mb-3 sm:mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-cream/70 leading-relaxed font-[family-name:var(--font-body)] text-sm sm:text-base relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 sm:py-20 bg-accent relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 sm:mb-6">
            Your Free Consultation Is Waiting
          </h2>
          <p className="text-cream/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Whether you are facing a legal challenge or planning for the future,
            William H. Russell is here to help. Take the first step today with a
            free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-cream text-accent-dark hover:bg-white px-8 py-4 rounded text-lg font-bold transition-colors font-[family-name:var(--font-body)]"
            >
              Schedule Your Consultation
            </a>
            <a
              href="tel:0000000000"
              className="inline-flex items-center justify-center border-2 border-cream text-cream hover:bg-cream hover:text-accent-dark px-8 py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]"
            >
              Call Our Office
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-24 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-6 sm:mb-8">
                Free Consultation
              </h2>
              <p className="text-forest/70 text-base sm:text-lg leading-relaxed mb-8 font-[family-name:var(--font-body)]">
                Tell us about your situation and William will personally review
                your case. There is no cost and no obligation&mdash;just honest
                guidance from an experienced Texas attorney.
              </p>

              {/* Office Info */}
              <div className="bg-forest rounded-lg p-6 sm:p-8 mb-6">
                <p className="text-cream/70 text-sm mb-3 font-[family-name:var(--font-body)]">
                  WHR Law Office
                </p>
                <p className="text-cream text-lg sm:text-xl font-semibold font-[family-name:var(--font-body)] mb-1">
                  1016 La Posada Dr
                </p>
                <p className="text-cream/80 text-base font-[family-name:var(--font-body)]">
                  Austin, TX 78752
                </p>
              </div>

              <div className="space-y-4 text-forest/60 font-[family-name:var(--font-body)] text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Serving Williamson & Travis Counties</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>contact@whr-law.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>Georgetown & Austin, Texas</span>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <span className="text-accent-light font-[family-name:var(--font-heading)] text-2xl font-bold">
                WHR Law
              </span>
              <p className="text-cream/40 text-sm mt-1 font-[family-name:var(--font-body)]">
                William H. Russell, Attorney at Law
              </p>
              <p className="text-cream/50 text-sm mt-4 leading-relaxed font-[family-name:var(--font-body)]">
                Serving Central Texas families with experienced, personal legal
                counsel in Probate, Family Law, Estate Planning, and Criminal
                Defense.
              </p>
            </div>

            <div>
              <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-body)]">
                Practice Areas
              </h4>
              <ul className="space-y-2 text-cream/50 text-sm font-[family-name:var(--font-body)]">
                <li>
                  <a href="#practice-areas" className="hover:text-accent-light transition-colors">
                    Probate
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-accent-light transition-colors">
                    Family Law
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-accent-light transition-colors">
                    Estate Planning
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-accent-light transition-colors">
                    Criminal Defense
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-body)]">
                Contact
              </h4>
              <ul className="space-y-2 text-cream/50 text-sm font-[family-name:var(--font-body)]">
                <li>1016 La Posada Dr</li>
                <li>Austin, TX 78752</li>
                <li className="pt-1">Georgetown & Austin, Texas</li>
                <li>Williamson & Travis Counties</li>
                <li className="pt-1">
                  <a href="mailto:contact@whr-law.com" className="hover:text-accent-light transition-colors">
                    contact@whr-law.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 mt-10 sm:mt-12 pt-6 sm:pt-8">
            <p className="text-cream/30 text-xs leading-relaxed font-[family-name:var(--font-body)]">
              This website is for informational purposes only and does not
              constitute legal advice. No attorney-client relationship is formed
              by use of this website. Past results do not guarantee future
              outcomes. If you need legal advice, please contact an attorney
              directly.
            </p>
            <p className="text-cream/20 text-xs mt-4 font-[family-name:var(--font-body)]">
              &copy; 2026 William H. Russell, Attorney at Law. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
