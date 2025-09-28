import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 50; // Adjust this value for more or less space
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src={logo} 
              alt="FocusFlow Logo" 
              className="w-60 h-30"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform"
            >
              Reviews
            </button>
            <Button 
              size="sm"
              className="btn-gradient-outline text-black hover:text-white transition-all duration-700 transform hover:scale-105"
              onClick={(e) => {
                scrollToSection('cta-section');
                e.currentTarget.blur();
              }}
            >
              Download
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="font-medium text-foreground hover-text-gradient transition-all duration-700 hover:scale-105 transform text-left"
              >
                Reviews
              </button>
              <Button 
                size="sm" 
                className="self-start btn-gradient-outline text-black hover:text-white transition-all duration-700 transform hover:scale-105"
                onClick={(e) => {
                  scrollToSection('cta-section');
                  e.currentTarget.blur();
                }}
              >
                Download
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

