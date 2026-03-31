import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <span className="text-gold font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold tracking-tight">
                Jack Decker
              </span>
              <span className="hidden sm:inline text-white/60 text-sm font-[family-name:var(--font-body)]">
                | Attorney at Law
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="hidden sm:inline-block text-white/80 hover:text-gold transition-colors text-sm font-[family-name:var(--font-body)]"
              >
                Free Consultation
              </a>
              <a
                href="tel:0000000000"
                className="bg-red-cta hover:bg-red-cta-dark text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded text-sm font-semibold transition-colors font-[family-name:var(--font-body)]"
              >
                (XXX) XXX-XXXX
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-navy overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy/40 z-10" />

        {/* Hero image */}
        <div className="absolute inset-0">
          <Image
            src="/images/jack-decker.jpg"
            alt="Jack Decker, Dallas Personal Injury Attorney"
            fill
            className="object-cover object-top opacity-40 sm:opacity-50"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                Dallas Personal Injury Attorney
              </span>
              <div className="h-px bg-gold/40 mt-2" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              Injured?{" "}
              <span className="text-gold">Jack Decker</span>{" "}
              Fights for You.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-10 leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              No fee unless we win. Over 6 years of aggressive personal injury
              representation across Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-red-cta hover:bg-red-cta-dark text-white px-8 py-4 rounded text-lg font-semibold transition-all hover:shadow-lg hover:shadow-red-cta/20 font-[family-name:var(--font-body)]"
              >
                Free Case Review
              </a>
              <a
                href="tel:0000000000"
                className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 rounded text-lg font-semibold transition-all font-[family-name:var(--font-body)]"
              >
                Call (XXX) XXX-XXXX
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 sm:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "No Fee Unless We Win",
                desc: "Zero upfront costs",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                title: "6+ Years Experience",
                desc: "Proven track record",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
                title: "Licensed in Texas",
                desc: "Dallas-based practice",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                ),
                title: "Baylor Law Graduate",
                desc: "Top Texas law school",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 sm:gap-3">
                {item.icon}
                <h3 className="text-navy font-bold text-sm sm:text-base font-[family-name:var(--font-body)]">
                  {item.title}
                </h3>
                <p className="text-navy/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
              How We Help
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-4 sm:mb-6">
              Practice Areas
            </h2>
            <p className="text-navy/70 text-base sm:text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Jack Decker has successfully represented clients across a wide
              range of personal injury cases throughout Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Car Accidents",
                desc: "Aggressive representation for victims of negligent drivers. We handle the insurance companies so you can focus on recovery.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25a1.125 1.125 0 0 1-1.125-1.125V6.75m0 0h18m-18 0a1.125 1.125 0 0 1 1.125-1.125h15.75a1.125 1.125 0 0 1 1.125 1.125m0 0v6.375" />
                  </svg>
                ),
              },
              {
                title: "Truck & 18-Wheeler Wrecks",
                desc: "Commercial trucking accidents cause catastrophic injuries. Jack understands federal trucking regulations and fights for maximum compensation.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h10.5m0 0V6.75m0 7.5h3.375a1.125 1.125 0 0 0 1.125-1.125V6.75m-4.5 0h4.5m0 0L21 9.75M3.375 6.75h10.5" />
                  </svg>
                ),
              },
              {
                title: "Slip & Fall",
                desc: "Property owners have a duty to keep their premises safe. If you were injured due to negligence, you deserve compensation.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                ),
              },
              {
                title: "Workplace Injuries",
                desc: "Hurt on the job? You may be entitled to more than workers' comp. Let us evaluate your case for additional claims.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                ),
              },
              {
                title: "Wrongful Death",
                desc: "When negligence takes a loved one, families deserve justice. Jack provides compassionate, relentless advocacy during the hardest times.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                ),
              },
              {
                title: "General Personal Injury",
                desc: "Every injury case is unique. From dog bites to defective products, Jack evaluates your situation and builds the strongest case possible.",
                icon: (
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                ),
              },
            ].map((area, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30"
              >
                <div className="text-navy/70 group-hover:text-gold transition-colors mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-navy/60 leading-relaxed font-[family-name:var(--font-body)] text-sm sm:text-base">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jack */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/jack-decker.jpg"
                  alt="Attorney Jack Decker"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10 hidden lg:block" />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                Meet Your Attorney
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-6 sm:mb-8">
                About Jack Decker
              </h2>
              <div className="space-y-4 sm:space-y-5 text-navy/70 leading-relaxed font-[family-name:var(--font-body)] text-base sm:text-lg">
                <p>
                  Jack Decker is a Dallas-based personal injury attorney with
                  over six years of experience fighting for injured Texans. A
                  graduate of{" "}
                  <strong className="text-navy">
                    Baylor University School of Law
                  </strong>
                  , Jack built his career at some of the most respected personal
                  injury firms in Texas before establishing his own practice.
                </p>
                <p>
                  From his time at Hunter & Kalina through his work at McCraw
                  Law Group and now Mullen & Mullen Law Firm, Jack has handled
                  hundreds of cases involving car accidents, catastrophic truck
                  wrecks, workplace injuries, and wrongful death claims.
                </p>
                <p>
                  Jack believes that every client deserves personalized
                  attention&mdash;not a case number. He takes the time to
                  understand your situation, explains your options clearly, and
                  fights aggressively to secure the compensation you deserve.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-cream rounded-lg p-4">
                  <div className="text-gold text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">6+</div>
                  <div className="text-navy/60 text-sm font-[family-name:var(--font-body)]">
                    Years Practicing
                  </div>
                </div>
                <div className="bg-cream rounded-lg p-4">
                  <div className="text-gold text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">TX</div>
                  <div className="text-navy/60 text-sm font-[family-name:var(--font-body)]">
                    Licensed in Texas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Jack Decker */}
      <section className="py-16 sm:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
              The Decker Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 sm:mb-6">
              Why Choose Jack Decker
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Personalized Attention",
                desc: "You are not just a case number. Jack personally handles every client relationship and keeps you informed at every step.",
                num: "01",
              },
              {
                title: "Aggressive Representation",
                desc: "Insurance companies know Jack fights hard. His reputation for going to trial when necessary means better settlement offers for you.",
                num: "02",
              },
              {
                title: "No Upfront Costs",
                desc: "You pay nothing unless we win your case. Jack works on contingency because he believes justice should not depend on your bank account.",
                num: "03",
              },
              {
                title: "Texas Trial Experience",
                desc: "With years of courtroom experience in Texas courts, Jack knows how to build cases that win\u2014at the negotiating table or before a jury.",
                num: "04",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-6 sm:p-8 border border-white/10 rounded-lg hover:border-gold/40 transition-colors group"
              >
                <span className="text-gold/30 text-5xl sm:text-6xl font-bold absolute top-4 right-4 font-[family-name:var(--font-heading)] group-hover:text-gold/50 transition-colors">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gold mb-3 sm:mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed font-[family-name:var(--font-body)] text-sm sm:text-base relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 sm:py-20 bg-red-cta relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Don&apos;t Wait&mdash;Your Free Case Review Is One Call Away
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Every day you wait could affect your case. Texas has a statute of
            limitations on personal injury claims. Contact Jack Decker today for
            a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0000000000"
              className="inline-flex items-center justify-center bg-white text-red-cta hover:bg-cream px-8 py-4 rounded text-lg font-bold transition-colors font-[family-name:var(--font-body)]"
            >
              Call (XXX) XXX-XXXX
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-red-cta px-8 py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-6 sm:mb-8">
                Free Case Review
              </h2>
              <p className="text-navy/70 text-base sm:text-lg leading-relaxed mb-8 font-[family-name:var(--font-body)]">
                Fill out the form below or call directly. Jack will personally
                review your case and get back to you within 24 hours.
              </p>

              {/* Phone CTA - prominent */}
              <div className="bg-navy rounded-lg p-6 sm:p-8 mb-6">
                <p className="text-white/70 text-sm mb-2 font-[family-name:var(--font-body)]">
                  Prefer to talk? Call us now:
                </p>
                <a
                  href="tel:0000000000"
                  className="text-gold text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] hover:text-gold-light transition-colors"
                >
                  (XXX) XXX-XXXX
                </a>
                <p className="text-white/50 text-sm mt-2 font-[family-name:var(--font-body)]">
                  Available 24/7 for emergencies
                </p>
              </div>

              <div className="space-y-4 text-navy/60 font-[family-name:var(--font-body)] text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>Dallas, Texas</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>contact@rjdeckerlaw.com</span>
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
      <footer className="bg-navy-dark py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <span className="text-gold font-[family-name:var(--font-heading)] text-2xl font-bold">
                Jack Decker
              </span>
              <p className="text-white/40 text-sm mt-1 font-[family-name:var(--font-body)]">
                Attorney at Law
              </p>
              <p className="text-white/50 text-sm mt-4 leading-relaxed font-[family-name:var(--font-body)]">
                Fighting for injured Texans with personalized attention and
                aggressive representation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-body)]">
                Practice Areas
              </h4>
              <ul className="space-y-2 text-white/50 text-sm font-[family-name:var(--font-body)]">
                <li>
                  <a href="#practice-areas" className="hover:text-gold transition-colors">
                    Car Accidents
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-gold transition-colors">
                    Truck & 18-Wheeler Wrecks
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-gold transition-colors">
                    Slip & Fall
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-gold transition-colors">
                    Workplace Injuries
                  </a>
                </li>
                <li>
                  <a href="#practice-areas" className="hover:text-gold transition-colors">
                    Wrongful Death
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-body)]">
                Contact
              </h4>
              <ul className="space-y-2 text-white/50 text-sm font-[family-name:var(--font-body)]">
                <li>
                  <a href="tel:0000000000" className="hover:text-gold transition-colors">
                    (XXX) XXX-XXXX
                  </a>
                </li>
                <li>Dallas, Texas</li>
                <li>
                  <a href="mailto:contact@rjdeckerlaw.com" className="hover:text-gold transition-colors">
                    contact@rjdeckerlaw.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8">
            <p className="text-white/30 text-xs leading-relaxed font-[family-name:var(--font-body)]">
              This website is for informational purposes only and does not
              constitute legal advice. No attorney-client relationship is formed
              by use of this website. Past results do not guarantee future
              outcomes. If you need legal advice, please contact an attorney
              directly.
            </p>
            <p className="text-white/20 text-xs mt-4 font-[family-name:var(--font-body)]">
              &copy; 2026 Jack Decker, Attorney at Law. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
