import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonals from "./components/testimonals/Testimonals";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {
  const[menuopen,setMenuopen]=useState(false)
  return (
    <div className="app">
    <Topbar menu={menuopen} setMenuopen={setMenuopen}/>
    <Menu menu={menuopen} setMenuopen={setMenuopen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonals/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
