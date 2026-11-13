import HeroSection from "./components/homepages/hero-section";
import AboutSection from "./components/homepages/about";
import Experience from "./components/homepages/experience";
import Projects from "./components/homepages/projects";
import Skills from "./components/homepages/skills";
import Educations from "./components/homepages/educations";
import Contact from "./components/homepages/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <Skills />
      <Educations />
      <Contact />
    </>
  );
}
