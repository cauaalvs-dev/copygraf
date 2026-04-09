import { PORTFOLIO_ITEMS, INSTAGRAM_URL } from "@/app/lib/constants";
import { LayoutGrid, Type, Printer, Shirt, FileText } from "lucide-react";
import type { PortfolioItem } from "@/app/lib/constants";

const ICON_MAP: Record<PortfolioItem["icon"], React.ReactNode> = {
  acm:       <LayoutGrid size={22} strokeWidth={1.5} />,
  letras:    <Type       size={22} strokeWidth={1.5} />,
  uv:        <Printer    size={22} strokeWidth={1.5} />,
  camiseta:  <Shirt      size={22} strokeWidth={1.5} />,
  papelaria: <FileText   size={22} strokeWidth={1.5} />,
};

const BG_MAP: Record<number, string> = {
  0: "linear-gradient(135deg, #091424, #0d2040, #1a3a6a)",
  1: "linear-gradient(135deg, #1a0812, #300e20, #4a1030)",
  2: "linear-gradient(180deg, #0d0d1a, #1a0e2e, #2d1652)",
  3: "linear-gradient(135deg, #091a10, #102a18, #1a4226)",
  4: "linear-gradient(135deg, #181808, #282808, #3c3c0a)",
};

const GRID_CLASSES: Record<number, string> = {
  0: "col-span-12 md:col-span-5  row-span-1",
  1: "col-span-12 md:col-span-3  row-span-1",
  2: "col-span-12 md:col-span-4  md:row-span-2",
  3: "col-span-12 md:col-span-3  row-span-1",
  4: "col-span-12 md:col-span-5  row-span-1",
};

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="port-title" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-10">
          <div>
            <p
              className="flex items-center gap-2 mb-3"
              style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".16em", color: "var(--cyan)" }}
            >
              <span className="w-5 h-px bg-[var(--cyan)]" aria-hidden="true" />
              Portfólio
            </p>
            <h2
              id="port-title"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: .97, letterSpacing: ".02em" }}
            >
              Projetos que <span className="grad-text">falam por si</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: ".95rem", color: "var(--muted)", lineHeight: 1.72, marginBottom: "1.25rem" }}>
              Atendemos empresas, agências, prefeituras e empreendedores individuais com o mesmo
              nível de atenção e qualidade. Veja parte do nosso trabalho.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver portfólio completo no Instagram da Copygraf"
              className="inline-flex items-center gap-2 px-6 py-[0.8rem] rounded-full font-semibold transition-all duration-200 hover:-translate-y-[2px] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[rgba(0,200,240,0.05)]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                background: "rgba(255,255,255,.04)",
              }}
            >
              Ver no Instagram
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-12 auto-rows-[240px] gap-4"
          aria-label="Galeria de trabalhos"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className={`group relative rounded-[10px] overflow-hidden border cursor-default ${GRID_CLASSES[index]}`}
              style={{ border: "1px solid var(--border)" }}
            >
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-65"
                style={{ background: BG_MAP[index] }}
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 transition-transform duration-500 group-hover:scale-[1.03]">
                <div
                  className="w-11 h-11 rounded-[8px] flex items-center justify-center mb-1"
                  style={{
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.1)",
                    color: "rgba(255,255,255,.5)",
                  }}
                  aria-hidden="true"
                >
                  {ICON_MAP[item.icon]}
                </div>
                <div
                  className="text-center"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", letterSpacing: ".06em" }}
                >
                  {item.label}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--muted)", letterSpacing: ".1em" }}>
                  {item.sub}
                </div>
              </div>

              <div
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: ".1em", color: "var(--cyan)" }}>
                  Ver Projetos
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
