"use client";
import React from "react";
import Section from "../about/section";
import { FadeLeft, FadeRight, FadeUp, FadeDown } from "@/components/Animations";

const AboutSection = () => {
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
                {/* Our Origin Story title for desktop - now aligned with text */}
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

      <Section />
      {/* Second Section - Strategic Vision & Execution */}
    </div>
  );
};

export default AboutSection;
