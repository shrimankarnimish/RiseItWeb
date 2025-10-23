// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Lenis from "@studio-freight/lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   { icon: "💡", title: "Idea", desc: "A bright idea comes first." },
//   { icon: "🚀", title: "Launch", desc: "Send your product to the stars." },
//   { icon: "🔧", title: "Build", desc: "Tools for the modern web." },
//   { icon: "📈", title: "Grow", desc: "Watch your metrics climb." },
// ];

// export default function AnimatedCards() {
//   const cardsRef = useRef([]);
//   const containerRef = useRef();
//   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     // Init Lenis
//     const lenis = new Lenis();
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     // Card spacing based on screen size
//     const spacing = windowWidth < 768 ? 180 : 300;

//     // Arrow positions (pointing to top-right)
//     const arrowPositions = windowWidth < 768
//       ? [
//           { x: -120, y: 40, rotate: -15 },   // bottom-left card
//           { x: -40, y: -10, rotate: -10 },   // middle-left card
//           { x: 40, y: -60, rotate: -5 },     // middle-right card
//           { x: 120, y: -110, rotate: 0 },    // top-right card (arrow tip)
//         ]
//       : [
//           { x: -150, y: 50, rotate: -15 },   // bottom-left card
//           { x: -50, y: -15, rotate: -10 },   // middle-left card
//           { x: 50, y: -80, rotate: -5 },     // middle-right card
//           { x: 150, y: -145, rotate: 0 },    // top-right card (arrow tip)
//         ];

//     // Initial entrance animation - cards fly in from 4 directions to cross position
//     const entranceTl = gsap.timeline();
    
//     cardsRef.current.forEach((card, index) => {
//       // Start positions from far outside viewport (each from its corner)
//       const startPositions = [
//         { x: -1000, y: -800, rotation: -180 }, // top-left
//         { x: 1000, y: -800, rotation: 180 },   // top-right
//         { x: -1000, y: 800, rotation: 180 },   // bottom-left
//         { x: 1000, y: 800, rotation: -180 },   // bottom-right
//       ];

//       // Set initial position
//       gsap.set(card, {
//         x: startPositions[index].x,
//         y: startPositions[index].y,
//         rotationZ: startPositions[index].rotation,
//         scale: 0.3,
//         opacity: 0,
//       });

//       // Animate to arrow position
//       entranceTl.to(card, {
//         x: arrowPositions[index].x,
//         y: arrowPositions[index].y,
//         rotationZ: arrowPositions[index].rotate,
//         scale: 1,
//         opacity: 1,
//         duration: 2.5,
//         ease: "back.out(1.2)",
//       }, index * 0.3); // Slight stagger
//     });

//     // Create timeline for sequential card spread on scroll
//     const scrollTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//       }
//     });

//     // Animate each card sequentially from cross to horizontal row
//     cardsRef.current.forEach((card, index) => {
//       const x = (index - (cardsData.length - 1) / 2) * spacing;
      
//       const startTime = index * 0.25;
      
//       scrollTl.to(card, {
//         x: x,
//         y: 0,
//         rotationZ: 0,
//         scale: 1,
//         ease: "power2.out",
//         duration: 0.25,
//       }, startTime);
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       lenis.destroy();
//     };
//   }, [windowWidth]);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         height: "400vh",
//         background: "#fff",
//         position: "relative",
//       }}
//     >
//       <div 
//         style={{
//           height: "100vh",
//           width: "100%",
//           position: "sticky",
//           top: 0,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           perspective: "1000px",
//           paddingTop: "20vh",
//           overflow: "hidden",
//         }}
//       >
//         <h1
//           style={{
//             position: "absolute",
//             bottom: "0%",
//             left: "50%",
//             transform: "translateX(-50%)",
//             color: "grey",
//             fontSize: windowWidth < 768 ? "1.5rem" : "2rem",
//             fontWeight: "bold",
//             zIndex: 10,
//             marginBottom: "10vh",
//           }}
//         >
//           {/* Advanced Event Solution */}
//         </h1>
        
//         {cardsData.map((card, index) => {
//           return (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               style={{
//                 position: "absolute",
//                 width: windowWidth < 768 ? "160px" : "220px",
//                 height: windowWidth < 768 ? "230px" : "280px",
//                 background: "white",
//                 borderRadius: "16px",
//                 boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 padding: "20px",
//                 transformStyle: "preserve-3d",
//                 zIndex: index,
//               }}
//             >
//               <div style={{ fontSize: windowWidth < 768 ? "1.5rem" : "2rem", marginBottom: "10px" }}>
//                 {card.icon}
//               </div>
//               <h3 style={{ fontWeight: "bold", marginBottom: "10px", fontSize: windowWidth < 768 ? "1rem" : "1.2rem" }}>
//                 {card.title}
//               </h3>
//               <p style={{ fontSize: windowWidth < 768 ? "0.8rem" : "0.9rem", color: "#555" }}>{card.desc}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// Card Animation

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
    const spacing = windowWidth < 768 ? 180 : 300;

    // Cross/diagonal positions (initial static positions)
    const crossPositions = windowWidth < 768
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

    // Initial entrance animation - cards fly in from 4 directions to cross position
    const entranceTl = gsap.timeline();
    
    cardsRef.current.forEach((card, index) => {
      // Start positions from far outside viewport (each from its corner)
      const startPositions = [
        { x: -1000, y: -800, rotation: -180 }, // top-left
        { x: 1000, y: -800, rotation: 180 },   // top-right
        { x: -1000, y: 800, rotation: 180 },   // bottom-left
        { x: 1000, y: 800, rotation: -180 },   // bottom-right
      ];

      // Set initial position
      gsap.set(card, {
        x: startPositions[index].x,
        y: startPositions[index].y,
        rotationZ: startPositions[index].rotation,
        scale: 0.3,
        opacity: 0,
      });

      // Animate to cross position
      entranceTl.to(card, {
        x: crossPositions[index].x,
        y: crossPositions[index].y,
        rotationZ: crossPositions[index].rotate,
        scale: 1,
        opacity: 1,
        duration: 2.5,
        ease: "back.out(1.2)",
      }, index * 0.3); // Slight stagger
    });

    // Create timeline for sequential card spread on scroll
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    // Animate each card sequentially from cross to horizontal row
    cardsRef.current.forEach((card, index) => {
      const x = (index - (cardsData.length - 1) / 2) * spacing;
      
      const startTime = index * 0.25;
      
      scrollTl.to(card, {
        x: x,
        y: 0,
        rotationZ: 0,
        scale: 1,
        ease: "power2.out",
        duration: 0.25,
      }, startTime);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, [windowWidth]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "400vh",
        background: "#fff",
        position: "relative",
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
          overflow: "hidden",
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
          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                position: "absolute",
                width: windowWidth < 768 ? "160px" : "220px",
                height: windowWidth < 768 ? "230px" : "280px",
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "20px",
                transformStyle: "preserve-3d",
                zIndex: index,
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













