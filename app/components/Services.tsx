import { SERVICES } from "@/app/lib/constants";
import type { Service } from "@/app/lib/constants";
import {
  LayoutGrid, Type, Printer,
  Flag, Shirt, FileText,
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
      className="group bg-white rounded-xl border p-6 flex flex-col gap-4 transition-all duration-200 hover:border-[var(--blue)] hover:shadow-[0_4px_20px_rgba(26,86,219,.08)]"
      style={{ borderColor: "var(--border)" }}
      role="listitem"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-[var(--blue)] group-hover:text-white"
        style={{ background: "var(--blue-lt)", color: "var(--blue)" }}
        aria-hidden="true"
      >
        {ICON_MAP[service.icon]}
      </div>

      <div>
        <h3 className="font-semibold text-base mb-1.5" style={{ color: "var(--text)" }}>
          {service.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {service.description}
        </p>
      </div>

      <div className="mt-auto">
        <span
          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md"
          style={{ background: "var(--bg)", color: "var(--muted)" }}
        >
          {service.tag}
        </span>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="svc-title"
      className="py-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--blue)", fontFamily: "var(--font-mono, monospace)" }}
            >
              Nossos Serviços
            </p>
            <h2
              id="svc-title"
              className="font-bold tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", color: "var(--text)" }}
            >
              O que oferecemos
            </h2>
          </div>
          <p className="text-sm max-w-md text-right hidden md:block" style={{ color: "var(--muted)" }}>
            Do MEI à grande empresa. Qualidade premium em cada projeto, independente do volume.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
