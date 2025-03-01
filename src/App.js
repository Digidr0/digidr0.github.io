import { useState, useEffect } from "react";
import "./App.css";
import Topbar from "./Topbar";
import figma from "./assets/Figma.png";
import paper from "./assets/paper.png";
import oval from "./assets/oval.png";
import star from "./assets/star.png";
import disk from "./assets/disk.png";
import cube from "./assets/cube.png";


function style(){
  return {animation: `idle infinite ${Math.random() * 10 + 10}s ease-in-out`}
}
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      setIsLoaded(true);
      return;
    }

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  
  return (
    
    <div className="app">
    {/* Прелоадер */}
    <div className={`preloader ${isLoaded ? "hidden" : ""}`}>
        <div className="loader">Loading...</div>
      </div>
      {/* Конетнт */}
      <div className="topbar">
        <Topbar/>
      </div>
      <div className={`content ${isLoaded ? "visible" : ""}`}>
      <div id="bg-color"></div>
      <img id="paper" src={paper}></img>

      <div className="title">
        <span className="header">Digidro</span>
        <div className="figures">
          <img id="oval" className="figure" src={oval} style={style()}></img>
          <img id="star" className="figure idle" src={star} style={style()}></img>
          <img id="disk" className="figure" src={disk} style={style()}></img>
          <img id="cube" className="figure" src={cube} style={style()}></img>
        </div>
        <span className="subheader">3d artist ▴ designer ▴ programmer</span>
      </div>
      <img id="figma" src={figma}></img>
    </div>
    </div>
  );
}

export default App;