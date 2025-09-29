"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#F0F2F4] pt-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Full Width Paragraph */}
        <div>
          <h2 className="titleabout leading-snug">
            Our Origin<br />
            <span className="italic font-medium">Story</span>
          </h2>
        </div>

        {/* Two Half-Width Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="titledesc">
              By partnering with our clients to gain a deeper understanding of their 
              business needs, we develop strategies that create results-driven brands.
            </p>
          </div>
          <div>
            <p className="titledesc">
              Our team focuses on innovative design and strategic marketing solutions 
              that help businesses stand out and achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
