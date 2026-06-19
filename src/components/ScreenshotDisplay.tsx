interface ScreenshotDisplayProps {
  src: string
  alt: string
  accentFrom: string
  accentTo: string
  className?: string
}

export function ScreenshotDisplay({
  src,
  alt,
  accentFrom,
  accentTo,
  className = "",
}: ScreenshotDisplayProps) {
  return (
    <div className={`relative mx-auto w-[132px] ${className}`}>
      <div
        className="absolute inset-0 rounded-2xl opacity-40 blur-xl"
        style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-lg">
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
    </div>
  )
}
