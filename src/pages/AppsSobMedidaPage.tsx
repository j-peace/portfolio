import { FreelanceHeader } from "../components/freelance/FreelanceHeader"
import { FreelanceHero } from "../components/freelance/FreelanceHero"
import { FreeConsultationSection } from "../components/freelance/FreeConsultationSection"
import { PackagesSection } from "../components/freelance/PackagesSection"
import { ProcessSection } from "../components/freelance/ProcessSection"
import { UseCasesSection } from "../components/freelance/UseCasesSection"
import { FreelancePortfolio } from "../components/freelance/FreelancePortfolio"
import { FreelanceContact, FreelanceFooter } from "../components/freelance/FreelanceContact"
import { freelancePortfolioRows } from "../data/freelance"
import { projects } from "../data/projects"

export default function AppsSobMedidaPage() {
  const portfolioRows = freelancePortfolioRows.map((row) =>
    row
      .map((id) => projects.find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => p !== undefined)
  )

  return (
    <div className="grain">
      <FreelanceHeader />
      <main>
        <FreelanceHero />
        <FreeConsultationSection />
        <PackagesSection />
        <ProcessSection />
        <UseCasesSection />
        <FreelancePortfolio rows={portfolioRows} />
        <FreelanceContact />
      </main>
      <FreelanceFooter />
    </div>
  )
}
