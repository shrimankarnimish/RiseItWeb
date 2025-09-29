"use client";
import React from "react";
import Image from "next/image";

// placeholder images (replace with your own)
import person1 from "../../public/Assets/Images/dm1.jpg";
import person2 from "../../public/Assets/Images/dm2.jpg";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <div className="mb-12">
            <h1 className="uh1 mb-6">Why Us</h1>
          </div>
          <p className="uh2 max-w-xl text-lg leading-relaxed">
            Because growth isn’t a gimmick. It’s a system.
            <br />
            And we engineer it - with analytics, strategy, and relentless
            optimisation.
          </p>
          <button className="bg-[#0D0D0D] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg hover:text-[#2E8BFF] mt-10">
            Let&apos;s work together
          </button>
        </div>

        {/* Right Team Cards */}
        <div className="relative flex flex-col items-center lg:items-end gap-6 lg:gap-0">
          {/* Card 1 */}
          <div className="w-80 md:w-96 bg-white rounded-3xl shadow-xl p-6 z-0 
                          lg:absolute lg:top-20 lg:left-0">
            <Image
              src={person2}
              alt="Team Member"
              className="rounded-2xl w-full h-56 object-cover mb-4"
            />
          </div>

          {/* Card 2 (on top) */}
          <div className="w-80 md:w-96 bg-white rounded-3xl shadow-xl p-6 z-10">
            <Image
              src={person1}
              alt="Team Member"
              className="rounded-2xl w-full h-56 object-cover mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
