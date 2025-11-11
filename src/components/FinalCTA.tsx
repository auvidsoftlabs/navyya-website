import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type FinalCTAProps = {
  onRequestAccess: () => void;
  onSeeHowItWorks: () => void;
};

export function FinalCTA({ onRequestAccess, onSeeHowItWorks }: FinalCTAProps) {

  return (
    <>
      <section id="final-cta" className="w-full px-6 py-24 md:py-32 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-5xl md:text-6xl text-white leading-tight">
            Ready to Design Smarter?
          </h2>
          <p className="text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Discover how easy and powerful AV room planning can be with Navyya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={onRequestAccess}
              className="bg-accent hover:bg-accent/90 rounded-full px-10 shadow-2xl hover:shadow-3xl transition-all group text-lg"
            >
              Request Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={onSeeHowItWorks}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-10 text-lg transition-all"
          >
            See How It Works
          </Button>
          </div>
        </div>
      </section>
    </>
  );
}
