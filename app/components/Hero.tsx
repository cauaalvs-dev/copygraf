"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/app/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação"
      className="relative border-b border-white/10 overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
      data-parallax="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg,rgba(15,50,120,0.98) 0%,rgba(15,50,120,0.95) 50%,rgba(15,50,120,0.6) 75%,rgba(15,50,120,0.15) 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" aria-hidden="true" />

      {/* ── MOBILE ── */}
      <div className="relative lg:hidden px-5 pt-8 pb-8">
        {/* Avatar mobile — top right floating */}
        <div className="absolute top-0 right-0 pointer-events-none" aria-hidden="true">
          <Image src="/avatar-hero.png" alt="" width={140} height={213}
            className="object-contain opacity-60" style={{ maxHeight: 213 }} />
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-wider mb-3 relative z-10"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>
          Gráfica Digital & Papelaria · Caucaia, CE
        </p>
        <h1 className="font-extrabold leading-[1.1] tracking-tight mb-3 relative z-10"
          style={{ fontSize: "clamp(1.75rem,7vw,2.5rem)", color: "#fff" }}>
          Esqueceu?<br />
          <span style={{ color: "#7dd3fc" }}>A gente resolve.</span>
        </h1>
        <p className="text-sm leading-relaxed mb-5 relative z-10"
          style={{ color: "rgba(255,255,255,0.75)" }}>
          Gráfica rápida de verdade.<br />Precisou pra hoje? Chama.
        </p>

        <div className="flex items-center gap-3 mb-5 relative z-10">
          {["Desde 2004", "Expressa", "Mesmo dia"].map((item, i) => (
            <span key={item} className="flex items-center gap-1 text-[11px] font-medium whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              {i > 0 && <span className="opacity-30" aria-hidden="true">·</span>}
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold"
            style={{ background: "#fff", color: "#1a56db" }}>
            Chama no WhatsApp <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <a href={PHONE_HREF} aria-label="Ligar"
            className="inline-flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold"
            style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff", background: "rgba(255,255,255,0.1)" }}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="relative hidden lg:block max-w-[1200px] mx-auto px-6 pt-12 pb-0">
        <div className="grid grid-cols-[1fr_280px_320px] gap-8 items-end">

          {/* LEFT — copy */}
          <div className="pb-16">
            <p className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>
              Gráfica Digital & Papelaria · Caucaia, CE
            </p>
            <h1 className="font-extrabold leading-[1.06] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.5rem,4vw,4rem)", color: "#fff" }}>
              Esqueceu?<br />
              <span style={{ color: "#7dd3fc" }}>A gente resolve.</span>
            </h1>
            <p className="leading-relaxed mb-7 text-lg"
              style={{ color: "rgba(255,255,255,0.8)", maxWidth: 460 }}>
              Gráfica rápida de verdade.<br />
              Precisou pra hoje? <strong className="text-white">Chama.</strong>
            </p>
            <div className="flex gap-3 mb-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                aria-label="Orçamento via WhatsApp"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
                style={{ background: "#fff", color: "#1a56db", boxShadow: "0 4px 16px rgba(0,0,0,.25)" }}>
                Chama no WhatsApp <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a href={PHONE_HREF} aria-label="Ligar"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", background: "rgba(255,255,255,0.1)" }}>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-5">
              {["Desde 2004", "Entrega expressa", "Mesmo dia disponível"].map((item, i) => (
                <span key={item} className="flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  {i > 0 && <span className="opacity-30 mr-0.5" aria-hidden="true">·</span>}
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — superhero avatar, sits at bottom of hero */}
          <div className="flex items-end justify-center" aria-hidden="true">
            <Image
              src="/avatar-hero.png"
              alt="Mascote Copygraf"
              width={250}
              height={380}
              className="object-contain select-none drop-shadow-2xl"
              style={{ maxHeight: 380 }}
              priority
            />
          </div>
          {/* MIDDLE — contact card */}
          <div className="pb-16">
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>Fale agora</p>
              <h2 className="font-bold text-lg mb-5 text-white">Solicite seu orçamento</h2>
              <div className="flex flex-col gap-3 mb-5">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#25d366,#128c4e)" }}>
                  <span>WhatsApp</span>
                  <span className="text-xs font-normal opacity-80">Resposta rápida</span>
                </a>
                <a href={PHONE_HREF} aria-label="Ligar"
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", background: "rgba(255,255,255,0.08)" }}>
                  <span>{PHONE_DISPLAY}</span>
                  <span className="text-xs opacity-50">Ligar</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                {[{ n: "338", l: "Avaliações" }, { n: "4.3★", l: "Google" }, { n: "24h", l: "Orçamento" }].map(({ n, l }) => (
                  <div key={l} className="text-center rounded-xl p-2" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="font-extrabold text-sm text-white">{n}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{l}</div>
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
