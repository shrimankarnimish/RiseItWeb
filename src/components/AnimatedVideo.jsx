"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Init Lenis
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Card spacing based on screen size
    const spacing = windowWidth < 768 ? 150 : 300;

    // Animate cards into grid layout on scroll
    cardsRef.current.forEach((card, index) => {
      const x = (index - (cardsData.length - 1) / 2) * spacing; // center align

      gsap.to(card, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150",
          scrub: 0.5,
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
  }, [windowWidth]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
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
          paddingTop: "20vh",
        }}
      >
        <h1
          style={{
            position: "absolute",
            bottom: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "grey",
            fontSize: windowWidth < 768 ? "1.5rem" : "2rem",
            fontWeight: "bold",
            zIndex: 10,
            marginBottom: "10vh",
          }}
        >
          {/* Advanced Event Solution */}
        </h1>
        
        {cardsData.map((card, index) => {
          const transforms = windowWidth < 768
            ? [
                { x: -80, y: -80, rotate: -30 },
                { x: 80, y: -80, rotate: 30 },
                { x: -80, y: 80, rotate: 30 },
                { x: 80, y: 80, rotate: -30 },
              ]
            : [
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
                width: windowWidth < 768 ? "140px" : "180px",
                height: windowWidth < 768 ? "200px" : "240px",
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
              <div style={{ fontSize: windowWidth < 768 ? "1.5rem" : "2rem", marginBottom: "10px" }}>
                {card.icon}
              </div>
              <h3 style={{ fontWeight: "bold", marginBottom: "10px", fontSize: windowWidth < 768 ? "1rem" : "1.2rem" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: windowWidth < 768 ? "0.8rem" : "0.9rem", color: "#555" }}>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
