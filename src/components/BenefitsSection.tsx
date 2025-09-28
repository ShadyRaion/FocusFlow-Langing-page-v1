import { Zap, Bell, RefreshCw } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Zap,
    title: "Distraction-Free Interface",
    description: "Clean, minimal design that keeps you focused on what matters most."
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "AI-powered notifications that learn your patterns and adapt to your schedule."
  },
  {
    icon: RefreshCw,
    title: "Sync Across Devices",
    description: "Start on your phone, continue on your laptop. Your progress is always with you."
  }
];

export const BenefitsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="benefits" 
      ref={elementRef}
      className={`py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-gradient">FocusFlow</span> is different
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We've reimagined productivity tools from the ground up, focusing on simplicity, 
              intelligence, and seamless user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform shadow-primary">
                  <benefit.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};