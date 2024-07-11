import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Resume from "./Resume"

import "../bootstrap.min.css"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Outlet />
      <Routes>
        <Route path="/" element={AboutMe()} />
        <Route path="/portfolio" element={Portfolio()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/resume" element={Resume()} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;