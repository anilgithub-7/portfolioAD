
import { useState } from "react";
import ProjectCard, { ProjectProps } from "../ProjectCard";

const Projects = () => {
  const allProjects: ProjectProps[] = [
    {
      title: "Conversational AI Assistant",
      description: "A real-time AI assistant that uses NLP to understand and respond to user queries with contextual awareness and sentiment analysis.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["AI", "NLP", "WebSocket"],
      githubUrl: "https://github.com/username/conversational-ai",
      demoUrl: "https://demo-conversational-ai.com",
      techStack: ["Python", "FastAPI", "WebSockets", "Hugging Face", "React", "Redis"]
    },
    {
      title: "Machine Learning Recommendation Engine",
      description: "A recommendation system using collaborative filtering to suggest products based on user behavior and preferences.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["ML", "AI", "Database"],
      githubUrl: "https://github.com/username/ml-recommender",
      techStack: ["Python", "Django", "TensorFlow", "PostgreSQL", "Docker"]
    },
    {
      title: "Real-time Data Dashboard",
      description: "A dashboard showing real-time analytics and visualizations for business metrics with WebSocket connections for instant updates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["WebSocket", "Python", "Database"],
      githubUrl: "https://github.com/username/realtime-dashboard",
      demoUrl: "https://demo-realtime-dashboard.com",
      techStack: ["Django", "PostgreSQL", "Redis", "WebSockets", "Chart.js", "Docker"]
    },
    {
      title: "NLP Document Processor",
      description: "A document processing tool that uses NLP to extract, classify, and summarize information from various document formats.",
      image: "https://images.unsplash.com/photo-1456428746267-a1756408f782?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["NLP", "AI", "Python"],
      githubUrl: "https://github.com/username/nlp-document-processor",
      techStack: ["Python", "FastAPI", "Hugging Face", "spaCy", "PyTorch", "Docker"]
    },
    {
      title: "API Gateway with ML Security",
      description: "A secure API gateway with anomaly detection ML models for identifying and preventing suspicious requests and attacks.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["ML", "Python", "Django"],
      githubUrl: "https://github.com/username/secure-api-gateway",
      techStack: ["Django", "PostgreSQL", "scikit-learn", "Docker", "Redis"]
    },
    {
      title: "Semantic Search Engine",
      description: "A search engine that uses semantic understanding of queries to return more relevant results based on meaning rather than keywords.",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["AI", "NLP", "WebSocket"],
      githubUrl: "https://github.com/username/semantic-search",
      demoUrl: "https://demo-semantic-search.com",
      techStack: ["Python", "Elasticsearch", "FastAPI", "Hugging Face", "Vector DB", "Docker"]
    }
  ];

  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["All", "AI", "ML", "NLP", "WebSocket", "Database", "Python", "Django"];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter(
          (project) => 
            project.tags.includes(filter) || 
            project.techStack.includes(filter)
        )
      );
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg">
            A selection of my recent work in AI, ML, and backend development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-foreground/70"
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
