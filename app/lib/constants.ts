export const WHATSAPP_URL =
  "https://wa.me/5585323899240?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export const INSTAGRAM_URL = "https://www.instagram.com/copygrafgraficadigital/";
export const LINKTREE_URL  = "https://linktr.ee/copygrafoficial";
export const PHONE_HREF    = "tel:+558532389240";
export const PHONE_DISPLAY = "(85) 3238-9240";
export const ADDRESS       = "R. Poebla, 456 — Parque Guadalajara (Jurema), Caucaia — CE, 61650-290";

export interface Service {
  name: string;
  description: string;
  tag: string;
  icon: "acm" | "letras" | "uv" | "banner" | "camiseta" | "papelaria";
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  label: string;
  sub: string;
  icon: "acm" | "letras" | "uv" | "camiseta" | "papelaria";
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  gradient: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES: Service[] = [
  {
    name: "Fachadas em ACM",
    description:
      "Revestimento em alumínio composto com corte a laser e acabamento de alta durabilidade. Impacto visual garantido na fachada do seu negócio.",
    tag: "COMUNICAÇÃO VISUAL",
    icon: "acm",
  },
  {
    name: "Letras Caixa",
    description:
      "Letras em acrílico, PVC ou metal com ou sem iluminação em LED. Identidade da sua marca em volume real, com acabamento impecável.",
    tag: "SINALIZAÇÃO 3D",
    icon: "letras",
  },
  {
    name: "Impressão UV",
    description:
      "Impressão direta em qualquer superfície rígida. Cores vivas, textura relevo e resistência total a intempéries, sem perder fidelidade de cor.",
    tag: "IMPRESSÃO DIGITAL",
    icon: "uv",
  },
  {
    name: "Banners & Lonas",
    description:
      "Impressão em lona frontlit e blackout, banners em alta resolução. Do evento corporativo à campanha de rua, entregamos no prazo.",
    tag: "GRANDE FORMATO",
    icon: "banner",
  },
  {
    name: "Camisetas & Uniformes",
    description:
      "Sublimação, silk-screen e estampa digital. Uniformes corporativos, camisetas de evento e brindes personalizados com acabamento profissional.",
    tag: "VESTUÁRIO",
    icon: "camiseta",
  },
  {
    name: "Papelaria Corporativa",
    description:
      "Cartões de visita, flyers, folders e envelopes. Do design gráfico ao acabamento com verniz localizado, identidade visual completa.",
    tag: "IMPRESSÃO OFFSET",
    icon: "papelaria",
  },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Envie o arquivo fechado, referências ou uma ideia. Analisamos e retornamos com orçamento em até 24h.",
  },
  {
    number: "02",
    title: "Prova de Arte",
    description:
      "Enviamos prova digital com prova de cor calibrada. Você aprova ou solicita ajustes sem custo adicional.",
  },
  {
    number: "03",
    title: "Produção",
    description:
      "Equipamentos de última geração operados por profissionais com mais de 20 anos de experiência. Fidelidade de cor garantida.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Retirada no local ou entrega. Para comunicação visual externa, realizamos a instalação com equipe própria.",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { label: "Fachadas ACM",  sub: "COMUNICAÇÃO VISUAL",   icon: "acm" },
  { label: "Letreiros 3D",  sub: "SINALIZAÇÃO",          icon: "letras" },
  { label: "Impressão UV",  sub: "DIGITAL PREMIUM",      icon: "uv" },
  { label: "Uniformes",     sub: "VESTUÁRIO CORPORATIVO", icon: "camiseta" },
  { label: "Papelaria",     sub: "IDENTIDADE VISUAL",    icon: "papelaria" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MA",
    name: "Marcos A.",
    role: "EMPRESÁRIO · CAUCAIA-CE",
    rating: 5,
    text: "Precisei de banners para uma convenção com prazo curto e a Copygraf entregou antes do combinado. Qualidade impecável e atendimento humanizado.",
    gradient: "linear-gradient(135deg, #00c8f0, #1847f0)",
  },
  {
    initials: "JS",
    name: "Juliana S.",
    role: "PROPRIETÁRIA · SALÃO DE BELEZA",
    rating: 5,
    text: "Fiz minha fachada em ACM com eles. O resultado superou minhas expectativas — cores exatamente como o arquivo. Equipe de instalação muito profissional.",
    gradient: "linear-gradient(135deg, #f0005a, #f5d000)",
  },
  {
    initials: "RL",
    name: "Ricardo L.",
    role: "DIRETOR · EMPRESA DE TI",
    rating: 4,
    text: "Encomendei 200 camisetas para minha empresa e todos os funcionários amaram o resultado. Sublimação de qualidade, tecido bom e entrega no prazo.",
    gradient: "linear-gradient(135deg, #1847f0, #00c8f0)",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "fa1",
    question: "Qual o prazo médio de entrega?",
    answer:
      "Depende do serviço e da quantidade. Cartões de visita e panfletos saem em 1–2 dias úteis. Banners e lonas em 1–3 dias. Fachadas em ACM e Letras Caixa seguem cronograma acordado no orçamento. Atendemos urgências com serviço expresso.",
  },
  {
    id: "fa2",
    question: "Vocês criam a arte ou preciso enviar pronta?",
    answer:
      "Você pode enviar o arquivo fechado (PDF, AI, CDR) ou solicitar a criação da arte. Temos designer próprio que cria e adapta layouts. Criação de arte tem custo adicional informado no orçamento.",
  },
  {
    id: "fa3",
    question: "Qual o formato de arquivo ideal para impressão?",
    answer:
      "PDF com sangria de 3mm, cores em CMYK e resolução mínima de 300dpi. Aceitamos AI, CDR e PSD. Para arquivos com fonte, sempre converta para curvas. Dúvidas? Envie pelo WhatsApp e verificamos para você.",
  },
  {
    id: "fa4",
    question: "Fazem instalação de fachadas e comunicação visual?",
    answer:
      "Sim. Temos equipe de instalação própria para fachadas em ACM, Letras Caixa, adesivos e comunicação visual em geral. Atendemos Caucaia, Fortaleza e região metropolitana. Deslocamento e instalação são inclusos no orçamento.",
  },
  {
    id: "fa5",
    question: "Tem quantidade mínima para pedidos?",
    answer:
      "Atendemos desde pedidos unitários até tiragens industriais. O preço unitário varia conforme a quantidade. Sem quantidade mínima para a maioria dos serviços.",
  },
];
