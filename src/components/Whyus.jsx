"use client";
import React from "react";
import Image from "next/image";
import person1 from "../../public/Assets/Images/dm1.jpg";
import person2 from "../../public/Assets/Images/dm2.jpg";
import { FadeLeft, FadeRight } from "@/components/Animations";

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

      <div className="container-wrapper relative">
        <div className="grid lg:grid-cols-2 gap-9 items-start">
          {/* Left Text Section */}
          <FadeLeft>
            <div>
              <h1 className="uh1 text-4xl font-bold mb-6">Why Us</h1>
              <p className="uh2 max-w-xl text-lg leading-relaxed mb-10">
                Because growth isn't a gimmick. It's a system.
                <br />
                And we engineer it - with analytics, strategy, and relentless
                optimisation.
              </p>
              <button className="btn-primary">Let&apos;s work together</button>
            </div>
          </FadeLeft>

          {/* Right Team Cards */}
          <FadeRight>
            <div className="relative flex flex-col items-center lg:items-end gap-6 lg:gap-0 min-h-[600px] lg:min-h-[650px]">
              {/* Back Card - Floating Down */}
              <div className="w-80 md:w-96 lg:w-[450px] xl:w-[500px] bg-white rounded-3xl shadow-xl p-6 z-0 absolute lg:top-24 lg:left-0 xl:left-6 animate-float-down">
                <Image
                  src={person2}
                  alt="Team Member"
                  className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
                />
              </div>

              {/* Front Card - Floating Up */}
              <div className="w-80 md:w-96 lg:w-[450px] xl:w-[500px] bg-white rounded-3xl shadow-xl p-6 z-10 lg:mr-0 animate-float-up">
                <Image
                  src={person1}
                  alt="Team Member"
                  className="rounded-2xl w-full h-56 lg:h-72 xl:h-80 object-cover"
                />
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
