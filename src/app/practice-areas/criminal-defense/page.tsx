import Link from "next/link";
import { WHRNav } from "../../WHRNav";
import { WHRFooter } from "../../WHRFooter";
import { WHRChatBot } from "../../WHRChatBot";

export default function CriminalDefense() {
  return (
    <main style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
      <WHRNav />

      <div>
        <section className="bg-forest py-14 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/#practice-areas" className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm mb-6 font-[family-name:var(--font-body)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              Back to Practice Areas
            </Link>
            <span className="text-accent-warm-light text-xs font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">WHR Law</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mt-3 mb-5 font-[family-name:var(--font-heading)]">Criminal Defense</h1>
            <p className="text-cream/70 text-lg leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              When your freedom is at stake, you need an experienced advocate. William handles all misdemeanor types and felonies, including juvenile criminal matters.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white px-4">
          <div className="max-w-4xl mx-auto space-y-10">

            <div className="border-l-4 border-accent-warm pl-6">
              <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Felonies & Misdemeanors</h3>
              <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)] mb-3">
                Generally, a crime punishable by imprisonment of one year or more is considered a felony. People convicted of felonies face state or federal prison, with some felonies carrying capital punishment. Misdemeanors are less serious offenses, punishable by less than one year of imprisonment in local, city, or county jail.
              </p>
              <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                Having a misdemeanor conviction on your record can still impact your future — affecting your ability to get a job, a loan, or a professional license. William takes every case seriously.
              </p>
            </div>

            <div className="border-l-4 border-accent-warm pl-6">
              <h3 className="text-xl font-bold text-forest mb-4 font-[family-name:var(--font-heading)]">Texas Misdemeanor Classifications</h3>
              <div className="space-y-4">
                {[
                  { cls: "Class A", penalty: "Up to 1 year jail + up to $4,000 fine", examples: "Assault causing bodily injury, 2nd DWI offense, theft of $500–$1,500" },
                  { cls: "Class B", penalty: "Up to $2,000 fine and/or 6 months jail", examples: "First DWI, marijuana possession under 2 oz, theft of $50–$500" },
                  { cls: "Class C", penalty: "No jail time — fine only", examples: "Public intoxication, traffic offenses, minors in possession of alcohol, disorderly conduct" },
                ].map(c => (
                  <div key={c.cls} className="bg-cream rounded-lg p-5 border border-cream-dark/20">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-accent-warm uppercase tracking-wider font-[family-name:var(--font-body)]">{c.cls}</span>
                      <span className="text-forest/80 text-sm font-semibold font-[family-name:var(--font-body)]">{c.penalty}</span>
                    </div>
                    <p className="text-forest/50 text-sm font-[family-name:var(--font-body)]">Examples: {c.examples}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-accent-warm pl-6">
              <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Areas We Handle</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["DWI / DUI Defense", "Class A Misdemeanors", "Class B Misdemeanors", "Class C Misdemeanors", "Felony Defense", "Juvenile Criminal Matters", "Drug Possession", "Assault & Battery", "Theft Offenses", "Expunctions & Record Sealing"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-forest/60 text-sm font-[family-name:var(--font-body)]">
                    <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-forest py-14 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">Don&apos;t Face This Alone</h2>
            <p className="text-cream/70 mb-8 font-[family-name:var(--font-body)]">Call William immediately. A free consultation costs nothing — delay can cost everything.</p>
            <a href="tel:+15122194053" className="inline-flex items-center justify-center gap-2 bg-accent-warm hover:bg-accent-warm-dark text-cream px-8 py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]">
              Call 512-219-4053 Now
            </a>
          </div>
        </section>
      {/* Footer */}
      <WHRFooter />
      </div>
      <WHRChatBot />
    </main>
  );
}
