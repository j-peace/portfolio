import { Link } from "react-router-dom"
import { profile, whatsappMessages, whatsappUrl } from "../../data/freelance"

export function FreelanceHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/6 bg-[#050508]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/apps-sob-medida" className="font-display text-sm font-bold text-white">
          {profile.name.split(" ")[0]}
          <span className="text-emerald-400">.</span>
          <span className="ml-1.5 text-xs font-normal text-zinc-500">sob medida</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden text-xs text-zinc-500 transition hover:text-zinc-300 sm:inline"
          >
            Portfólio completo
          </Link>
          <a
            href={whatsappUrl(whatsappMessages.quote)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 transition hover:border-emerald-500/50 hover:bg-emerald-500/15"
          >
            Pedir orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
