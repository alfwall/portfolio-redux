import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header"
import { AboutMe, Projects, Contact, Resume } from "./Body"
import Footer from "./Footer"
import "../bootstrap.min.css"
import "./index.css"



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={AboutMe()} />
        <Route path="/projects" element={Projects()} />
        <Route path="/contact" element={Contact()} />
        <Route path="/resume" element={Resume()} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App;