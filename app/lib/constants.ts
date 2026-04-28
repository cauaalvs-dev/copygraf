export const INSTAGRAM_URL = "https://www.instagram.com/copygrafgraficadigital/";
export const LINKTREE_URL  = "https://linktr.ee/copygrafoficial";

// Gráfica / Design / Comunicação Visual — WhatsApp
export const PHONE_GRAFICA_HREF    = "tel:+558585989533";
export const PHONE_GRAFICA_DISPLAY = "(85) 8598-9533";
export const WHATSAPP_GRAFICA_URL  =
  "https://wa.me/558585989533?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20gr%C3%A1fica.";

// Papelaria / Geral — fixo
export const PHONE_PAPELARIA_HREF    = "tel:+558532389240";
export const PHONE_PAPELARIA_DISPLAY = "(85) 3238-9240";
export const WHATSAPP_PAPELARIA_URL  =
  "https://wa.me/558532389240?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

// Compat — usado no WhatsApp FAB e botões genéricos (aponta para gráfica por padrão)
export const WHATSAPP_URL  = WHATSAPP_GRAFICA_URL;
export const PHONE_HREF    = PHONE_GRAFICA_HREF;
export const PHONE_DISPLAY = PHONE_GRAFICA_DISPLAY;
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
    name: "Fachadas & Comunicação Visual",
    description: "ACM, letras caixa, placas e sinalização. Instalação com equipe própria.",
    tag: "Comunicação Visual",
    icon: "acm",
  },
  {
    name: "Envelopamento & Adesivos",
    description: "Frotas, vitrines, paredes e fachadas. Adesivos que cobrem tudo.",
    tag: "Adesivação",
    icon: "banner",
  },
  {
    name: "Impressão UV",
    description: "Cores que não desbotam. Direto em acrílico, PVC, madeira e mais.",
    tag: "Impressão Digital",
    icon: "uv",
  },
  {
    name: "Banners & Lonas",
    description: "Evento amanhã? A gente entrega hoje. Alta resolução, qualquer tamanho.",
    tag: "Grande Formato",
    icon: "banner",
  },
  {
    name: "DTF Têxtil & Sublimação",
    description: "Camisetas, uniformes e brindes. Peça única ou kit corporativo completo.",
    tag: "Vestuário",
    icon: "camiseta",
  },
  {
    name: "Papelaria Corporativa",
    description: "Cartão, flyer, folder, envelope. Identidade completa do primeiro contato.",
    tag: "Impressão Offset",
    icon: "papelaria",
  },
];

export const STEPS: Step[] = [
  { number: "01", title: "Manda o pedido",    description: "Arquivo, referência ou só uma ideia. Orçamento em até 24h — sem enrolação." },
  { number: "02", title: "Aprovação rápida",  description: "Prova digital na hora. Ajuste o quanto precisar, sem custo extra." },
  { number: "03", title: "A gente produz",    description: "+20 anos fazendo certo. Cor fiel, acabamento impecável, toda vez." },
  { number: "04", title: "Entrega ou retira", description: "Você escolhe. Instalação com equipe própria em Caucaia e região." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "MA", name: "Marcos A.", role: "Empresário · Caucaia-CE", rating: 5,
    text: "Precisei de banners pra entregar no mesmo dia. A Copygraf fez e entregou antes do prazo. Não acreditei.",
  },
  {
    initials: "JS", name: "Juliana S.", role: "Proprietária · Salão de Beleza", rating: 5,
    text: "Fachada em ACM perfeita. Cor exatamente como o arquivo, instalação no dia combinado. Recomendo demais.",
  },
  {
    initials: "RL", name: "Ricardo L.", role: "Diretor · Empresa de TI", rating: 4,
    text: "200 camisetas pra evento corporativo. Qualidade ótima, sublimação perfeita e entregaram antes do prazo.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  { id: "f1", question: "Preciso pra hoje. Dá?",                      answer: "Na maioria dos casos, sim. Banners e impressos pequenos saem no mesmo dia. Fale pelo WhatsApp e a gente vê o que dá pra fazer." },
  { id: "f2", question: "Não tenho arquivo. Como faço?",               answer: "A gente cria pra você. Manda uma ideia, referência ou só o nome da empresa. Nosso designer resolve. Criação tem custo adicional informado no orçamento." },
  { id: "f3", question: "Qual formato devo enviar?",                   answer: "PDF com sangria de 3mm, CMYK e 300dpi. Aceitamos AI, CDR e PSD também. Converta as fontes pra curva antes de mandar." },
  { id: "f4", question: "Vocês instalam a fachada?",                   answer: "Sim, com equipe própria. Atendemos Caucaia, Fortaleza e região metropolitana. Instalação já inclusa no orçamento." },
  { id: "f5", question: "Tem quantidade mínima?",                      answer: "Não. Pode pedir uma peça só. O preço por unidade melhora conforme o volume, mas a gente atende qualquer quantidade." },
];
