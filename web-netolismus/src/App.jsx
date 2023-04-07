import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Homepage from "./Pages/HomePage"
import ErrorPage from "./Pages/ErrorPage"
// TODO: Přidat ostatní stránky

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Priznaky" element={<h1>Příznaky</h1>} />
        <Route path="/Rizika" element={<h1>Rizika</h1>} />
        <Route path="/lecba" element={<h1>Léčba</h1>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
