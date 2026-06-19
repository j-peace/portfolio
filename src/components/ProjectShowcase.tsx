import type { Project } from "../data/projects"
import { PhoneMockup } from "./PhoneMockup"
import { PhotoDisplay } from "./PhotoDisplay"

interface ProjectShowcaseProps {
  project: Project
  index: number
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const reversed = index % 2 === 1

  return (
    <section
      id={project.id}
      className="relative scroll-mt-20 overflow-hidden py-24 md:py-32"
    >
      {/* background gradient blob */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: reversed
            ? `radial-gradient(ellipse 70% 60% at 80% 50%, ${project.accent.glow}, transparent)`
            : `radial-gradient(ellipse 70% 60% at 20% 50%, ${project.accent.glow}, transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div
          className={`flex flex-col items-center gap-12 lg:gap-20 ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* copy */}
          <div className="flex-1 text-center lg:text-left">
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide"
              style={{
                background: `${project.accent.from}22`,
                color: project.accent.text,
              }}
            >
              {project.category}
            </span>
            <h2 className="font-display mb-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {project.tagline}
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-zinc-400 lg:mx-0 mx-auto">
              {project.pitch}
            </p>

            {/* stats pills */}
            <div className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-white/4 px-5 py-3 backdrop-blur-sm"
                >
                  <p className="font-display text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {project.links && (
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {project.links.appStore && (
                  <StoreButton href={project.links.appStore} store="App Store" />
                )}
                {project.links.playStore && (
                  <StoreButton href={project.links.playStore} store="Google Play" />
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-400 transition hover:border-white/25 hover:text-white"
                  >
                    Ver no GitHub →
                  </a>
                )}
              </div>
            )}
          </div>

          {/* visuals */}
          <div className="relative flex shrink-0 items-end justify-center">
            {project.displayMode === "photo" ? (
              project.screenshots[0]?.src && (
                <PhotoDisplay
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  accentFrom={project.accent.from}
                  accentTo={project.accent.to}
                  className="animate-float"
                />
              )
            ) : project.screenshots.length >= 3 ? (
              <>
                <PhoneMockup
                  screenshot={project.screenshots[0]}
                  projectId={project.id}
                  index={0}
                  accentFrom={project.accent.from}
                  accentTo={project.accent.to}
                  appName={project.name}
                  size="small"
                  className="animate-float-delayed -mr-8 mb-8 opacity-70 scale-90 z-0"
                />
                <PhoneMockup
                  screenshot={project.screenshots[1]}
                  projectId={project.id}
                  index={1}
                  accentFrom={project.accent.from}
                  accentTo={project.accent.to}
                  appName={project.name}
                  size="hero"
                  className="animate-float relative z-10"
                />
                <PhoneMockup
                  screenshot={project.screenshots[2]}
                  projectId={project.id}
                  index={2}
                  accentFrom={project.accent.from}
                  accentTo={project.accent.to}
                  appName={project.name}
                  size="small"
                  className="animate-float-delayed -ml-8 mb-8 opacity-70 scale-90 z-0"
                />
              </>
            ) : (
              <div className="flex gap-4">
                {project.screenshots.map((shot, i) => (
                  <PhoneMockup
                    key={i}
                    screenshot={shot}
                    projectId={project.id}
                    index={i}
                    accentFrom={project.accent.from}
                    accentTo={project.accent.to}
                    appName={project.name}
                    className={i === 1 ? "animate-float" : "animate-float-delayed opacity-80"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function StoreButton({ href, store }: { href: string; store: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
    >
      {store}
    </a>
  )
}
