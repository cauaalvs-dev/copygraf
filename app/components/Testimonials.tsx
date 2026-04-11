import { TESTIMONIALS } from "@/app/lib/constants";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="dep-title"
      className="py-20 bg-white border-y"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--blue)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Avaliações
            </p>
            <h2
              id="dep-title"
              className="font-bold tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", color: "var(--text)" }}
            >
              O que nossos clientes dizem
            </h2>
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm shrink-0"
            style={{ borderColor: "var(--border)", color: "var(--muted)", background: "var(--bg)" }}
          >
            <span className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} size={13} fill="#f59e0b" stroke="none" />
              ))}
              <Star size={13} fill="none" stroke="#f59e0b" strokeWidth={1.5} />
            </span>
            <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: ".75rem" }}>
              4.3 · 338 avaliações Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-xl border p-6 flex flex-col gap-4 transition-shadow duration-200 hover:shadow-[var(--shadow-md)]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex gap-0.5" aria-label={`${t.rating} de 5 estrelas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < t.rating ? "#f59e0b" : "none"}
                    stroke={i < t.rating ? "none" : "#d1d5db"}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-2)" }}>
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: "var(--blue)" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
