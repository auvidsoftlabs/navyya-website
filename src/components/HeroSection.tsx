import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Play } from "lucide-react";
import heroImageUrl from "../assets/hero.jpeg?url";

type HeroSectionProps = {
  onRequestAccess: () => void;
  onSeeHowItWorks: () => void;
};

export function HeroSection({
  onRequestAccess,
  onSeeHowItWorks,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="w-full px-6 pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white via-gray-50 to-primary/5 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">
                AI-Powered AV Design Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
              Design AV Rooms in <span className="text-primary">Minutes</span> –
              No Expertise Needed
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transform how corporate spaces are designed with Navyya, the smart
              SaaS platform that automates AV room planning. From boardrooms to
              huddle spaces, get a standards-compliant 3D design and bill of
              materials in just a few clicks.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={onRequestAccess}
                className="bg-accent hover:bg-accent/90 rounded-full px-8 shadow-lg hover:shadow-xl transition-all group"
              >
                Request Access
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={onSeeHowItWorks}
                className="rounded-full px-8 bg-white border-2 border-gray-200 hover:border-accent hover:bg-accent/5 text-gray-900 shadow-sm hover:shadow-md transition-all group"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                See How It Works
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative">
              <ImageWithFallback
                src={heroImageUrl}
                alt="AV Room Design Visualization"
                className="relative w-full rounded-3xl shadow-2xl border border-gray-100 object-cover"
              />
              {/* Floating elements */}
              <div
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Design Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
