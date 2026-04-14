<div align="center">

<img src="public/logo-copygraf.png" alt="Copygraf" height="80" />

# Copygraf — Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://copygraf.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[![Performance](https://img.shields.io/badge/Lighthouse-Performance%2095-brightgreen?style=flat-square&logo=lighthouse)](https://copygraf.vercel.app)
[![Accessibility](https://img.shields.io/badge/Lighthouse-Accessibility%2093-green?style=flat-square&logo=lighthouse)](https://copygraf.vercel.app)
[![Best Practices](https://img.shields.io/badge/Lighthouse-Best%20Practices%20100-brightgreen?style=flat-square&logo=lighthouse)](https://copygraf.vercel.app)
[![SEO](https://img.shields.io/badge/Lighthouse-SEO%20100-brightgreen?style=flat-square&logo=lighthouse)](https://copygraf.vercel.app)

Professional landing page for **Copygraf Gráfica Digital & Papelaria**, a print shop based in Caucaia, CE — Brazil.  
Built for conversion, speed, and strong brand identity.

**[→ Live Site](https://copygraf.vercel.app)**

</div>

---

## About

Copygraf is a digital print shop in Caucaia, CE, with over 20 years in the market. This project is their institutional landing page, designed to maximize WhatsApp conversions and communicate speed and reliability to every visitor.

The copy is built around a direct positioning:
> *"Forgot something? We handle it. Fast printing for real. Need it today? Hit us up."*

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14.2 | React framework with App Router |
| TypeScript | 5 | Static typing |
| Tailwind CSS | 3.4 | Utility-first styling |
| Lucide React | 0.383 | Icons |
| Vercel | — | Deploy and CDN |

---

## Features

- Hero section with native CSS parallax and custom mascot
- Services list with estimated delivery time per category
- Portfolio section with direct CTA to Instagram
- Google Reviews display (4.3★ · 338 reviews)
- Interactive FAQ accordion
- CTA band with founder's custom avatar
- WhatsApp FAB with pulse animation
- Responsive navbar with fullscreen mobile menu
- Animated services marquee
- Fully responsive layout (mobile-first)

---

## Security

All security headers configured in `next.config.js`:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=63072000
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self' ...
```

Zero forms, zero API routes, minimal attack surface.  
See [SECURITY.md](SECURITY.md) for details.

---

## Project Structure

```
copygraf/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Topbar + responsive header
│   │   ├── Hero.tsx         # Hero with parallax and mascot
│   │   ├── Services.tsx     # Services list with delivery times
│   │   └── Sections.tsx     # Process, Portfolio, FAQ, CTA, Footer, FAB
│   ├── lib/
│   │   └── constants.ts     # Centralized data and types
│   ├── globals.css          # Tailwind + CSS animations
│   ├── layout.tsx           # Metadata + fonts
│   └── page.tsx             # Page composition
├── public/
│   ├── logo-copygraf.png    # Logo without background
│   ├── hero-bg.jpg          # Hero background image
│   ├── avatar-hero.png      # Superhero mascot
│   └── avatar-owner.png     # Founder avatar (CTA band)
├── next.config.js           # Security headers
├── SECURITY.md
└── CHANGELOG.md
```

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/cauaalvs-dev/copygraf.git
cd copygraf

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy

Auto-deploy on Vercel on every push to `main`.

```bash
# Production build
npm run build
npm start
```

---

## Contact

**Copygraf Gráfica Digital & Papelaria**  
R. Poebla, 456 — Caucaia, CE, Brazil  
[(85) 3238-9240](tel:+558532389240) · [Instagram](https://instagram.com/copygrafgraficadigital) · [WhatsApp](https://wa.me/558532389240)

---

<div align="center">
  <sub>Built by <a href="https://github.com/cauaalvs-dev">cauaalvs-dev</a> · MIT License</sub>
</div>
