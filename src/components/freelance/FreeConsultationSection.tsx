import { freeConsultation, whatsappMessages, whatsappUrl } from "../../data/freelance"

export function FreeConsultationSection() {
  return (
    <section className="px-6 pb-4">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center md:p-10">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            {freeConsultation.label}
          </span>
          <h2 className="font-display mt-4 text-2xl font-bold text-white md:text-3xl">
            {freeConsultation.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 leading-relaxed">
            {freeConsultation.description}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
            {freeConsultation.experience}
          </p>
          <ul className="mx-auto mt-6 inline-flex flex-col gap-2 text-left text-sm text-zinc-500">
            {freeConsultation.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-center">
          <a
            href={whatsappUrl(whatsappMessages.freeConsultation)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            Agendar conversa gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
