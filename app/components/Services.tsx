"use client";

import { useEffect, useRef } from "react";
import { SERVICES } from "@/app/lib/constants";
import type { Service } from "@/app/lib/constants";
import { LayoutGrid, Type, Printer, Flag, Shirt, FileText } from "lucide-react";

const ICON_MAP: Record<Service["icon"], React.ReactNode> = {
  acm:       <LayoutGrid size={22} strokeWidth={1.5} />,
  letras:    <Type       size={22} strokeWidth={1.5} />,
  uv:        <Printer    size={22} strokeWidth={1.5} />,
  banner:    <Flag       size={22} strokeWidth={1.5} />,
  camiseta:  <Shirt      size={22} strokeWidth={1.5} />,
  papelaria: <FileText   size={22} strokeWidth={1.5} />,
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll<HTMLElement>(".opacity-0-init");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = "1"; io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="servicos" ref={ref} aria-labelledby="svc-title" className="py-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 opacity-0-init anim-fade-up">
          <div>
            <div className="section-label mb-3">Nossos Serviços</div>
            <h2 id="svc-title" className="font-extrabold tracking-tight text-[var(--text)]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
              O que oferecemos
            </h2>
          </div>
          <p className="text-sm text-[var(--muted)] max-w-xs text-right hidden md:block">
            Do MEI à grande empresa — qualidade premium em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {SERVICES.map((service, i) => (
            <article
              key={service.name}
              className={`svc-card group relative bg-white rounded-2xl border border-[var(--border)] p-7 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1 opacity-0-init anim-fade-up anim-delay-${Math.min(i + 1, 6)}`}
              role="listitem"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--blue)] group-hover:text-white"
                style={{ background: "var(--blue-lt)", color: "var(--blue)" }}
                aria-hidden="true"
              >
                {ICON_MAP[service.icon]}
              </div>
              <div>
                <h3 className="font-bold text-base mb-2 text-[var(--text)]">{service.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
              </div>
              <div className="mt-auto">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-[var(--bg)] text-[var(--muted)]">
                  {service.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
