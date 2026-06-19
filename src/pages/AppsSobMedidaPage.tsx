import { FreelanceHeader } from "../components/freelance/FreelanceHeader"
import { FreelanceHero } from "../components/freelance/FreelanceHero"
import { SolutionsSection } from "../components/freelance/SolutionsSection"
import { BenefitsSection } from "../components/freelance/BenefitsSection"
import { ResultsSection } from "../components/freelance/ResultsSection"
import { AboutTiagoSection } from "../components/freelance/AboutTiagoSection"
import { DiagnosticSection } from "../components/freelance/DiagnosticSection"
import { FreelanceContact, FreelanceFooter } from "../components/freelance/FreelanceContact"

export default function AppsSobMedidaPage() {
  return (
    <div className="grain min-h-screen bg-[#0a0f1d] text-slate-200">
      <FreelanceHeader />
      <main>
        <FreelanceHero />
        <SolutionsSection />
        <BenefitsSection />
        <ResultsSection />
        <AboutTiagoSection />
        <DiagnosticSection />
        <FreelanceContact />
      </main>
      <FreelanceFooter />
    </div>
  )
}
