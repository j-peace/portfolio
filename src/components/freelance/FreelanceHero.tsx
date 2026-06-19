import { useState } from "react"
import { whatsappMessages, whatsappUrl } from "../../data/freelance"
import { TiagoPhoto } from "./TiagoPhoto"

const photoSrc = `${import.meta.env.BASE_URL}tiago.jpg`

function MobilePhotoIntro() {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <div className="mt-6 lg:hidden">
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <img
          src={photoSrc}
          alt="Tiago Paz"
          onError={() => setFailed(true)}
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </div>
      <p className="mt-3 text-sm text-slate-400">
        <span className="font-semibold text-white">Tiago Paz</span> — desenvolvo apps,
        sites e sistemas sob medida para empresas que querem crescer.
      </p>
    </div>
  )
}

export function FreelanceHero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-16 pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Soluções digitais sob medida
          </span>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Seu negócio precisa{" "}
            <span className="text-amber-400">vender mais</span>, automatizar processos ou{" "}
            <span className="text-amber-400">fortalecer sua presença digital</span>?
          </h1>
          <MobilePhotoIntro />
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
            Criamos sites, landing pages, aplicativos e sistemas sob medida para empresas
            que querem crescer com tecnologia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(whatsappMessages.diagnostic)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Quero uma análise gratuita →
            </a>
            <a
              href="#solucoes"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            Vagas limitadas para novos projetos este mês.
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/10 to-blue-500/10 blur-3xl" />
          <TiagoPhoto
            rounded="rounded-none"
            className="w-full [mask-image:radial-gradient(ellipse_70%_75%_at_50%_45%,#000_55%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  )
}
