<div align="center">

<img src="public/logo-copygraf.png" alt="Copygraf" height="80" />

# Copygraf — Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://copygraf.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Landing page profissional para a **Copygraf Gráfica Digital & Papelaria**, localizada em Caucaia, CE.  
Desenvolvida com foco em conversão, agilidade e identidade visual forte.

**[→ Ver site ao vivo](https://copygraf.vercel.app)**

</div>

---

## Sobre o Projeto

A Copygraf é uma gráfica digital em Caucaia, CE, com mais de 20 anos de mercado. Este projeto é a landing page institucional da empresa, desenvolvida para maximizar conversões via WhatsApp e transmitir credibilidade e agilidade ao visitante.

A copy do site foi construída em torno de um posicionamento direto:
> *"Esqueceu? A gente resolve. Gráfica rápida de verdade. Precisou pra hoje? Chama."*

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 14.2 | Framework React com App Router |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 3.4 | Estilização utilitária |
| Lucide React | 0.383 | Ícones |
| Vercel | — | Deploy e CDN |

---

## Funcionalidades

- Hero com parallax CSS nativo e mascote animado
- Seção de serviços com prazo de entrega por categoria
- Portfólio com CTA direto para Instagram
- Avaliações do Google (4.3★ · 338 avaliações)
- FAQ interativo com accordion
- CTA band com avatar personalizado do fundador
- WhatsApp FAB com pulse animation
- Navbar responsiva com menu mobile fullscreen
- Marquee animado de serviços
- Layout totalmente responsivo (mobile-first)

---

## Segurança

Todos os headers de segurança configurados em `next.config.js`:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=63072000
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self' ...
```

Zero formulários, zero API routes, superfície de ataque mínima.  
Veja [SECURITY.md](SECURITY.md) para detalhes.

---

## Estrutura

```
copygraf/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Topbar + header responsivo
│   │   ├── Hero.tsx         # Hero com parallax e mascote
│   │   ├── Services.tsx     # Lista de serviços com prazos
│   │   └── Sections.tsx     # Process, Portfolio, FAQ, CTA, Footer, FAB
│   ├── lib/
│   │   └── constants.ts     # Dados e tipos centralizados
│   ├── globals.css          # Tailwind + animações CSS
│   ├── layout.tsx           # Metadados + fontes
│   └── page.tsx             # Composição da página
├── public/
│   ├── logo-copygraf.png    # Logo sem fundo
│   ├── hero-bg.jpg          # Background do hero
│   ├── avatar-hero.png      # Mascote super-herói
│   └── avatar-owner.png     # Avatar do fundador (CTA band)
├── next.config.js           # Security headers
├── SECURITY.md
└── CHANGELOG.md
```

---

## Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/cauaalvs-dev/copygraf.git
cd copygraf

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Deploy

Deploy automático na Vercel a cada push na branch `main`.

```bash
# Build de produção
npm run build
npm start
```

---

## Contato

**Copygraf Gráfica Digital & Papelaria**  
R. Poebla, 456 — Caucaia, CE  
[(85) 3238-9240](tel:+558532389240) · [Instagram](https://instagram.com/copygrafgraficadigital) · [WhatsApp](https://wa.me/558532389240)

---

<div align="center">
  <sub>Desenvolvido por <a href="https://github.com/cauaalvs-dev">cauaalvs-dev</a> · MIT License</sub>
</div>
