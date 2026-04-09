import { Service, SERVICES } from "@/app/lib/constants";
import {
  LayoutGrid,
  Type,
  Printer,
  Flag,
  Shirt,
  FileText,
} from "lucide-react";

const ICON_MAP: Record<Service["icon"], React.ReactNode> = {
  acm:       <LayoutGrid size={20} strokeWidth={1.5} />,
  letras:    <Type       size={20} strokeWidth={1.5} />,
  uv:        <Printer    size={20} strokeWidth={1.5} />,
  banner:    <Flag       size={20} strokeWidth={1.5} />,
  camiseta:  <Shirt      size={20} strokeWidth={1.5} />,
  papelaria: <FileText   size={20} strokeWidth={1.5} />,
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className="group relative overflow-hidden p-8 transition-colors duration-300 bg-[var(--surface)] hover:bg-[var(--surface-2)]"
      role="listitem"
    >
      <span
        className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background: "linear-gradient(135deg, #00c8f0 0%, #1847f0 50%, #f0005a 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="w-[42px] h-[42px] rounded-[8px] border flex items-center justify-center mb-5 transition-all duration-300"
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface-2)",
          color: "var(--muted)",
        }}
      >
        <span className="group-hover:[&>svg]:stroke-[var(--cyan)] transition-colors duration-300">
          {ICON_MAP[service.icon]}
        </span>
      </div>

      <h3
        className="mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.3rem",
          letterSpacing: ".04em",
        }}
      >
        {service.name}
      </h3>

      <p style={{ fontSize: ".86rem", color: "var(--muted)", lineHeight: 1.62 }}>
        {service.description}
      </p>

      <span
        className="inline-block mt-4 px-[0.65rem] py-[0.18rem] rounded-full border"
        style={{
          border: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: ".67rem",
          letterSpacing: ".08em",
          color: "var(--muted)",
        }}
      >
        {service.tag}
      </span>
    </article>
  );
}

export default function Services() {
  return (
    <section id="servicos" aria-labelledby="svc-title" className="py-24" style={{ background: "var(--surface)" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <p
              className="flex items-center gap-2 mb-3"
              style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".16em", color: "var(--cyan)" }}
            >
              <span className="w-5 h-px bg-[var(--cyan)]" aria-hidden="true" />
              Nossos Serviços
            </p>
            <h2
              id="svc-title"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: .97, letterSpacing: ".02em" }}
            >
              Tudo que sua <span className="grad-text">marca precisa</span>
            </h2>
          </div>
          <p style={{ fontSize: ".95rem", color: "var(--muted)", lineHeight: 1.72 }}>
            Atendemos do MEI que está abrindo seu negócio à grande empresa com campanha de
            comunicação visual de alto impacto. Qualidade premium em cada projeto,
            independente do volume.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-[18px] overflow-hidden"
          style={{ gap: "1px", background: "var(--border)" }}
          role="list"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
