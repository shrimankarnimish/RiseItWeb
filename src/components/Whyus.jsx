"use client";
import React from "react";
import Image from "next/image";
import person1 from "../../public/Assets/Images/dm1.jpg"
import person2 from "../../public/Assets/Images/dm2.jpg";

const AboutSection = () => {
  return (
    <section style={{ backgroundColor: "#ffffffff" }}>
      <style jsx>{`
        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .animate-float-up {
          animation: floatUp 3s ease-in-out infinite;
        }

        .animate-float-down {
          animation: floatDown 3s ease-in-out infinite;
        }
      `}</style>

      <div className="container-wrapper pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-9 items-start">
          {/* Left Text Section */}
          <div>
            <h1 className="uh1 text-3xl sm:text-4xl font-bold mb-6">Why Us</h1>
            <p className="uh2 max-w-xl text-base sm:text-lg leading-relaxed mb-10">
              Because growth isn't a gimmick. It's a system.
              <br />
              And we engineer it - with analytics, strategy, and relentless
              optimisation.
            </p>
            <button className="btn-primary">Let&apos;s work together</button>
          </div>

          {/* Right Team Cards */}
          <div className="relative">
            {/* Desktop: Overlapping cards with animations */}
            <div className="hidden lg:flex flex-col items-end gap-0 min-h-[650px]">
              {/* Top Right Card - Floating Up */}
              <div className="w-[450px] xl:w-[500px] bg-white rounded-3xl shadow-xl p-6 z-20 relative animate-float-up">
                <Image
                  src={person1}
                  alt="Team Member"
                  className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
                />
              </div>

              {/* Bottom Left Card - Floating Down - Overlapping */}
              <div className="w-[450px] xl:w-[500px] bg-white rounded-3xl shadow-xl p-6 z-10 absolute top-48 left-0 animate-float-down">
                <Image
                  src={person2}
                  alt="Team Member"
                  className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
                />
              </div>
            </div>

            {/* Mobile & Tablet: Cards stacked one by one */}
            <div className="lg:hidden flex flex-col gap-6">
              <div className="w-full bg-white rounded-3xl shadow-xl p-4 sm:p-6">
               <Image
                  src={person1}
                  alt="Team Member"
                  className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
                />
              </div>

              <div className="w-full bg-white rounded-3xl shadow-xl p-4 sm:p-6">
                <Image
                  src={person2}
                  alt="Team Member"
                  className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;