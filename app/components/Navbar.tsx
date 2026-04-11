"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL, ADDRESS } from "@/app/lib/constants";

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
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeMenu]);

  return (
    <>
      {/* Topbar */}
      <div
        className="hidden lg:block border-b text-xs"
        style={{ background: "#1a56db", borderColor: "#1145b7" }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 h-9 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-white/80">
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
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              aria-label="Ligar para a Copygraf"
            >
              <Phone size={11} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-white/80 transition-colors"
              aria-label="WhatsApp Copygraf"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={[
          "sticky top-0 z-[100] bg-white transition-all duration-200",
          scrolled
            ? "shadow-[0_2px_16px_rgba(0,0,0,0.09)]"
            : "border-b",
        ].join(" ")}
        style={{ borderColor: "var(--border)" }}
        role="banner"
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-8 h-[72px]">

          <Link href="#hero" aria-label="Copygraf — página inicial" className="shrink-0">
            <Image
              src="/logo-copygraf.png"
              alt="Copygraf Gráfica Digital & Papelaria"
              width={148}
              height={74}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 hover:bg-[var(--blue-lt)] hover:text-[var(--blue)]"
                style={{ color: "var(--text-2)" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--blue)]"
              style={{ color: "var(--text-2)" }}
              aria-label="Ligar para a Copygraf"
            >
              <Phone size={15} strokeWidth={2} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
              style={{ background: "var(--blue)", boxShadow: "0 1px 4px rgba(26,86,219,.3)" }}
              aria-label="Solicitar orçamento via WhatsApp"
            >
              Solicitar Orçamento
            </a>
          </div>

          <button
            className="flex lg:hidden flex-col gap-[5px] p-2 ml-auto rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
          >
            <span className="block w-5 h-[2px] rounded bg-gray-700" />
            <span className="block w-5 h-[2px] rounded bg-gray-700" />
            <span className="block w-5 h-[2px] rounded bg-gray-700" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobileNav"
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-5 bg-white"
          aria-label="Menu mobile"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 text-lg"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ✕
          </button>
          <Image
            src="/logo-copygraf.png"
            alt="Copygraf"
            width={120}
            height={60}
            className="h-10 w-auto object-contain mb-4"
          />
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-xl font-semibold transition-colors hover:text-[var(--blue)]"
              style={{ color: "var(--text)" }}
            >
              {label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--blue)" }}
          >
            Solicitar Orçamento
          </a>
        </nav>
      )}
    </>
  );
}
