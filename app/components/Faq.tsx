"use client";

import { useState } from "react";
import { FAQ_ITEMS, WHATSAPP_URL } from "@/app/lib/constants";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
          <div>
            <p
              className="flex items-center gap-2 mb-3"
              style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".16em", color: "var(--cyan)" }}
            >
              <span className="w-5 h-px bg-[var(--cyan)]" aria-hidden="true" />
              FAQ
            </p>
            <h2
              id="faq-title"
              className="mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: .97, letterSpacing: ".02em" }}
            >
              Dúvidas <span className="grad-text">frequentes</span>
            </h2>
            <p className="mb-8" style={{ fontSize: ".92rem", color: "var(--muted)", lineHeight: 1.72 }}>
              Não encontrou sua dúvida? Fale com a gente pelo WhatsApp e respondemos em minutos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a equipe Copygraf pelo WhatsApp"
              className="inline-flex items-center gap-2 px-8 py-[0.9rem] rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-[2px] hover:opacity-90 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #25d366, #128c4e)",
                boxShadow: "0 6px 28px rgba(37,211,102,.22)",
              }}
            >
              Falar com a Equipe
            </a>
          </div>

          <div className="flex flex-col gap-[0.65rem]" role="list">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-[10px] overflow-hidden transition-colors duration-300"
                  style={{
                    border: isOpen
                      ? "1px solid rgba(0,200,240,.28)"
                      : "1px solid var(--border)",
                  }}
                  role="listitem"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-[1.15rem] font-semibold text-left transition-colors duration-200"
                    style={{
                      fontSize: ".9rem",
                      color: isOpen ? "var(--cyan)" : "var(--text)",
                    }}
                    aria-expanded={isOpen}
                    aria-controls={item.id}
                    onClick={() => toggle(item.id)}
                  >
                    {item.question}
                    <span
                      className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300"
                      style={{
                        border: isOpen ? "1px solid var(--cyan)" : "1px solid var(--border)",
                        background: isOpen ? "var(--cyan)" : "transparent",
                        color: isOpen ? "var(--ink)" : "var(--muted)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    >
                      <ChevronDown size={12} strokeWidth={2} />
                    </span>
                  </button>

                  <div
                    id={item.id}
                    role="region"
                    style={{
                      maxHeight: isOpen ? 180 : 0,
                      overflow: "hidden",
                      transition: "max-height .4s cubic-bezier(0.19,1,0.22,1)",
                    }}
                  >
                    <div
                      className="px-6 pb-5"
                      style={{ fontSize: ".875rem", color: "var(--muted)", lineHeight: 1.72 }}
                    >
                      {item.answer}
                    </div>
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
