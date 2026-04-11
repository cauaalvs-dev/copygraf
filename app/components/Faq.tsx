"use client";

import { useState } from "react";
import { FAQ_ITEMS, WHATSAPP_URL } from "@/app/lib/constants";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">

          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--blue)", fontFamily: "var(--font-mono, monospace)" }}
            >
              FAQ
            </p>
            <h2
              id="faq-title"
              className="font-bold tracking-tight mb-4"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", color: "var(--text)" }}
            >
              Dúvidas frequentes
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Não encontrou sua dúvida? Fale com nossa equipe pelo WhatsApp e respondemos em minutos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a equipe Copygraf pelo WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--green)" }}
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-2" role="list">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border overflow-hidden transition-all duration-150"
                  style={{ borderColor: isOpen ? "var(--blue)" : "var(--border)" }}
                  role="listitem"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-left transition-colors"
                    style={{ color: isOpen ? "var(--blue)" : "var(--text)" }}
                    aria-expanded={isOpen}
                    aria-controls={item.id}
                    onClick={() => toggle(item.id)}
                  >
                    {item.question}
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-150"
                      style={{
                        background: isOpen ? "var(--blue)" : "var(--bg)",
                        color: isOpen ? "white" : "var(--muted)",
                      }}
                      aria-hidden="true"
                    >
                      {isOpen
                        ? <Minus size={12} strokeWidth={2.5} />
                        : <Plus  size={12} strokeWidth={2.5} />
                      }
                    </span>
                  </button>

                  <div
                    id={item.id}
                    role="region"
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      overflow: "hidden",
                      transition: "max-height .3s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
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
