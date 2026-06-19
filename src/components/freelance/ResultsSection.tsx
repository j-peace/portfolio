import { caseResults, whatsappMessages, whatsappUrl } from "../../data/freelance"

export function ResultsSection() {
  return (
    <section id="resultados" className="scroll-mt-20 border-t border-white/6 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-12 text-center text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          Resultados que falam por si
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {caseResults.map((item) => {
            const positive = item.direction === "up"
            const color = positive ? "#34d399" : "#fbbf24"
            return (
              <article
                key={item.id}
                className="rounded-2xl border border-white/8 bg-white/3 p-6"
              >
                <p className="text-sm font-medium text-slate-400">{item.client}</p>
                <p className="font-display mt-3 text-4xl font-bold" style={{ color }}>
                  {item.metric}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappUrl(whatsappMessages.diagnostic)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 transition hover:gap-2"
          >
            Ver mais projetos →
          </a>
        </div>
      </div>
    </section>
  )
}
