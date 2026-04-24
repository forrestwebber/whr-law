import Link from "next/link";
import { WHRNav } from "../../WHRNav";
import { WHRFooter } from "../../WHRFooter";
import { WHRChatBot } from "../../WHRChatBot";

export default function Probate() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-cream mt-3 mb-5 font-[family-name:var(--font-heading)]">Probate</h1>
            <p className="text-cream/70 text-lg leading-relaxed font-[family-name:var(--font-body)] max-w-2xl">
              Guiding Central Texas families through the estate administration process with care and efficiency. William handles probate in both Williamson and Travis counties.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white px-4">
          <div className="max-w-4xl mx-auto space-y-10">

            <div className="border-l-4 border-accent-warm pl-6">
              <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">What Is Probate?</h3>
              <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                Probate is the court-supervised process of administering a deceased person&apos;s estate — validating the will, paying debts, and distributing assets to heirs. Texas offers several probate pathways depending on the size and complexity of the estate. William helps families choose the most efficient route.
              </p>
            </div>

            <div className="border-l-4 border-accent-warm pl-6">
              <h3 className="text-xl font-bold text-forest mb-4 font-[family-name:var(--font-heading)]">Probate Services</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: "Independent Administration", desc: "The most common Texas probate — minimal court supervision, faster and less expensive" },
                  { name: "Dependent Administration", desc: "Court-supervised administration for complex or contested estates" },
                  { name: "Muniment of Title", desc: "A simplified process when there are no debts and property just needs to be transferred" },
                  { name: "Small Estates Affidavit", desc: "For small estates that qualify under Texas law — avoids full probate" },
                  { name: "Heirship Hearings", desc: "When there is no will, a court determines who the legal heirs are" },
                  { name: "Affidavit of Heirship", desc: "A simpler alternative to heirship hearings for real property transfers" },
                  { name: "Executor Guidance & Creditor Notification", desc: "William guides executors through their duties and legal obligations" },
                  { name: "Inventory & Appraisement", desc: "Identifying, listing, and valuing estate assets for the court" },
                ].map(item => (
                  <li key={item.name} className="bg-cream rounded-lg p-4 border border-cream-dark/20">
                    <p className="font-semibold text-forest text-sm mb-1 font-[family-name:var(--font-body)]">{item.name}</p>
                    <p className="text-forest/50 text-xs font-[family-name:var(--font-body)]">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-accent-warm pl-6">
              <h3 className="text-xl font-bold text-forest mb-3 font-[family-name:var(--font-heading)]">Serving Williamson & Travis Counties</h3>
              <p className="text-forest/70 leading-relaxed font-[family-name:var(--font-body)]">
                William has decades of experience handling probate in the courts of Williamson County (Georgetown) and Travis County (Austin). His deep familiarity with local court procedures means your estate moves efficiently through the system.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-forest py-14 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-4 font-[family-name:var(--font-heading)]">Let Us Guide Your Family Through Probate</h2>
            <p className="text-cream/70 mb-8 font-[family-name:var(--font-body)]">Free consultation. Serving Georgetown, Austin, and all of Central Texas.</p>
            <a href="tel:+15122194053" className="inline-flex items-center justify-center gap-2 bg-accent-warm hover:bg-accent-warm-dark text-cream px-8 py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]">
              Call 512-219-4053
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
