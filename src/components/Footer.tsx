
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold">AI.Dev</div>
            <p className="text-foreground/60 text-sm mt-1">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:contact@johndoe.dev"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
