"use client";

import React, { useState } from "react";

// Sample FAQ data
const accordionData = [
  {
    question: "I already have an in-house marketing person. Can you still help?",
    answer:
      "Absolutely. We often collaborate with in-house teams to bring in deeper expertise, structure, and analytics. Think of us as the extension that fills the gaps.",
  },
  {
    question: "How do you measure if what you’re doing is actually working?",
    answer:
      "We don’t believe in vanity metrics. We set clear KPIs upfront — leads, conversions, revenue — and build dashboards so you can track progress in real time.",
  },
  {
    question: "Do you only work with certain industries?",
    answer:
      "No. While we’ve partnered with healthcare, retail, SaaS, manufacturing and more, our approach is research-driven — so we adapt quickly to new industries.",
  },
  {
    question: "Will this require a huge budget?",
    answer:
      "Growth doesn’t always mean spending more — it’s about spending smart. We optimise budgets to deliver maximum ROI, whether you’re scaling or just starting.",
  },
];

const WhyJoinSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F0F2F4] py-20 px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left Column */}
          <div className=" top-24 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Clients
              <br />
              <span className="text-4xl md:text-5xl font-bold text-gray-900">
                Usually Ask?
              </span>
            </h2>
            <p className="mt-4 risep">
              Here are some of the most common questions we get - and how we help solve them.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white px-4 py-6 mb-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3
                    className={` uhp ${
                      openIndex === index ? "text-red-600" : "text-gray-800"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="text-2xl font-light text-gray-500 cursor-pointer">
                    {openIndex === index ? "—" : "+"}
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-2 text-base text-gray-600 lg:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
