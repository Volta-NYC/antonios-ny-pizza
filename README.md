# Antonio's Pizza — Website

A modern redesign of the website for **Antonio's Pizza**, an electrifying
pizza place in Brooklyn, NY (318 Flatbush Ave).

Rebuilt from scraped source material (`raw messy data/`) into a fast,
responsive, accessible Next.js site.

## Tech Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- `next/font` (Fraunces + Hanken Grotesk)
- Fully static — all routes prerendered

## Project Structure

```
src/
  app/
    layout.tsx        Root layout, fonts, metadata, JSON-LD
    page.tsx          Home (hero, story, values, gallery, visit)
    about/            Our Story
    gallery/          Food gallery with lightbox
    visit/            Hours, address, map
    sitemap.ts        SEO sitemap
    robots.ts         SEO robots
  lib/
    site.ts           Single source of truth for all business content
    components/       Navbar, Footer, Marquee, Reveal, PageHeader, Lightbox
public/images/        Local, deduplicated, optimized media (was on a CDN)
```

## Content & Data

All factual content (name, address, phone, hours, "Our Story" copy) lives in
`src/lib/site.ts`, extracted verbatim from the scraped source page. No prices
or menu items were invented — the source contained none.

## Media

All images were downloaded from the original Squarespace CDN, deduplicated
(three exact duplicates removed), and stored locally as WebP under
`public/images/`. The site runs independently of the original host.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

Website made by [@VoltaNYC](https://nyc.voltanpo.org).
