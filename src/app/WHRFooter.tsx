import Link from 'next/link';

export function WHRFooter() {
  return (
    <footer className="bg-forest-dark py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <span className="text-accent-warm-light font-[family-name:var(--font-heading)] text-2xl font-bold">WHR Law</span>
            <p className="text-cream/40 text-sm mt-1 font-[family-name:var(--font-body)]">William H. Russell, Attorney at Law</p>
            <p className="text-cream/50 text-sm mt-4 leading-relaxed font-[family-name:var(--font-body)]">Serving Central Texas families with experienced, personal legal counsel in Probate, Family Law, Estate Planning, and Criminal Defense.</p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.facebook.com/WHRLaw" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-accent-warm-light transition-colors flex items-center gap-2 text-sm font-[family-name:var(--font-body)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Follow on Facebook
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-body)]">Practice Areas</h4>
            <ul className="space-y-2 text-cream/50 text-sm font-[family-name:var(--font-body)]">
              {[
                { label: 'Probate', href: '/practice-areas/probate' },
                { label: 'Family Law', href: '/practice-areas/family-law' },
                { label: 'Estate Planning', href: '/practice-areas/estate-planning' },
                { label: 'Criminal Defense', href: '/practice-areas/criminal-defense' },
                { label: 'Legal Links', href: '/links' },
              ].map(a => (
                <li key={a.label}><Link href={a.href} className="hover:text-accent-warm-light transition-colors">{a.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-cream font-semibold mb-4 text-sm uppercase tracking-wider font-[family-name:var(--font-body)]">Contact</h4>
            <ul className="space-y-2 text-cream/50 text-sm font-[family-name:var(--font-body)]">
              <li>1016 La Posada Dr</li>
              <li>Austin, TX 78752</li>
              <li className="pt-1">Williamson &amp; Travis Counties</li>
              <li><a href="tel:+15122194053" className="hover:text-accent-warm-light transition-colors">512-219-4053</a></li>
              <li><a href="mailto:william@whr-law.com" className="hover:text-accent-warm-light transition-colors">william@whr-law.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <p className="text-cream/30 text-xs leading-relaxed font-[family-name:var(--font-body)]">
            This website is for informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by use of this website.
          </p>
          <p className="text-cream/20 text-xs mt-4 font-[family-name:var(--font-body)]">
            &copy; 2026 WHR Law &mdash; William H. Russell, Attorney at Law. All rights reserved. &nbsp;&middot;&nbsp;
            <span className="text-cream/30">Site by <a href="https://slacked.co" className="hover:text-cream/50 transition-colors">Slacked.co</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
