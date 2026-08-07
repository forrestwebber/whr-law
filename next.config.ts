import type { NextConfig } from "next";

/*
 * ---------------------------------------------------------------------------
 * LEGACY URL REDIRECTS — added 2026-08-07
 * ---------------------------------------------------------------------------
 * Before this Next.js site, WHR Law ran a funnel-builder/WordPress site with a
 * completely different URL scheme. That old site is gone for good, but its URLs
 * are still live in Google's index, in backlinks, and in people's bookmarks.
 *
 * GA4 (property 534481802, 2026-05-09 -> 2026-08-06) showed ~46 sessions over
 * 90 days whose LANDING page was one of these dead URLs — i.e. ~46 real people
 * hit a 404 as their first impression of the firm.
 *
 * Two families of legacy slug are unmistakable:
 *   - `whrlaw-home<ms>` / `optin<ms>` — funnel-builder pages whose numeric
 *     suffix is a Unix ms timestamp (1653583226145 = May 2022). Matched by
 *     regex so the long tail of variants is covered, not just the 5 that
 *     happened to get traffic in the last 90 days.
 *   - `/YYYY/MM/DD/slug` — WordPress dated permalinks from the old blog.
 *
 * These are PERMANENT (308). The old site is never coming back, and we want
 * Google to transfer signal to the new URLs and drop the old ones.
 *
 * NOTE: `permanent: true` is deliberate here. Do not downgrade to 307 — a
 * temporary redirect would keep the dead URLs in the index indefinitely.
 * ---------------------------------------------------------------------------
 */

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- Tier 1: evidenced by real GA4 landing-page sessions (90d) ---------

      // Funnel-builder home variants: /whrlaw-home1654032931916 (4 sessions),
      // /whrlaw-home1654032872317 (2), /whrlaw-home1653936775228 (1),
      // /whrlaw-home1654026341796 (1). No modern equivalent -> homepage.
      { source: "/:slug(whrlaw-home\\d+)", destination: "/", permanent: true },

      // Funnel opt-in page: /optin1653583226145 (12 sessions — the single
      // biggest source of legacy 404s). Lead-capture page with no modern
      // equivalent; the homepage carries the contact form.
      { source: "/:slug(optin\\d+)", destination: "/#contact", permanent: true },

      // Old WordPress dated permalinks, e.g. /2014/04/16/naples-italy (2).
      // The blog was not carried over -> homepage.
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/",
        permanent: true,
      },

      // Old practice-area slug (7 sessions) -> current practice area page.
      { source: "/familylaw", destination: "/practice-areas/family-law", permanent: true },

      // Old attorney bio page (6 sessions) -> "Meet Your Attorney" section.
      { source: "/attorneyprofile", destination: "/#about", permanent: true },

      // Old contact pages: /contactus (6), /contact (1), /contact-us (1),
      // /consultation (1) -> homepage contact section.
      { source: "/contactus", destination: "/#contact", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/contact-us", destination: "/#contact", permanent: true },
      { source: "/consultation", destination: "/#contact", permanent: true },

      // Old explicit home URL (1 session).
      { source: "/home", destination: "/", permanent: true },

      // Funnel checkout remnant (1 session, arrived as `//checkout`, which
      // Next normalises to `/checkout`). The firm takes no payment online.
      { source: "/checkout", destination: "/", permanent: true },

      // --- Tier 2: defensive, no landing-page sessions -----------------------
      // These appeared in GA4 page_path views only, never as landing pages,
      // with a uniform 1-3 views each — the fingerprint of a crawler probing
      // common paths rather than real legacy traffic. Mapping them anyway is
      // free and means any human who does hit one lands somewhere useful.

      { source: "/about", destination: "/#about", permanent: true },
      { source: "/about-us", destination: "/#about", permanent: true },
      { source: "/team", destination: "/#about", permanent: true },
      { source: "/our-team", destination: "/#about", permanent: true },
      { source: "/staff", destination: "/#about", permanent: true },
      { source: "/people", destination: "/#about", permanent: true },

      { source: "/about/contact", destination: "/#contact", permanent: true },
      { source: "/about-us/contact", destination: "/#contact", permanent: true },
      { source: "/contact.html", destination: "/#contact", permanent: true },
      { source: "/get-in-touch", destination: "/#contact", permanent: true },
      { source: "/reach-us", destination: "/#contact", permanent: true },
      { source: "/reach-out", destination: "/#contact", permanent: true },
      { source: "/connect", destination: "/#contact", permanent: true },
      { source: "/schedule-consultation", destination: "/#contact", permanent: true },
      { source: "/free-consultation", destination: "/#contact", permanent: true },
      { source: "/free-case-evaluation", destination: "/#contact", permanent: true },

      // Parent of the practice-area pages — never existed as its own route.
      { source: "/practice-areas", destination: "/#practice-areas", permanent: true },
    ];
  },
};

export default nextConfig;
