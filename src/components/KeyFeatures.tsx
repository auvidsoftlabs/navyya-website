import { Check, Box, FileText, Shield, Edit3 } from "lucide-react";
import { Card } from "./ui/card";

export function KeyFeatures() {
  const features = [
    {
      icon: Edit3,
      title: "No Design Skills Required",
      subtitle: "Intuitive Design for Everyone",
      bullets: [
        "Simple drag-and-drop interface",
        "Pre-configured room templates",
        "Visual design guidance",
        "No technical expertise required"
      ]
    },
    {
      icon: Box,
      title: "Instant 3D Room Visuals",
      subtitle: "Real-Time 3D Visualization",
      bullets: [
        "Real-time 3D rendering",
        "Multiple viewing angles",
        "Photorealistic materials",
        "Interactive walkthrough mode"
      ]
    },
    {
      icon: FileText,
      title: "Automated Bill of Materials",
      subtitle: "Smart Bill of Materials Generation",
      bullets: [
        "Automatic cost calculation",
        "Real-time pricing updates",
        "Detailed specifications",
        "Export to multiple formats"
      ]
    },
    {
      icon: Shield,
      title: "Compliance Built In",
      subtitle: "Industry Standards Compliance",
      bullets: [
        "ADA compliance checking",
        "Fire safety regulations",
        "Industry best practices",
        "Automated validation"
      ]
    },
    {
      icon: Check,
      title: "Flexible & Editable",
      subtitle: "Complete Design Flexibility",
      bullets: [
        "Version control",
        "Unlimited revisions",
        "Collaborative editing",
        "Change tracking"
      ]
    }
  ];

  return (
    <section id="features" className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl">Key Features</h2>
          <p className="text-xl text-gray-600">
            Everything you need to design professional AV rooms without the complexity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 group"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 group-hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl">{feature.title}</h3>
                  <p className="text-sm text-primary">{feature.subtitle}</p>
                </div>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
