"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedVideo() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    gsap.set(video, {
      width: "400px",
      height: "225px",
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center",
      zIndex: 10,
    });

    gsap.to(video, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=100%",
        scrub: 1, 
        pin: true,
      },
      width: "100vw",
      height: "100vh",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
      ease: "power2.out", // Optional easing
    });
  }, []);
 
  return (
    <div ref={containerRef}>
      <div style={{ height: "100vh", position: "relative" }}>
        <video
          ref={videoRef}
          src="/assets/images/typography_1.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ objectFit: "cover" }}
        />
      </div>

      <section
        style={{
          height: "100vh",
          backgroundColor: "#111",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Next Section</h1>
      </section>
    </div>
  );
}
