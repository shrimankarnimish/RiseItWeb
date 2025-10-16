"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { icon: "💡", title: "Idea", desc: "A bright idea comes first." },
  { icon: "🚀", title: "Launch", desc: "Send your product to the stars." },
  { icon: "🔧", title: "Build", desc: "Tools for the modern web." },
  { icon: "📈", title: "Grow", desc: "Watch your metrics climb." },
];

export default function AnimatedCards() {
  const cardsRef = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    // Init Lenis (optional but recommended)
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Animate cards into grid layout on scroll
    cardsRef.current.forEach((card, index) => {
      const x = (index - 1.5) * 300; // spacing for 4 cards

      gsap.to(card, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500",
          scrub: true,
        },
        x: x,
        y: 0,
        rotationZ: 0,
        scale: 1,
        ease: "power2.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        // background: "linear-gradient(135deg, #2de2c9, #0ca678)",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: "1000px",
          marginTop: "0vh",
          paddingTop:"20vh"
        }}
      >
        <h1
          style={{
            position: "absolute",
            // top: "0%",
            bottom: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            zIndex: 10,
            marginBottom: "10vh",
          }}
        >
          Advanced Event Solution
        </h1>
        {cardsData.map((card, index) => {
          // Set initial "X"/"+" rotated positions
          const transforms = [
            { x: -100, y: -100, rotate: -45 },
            { x: 100, y: -100, rotate: 45 },
            { x: -100, y: 100, rotate: 45 },
            { x: 100, y: 100, rotate: -45 },
          ];

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                position: "absolute",
                width: "180px",
                height: "240px",
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "20px",
                transform: `translate(${transforms[index].x}px, ${transforms[index].y}px) rotateZ(${transforms[index].rotate}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.3s",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {card.icon}
              </div>
              <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
