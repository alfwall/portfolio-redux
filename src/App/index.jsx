import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AboutMe, Projects, Contact, Resume } from "./Body"
import "../bootstrap.min.css"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Outlet />
      <Routes>
        <Route path="/" element={AboutMe()} />
        <Route path="/projects" element={Projects()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/resume" element={Resume()} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;