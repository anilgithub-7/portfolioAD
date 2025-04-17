
import { Check } from "lucide-react";

const About = () => {
  const skills = {
    technical: [
      "Python", "Django", "FastAPI", "WebSockets",
      "Machine Learning", "NLP", "REST APIs",
      "Git", "Docker", "PostgreSQL", "Redis",
      "Hugging Face", "TensorFlow"
    ],
    soft: [
      "Problem Solving", "Teamwork", "Clear Communication",
      "Adaptability", "Time Management" 
    ]
  };

  return (
    <section id="about" className="section bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="mb-6 text-foreground/80 text-lg">
              I'm an AI Engineer and Backend Developer with 1.5 years of experience building intelligent systems.
              I specialize in developing scalable backend solutions enhanced with AI capabilities, including
              natural language processing and machine learning models.
            </p>
            <p className="mb-6 text-foreground/80 text-lg">
              My expertise spans the entire AI development lifecycle from data preprocessing to model deployment in production.
              I'm passionate about creating robust applications that leverage cutting-edge AI technologies to solve
              real-world problems efficiently.
            </p>
            <p className="text-foreground/80 text-lg">
              Currently, I'm focused on developing real-time data processing systems with WebSockets and integrating NLP models
              to enhance user experiences.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <div 
                    key={skill}
                    className="tech-badge bg-background shadow-sm hover:shadow-md hover:bg-background/80 transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Soft Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.soft.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2"
                  >
                    <Check className="text-primary h-5 w-5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
