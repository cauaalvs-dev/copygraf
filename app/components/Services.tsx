"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_URL } from "@/app/lib/constants";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { name: "Fachadas em ACM",       desc: "Impressiona quem chega · Instalação própria · Durabilidade total", prazo: "Sob consulta" },
  { name: "Letras Caixa",          desc: "Com ou sem LED · Acrílico, PVC ou metal · Volume real",        prazo: "Sob consulta" },
  { name: "Impressão UV",          desc: "Cor que não desbota · Rígido, madeira, acrílico e mais",       prazo: "2–4 dias úteis" },
  { name: "Banners & Lonas",       desc: "Evento amanhã? Entrega hoje · Alta resolução",                 prazo: "1–3 dias úteis" },
  { name: "Camisetas & Uniformes", desc: "Sublimação · Silk · DTF · Peça única ou kit completo",        prazo: "3–5 dias úteis" },
  { name: "Papelaria Corporativa", desc: "Cartão, flyer, folder · Do pedido à entrega em 1–2 dias",     prazo: "1–2 dias úteis" },
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
    <section id="servicos" ref={ref} aria-labelledby="svc-title" className="py-10 sm:py-16 bg-[#0d2660]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">

        <div className="mb-6 sm:mb-10 anim-fade-up">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)" }}>
            Nossos Serviços
          </p>
          <h2 id="svc-title" className="font-extrabold tracking-tight"
            style={{ fontSize: "clamp(1.6rem,5vw,2.5rem)", color: "#fff" }}>
            O que fazemos
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden anim-fade-up anim-delay-1"
          style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}
          role="list"
        >
          {SERVICES.map((svc, i) => (
            <div
              key={svc.name}
              className={`flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-white/10 ${i < SERVICES.length - 1 ? "border-b border-white/10" : ""}`}
              role="listitem"
            >
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm" style={{ color: "#fff" }}>
                  {svc.name}
                </div>
                <div className="text-xs mt-0.5 line-clamp-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {svc.desc}
                </div>
              </div>

              <div className="text-right shrink-0 ml-2">
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>Prazo</div>
                <div className="text-xs sm:text-sm font-bold" style={{ color: "#fff" }}>
                  {svc.prazo}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 anim-fade-up anim-delay-2">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Não encontrou o que precisa? Consulte nossa equipe.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 shrink-0"
            style={{ background: "#fff", color: "#1a56db" }}>
            Solicitar Orçamento
            <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
