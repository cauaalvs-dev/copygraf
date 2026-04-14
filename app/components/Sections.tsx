"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  STEPS, TESTIMONIALS, FAQ_ITEMS,
  WHATSAPP_URL, INSTAGRAM_URL, LINKTREE_URL,
  PHONE_HREF, PHONE_DISPLAY, ADDRESS,
} from "@/app/lib/constants";
import { Star, Plus, Minus, MapPin, Phone, Clock, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".opacity-0-init");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = "1"; io.unobserve(e.target); }
      }),
      { threshold: 0.06 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ── Process ── */
export function Process() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section id="processo" ref={ref} aria-labelledby="proc-title"
      className="py-10 sm:py-16 bg-[#0f2d6b] border-y border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="mb-7 anim-fade-up">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>
            Como Funciona
          </p>
          <h2 id="proc-title" className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#fff" }}>
            Do briefing à entrega
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden" role="list">
          {STEPS.map((step, i) => (
            <div key={step.number}
              className={`p-7 anim-fade-up anim-delay-${i + 1}`}
              role="listitem">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white mb-5"
                style={{ background: "var(--blue)" }}
                aria-hidden="true">
                {i + 1}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#fff" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Portfolio — Instagram CTA ── */
export function Portfolio() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section id="portfolio" ref={ref} aria-labelledby="port-title" className="py-10 sm:py-16 bg-[#0d2660]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>
            Portfólio
          </p>
          <h2 id="port-title" className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#fff" }}>
            Nossos trabalhos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px] gap-8 items-start anim-fade-up anim-delay-1">
          <div
            className="rounded-2xl p-10 flex flex-col items-start gap-6"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <div>
              <p className="font-bold text-xl mb-2" style={{ color: "#fff" }}>
                431 publicações no Instagram
              </p>
              <p className="text-sm leading-relaxed text-white/65">
                Cada foto é um projeto real entregue — fachadas, banners, camisetas, letras caixa e muito mais.
                Nada de stock. Tudo da Copygraf.
              </p>
            </div>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              aria-label="Ver portfólio no Instagram da Copygraf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)" }}>
              Ver no Instagram
              <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: "Fachadas em ACM",    count: "fachadas",  color: "#1a56db" },
              { label: "Banners & Lonas",    count: "banners",   color: "#0891b2" },
              { label: "Camisetas",          count: "uniformes", color: "#059669" },
              { label: "Papelaria",          count: "impressos", color: "#7c3aed" },
            ].map((item) => (
              <a key={item.label} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                aria-label={`Ver ${item.label} no Instagram`}
                className="flex items-center justify-between px-5 py-4 rounded-xl border transition-all hover:bg-white/10 hover:border-white/30 group"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} aria-hidden="true" />
                  <span className="text-sm font-semibold" style={{ color: "#fff" }}>{item.label}</span>
                </div>
                <ArrowUpRight size={14} strokeWidth={2}
                  className="opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--blue)" }}
                  aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
export function Testimonials() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section id="depoimentos" ref={ref} aria-labelledby="dep-title"
      className="py-10 sm:py-16 bg-[#0f2d6b] border-y border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 anim-fade-up">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>
              Avaliações
            </p>
            <h2 id="dep-title" className="font-extrabold tracking-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#fff" }}>
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-[var(--bg)] text-sm shrink-0">
            <span className="flex gap-0.5" aria-hidden="true">
              {[1,2,3,4].map(i => <Star key={i} size={13} fill="#f59e0b" stroke="none" />)}
              <Star size={13} fill="none" stroke="#f59e0b" strokeWidth={1.5} />
            </span>
            <span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
              4.3 · 338 avaliações Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article key={t.name}
              className={`rounded-2xl border p-6 flex flex-col gap-4 transition-all hover:shadow-md hover:-translate-y-0.5 anim-fade-up anim-delay-${i + 1}`}
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)" }}>
              <div className="flex gap-0.5" aria-label={`${t.rating} de 5 estrelas`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14}
                    fill={j < t.rating ? "#f59e0b" : "none"}
                    stroke={j < t.rating ? "none" : "#d1d5db"}
                    strokeWidth={1.5} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white bg-[var(--blue)] shrink-0"
                  aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#fff" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Faq ── */
export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useReveal() as React.RefObject<HTMLElement>;
  const toggle = (id: string) => setOpenId((p) => (p === id ? null : id));

  return (
    <section id="faq" ref={ref} aria-labelledby="faq-title" className="py-10 sm:py-16 bg-[#0d2660]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
          <div className="opacity-0-init anim-slide-left">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>FAQ</p>
            <h2 id="faq-title" className="font-extrabold tracking-tight mb-4"
              style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#fff" }}>
              Dúvidas frequentes
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Não encontrou? Fale pelo WhatsApp — respondemos em minutos.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              aria-label="Falar com a equipe Copygraf pelo WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#25d366,#128c4e)", boxShadow: "0 4px 14px rgba(0,0,0,.2)" }}>
              Falar pelo WhatsApp
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col gap-2 anim-slide-right" role="list">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id}
                  className={`rounded-2xl overflow-hidden border transition-colors duration-150 ${isOpen ? "border-white/40 bg-white/10" : "border-white/10 bg-white/5"}`}
                  role="listitem">
                  <button
                    className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-left transition-colors ${isOpen ? "text-white" : "text-white/80"}`}
                    aria-expanded={isOpen} aria-controls={item.id}
                    onClick={() => toggle(item.id)}>
                    {item.question}
                    <span
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isOpen ? "text-[#1a56db]" : "bg-white/10 text-white/60"}`}
                      aria-hidden="true">
                      {isOpen ? <Minus size={12} strokeWidth={2.5} /> : <Plus size={12} strokeWidth={2.5} />}
                    </span>
                  </button>
                  <div id={item.id} role="region"
                    style={{ maxHeight: isOpen ? 200 : 0, overflow: "hidden", transition: "max-height .3s cubic-bezier(.4,0,.2,1)" }}>
                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee ── */
const MARQUEE_ITEMS = ["Fachada em ACM","Letras Caixa","Impressão UV","Banners & Lonas","Camisetas","Cartões de Visita","Papelaria Corporativa","Adesivos Personalizados"];

export function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden py-3.5 bg-white border-y border-[#dde6fb]" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg,#fff,transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg,#fff,transparent)" }} />
      <div className="flex gap-10 items-center w-max marquee-track">
        {doubled.map((item, i) => (
          <span key={i}
            className="flex items-center gap-4 shrink-0 text-xs font-bold uppercase tracking-wider text-[#1a56db]"
            style={{ fontFamily: "var(--font-mono)" }}>
            {item}<span className="text-[#1a56db]/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── CTA Band ── */
export function CtaBand() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="py-10 sm:py-16 bg-[#0d2660] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>

          <div className="relative flex flex-col lg:flex-row items-center">

            {/* Avatar */}
            <div className="shrink-0 flex items-end justify-center pt-4 lg:pt-0 lg:pl-10 lg:self-end">
              <Image
                src="/avatar-owner.webp"
                alt="Dono da Copygraf"
                width={110}
                height={165}
                className="object-contain select-none lg:w-[140px] lg:h-[210px]"
                style={{ maxHeight: 165 }}
              />
            </div>

            {/* Text + CTA */}
            <div className="flex-1 px-6 sm:px-10 py-10 text-center lg:text-left">
              <div className="hidden lg:inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
                💬 Fale diretamente comigo — respondo pessoalmente.
              </div>
              <h2 id="cta-title" className="font-extrabold text-white mb-2 tracking-tight"
                style={{ fontSize: "clamp(1.5rem,4vw,2.25rem)" }}>
                Pronto para começar?
              </h2>
              <p className="text-sm mb-6 leading-relaxed max-w-sm mx-auto lg:mx-0"
                style={{ color: "rgba(255,255,255,0.65)" }}>
                Orçamento gratuito em até 24h. Sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  aria-label="Solicitar orçamento via WhatsApp"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                  style={{ background: "#fff", color: "#1a56db" }}>
                  Solicitar Orçamento via WhatsApp
                  <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
                </a>
                <a href={PHONE_HREF} aria-label="Ligar para a Copygraf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
const SVC_LINKS = ["Fachadas em ACM","Letras Caixa","Impressão UV","Banners & Lonas","Camisetas & Uniformes","Papelaria Corporativa"];
const NAV_LINKS_F = [
  { href: "#processo",    label: "Como Funciona",  external: false },
  { href: "#portfolio",   label: "Portfólio",       external: false },
  { href: "#depoimentos", label: "Avaliações",       external: false },
  { href: "#faq",         label: "FAQ",              external: false },
  { href: INSTAGRAM_URL,  label: "Instagram",        external: true },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t pt-8 pb-6 bg-[var(--bg)] border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-6 mb-8">
          <div>
            <Image src="/logo-copygraf.webp" alt="Copygraf" width={140} height={70}
              className="h-12 w-auto object-contain mb-4" />
            <p className="text-sm leading-relaxed mb-5 max-w-[240px]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Gráfica Digital &amp; Papelaria em Caucaia, CE.
              Desde 2004 transformando ideias em comunicação visual.
            </p>
            <div className="flex gap-2" aria-label="Redes sociais">
              {[
                { href: INSTAGRAM_URL, label: "Instagram", text: "IG" },
                { href: WHATSAPP_URL,  label: "WhatsApp",  text: "WA" },
                { href: LINKTREE_URL,  label: "Linktree",  text: "LT" },
              ].map(({ href, label, text }) => (
                <a key={text} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-bold transition-all hover:bg-white/20"
                  style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: "#fff" }}>Serviços</h3>
            <ul className="flex flex-col gap-2.5">
              {SVC_LINKS.map((l) => (
                <li key={l}>
                  <a href="#servicos" className="text-sm transition-colors hover:text-[var(--blue)]"
                    style={{ color: "rgba(255,255,255,0.65)" }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: "#fff" }}>Navegação</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS_F.map(({ href, label, external }) => (
                <li key={label}>
                  <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm transition-colors hover:text-[var(--blue)]"
                    style={{ color: "rgba(255,255,255,0.65)" }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: "#fff" }}>Contato</h3>
            <address>
              <div className="flex items-start gap-2.5 mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                <MapPin size={14} strokeWidth={1.5} className="shrink-0 mt-[3px]" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5 mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
                <a href={PHONE_HREF} className="text-sm transition-colors hover:text-[var(--blue)]">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                <Clock size={14} strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm">Seg–Sex 08h–18h · Sáb 08h–12h</span>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>© 2026 Copygraf Gráfica Digital &amp; Papelaria</span>
            &nbsp;·&nbsp;Todos os direitos reservados
          </p>
          <div className="flex gap-2">
            {["DESDE 2004", "4.3★ GOOGLE", "338 AVALIAÇÕES"].map((s) => (
              <div key={s} className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-[11px]"
                style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── WhatsApp FAB ── */
export function WhatsAppFab() {
  return (
    <a href="https://wa.me/558532389240?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
      target="_blank" rel="noopener noreferrer"
      aria-label="Falar com a Copygraf no WhatsApp"
      className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{ background: "linear-gradient(135deg,#25d366,#128c4e)", animation: "waPulse 3s ease-in-out infinite" }}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.1 1.523 5.823L.057 23.486a.5.5 0 00.609.61l5.765-1.498A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.006-1.373l-.36-.214-3.716.966.993-3.625-.234-.372A9.82 9.82 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
      </svg>
    </a>
  );
}
