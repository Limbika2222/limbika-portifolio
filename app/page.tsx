import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Experience from "../src/components/Experience";
import Education from "../src/components/Education";
import Contact from "../src/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}