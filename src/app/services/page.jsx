"use client";
import React from "react";
import Link from "next/link";
import "./services.css";
import {
  Briefcase,
  BarChart,
  Users,
  Globe,
  PenTool,
  Layers,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Leads & Conversions",
    description:
      "SEO, PPC campaigns, and email marketing strategies designed to drive quality traffic and maximize conversions.",
    icon: <BarChart className="w-8 h-8 text-white" />,
    color: "bg-[#2E8BFF]",
  },
  {
    id: 2,
    title: "Visibility & Engagement",
    description:
      "Boost brand presence through social media, content marketing, and PR campaigns tailored to your audience.",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-[#FF6B6B]",
  },
  {
    id: 3,
    title: "Revenue & Retention",
    description:
      "CRM integrations, remarketing, and marketing automations to increase customer lifetime value and sales.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "bg-[#4CAF50]",
  },
  {
    id: 4,
    title: "Decisions & Insights",
    description:
      "Data-driven strategies with analytics, reports, and insights to help make informed growth decisions.",
    icon: <Layers className="w-8 h-8 text-white" />,
    color: "bg-[#FFA500]",
  },
  {
    id: 5,
    title: "Web Presence",
    description:
      "Modern, responsive, and SEO-optimized websites designed to convert visitors into loyal customers.",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "bg-[#8A2BE2]",
  },
  {
    id: 6,
    title: "Brand Collateral",
    description:
      "Creative designs, digital assets, and brand storytelling that align with your business identity.",
    icon: <PenTool className="w-8 h-8 text-white" />,
    color: "bg-[#FF1493]",
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 pt-[120px] pb-20 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Our <span className="text-[#2E8BFF]">Services</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Tailored digital solutions that transform visibility into measurable
          results and drive growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-transform duration-300 border-t-4 border-transparent hover:border-[#2E8BFF]"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${service.color}`}
            >
              {service.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="card-footer">
        <div className="card-footer flex justify-center">
          <div className="mt-20 flex justify-center">
            <div className="bg-[#0D0D0D] backdrop-blur-md px-6 py-3 rounded-full shadow-lg inline-flex items-center gap-2 cursor-pointer group">
              <span className="text-[16px] text-white font-medium group-hover:text-[#2E8BFF]">
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
