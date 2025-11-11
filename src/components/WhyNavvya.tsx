import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const whyNavyyaImageUrl = new URL("../assets/whyNavyya.jpeg", import.meta.url)
  .href;

export function WhyNavyya() {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <ImageWithFallback
              src={whyNavyyaImageUrl}
              alt="Navyya Dashboard Preview"
              className="w-full rounded-2xl shadow-xl object-cover"
            />
          </div>
          {/* <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-3">
              <h2 className="text-4xl">Why Navyya?</h2>
              <h3 className="text-2xl text-primary">
                Simplify Complex AV Design Tasks
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Navyya turns complex AV room design into a simple, visual
              experience. Whether you’re setting up a meeting room, classroom,
              or home theater, you can plan your space in just three easy steps
              — input your room details, place your AV devices, and generate an
              instant, professional-grade layout. What once took hours of
              technical coordination can now be done in minutes. Navyya helps
              architects, consultants, and clients collaborate effortlessly,
              explore multiple design possibilities, and make confident
              decisions before implementation.
            </p>
          </div> */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-3">
              <h2 className="text-4xl">Why Navyya?</h2>
              <h3 className="text-2xl text-primary">
                Simplify Complex AV Design Tasks
              </h3>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Navyya turns complex AV room design into a simple, visual
                experience. Whether you’re setting up a meeting room, classroom,
                or home theater, you can plan your space effortlessly in just
                three easy steps:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Input room details</strong> – define your room
                  dimensions and layout.
                </li>
                <li>
                  <strong>Place AV devices</strong> – drag and drop components
                  like displays, speakers, and microphones.
                </li>
                <li>
                  <strong>Generate instant design</strong> – get a
                  professional-grade layout in minutes.
                </li>
              </ul>
              <p>
                What once took hours of coordination now happens in minutes.
                Navyya helps architects, consultants, and clients collaborate
                seamlessly, explore multiple design possibilities, and make
                confident decisions before implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
