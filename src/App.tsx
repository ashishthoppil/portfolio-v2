import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/HeroSection";

import "./App.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    let focus = document.querySelector<any>(".bg-focus");
    document.addEventListener("mousemove", function(e) {
      let x = e.clientX;
      let y = e.clientY;
      if (focus) {
        focus.style.background = "radial-gradient(circle at "+ x +"px "+ y +'px ,rgba(255, 255, 255, 0.21), transparent 50%)';    
      }
    })
  }, []);

  return (
    <>
      <div className="bg-focus fixed inset-0 w-full h-full pointer-events-none">
      </div>
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
