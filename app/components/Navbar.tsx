"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, X, Menu } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/app/lib/constants";

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
      {/* Topbar */}
      <div className="hidden lg:block bg-[var(--blue)] border-b border-blue-700">
        <div className="max-w-[1200px] mx-auto px-6 h-9 flex items-center justify-between text-xs text-blue-100">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin size={11} aria-hidden="true" />
              Caucaia, CE — Parque Guadalajara (Jurema)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} aria-hidden="true" />
              Seg–Sex 08h–18h · Sáb 08h–12h
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 hover:text-white transition-colors" aria-label="Ligar">
              <Phone size={11} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="font-semibold text-green-300 hover:text-green-200 transition-colors"
              aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-[100] bg-white transition-all duration-200 ${
          scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.10)]" : "border-b border-[var(--border)]"
        }`}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px] gap-6">
          <Link href="#hero" aria-label="Copygraf — página inicial" className="shrink-0">
            <Image
              src="/logo-copygraf.png"
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
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--blue)] hover:bg-[var(--blue-lt)] transition-all duration-150">
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold text-[var(--text)] hover:text-[var(--blue)] transition-colors"
              aria-label="Ligar">
              <Phone size={15} strokeWidth={2} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[var(--blue)] hover:bg-[var(--blue-dk)] transition-colors shadow-sm"
              aria-label="Solicitar orçamento">
              Solicitar Orçamento
            </a>
          </div>

          <button
            className="flex lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ml-auto"
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
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-5 bg-white"
          aria-label="Menu mobile" role="dialog" aria-modal="true"
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            onClick={closeMenu} aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
          <Image src="/logo-copygraf.png" alt="Copygraf" width={140} height={70}
            className="h-12 w-auto object-contain mb-4" />
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu}
              className="text-xl font-semibold text-[var(--text)] hover:text-[var(--blue)] transition-colors">
              {label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}
            className="mt-4 px-8 py-3 rounded-lg font-semibold text-white bg-[var(--blue)] hover:bg-[var(--blue-dk)] transition-colors">
            Solicitar Orçamento
          </a>
        </nav>
      )}
    </>
  );
}
