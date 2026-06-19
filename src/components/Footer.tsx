import { profile } from "../data/projects"

export function Footer() {
  return (
    <footer className="border-t border-white/6 px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>React Native · iOS · Android</p>
      </div>
    </footer>
  )
}
