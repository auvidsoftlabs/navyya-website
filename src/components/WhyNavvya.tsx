import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhyNavyya() {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDc3NTIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Navyya Dashboard Preview"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-3">
              <h2 className="text-4xl">Why Navyya?</h2>
              <h3 className="text-2xl text-primary">Simplify Complex AV Design Tasks</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Navyya empowers non-technical stakeholders to plan high-quality AV rooms effortlessly. Just input your room size, drag and drop AV devices, and get a professional-grade design in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
