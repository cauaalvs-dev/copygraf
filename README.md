[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/github/license/cauaalvs-dev/copygraf?style=for-the-badge&color=orange)](LICENSE)
[![Vercel Deploy](https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel)](https://copygraf.vercel.app/)

# Copygraf

Landing page developed for Copygraf Gráfica Digital & Papelaria, a print and visual communication company based in Caucaia, CE — operating since 2004. Built with a focus on conversion, accessibility and performance.

🔗 **Live:** [copygraf.vercel.app](https://copygraf.vercel.app/)

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/) — strict mode
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — icon library
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Bebas Neue, DM Sans, JetBrains Mono

---

## Features

- Fully responsive layout — mobile-first
- Security headers via `next.config.ts` (CSP, HSTS, X-Frame-Options, nosniff)
- Accessible components — skip link, ARIA attributes, keyboard navigation
- Typed data layer — all content defined in `lib/constants.ts`
- Smooth scroll, FAQ accordion, animated hero ring, CMYK marquee
- WhatsApp FAB with direct quote link

---

## Getting started

```bash
git clone https://github.com/cauaalvs-dev/copygraf.git
cd copygraf
npm install
npm run dev
```

Access: `http://localhost:3000`

---

## Project structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── Faq.tsx
│   └── Shared.tsx       # Marquee, CtaBand, Footer, WhatsAppFab
├── lib/
│   └── constants.ts     # All typed data: services, steps, testimonials, FAQ
├── globals.css
├── layout.tsx
└── page.tsx
```

---

## Deploy

Configured for automatic deployment on [Vercel](https://vercel.com). Any push to `main` triggers a new production build.

---

## Contact

**Copygraf Gráfica Digital & Papelaria**
R. Poebla, 456 — Caucaia, CE · (85) 3238-9240
[instagram.com/copygrafgraficadigital](https://www.instagram.com/copygrafgraficadigital/)

---

Developed by [cauaalvs-dev](https://github.com/cauaalvs-dev)
