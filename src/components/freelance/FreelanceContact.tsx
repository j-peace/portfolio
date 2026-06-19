import { profile, whatsappMessages, whatsappUrl } from "../../data/freelance"

export function FreelanceContact() {
  return (
    <section id="contato" className="scroll-mt-20 border-t border-white/6 px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-3xl border border-white/8 bg-white/3 p-8 md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl">
            Pare de perder tempo e dinheiro.
            <br />
            <span className="text-amber-400">A hora de agir é agora.</span>
          </h2>
          <p className="mt-3 text-slate-400">
            Seu concorrente já está investindo em tecnologia. Não fique para trás.
          </p>
        </div>
        <div className="shrink-0">
          <a
            href={whatsappUrl(whatsappMessages.transform)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-amber-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Quero transformar meu negócio →
          </a>
          <p className="mt-3 text-center text-xs text-slate-500">
            Apenas 3 novos projetos por mês.
          </p>
        </div>
      </div>
    </section>
  )
}

export function FreelanceFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#070b15] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <span className="font-display text-base font-bold text-white">Tiago</span>
            <span className="rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-xs text-amber-400">
              &lt;/&gt;
            </span>
            <span className="text-xs text-slate-400">Soluções Digitais</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Soluções digitais sob medida que transformam processos e impulsionam resultados.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-400">
          <a href={`tel:${profile.phone.replace(/\D/g, "")}`} className="transition hover:text-white">
            {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">
            {profile.email}
          </a>
          <div className="mt-1 flex gap-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-white">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/6 pt-6 text-xs text-slate-600">
        © {new Date().getFullYear()} Tiago Paz — Soluções Digitais
      </div>
    </footer>
  )
}
