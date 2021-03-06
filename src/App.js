import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header.js";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 900, disable: "mobile" });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <ProjectCard />
      <Footer />
    </>
  );
}

export default App;
