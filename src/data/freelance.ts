import { profile } from "./projects"

export interface Solution {
  id: string
  need: string
  title: string
  description: string
  accent: string
}

export interface Benefit {
  title: string
  description: string
}

export interface CaseResult {
  id: string
  client: string
  metric: string
  direction: "up" | "down"
  description: string
}

export const whatsappMessages = {
  specialist: "Olá! Quero falar com um especialista sobre uma solução para o meu negócio.",
  diagnostic: "Olá! Quero meu diagnóstico gratuito do meu negócio.",
  transform: "Olá! Quero transformar meu negócio com software sob medida.",
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`
}

export const commercialNav = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export const solutions: Solution[] = [
  {
    id: "vender-mais",
    need: "Vender mais",
    title: "Landing Pages e Sites Comerciais",
    description:
      "Páginas estratégicas que atraem, convencem e transformam visitantes em clientes.",
    accent: "#a855f7",
  },
  {
    id: "presenca-digital",
    need: "Ter presença digital",
    title: "Sites Institucionais",
    description:
      "Sites profissionais que transmitem credibilidade e fortalecem sua marca no mercado.",
    accent: "#3b82f6",
  },
  {
    id: "vender-online",
    need: "Vender online",
    title: "Lojas Virtuais e E-Commerce",
    description:
      "Estruturas completas para vender seus produtos ou serviços na internet com segurança e performance.",
    accent: "#10b981",
  },
  {
    id: "automatizar",
    need: "Automatizar processos",
    title: "Sistemas e Automações",
    description:
      "Elimine tarefas repetitivas, reduza erros e aumente a produtividade da sua equipe.",
    accent: "#f59e0b",
  },
  {
    id: "produtos-digitais",
    need: "Criar produtos digitais",
    title: "Apps e Plataformas Sob Medida",
    description:
      "Aplicativos e sistemas personalizados para resolver desafios específicos do seu negócio.",
    accent: "#0ea5e9",
  },
]

export const benefits: Benefit[] = [
  {
    title: "Mais vendas",
    description: "Páginas e sistemas que convertem melhor e geram mais resultados.",
  },
  {
    title: "Mais produtividade",
    description: "Automação de processos para sua equipe focar no que realmente importa.",
  },
  {
    title: "Menos custos",
    description: "Reduza retrabalho, erros e desperdícios que impactam seu lucro.",
  },
  {
    title: "Mais autoridade",
    description: "Presença digital profissional que transmite confiança e credibilidade.",
  },
  {
    title: "Escalabilidade",
    description: "Soluções que crescem junto com seu negócio de forma sustentável.",
  },
]

export const caseResults: CaseResult[] = [
  {
    id: "cursos",
    client: "Empresa de Cursos Online",
    metric: "+37%",
    direction: "up",
    description: "aumento na taxa de conversão após nova landing page",
  },
  {
    id: "logistica",
    client: "Empresa de Logística",
    metric: "-70%",
    direction: "down",
    description: "no tempo gasto com processos manuais e retrabalho",
  },
  {
    id: "esportes",
    client: "Loja de Artigos Esportivos",
    metric: "+55%",
    direction: "up",
    description: "de aumento nas vendas nos primeiros 3 meses",
  },
]

export const aboutTiago = {
  title: "Seu projeto não será entregue para um time aleatório.",
  description:
    "Acompanho pessoalmente cada projeto, do diagnóstico à entrega, garantindo que a solução faça sentido para o seu negócio e gere resultado de verdade.",
  checklist: [
    "Desenvolvimento 100% sob medida",
    "Visão técnica + visão de negócio",
    "Acompanhamento próximo e transparente",
  ],
  card: {
    name: "Tiago Paz",
    role: "Desenvolvedor Full Stack",
    stats: [
      "+5 anos de experiência",
      "+100 projetos entregues",
      "Foco em performance e resultado",
    ],
  },
}

export const diagnostic = {
  title: "Diagnóstico gratuito + proposta personalizada",
  description:
    "Entenda onde estão os gargalos e oportunidades do seu negócio. Em 30 minutos, você recebe uma análise completa.",
  items: [
    "Análise de processos",
    "Identificação de oportunidades",
    "Sugestões de melhoria",
    "Proposta personalizada",
  ],
  note: "Sem compromisso. 100% gratuito.",
}

export { profile }
