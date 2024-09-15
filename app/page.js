import Image from "next/image";
import HeroSection from "./components/homepages/hero-section"
import AboutSection from "./components/homepages/about";

export default function Home() {
  return (
    <>
    {/*用來放所有的Home Page Components*/}
    <HeroSection />
    <AboutSection />
    </>
  );
}
