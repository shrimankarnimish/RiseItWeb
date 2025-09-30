"use client";
import React from "react";

import { FadeLeft, FadeRight } from "@/components/Animations";

const AboutSection = () => {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop",
      title:
        "Every brand has its own growth curve. We design systems that respect that.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=250&fit=crop",
      title: "Good decisions come from data, and the instincts behind it.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop",
      title:
        "Marketing should be measured in business impact, not impressions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop",
      title: "Consistency compounds faster than campaigns.",
      company: "Walmart",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop",
      title: "Every strategy starts with listening, not selling.",
      company: "Walmart",
    },
  ];

  return (
    <div className="bg-gray-100 pt-10">
      {/* First Section - Our Origin Story */}
      <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Column - Image */}
            <FadeRight>
              <div className="relative order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop"
                    alt="Interior designer working"
                    className="w-full h-[650px] object-cover"
                  />
                </div>
              </div>
            </FadeRight>

            {/* Right Column - Content */}
            <FadeLeft>
              <div className="order-1 lg:order-2 lg:pl-24 xl:pl-32">
                {/* Our Origin Story title for desktop */}
                <h1 className="titleabout">Our Origin Story</h1>

                {/* Our Origin Story text for mobile */}
                <h1 className="block lg:hidden text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Our Origin Story
                </h1>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-sm md:text-base titledesc">
                    Hackney started as a small interior design firm in downtown
                    Michigan, aiming to help home buyers to make do with the new
                    space that they had acquired. It soon became apparent that
                    it would make sense to help our clients see beyond the walls
                    and floor plans, and be the ideas people from the get-go.
                  </p>

                  <p className="text-sm md:text-base titledesc">
                    Currently, we offer house realty, interior design, and
                    architecture services in order to help our customers find
                    their forever homes as seamlessly and painlessly as
                    possible. We value our customers above everything else,
                    meaning that we won't take "OK" as an answer.
                  </p>
                </div>
              </div>
            </FadeLeft>
          </div>
        </div>
      </div>

{/* NIMISH */}

      {/* Second Section - Strategic Vision & Execution */}
      <div className="min-h-screen bg-[#BCC5CF] flex">
        {/* Left Section */}
        <div className="w-1/2 flex items-center justify-center p-16">
          <div className="text-left">
            <h1 className="text-7xl font-light leading-tight text-gray-600">
              These aren’t just ideas. They’re principles that guide everything{" "}
              <span className="text-[#2E8BFF] font-medium">we do</span>:
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-black p-16 flex flex-col">
          <h2 className="text-xl mb-12" style={{ color: "#BFBFBF" }}>
            The Way We Think
          </h2>

          <div className="space-y-8 flex-1">
            {projects.map((project, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-gray-200 text-lg font-light mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{project.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
