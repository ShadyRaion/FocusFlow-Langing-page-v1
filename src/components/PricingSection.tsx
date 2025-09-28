import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Up to 10 tasks",
      "Basic habit tracking",
      "7-day history",
      "Mobile app access",
    ],
    notIncluded: [
      "Analytics dashboard",
      "Unlimited tasks",
      "Priority support",
      "Team collaboration"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious productivity enthusiasts",
    features: [
      "Unlimited tasks",
      "Advanced habit tracking",
      "Full analytics dashboard",
      "Cross-platform sync",
      "Smart reminders",
      "Priority support"
    ],
    notIncluded: [
      "Team collaboration",
      "Custom integrations"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Team",
    price: "$19",
    period: "/month",
    description: "Built for teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "Custom integrations",
      "Advanced reporting",
      "24/7 support",
      "SSO integration",
      "API access"
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales"
  }
];

export const PricingSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="pricing" 
      ref={elementRef}
      className={`py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose your <span className="text-gradient">productivity plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade as you grow. All plans include our core productivity features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card-hover bg-card rounded-3xl p-8 relative ${
                plan.popular ? 'ring-2 ring-primary shadow-primary/25' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-center opacity-50">
                    <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full text-lg py-6 ${
                  plan.popular 
                    ? 'btn-primary border-0' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">All plans include 14-day free trial • No credit card required</p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>30-day money back</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};