import { profile, heroStats, postLaunchFocus, projects } from "../data/projects"
import type { Project } from "../data/projects"
import { PhoneMockup } from "./PhoneMockup"
import { StoreBadges } from "./StoreIcons"

const heroPhoneLayout = [
  { projectIndex: 0, screenshotIndex: 0, size: "small" as const, className: "animate-float-delayed -mr-10 mb-10 opacity-60 scale-75" },
  { projectIndex: 1, screenshotIndex: 1, size: "hero" as const, className: "animate-float relative z-10" },
  { projectIndex: 2, screenshotIndex: 2, size: "small" as const, className: "animate-float-delayed -ml-10 mb-10 opacity-60 scale-75" },
]

export function Hero() {
  const featured = projects.filter((p) => p.featured && p.displayMode !== "photo")

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28">
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12">
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="animate-fade-up mb-4 flex flex-col items-center gap-4 lg:items-start"
            >
              <StoreBadges />
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
                Apps que já estão nas lojas
              </p>
            </div>
            <h1
              className="font-display animate-fade-up mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              Apps mobile
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                que performam em escala.
              </span>
            </h1>
            <p
              className="animate-fade-up mb-10 max-w-md text-lg text-zinc-400 lg:mx-0 mx-auto"
              style={{ animationDelay: "0.2s" }}
            >
              {profile.name} — {profile.title}. Do MVP ao app com centenas de milhares de
              usuários.
            </p>
            <div
              className="animate-fade-up flex flex-wrap justify-center gap-3 lg:justify-start"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#status-invest"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100"
              >
                Ver os apps
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-300 transition hover:border-white/30 hover:text-white"
              >
                Falar comigo
              </a>
            </div>
          </div>

          {/* hero phone cluster — one app per phone */}
          {featured.length >= 3 && (
            <div className="relative flex shrink-0 items-end justify-center">
              {heroPhoneLayout.map(({ projectIndex, screenshotIndex, size, className }) => {
                const project = featured[projectIndex] as Project
                const screenshot =
                  project.screenshots[screenshotIndex] ?? project.screenshots[0]

                return (
                  <PhoneMockup
                    key={project.id}
                    screenshot={screenshot}
                    projectId={project.id}
                    index={screenshotIndex}
                    accentFrom={project.accent.from}
                    accentTo={project.accent.to}
                    appName={project.name}
                    size={size}
                    className={className}
                  />
                )
              })}
            </div>
          )}
        </div>

        {/* stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-[#050508] px-6 py-5 text-center">
              <p className="font-display text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* post-launch focus */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 md:p-8">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.15em] text-indigo-400">
            Pós-lançamento
          </p>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {postLaunchFocus.map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <h3 className="font-display mb-2 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  )
}
