import Image from "next/image";
import HeroSection from "./components/homepages/hero-section"
import AboutSection from "./components/homepages/about";
import Skills from "./components/homepages/skills";
import Projects from "./components/projects";
import Educations from "./components/educations";
import Contact from "./components/homepages/contact";
export default function Home() {
  return (
    <>
      {/*用來放所有的Home Page Components*/}
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Educations />
      <Contact />
    </>
  );
}
