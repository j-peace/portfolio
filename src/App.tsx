import { BrowserRouter, Routes, Route } from "react-router-dom"
import PortfolioPage from "./pages/PortfolioPage"
import AppsSobMedidaPage from "./pages/AppsSobMedidaPage"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "")

export default function App() {
  return (
    <BrowserRouter basename={basename || undefined}>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/apps-sob-medida" element={<AppsSobMedidaPage />} />
      </Routes>
    </BrowserRouter>
  )
}
