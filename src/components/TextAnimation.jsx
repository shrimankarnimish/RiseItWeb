"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LogoAnimation() {
  const logoRef = useRef(null);

  useEffect(() => {
    const el = logoRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%", // when logo enters viewport
        toggleActions: "play none none none",
      },
    })
      .to(el, {
        scaleY: 4, // stretch vertically
        duration: 0.8,
        ease: "power2.inOut",
      })
      .to(el, {
        scaleY: 1, // return to original size
        skewY: 10, // add skew effect
        duration: 0.5,
        ease: "power1.in",
      })
      .to(el, {
        skewY: 0, // reset skew back to normal
        duration: 0.4,
        ease: "power2.out",
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-300">
      <h1
        ref={logoRef}
        className="text-9xl font-bold text-black"
        style={{ transformOrigin: "center bottom" }}
        >
        WOLF OLLINS
      </h1>
    </div>
  );
}
