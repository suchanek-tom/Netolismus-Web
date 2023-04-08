import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Homepage from "./Pages/HomePage"
import ErrorPage from "./Pages/ErrorPage"
import PriznakyPage from "./Pages/PriznakyPage"
import RizikaPage from "./Pages/RizikaPage"
// TODO: Přidat ostatní stránky

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Priznaky" element={<PriznakyPage />} />
        <Route path="/Rizika" element={<RizikaPage />} />
        <Route path="/lecba" element={<h1>Léčba</h1>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
