import { servicePackages } from "../../data/freelance"

export function PackagesSection() {
  return (
    <section id="pacotes" className="scroll-mt-24 border-t border-white/6 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-2 text-center text-3xl font-bold text-white md:text-4xl">
          Pacotes
        </h2>
        <p className="mb-12 text-center text-zinc-500">
          Escopo fechado. Você sabe o que entra antes de começar.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.id}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 transition hover:border-white/15"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-30"
                style={{ background: pkg.accent.from }}
              />
              <span
                className="mb-3 inline-block text-xs font-medium"
                style={{ color: pkg.accent.text }}
              >
                {pkg.idealFor}
              </span>
              <h3 className="font-display mb-1 text-xl font-bold text-white">{pkg.name}</h3>
              <p className="mb-5 text-sm text-zinc-400">{pkg.tagline}</p>
              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
