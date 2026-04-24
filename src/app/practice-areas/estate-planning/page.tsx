import Link from "next/link";
import { WHRNav } from "../../WHRNav";
import { WHRFooter } from "../../WHRFooter";
import { WHRChatBot } from "../../WHRChatBot";

export default function EstatePlanning() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mt-3 mb-5 font-[family-name:var(--font-heading)]">Estate Planning</h1>
            <p className="text-cream/70 text-lg leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              500+ wills completed for Central Texas families. William delivers attorney-drafted documents with real legal weight — not automated online forms.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white px-4">
          <div className="max-w-4xl mx-auto">

            {/* Why William */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
              {[
                { stat: "500+", label: "Wills Completed", sub: "For Central Texas individuals and couples" },
                { stat: "Decades", label: "of Experience", sub: "William has been doing estate planning for decades" },
                { stat: "Real", label: "Attorney Review", sub: "An actual attorney reviews your documents — not an algorithm" },
              ].map(item => (
                <div key={item.stat} className="text-center p-6 bg-cream rounded-lg border border-cream-dark/20">
                  <div className="text-3xl font-bold text-forest font-[family-name:var(--font-heading)] mb-1">{item.stat}</div>
                  <div className="font-semibold text-forest/80 text-sm mb-2 font-[family-name:var(--font-body)]">{item.label}</div>
                  <p className="text-forest/50 text-xs font-[family-name:var(--font-body)]">{item.sub}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-forest mb-10 font-[family-name:var(--font-heading)]">Our Legal Expertise Values You</h2>
            <div className="space-y-10">

              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Who Am I?</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)] mb-3">
                  We deliver attorney-drafted documents in a timely fashion. An actual attorney reviews your documents — don&apos;t trust those forms on LegalZoom. Our documents are priced with affordable options available to you, but we&apos;re an actual Legal Office.
                </p>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                  If I can&apos;t satisfy your needs, I won&apos;t stay in business. William has been doing estate planning for decades.
                </p>
              </div>

              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Wills</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)] mb-4">
                  A will is the cornerstone of any estate plan. William prepares wills for individuals and couples, ensuring your wishes are legally documented with proper testator capacity requirements, witness provisions, and self-proving affidavits.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Wills for Individuals", "Wills for Couples", "Self-Proving Affidavits", "Testamentary Trusts"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-forest/60 text-sm font-[family-name:var(--font-body)]">
                      <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Trusts & Powers of Attorney</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)] mb-4">
                  Beyond a will, a complete estate plan protects you and your loved ones during your lifetime and after. William helps establish trusts and powers of attorney tailored to your situation.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Trusts", "Medical Powers of Attorney", "Financial Powers of Attorney", "Advance Directives (Living Wills)"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-forest/60 text-sm font-[family-name:var(--font-body)]">
                      <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Guardianship & Special Needs Planning</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Guardianship for Minor Children", "Trust Arrangements for Incapacitated Adults", "Special Needs Trusts", "Guardianship Proceedings"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-forest/60 text-sm font-[family-name:var(--font-body)]">
                      <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+15122194053" className="flex items-center justify-center gap-2 bg-forest hover:bg-forest-dark text-cream px-6 py-4 rounded text-base font-semibold transition-colors font-[family-name:var(--font-body)]">
                Individuals — Call 512-219-4053
              </a>
              <a href="tel:+15122194053" className="flex items-center justify-center gap-2 border-2 border-forest text-forest hover:bg-forest/5 px-6 py-4 rounded text-base font-semibold transition-all font-[family-name:var(--font-body)]">
                Couples — Schedule a Consultation
              </a>
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
