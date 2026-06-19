import { useCaseHighlights } from "../../data/freelance"

export function UseCasesSection() {
  return (
    <section className="border-t border-white/6 px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {useCaseHighlights.map((item, index) => (
          <article
            key={item.id}
            className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-8 md:p-10"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-25"
              style={{ background: item.accent.from }}
            />
            <div
              className={`relative flex flex-col gap-6 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } md:items-center md:gap-10`}
            >
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold leading-snug text-white md:text-3xl">
                  {item.question}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-400">{item.pitch}</p>
              </div>
              <ul className="md:w-72 md:shrink-0">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 border-t border-white/6 py-3 text-sm text-zinc-500 first:border-t-0 first:pt-0"
                  >
                    <span style={{ color: item.accent.text }}>→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
