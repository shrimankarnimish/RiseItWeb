"use client";

import React from "react";
import { FadeRight, FadeLeft, FadeUp, FadeDown } from "./Animations";
import {
  Mail,
  BarChart3,
  ShoppingBag,
  Globe2,
  Megaphone,
  Zap,
  MessageSquare,
  Users,
} from "lucide-react";

const IntegrationSection = () => {
  const icons = [
    { Icon: Mail, label: "Email" },
    { Icon: BarChart3, label: "Analytics" },
    { Icon: ShoppingBag, label: "E-commerce" },
    { Icon: Globe2, label: "SEO" },
    { Icon: Megaphone, label: "Ads" },
    { Icon: Zap, label: "Automation" },
    { Icon: MessageSquare, label: "Chat" },
    { Icon: Users, label: "CRM" },
  ];

  return (
    <section className="bg-[#F0F2F4] py-0 px-1 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column: Icons */}
          <FadeLeft>
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 justify-items-center">
              {icons.map(({ Icon, label }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-500 transition-colors duration-300 mb-1" />
                  <span className="text-xs text-gray-600">{label}</span>
                </div>
              ))}
            </div>
          </FadeLeft>
          {/* Right Column: Text & Button */}
          <FadeRight>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Growth doesn’t come from guesswork.
              </h2>

              <p className="mt-4 risep">
                It comes from systems, strategy, and smart execution.{" "}
                <span className="font-semibold">
                  Ready to see how that looks for your business?
                </span>
              </p>

              {/* Global Button or Link */}
              <button className="mt-6 btn-primary">Let's Talk</button>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
