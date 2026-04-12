"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/app/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);

  /* Parallax — background moves at 40% of scroll speed */
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = -rect.top * 0.4;
      bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Reveal animations */
  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".opacity-0-init");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="Apresentação"
      className="relative border-b border-[var(--border)] overflow-hidden"
      style={{ minHeight: 520 }}
    >
      {/* Parallax background — slightly oversized to allow movement */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          top: "-10%",
          bottom: "-10%",
          transition: "transform 0.05s linear",
        }}
        aria-hidden="true"
      />

      {/* Ken Burns subtle zoom-in on load */}
      <style>{`
        @keyframes kenburns {
          from { transform: translate3d(0, 0, 0) scale(1.06); }
          to   { transform: translate3d(0, 0, 0) scale(1); }
        }
        .hero-bg-anim { animation: kenburns 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      `}</style>
      <div
        className="absolute inset-x-0 bg-cover bg-center bg-no-repeat hero-bg-anim"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          top: "-10%",
          bottom: "-10%",
        }}
        aria-hidden="true"
      />

      {/* Overlay — heavy white left, opens right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 38%, rgba(255,255,255,0.45) 62%, rgba(255,255,255,0.05) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Blue top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--blue)]" aria-hidden="true" />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4 opacity-0-init anim-fade-up"
              style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}
            >
              Gráfica Digital & Papelaria · Caucaia, CE
            </p>

            <h1
              className="font-extrabold leading-[1.08] tracking-tight mb-5 opacity-0-init anim-slide-left"
              style={{ fontSize: "clamp(2rem, 8vw, 4rem)", color: "var(--text)" }}
            >
              Fachada, banner,<br />
              uniforme, papelaria.<br />
              <span style={{ color: "var(--blue)" }}>Tudo aqui.</span>
            </h1>

            <p
              className="leading-relaxed mb-7 opacity-0-init anim-fade-up anim-delay-1"
              style={{ fontSize: "1rem", color: "var(--muted)", maxWidth: 480 }}
            >
              Em Caucaia há 20 anos. Do cartão de visita à fachada completa —
              prazo respeitado e qualidade que você vê na entrega.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7 opacity-0-init anim-fade-up anim-delay-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento gratuito via WhatsApp"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: "var(--blue)", boxShadow: "0 4px 16px rgba(26,86,219,.28)" }}
              >
                Orçamento Grátis
                <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a
                href={PHONE_HREF}
                aria-label="Ligar para a Copygraf"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--blue)] hover:text-[var(--blue)]"
                style={{ borderColor: "var(--border)", color: "var(--text)", background: "rgba(255,255,255,0.85)" }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 opacity-0-init anim-fade-up anim-delay-3">
              {["Desde 2004", "Entrega expressa", "Instalação inclusa"].map((item, i) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                  style={{ color: "var(--muted)" }}
                >
                  {i > 0 && <span className="opacity-30 mr-0.5" aria-hidden="true">·</span>}
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — contact card */}
          <div className="opacity-0-init anim-fade-up anim-delay-1">
            <div
              className="rounded-2xl border bg-white p-6 sm:p-7"
              style={{ borderColor: "var(--border)", boxShadow: "0 8px 40px rgba(0,0,0,.12)" }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}
              >
                Fale agora
              </p>
              <h2 className="font-bold text-lg sm:text-xl mb-5" style={{ color: "var(--text)" }}>
                Solicite seu orçamento
              </h2>

              <div className="flex flex-col gap-3 mb-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Orçamento via WhatsApp"
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#25d366,#128c4e)" }}
                >
                  <span>WhatsApp</span>
                  <span className="text-xs font-normal opacity-80">Resposta rápida</span>
                </a>
                <a
                  href={PHONE_HREF}
                  aria-label="Ligar para a Copygraf"
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--blue)] hover:text-[var(--blue)]"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                >
                  <span>{PHONE_DISPLAY}</span>
                  <span className="text-xs font-normal" style={{ color: "var(--muted)" }}>Ligar</span>
                </a>
              </div>

              <div
                className="grid grid-cols-3 gap-2 pt-5"
                style={{ borderTop: "1px solid var(--border)" }}
                role="list"
              >
                {[{ n: "338", l: "Avaliações" }, { n: "4.3★", l: "Google" }, { n: "24h", l: "Orçamento" }].map(({ n, l }) => (
                  <div
                    key={l}
                    role="listitem"
                    className="text-center rounded-xl p-2.5"
                    style={{ background: "var(--bg)" }}
                  >
                    <div className="font-extrabold text-sm sm:text-base" style={{ color: "var(--blue)" }}>{n}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
