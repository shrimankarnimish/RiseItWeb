"use client";
import React from "react";
import Image from "next/image";
import person1 from "../../public/Assets/Images/dm1.jpg";
import person2 from "../../public/Assets/Images/dm2.jpg";

const AboutSection = () => {
  return (
    <section style={{ backgroundColor: "#F0F2F4" }}>
      <div className="container-wrapper relative">
        <div className="grid lg:grid-cols-2 gap-9 items-start">
          {/* Left Text Section */}
          <div>
            <h1 className="uh1 text-4xl font-bold mb-6">Why Us</h1>
            <p className="uh2 max-w-xl text-lg leading-relaxed mb-10">
              Because growth isn't a gimmick. It's a system.
              <br />
              And we engineer it - with analytics, strategy, and relentless
              optimisation.
            </p>
            <button className="bg-[#0D0D0D] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg hover:text-[#2E8BFF]">
              Let&apos;s work together
            </button>
          </div>

          {/* Right Team Cards */}
          <div className="relative flex flex-col items-center lg:items-end gap-6 lg:gap-0 min-h-[600px] lg:min-h-[650px]">
            {/* Back Card - Absolute inside container-wrapper */}
            <div
              className="w-80 md:w-96 lg:w-[450px] xl:w-[500px]
                bg-white rounded-3xl shadow-xl p-6 z-0
                absolute lg:top-24 lg:left-0 xl:left-6"
            >
              <Image
                src={person2}
                alt="Team Member"
                className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
              />
            </div>

            {/* Front Card */}
            <div className="w-80 md:w-96 lg:w-[450px] xl:w-[500px] bg-white rounded-3xl shadow-xl p-6 z-10 lg:mr-0">
              <Image
                src={person1}
                alt="Team Member"
                className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
