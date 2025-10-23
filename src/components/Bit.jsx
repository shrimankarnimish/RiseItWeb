"use client";
import { motion } from "framer-motion";
import React from "react";
import { FadeLeft, FadeRight,FadeInUp } from "@/components/Animations"

const InfoSection = () => {
  const items = [
    {
      title: "Helping you understand your business",
      text: "No matter the industry or sector our first task is always to understand your offering better than you. By uncovering  makes your business exceptional, we craft a strategy that highlights.",
    },
    {
      title: "Don't worry, we've got this for your business ",
      text: "We take full ownership of your projects, so you can focus on what matters most. With our expertise delivering real results, you gain a competitive edge without the added hassle.",
    },
    {
      title: "Stay ahead, don't follow, Don't worry",
      text: "Forget chasing competitors, you’ll be too busy outpacing them. True market leaders thrive by embracing change, and we’ll position you at the forefront with smart .",
    },
  ];

  return (
    <section className="bg-[#FFFFF] pt-20 pb-58">
    <FadeInUp>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative container-wrapper">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="relative pr-6 md:pr-8 lg:pr-10">
              <div className="pl-6 md:pl-8 lg:pl-10">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="risep text-left">{item.text}</p>
              </div>
              {index !== items.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0, opacity: 0, originY: 1 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="absolute top-0 right-0 w-[2px] h-full bg-gray-500"
                />
              )}
            </div>

            {/* Divider line (only for 1st and 2nd column) */}
            {index !== items.length - 1 && (
              <motion.div
                initial={{ scaleY: 0, opacity: 0, originY: 1 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute top-0 right-0 translate-x-1/2 w-[2px] h-full bg-gray-500"
              />
            )}
          </div>
        ))}
      </div>
      </FadeInUp>
    </section>
  );
};

export default InfoSection;
