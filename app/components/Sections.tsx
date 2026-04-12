"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { STEPS, TESTIMONIALS, FAQ_ITEMS, WHATSAPP_URL, INSTAGRAM_URL, LINKTREE_URL, PHONE_HREF, PHONE_DISPLAY, ADDRESS } from "@/app/lib/constants";
import { Star, Plus, Minus, MapPin, Phone, Clock, ArrowRight, ArrowUpRight } from "lucide-react";

/* ── util ── */
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".opacity-0-init");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = "1"; io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
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
      className="py-20 bg-white border-y border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 opacity-0-init anim-fade-up">
          <div className="section-label mb-3">Como Funciona</div>
          <h2 id="proc-title" className="font-extrabold tracking-tight text-[var(--text)]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            Do briefing à entrega
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" role="list">
          {STEPS.map((step, i) => (
            <div key={step.number}
              className={`relative p-6 border-r last:border-r-0 border-[var(--border)] opacity-0-init anim-fade-up anim-delay-${i + 1}`}
              role="listitem">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-[var(--blue)] mb-5 shadow-md shadow-blue-100"
                aria-hidden="true">
                {i + 1}
              </div>
              <h3 className="font-bold text-base mb-2 text-[var(--text)]">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Portfolio ── */
const PORT_ITEMS = [
  { label: "Fachadas em ACM",    sub: "Comunicação Visual",    accent: "#1a56db", bg: "#ebf0fd" },
  { label: "Letras Caixa",       sub: "Sinalização 3D",        accent: "#0891b2", bg: "#ecfeff" },
  { label: "Impressão UV",       sub: "Digital Premium",       accent: "#7c3aed", bg: "#f5f3ff" },
  { label: "Banners & Lonas",    sub: "Grande Formato",        accent: "#dc2626", bg: "#fef2f2" },
  { label: "Uniformes",          sub: "Vestuário Corporativo", accent: "#d97706", bg: "#fffbeb" },
  { label: "Papelaria",          sub: "Identidade Visual",     accent: "#059669", bg: "#f0fdf4" },
];

export function Portfolio() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  return (
    <section id="portfolio" ref={ref} aria-labelledby="port-title" className="py-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 opacity-0-init anim-fade-up">
          <div>
            <div className="section-label mb-3">Portfólio</div>
            <h2 id="port-title" className="font-extrabold tracking-tight text-[var(--text)]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
              Nossos trabalhos
            </h2>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Ver portfólio completo no Instagram"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] hover:text-[var(--blue)] transition-colors shrink-0">
            Ver no Instagram <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Galeria">
          {PORT_ITEMS.map((item, i) => (
            <div key={item.label}
              className={`group relative rounded-2xl overflow-hidden h-44 flex items-end p-5 cursor-default transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0-init anim-fade-up anim-delay-${Math.min(i + 1, 6)}`}
              style={{ background: item.bg }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-70"
                  style={{ color: item.accent, fontFamily: "var(--font-mono)" }}>{item.sub}</p>
                <p className="font-extrabold text-lg" style={{ color: item.accent }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center opacity-0-init anim-fade-up">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Ver portfólio no Instagram"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold border border-[var(--border)] text-[var(--text)] bg-white hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all duration-150">
            Ver portfólio completo no Instagram
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
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
      className="py-20 bg-white border-y border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 opacity-0-init anim-fade-up">
          <div>
            <div className="section-label mb-3">Avaliações</div>
            <h2 id="dep-title" className="font-extrabold tracking-tight text-[var(--text)]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-sm shrink-0">
            <span className="flex gap-0.5" aria-hidden="true">
              {[1,2,3,4].map(i => <Star key={i} size={13} fill="#f59e0b" stroke="none" />)}
              <Star size={13} fill="none" stroke="#f59e0b" strokeWidth={1.5} />
            </span>
            <span className="text-xs text-[var(--muted)]" style={{ fontFamily: "var(--font-mono)" }}>
              4.3 · 338 avaliações Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article key={t.name}
              className={`bg-white rounded-2xl border border-[var(--border)] p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 opacity-0-init anim-fade-up anim-delay-${i + 1}`}>
              <div className="flex gap-0.5" aria-label={`${t.rating} de 5 estrelas`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14}
                    fill={j < t.rating ? "#f59e0b" : "none"}
                    stroke={j < t.rating ? "none" : "#d1d5db"}
                    strokeWidth={1.5} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed flex-1 text-[var(--muted)]">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-3 border-t border-[var(--border)]">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white bg-[var(--blue)] shrink-0"
                  aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted)]">{t.role}</div>
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
    <section id="faq" ref={ref} aria-labelledby="faq-title" className="py-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
          <div className="opacity-0-init anim-slide-left">
            <div className="section-label mb-3">FAQ</div>
            <h2 id="faq-title" className="font-extrabold tracking-tight mb-4 text-[var(--text)]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
              Dúvidas frequentes
            </h2>
            <p className="text-sm leading-relaxed mb-8 text-[var(--muted)]">
              Não encontrou sua dúvida? Fale com nossa equipe pelo WhatsApp e respondemos em minutos.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              aria-label="Falar com a equipe pelo WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: "linear-gradient(135deg, #25d366, #128c4e)", boxShadow: "0 4px 14px rgba(37,211,102,.3)" }}>
              Falar pelo WhatsApp
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col gap-2 opacity-0-init anim-slide-right" role="list">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${isOpen ? "border-[var(--blue)] shadow-sm shadow-blue-50" : "border-[var(--border)]"}`}
                  role="listitem">
                  <button
                    className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-left transition-colors ${isOpen ? "text-[var(--blue)]" : "text-[var(--text)]"}`}
                    aria-expanded={isOpen} aria-controls={item.id}
                    onClick={() => toggle(item.id)}>
                    {item.question}
                    <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[var(--blue)] text-white" : "bg-[var(--bg)] text-[var(--muted)]"}`}
                      aria-hidden="true">
                      {isOpen ? <Minus size={12} strokeWidth={2.5} /> : <Plus size={12} strokeWidth={2.5} />}
                    </span>
                  </button>
                  <div id={item.id} role="region"
                    style={{ maxHeight: isOpen ? 200 : 0, overflow: "hidden", transition: "max-height .3s cubic-bezier(.4,0,.2,1)" }}>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--muted)]">{item.answer}</p>
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
    <div className="relative overflow-hidden py-3.5 bg-[var(--blue-lt)] border-y border-blue-100" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--blue-lt), transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, var(--blue-lt), transparent)" }} />
      <div className="flex gap-10 items-center w-max marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 shrink-0 text-xs font-bold uppercase tracking-widest text-[var(--blue)]"
            style={{ fontFamily: "var(--font-mono)" }}>
            {item}
            <span className="text-blue-300" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── CTA Band ── */
export function CtaBand() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="py-20 bg-white border-t border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden px-10 py-16 text-center bg-[var(--blue)]">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #fff, transparent)", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #06b6d4, transparent)", transform: "translate(-30%, 30%)" }} />
          </div>
          <h2 id="cta-title" className="relative font-extrabold text-white mb-3 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
            Pronto para começar?
          </h2>
          <p className="relative text-sm text-blue-100 mb-8 mx-auto max-w-[420px] leading-relaxed">
            Solicite um orçamento grátis e receba uma resposta em até 24h. Sem compromisso.
          </p>
          <div className="relative flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              aria-label="Solicitar orçamento via WhatsApp"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: "#fff", color: "var(--blue)" }}>
              Solicitar Orçamento via WhatsApp
              <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a href={PHONE_HREF} aria-label="Ligar para a Copygraf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)" }}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
const SVC_LINKS = ["Fachadas em ACM","Letras Caixa","Impressão UV","Banners & Lonas","Camisetas & Uniformes","Papelaria Corporativa"];
const NAV_LINKS_FOOTER = [
  { href: "#processo",    label: "Como Funciona",  external: false },
  { href: "#portfolio",   label: "Portfólio",      external: false },
  { href: "#depoimentos", label: "Avaliações",      external: false },
  { href: "#faq",         label: "FAQ",             external: false },
  { href: INSTAGRAM_URL,  label: "Instagram",       external: true },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t pt-14 pb-8 bg-[var(--bg)] border-[var(--border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-10">
          <div>
            <Image src="/logo-copygraf.png" alt="Copygraf" width={140} height={70}
              className="h-12 w-auto object-contain mb-4" />
            <p className="text-sm leading-relaxed mb-5 max-w-[240px] text-[var(--muted)]">
              Gráfica Digital &amp; Papelaria em Caucaia, CE. Desde 2004 transformando ideias em comunicação visual.
            </p>
            <div className="flex gap-2" aria-label="Redes sociais">
              {[
                { href: INSTAGRAM_URL, label: "Instagram", text: "IG" },
                { href: WHATSAPP_URL,  label: "WhatsApp",  text: "WA" },
                { href: LINKTREE_URL,  label: "Linktree",  text: "LT" },
              ].map(({ href, label, text }) => (
                <a key={text} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--muted)] bg-white hover:border-[var(--blue)] hover:text-[var(--blue)] transition-all duration-150"
                  style={{ fontFamily: "var(--font-mono)" }}>
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-[var(--text)]">Serviços</h3>
            <ul className="flex flex-col gap-2.5">
              {SVC_LINKS.map((l) => (
                <li key={l}>
                  <a href="#servicos" className="text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-[var(--text)]">Navegação</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS_FOOTER.map(({ href, label, external }) => (
                <li key={label}>
                  <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-[var(--text)]">Contato</h3>
            <address>
              <div className="flex items-start gap-2.5 mb-3 text-sm text-[var(--muted)]">
                <MapPin size={14} strokeWidth={1.5} className="shrink-0 mt-[3px]" aria-hidden="true" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5 mb-3 text-sm text-[var(--muted)]">
                <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
                <a href={PHONE_HREF} className="hover:text-[var(--blue)] transition-colors">{PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                <Clock size={14} strokeWidth={1.5} aria-hidden="true" />
                <span>Seg–Sex 08h–18h · Sáb 08h–12h</span>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]" style={{ fontFamily: "var(--font-mono)" }}>
            <span className="text-[var(--text)]">© 2024 Copygraf Gráfica Digital &amp; Papelaria</span>
            &nbsp;·&nbsp;Todos os direitos reservados
          </p>
          <div className="flex gap-2">
            {["DESDE 2004", "4.3★ GOOGLE", "338 AVALIAÇÕES"].map((s) => (
              <div key={s} className="px-2.5 py-1 rounded-lg border border-[var(--border)] text-[11px] text-[var(--muted)] bg-white"
                style={{ fontFamily: "var(--font-mono)" }}>{s}</div>
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
    <a href="https://wa.me/5585323899240?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
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
