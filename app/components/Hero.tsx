import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/app/lib/constants";
import { CheckCircle2, ArrowRight } from "lucide-react";

const SERVICES_LIST = [
  "Fachadas em ACM",
  "Letras Caixa com LED",
  "Impressão UV em superfícies rígidas",
  "Banners, lonas e grande formato",
  "Uniformes e camisetas corporativas",
  "Papelaria completa com verniz",
];

const STATS = [
  { value: "+20 anos", label: "de mercado" },
  { value: "4.3 ★",   label: "338 avaliações Google" },
  { value: "100%",     label: "projetos entregues" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação"
      className="bg-white border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "var(--blue-lt)",
                color: "var(--blue)",
                fontFamily: "var(--font-mono, monospace)",
                letterSpacing: ".04em",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" aria-hidden="true" />
              CAUCAIA, CE · DESDE 2004
            </div>

            <h1
              className="font-bold leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", color: "var(--text)" }}
            >
              Comunicação visual que{" "}
              <span style={{ color: "var(--blue)" }}>impulsiona seu negócio.</span>
            </h1>

            <p
              className="leading-relaxed mb-8 max-w-[520px]"
              style={{ fontSize: "1.0625rem", color: "var(--muted)" }}
            >
              Da fachada à papelaria — a Copygraf entrega projetos de comunicação visual com
              precisão técnica, prazos respeitados e qualidade premium para empresas de todos os tamanhos.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar orçamento gratuito via WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
                style={{ background: "var(--blue)", boxShadow: "0 2px 8px rgba(26,86,219,.28)" }}
              >
                Solicitar Orçamento Grátis
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href={PHONE_HREF}
                aria-label="Ligar para a Copygraf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors hover:border-[var(--blue)] hover:text-[var(--blue)]"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-2)",
                  background: "var(--white)",
                }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div
              className="flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t"
              style={{ borderColor: "var(--border)" }}
              role="list"
            >
              {STATS.map(({ value, label }) => (
                <div key={label} role="listitem">
                  <div className="font-bold text-xl mb-0.5" style={{ color: "var(--blue)" }}>{value}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — service card */}
          <div
            className="rounded-xl border bg-white p-7"
            style={{ borderColor: "var(--border)", boxShadow: "var(--shadow-md)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--blue)", fontFamily: "var(--font-mono, monospace)" }}>
              Nossos serviços
            </p>
            <h2 className="font-bold text-lg mb-6" style={{ color: "var(--text)" }}>
              Soluções completas em comunicação visual
            </h2>

            <ul className="flex flex-col gap-3.5" role="list">
              {SERVICES_LIST.map((item) => (
                <li key={item} className="flex items-center gap-3" role="listitem">
                  <CheckCircle2
                    size={17}
                    strokeWidth={2}
                    style={{ color: "var(--blue)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--text-2)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-7 pt-6 flex items-center justify-between gap-4"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div>
                <div className="text-xs font-medium" style={{ color: "var(--muted)" }}>Entrega expressa disponível</div>
                <div className="text-sm font-semibold mt-0.5" style={{ color: "var(--text)" }}>Orçamento em até 24h</div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedir orçamento pelo WhatsApp"
                className="shrink-0 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--green)" }}
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
