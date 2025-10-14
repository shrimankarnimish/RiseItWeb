"use client";
import React from "react";

const services = [
  "Healthcare & Hospitals",
  "SaaS Developers",
  "Business Consulting",
  "Recruiting Agencies",
  "Water Park Equipment",
  "Apparel Retailers",
  "Oral Healthcare",
  "Plastics & Rubber",
  "Electricals",
  "Food & Beverage",
  "Luxury Retail",
  "Performing Arts",
  "Education",
  "Fitness",
  "Banking",
  "Mining & Metals",
  "Natural Stone",
  "Interiors & Furniture",
  "Exhibitions & Trade Shows",
];

const WorkSection = () => {
  return (
    <section className="bg-[#F0F2F4] pt-20 pb-20 overflow-hidden">
      {/* Heading */}
      <div className="container-wrapper relative">
        <div className="grid lg:grid-cols-2 gap-9 items-start">
          
          <div>
            <h1 className="uh1 text-4xl font-bold mb-6">Industries We Serve</h1>
            <p className="uh2 max-w-xl text-lg leading-relaxed mb-10">
              Every sector scales differently. We don’t force-fit playbooks-we
              adapt strategy to your industry.
            </p>
          </div>
        </div>
      </div>
      {/* Dual Direction Marquee */}
      <div className="marquee-container">
        {/* Row 1 - Left Scroll */}
        <div className="marquee-track marquee-left">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="scroll-card">
              <span>{service}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Right Scroll */}
        <div className="marquee-track marquee-right">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="scroll-card">
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
