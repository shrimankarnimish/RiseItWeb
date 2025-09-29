import React, { useEffect, useRef, useState } from 'react';

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sample logos data - you can replace with real logos
  const logos = [
    { id: 1, name: "Google", color: "bg-red-500" },
    { id: 2, name: "Microsoft", color: "bg-blue-500" },
    { id: 3, name: "Apple", color: "bg-gray-800" },
    { id: 4, name: "Amazon", color: "bg-orange-500" },
    { id: 5, name: "Meta", color: "bg-blue-600" },
    { id: 6, name: "Netflix", color: "bg-red-600" },
    { id: 7, name: "Tesla", color: "bg-red-500" },
    { id: 8, name: "Adobe", color: "bg-red-500" },
    { id: 9, name: "Spotify", color: "bg-green-500" },
    { id: 10, name: "Airbnb", color: "bg-pink-500" },
    { id: 11, name: "Uber", color: "bg-black" },
    { id: 12, name: "Twitter", color: "bg-blue-400" },
    { id: 13, name: "LinkedIn", color: "bg-blue-700" },
    { id: 14, name: "PayPal", color: "bg-blue-600" },
    { id: 15, name: "Slack", color: "bg-purple-600" }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !isInView) return;

    let animationId;
    let startTime = Date.now();
    const scrollSpeed = 0.1; // pixels per millisecond

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      // Auto scroll to the right
      const autoScrollDistance = elapsed * scrollSpeed;
      
      // Add manual scroll influence based on user scroll progress
      const manualScrollInfluence = scrollProgress * 2; // Multiplier for stronger effect
      
      const totalScroll = (autoScrollDistance + manualScrollInfluence) % (slider.scrollWidth / 3);
      slider.scrollLeft = totalScroll;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isInView, scrollProgress]);

  // Handle scroll-based animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(rect.height, windowHeight - rect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const progress = visibleHeight / rect.height;
      
      // Convert to scroll progress (0 to 1000 for smooth animation)
      setScrollProgress(progress * 1000);
    };

    if (isInView) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial calculation
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView]);

  return (
    <div className="bg-gray-50 py-16">
      {/* Content above */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 text-lg">Scroll down to see the logo slider in action</p>
        </div>
      </div>

      {/* Logo Slider Section */}
      <section ref={containerRef} className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 text-lg">
              Companies worldwide trust us with their digital transformation
            </p>
          </div>

          {/* Logo Slider Container */}
          <div className="relative">
            <div 
              ref={sliderRef}
              className="flex space-x-8 overflow-x-hidden"
              style={{ 
                width: '100%',
                scrollBehavior: 'auto' // Smooth auto-scroll
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center"
                >
                  {/* Logo placeholder - replace with actual logos */}
                  <div className={`w-24 h-16 ${logo.color} rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <span className="text-white font-bold text-sm">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>

          {/* Progress indicator */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ 
                  width: `${Math.min(100, (scrollProgress / 10))}%` 
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content below */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Them?</h2>
          <p className="text-gray-600">Let s discuss how we can help transform your business</p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* More content to test scrolling */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Keep Scrolling</h2>
          <p className="text-gray-600">Notice how the logo slider responds to your scroll</p>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;