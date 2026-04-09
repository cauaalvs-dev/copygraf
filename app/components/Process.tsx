import { STEPS } from "@/app/lib/constants";

export default function Process() {
  return (
    <section id="processo" aria-labelledby="proc-title" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="flex items-center justify-center gap-2 mb-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".16em", color: "var(--cyan)" }}
          >
            <span className="w-5 h-px bg-[var(--cyan)]" aria-hidden="true" />
            Como Funciona
          </p>
          <h2
            id="proc-title"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: .97, letterSpacing: ".02em" }}
          >
            Do briefing à <span className="grad-text">entrega</span>
          </h2>
          <p
            className="max-w-[520px] mx-auto mt-4"
            style={{ fontSize: ".95rem", color: "var(--muted)", lineHeight: 1.7 }}
          >
            Processo transparente, prazos respeitados e sem surpresas.
            Assim que um projeto sai daqui, você já sabe o que esperar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative" role="list">
          <div
            className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #00c8f0, #f0005a, transparent)",
            }}
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div key={step.number} className="group p-5 text-center" role="listitem">
              <div
                className="w-[46px] h-[46px] rounded-full border flex items-center justify-center mx-auto mb-6 relative z-10 transition-all duration-300 group-hover:bg-[var(--cyan)] group-hover:border-[var(--cyan)] group-hover:shadow-[0_0_26px_rgba(0,200,240,0.45)]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--cyan)",
                }}
              >
                <span className="group-hover:text-[var(--ink)] transition-colors duration-300">
                  {step.number}
                </span>
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: ".04em" }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: ".84rem", color: "var(--muted)", lineHeight: 1.62 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
