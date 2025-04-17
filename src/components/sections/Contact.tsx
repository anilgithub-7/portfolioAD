
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);
      
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg">
            Let's discuss your project or opportunities to work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6 text-foreground/80">
              Feel free to reach out through the contact form or via the communication channels below.
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:contact@johndoe.dev" 
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>contact@johndoe.dev</span>
              </a>
              
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <span>github.com/johndoe</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
              >
                <div className="bg-background p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <span>linkedin.com/in/johndoe</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
              
              {formStatus === "success" && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-800 rounded-md text-center">
                  There was a problem sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
