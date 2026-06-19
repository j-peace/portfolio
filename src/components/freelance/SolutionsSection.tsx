import { solutions, whatsappMessages, whatsappUrl } from "../../data/freelance"

function SolutionIcon({ id, color }: { id: string; color: string }) {
  const paths: Record<string, string> = {
    "vender-mais": "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    "presenca-digital": "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    "vender-online": "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
    automatizar: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
    "produtos-digitais": "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  }
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[id]} />
    </svg>
  )
}

export function SolutionsSection() {
  return (
    <section id="solucoes" className="scroll-mt-20 border-t border-white/6 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-12 text-center text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          O que você precisa hoje?
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((solution) => (
            <article
              key={solution.id}
              className="flex flex-col rounded-2xl border border-white/8 bg-white/3 p-6 transition hover:border-white/15 hover:bg-white/5"
            >
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: `${solution.accent}1f` }}
              >
                <SolutionIcon id={solution.id} color={solution.accent} />
              </div>
              <h3 className="font-display text-base font-bold text-white">{solution.need}</h3>
              <p className="mt-1 text-sm font-medium" style={{ color: solution.accent }}>
                {solution.title}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {solution.description}
              </p>
              <a
                href={whatsappUrl(whatsappMessages.diagnostic)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium transition hover:gap-2"
                style={{ color: solution.accent }}
              >
                Saiba mais →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
