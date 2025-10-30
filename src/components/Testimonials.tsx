import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "IT Director, GlobalTech Corp",
      image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjA3NTM4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Navyya transformed our approach to meeting room design. We went from spending weeks coordinating with AV consultants to designing compliant spaces ourselves in under an hour. It's been a game-changer for our global rollout."
    },
    {
      name: "Michael Chen",
      role: "Principal Architect, DesignStudio+",
      image: "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMG9mZmljZXxlbnwxfHx8fDE3NjA2NzQyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "As an architect without deep AV expertise, Navyya gives me the confidence to include comprehensive AV planning in our proposals. The 3D visualizations help clients understand the complete vision from day one."
    },
    {
      name: "James Rodriguez",
      role: "Senior AV Engineer, IntegraTech Solutions",
      image: "https://images.unsplash.com/photo-1759692071780-fa9d6ec04064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnR8ZW58MXx8fHwxNzYwNzUzMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Even as an experienced AV professional, Navyya saves me hours on every project. The automated BOM generation alone has eliminated countless errors and accelerated our installation timelines significantly."
    }
  ];

  return (
    <section id="testimonials" className="w-full px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="text-xl text-gray-600">
            Hear from professionals who've transformed their workflow with Navyya
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 space-y-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-white group"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10 group-hover:text-primary/20 group-hover:scale-110 transition-all" />
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <ImageWithFallback 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
