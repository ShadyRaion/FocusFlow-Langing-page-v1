import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Stay Focused.{" "}
              <span className="text-gradient">Achieve More.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              FocusFlow helps you organize tasks, track habits, and boost productivity — all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary border-0 text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>
          
          {/* Right side - App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl animate-float"></div>
              <img 
                src={appMockup} 
                alt="FocusFlow App Interface Preview" 
                className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg w-full h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform -skew-y-1 origin-bottom-left"></div>
    </section>
  );
};