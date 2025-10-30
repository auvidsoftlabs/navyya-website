import { Heart, CheckCircle2, Cloud, TrendingDown } from "lucide-react";

export function WhatSetsApart() {
  const highlights = [
    {
      icon: Heart,
      title: "Built for Real Users, Not Just AV Pros",
      description: "Designed with non-technical stakeholders in mind, making professional AV design accessible to everyone."
    },
    {
      icon: CheckCircle2,
      title: "AV Standards Compliance Engine",
      description: "Automatically validates designs against industry standards, accessibility requirements, and best practices."
    },
    {
      icon: Cloud,
      title: "Cloud-Based SaaS with Collaboration Tools",
      description: "Work from anywhere, share designs with team members, and collaborate in real-time on projects."
    },
    {
      icon: TrendingDown,
      title: "Time and Cost Savings on Every Project",
      description: "Reduce design time from days to minutes, minimize errors, and optimize equipment selection for budget efficiency."
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl">What Sets Navyya Apart</h2>
          <p className="text-lg text-gray-600">
            The only AV design platform built for speed, compliance, and collaboration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-all hover:shadow-lg group"
            >
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
