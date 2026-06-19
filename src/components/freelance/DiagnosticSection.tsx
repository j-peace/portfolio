import { diagnostic, whatsappMessages, whatsappUrl } from "../../data/freelance"

export function DiagnosticSection() {
  return (
    <section className="border-t border-white/6 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-500/10 to-transparent p-8 md:p-10">
        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-2xl">
              🎁
            </div>
            <h2 className="font-display text-2xl font-bold uppercase text-white md:text-3xl">
              {diagnostic.title}
            </h2>
            <p className="mt-4 text-slate-400">{diagnostic.description}</p>
          </div>

          <div>
            <ul className="space-y-3">
              {diagnostic.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/15">
                    <svg className="h-3 w-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(whatsappMessages.diagnostic)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Quero minha análise gratuita →
            </a>
            <p className="mt-3 text-xs text-slate-500">{diagnostic.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
