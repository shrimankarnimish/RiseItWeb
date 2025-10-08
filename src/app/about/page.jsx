"use client";
import React from "react";
import FAQ from "@/components/FAQ"; 
import { FadeLeft, FadeRight, FadeUp } from "@/components/Animations"; 
import AboutCta from "@/components/AboutCta";

const AboutSection = () => {

  const principles = [
    {
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop",
      title:
        "Every brand has its own growth curve. We design systems that respect that.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&auto=format&fit=crop",
      title: "Good decisions come from data, and the instincts behind it.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=500&auto=format&fit=crop",
      title:
        "Marketing should be measured in business impact, not impressions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&auto=format&fit=crop",
      title: "Consistency compounds faster than campaigns.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop",
      title: "Every strategy starts with listening, not selling.",
    },
  ];

  return (
    
      <div className="bg-[#F0F2F4] ">
        <div className="min-h-screen flex items-center justify-center px-4 py-1 md:py-20">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeRight>
                <div className="relative order-2 lg:order-1">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop"
                      alt="Engineer working on electronics"
                      className="w-full h-[650px] object-cover"
                    />
                  </div>
                </div>
              </FadeRight>

              {/* Right Column - Content */}
              <FadeLeft>
                <div className="order-1 lg:order-2 lg:pl-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our Origin Story
                  </h1>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-base md:text-lg risep">
                      Rise IT Digital began with one observation: many
                      businesses were investing in digital, but not seeing
                      growth they could measure. Campaigns looked busy, reports
                      looked impressive, but results often felt disconnected
                      from actual business goals.
                    </p>
                    <p className="text-base md:text-lg risep">
                      We wanted to fix that. Our approach is simple - every
                      digital effort should be backed by research, guided by
                      analytics, and tied to outcomes that matter: more leads,
                      stronger brands, and sustainable growth.
                    </p>
                    <p className="text-base md:text-lg risep">
                      What started as a small team with this belief has grown
                      into a partner for businesses who want digital that’s
                      practical, transparent, and built to last.
                    </p>
                  </div>
                </div>
              </FadeLeft>
            </div>
          </div>
        </div>
      

      {/* Section 2: The Way We Think */}
      <div className="py-1 px-4 bg-[#F0F2F4]">
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Way We Think
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto risep">
              These aren’t just ideas. They’re principles that guide everything
              we do:
            </p>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {principles.map((principle, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-gray-800 font-semibold text-lg leading-snug risep">
                      {principle.title}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: FAQ */}
      <FadeUp>
        <FAQ />
      </FadeUp>
      <AboutCta/>
    </div>

  );
};

export default AboutSection;
