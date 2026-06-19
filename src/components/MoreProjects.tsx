import type { Project } from "../data/projects"
import { PhoneMockup } from "./PhoneMockup"
import { PhotoDisplay } from "./PhotoDisplay"
import { ScreenshotDisplay } from "./ScreenshotDisplay"

interface MoreProjectsProps {
  projects: Project[]
}

export function MoreProjects({ projects }: MoreProjectsProps) {
  return (
    <section id="mais" className="scroll-mt-20 border-t border-white/6 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-2 text-center text-3xl font-bold text-white md:text-4xl">
          Mais projetos
        </h2>
        <p className="mb-16 text-center text-zinc-500">
          Open source, logística e clientes diversos.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/2 p-6 transition hover:border-white/15"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-40 transition group-hover:opacity-70"
                style={{ background: project.accent.from }}
              />
              <span
                className="mb-3 inline-block text-xs font-medium"
                style={{ color: project.accent.text }}
              >
                {project.category}
              </span>
              <h3 className="font-display mb-2 text-xl font-bold text-white">
                {project.name}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-zinc-500">
                {project.pitch}
              </p>
              <div className="flex justify-center overflow-hidden px-1 py-2">
                {project.displayMode === "photo" && project.screenshots[0]?.src ? (
                  <PhotoDisplay
                    src={project.screenshots[0].src}
                    alt={project.screenshots[0].alt}
                    accentFrom={project.accent.from}
                    accentTo={project.accent.to}
                    size="card"
                  />
                ) : project.displayMode === "screenshot" && project.screenshots[0]?.src ? (
                  <ScreenshotDisplay
                    src={project.screenshots[0].src}
                    alt={project.screenshots[0].alt}
                    accentFrom={project.accent.from}
                    accentTo={project.accent.to}
                  />
                ) : (
                  <PhoneMockup
                    screenshot={project.screenshots[0]}
                    projectId={project.id}
                    index={0}
                    accentFrom={project.accent.from}
                    accentTo={project.accent.to}
                    appName={project.name}
                    size="small"
                  />
                )}
              </div>
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center text-xs text-zinc-500 transition hover:text-white"
                >
                  GitHub →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
