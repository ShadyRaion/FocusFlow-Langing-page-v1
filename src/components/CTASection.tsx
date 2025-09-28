import { Button } from "@/components/ui/button";
import { ArrowRight, Download, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
    id="cta-section"
      ref={elementRef}
      className={`py-32 bg-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to take control of your{" "}
            <span className="text-gradient">productivity?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Join over 10,000+ professionals who are already achieving more with FocusFlow. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="btn-primary border-0 text-lg px-10 py-5">
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-5 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              onClick={() => scrollToSection('pricing')}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              <span>View Pricing</span>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};