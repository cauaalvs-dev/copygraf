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

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES: Service[] = [
  {
    name: "Fachadas em ACM",
    description: "Revestimento em alumínio composto com corte a laser. Alta durabilidade e impacto visual garantido.",
    tag: "Comunicação Visual",
    icon: "acm",
  },
  {
    name: "Letras Caixa",
    description: "Letras em acrílico, PVC ou metal com ou sem LED. Identidade em volume real com acabamento impecável.",
    tag: "Sinalização 3D",
    icon: "letras",
  },
  {
    name: "Impressão UV",
    description: "Impressão direta em superfícies rígidas. Cores vivas, textura relevo e resistência total a intempéries.",
    tag: "Impressão Digital",
    icon: "uv",
  },
  {
    name: "Banners & Lonas",
    description: "Lona frontlit e blackout em alta resolução. Do evento corporativo à campanha de rua.",
    tag: "Grande Formato",
    icon: "banner",
  },
  {
    name: "Camisetas & Uniformes",
    description: "Sublimação, silk-screen e DTF. Uniformes corporativos e brindes com acabamento profissional.",
    tag: "Vestuário",
    icon: "camiseta",
  },
  {
    name: "Papelaria Corporativa",
    description: "Cartões, flyers, folders e envelopes. Do design ao verniz localizado — identidade completa.",
    tag: "Impressão Offset",
    icon: "papelaria",
  },
];

export const STEPS: Step[] = [
  { number: "01", title: "Briefing",      description: "Envie o arquivo, referências ou uma ideia. Orçamento em até 24h." },
  { number: "02", title: "Prova de Arte", description: "Prova digital com prova de cor calibrada. Ajustes sem custo." },
  { number: "03", title: "Produção",      description: "+20 anos de experiência. Fidelidade de cor garantida em cada peça." },
  { number: "04", title: "Entrega",       description: "Retirada ou entrega. Instalação com equipe própria." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MA", name: "Marcos A.", role: "Empresário · Caucaia-CE", rating: 5,
    text: "Precisei de banners com prazo curto e a Copygraf entregou antes do combinado. Qualidade impecável.",
  },
  {
    initials: "JS", name: "Juliana S.", role: "Proprietária · Salão de Beleza", rating: 5,
    text: "Fiz minha fachada em ACM com eles. Cores exatamente como o arquivo. Instalação muito profissional.",
  },
  {
    initials: "RL", name: "Ricardo L.", role: "Diretor · Empresa de TI", rating: 4,
    text: "200 camisetas e todos adoraram. Sublimação de qualidade, tecido bom e entrega no prazo.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  { id: "f1", question: "Qual o prazo médio de entrega?",                answer: "Cartões e panfletos em 1–2 dias úteis. Banners em 1–3 dias. Fachadas em ACM seguem cronograma. Atendemos urgências com serviço expresso." },
  { id: "f2", question: "Vocês criam a arte?",                          answer: "Sim. Você pode enviar arquivo fechado (PDF, AI, CDR) ou solicitar criação. Temos designer próprio. Criação tem custo adicional informado no orçamento." },
  { id: "f3", question: "Qual o formato ideal para impressão?",         answer: "PDF com sangria de 3mm, CMYK e 300dpi mínimo. Aceitamos AI, CDR e PSD. Converta fontes para curvas antes de enviar." },
  { id: "f4", question: "Fazem instalação?",                            answer: "Sim. Equipe própria para ACM, Letras Caixa e adesivos. Atendemos Caucaia, Fortaleza e região metropolitana. Instalação inclusa no orçamento." },
  { id: "f5", question: "Tem quantidade mínima?",                       answer: "Sem quantidade mínima para a maioria dos serviços. O preço unitário melhora conforme o volume do pedido." },
];
