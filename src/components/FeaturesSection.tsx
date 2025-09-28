import { CheckSquare, TrendingUp, BarChart3, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Organize your to-dos with smart prioritization and intuitive drag-and-drop functionality."
  },
  {
    icon: TrendingUp,
    title: "Habit Tracking", 
    description: "Build lasting habits with visual streak tracking and personalized insights."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Gain deep insights into your productivity patterns with beautiful, actionable analytics."
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Access your productivity tools anywhere with seamless sync across all your devices."
  }
];

export const FeaturesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="features" 
      ref={elementRef}
      className={`py-24 bg-gradient-subtle transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="text-gradient">stay productive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FocusFlow combines the best productivity tools into one seamless experience, 
            designed to help you achieve your goals faster than ever before.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-hover bg-card rounded-2xl p-8 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};