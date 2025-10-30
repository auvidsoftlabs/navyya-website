import { Building2, Users, Wrench } from "lucide-react";
import { Card } from "./ui/card";

export function WhoCanUse() {
  const personas = [
    {
      icon: Building2,
      title: "Commercial Architects",
      description: "Collaborate on AV without deep AV knowledge",
      benefits: [
        "Integrate AV planning into architectural workflow",
        "Ensure design compatibility early",
        "Present complete solutions to clients"
      ]
    },
    {
      icon: Users,
      title: "Corporate IT Teams",
      description: "Standardize meeting room technology across sites",
      benefits: [
        "Maintain consistency across locations",
        "Budget accurately for AV investments",
        "Reduce deployment time and costs"
      ]
    },
    {
      icon: Wrench,
      title: "AV Engineers & System Integrators",
      description: "Reduce design time and errors",
      benefits: [
        "Streamline the design process",
        "Minimize costly installation mistakes",
        "Focus on complex custom solutions"
      ]
    }
  ];

  return (
    <section id="who-can-use" className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl">Who Can Use Navyya</h2>
          <p className="text-xl text-gray-600">
            Designed for everyone involved in creating modern workspaces
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <Card 
              key={index} 
              className="p-8 space-y-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-primary/50 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <persona.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="space-y-2 relative">
                <h3 className="text-2xl">{persona.title}</h3>
                <p className="text-gray-600">{persona.description}</p>
              </div>
              <ul className="space-y-3 relative">
                {persona.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
