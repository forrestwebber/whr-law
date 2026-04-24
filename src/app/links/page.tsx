import Link from "next/link";
import { WHRNav } from "../WHRNav";
import { WHRFooter } from "../WHRFooter";
import { WHRChatBot } from "../WHRChatBot";

const LINK_GROUPS = [
  {
    heading: "Travis County",
    links: [
      { label: "Travis County Official Website", url: "https://www.traviscountytx.gov" },
      { label: "Travis County Courts", url: "https://www.traviscountytx.gov/courts" },
      { label: "Travis County District Clerk", url: "https://www.traviscountytx.gov/district-clerk" },
      { label: "Travis County Clerk", url: "https://www.traviscountytx.gov/county-clerk" },
    ],
  },
  {
    heading: "Williamson & Bastrop Counties",
    links: [
      { label: "Williamson County Official Website", url: "https://www.wilco.org" },
      { label: "Williamson County District Clerk", url: "https://www.wilco.org/Departments/District-Clerk" },
      { label: "Bastrop County Official Website", url: "https://www.co.bastrop.tx.us" },
    ],
  },
  {
    heading: "Courts — State and Local",
    links: [
      { label: "Texas Judicial Branch", url: "https://www.txcourts.gov" },
      { label: "Texas Supreme Court", url: "https://www.txcourts.gov/supreme" },
      { label: "Texas Court of Criminal Appeals", url: "https://www.txcourts.gov/cca" },
      { label: "Texas Office of Court Administration", url: "https://www.txcourts.gov/oca" },
    ],
  },
  {
    heading: "Courts — Federal",
    links: [
      { label: "U.S. District Court — Western District of Texas", url: "https://www.txwd.uscourts.gov" },
      { label: "U.S. Courts (federal court finder)", url: "https://www.uscourts.gov" },
      { label: "PACER — Federal Case Records", url: "https://pacer.gov" },
    ],
  },
  {
    heading: "Texas Agencies",
    links: [
      { label: "Texas Attorney General", url: "https://www.texasattorneygeneral.gov" },
      { label: "Texas Department of Public Safety", url: "https://www.dps.texas.gov" },
      { label: "Texas State Bar", url: "https://www.texasbar.com" },
      { label: "Texas Secretary of State", url: "https://www.sos.state.tx.us" },
    ],
  },
  {
    heading: "Federal Agencies",
    links: [
      { label: "Social Security Administration", url: "https://www.ssa.gov" },
      { label: "Internal Revenue Service (IRS)", url: "https://www.irs.gov" },
      { label: "U.S. Department of Labor", url: "https://www.dol.gov" },
    ],
  },
  {
    heading: "Research Materials",
    links: [
      { label: "Texas State Law Library (free legal research — Austin)", url: "https://www.sll.texas.gov" },
      { label: "UT Tarlton Law Library (University of Texas)", url: "https://tarlton.law.utexas.edu" },
      { label: "Google Scholar — Case Law", url: "https://scholar.google.com" },
      { label: "Justia — Free Legal Information", url: "https://law.justia.com" },
      { label: "Texas Legislature Online", url: "https://capitol.texas.gov" },
    ],
  },
  {
    heading: "Consumer Protection Agencies",
    links: [
      { label: "Texas Office of Consumer Credit Commissioner", url: "https://www.occc.texas.gov" },
      { label: "Federal Trade Commission (FTC)", url: "https://www.ftc.gov" },
      { label: "Consumer Financial Protection Bureau (CFPB)", url: "https://www.consumerfinance.gov" },
    ],
  },
  {
    heading: "Child Support",
    links: [
      { label: "Texas Attorney General — Child Support Division", url: "https://www.texasattorneygeneral.gov/child-support" },
      { label: "Texas Child Support Interactive (CSI)", url: "https://childsupport.oag.state.tx.us" },
    ],
  },
];

export default function LinksPage() {
  return (
    <main style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
      <WHRNav />

      <div>
        <section className="bg-forest py-14 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm mb-6 font-[family-name:var(--font-body)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              Back to Home
            </Link>
            <span className="text-accent-warm-light text-xs font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">WHR Law</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mt-3 mb-5 font-[family-name:var(--font-heading)]">Legal Links</h1>
            <p className="text-cream/70 text-lg leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              Resources that might assist you in legal research or help provide the information you need to solve your next legal need. The best place to conduct free legal research in the Austin area is at the State Law Library or at the University of Texas, Tarlton Law Library.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LINK_GROUPS.map(group => (
                <div key={group.heading}>
                  <h2 className="text-lg font-bold text-forest mb-4 font-[family-name:var(--font-heading)] pb-2 border-b border-cream-dark/30">{group.heading}</h2>
                  <ul className="space-y-2">
                    {group.links.map(link => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-forest/70 hover:text-accent-warm text-sm font-[family-name:var(--font-body)] transition-colors group"
                        >
                          <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-cream rounded-lg border border-cream-dark/20">
              <p className="text-forest/60 text-sm font-[family-name:var(--font-body)] leading-relaxed">
                <strong className="text-forest">Disclaimer:</strong> The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. These external links are provided as a convenience — WHR Law does not control or endorse their content.
              </p>
            </div>
          </div>
        </section>
      {/* Footer */}
      <WHRFooter />
      </div>
      <WHRChatBot />
    </main>
  );
}
