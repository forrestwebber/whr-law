'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface WHRNavProps {
  /** Use anchor links for on-page sections (home page only) */
  isHome?: boolean;
}

export function WHRNav({ isHome = false }: WHRNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeHref, setHomeHref] = useState('/');

  useEffect(() => {
    if (window.location.hostname.includes('whr-law')) setHomeHref('/');
  }, []);

  const practiceAreasHref = isHome ? '#practice-areas' : '/#practice-areas';
  const aboutHref = isHome ? '#about' : '/#about';
  const contactHref = isHome ? '#contact' : '/#contact';

  return (
    <nav className="sticky top-0 z-50 bg-forest/95 backdrop-blur-sm border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href={homeHref} className="flex items-center gap-3 no-underline">
            <div style={{ background: 'white', borderRadius: '6px', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', flexShrink: 0 }}>
              <Image src="/whr-monogram.jpg" alt="WHR Law" width={32} height={32} className="rounded" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cream font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold tracking-tight">WHR Law</span>
              <span className="hidden sm:inline text-cream/60 text-sm font-[family-name:var(--font-body)]">| William H. Russell</span>
            </div>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <a href={practiceAreasHref} className="hidden md:inline-block text-cream/80 hover:text-accent-warm-light transition-colors text-sm font-[family-name:var(--font-body)]">Practice Areas</a>
            <a href={aboutHref} className="hidden md:inline-block text-cream/80 hover:text-accent-warm-light transition-colors text-sm font-[family-name:var(--font-body)]">About</a>
            <Link href="/links" className="hidden md:inline-block text-cream/80 hover:text-accent-warm-light transition-colors text-sm font-[family-name:var(--font-body)]">Legal Links</Link>
            <a href="tel:+15122194053" className="hidden md:flex items-center gap-1.5 text-cream/80 hover:text-accent-warm-light text-sm font-semibold font-[family-name:var(--font-body)]">512-219-4053</a>
            <a href={contactHref} className="hidden sm:inline-block bg-accent-warm hover:bg-accent-warm-dark text-cream px-5 py-2.5 rounded text-sm font-semibold transition-colors font-[family-name:var(--font-body)]">Free Consultation</a>

            {/* Mobile Call Now */}
            <a href="tel:+15122194053" className="md:hidden flex flex-col items-center justify-center gap-0.5 bg-accent-warm hover:bg-accent-warm-dark text-cream rounded px-2.5 py-1.5 transition-colors" aria-label="Call Now">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/></svg>
              <span className="text-[9px] font-bold leading-none tracking-wide">CALL</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-cream transition-all ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-cream transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-cream transition-all ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-forest border-t border-cream/10 px-4 py-3 flex flex-col gap-1">
          <a href={practiceAreasHref} onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-accent-warm-light py-2.5 text-sm font-[family-name:var(--font-body)] border-b border-cream/10">Practice Areas</a>
          <a href={aboutHref} onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-accent-warm-light py-2.5 text-sm font-[family-name:var(--font-body)] border-b border-cream/10">About</a>
          <Link href="/links" onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-accent-warm-light py-2.5 text-sm font-[family-name:var(--font-body)] border-b border-cream/10">Legal Links</Link>
          <a href={contactHref} onClick={() => setMenuOpen(false)} className="text-cream/80 hover:text-accent-warm-light py-2.5 text-sm font-[family-name:var(--font-body)] border-b border-cream/10">Free Consultation</a>
          <a href="tel:+15122194053" onClick={() => setMenuOpen(false)} className="mt-1 text-center bg-accent-warm text-cream py-2.5 rounded text-sm font-semibold font-[family-name:var(--font-body)]">Call 512-219-4053</a>
        </div>
      )}
    </nav>
  );
}
