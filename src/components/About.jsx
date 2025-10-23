"use client";
import React, { useEffect, useRef, useState } from "react";

const AnimatedTextSection = () => {
  const containerRef = useRef(null);
  const [highlightedWords, setHighlightedWords] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [containerHeight, setContainerHeight] = useState(null);
  const [pixelsPerWord, setPixelsPerWord] = useState(60);

  const text = `We started Rise IT Digital with a simple belief: digital marketing should deliver more than clicks and impressions. It should deliver measurable growth.
Our approach blends data, strategy, and creativity - so every move drives ROI, strengthens brand equity, and compounds long-term results.`;
  const words = text.split(" ");
  const totalWords = words.length;

  // Adjust scroll speed based on screen size
  useEffect(() => {
    const updateScrollSpeed = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width < 640) {
        setPixelsPerWord(40); // faster scroll on mobile
      } else if (width < 1024) {
        setPixelsPerWord(50); // medium on tablets
      } else {
        setPixelsPerWord(60); // slower on desktop
      }
    };

    updateScrollSpeed();
    window.addEventListener("resize", updateScrollSpeed);
    return () => window.removeEventListener("resize", updateScrollSpeed);
  }, []);

  // compute dynamic container height so the sticky section stays until all words are revealed
  useEffect(() => {
    const updateHeight = () => {
      if (typeof window === "undefined") return;
      const vh = window.innerHeight;
      const desiredScroll = Math.max(1, totalWords * pixelsPerWord); // total scroll distance needed
      setContainerHeight(vh + desiredScroll);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [totalWords, pixelsPerWord]);

  // scroll -> progress -> highlightedWords
  useEffect(() => {
    if (!containerRef.current) return;
    let rafId = null;

    const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const containerTop = container.offsetTop;
        const containerH = container.offsetHeight;
        const winH = window.innerHeight;
        const scrollY = window.scrollY || window.pageYOffset;

        // scroll relative to container start
        const scrollRel = scrollY - containerTop;
        const maxScroll = Math.max(1, containerH - winH); // avoid division by zero

        const progress = clamp(scrollRel / maxScroll, 0, 1);
        const newHighlighted = Math.floor(progress * totalWords);

        // update highlight count (set directly — CSS handles smoothness)
        setHighlightedWords(newHighlighted);

        setIsAnimationComplete(newHighlighted >= totalWords);
      });
    };

    // initial call in case user is already scrolled
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [containerHeight, totalWords]);

  // fallback container height while SSR / before measurement
  const containerStyle = {
    height: containerHeight ? `${containerHeight}px` : "110vh",
    backgroundColor: "#ffffffff", 
    // changed from F0F2F4 to FFFFF
  };

  return (
    <div ref={containerRef} className="relative" style={containerStyle}>
      {/* sticky section — remains pinned while user scrolls the dynamic container */}
      <section className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Animated text */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed sm:leading-snug mb-8 sm:mb-10 md:mb-12 font-[Montserrat]">
            {words.map((word, index) => {
              const isOn = index < highlightedWords;
              // small stagger (recomputed each render) for cascade look
              const delay = Math.max(0, index - highlightedWords) * 25; // ms
              return (
                <span
                  key={index}
                  className="inline-block mr-2 sm:mr-2.5 md:mr-3 transition-colors duration-500 ease-out"
                  style={{
                    color: isOn ? "#2E8BFF" : "#0D0D0D", // default dark, turns blue on scroll
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Button with video icon */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              highlightedWords >= totalWords
                ? "opacity-100 translate-y-0 mt-12 sm:mt-16 md:mt-20 lg:mt-32" // responsive spacing
                : "opacity-0 translate-y-8 sm:translate-y-12 md:translate-y-16" // start offscreen
            }`}
          >
            <button className="bg-[#0D0D0D] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 shadow-lg flex items-center gap-2 sm:gap-2.5 md:gap-3 hover:text-[#2E8BFF]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-80 sm:w-5 sm:h-5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch our</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-green-400 border-2 border-[#0D0D0D] shadow-sm" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-blue-400 border-2 border-[#0D0D0D] shadow-sm" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-orange-400 border-2 border-[#0D0D0D] shadow-sm" />
                </div>
                <span>showreel</span>
              </div>
            </button>
          </div>
        </div>

        {/* optional visual: you can remove this if you don't want any indicator */}
        {!isAnimationComplete && (
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-24 sm:w-32 h-1 bg-gray-400 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0D0D0D] transition-all duration-300 ease-out"
                style={{ width: `${(highlightedWords / totalWords) * 100}%` }}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AnimatedTextSection;