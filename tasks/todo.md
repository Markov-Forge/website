# Markov Forge website

Single-page Next.js (App Router, TS, Tailwind v4) marketing site for markovforge.com.

- [x] Scaffold Next.js 16 + Tailwind v4 (manual, repo already had .gitignore + logos)
- [x] Brand assets: icon -> app/icon.svg favicon + public/brand, logos -> public/brand, OG image rendered from logo; /logos deleted
- [x] Content model in lib/content.ts derived from the 5 skill clusters in gaping-infinity/website/lib/data.ts
- [x] Sections: Nav, Hero (animated Markov emblem), stack marquee, Services (5 practices), Use cases (problem -> solution explorer),
      Process (state machine), Principles (from real architecture decisions), About/founder, Contact, Footer
- [x] SEO: metadataBase markovforge.com, OG/Twitter image, JSON-LD, sitemap, robots
- [x] Verify: lint, typecheck, production build, visual check in browser (desktop + 390px mobile)

## Review
- Build is fully static (all routes prerendered) — deployable to Vercel or any static/Node host.
- Contact email + LinkedIn/GitHub live in lib/site.ts (currently the founder's personal profiles).
- Scroll-reveal is progressive enhancement: content is visible without JS and with reduced motion.
