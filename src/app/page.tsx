"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { WHRNav } from "./WHRNav";
import { WHRFooter } from "./WHRFooter";

export default function WHRLaw() {
  return (
    <main style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
      <WHRNav isHome />

      {/* Hero */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center bg-forest overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest/80 to-forest/40 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/william-russell-hero.jpg"
            alt="William H. Russell, Central Texas Attorney"
            fill
            className="object-cover object-top opacity-40 sm:opacity-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="text-accent-warm-light text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">Georgetown &amp; Austin Family Law</span>
              <div className="h-px bg-accent-warm/40 mt-2" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1] mb-4 sm:mb-6 font-[family-name:var(--font-heading)]">
              Central Texas Law,{" "}
              <span className="text-accent-warm-light">Handled Personally.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/80 mb-8 sm:mb-10 leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              37+ years serving Williamson and Travis counties. Probate, Family Law, Estate Planning &amp; Criminal Defense — with the attention your case deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-accent-warm hover:bg-accent-warm-dark text-cream px-8 py-4 rounded text-lg font-semibold transition-all font-[family-name:var(--font-body)]">
                Free Consultation
              </a>
              <a href="#practice-areas" className="inline-flex items-center justify-center border-2 border-cream/30 text-cream hover:border-accent-warm-light hover:text-accent-warm-light px-8 py-4 rounded text-lg font-semibold transition-all font-[family-name:var(--font-body)]">
                Our Practice Areas
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 sm:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { title: "37+ Years in Central TX", desc: "Deep local roots" },
              { title: "500+ Wills Completed", desc: "Estate planning expertise" },
              { title: "Williamson & Travis", desc: "Counties served" },
              { title: "4 Practice Areas", desc: "Probate, Family, Estate, Criminal" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-warm/20 flex items-center justify-center">
                  <span className="text-accent-warm font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="text-forest font-bold text-sm sm:text-base font-[family-name:var(--font-body)]">{item.title}</h3>
                <p className="text-forest/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent-warm text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">How We Help</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-4 sm:mb-6 font-[family-name:var(--font-heading)]">Practice Areas</h2>
            <p className="text-forest/70 text-base sm:text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)]">
              Experienced legal counsel across four core areas of Texas law, serving Georgetown, Austin, and surrounding communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              { title: "Probate", slug: "probate", desc: "Guiding families through the estate administration process with care and efficiency. William handles probate in both Williamson and Travis counties.", details: ["Independent Administration", "Dependent Administration", "Muniment of Title", "Small Estates Affidavit", "Heirship Hearings", "Affidavit of Heirship", "Executor Guidance & Creditor Notification", "Inventory & Appraisement"] },
              { title: "Family Law", slug: "family-law", desc: "Divorce, custody, and support handled with both legal precision and genuine compassion. Texas community property law requires an experienced guide. Protecting your family's future is the priority.", details: ["Divorce (Contested, Uncontested, Military)", "Child Custody & Visitation", "Child Support & Modifications", "Retirement Division & QDROs", "Grandparent's Rights", "Adoption Services", "Domestic Violence Cases", "LGBTQ+ Family Law", "Enforcement of Court Orders", "Post-Divorce Property Disputes"] },
              { title: "Estate Planning", slug: "estate-planning", desc: "500+ wills completed for Central Texas families. Whether planning for individuals or couples, William delivers attorney-drafted documents with real legal weight — not automated online forms.", details: ["Wills for Individuals & Couples", "Trusts & Powers of Attorney", "Advance Directives", "Guardianship for Minor Children", "Trust Arrangements for Incapacitated Adults", "Self-Proving Affidavits"] },
              { title: "Criminal Defense", slug: "criminal-defense", desc: "When your freedom is at stake, you need an experienced advocate. William handles misdemeanors in county, municipal, and justice courts — plus felonies and juvenile criminal matters.", details: ["DWI / DUI Defense", "Class A Misdemeanors (Assault, 2nd DWI)", "Class B Misdemeanors (1st DWI, Drug Possession)", "Felony Defense", "Juvenile Criminal Matters", "Expunctions & Record Sealing"] },
            ].map((area, i) => (
              <div key={i} className="group bg-cream rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-cream-dark/20 hover:border-accent-warm/30">
                <h3 className="text-xl sm:text-2xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">{area.title}</h3>
                <p className="text-forest/60 leading-relaxed font-[family-name:var(--font-body)] text-sm sm:text-base mb-4">{area.desc}</p>
                <ul className="grid grid-cols-2 gap-1.5 mb-5">
                  {area.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-forest/50 text-xs sm:text-sm font-[family-name:var(--font-body)]">
                      <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href={`/practice-areas/${area.slug}`} className="inline-flex items-center gap-1.5 text-accent-warm hover:text-accent-warm-dark text-sm font-semibold font-[family-name:var(--font-body)] transition-colors">
                  See Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6"/></svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center justify-center bg-forest hover:bg-forest-dark text-cream px-8 py-4 rounded text-lg font-semibold transition-all font-[family-name:var(--font-body)]">
              Discuss Your Case — Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Insurance Accepted */}
      <section className="py-10 bg-cream-light border-y border-cream-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-forest/40 uppercase tracking-[0.15em] mb-8 font-[family-name:var(--font-body)]">Insurance Accepted</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {/* MetLife — inline SVG, leftmost position */}
            <a href="https://www.metlife.com" target="_blank" rel="noopener noreferrer" style={{ background: "white", borderRadius: "8px", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "160px", height: "64px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)", textDecoration: "none" }}>
              <svg viewBox="0 0 140 40" height="32" style={{ display: "block" }} aria-label="MetLife">
                <rect x="0" y="10" width="22" height="22" rx="3" fill="#009BDE"/>
                <text x="11" y="26" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900">M</text>
                <text x="30" y="27" fill="#009BDE" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900">MetLife</text>
              </svg>
            </a>
            {/* ARAG — inline SVG to guarantee rendering regardless of file serving */}
            <a href="https://www.arag.com" target="_blank" rel="noopener noreferrer" style={{ background: "white", borderRadius: "8px", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "160px", height: "64px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)", textDecoration: "none" }}>
              <svg viewBox="0 0 120 40" height="36" style={{ display: "block" }} aria-label="ARAG Legal Insurance">
                <rect x="0" y="8" width="34" height="24" rx="2" fill="#F6C300"/>
                <text x="17" y="25" textAnchor="middle" fill="#1a1a1a" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900">ARAG</text>
                <text x="50" y="18" fill="#1a1a1a" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700">LEGAL</text>
                <text x="50" y="30" fill="#1a1a1a" fontFamily="Arial, sans-serif" fontSize="9">INSURANCE</text>
              </svg>
            </a>
            {/* Texas Legal — inline SVG on official brand navy */}
            <a href="https://texaslegal.org" target="_blank" rel="noopener noreferrer" style={{ background: "#054975", borderRadius: "8px", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: "160px", height: "64px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)", textDecoration: "none" }}>
              <svg viewBox="0 0 140 40" height="36" style={{ display: "block" }} aria-label="Texas Legal">
                <text x="70" y="16" textAnchor="middle" fill="#ffffff" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" letterSpacing="2">TEXAS</text>
                <line x1="10" y1="21" x2="130" y2="21" stroke="#ffffff" strokeWidth="0.75" opacity="0.5"/>
                <text x="70" y="33" textAnchor="middle" fill="#ffffff" fontFamily="Georgia, serif" fontSize="11" letterSpacing="1">Legal</text>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Videos from William */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent-warm text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">Hear From William</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-3 mb-4">William H. Russell in His Own Words</h2>
            <p className="text-forest/60 font-[family-name:var(--font-body)]">Watch William walk through how he approaches estate planning and legal services for Central Texas families.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.loom.com/embed/5590d111dd974dd8bddef6a99b580288?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                  title="William H. Russell — Estate Planning Overview"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-forest/40 mt-2 text-center font-[family-name:var(--font-body)]">Estate Planning Overview</p>
            </div>
            <div>
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.loom.com/embed/5f94169a3bfb482d96e3fe4b8f2133ce?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                  title="William H. Russell — Legal Services"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-forest/40 mt-2 text-center font-[family-name:var(--font-body)]">Working With WHR Law</p>
            </div>
          </div>
        </div>
      </section>

      {/* About William */}
      <section id="about" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-accent-warm text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">Meet Your Attorney</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-6 sm:mb-8 font-[family-name:var(--font-heading)]">William H. Russell</h2>
            </div>
            <div className="flex justify-center mb-10">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-accent-warm/30 shadow-xl">
                <Image src="/william-russell-headshot.png" alt="William H. Russell" fill className="object-cover" sizes="224px" />
              </div>
            </div>
            <div className="space-y-5 text-forest/70 leading-relaxed font-[family-name:var(--font-body)] text-base sm:text-lg">
              <p>William H. Russell is a <strong className="text-forest">fourth-generation Texan</strong> who has called the Georgetown and Austin area home for more than 37 years. That deep connection to Central Texas is not just personal — it is the foundation of his law practice.</p>
              <p>With decades of experience across <strong className="text-forest">Williamson and Travis counties</strong>, William has built a reputation for providing thoughtful, effective legal counsel in Probate, Family Law, Estate Planning, and Criminal Defense.</p>
              <p>William believes the law should serve people — not the other way around. Every client receives personalized attention, clear communication, and a legal strategy tailored to their specific situation.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { stat: "37+", label: "Years in Central TX" },
                { stat: "4th", label: "Generation Texan" },
                { stat: "2", label: "Counties Served" },
                { stat: "4", label: "Practice Areas" },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-4 text-center border border-cream-dark/20">
                  <div className="text-accent-warm text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)]">{s.stat}</div>
                  <div className="text-forest/60 text-xs sm:text-sm font-[family-name:var(--font-body)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WHR */}
      <section className="py-16 sm:py-24 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent-warm-light text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">The WHR Law Difference</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-4 sm:mb-6 font-[family-name:var(--font-heading)]">Why Choose William H. Russell</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: "Decades of Experience", desc: "Over 37 years living and practicing in Central Texas means William knows the courts, the judges, and the law.", num: "01" },
              { title: "Personal Attention", desc: "You work directly with William. Your case gets focused attention from start to finish — not a paralegal.", num: "02" },
              { title: "Local Knowledge", desc: "As a fourth-generation Texan in the Georgetown/Austin community, William understands the people and institutions that matter.", num: "03" },
              { title: "Straightforward Counsel", desc: "No jargon. No runaround. William gives you honest, clear advice so you can make informed decisions.", num: "04" },
            ].map((item, i) => (
              <div key={i} className="relative p-6 sm:p-8 border border-cream/10 rounded-lg hover:border-accent-warm/40 transition-colors">
                <span className="text-cream/10 text-5xl sm:text-6xl font-bold absolute top-4 right-4 font-[family-name:var(--font-heading)]">{item.num}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-accent-warm-light mb-3 sm:mb-4 font-[family-name:var(--font-heading)]">{item.title}</h3>
                <p className="text-cream/70 leading-relaxed font-[family-name:var(--font-body)] text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent-warm text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">What Clients Say</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 font-[family-name:var(--font-heading)]">Client Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "William is on your side and handles the court process with all its hurdles.", initials: "Y.Y." },
              { quote: "William is the man to have in your corner in a time of need. I highly recommend his service.", initials: "A.C." },
              { quote: "He listens well, is proactive, diligent, industrious, and doesn't waste your time.", initials: "B.K." },
              { quote: "Mr. Russell was great to work with. He provided clear answers to all my questions.", initials: "C.P." },
              { quote: "Great guy — responsive and takes care of business.", initials: "J.S." },
              { quote: "I recommend The Law Office of William H. Russell. The attorneys are always working on your side.", initials: "J.A." },
            ].map((t, i) => (
              <div key={i} className="bg-cream rounded-lg p-6 sm:p-8 border border-cream-dark/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-accent-warm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-forest/70 italic leading-relaxed font-[family-name:var(--font-body)] text-sm sm:text-base mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-forest font-semibold text-sm font-[family-name:var(--font-body)]">&mdash; {t.initials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 sm:py-20 bg-accent-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 sm:mb-6 font-[family-name:var(--font-heading)]">Your Free Consultation Is Waiting</h2>
          <p className="text-cream/90 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
            Whether you are facing a legal challenge or planning for the future, William H. Russell is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center bg-cream text-accent-warm-dark hover:bg-white px-8 py-4 rounded text-lg font-bold transition-colors font-[family-name:var(--font-body)]">
              Schedule Your Consultation
            </a>
            <a href="tel:+15122194053" className="inline-flex items-center justify-center border-2 border-cream text-cream hover:bg-cream hover:text-accent-warm-dark px-8 py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]">
              Call Our Office
            </a>
          </div>
        </div>
      </section>

      {/* Resources & Links */}
      <section className="py-16 sm:py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent-warm text-xs font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">Helpful Resources</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-3">Texas Legal Resources</h2>
            <p className="text-forest/60 mt-3 font-[family-name:var(--font-body)]">Useful links for clients navigating the Texas legal system.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { heading: "Local Courts", links: [
                { label: "Travis County Courts", href: "https://www.traviscountytx.gov/courts" },
                { label: "Williamson County Courts", href: "https://www.wilco.org/Departments/Courts" },
                { label: "Bastrop County Courts", href: "https://www.co.bastrop.tx.us/page/bastrop.District_Court" },
              ]},
              { heading: "State & Federal", links: [
                { label: "Texas Courts Online", href: "https://www.txcourts.gov/" },
                { label: "Texas Attorney General", href: "https://www.texasattorneygeneral.gov/" },
                { label: "U.S. Federal Courts – TX", href: "https://www.uscourts.gov/" },
              ]},
              { heading: "Consumer & Family", links: [
                { label: "Texas Consumer Protection", href: "https://www.texasattorneygeneral.gov/consumer-protection" },
                { label: "Texas Child Support", href: "https://csapps.oag.texas.gov/" },
                { label: "Texas State Law Library", href: "https://www.sll.texas.gov/" },
              ]},
            ].map((group, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-cream-dark/20">
                <h3 className="text-forest font-bold text-sm uppercase tracking-wider mb-4 font-[family-name:var(--font-body)]">{group.heading}</h3>
                <ul className="space-y-2">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-accent-warm hover:text-accent-warm-dark text-sm font-[family-name:var(--font-body)] flex items-center gap-1.5 transition-colors">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-accent-warm text-xs font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)] mb-1">Find Us</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-forest font-[family-name:var(--font-heading)]">Visit Our Office</h3>
              <p className="text-forest/60 text-sm font-[family-name:var(--font-body)] mt-1">The Law Office of William H. Russell · 1016 La Posada Dr, Austin TX 78752</p>
            </div>
            <a
              href="https://maps.google.com/?q=The+Law+Office+of+William+H.+Russell,+1016+La+Posada+Dr,+Austin,+TX+78752"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-accent-warm hover:text-accent-warm-dark font-semibold text-sm font-[family-name:var(--font-body)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
              Get Directions
            </a>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-forest/10">
            <iframe
              src="https://maps.google.com/maps?q=The+Law+Office+of+William+H.+Russell,+1016+La+Posada+Dr,+Austin,+TX+78752&output=embed&z=15"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Law Office of William H. Russell — 1016 La Posada Dr, Austin TX 78752"
            />
          </div>
          <a
            href="https://maps.google.com/?q=The+Law+Office+of+William+H.+Russell,+1016+La+Posada+Dr,+Austin,+TX+78752"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden mt-3 inline-flex items-center gap-1.5 text-accent-warm font-semibold text-sm font-[family-name:var(--font-body)]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
            Get Directions
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <span className="text-accent-warm text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">Get Started</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-3 mb-6 sm:mb-8 font-[family-name:var(--font-heading)]">Free Consultation</h2>
              <p className="text-forest/70 text-base sm:text-lg leading-relaxed mb-8 font-[family-name:var(--font-body)]">
                Tell us about your situation and William will personally review your case. No cost, no obligation — just honest guidance.
              </p>
              <div className="bg-forest rounded-lg p-6 sm:p-8 mb-6">
                <p className="text-cream/70 text-sm mb-3 font-[family-name:var(--font-body)]">WHR Law Office</p>
                <p className="text-cream text-lg sm:text-xl font-semibold font-[family-name:var(--font-body)] mb-1">1016 La Posada Dr</p>
                <p className="text-cream/80 text-base font-[family-name:var(--font-body)]">Austin, TX 78752</p>
                <a href="tel:+15122194053" className="text-cream text-lg sm:text-xl font-semibold font-[family-name:var(--font-body)] mt-2 block hover:text-accent-warm-light transition-colors">
                  (512) 219-4053
                </a>
              </div>
              <div className="space-y-3 text-forest/60 font-[family-name:var(--font-body)] text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-accent-warm">📍</span>
                  <span>Serving Williamson &amp; Travis Counties</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent-warm">✉️</span>
                  <span>william@whr-law.com</span>
                </div>
              </div>
            </div>
            <div>
              <BillyContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <WHRFooter />
      <WHRChatBot />
    </main>
  );
}

function BillyContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", practiceArea: "", description: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (val: string) => {
    if (!val) return "";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? "" : "Please enter a valid email address";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateEmail(formData.email);
    if (err) { setEmailError(err); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, client: "whr-law" }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", phone: "", email: "", practiceArea: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-lg p-8 sm:p-10 shadow-lg border border-cream-dark/20 text-center">
        <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-forest mb-2 font-[family-name:var(--font-heading)]">Thank You</h3>
        <p className="text-forest/60 font-[family-name:var(--font-body)]">William will review your case and contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg border border-cream-dark/20">
      <h3 className="text-2xl font-bold text-forest mb-6 font-[family-name:var(--font-heading)]">Schedule a Free Consultation</h3>
      <div className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]">Full Name <span className="text-red-cta">*</span></label>
          <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded border border-gray-200 focus:border-accent-warm focus:ring-2 focus:ring-accent-warm/20 outline-none transition-colors text-forest font-[family-name:var(--font-body)]" placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]">Phone Number <span className="text-red-cta">*</span></label>
          <input type="tel" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded border-2 border-accent-warm/30 focus:border-accent-warm focus:ring-2 focus:ring-accent-warm/20 outline-none transition-colors text-forest text-lg font-semibold font-[family-name:var(--font-body)]" placeholder="(512) 555-0123" />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]">Email Address</label>
          <input type="email" value={formData.email} onChange={e => { setFormData({ ...formData, email: e.target.value }); setEmailError(validateEmail(e.target.value)); }}
            onBlur={e => setEmailError(validateEmail(e.target.value))}
            className={`w-full px-4 py-3 rounded border ${emailError ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-accent-warm focus:ring-accent-warm/20"} focus:ring-2 outline-none transition-colors text-forest font-[family-name:var(--font-body)]`} placeholder="jane@example.com" />
          {emailError && <p className="text-red-500 text-xs mt-1 font-[family-name:var(--font-body)]">{emailError}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]">Practice Area</label>
          <select value={formData.practiceArea} onChange={e => setFormData({ ...formData, practiceArea: e.target.value })}
            className="w-full px-4 py-3 rounded border border-gray-200 focus:border-accent-warm focus:ring-2 focus:ring-accent-warm/20 outline-none transition-colors text-forest font-[family-name:var(--font-body)]">
            <option value="">Select a practice area...</option>
            <option value="probate">Probate</option>
            <option value="family-law">Family Law</option>
            <option value="estate-planning">Estate Planning</option>
            <option value="criminal-defense">Criminal Defense</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]">Brief Description <span className="text-red-cta">*</span></label>
          <textarea required rows={4} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 rounded border border-gray-200 focus:border-accent-warm focus:ring-2 focus:ring-accent-warm/20 outline-none transition-colors text-forest resize-none font-[family-name:var(--font-body)]" placeholder="Tell us about your legal situation..." />
        </div>
        <button type="submit" disabled={status === "sending"}
          className="w-full bg-forest hover:bg-forest-dark disabled:bg-forest/50 text-cream py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]">
          {status === "sending" ? "Sending..." : "Request Free Consultation"}
        </button>
        {status === "error" && <p className="text-red-600 text-sm text-center font-[family-name:var(--font-body)]">Something went wrong. Please try again.</p>}
        <p className="text-xs text-forest/40 text-center font-[family-name:var(--font-body)]">Your information is kept confidential.</p>
      </div>
    </form>
  );
}

// ── WHR Law Chatbot ────────────────────────────────────────────────────────────
const FOREST = '#1a3c34';
const CREAM = '#FAF8F5';
const WARM = '#8b6f47';
const WARM_LIGHT = '#a68960';
const FOREST_DARK = '#112822';

const PRACTICE_AREAS = [
  'Probate',
  'Estate Planning',
  'Family Law',
  'Criminal Defense',
  'Other',
];

function WHRChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [practiceArea, setPracticeArea] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isValidName = (v: string) => v.trim().split(/\s+/).length >= 2 && v.trim().length >= 4;
  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const isValidPhone = (v: string) => v.replace(/\D/g, '').length >= 10;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  const submit = async (submittedPhone: string) => {
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: submittedPhone,
          practiceArea,
          description: `Chatbot inquiry — ${practiceArea}`,
          client: 'whr-law',
        }),
      });
      setStep(5);
    } catch {
      setStep(6);
    } finally {
      setLoading(false);
    }
  };

  const advance = () => {
    const val = inputVal.trim();
    if (!val) return;
    if (step === 1) {
      if (!isValidName(val)) { setInputError('Please enter your full name (first and last).'); return; }
      setName(val); setInputVal(''); setInputError(''); setStep(2);
    } else if (step === 2) {
      if (!isValidEmail(val)) { setInputError("That doesn't look like a valid email. Try again?"); return; }
      setEmail(val); setInputVal(''); setInputError(''); setStep(3);
    } else if (step === 3) {
      if (!isValidPhone(val)) { setInputError('Please enter a 10-digit phone number.'); return; }
      setPhone(val); setInputVal(''); setInputError(''); submit(val);
    }
  };

  const btn: React.CSSProperties = {
    background: 'none', border: `1.5px solid ${FOREST}`, borderRadius: 20,
    padding: '6px 13px', color: FOREST, fontSize: '0.78rem', fontWeight: 600,
    cursor: 'pointer', transition: 'background 0.15s, color 0.15s',
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Free consultation"
          style={{
            position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
            width: 60, height: 60, borderRadius: '50%',
            background: `linear-gradient(135deg, ${FOREST}, ${FOREST_DARK})`,
            border: `2px solid ${WARM}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 8px 30px rgba(26,60,52,0.45)`, transition: 'transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={WARM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </button>
      )}

      {open && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24, left: 24, zIndex: 9999,
          maxWidth: 360, marginLeft: 'auto',
          height: 500, maxHeight: 'calc(100dvh - 48px)',
          borderRadius: 16, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          background: CREAM,
          border: '1px solid #e0d8ce',
          boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          animation: 'whrChatUp 0.25s ease-out',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '13px 16px',
            background: `linear-gradient(135deg, ${FOREST}, ${FOREST_DARK})`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={WARM} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: CREAM, lineHeight: 1.2 }}>WHR Law</div>
                <div style={{ fontSize: '0.68rem', color: `${CREAM}99`, lineHeight: 1.2 }}>William H. Russell, Attorney</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close"
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '1rem' }}>
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Opening message */}
            <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
              Hi — I&apos;m here to help connect you with <strong style={{ color: WARM_LIGHT }}>William</strong> for a free consultation. What brings you in today?
            </div>

            {/* Step 0: practice area picker */}
            {step === 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 2 }}>
                {PRACTICE_AREAS.map(area => (
                  <button key={area} onClick={() => { setPracticeArea(area); setStep(1); }}
                    style={btn}
                    onMouseEnter={e => { e.currentTarget.style.background = FOREST; e.currentTarget.style.color = WARM_LIGHT; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = FOREST; }}
                  >{area}</button>
                ))}
              </div>
            )}

            {/* Echo: practice area */}
            {step >= 1 && practiceArea && (
              <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{practiceArea}</div>
            )}
            {step >= 1 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
                Understood. What&apos;s your <strong style={{ color: WARM_LIGHT }}>full name</strong>?
              </div>
            )}

            {/* Echo: name */}
            {step >= 2 && name && (
              <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{name}</div>
            )}
            {step >= 2 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
                Thank you, {name.split(' ')[0]}. What&apos;s your <strong style={{ color: WARM_LIGHT }}>email address</strong>?
              </div>
            )}

            {/* Echo: email */}
            {step >= 3 && email && (
              <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{email}</div>
            )}
            {step >= 3 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.55 }}>
                And the best <strong style={{ color: WARM_LIGHT }}>phone number</strong> to reach you?
              </div>
            )}

            {/* Confirmation */}
            {step === 5 && (
              <>
                <div style={{ alignSelf: 'flex-end', maxWidth: '80%', padding: '10px 14px', borderRadius: '14px 14px 4px 14px', background: `${FOREST}cc`, color: '#fff', fontSize: '0.84rem' }}>{phone}</div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '92%', padding: '12px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem', lineHeight: 1.6 }}>
                  Thank you, {name.split(' ')[0]}. William will personally review your situation and reach out within one business day.<br /><br />
                  Need to speak sooner? Call <a href="tel:+15122194053" style={{ color: WARM_LIGHT, fontWeight: 700 }}>512-219-4053</a>.
                </div>
              </>
            )}

            {/* Error */}
            {step === 6 && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '92%', padding: '12px 14px', borderRadius: '14px 14px 14px 4px', background: FOREST, color: CREAM, fontSize: '0.84rem' }}>
                Something went wrong. Please call William directly at <a href="tel:+15122194053" style={{ color: WARM_LIGHT, fontWeight: 700 }}>512-219-4053</a>.
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {(step === 1 || step === 2 || step === 3) && (
            <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px', borderTop: '1px solid #e0d8ce', background: '#fff', gap: 6 }}>
              {inputError && <div style={{ fontSize: '0.73rem', color: '#b91c1c', paddingLeft: 2 }}>{inputError}</div>}
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') advance(); }}
                  placeholder={step === 1 ? 'Your full name...' : step === 2 ? 'Your email address...' : 'Your phone number...'}
                  type={step === 2 ? 'email' : step === 3 ? 'tel' : 'text'}
                  autoFocus
                  style={{ flex: 1, background: CREAM, border: `1.5px solid #d0c8bc`, borderRadius: 10, padding: '10px 14px', color: FOREST, fontSize: '0.84rem', outline: 'none' }}
                />
                <button
                  disabled={loading || !inputVal.trim()}
                  onClick={advance}
                  style={{ background: loading || !inputVal.trim() ? '#ccc' : `linear-gradient(135deg, ${FOREST}, ${FOREST_DARK})`, border: 'none', borderRadius: 10, padding: '0 14px', cursor: loading || !inputVal.trim() ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={WARM} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes whrChatUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
