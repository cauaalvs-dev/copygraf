"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Star } from "lucide-react";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/app/lib/constants";

const STATS = [
  { value: "4.3★", label: "338 avaliações Google" },
  { value: "+20 anos", label: "em Caucaia, CE" },
  { value: "24h", label: "para orçamento" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".opacity-0-init");
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
      ref={ref}
      aria-label="Apresentação"
      className="relative bg-white border-b border-[var(--border)]"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--blue)]" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "linear-gradient(#1a56db 1px,transparent 1px),linear-gradient(90deg,#1a56db 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-14 pb-16">

        {/* Stats strip */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mb-12 pb-8 border-b border-[var(--border)] opacity-0-init anim-fade-up">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="font-extrabold text-xl" style={{ color: "var(--blue)" }}>{value}</span>
              <span className="text-sm" style={{ color: "var(--muted)" }}>{label}</span>
            </div>
          ))}
          <div className="hidden sm:flex items-center gap-1">
            {[1,2,3,4].map(i => <Star key={i} size={13} fill="#f59e0b" stroke="none" aria-hidden="true" />)}
            <Star size={13} fill="none" stroke="#f59e0b" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs ml-1.5" style={{ color: "var(--muted)" }}>Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5 opacity-0-init anim-fade-up"
              style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}>
              Gráfica Digital & Papelaria · Caucaia, CE
            </p>

            <h1 className="font-extrabold leading-[1.06] tracking-tight mb-6 opacity-0-init anim-slide-left"
              style={{ fontSize: "clamp(2.6rem,5vw,4rem)", color: "var(--text)" }}>
              Fachada, banner,<br />
              uniforme, papelaria.<br />
              <span style={{ color: "var(--blue)" }}>Tudo aqui.</span>
            </h1>

            <p className="leading-relaxed mb-8 opacity-0-init anim-fade-up anim-delay-1"
              style={{ fontSize: "1.05rem", color: "var(--muted)", maxWidth: 480 }}>
              Em Caucaia há 20 anos. Atendemos do cartão de visita à fachada completa —
              com prazo respeitado e qualidade que você vê na entrega.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 opacity-0-init anim-fade-up anim-delay-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                aria-label="Solicitar orçamento gratuito via WhatsApp"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--blue)", boxShadow: "0 4px 16px rgba(26,86,219,.28)" }}>
                Orçamento Grátis — resposta em 24h
                <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a href={PHONE_HREF} aria-label="Ligar para a Copygraf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--blue)] hover:text-[var(--blue)]"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-wrap gap-5 opacity-0-init anim-fade-up anim-delay-3">
              {["Desde 2004", "Entrega expressa disponível", "Instalação com equipe própria"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--muted)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="opacity-0-init anim-slide-right anim-delay-1">
            <div className="rounded-2xl border bg-white p-7"
              style={{ borderColor: "var(--border)", boxShadow: "0 4px 32px rgba(0,0,0,.07)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}>
                Fale agora
              </p>
              <h2 className="font-bold text-xl mb-6" style={{ color: "var(--text)" }}>
                Solicite seu orçamento
              </h2>

              <div className="flex flex-col gap-3 mb-7">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="Orçamento via WhatsApp"
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#25d366,#128c4e)" }}>
                  <span>WhatsApp</span>
                  <span className="text-xs font-normal opacity-80">Resposta rápida</span>
                </a>
                <a href={PHONE_HREF} aria-label="Ligar para a Copygraf"
                  className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--blue)] hover:text-[var(--blue)]"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                  <span>{PHONE_DISPLAY}</span>
                  <span className="text-xs font-normal" style={{ color: "var(--muted)" }}>Ligar</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6" style={{ borderTop: "1px solid var(--border)" }} role="list">
                {[{ n: "338", l: "Avaliações" }, { n: "4.3★", l: "Google" }, { n: "24h", l: "Orçamento" }].map(({ n, l }) => (
                  <div key={l} role="listitem" className="text-center rounded-xl p-3" style={{ background: "var(--bg)" }}>
                    <div className="font-extrabold text-base" style={{ color: "var(--blue)" }}>{n}</div>
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
