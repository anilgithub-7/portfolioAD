
import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                John Doe
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80">
                AI Engineer & Backend Developer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
              I build intelligent backend systems powered by AI and real-time data.
              Specializing in Python, Django, and ML/NLP solutions that solve complex problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                className="btn-outline flex items-center gap-2 hover:scale-105 transition-transform"
                download
              >
                Download Resume
                <Download size={18} />
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2 hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative animate-scale-in">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-background shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Replace with actual profile photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-secondary/70 flex items-center justify-center text-white text-6xl font-bold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
