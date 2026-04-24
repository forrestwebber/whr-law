import Link from "next/link";
import { WHRNav } from "../../WHRNav";
import { WHRFooter } from "../../WHRFooter";
import { WHRChatBot } from "../../WHRChatBot";

export default function FamilyLaw() {
  return (
    <main style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
      <WHRNav />

      <div>
        {/* Hero */}
        <section className="bg-forest py-14 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/#practice-areas" className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm mb-6 font-[family-name:var(--font-body)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              Back to Practice Areas
            </Link>
            <span className="text-accent-warm-light text-xs font-semibold tracking-[0.2em] uppercase font-[family-name:var(--font-body)]">WHR Law</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mt-3 mb-5 font-[family-name:var(--font-heading)]">Family Law</h1>
            <p className="text-cream/70 text-lg leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              Divorce, custody, and support handled with both legal precision and genuine compassion. Texas community property law requires an experienced guide — and William has been that guide for Central Texas families for over 37 years.
            </p>
          </div>
        </section>

        {/* Practice Areas List */}
        <section className="py-14 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-forest mb-10 font-[family-name:var(--font-heading)]">Family Law Practice Areas</h2>
            <div className="space-y-10">

              {/* Divorce */}
              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Considering Divorce?</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)] mb-3">
                  Divorce can be a highly challenging area of law due to the complex legal and emotional issues involved. William&apos;s primary goal is to get our clients through the divorce process as efficiently as possible given the particular circumstances of the client.
                </p>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                  William recognizes the importance of negotiation and attempting to settle divorce-related matters whenever possible — avoiding unnecessary conflict while protecting your interests.
                </p>
              </div>

              {/* Community Property */}
              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Understanding Texas Community Property</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                  Texas is a community property state. Any property owned by either spouse during the marriage is considered community property and subject to division. Navigating this correctly requires experienced legal counsel to ensure you receive what you&apos;re entitled to.
                </p>
              </div>

              {/* QDROs */}
              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Retirement Division & QDROs</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)] mb-3">
                  A Qualified Domestic Relations Order (QDRO) informs your former spouse&apos;s employer of the property division and enables them to redirect a portion of retirement benefits to you.
                </p>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                  William has extensive experience protecting retirement assets during divorce and addressing post-divorce issues that arise with QDROs.
                </p>
              </div>

              {/* Separation */}
              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Separation in Texas</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                  Although Texas does not permit legal separation as a substitute for divorce, there are still options available to you. William can advise you on the best path forward for your specific circumstances.
                </p>
              </div>

              {/* Child Custody */}
              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Child Custody & Child Support</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)] mb-3">
                  In general terms, a parent is obligated to provide child support until the child becomes 18 years of age or graduates from high school. The value of family — and the wellbeing of your children — is always the priority.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                  {["Child Custody & Visitation", "Child Support & Modifications", "Modification of Child Custody/Support", "Suit Affecting Child/Parent Relationship"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-forest/60 text-sm font-[family-name:var(--font-body)]">
                      <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Adoption */}
              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Preparing for an Adoption in Texas</h3>
                <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                  Adoption is one of the most meaningful legal proceedings a family can undertake. William guides families through every step of the Texas adoption process with care and efficiency.
                </p>
              </div>

              {/* Other Areas */}
              <div className="border-l-4 border-accent-warm pl-6">
                <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Additional Family Law Services</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Grandparent's Rights", "Enforcement of Orders", "Domestic Violence", "LGBTQ+ Family Law"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-forest/60 text-sm font-[family-name:var(--font-body)]">
                      <svg className="w-3.5 h-3.5 text-accent-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-forest/70 text-sm mt-4 font-[family-name:var(--font-body)]">
                  The Law Office of William H. Russell has extensive experience serving the LGBTQ+ community and protecting their rights in all family law matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest py-14 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">Ready to Discuss Your Case?</h2>
            <p className="text-cream/70 mb-8 font-[family-name:var(--font-body)]">Free consultation. Serving Georgetown, Austin, and all of Williamson and Travis counties.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15122194053" className="inline-flex items-center justify-center gap-2 bg-accent-warm hover:bg-accent-warm-dark text-cream px-8 py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]">
                Call 512-219-4053
              </a>
              <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-cream/30 text-cream hover:border-accent-warm-light px-8 py-4 rounded text-lg font-semibold transition-all font-[family-name:var(--font-body)]">
                Schedule Free Consultation
              </Link>
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
