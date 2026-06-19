import { Link } from "react-router-dom"
import { profile, whatsappMessages, whatsappUrl } from "../../data/freelance"
import { StoreBadges } from "../StoreIcons"

export function FreelanceHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <StoreBadges />
        <h1 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Seu app no ar,
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            pronto pra testar.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          MVP, app simples ou feature pontual
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappUrl(whatsappMessages.quote)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            Quero um orçamento
          </a>
          <a
            href="#pacotes"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
          >
            Ver pacotes
          </a>
        </div>
        <p className="mt-8 text-sm text-zinc-600">
          {profile.name} · React Native · iOS & Android
          {" · "}
          <Link to="/" className="text-zinc-500 underline-offset-2 hover:text-zinc-400 hover:underline">
            Ver portfólio em escala →
          </Link>
        </p>
      </div>
    </section>
  )
}
