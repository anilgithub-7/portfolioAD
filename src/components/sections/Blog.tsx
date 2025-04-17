
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  category: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Deploying NLP Models with Django",
      excerpt: "A step-by-step guide to integrating and deploying NLP models within Django applications for production use.",
      date: "March 15, 2024",
      slug: "deploying-nlp-models-django",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&q=80&w=800&h=450",
      category: "Tutorial"
    },
    {
      title: "Building a Realtime Chatbot with WebSockets",
      excerpt: "Learn how to create a responsive chatbot with bi-directional communication using WebSockets and AI.",
      date: "February 20, 2024",
      slug: "realtime-chatbot-websockets",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=450",
      category: "Architecture"
    },
    {
      title: "My AI Engineering Journey So Far",
      excerpt: "Personal reflections on breaking into AI engineering, challenges faced, and lessons learned along the way.",
      date: "January 10, 2024",
      slug: "ai-engineering-journey",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=450",
      category: "Career"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Blog & Technical Writing</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg">
            Thoughts, tutorials, and insights on AI engineering and backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-card rounded-xl overflow-hidden shadow-md card-hover border border-border">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                
                <a 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center font-medium text-primary hover:text-primary/80"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <a href="/blog" className="btn-outline">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
