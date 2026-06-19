import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { AppNav } from "./components/AppNav"
import { ProjectShowcase } from "./components/ProjectShowcase"
import { MoreProjects } from "./components/MoreProjects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { projects } from "./data/projects"

function App() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="grain">
      <Header />
      <main>
        <Hero />
        <AppNav />
        {featured.map((project, i) => (
          <ProjectShowcase key={project.id} project={project} index={i} />
        ))}
        <MoreProjects projects={others} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
