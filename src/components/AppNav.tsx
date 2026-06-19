import { projects } from "../data/projects"

export function AppNav() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="sticky top-[57px] z-40 border-y border-white/6 bg-[#050508]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-6 py-3 scrollbar-none">
        {featured.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="shrink-0 rounded-full border border-white/8 px-4 py-1.5 text-sm text-zinc-400 transition hover:border-white/20 hover:text-white"
          >
            {project.name}
          </a>
        ))}
        <a
          href="#mais"
          className="shrink-0 rounded-full border border-white/8 px-4 py-1.5 text-sm text-zinc-500 transition hover:text-zinc-300"
        >
          + mais
        </a>
      </div>
    </section>
  )
}
