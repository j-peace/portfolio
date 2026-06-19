import type { Project } from "../../data/projects"
import { PhoneMockup } from "../PhoneMockup"
import { PhotoDisplay } from "../PhotoDisplay"
import { ScreenshotDisplay } from "../ScreenshotDisplay"

interface FreelancePortfolioProps {
  rows: Project[][]
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/8 bg-white/2 p-5">
      <span
        className="mb-2 text-xs font-medium"
        style={{ color: project.accent.text }}
      >
        {project.category}
      </span>
      <h3 className="font-display mb-2 text-lg font-bold text-white">{project.name}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-500">{project.pitch}</p>
      <div className="flex justify-center overflow-hidden py-2">
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
    </article>
  )
}

export function FreelancePortfolio({ rows }: FreelancePortfolioProps) {
  return (
    <section id="trabalhos" className="scroll-mt-24 border-t border-white/6 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-2 text-center text-3xl font-bold text-white md:text-4xl">
          Trabalhos recentes
        </h2>
        <p className="mb-12 text-center text-zinc-500">
          Projetos enxutos, apps de cliente e open source.
        </p>

        <div className="flex flex-col gap-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rows[0]?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {rows[1] && rows[1].length > 0 && (
            <div className="mx-auto grid w-full max-w-2xl gap-6 sm:grid-cols-2">
              {rows[1].map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
