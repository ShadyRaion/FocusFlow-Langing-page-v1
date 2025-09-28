import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    content: "FocusFlow transformed how I manage my daily tasks. The habit tracking feature alone helped me build a consistent morning routine that increased my productivity by 40%.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez", 
    role: "Freelance Designer",
    company: "Self-employed",
    content: "As a freelancer, staying organized is crucial. FocusFlow's intuitive design and smart analytics help me track my time and hit deadlines consistently.",
    rating: 5,
    avatar: "MR"
  }
];

export const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="testimonials" 
      ref={elementRef}
      className={`py-24 bg-gradient-subtle transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="text-gradient">thousands</span> of users
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the growing community of professionals who have transformed their productivity with FocusFlow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-hover bg-card rounded-3xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};