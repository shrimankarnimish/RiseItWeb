"use client";
import React, { useRef, useState, useEffect } from "react";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const LatestWork = () => {
  const cardsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Evolve [25]",
      tags: [
        { text: "New", color: "bg-yellow-400 text-black" },
        { text: "Website", color: "bg-gray-600 text-white" },
        { text: "Brand Identity", color: "bg-gray-600 text-white" },
        { text: "Brand Implementation", color: "bg-gray-600 text-white" },
      ],
      background: "bg-gradient-to-br from-gray-900 to-black",
      textColor: "text-white",
      logo: "EVOLVE",
      logoAccent: "text-orange-500",
      hasArrow: true,
    },
    {
      id: 2,
      title: "Festive Green",
      tags: [
        { text: "Website", color: "bg-gray-600 text-white" },
        { text: "Brand Identity", color: "bg-gray-600 text-white" },
      ],
      background: "bg-pink-100",
      textColor: "text-gray-800",
      logo: "Festive Green",
      logoStyle: "font-bold text-red-500",
      decorativeElement: "🌿",
      hasExternalLink: true,
    },
    {
      id: 3,
      title: "Dyslexia South",
      tags: [
        { text: "Website", color: "bg-gray-600 text-white" },
        { text: "Brand Identity", color: "bg-gray-600 text-white" },
        { text: "Brand Implementation", color: "bg-gray-600 text-white" },
      ],
      background: "bg-gradient-to-br from-teal-700 to-teal-900",
      textColor: "text-white",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
      hasExternalLink: true,
    },
    {
      id: 4,
      title: "Creative Studio",
      tags: [
        { text: "New", color: "bg-yellow-400 text-black" },
        { text: "Website", color: "bg-gray-600 text-white" },
        { text: "Brand Identity", color: "bg-gray-600 text-white" },
      ],
      background: "bg-gradient-to-br from-purple-600 to-purple-800",
      textColor: "text-white",
      logo: "CREATIVE",
      logoStyle: "font-bold",
      hasArrow: true,
    },
    {
      id: 5,
      title: "Tech Innovate",
      tags: [
        { text: "Website", color: "bg-gray-600 text-white" },
        { text: "UI/UX", color: "bg-blue-600 text-white" },
        { text: "Brand Implementation", color: "bg-gray-600 text-white" },
      ],
      background: "bg-gradient-to-br from-blue-500 to-cyan-600",
      textColor: "text-white",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=600&fit=crop",
      hasExternalLink: true,
    },
  ];

  // Infinite loop setup
  const extendedProjects = [...projects, ...projects, ...projects];
  const cardWidth = 288 + 24; // w-72 + gap-6

  // Start at middle to allow infinite loop
  useEffect(() => {
    setCurrentIndex(projects.length);
  }, []);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex >= projects.length * 2) setCurrentIndex(projects.length);
      else if (currentIndex <= 0) setCurrentIndex(projects.length);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning]);

  // Drag/Swipe for mobile
  const handlePointerDown = (e) => {
    setDragStartX(e.clientX || e.touches[0].clientX);
  };

  const handlePointerMove = (e) => {
    if (dragStartX === null) return;
    const currentX = e.clientX || e.touches[0].clientX;
    setDragDistance(currentX - dragStartX);
  };

  const handlePointerUp = () => {
    if (dragDistance > 50) handlePrev();
    else if (dragDistance < -50) handleNext();
    setDragStartX(null);
    setDragDistance(0);
  };

  return (
    <div className="relative pt-16 pb-8 px-2" style={{ minHeight: "70vh", backgroundColor: "#F0F2F4" }}>
      <div className="max-w-7xl mx-auto container-wrapper">
        <div className="mb-12">
          <h1 className="uh1 text-4xl font-bold mb-6">Latest Work</h1>
        </div>

        <div
          className="overflow-hidden"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          <div
            ref={cardsRef}
            className="flex gap-6"
            style={{
              transform: `translateX(-${currentIndex * cardWidth - dragDistance}px)`,
              transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
            }}
          >
            {extendedProjects.map((project, index) => (
              <ProjectCard key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-gray-900 text-white shadow-xl hover:bg-gray-800 hover:shadow-2xl transition-all cursor-pointer"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-gray-900 text-white shadow-xl hover:bg-gray-800 hover:shadow-2xl transition-all cursor-pointer"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <div
    className={`relative flex-shrink-0 w-72 h-[400px] md:h-[500px] rounded-2xl overflow-hidden 
      ${project.background} ${project.textColor} group cursor-pointer
      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
  >
    {project.image && (
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${project.image})` }}
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    <div className="relative h-full p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold opacity-80">{project.title}</h3>
        {project.hasArrow && (
          <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        )}
        {project.hasExternalLink && (
          <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      <div className="flex-1 flex items-center justify-center">
        {project.logo && !project.image && (
          <div className="text-center">
            <h2 className={`text-3xl md:text-4xl font-bold ${project.logoStyle || ""}`}>
              {project.logo === "EVOLVE" ? (
                <>
                  EV<span className={project.logoAccent}>O</span>LVE
                  <span className="text-sm align-super">[25]</span>
                </>
              ) : (
                project.logo
              )}
            </h2>
            {project.decorativeElement && <div className="text-2xl mt-2">{project.decorativeElement}</div>}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color} transition-all duration-200 hover:scale-105`}
          >
            {tag.text}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default LatestWork;
