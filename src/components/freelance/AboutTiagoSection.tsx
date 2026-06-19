import { aboutTiago } from "../../data/freelance"
import { TiagoPhoto } from "./TiagoPhoto"

export function AboutTiagoSection() {
  return (
    <section id="sobre" className="scroll-mt-20 border-t border-white/6 bg-white/2 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-wider text-amber-400">
          Quem vai construir sua solução?
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/15 to-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <TiagoPhoto rounded="rounded-3xl" />
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              {aboutTiago.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
              {aboutTiago.description}
            </p>

            <ul className="mt-6 space-y-3">
              {aboutTiago.checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15">
                    <svg className="h-3 w-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold text-white">
                  {aboutTiago.card.name}
                </span>
                <span className="rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-xs text-amber-400">
                  &lt;/&gt;
                </span>
              </div>
              <p className="text-sm text-slate-400">{aboutTiago.card.role}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {aboutTiago.card.stats.map((stat) => (
                  <span key={stat} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
