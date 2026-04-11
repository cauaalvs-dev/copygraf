import {
  WHATSAPP_URL, INSTAGRAM_URL, LINKTREE_URL,
  PHONE_HREF, PHONE_DISPLAY, ADDRESS,
} from "@/app/lib/constants";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const MARQUEE_ITEMS = [
  "Fachada em ACM",
  "Letras Caixa",
  "Impressão UV",
  "Banners & Lonas",
  "Camisetas",
  "Cartões de Visita",
  "Papelaria Corporativa",
  "Adesivos Personalizados",
];

export function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="relative overflow-hidden py-3.5 border-y"
      style={{ background: "var(--blue-lt)", borderColor: "#c7d8fa" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--blue-lt), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, var(--blue-lt), transparent)" }}
      />
      <div
        className="flex gap-10 items-center w-max"
        style={{ animation: "marquee-scroll 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 shrink-0 text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--blue)", fontFamily: "var(--font-mono, monospace)" }}
          >
            {item}
            <span className="text-blue-300" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="py-20 bg-white border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div
          className="rounded-2xl px-10 py-14 text-center"
          style={{ background: "var(--blue)" }}
        >
          <h2
            id="cta-title"
            className="font-bold text-white mb-3 tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)" }}
          >
            Pronto para começar?
          </h2>
          <p
            className="text-sm mb-8 mx-auto max-w-[440px] leading-relaxed"
            style={{ color: "rgba(255,255,255,.75)" }}
          >
            Solicite um orçamento grátis e receba uma resposta em até 24h. Sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento via WhatsApp"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#fff", color: "var(--blue)" }}
            >
              Solicitar Orçamento via WhatsApp
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href={PHONE_HREF}
              aria-label="Ligar para a Copygraf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "rgba(255,255,255,.15)", color: "#fff", border: "1px solid rgba(255,255,255,.25)" }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const SVC_LINKS = [
  "Fachadas em ACM", "Letras Caixa", "Impressão UV",
  "Banners & Lonas", "Camisetas & Uniformes", "Papelaria Corporativa",
];

const NAV_LINKS = [
  { href: "#processo",    label: "Como Funciona",     external: false },
  { href: "#portfolio",   label: "Portfólio",         external: false },
  { href: "#depoimentos", label: "Avaliações",         external: false },
  { href: "#faq",         label: "FAQ",                external: false },
  { href: INSTAGRAM_URL,  label: "Instagram",          external: true  },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t pt-14 pb-8"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-10">

          <div>
            <div className="font-bold text-base tracking-tight mb-3">
              COPY<span style={{ color: "var(--blue)" }}>GRAF</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-[240px]" style={{ color: "var(--muted)" }}>
              Gráfica Digital &amp; Papelaria em Caucaia, CE. Desde 2004 transformando ideias
              em comunicação visual de impacto.
            </p>
            <div className="flex gap-2" aria-label="Redes sociais">
              {[
                { href: INSTAGRAM_URL, label: "Instagram da Copygraf", text: "IG" },
                { href: WHATSAPP_URL,  label: "WhatsApp da Copygraf",  text: "WA" },
                { href: LINKTREE_URL,  label: "Linktree da Copygraf",  text: "LT" },
              ].map(({ href, label, text }) => (
                <a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-semibold transition-all duration-150 hover:border-[var(--blue)] hover:text-[var(--blue)] hover:bg-[var(--blue-lt)]"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                    fontFamily: "var(--font-mono, monospace)",
                    background: "white",
                  }}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text)" }}>
              Serviços
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {SVC_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="text-sm transition-colors hover:text-[var(--blue)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text)" }}>
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map(({ href, label, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm transition-colors hover:text-[var(--blue)]"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text)" }}>
              Contato
            </h3>
            <address>
              <div className="flex items-start gap-2.5 mb-3" style={{ color: "var(--muted)" }}>
                <MapPin size={14} strokeWidth={1.5} className="shrink-0 mt-[3px]" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5 mb-3" style={{ color: "var(--muted)" }}>
                <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={PHONE_HREF}
                  className="text-sm transition-colors hover:text-[var(--blue)]"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5" style={{ color: "var(--muted)" }}>
                <Clock size={14} strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm">Seg–Sex 08h–18h · Sáb 08h–12h</span>
              </div>
            </address>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--muted)", fontFamily: "var(--font-mono, monospace)" }}
          >
            <span style={{ color: "var(--text-2)" }}>
              © 2024 Copygraf Gráfica Digital &amp; Papelaria
            </span>
            &nbsp;·&nbsp;Todos os direitos reservados
          </p>
          <div className="flex gap-2">
            {["DESDE 2004", "4.3★ GOOGLE", "338 AVALIAÇÕES"].map((s) => (
              <div
                key={s}
                className="px-2.5 py-1 rounded-md border text-[11px]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono, monospace)",
                  background: "white",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5585323899240?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Copygraf no WhatsApp"
      className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{
        background: "linear-gradient(135deg, #25d366, #128c4e)",
        animation: "fab-pulse 3s ease-in-out infinite",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-6 h-6"
        fill="white"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.1 1.523 5.823L.057 23.486a.5.5 0 00.609.61l5.765-1.498A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.006-1.373l-.36-.214-3.716.966.993-3.625-.234-.372A9.82 9.82 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>
  );
}
