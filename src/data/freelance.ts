import { profile } from "./projects"

export interface ServicePackage {
  id: string
  name: string
  tagline: string
  includes: string[]
  idealFor: string
  accent: { from: string; to: string; text: string }
}

export interface UseCaseHighlight {
  id: string
  question: string
  pitch: string
  bullets: string[]
  accent: { from: string; to: string; text: string }
}

export const freelancePortfolioRows = [
  ["jr-fabrica", "banco-inter", "avalam", "qrcode-casamento"],
  ["status-invest", "fully-soma"],
]

export const servicePackages: ServicePackage[] = [
  {
    id: "mvp",
    name: "App MVP",
    tagline: "Valide sua ideia com um app funcional.",
    includes: [
      "Um fluxo principal no iOS e Android",
      "Design limpo e focado no essencial",
      "Publicação ou build pronto para a loja",
    ],
    idealFor: "Founders, side projects, teste de mercado",
    accent: { from: "#6366f1", to: "#4f46e5", text: "#a5b4fc" },
  },
  {
    id: "app-simples",
    name: "App simples",
    tagline: "Seu app no ar, escopo fechado.",
    includes: [
      "App completo com escopo fechado",
      "Integração com API ou backend existente",
      "Suporte à publicação App Store e Google Play",
    ],
    idealFor: "Pequenos negócios, profissionais autônomos",
    accent: { from: "#10b981", to: "#047857", text: "#6ee7b7" },
  },
  {
    id: "feature",
    name: "Feature ou melhoria",
    tagline: "Evolua um app que já existe.",
    includes: [
      "Nova funcionalidade ou redesign de tela",
      "Correções e otimizações pontuais",
      "Code review e entrega documentada",
    ],
    idealFor: "Quem já tem app e precisa de reforço técnico",
    accent: { from: "#f59e0b", to: "#b45309", text: "#fcd34d" },
  },
  {
    id: "app-painel",
    name: "App + painel web",
    tagline: "Mobile na mão, gestão no browser.",
    includes: [
      "App iOS/Android + dashboard ou admin web",
      "Fluxo integrado entre mobile e web",
      "Ideal para operação, logística ou gestão",
    ],
    idealFor: "Negócios que precisam de app + backoffice",
    accent: { from: "#f97316", to: "#c2410c", text: "#fdba74" },
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Conversa",
    description: "Entendo o problema, o público e o que precisa existir no v1.",
  },
  {
    step: "02",
    title: "Proposta",
    description: "Escopo fechado, prazo estimado e entregas claras — sem surpresa.",
  },
  {
    step: "03",
    title: "Build",
    description: "Desenvolvimento com updates regulares. Você acompanha o progresso.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "App na loja ou entrega acordada, com orientação pós-lançamento.",
  },
]

export const useCaseHighlights: UseCaseHighlight[] = [
  {
    id: "mvp-rapido",
    question: "Tem uma ideia e não quer investir muito de uma vez?",
    pitch:
      "App com analytics, opção de PWA — entregue em poucos dias. Bora testar no mercado e adaptar.",
    bullets: [
      "PWA para validar rápido, sem depender só da loja",
      "Analytics desde o dia um",
      "Iteração com base em dados reais",
    ],
    accent: { from: "#6366f1", to: "#4f46e5", text: "#a5b4fc" },
  },
  {
    id: "automacao",
    question: "Trabalho manual na empresa te impede de focar no que importa?",
    pitch:
      "Automações e agilidade — menos planilha, repetição e retrabalho. Mais tempo pro que realmente move o negócio.",
    bullets: [
      "Fluxos digitais no lugar de processos manuais",
      "Apps e ferramentas sob medida pro seu dia a dia",
      "Entrega enxuta, escopo fechado",
    ],
    accent: { from: "#14b8a6", to: "#0f766e", text: "#5eead4" },
  },
]

export const freelanceEmailSubject = "Orçamento — app sob medida"

export function whatsappUrl(message: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`
}

export const whatsappMessages = {
  quote: "Olá! Gostaria de um orçamento para app sob medida.",
  freeConsultation: "Olá! Gostaria de agendar uma conversa gratuita sobre minha ideia de app.",
}

export const freeConsultation = {
  label: "Gratuito",
  title: "Análise da melhor solução para o seu negócio",
  description:
    "Conversa gratuita para entender sua ideia e te orientar no caminho mais inteligente — com foco em gastar o menor valor possível.",
  experience:
    "Experiência em startups e em empresas de larga escala, com milhares de funcionários. Ajudo você a entender qual solução faz sentido pro seu momento.",
  points: [
    "Qual formato faz sentido: app nativo, PWA ou outra abordagem",
    "O que entra no v1 e o que pode ficar para depois",
    "Estimativa de escopo antes de você investir",
  ],
}

export { profile }
