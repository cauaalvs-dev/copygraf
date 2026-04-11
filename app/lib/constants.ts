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
  icon: string;
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
    description: "Revestimento em alumínio composto com corte a laser. Alta durabilidade e impacto visual garantido na entrada do seu negócio.",
    tag: "Comunicação Visual",
    icon: "acm",
  },
  {
    name: "Letras Caixa",
    description: "Letras em acrílico, PVC ou metal com ou sem iluminação LED. Identidade visual em volume real com acabamento de alto padrão.",
    tag: "Sinalização 3D",
    icon: "letras",
  },
  {
    name: "Impressão UV",
    description: "Impressão direta em superfícies rígidas com cores vivas e textura relevo. Resistência total a intempéries e fidelidade de cor.",
    tag: "Impressão Digital",
    icon: "uv",
  },
  {
    name: "Banners & Lonas",
    description: "Impressão em lona frontlit e blackout em alta resolução. Eventos corporativos, campanhas e ações externas com qualidade premium.",
    tag: "Grande Formato",
    icon: "banner",
  },
  {
    name: "Camisetas & Uniformes",
    description: "Sublimação, silk-screen e estampa digital. Uniformes corporativos, camisetas de evento e brindes com acabamento profissional.",
    tag: "Vestuário",
    icon: "camiseta",
  },
  {
    name: "Papelaria Corporativa",
    description: "Cartões de visita, flyers, folders e envelopes. Do design ao acabamento com verniz localizado — identidade visual completa.",
    tag: "Impressão Offset",
    icon: "papelaria",
  },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Briefing",
    description: "Envie o arquivo, referências ou uma ideia. Analisamos e retornamos com orçamento em até 24h.",
  },
  {
    number: "02",
    title: "Prova de Arte",
    description: "Prova digital com prova de cor calibrada. Você aprova ou solicita ajustes sem custo adicional.",
  },
  {
    number: "03",
    title: "Produção",
    description: "Equipamentos de última geração com mais de 20 anos de experiência. Fidelidade de cor garantida em cada peça.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Retirada no local ou entrega. Instalação com equipe própria para fachadas e comunicação visual externa.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MA",
    name: "Marcos A.",
    role: "Empresário · Caucaia-CE",
    rating: 5,
    text: "Precisei de banners para uma convenção com prazo curto e a Copygraf entregou antes do combinado. Qualidade impecável e atendimento humanizado.",
  },
  {
    initials: "JS",
    name: "Juliana S.",
    role: "Proprietária · Salão de Beleza",
    rating: 5,
    text: "Fiz minha fachada em ACM com eles. O resultado superou minhas expectativas — cores exatamente como o arquivo. Instalação muito profissional.",
  },
  {
    initials: "RL",
    name: "Ricardo L.",
    role: "Diretor · Empresa de TI",
    rating: 4,
    text: "Encomendei 200 camisetas para minha empresa e todos adoraram. Sublimação de qualidade, tecido bom e entrega no prazo combinado.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "f1",
    question: "Qual o prazo médio de entrega?",
    answer: "Cartões e panfletos saem em 1–2 dias úteis. Banners e lonas em 1–3 dias. Fachadas em ACM e Letras Caixa seguem cronograma acordado no orçamento. Atendemos urgências com serviço expresso.",
  },
  {
    id: "f2",
    question: "Vocês criam a arte ou preciso enviar pronta?",
    answer: "Você pode enviar o arquivo fechado (PDF, AI, CDR) ou solicitar a criação. Temos designer próprio que cria e adapta layouts. Criação de arte tem custo adicional informado no orçamento.",
  },
  {
    id: "f3",
    question: "Qual o formato de arquivo ideal para impressão?",
    answer: "PDF com sangria de 3mm, cores em CMYK e resolução mínima de 300dpi. Aceitamos AI, CDR e PSD. Para arquivos com fonte, sempre converta para curvas antes de enviar.",
  },
  {
    id: "f4",
    question: "Fazem instalação de fachadas e comunicação visual?",
    answer: "Sim. Temos equipe de instalação própria para fachadas em ACM, Letras Caixa e adesivos em geral. Atendemos Caucaia, Fortaleza e região metropolitana. Deslocamento e instalação inclusos no orçamento.",
  },
  {
    id: "f5",
    question: "Tem quantidade mínima para pedidos?",
    answer: "Atendemos desde pedidos unitários até tiragens industriais. O preço unitário melhora conforme o volume. Sem quantidade mínima para a maioria dos serviços.",
  },
];
