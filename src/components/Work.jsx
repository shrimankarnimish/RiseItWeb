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
    <section className="bg-[#F0F2F4] pt-36 pb-20 overflow-hidden">
      {/* Heading */}
      <div className="mb-12 container-wrapper pt-16">
        <h2 className="uh1">Industries We Serve</h2>
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
