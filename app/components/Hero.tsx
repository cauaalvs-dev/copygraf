"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/app/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>(".r");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = "1"; io.unobserve(e.target); }
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
      className="relative border-b border-white/10"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-parallax="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg,rgba(15,50,120,0.98) 0%,rgba(15,50,120,0.95) 50%,rgba(15,50,120,0.75) 75%,rgba(15,50,120,0.2) 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--blue)]" aria-hidden="true" />

      {/* ── MOBILE layout ── */}
      <div className="relative lg:hidden px-5 pt-8 pb-8">
        <p className="text-[10px] font-semibold uppercase tracking-wider mb-3 r anim-fade-up"
          style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}>
          Gráfica Digital & Papelaria · Caucaia, CE
        </p>
        <h1 className="font-extrabold leading-[1.1] tracking-tight mb-3 r anim-slide-left"
          style={{ fontSize: "clamp(1.75rem,7vw,2.5rem)", color: "var(--text)" }}>
          Precisou pra hoje?<br />
          <span style={{ color: "#7dd3fc" }}>A gente entrega.</span>
        </h1>
        <p className="text-sm leading-relaxed mb-5 r anim-fade-up anim-delay-1"
          style={{ color: "rgba(255,255,255,0.7)" }}>
          Gráfica rápida de verdade. Esqueceu? A gente resolve.
        </p>

        {/* Trust strip — one line forced */}
        <div className="flex items-center gap-3 mb-5 r anim-fade-up anim-delay-2" style={{ flexWrap: "nowrap" }}>
          {["Desde 2004", "Expressa", "Instalação"].map((item, i) => (
            <span key={item} className="flex items-center gap-1 text-[11px] font-medium"
              style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>
              {i > 0 && <span className="opacity-30" aria-hidden="true">·</span>}
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 r anim-fade-up anim-delay-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white"
            style={{ background: "#fff", color: "#1a56db" }}>
            Orçamento Grátis <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <a href={PHONE_HREF} aria-label="Ligar"
            className="inline-flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold border"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff", background: "rgba(255,255,255,0.1)" }}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="relative hidden lg:block max-w-[1200px] mx-auto px-6 pt-14 pb-16">
        <div className="grid grid-cols-[1fr_360px] gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-4 r anim-fade-up"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-mono)" }}>
              Gráfica Digital & Papelaria · Caucaia, CE
            </p>
            <h1 className="font-extrabold leading-[1.08] tracking-tight mb-5 r anim-slide-left"
              style={{ fontSize: "clamp(2.5rem,4vw,4rem)", color: "var(--text)" }}>
              Fachada, banner,<br />uniforme, papelaria.<br />
              <span style={{ color: "#7dd3fc" }}>Tudo aqui.</span>
            </h1>
            <p className="leading-relaxed mb-7 r anim-fade-up anim-delay-1"
              style={{ fontSize: "1rem", color: "var(--muted)", maxWidth: 480 }}>
              Fachada, banner, uniforme, papelaria.
              Em Caucaia há 20 anos — rápido, fiel e sem enrolação.
            </p>
            <div className="flex gap-3 mb-7 r anim-fade-up anim-delay-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                aria-label="Orçamento via WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{ background: "#fff", color: "#1a56db", boxShadow: "0 4px 16px rgba(0,0,0,.2)" }}>
                Orçamento Grátis <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a href={PHONE_HREF} aria-label="Ligar"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff", background: "rgba(255,255,255,0.1)" }}>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-4 r anim-fade-up anim-delay-3">
              {["Desde 2004", "Entrega expressa", "Mesmo dia disponível"].map((item, i) => (
                <span key={item} className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                  style={{ color: "rgba(255,255,255,0.7)" }}>
                  {i > 0 && <span className="opacity-30 mr-0.5" aria-hidden="true">·</span>}
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="r anim-fade-up anim-delay-1">
            <div className="rounded-2xl p-7"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 8px 40px rgba(0,0,0,.2)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}>Fale agora</p>
              <h2 className="font-bold text-xl mb-5" style={{ color: "#fff" }}>Solicite seu orçamento</h2>
              <div className="flex flex-col gap-3 mb-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#25d366,#128c4e)" }}>
                  <span>WhatsApp</span>
                  <span className="text-xs font-normal opacity-80">Resposta rápida</span>
                </a>
                <a href={PHONE_HREF} aria-label="Ligar"
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-semibold border hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff", background: "rgba(255,255,255,0.1)" }}>
                  <span>{PHONE_DISPLAY}</span>
                  <span className="text-xs font-normal" style={{ color: "rgba(255,255,255,0.7)" }}>Ligar</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} role="list">
                {[{ n: "338", l: "Avaliações" }, { n: "4.3★", l: "Google" }, { n: "24h", l: "Orçamento" }].map(({ n, l }) => (
                  <div key={l} role="listitem" className="text-center rounded-xl p-2.5" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="font-extrabold text-base" style={{ color: "#fff", fontWeight: 800 }}>{n}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>{l}</div>
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
