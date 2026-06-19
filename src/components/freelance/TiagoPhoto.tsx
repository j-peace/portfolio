import { useState } from "react"

interface TiagoPhotoProps {
  className?: string
  rounded?: string
}

const photoSrc = `${import.meta.env.BASE_URL}tiago.jpg`

export function TiagoPhoto({ className = "", rounded = "rounded-2xl" }: TiagoPhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex aspect-[4/5] w-full items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 ${rounded} ${className}`}
      >
        <div className="flex flex-col items-center gap-3 p-6 text-center">
          <svg
            className="h-16 w-16 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <p className="text-xs text-slate-500">
            Adicione sua foto em{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">
              public/tiago.jpg
            </code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={photoSrc}
      alt="Tiago Paz"
      onError={() => setFailed(true)}
      className={`aspect-[4/5] w-full object-cover ${rounded} ${className}`}
    />
  )
}
