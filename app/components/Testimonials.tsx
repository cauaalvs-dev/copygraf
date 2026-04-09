import { TESTIMONIALS } from "@/app/lib/constants";

export default function Testimonials() {
  return (
    <section id="depoimentos" aria-labelledby="dep-title" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-10">
          <p
            className="flex items-center justify-center gap-2 mb-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".16em", color: "var(--cyan)" }}
          >
            <span className="w-5 h-px bg-[var(--cyan)]" aria-hidden="true" />
            Avaliações
          </p>
          <h2
            id="dep-title"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: .97, letterSpacing: ".02em" }}
          >
            O que nossos <span className="grad-text">clientes dizem</span>
          </h2>
          <div className="mt-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-[0.45rem] rounded-full border"
              style={{
                border: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                fontSize: ".72rem",
                color: "var(--muted)",
              }}
            >
              <span>Google</span>
              <span style={{ color: "var(--yellow)" }}>★★★★☆</span>
              <span>4.3 · 338 avaliações</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="group relative overflow-hidden rounded-[18px] border p-7 transition-all duration-300 hover:border-[rgba(0,200,240,0.28)] hover:-translate-y-1"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <span
                className="absolute top-[-1rem] right-5 leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "7rem",
                  color: "rgba(0,200,240,.05)",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="flex gap-[0.15rem] mb-4" aria-label={`${t.rating} de 5 estrelas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    style={{ color: i < t.rating ? "var(--yellow)" : "var(--muted)", fontSize: ".95rem" }}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>

              <blockquote
                className="mb-6"
                style={{ fontSize: ".9rem", color: "var(--muted)", lineHeight: 1.72 }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 text-white"
                  style={{ background: t.gradient, fontFamily: "var(--font-display)", fontSize: "1rem" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold" style={{ fontSize: ".88rem" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--muted)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
