"use client";

import {
  PHONE_GRAFICA_HREF,
  PHONE_GRAFICA_DISPLAY,
  WHATSAPP_GRAFICA_URL,
  PHONE_PAPELARIA_HREF,
  PHONE_PAPELARIA_DISPLAY,
  WHATSAPP_PAPELARIA_URL,
} from "@/app/lib/constants";
import { Phone, Printer, ShoppingBag, ArrowRight } from "lucide-react";

const channels = [
  {
    id: "grafica",
    label: "Gráfica & Design",
    sublabel: "Fachadas · Banners · Comunicação Visual · Sublimação",
    icon: Printer,
    phoneHref: PHONE_GRAFICA_HREF,
    phoneDisplay: PHONE_GRAFICA_DISPLAY,
    whatsappUrl: WHATSAPP_GRAFICA_URL,
    accent: "#1a56db",
    accentLight: "rgba(26,86,219,0.12)",
    badge: "Gráfica",
    badgeBg: "rgba(26,86,219,0.15)",
    badgeColor: "#6ea0ff",
    borderColor: "rgba(26,86,219,0.25)",
  },
  {
    id: "papelaria",
    label: "Papelaria & Geral",
    sublabel: "Cartões · Flyers · Folders · Atendimento Geral",
    icon: ShoppingBag,
    phoneHref: PHONE_PAPELARIA_HREF,
    phoneDisplay: PHONE_PAPELARIA_DISPLAY,
    whatsappUrl: WHATSAPP_PAPELARIA_URL,
    accent: "#059669",
    accentLight: "rgba(5,150,105,0.12)",
    badge: "Papelaria",
    badgeBg: "rgba(5,150,105,0.15)",
    badgeColor: "#34d399",
    borderColor: "rgba(5,150,105,0.25)",
  },
] as const;

export function ContactChannels() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="py-16 sm:py-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "var(--muted)",
              border: "1px solid rgba(255,255,255,0.10)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Fale com a gente
          </div>
          <h2
            id="contact-title"
            className="font-extrabold text-white tracking-tight mb-3"
            style={{ fontSize: "clamp(1.5rem,4vw,2.25rem)" }}
          >
            Escolha o canal certo para você
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Temos atendimento especializado por segmento — assim você fala direto com quem entende do seu pedido.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {channels.map(({ id, label, sublabel, icon: Icon, phoneHref, phoneDisplay, whatsappUrl, accent, accentLight, badge, badgeBg, badgeColor, borderColor }) => (
            <div
              key={id}
              className="rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${borderColor}`,
                boxShadow: `0 0 40px ${accentLight}`,
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: accentLight, border: `1px solid ${borderColor}` }}
                  aria-hidden="true"
                >
                  <Icon size={20} style={{ color: accent }} strokeWidth={1.8} />
                </div>
                <span
                  className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: badgeBg, color: badgeColor, fontFamily: "var(--font-mono)" }}
                >
                  {badge}
                </span>
              </div>

              {/* Label */}
              <div>
                <h3 className="text-base font-bold text-white mb-1">{label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-mono)" }}>
                  {sublabel}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: borderColor }} />

              {/* Phone */}
              <a
                href={phoneHref}
                aria-label={`Ligar para ${label}`}
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                  style={{ background: accentLight }}
                >
                  <Phone size={14} style={{ color: accent }} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <span
                  className="text-lg font-extrabold tracking-tight transition-colors"
                  style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}
                >
                  {phoneDisplay}
                </span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp para ${label}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-85 active:scale-[0.98]"
                style={{ background: accent, color: "#fff" }}
              >
                Orçamento via WhatsApp
                <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
