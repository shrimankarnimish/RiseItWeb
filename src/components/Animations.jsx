// components/animations/FadeAnimations.js
"use client";
import { motion } from "framer-motion";
import React from "react";

const fadeVariants = (direction = "up", distance = 50) => {
  switch (direction) {
    case "left":
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case "up":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "down":
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

const Fade = ({ children, direction = "up", duration = 0.8, delay = 0 }) => {
  const variants = fadeVariants(direction);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Reusable fade components
export const FadeLeft = (props) => <Fade {...props} direction="left" />;
export const FadeRight = (props) => <Fade {...props} direction="right" />;
export const FadeUp = (props) => <Fade {...props} direction="up" />;
export const FadeDown = (props) => <Fade {...props} direction="down" />;

// New explicit fade in up/down components
export const FadeInUp = (props) => <Fade {...props} direction="up" />;
export const FadeInDown = (props) => <Fade {...props} direction="down" />;
