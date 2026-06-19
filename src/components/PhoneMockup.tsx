import { useEffect, useState } from "react"
import type { ProjectScreenshot } from "../data/projects"

interface PhoneMockupProps {
  screenshot: ProjectScreenshot
  projectId: string
  index: number
  accentFrom: string
  accentTo: string
  appName: string
  className?: string
  size?: "hero" | "default" | "small"
}

export function PhoneMockup({
  screenshot,
  projectId,
  index,
  accentFrom,
  accentTo,
  appName,
  className = "",
  size = "default",
}: PhoneMockupProps) {
  const imagePath = screenshot.src ?? `/screenshots/${projectId}/${index + 1}.png`
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (screenshot.src) {
      setLoaded(true)
      return
    }
    const img = new Image()
    img.onload = () => setLoaded(true)
    img.onerror = () => setLoaded(false)
    img.src = imagePath
  }, [imagePath, screenshot.src])

  const width =
    size === "hero" ? "w-[220px] md:w-[260px]" : size === "small" ? "w-[140px]" : "w-[200px]"

  return (
    <div className={`relative ${width} ${className}`}>
      {/* glow behind phone */}
      <div
        className="absolute -inset-8 rounded-full blur-3xl opacity-60"
        style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
      />
      <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900 p-2 shadow-2xl shadow-black/60">
        {/* notch */}
        <div className="absolute left-1/2 top-3 z-10 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2rem] bg-black">
          <div className="aspect-[9/19.5] w-full">
            {loaded ? (
              <img
                src={imagePath}
                alt={screenshot.alt}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div
                className="flex h-full flex-col items-center justify-center gap-2 p-4"
                style={{
                  background: `linear-gradient(160deg, ${accentFrom}22 0%, #0a0a0f 50%, ${accentTo}18 100%)`,
                }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
                >
                  {appName.charAt(0)}
                </div>
                <p className="text-center text-[10px] text-white/40">screenshot em breve</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
