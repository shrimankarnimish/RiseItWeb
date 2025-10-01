"use client";
import React from "react";
import FAQ from "@/components/FAQ";

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
    },
    {
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=250&fit=crop",
      title: "Every strategy starts with listening, not selling.",
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
                {/* <h1 className="block lg:hidden text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Our Origin Story
                </h1> */}

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-sm md:text-base titledesc">
                    Rise IT Digital began with one observation: many businesses
                    were investing in digital, but not seeing growth they could
                    measure. Campaigns looked busy, reports looked impressive,
                    but results often felt disconnected from actual business
                    goals.
                  </p>

                  <p className="text-sm md:text-base titledesc">
                    We wanted to fix that. Our approach is simple — every
                    digital effort should be backed by research, guided by
                    analytics, and tied to outcomes that matter: more leads,
                    stronger brands, and sustainable growth.
                  </p>
                  <p className="text-sm md:text-base titledesc">
                    What started as a small team with this belief has grown into
                    a partner for businesses who want digital that’s practical,
                    transparent, and built to last.
                  </p>
                </div>
              </div>
            </FadeLeft>
          </div>
        </div>
      </div>

      {/* NIMISH */}

      {/* Second Section - Strategic Vision & Execution */}
      <div className="min-h-screen bg-[#BCC5CF] flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center p-8 lg:p-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-gray-600">
              These aren’t just ideas. They’re principles that guide everything{" "}
              <span className="text-[#2E8BFF] font-medium">we do</span>:
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full bg-black p-8 lg:p-16 flex flex-col">
          <h2 className="text-lg md:text-xl mb-8 lg:mb-12 text-[#BFBFBF]">
            The Way We Think
          </h2>

          <div className="space-y-6 lg:space-y-8 flex-1">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 group"
              >
                <div className="w-full sm:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-gray-200 text-base md:text-lg font-light mb-1 sm:mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  {project.company && (
                    <p className="text-gray-500 text-sm">{project.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default AboutSection;
