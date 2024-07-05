import React from "react";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import "../bootstrap.min.css"
import "./index.css"

function App() {
  const [currentTab, setCurrentTab] = React.useState("about-me")
  console.log("App() called, currentTab = " + currentTab)
  return (
    <div className="row">
      <Header currentTab={currentTab} onTabClick={setCurrentTab} />
      <Body currentTab={currentTab} />
      <Footer />
    </div>
  )
}

export default App
