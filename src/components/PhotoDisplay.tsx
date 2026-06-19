interface PhotoDisplayProps {
  src: string
  alt: string
  accentFrom: string
  accentTo: string
  className?: string
  size?: "hero" | "card"
}

export function PhotoDisplay({
  src,
  alt,
  accentFrom,
  accentTo,
  className = "",
  size = "hero",
}: PhotoDisplayProps) {
  const maxWidth =
    size === "card" ? "max-w-[240px] md:max-w-[280px]" : "max-w-[320px] md:max-w-[400px]"

  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 rounded-3xl opacity-40 blur-xl"
        style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
      />
      <img
        src={src}
        alt={alt}
        className={`relative ${maxWidth} w-full rounded-3xl border border-white/10 object-cover drop-shadow-2xl`}
      />
    </div>
  )
}
