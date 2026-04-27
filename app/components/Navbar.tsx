"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, X, Menu, Printer, ShoppingBag } from "lucide-react";
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
      {/* Topbar — dual channel, tom bem sutil */}
      <div className="hidden lg:block border-b" style={{ background: "#07194a", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1200px] mx-auto px-6 h-9 flex items-center justify-between" style={{ fontSize: 11 }}>

          {/* esquerda — localização e horário */}
          <div className="flex items-center gap-4" style={{ color: "rgba(255,255,255,0.40)" }}>
            <span className="flex items-center gap-1.5">
              <MapPin size={10} aria-hidden="true" />
              Caucaia, CE — Parque Guadalajara
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={10} aria-hidden="true" />
              Seg–Sex 08h–18h · Sáb 08h–12h
            </span>
          </div>

          {/* direita — dois canais */}
          <div className="flex items-center">

            {/* Gráfica */}
            <div className="flex items-center gap-2 pr-4">
              <Printer size={10} style={{ color: "rgba(147,197,253,0.55)" }} aria-hidden="true" />
              <span style={{ color: "rgba(147,197,253,0.65)", fontFamily: "var(--font-mono)", letterSpacing: "0.03em" }}>
                Gráfica &amp; Design
              </span>
              <a href={PHONE_GRAFICA_HREF}
                className="transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-mono)" }}
                aria-label="Ligar para gráfica">
                {PHONE_GRAFICA_DISPLAY}
              </a>
              <a href={WHATSAPP_GRAFICA_URL} target="_blank" rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100"
                style={{ color: "rgba(147,197,253,0.55)" }}
                aria-label="WhatsApp gráfica">
                · WA
              </a>
            </div>

            {/* divisor */}
            <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.10)", display: "block" }} aria-hidden="true" />

            {/* Papelaria */}
            <div className="flex items-center gap-2 pl-4">
              <ShoppingBag size={10} style={{ color: "rgba(110,231,183,0.55)" }} aria-hidden="true" />
              <span style={{ color: "rgba(110,231,183,0.65)", fontFamily: "var(--font-mono)", letterSpacing: "0.03em" }}>
                Papelaria &amp; Geral
              </span>
              <a href={PHONE_PAPELARIA_HREF}
                className="transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-mono)" }}
                aria-label="Ligar para papelaria">
                {PHONE_PAPELARIA_DISPLAY}
              </a>
              <a href={WHATSAPP_PAPELARIA_URL} target="_blank" rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100"
                style={{ color: "rgba(110,231,183,0.55)" }}
                aria-label="WhatsApp papelaria">
                · WA
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Header principal */}
      <header
        className={`sticky top-0 z-[100] transition-all duration-200 ${
          scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.30)]" : "border-b border-white/10"
        }`}
        style={{ background: "#0f2d6b" }}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px] gap-6">

          <Link href="#hero" aria-label="Copygraf — página inicial" className="shrink-0">
            <Image
              src="/logo-copygraf.webp"
              alt="Copygraf Gráfica Digital & Papelaria"
              width={160} height={80}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/65 hover:text-white hover:bg-white/10 transition-all duration-150">
                {label}
              </Link>
            ))}
          </nav>

          {/* CTAs — pills outline, sem peso visual */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a href={WHATSAPP_GRAFICA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(147,197,253,0.35)", color: "rgba(147,197,253,0.85)" }}
              aria-label="WhatsApp Gráfica">
              <Printer size={12} aria-hidden="true" />
              Gráfica
            </a>
            <a href={WHATSAPP_PAPELARIA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(110,231,183,0.35)", color: "rgba(110,231,183,0.85)" }}
              aria-label="WhatsApp Papelaria">
              <ShoppingBag size={12} aria-hidden="true" />
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
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-5"
          style={{ background: "#0f2d6b" }}
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
              className="text-xl font-semibold text-white/80 hover:text-white transition-colors">
              {label}
            </Link>
          ))}

          {/* Mobile — dois canais */}
          <div className="mt-5 flex flex-col gap-3 w-full max-w-[280px]">
            <a href={WHATSAPP_GRAFICA_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}
              className="flex items-center justify-between px-5 py-3.5 rounded-2xl transition-opacity hover:opacity-85"
              style={{ background: "rgba(147,197,253,0.08)", border: "1px solid rgba(147,197,253,0.25)" }}>
              <div className="flex items-center gap-2.5">
                <Printer size={15} style={{ color: "rgba(147,197,253,0.8)" }} aria-hidden="true" />
                <div>
                  <div className="text-xs font-bold" style={{ color: "rgba(147,197,253,0.9)" }}>Gráfica &amp; Design</div>
                  <div className="text-sm font-mono text-white">{PHONE_GRAFICA_DISPLAY}</div>
                </div>
              </div>
              <span className="text-xs font-bold" style={{ color: "rgba(147,197,253,0.6)" }}>WA</span>
            </a>
            <a href={WHATSAPP_PAPELARIA_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}
              className="flex items-center justify-between px-5 py-3.5 rounded-2xl transition-opacity hover:opacity-85"
              style={{ background: "rgba(110,231,183,0.08)", border: "1px solid rgba(110,231,183,0.25)" }}>
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={15} style={{ color: "rgba(110,231,183,0.8)" }} aria-hidden="true" />
                <div>
                  <div className="text-xs font-bold" style={{ color: "rgba(110,231,183,0.9)" }}>Papelaria &amp; Geral</div>
                  <div className="text-sm font-mono text-white">{PHONE_PAPELARIA_DISPLAY}</div>
                </div>
              </div>
              <span className="text-xs font-bold" style={{ color: "rgba(110,231,183,0.6)" }}>WA</span>
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
