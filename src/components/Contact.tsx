import { profile } from "../data/projects"

export function Contact() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.12)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display mb-4 text-4xl font-bold text-white md:text-5xl">
          Tem um app
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            pra construir?
          </span>
        </h2>
        <p className="mb-10 text-lg text-zinc-400">
          Disponível para projetos mobile, consultoria técnica e liderança de equipe.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-zinc-100"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
