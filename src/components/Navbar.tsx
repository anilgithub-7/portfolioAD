
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Function for smooth scrolling
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-custom mx-auto flex justify-between items-center h-16 px-4">
        <a href="#home" className="text-2xl font-bold text-foreground">
          AI.Dev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
              className="text-foreground/80 hover:text-primary font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground text-xl font-medium py-4"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                  closeMenu();
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
