import { Ruler, MousePointer, Box, FileSpreadsheet, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Ruler,
      number: "01",
      title: "Input Room Dimensions",
      description: "Start by entering your room's length, width, and height to create the foundation of your design."
    },
    {
      icon: MousePointer,
      number: "02",
      title: "Drag & Drop AV Devices",
      description: "Select from our library of AV equipment and place them in your virtual room with simple drag-and-drop."
    },
    {
      icon: Box,
      number: "03",
      title: "Visualize with 3D Modelling",
      description: "See your design come to life in real-time 3D, with photorealistic rendering and multiple viewing angles."
    },
    {
      icon: FileSpreadsheet,
      number: "04",
      title: "Auto-Generate a Bill of Materials (BOM)",
      description: "Automatically generate a detailed BOM with pricing, specifications, and quantities for all equipment."
    },
    {
      icon: CheckCircle2,
      number: "05",
      title: "Review, Adjust & Finalize",
      description: "Make any final adjustments, validate compliance, and export your design for implementation."
    }
  ];

  return (
    <section id="how-it-works" className="w-full px-6 py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl">How Navyya Works</h2>
          <p className="text-xl text-gray-600">
            A simple 5-step workflow for designing professional AV-enabled meeting spaces with no technical expertise required.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-primary/60 to-gray-200 rounded-full"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 space-y-4 border-2 border-gray-100 hover:border-primary hover:shadow-2xl transition-all duration-300 h-full group">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary group-hover:scale-110 transition-transform flex items-center justify-center flex-shrink-0 shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-6xl text-gray-100 group-hover:text-primary/20 transition-colors">{step.number}</span>
                  </div>
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
