import { Link } from "react-router-dom"
import { profile, whatsappMessages, whatsappUrl } from "../../data/freelance"

export function FreelanceContact() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.1)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display mb-4 text-3xl font-bold text-white md:text-4xl">
          Tem uma ideia de app?
        </h2>
        <p className="mb-8 text-zinc-400">
          Me conta o contexto — respondo com escopo, prazo estimado e próximos passos.
        </p>
        <a
          href={whatsappUrl(whatsappMessages.quote)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-black transition hover:bg-emerald-400"
        >
          Chamar no WhatsApp
        </a>
        <p className="mt-6 text-sm text-zinc-600">{profile.phone}</p>
      </div>
    </section>
  )
}

export function FreelanceFooter() {
  return (
    <footer className="border-t border-white/6 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <Link to="/" className="transition hover:text-zinc-400">
          Ver portfólio completo (apps em escala) →
        </Link>
      </div>
    </footer>
  )
}
