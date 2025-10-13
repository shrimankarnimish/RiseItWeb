// // HelloAnimation.jsx
// import React from "react";
// import "./HelloAnimation.css"; // Import the CSS

// const HelloAnimation = () => {
//   return (
//     <div className="hello-parent">
//       <svg
//         className="hello-word"
//         width="365"
//         height="365"
//         viewBox="0 0 365 365"
//       >
//         <g id="H-letter">
//           <line
//             className="H-left-stroke"
//             x1="17"
//             y1="0"
//             x2="17"
//             y2="124"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//           <line
//             className="H-mid-stroke"
//             x1="33"
//             y1="62"
//             x2="68"
//             y2="62"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//           <line
//             className="H-right-stroke"
//             x1="84"
//             y1="0"
//             x2="84"
//             y2="124"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//         </g>

//         <g id="E-letter">
//           <line
//             className="E-left-stroke"
//             x1="138"
//             y1="0"
//             x2="138"
//             y2="124"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//           <line
//             className="E-top-stroke"
//             x1="154"
//             y1="17"
//             x2="201"
//             y2="17"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//           <line
//             className="E-mid-stroke"
//             x1="154"
//             y1="62"
//             x2="196"
//             y2="62"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//           <line
//             className="E-bottom-stroke"
//             x1="154"
//             y1="107"
//             x2="201"
//             y2="107"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//         </g>

//         <g id="L-one-letter">
//           <line
//             className="L-one-long-stroke"
//             x1="17"
//             y1="153"
//             x2="17"
//             y2="277"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//           <line
//             className="L-one-short-stroke"
//             x1="33"
//             y1="260"
//             x2="77"
//             y2="260"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//         </g>

//         <g id="L-two-letter">
//           <line
//             className="L-two-long-stroke"
//             x1="104"
//             y1="153"
//             x2="104"
//             y2="277"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//           <line
//             className="L-two-short-stroke"
//             x1="120"
//             y1="260"
//             x2="164"
//             y2="260"
//             stroke="#000"
//             fill="none"
//             strokeWidth="34"
//           />
//         </g>

//         <g id="O-letter">
//           <circle
//             className="O-stroke"
//             cx="231"
//             cy="215"
//             r="48"
//             stroke="#000"
//             fill="none"
//             strokeWidth="31"
//           />    
//         </g>

//         <g id="red-dot">
//           <line
//             x1="325"
//             y1="260"
//             x2="325"
//             y2="260"
//             stroke="#FF5851"
//             className="red-dot"
//           />
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default HelloAnimation;



"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
  const containerRef = useRef(null);
  const boxRefs = useRef([]);
  boxRefs.current = [];

  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) boxRefs.current.push(el);
  };

  useEffect(() => {
    const initialPositions = [
      { x: -150, y: -150, rotation: 45 },
      { x: 150, y: -150, rotation: -45 },
      { x: -150, y: 150, rotation: -45 },
      { x: 150, y: 150, rotation: 45 },
    ];

    const finalPositions = [
      { x: -420, y: 0, rotation: 0 },
      { x: -140, y: 0, rotation: 0 },
      { x: 140, y: 0, rotation: 0 },
      { x: 420, y: 0, rotation: 0 },
    ];

    boxRefs.current.forEach((box, i) => {
      gsap.set(box, { ...initialPositions[i] });
    });

    boxRefs.current.forEach((box, i) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        x: finalPositions[i].x,
        y: finalPositions[i].y,
        rotation: finalPositions[i].rotation,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-[#F0F2F4] relative z-10">
      {/* Hero Section with Card Animation */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-[150vh] flex justify-center items-center overflow-visible"
      >
        {["User Focus", "Smart Tools", "Innovation", "Performance"].map(
          (title, idx) => {
            const colors = [
              "from-pink-500 to-red-500",
              "from-yellow-400 to-orange-500",
              "from-red-400 to-pink-300",
              "from-green-400 to-emerald-500",
            ];
            const desc = [
              "Experience-driven design for seamless interactions",
              "Powerful features that adapt to your needs",
              "Cutting-edge solutions for modern challenges",
              "Lightning-fast and optimized for excellence",
            ];
            return (
              <div
                key={idx}
                ref={addToRefs}
                className={`absolute w-64 h-80 bg-gradient-to-br ${colors[idx]} rounded-3xl shadow-2xl z-20`}
              >
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{title}</h2>
                  <p className="text-white/80 text-sm">{desc[idx]}</p>
                </div>
              </div>
            );
          }
        )}
      </div>

 
    </div>
  );
};

export default ScrollCards;
