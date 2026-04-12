"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/app/lib/constants";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { name: "Fachadas em ACM",       desc: "Corte a laser · Alta durabilidade · Instalação inclusa",     prazo: "Sob consulta" },
  { name: "Letras Caixa",          desc: "Acrílico, PVC ou metal · Com ou sem LED · Volume real",       prazo: "Sob consulta" },
  { name: "Impressão UV",          desc: "Superfícies rígidas · Cores vivas · Resistente a intempéries",prazo: "2–4 dias" },
  { name: "Banners & Lonas",       desc: "Frontlit · Blackout · Alta resolução · Qualquer tamanho",     prazo: "1–3 dias" },
  { name: "Camisetas & Uniformes", desc: "Sublimação · Silk-screen · DTF · Qualquer quantidade",       prazo: "3–5 dias" },
  { name: "Papelaria Corporativa", desc: "Cartões · Flyers · Folders · Verniz localizado",              prazo: "1–2 dias" },
];

export default function Services() {
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
      { threshold: 0.06 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="servicos" ref={ref} aria-labelledby="svc-title" className="py-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 opacity-0-init anim-fade-up">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--blue)", fontFamily: "var(--font-mono)" }}>
              Nossos Serviços
            </p>
            <h2 id="svc-title" className="font-extrabold tracking-tight"
              style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "var(--text)" }}>
              O que fazemos
            </h2>
          </div>
          <p className="text-sm hidden md:block" style={{ color: "var(--muted)" }}>
            Prazo estimado após aprovação da arte
          </p>
        </div>

        {/* Service list */}
        <div
          className="rounded-2xl overflow-hidden opacity-0-init anim-fade-up anim-delay-1"
          style={{ border: "1px solid var(--border)", background: "white" }}
          role="list"
        >
          {SERVICES.map((svc, i) => (
            <div
              key={svc.name}
              className={`group flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 transition-colors duration-150 hover:bg-[var(--bg)] ${i < SERVICES.length - 1 ? "border-b border-[var(--border)]" : ""}`}
              role="listitem"
            >
              {/* Number */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors group-hover:bg-[var(--blue)] group-hover:text-white"
                style={{ background: "var(--blue-lt)", color: "var(--blue)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Name + desc */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                  {svc.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                  {svc.desc}
                </div>
              </div>

              {/* Prazo */}
              <div className="text-right shrink-0 ml-auto">
                <div className="text-xs" style={{ color: "var(--muted)" }}>Prazo</div>
                <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {svc.prazo}
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--blue)" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 opacity-0-init anim-fade-up anim-delay-2">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Não encontrou o que precisa? Consulte nossa equipe.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 shrink-0"
            style={{ background: "var(--blue)" }}>
            Solicitar Orçamento
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
