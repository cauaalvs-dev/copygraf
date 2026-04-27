"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, X, Menu, Printer, ShoppingBag } from "lucide-react";
import {
  PHONE_GRAFICA_HREF, PHONE_GRAFICA_DISPLAY, WHATSAPP_GRAFICA_URL,
  PHONE_PAPELARIA_HREF, PHONE_PAPELARIA_DISPLAY, WHATSAPP_PAPELARIA_URL,
} from "@/app/lib/constants";

const NAV_LINKS = [
  { href: "#servicos",    label: "Serviços" },
  { href: "#processo",    label: "Como Funciona" },
  { href: "#portfolio",   label: "Portfólio" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#faq",         label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [closeMenu]);

  return (
    <>
      {/* Topbar — dual channel */}
      <div className="hidden lg:block bg-[#091d4f] border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 h-10 flex items-center justify-between text-xs">

          {/* left — info */}
          <div className="flex items-center gap-5 text-blue-200/70">
            <span className="flex items-center gap-1.5">
              <MapPin size={11} aria-hidden="true" />
              Caucaia, CE — Parque Guadalajara
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} aria-hidden="true" />
              Seg–Sex 08h–18h · Sáb 08h–12h
            </span>
          </div>

          {/* right — dois canais */}
          <div className="flex items-center divide-x divide-white/10">

            {/* Gráfica */}
            <div className="flex items-center gap-3 pr-5">
              <span className="flex items-center gap-1 font-semibold tracking-wide" style={{ color: "#6ea0ff", fontFamily: "var(--font-mono)" }}>
                <Printer size={11} aria-hidden="true" />
                Gráfica &amp; Design
              </span>
              <a href={PHONE_GRAFICA_HREF}
                className="flex items-center gap-1 font-mono font-semibold text-white hover:text-blue-200 transition-colors"
                aria-label="Ligar para gráfica">
                <Phone size={10} aria-hidden="true" />
                {PHONE_GRAFICA_DISPLAY}
              </a>
              <a href={WHATSAPP_GRAFICA_URL} target="_blank" rel="noopener noreferrer"
                className="px-2.5 py-0.5 rounded-md text-[11px] font-bold transition-colors hover:opacity-80"
                style={{ background: "rgba(26,86,219,0.25)", color: "#93c5fd", border: "1px solid rgba(26,86,219,0.35)" }}
                aria-label="WhatsApp gráfica">
                WA
              </a>
            </div>

            {/* Papelaria */}
            <div className="flex items-center gap-3 pl-5">
              <span className="flex items-center gap-1 font-semibold tracking-wide" style={{ color: "#34d399", fontFamily: "var(--font-mono)" }}>
                <ShoppingBag size={11} aria-hidden="true" />
                Papelaria &amp; Geral
              </span>
              <a href={PHONE_PAPELARIA_HREF}
                className="flex items-center gap-1 font-mono font-semibold text-white hover:text-green-200 transition-colors"
                aria-label="Ligar para papelaria">
                <Phone size={10} aria-hidden="true" />
                {PHONE_PAPELARIA_DISPLAY}
              </a>
              <a href={WHATSAPP_PAPELARIA_URL} target="_blank" rel="noopener noreferrer"
                className="px-2.5 py-0.5 rounded-md text-[11px] font-bold transition-colors hover:opacity-80"
                style={{ background: "rgba(5,150,105,0.25)", color: "#6ee7b7", border: "1px solid rgba(5,150,105,0.35)" }}
                aria-label="WhatsApp papelaria">
                WA
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-[100] bg-[#0f2d6b] transition-all duration-200 ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.25)]" : "border-b border-[rgba(255,255,255,0.12)]"
        }`}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px] gap-6">
          <Link href="#hero" aria-label="Copygraf — página inicial" className="shrink-0">
            <Image
              src="/logo-copygraf.webp"
              alt="Copygraf Gráfica Digital & Papelaria"
              width={160}
              height={80}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-150">
                {label}
              </Link>
            ))}
          </nav>

          {/* Header CTAs — dois botões distintos */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a href={WHATSAPP_GRAFICA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:opacity-85"
              style={{ background: "rgba(26,86,219,0.20)", color: "#93c5fd", border: "1px solid rgba(26,86,219,0.30)" }}
              aria-label="WhatsApp Gráfica">
              <Printer size={13} aria-hidden="true" />
              Gráfica
            </a>
            <a href={WHATSAPP_PAPELARIA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:opacity-85"
              style={{ background: "rgba(5,150,105,0.20)", color: "#6ee7b7", border: "1px solid rgba(5,150,105,0.30)" }}
              aria-label="WhatsApp Papelaria">
              <ShoppingBag size={13} aria-hidden="true" />
              Papelaria
            </a>
          </div>

          <button
            className="flex lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors ml-auto text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu" aria-expanded={menuOpen} aria-controls="mobileNav"
          >
            <Menu size={22} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      {menuOpen && (
        <nav id="mobileNav"
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-5 bg-[#0f2d6b]"
          aria-label="Menu mobile" role="dialog" aria-modal="true"
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white"
            onClick={closeMenu} aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
          <Image src="/logo-copygraf.webp" alt="Copygraf" width={140} height={70}
            className="h-12 w-auto object-contain mb-2" />

          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu}
              className="text-xl font-semibold text-white hover:text-white/80 transition-colors">
              {label}
            </Link>
          ))}

          {/* Mobile — dois botões de canal */}
          <div className="mt-4 flex flex-col gap-3 w-full max-w-[260px]">
            <a href={WHATSAPP_GRAFICA_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              style={{ background: "rgba(26,86,219,0.25)", color: "#93c5fd", border: "1px solid rgba(26,86,219,0.4)" }}>
              <Printer size={15} aria-hidden="true" />
              Gráfica &amp; Design · {PHONE_GRAFICA_DISPLAY}
            </a>
            <a href={WHATSAPP_PAPELARIA_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              style={{ background: "rgba(5,150,105,0.25)", color: "#6ee7b7", border: "1px solid rgba(5,150,105,0.4)" }}>
              <ShoppingBag size={15} aria-hidden="true" />
              Papelaria &amp; Geral · {PHONE_PAPELARIA_DISPLAY}
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
