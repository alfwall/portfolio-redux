import React from "react";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import "../bootstrap.min.css"
import "./index.css"

function App() {
  const [currentTab, setCurrentTab] = React.useState("about-me")

  return (
    <div className="row">
      <Header onTabClick={setCurrentTab} />
      <Body tab={currentTab} />
      <Footer />
    </div>
  )
}

export default App
