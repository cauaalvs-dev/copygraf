import Image from "next/image";
import { WHATSAPP_URL } from "@/app/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute rounded-full"
          style={{
            width: 560, height: 560,
            background: "#00c8f0",
            filter: "blur(110px)",
            opacity: 0.14,
            top: -80, left: -180,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 480, height: 480,
            background: "#f0005a",
            filter: "blur(110px)",
            opacity: 0.14,
            bottom: -80, right: -120,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 260, height: 260,
            background: "#f5d000",
            filter: "blur(110px)",
            opacity: 0.14,
            top: "46%", left: "48%",
            transform: "translate(-50%,-50%)",
          }}
        />
        {/* grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-[0.85rem] py-[0.3rem] rounded-full border mb-6"
              style={{
                borderColor: "rgba(0,200,240,.28)",
                background: "rgba(0,200,240,.07)",
                fontFamily: "var(--font-mono)",
                fontSize: ".7rem",
                color: "var(--cyan)",
                letterSpacing: ".1em",
              }}
            >
              <span
                className="w-[6px] h-[6px] rounded-full"
                style={{
                  background: "var(--cyan)",
                  boxShadow: "0 0 6px var(--cyan)",
                  animation: "badge-blink 2.4s ease-in-out infinite",
                }}
                aria-hidden="true"
              />
              ONLINE · CAUCAIA, CE · DESDE 2004
            </div>

            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.2rem, 6.5vw, 5.6rem)",
                lineHeight: 0.93,
                letterSpacing: ".02em",
              }}
            >
              IMPRESSÃO
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #00c8f0 0%, #1847f0 50%, #f0005a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                QUE GERA
                <br />
                RESULTADO
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  color: "var(--muted)",
                }}
              >
                de verdade.
              </span>
            </h1>

            <p className="text-[var(--muted)] leading-[1.72] max-w-[480px] mb-9" style={{ fontSize: "1.05rem" }}>
              Da <strong className="text-[var(--text)] font-medium">fachada em ACM</strong> ao{" "}
              <strong className="text-[var(--text)] font-medium">cartão de visita</strong>, do{" "}
              <strong className="text-[var(--text)] font-medium">banner de evento</strong> à{" "}
              <strong className="text-[var(--text)] font-medium">camiseta corporativa</strong> —
              comunicação visual com precisão técnica e acabamento premium para empresas que não
              aceitam menos.
            </p>

            <div className="flex flex-wrap gap-4 mb-11">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedir orçamento pelo WhatsApp"
                className="inline-flex items-center gap-2 px-8 py-[0.9rem] rounded-full font-semibold text-white transition-all duration-200 hover:-translate-y-[2px] hover:opacity-90 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #25d366, #128c4e)",
                  boxShadow: "0 6px 28px rgba(37,211,102,.22)",
                  fontSize: ".98rem",
                }}
              >
                Pedir Orçamento Agora
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-[0.8rem] rounded-full font-semibold transition-all duration-200 hover:-translate-y-[2px] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:bg-[rgba(0,200,240,0.05)]"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  background: "rgba(255,255,255,.04)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Ver Portfólio
              </a>
            </div>

            <div className="flex flex-wrap gap-9" role="list">
              {[
                { num: "+20",  label: "Anos de Mercado" },
                { num: "4.3★", label: "338 Avaliações Google" },
                { num: "100%", label: "Projetos Entregues" },
              ].map(({ num, label }) => (
                <div key={label} role="listitem">
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      letterSpacing: ".02em",
                      background: "linear-gradient(135deg, #00c8f0 0%, #1847f0 50%, #f0005a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: ".7rem",
                      color: "var(--muted)",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div aria-hidden="true" className="hidden md:flex justify-center items-center relative">
            <div
              className="relative"
              style={{ width: "clamp(280px,38vw,440px)", height: "clamp(280px,38vw,440px)" }}
            >
              {/* spinning ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  padding: 3,
                  background:
                    "conic-gradient(from 0deg, #00c8f0, #1847f0, #f0005a, #f5d000, #00c8f0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  animation: "spin-ring 9s linear infinite",
                }}
              />
              <div
                className="absolute rounded-full flex flex-col items-center justify-center gap-2"
                style={{
                  inset: 3,
                  background: "radial-gradient(circle at 38% 38%, #171d2a, #07090e)",
                }}
              >
                <Image
                  src="/logo-copygraf.png"
                  alt=""
                  width={280}
                  height={200}
                  className="w-[70%]"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(0,200,240,.28))",
                    animation: "float-logo 5.5s ease-in-out infinite",
                  }}
                  priority
                />
                <div className="flex gap-[0.4rem] mt-1">
                  {[
                    { bg: "#00b4d8", title: "Cyan" },
                    { bg: "#f0005a", title: "Magenta" },
                    { bg: "#f5d000", title: "Yellow" },
                    { bg: "#1a1a1a", title: "Key", border: "1px solid #2a2a2a" },
                  ].map(({ bg, title, border }) => (
                    <div
                      key={title}
                      className="w-6 h-6 rounded-full"
                      style={{ background: bg, border }}
                      title={title}
                    />
                  ))}
                </div>
              </div>
            </div>

            {[
              { label: "Entrega Expressa", style: { top: "9%", left: "-10%", animationDelay: "0s" } },
              { label: "Arte Inclusa",     style: { bottom: "18%", right: "-8%", animationDelay: ".7s" } },
              { label: "Prova de Cor",     style: { top: "60%", left: "-12%", animationDelay: "1.4s" } },
            ].map(({ label, style }) => (
              <div
                key={label}
                className="absolute px-4 py-2 rounded-[10px] backdrop-blur-md"
                style={{
                  background: "rgba(13,16,24,.92)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 6px 24px rgba(0,0,0,.4)",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".73rem",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                  animation: "float-tag 4s ease-in-out infinite",
                  ...style,
                }}
              >
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
