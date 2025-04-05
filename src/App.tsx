import { Header } from "./components/layout/Header";
// import { SocialMediaButtons } from "./components/layout/SocialMediaButtons";
import { SidebarEmail } from "./components/layout/SidebarEmail";
import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CustomFooter } from "./components/layout/CustomFooter";

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
