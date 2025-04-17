
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Resume from "../components/sections/Resume";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
