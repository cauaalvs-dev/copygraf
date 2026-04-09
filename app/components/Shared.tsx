import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  LINKTREE_URL,
  PHONE_HREF,
  PHONE_DISPLAY,
  ADDRESS,
} from "@/app/lib/constants";
import { MapPin, Phone, Clock } from "lucide-react";

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
      className="relative overflow-hidden py-9 border-y"
      style={{ borderColor: "var(--border)" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, var(--bg), transparent)" }}
      />
      <div
        className="flex gap-10 items-center w-max"
        style={{ animation: "marquee-scroll 24s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 shrink-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              letterSpacing: ".12em",
              color: "var(--muted)",
            }}
          >
            {item}
            <span style={{ color: "var(--cyan)", fontSize: ".7rem" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section id="cta" aria-labelledby="cta-title" className="py-20" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-[22px] p-20 text-center border"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(0,200,240,.07), transparent)",
            }}
            aria-hidden="true"
          />
          <h2
            id="cta-title"
            className="relative z-10 mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: .97, letterSpacing: ".02em" }}
          >
            Pronto para <span className="grad-text">sair na frente?</span>
          </h2>
          <p
            className="relative z-10 max-w-[520px] mx-auto mb-9"
            style={{ fontSize: "1rem", color: "var(--muted)" }}
          >
            Empresas que investem em comunicação visual profissional faturam mais.
            Comece com um orçamento sem compromisso.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento via WhatsApp"
              className="inline-flex items-center gap-2 px-8 py-[0.9rem] rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-[2px] hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #25d366, #128c4e)",
                boxShadow: "0 6px 28px rgba(37,211,102,.22)",
              }}
            >
              Solicitar Orçamento via WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              aria-label="Ligar para a Copygraf"
              className="inline-flex items-center gap-2 px-6 py-[0.8rem] rounded-full font-semibold transition-all duration-200 hover:-translate-y-[2px] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[rgba(0,200,240,0.05)]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                background: "rgba(255,255,255,.04)",
              }}
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
  "Fachadas em ACM",
  "Letras Caixa",
  "Impressão UV",
  "Banners & Lonas",
  "Camisetas & Uniformes",
  "Papelaria Corporativa",
];

const NAV_LINKS = [
  { href: "#processo",     label: "Como Funciona" },
  { href: "#portfolio",    label: "Portfólio" },
  { href: "#depoimentos",  label: "Avaliações" },
  { href: "#faq",          label: "Perguntas Frequentes" },
  { href: INSTAGRAM_URL,   label: "Instagram", external: true },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t pt-16 pb-8" style={{ background: "var(--ink)", borderColor: "var(--border)" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-12">
          <div>
            <div
              className="mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", letterSpacing: ".08em" }}
            >
              COPY<span style={{ color: "var(--cyan)" }}>GRAF</span>
            </div>
            <p
              className="mb-6 max-w-[260px]"
              style={{ fontSize: ".875rem", color: "var(--muted)", lineHeight: 1.7 }}
            >
              Gráfica Digital &amp; Papelaria em Caucaia, CE. Desde 2004 transformando ideias em
              comunicação visual de impacto.
            </p>
            <div className="flex gap-[0.65rem]" aria-label="Redes sociais">
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
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[rgba(0,200,240,0.07)]"
                  style={{
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: ".7rem",
                    color: "var(--muted)",
                  }}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="mb-5"
              style={{ fontFamily: "var(--font-display)", fontSize: ".95rem", letterSpacing: ".08em" }}
            >
              Serviços
            </h3>
            <ul className="flex flex-col gap-[0.55rem]" role="list">
              {SVC_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#servicos"
                    className="hover:text-[var(--cyan)] transition-colors duration-200"
                    style={{ fontSize: ".86rem", color: "var(--muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-5"
              style={{ fontFamily: "var(--font-display)", fontSize: ".95rem", letterSpacing: ".08em" }}
            >
              Navegação
            </h3>
            <ul className="flex flex-col gap-[0.55rem]" role="list">
              {NAV_LINKS.map(({ href, label, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-[var(--cyan)] transition-colors duration-200"
                    style={{ fontSize: ".86rem", color: "var(--muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-5"
              style={{ fontFamily: "var(--font-display)", fontSize: ".95rem", letterSpacing: ".08em" }}
            >
              Contato
            </h3>
            <address className="not-italic">
              <div className="flex items-start gap-[0.65rem] mb-[0.65rem]" style={{ fontSize: ".86rem", color: "var(--muted)", lineHeight: 1.5 }}>
                <MapPin size={15} strokeWidth={1.5} className="shrink-0 mt-[0.15rem]" aria-hidden="true" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-start gap-[0.65rem] mb-[0.65rem]" style={{ fontSize: ".86rem", color: "var(--muted)" }}>
                <Phone size={15} strokeWidth={1.5} className="shrink-0 mt-[0.15rem]" aria-hidden="true" />
                <a href={PHONE_HREF} className="hover:text-[var(--cyan)] transition-colors duration-200">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-[0.65rem]" style={{ fontSize: ".86rem", color: "var(--muted)" }}>
                <Clock size={15} strokeWidth={1.5} className="shrink-0 mt-[0.15rem]" aria-hidden="true" />
                <span>Seg – Sex: 08h–18h &nbsp;|&nbsp; Sáb: 08h–12h</span>
              </div>
            </address>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-7 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".74rem", color: "var(--muted)" }}>
            <span style={{ color: "var(--text)" }}>© 2024 Copygraf Gráfica Digital &amp; Papelaria</span>
            &nbsp;·&nbsp;Todos os direitos reservados
          </p>
          <div className="flex gap-[0.6rem]" aria-label="Selos">
            {["DESDE 2004", "4.3★ GOOGLE", "338 AVALIAÇÕES"].map((seal) => (
              <div
                key={seal}
                className="px-3 py-1 rounded-full border"
                style={{
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".68rem",
                  color: "var(--muted)",
                  letterSpacing: ".07em",
                }}
              >
                {seal}
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
      className="fixed bottom-7 right-7 z-[200] w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #25d366, #128c4e)",
        animation: "fab-pulse 3s ease-in-out infinite",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-[26px] h-[26px]"
        fill="white"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.1 1.523 5.823L.057 23.486a.5.5 0 00.609.61l5.765-1.498A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.006-1.373l-.36-.214-3.716.966.993-3.625-.234-.372A9.82 9.82 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>
  );
}
