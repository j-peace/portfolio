import { profile } from "../data/projects"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/6 bg-[#050508]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-sm font-bold text-white">
          {profile.name.split(" ")[0]}
          <span className="text-indigo-400">.</span>
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-400 transition hover:border-white/25 hover:text-white"
        >
          Contato
        </a>
      </div>
    </header>
  )
}
