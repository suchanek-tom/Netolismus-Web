import { BrowserRouter, Routes, Route } from "react-router-dom"
import { motion as m } from "framer-motion"


// Pages
import Homepage from "./Pages/HomePage"
import ErrorPage from "./Pages/ErrorPage"
import PriznakyPage from "./Pages/PriznakyPage"
import RizikaPage from "./Pages/RizikaPage"
import LecbaPage from "./Pages/LecbaPage"


const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Priznaky" element={<PriznakyPage />} />
            <Route path="/Rizika" element={<RizikaPage />} />
            <Route path="/lecba" element={<LecbaPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
