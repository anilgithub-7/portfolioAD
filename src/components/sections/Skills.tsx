
import { Database, BrainCircuit, Code, Server, Bot, Terminal } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "AI & Machine Learning",
      icon: <BrainCircuit className="h-8 w-8 text-tech-ai" />,
      items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Hugging Face", "NLP", "Computer Vision", "ML Pipeline Management", "Model Deployment"]
    },
    {
      category: "Backend Development",
      icon: <Server className="h-8 w-8 text-tech-django" />,
      items: ["Django", "Django REST Framework", "FastAPI", "Flask", "RESTful APIs", "GraphQL", "WebSockets", "Microservices"]
    },
    {
      category: "Programming Languages",
      icon: <Code className="h-8 w-8 text-tech-python" />,
      items: ["Python", "JavaScript", "TypeScript", "SQL", "Bash", "HTML/CSS"]
    },
    {
      category: "Databases & Storage",
      icon: <Database className="h-8 w-8 text-tech-database" />,
      items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Vector Databases", "S3", "Data Modeling"]
    },
    {
      category: "DevOps & Tools",
      icon: <Terminal className="h-8 w-8 text-tech-websocket" />,
      items: ["Docker", "CI/CD Pipelines", "Git", "GitHub Actions", "AWS", "Monitoring", "Logging"]
    },
    {
      category: "Conversational AI",
      icon: <Bot className="h-8 w-8 text-tech-ml" />,
      items: ["Chatbot Design", "Dialog Systems", "Intent Recognition", "Context Management", "Sentiment Analysis"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg">
            My toolkit and areas of expertise in AI and backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {skillGroup.icon}
                <h3 className="text-xl font-bold ml-3">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="tech-badge bg-muted/50 text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
