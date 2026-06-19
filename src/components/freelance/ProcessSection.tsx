import { processSteps } from "../../data/freelance"

export function ProcessSection() {
  return (
    <section className="border-t border-white/6 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-2 text-center text-3xl font-bold text-white md:text-4xl">
          Como funciona
        </h2>
        <p className="mb-12 text-center text-zinc-500">
          Processo simples, do primeiro contato à entrega.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-white/8 bg-[#050508] p-5"
            >
              <span className="font-display text-2xl font-bold text-emerald-500/40">
                {step.step}
              </span>
              <h3 className="font-display mt-2 mb-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
