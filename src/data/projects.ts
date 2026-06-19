import {
  fabricaScreenshot,
  fitEnergiaLeft,
  fitEnergiaMid,
  fitEnergiaRight,
  fullyLeft,
  fullyMid,
  fullyRight,
  interScreenshot,
  qrcodeCasamentoScreenshot,
  statusInvestLeft,
  statusInvestMid,
  statusInvestRight,
  tempConverterPhoto,
} from "./assets"

export interface ProjectScreenshot {
  src?: string
  alt: string
}

export interface ProjectStat {
  value: string
  label: string
}

export interface ProjectAccent {
  from: string
  to: string
  glow: string
  text: string
}

export interface Project {
  id: string
  name: string
  category: string
  tagline: string
  pitch: string
  stats: ProjectStat[]
  accent: ProjectAccent
  screenshots: ProjectScreenshot[]
  displayMode?: "phone" | "photo" | "screenshot"
  links?: {
    appStore?: string
    playStore?: string
    github?: string
    website?: string
  }
  featured?: boolean
  freelanceOnly?: boolean
}

export const profile = {
  name: "Tiago Paz",
  title: "Senior React Native Engineer",
  email: "tiagopaz.gd@gmail.com",
  phone: "+55 31 98267-3852",
  whatsapp: "5531982673852",
  linkedin: "https://linkedin.com/in/tiago-paz-91184b138",
  github: "https://github.com/j-peace",
}

export const heroStats = [
  { value: "7+", label: "anos mobile" },
  { value: "100k+", label: "usuários em produção" },
  { value: "6", label: "apps no portfólio" },
  { value: "iOS + Android", label: "do MVP à loja" },
]

export const postLaunchFocus = [
  {
    title: "App no mercado",
    description: "Acompanho de perto o comportamento do app após o lançamento — não desapareço depois do deploy.",
  },
  {
    title: "Métricas de bugs",
    description: "Crashlytics e monitoramento de estabilidade para caçar crashes e corrigir antes que virem churn.",
  },
  {
    title: "Analytics & marketing",
    description: "Dados de uso e funil para apoiar decisões de produto, growth e campanhas de marketing.",
  },
]

export const projects: Project[] = [
  {
    id: "status-invest",
    name: "Status Invest",
    category: "Finanças",
    tagline: "Investimentos na palma da mão — com IA.",
    pitch:
      "App de referência no mercado financeiro brasileiro. Interface multilíngue, tema adaptativo e agente de IA integrado para sugestões personalizadas de carteira.",
    stats: [
      { value: "100k+", label: "usuários" },
      { value: "4", label: "idiomas" },
      { value: "IA", label: "agente integrado" },
    ],
    accent: {
      from: "#0ea5e9",
      to: "#0369a1",
      glow: "rgba(14, 165, 233, 0.35)",
      text: "#7dd3fc",
    },
    featured: true,
    screenshots: [
      { src: statusInvestLeft, alt: "Carteira — Status Invest" },
      { src: statusInvestMid, alt: "Dashboard — Status Invest" },
      { src: statusInvestRight, alt: "Agente IA — Status Invest" },
    ],
  },
  {
    id: "fully-soma",
    name: "Fully SOMA",
    category: "Saúde & Bem-estar",
    tagline: "Saúde conectada. Do pulso ao app.",
    pitch:
      "Plataforma de wellness com integração nativa a dispositivos de saúde, monitoramento de atividades físicas e arquitetura de última geração em React Native.",
    stats: [
      { value: "RN 0.83", label: "New Architecture" },
      { value: "Health", label: "Apple & Google" },
      { value: "Multi", label: "idiomas & targets" },
    ],
    accent: {
      from: "#10b981",
      to: "#047857",
      glow: "rgba(16, 185, 129, 0.35)",
      text: "#6ee7b7",
    },
    featured: true,
    screenshots: [
      { src: fullyLeft, alt: "Home — Fully SOMA" },
      { src: fullyMid, alt: "Saúde — Fully SOMA" },
      { src: fullyRight, alt: "Atividades — Fully SOMA" },
    ],
  },
  {
    id: "fit-energia",
    name: "Fit Energia",
    category: "Energia",
    tagline: "Controle total do seu consumo energético.",
    pitch:
      "Experiência mobile completa para gestão de energia — do design system ao backend, liderando equipe e entregando features de ponta a ponta.",
    stats: [
      { value: "iOS + Android", label: "nativo" },
      { value: "4 devs", label: "liderados" },
      { value: "BFF", label: "Rails integrado" },
    ],
    accent: {
      from: "#f59e0b",
      to: "#b45309",
      glow: "rgba(245, 158, 11, 0.35)",
      text: "#fcd34d",
    },
    featured: true,
    screenshots: [
      { src: fitEnergiaLeft, alt: "Início — Fit Energia" },
      { src: fitEnergiaMid, alt: "Consumo — Fit Energia" },
      { src: fitEnergiaRight, alt: "Perfil — Fit Energia" },
    ],
  },
  {
    id: "jr-fabrica",
    name: "Clientes Mobile",
    category: "Fábrica de Software",
    tagline: "Monetização e onboarding sem fricção.",
    pitch:
      "Apps white-label com deep links, universal links e pagamentos nativos — Apple Pay e Google Wallet integrados de ponta a ponta.",
    stats: [
      { value: "IAP", label: "monetização" },
      { value: "Deep Links", label: "onboarding" },
      { value: "Multi", label: "clientes" },
    ],
    accent: {
      from: "#a855f7",
      to: "#6b21a8",
      glow: "rgba(168, 85, 247, 0.35)",
      text: "#d8b4fe",
    },
    displayMode: "screenshot",
    screenshots: [{ src: fabricaScreenshot, alt: "App cliente — JR Fábrica" }],
  },
  {
    id: "banco-inter",
    name: "Expedição Inter",
    category: "Logística",
    tagline: "Operação logística em tempo real.",
    pitch:
      "Solução mobile e web para separação e expedição de pedidos — dashboards ao vivo conectados a dispositivos físicos no chão de fábrica.",
    stats: [
      { value: "Real-time", label: "dashboards" },
      { value: "IoT", label: "dispositivos" },
      { value: "Full-stack", label: "entrega" },
    ],
    accent: {
      from: "#f97316",
      to: "#c2410c",
      glow: "rgba(249, 115, 22, 0.35)",
      text: "#fdba74",
    },
    displayMode: "screenshot",
    screenshots: [{ src: interScreenshot, alt: "Expedição — Banco Inter" }],
  },
  {
    id: "avalam",
    name: "Temp Converter",
    category: "Open Source · watchOS",
    tagline: "Temperatura no pulso. Literalmente.",
    pitch:
      "App nativo para Apple Watch com geolocalização e backend Rails — do MVP à v2, contribuição open source no Hacktoberfest 2025.",
    stats: [
      { value: "watchOS", label: "nativo Swift" },
      { value: "Open Source", label: "Avalam.org" },
      { value: "Geo", label: "localização" },
    ],
    accent: {
      from: "#ef4444",
      to: "#991b1b",
      glow: "rgba(239, 68, 68, 0.35)",
      text: "#fca5a5",
    },
    links: {
      github: "https://github.com/j-peace/TemperatureConverter",
    },
    displayMode: "photo",
    screenshots: [{ src: tempConverterPhoto, alt: "Apple Watch — Temp Converter" }],
  },
  {
    id: "qrcode-casamento",
    name: "Agape — QR Casamento",
    category: "Eventos",
    tagline: "Leitura de QR code para casamento.",
    pitch:
      "App para controle de convidados em tempo real — leitura de QR na porta, contador de chegadas e painel ao vivo para o casamento.",
    stats: [
      { value: "QR Code", label: "check-in" },
      { value: "Tempo real", label: "convidados" },
      { value: "Eventos", label: "casamentos" },
    ],
    accent: {
      from: "#d4a574",
      to: "#92400e",
      glow: "rgba(212, 165, 116, 0.35)",
      text: "#fcd34d",
    },
    displayMode: "screenshot",
    freelanceOnly: true,
    screenshots: [{ src: qrcodeCasamentoScreenshot, alt: "Painel de convidados — Agape Casamento" }],
  },
]
