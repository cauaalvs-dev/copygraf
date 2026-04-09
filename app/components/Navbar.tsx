"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/app/lib/constants";

const NAV_LINKS = [
  { href: "#servicos",     label: "Serviços" },
  { href: "#processo",     label: "Como Funciona" },
  { href: "#portfolio",    label: "Portfólio" },
  { href: "#depoimentos",  label: "Avaliações" },
  { href: "#faq",          label: "FAQ" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-[100] py-4 transition-all duration-300",
          scrolled
            ? "bg-[rgba(7,9,14,0.9)] backdrop-blur-lg border-b border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
            : "",
        ].join(" ")}
        role="banner"
      >
        <div className="w-full max-w-[1160px] mx-auto px-6 flex items-center justify-between gap-8">
          <Link
            href="#hero"
            className="flex items-center gap-3"
            aria-label="Copygraf — página inicial"
          >
            <div
              className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center text-white shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #00c8f0 0%, #1847f0 50%, #f0005a 100%)",
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
              }}
              aria-hidden="true"
            >
              CG
            </div>
            <span
              style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", letterSpacing: ".07em" }}
              className="text-[var(--text)]"
            >
              COPY<span className="text-[var(--cyan)]">GRAF</span>
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-[3px] left-0 right-0 h-px bg-[var(--cyan)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
            className="hidden md:inline-flex items-center gap-2 px-6 py-[0.75rem] rounded-full font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-[2px] hover:opacity-90 active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #00c8f0 0%, #1847f0 50%, #f0005a 100%)",
              boxShadow: "0 6px 28px rgba(0,200,240,0.22)",
            }}
          >
            Solicitar Orçamento
          </a>

          <button
            className="flex md:hidden flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
          >
            <span className="block w-[22px] h-[2px] bg-[var(--text)] rounded" />
            <span className="block w-[22px] h-[2px] bg-[var(--text)] rounded" />
            <span className="block w-[22px] h-[2px] bg-[var(--text)] rounded" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobileNav"
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-7 bg-[rgba(7,9,14,0.97)] backdrop-blur-2xl"
          aria-label="Menu mobile"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-[var(--muted)] text-xl p-2"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ✕
          </button>

          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="hover:text-[var(--cyan)] transition-colors"
              style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", letterSpacing: ".05em" }}
            >
              {label}
            </Link>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="px-8 py-3 rounded-full font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #25d366, #128c4e)" }}
          >
            WhatsApp
          </a>
        </nav>
      )}
    </>
  );
}
