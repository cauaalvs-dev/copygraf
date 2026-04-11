import { STEPS } from "@/app/lib/constants";

export default function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="proc-title"
      className="py-20 bg-white border-y"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--blue)", fontFamily: "var(--font-mono, monospace)" }}
          >
            Como Funciona
          </p>
          <h2
            id="proc-title"
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", color: "var(--text)" }}
          >
            Do briefing à entrega
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" role="list">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col p-6 border-r last:border-r-0"
              style={{ borderColor: "var(--border)" }}
              role="listitem"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white mb-5 shrink-0"
                style={{ background: "var(--blue)" }}
                aria-hidden="true"
              >
                {index + 1}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
