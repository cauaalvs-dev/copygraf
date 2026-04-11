import { INSTAGRAM_URL } from "@/app/lib/constants";
import { ArrowUpRight } from "lucide-react";

const ITEMS = [
  { label: "Fachadas em ACM",     sub: "Comunicação Visual",    accent: "#1a56db", bg: "#ebf0fd" },
  { label: "Letras Caixa",        sub: "Sinalização 3D",        accent: "#0f766e", bg: "#f0fdfa" },
  { label: "Impressão UV",        sub: "Digital Premium",       accent: "#9333ea", bg: "#faf5ff" },
  { label: "Banners & Lonas",     sub: "Grande Formato",        accent: "#dc2626", bg: "#fef2f2" },
  { label: "Uniformes",           sub: "Vestuário Corporativo", accent: "#d97706", bg: "#fffbeb" },
  { label: "Papelaria",           sub: "Identidade Visual",     accent: "#059669", bg: "#f0fdf4" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="port-title"
      className="py-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--blue)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Portfólio
            </p>
            <h2
              id="port-title"
              className="font-bold tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", color: "var(--text)" }}
            >
              Nossos trabalhos
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver portfólio completo no Instagram da Copygraf"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[var(--blue)] shrink-0"
            style={{ color: "var(--text-2)" }}
          >
            Ver no Instagram
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-label="Galeria de trabalhos"
        >
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-xl overflow-hidden h-40 flex items-end p-5 cursor-default"
              style={{ background: item.bg }}
            >
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: item.accent, opacity: .8, fontFamily: "var(--font-mono, monospace)" }}
                >
                  {item.sub}
                </p>
                <p className="font-bold text-base" style={{ color: item.accent }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar Instagram da Copygraf para ver mais trabalhos"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-[var(--blue-lt)] hover:text-[var(--blue)] border"
            style={{ borderColor: "var(--border)", color: "var(--text-2)", background: "white" }}
          >
            Ver portfólio completo no Instagram
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
