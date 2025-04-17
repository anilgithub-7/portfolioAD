
import { Github, ExternalLink } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  techStack: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  demoUrl,
  techStack
}: ProjectProps) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-card shadow-md card-hover border border-border">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full 
                ${tag === 'AI' ? 'bg-tech-ai/10 text-tech-ai' : 
                tag === 'ML' ? 'bg-tech-ml/10 text-tech-ml' : 
                tag === 'Python' ? 'bg-tech-python/10 text-tech-python' : 
                tag === 'Django' ? 'bg-tech-django/10 text-tech-django' : 
                tag === 'WebSocket' ? 'bg-tech-websocket/10 text-tech-websocket' : 
                tag === 'Database' ? 'bg-tech-database/10 text-tech-database' : 
                'bg-muted text-foreground'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="text-xs bg-secondary/10 text-secondary-foreground px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center text-sm py-2 px-3"
            >
              <Github className="h-4 w-4 mr-1.5" />
              View Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-sm py-2 px-3"
            >
              <ExternalLink className="h-4 w-4 mr-1.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
