import { ArrowRight, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Section */}
          <div className="flex flex-col space-y-6 w-full lg:w-1/2 order-2 lg:order-1 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-primary">
                Hello, I'm
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Anil Thapa
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80">
                AI Engineer & Backend Developer
              </h2>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl">
              I build intelligent backend systems powered by AI and real-time
              data. Specializing in Python, Django, and ML/NLP solutions that
              solve complex problems.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <ArrowRight size={16} className="hidden sm:inline" />
              </a>
              <a
                href="/resume.pdf"
                className="btn-outline flex items-center gap-2 hover:scale-105 transition-transform text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5"
                download
              >
                Download Resume
                <Download size={16} className="hidden sm:inline" />
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2 hover:scale-105 transition-transform text-sm sm:text-base px-4 py-2 sm:px-5 sm:py-2.5"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
                <Mail size={16} className="hidden sm:inline" />
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Decorative Blurs */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            {/* Profile Image */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-background shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/lovable-uploads/b6915b7a-d786-45c9-a725-f0c59b08f3a6.png"
                alt="Anil Thapa"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;