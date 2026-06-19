import { useState } from "react"
import { profile } from "../data/projects"

const photoSrc = `${import.meta.env.BASE_URL}tiago.jpg`

const highlights = [
  "7+ anos focado em mobile, do MVP à loja",
  "Experiência em startups e empresas de larga escala",
  "React Native, TypeScript e arquitetura de produto",
  "Acompanhamento pós-lançamento: métricas, bugs e analytics",
]

export function About() {
  const [failed, setFailed] = useState(false)

  return (
    <section id="sobre" className="relative scroll-mt-20 overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(99,102,241,0.1)_0%,_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <div className="relative mx-auto w-full max-w-xs">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/15 to-violet-500/10 blur-3xl" />
          {failed ? (
            <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900">
              <p className="px-6 text-center text-xs text-zinc-500">
                Adicione sua foto em <code className="text-zinc-400">public/tiago.jpg</code>
              </p>
            </div>
          ) : (
            <img
              src={photoSrc}
              alt={profile.name}
              onError={() => setFailed(true)}
              className="aspect-[4/5] w-full object-cover [mask-image:radial-gradient(ellipse_75%_80%_at_50%_45%,#000_55%,transparent_100%)]"
            />
          )}
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Sobre
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
            {profile.name}
          </h2>
          <p className="mt-1 text-lg text-zinc-400">{profile.title}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Engenheiro mobile especializado em React Native e TypeScript, com histórico de
            apps em produção usados por centenas de milhares de pessoas. Atuo do produto à
            entrega — pensando arquitetura, performance e o que move o negócio depois do
            lançamento.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/15">
                  <svg className="h-2.5 w-2.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
