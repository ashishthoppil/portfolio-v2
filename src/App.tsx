import { Header } from "./components/layout/Header";
import { SocialMediaButtons } from "./components/layout/SocialMediaButtons";
import { SidebarEmail } from "./components/layout/SidebarEmail";
import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { CustomFooter } from "./components/layout/CustomFooter";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SocialMediaButtons />
      <SidebarEmail />
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <CustomFooter />
    </>
  );
}

export default App;
