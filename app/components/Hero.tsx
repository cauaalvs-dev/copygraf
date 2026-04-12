"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, Zap, Award, Clock } from "lucide-react";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/app/lib/constants";

const SERVICES_LIST = [
  "Fachadas em ACM",
  "Letras Caixa com LED",
  "Impressão UV",
  "Banners & Lonas",
  "Uniformes Corporativos",
  "Papelaria Completa",
];

const BADGES = [
  { icon: Zap,   text: "Entrega Expressa" },
  { icon: Award, text: "+20 Anos de Mercado" },
  { icon: Clock, text: "Orçamento em 24h" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".opacity-0-init");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Apresentação"
      className="relative bg-white border-b border-[var(--border)] overflow-hidden"
    >
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #1a56db, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)", transform: "translate(-30%, 30%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#1a56db 1px, transparent 1px), linear-gradient(90deg, #1a56db 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
        {/* Top badges */}
        <div className="flex flex-wrap gap-3 mb-10 opacity-0-init anim-fade-up">
          {BADGES.map(({ icon: Icon, text }) => (
            <div key={text}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] text-xs font-semibold text-[var(--muted)]">
              <Icon size={13} className="text-[var(--blue)]" aria-hidden="true" />
              {text}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <div className="opacity-0-init anim-slide-left">
              <div className="section-label mb-4">Caucaia, CE · Desde 2004</div>
              <h1 className="font-extrabold leading-[1.08] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text)" }}>
                Sua marca impressa<br />
                <span className="text-gradient">com quem entende.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8 max-w-[500px]" style={{ color: "var(--muted)" }}>
                Da fachada à papelaria — comunicação visual profissional
                com precisão técnica, prazos respeitados e
                <strong className="text-[var(--text)] font-semibold"> qualidade premium</strong>.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10 opacity-0-init anim-slide-left anim-delay-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                aria-label="Solicitar orçamento gratuito via WhatsApp"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[var(--blue)] hover:bg-[var(--blue-dk)] transition-all duration-150 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0">
                Solicitar Orçamento Grátis
                <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a href={PHONE_HREF}
                aria-label="Ligar para a Copygraf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-[var(--border)] text-[var(--text)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all duration-150">
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-[var(--border)] opacity-0-init anim-fade-up anim-delay-3"
              role="list">
              {[
                { value: "+20",    label: "Anos de mercado" },
                { value: "4.3★",  label: "338 avaliações Google" },
                { value: "100%",   label: "Projetos entregues" },
              ].map(({ value, label }) => (
                <div key={label} role="listitem">
                  <div className="text-2xl font-extrabold text-gradient">{value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — service card */}
          <div className="opacity-0-init anim-slide-right anim-delay-1">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-7 shadow-xl shadow-slate-100">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="section-label mb-1">O que fazemos</div>
                  <h2 className="font-bold text-lg text-[var(--text)]">
                    Comunicação visual completa
                  </h2>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--blue-lt)]">
                  <Zap size={18} className="text-[var(--blue)]" aria-hidden="true" />
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-6" role="list">
                {SERVICES_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-3" role="listitem">
                    <CheckCircle2 size={17} strokeWidth={2} className="text-[var(--blue)] shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-[var(--text)]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-[var(--border)] flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-medium text-[var(--muted)]">Entrega expressa disponível</div>
                  <div className="text-sm font-semibold text-[var(--text)] mt-0.5">Orçamento em até 24h</div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="Pedir orçamento pelo WhatsApp"
                  className="shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: "linear-gradient(135deg, #25d366, #128c4e)", boxShadow: "0 4px 12px rgba(37,211,102,.3)" }}>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Proof strip */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { num: "338", label: "Avaliações" },
                { num: "4.3★", label: "Google" },
                { num: "24h", label: "Orçamento" },
              ].map(({ num, label }) => (
                <div key={label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3 text-center">
                  <div className="font-extrabold text-base text-[var(--blue)]">{num}</div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
