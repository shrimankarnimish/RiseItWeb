"use client";
import React, { useState, useEffect, useRef } from "react";

const FallingPillsSection = () => {
  const containerRef = useRef(null);
  const [pills, setPills] = useState([]);
  const [draggedPill, setDraggedPill] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0, time: 0 });
  const animationRef = useRef();
  const [visible, setVisible] = useState(false);

  const pillData = [
    { id: 1, text: "Healthcare & Hospitals", color: "bg-pink-500 text-white" },
    { id: 2, text: "SaaS Developers", color: "bg-yellow-400 text-black" },
    { id: 3, text: "Business Consulting", color: "bg-cyan-400 text-black" },
    { id: 4, text: "Recruiting Agencies", color: "bg-orange-500 text-white" },
    { id: 5, text: "Water Park Equipment", color: "bg-lime-500 text-black" },
    { id: 6, text: "Apparel Retailers", color: "bg-yellow-300 text-black" },
    { id: 7, text: "Oral Healthcare", color: "bg-red-500 text-white" },
    { id: 8, text: "Plastics & Rubber", color: "bg-green-400 text-black" },
    { id: 9, text: "Electricals", color: "bg-indigo-400 text-white" },
    { id: 10, text: "Food & Beverage", color: "bg-teal-500 text-white" },
    { id: 11, text: "Luxury Retail", color: "bg-rose-400 text-black" },
    { id: 12, text: "Performing Arts", color: "bg-cyan-300 text-black" },
    { id: 13, text: "Education", color: "bg-purple-500 text-white" },
    { id: 14, text: "Fitness", color: "bg-fuchsia-400 text-white" },
    { id: 15, text: "Banking", color: "bg-sky-500 text-white" },
    { id: 16, text: "Mining & Metals", color: "bg-emerald-400 text-black" },
    { id: 17, text: "Natural Stone", color: "bg-amber-500 text-black" },
    { id: 18, text: "Interiors & Furniture", color: "bg-blue-600 text-white" },
    { id: 19, text: "Exhibitions & Trade Shows", color: "bg-slate-400 text-black" },
    { id: 20, text: "Logistics", color: "bg-violet-500 text-white" },
  ];

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Initialize pills with word-based priority
  useEffect(() => {
    if (!visible || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    // Sort pills by word count descending
    const sortedPills = [...pillData].sort(
      (a, b) => b.text.split(" ").length - a.text.split(" ").length
    );

    const initialPills = sortedPills.map((pill, index) => ({
      ...pill,
      x: Math.random() * (containerRect.width - 140),
      y: -100 - index * 100, // staggered start
      vx: 0,
      vy: 0,
      isDragging: false,
      isSettled: false,
      width: pill.text.length * 14 + 40,
      height: 60,
    }));

    setPills(initialPills);
  }, [visible]);

  const isOverlappingX = (pill1, pill2) =>
    pill1.x < pill2.x + pill2.width && pill1.x + pill1.width > pill2.x;

  // Physics animation
  useEffect(() => {
    if (!visible) return;

    const animate = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const gravity = 0.35;
      const friction = 0.98;
      const bounce = 0.1;
      const restThreshold = 0.8;

      setPills((prev) =>
        prev.map((pill) => {
          if (pill.isDragging) return pill;

          let newX = pill.x + pill.vx;
          let newY = pill.y + pill.vy;
          let newVx = pill.vx * friction;
          let newVy = pill.isSettled ? 0 : pill.vy + gravity;

          // Keep inside horizontal and vertical bounds
          newX = Math.max(0, Math.min(newX, containerRect.width - pill.width));
          newY = Math.max(0, Math.min(newY, containerRect.height - pill.height));

          const overlappingPillsBelow = prev.filter(
            (other) =>
              other.id !== pill.id &&
              !other.isDragging &&
              isOverlappingX(pill, other) &&
              other.y >= pill.y
          );

          let stackY = containerRect.height - pill.height;
          overlappingPillsBelow.forEach((other) => {
            const candidateY = other.y - pill.height;
            if (candidateY < stackY) stackY = candidateY;
          });

          if (pill.isSettled) {
            const gap = stackY - pill.y;
            if (gap > 2) return { ...pill, isSettled: false, vy: gravity };
            return pill;
          }

          if (!pill.isSettled) newVy = pill.vy + gravity;
          if (newY >= stackY) newVy = -newVy * bounce;
          if (
            Math.abs(newVy) < restThreshold &&
            Math.abs(newVx) < restThreshold &&
            newY >= stackY - 1
          ) {
            return { ...pill, x: newX, y: stackY, vx: 0, vy: 0, isSettled: true };
          }

          return { ...pill, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [visible]);

  // Drag handlers with boundary
  const handleMouseDown = (e, pill) => {
    e.preventDefault();
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - pill.x;
    const offsetY = e.clientY - rect.top - pill.y;
    setDraggedPill(pill.id);
    setDragOffset({ x: offsetX, y: offsetY });
    setLastMousePos({ x: e.clientX, y: e.clientY, time: Date.now() });

    setPills((prev) =>
      prev.map((p) =>
        p.id === pill.id
          ? { ...p, isDragging: true, vx: 0, vy: 0, isSettled: false }
          : p
      )
    );
  };

  const handleMouseMove = (e) => {
    if (!draggedPill || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pillObj = pills.find((p) => p.id === draggedPill);

    let x = e.clientX - rect.left - dragOffset.x;
    let y = e.clientY - rect.top - dragOffset.y;

    x = Math.max(0, Math.min(x, rect.width - pillObj.width));
    y = Math.max(0, Math.min(y, rect.height - pillObj.height));

    setPills((prev) =>
      prev.map((p) => (p.id === draggedPill ? { ...p, x, y } : p))
    );

    setLastMousePos({ x: e.clientX, y: e.clientY, time: Date.now() });
  };

  const handleMouseUp = (e) => {
    if (draggedPill) {
      const now = Date.now();
      const dt = now - lastMousePos.time || 1;
      const vx = ((e.clientX - lastMousePos.x) / dt) * 10;
      const vy = ((e.clientY - lastMousePos.y) / dt) * 10;

      setPills((prev) =>
        prev.map((p) =>
          p.id === draggedPill
            ? { ...p, isDragging: false, vx, vy, isSettled: false }
            : p
        )
      );
      setDraggedPill(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-start p-4 bg-gray-100">
      <div
        ref={containerRef}
        className="relative w-full max-w-10xl mx-auto h-[600px] rounded-3xl shadow-2xl overflow-hidden border border-gray-300"
        style={{ backgroundColor: "#BCC5CF" }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 text-center px-4 pointer-events-none">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>

          <p className="risep mx-auto mb-4">
            Different industries. Different growth levers.
          </p>
          <p className="risep mx-auto mb-8">
            Every sector scales differently. We don't force-fit playbooks - we
            adapt strategy to your industry.
          </p>

          <h4 className="text-3xl font-semibold text-gray-900 mx-auto mb-8">
            We've built systems for
          </h4>

          <button className="btn-primary cursor-pointer pointer-events-auto">
            Let's work together
          </button>
        </div>

        {/* Falling Pills */}
        {pills.map((pill) => (
          <div
            key={pill.id}
            className={`absolute px-5 py-3 rounded-full text-sm font-medium cursor-grab active:cursor-grabbing select-none transition-transform duration-200
              ${pill.color}
              ${pill.isDragging ? "scale-110 z-10" : "hover:scale-[1.05]"}`}
            style={{
              left: `${pill.x}px`,
              top: `${pill.y}px`,
              width: `${pill.width}px`,
              height: `${pill.height}px`,
              zIndex: pill.isDragging ? 50 : 1,
              boxShadow: `
                inset -2px -4px 6px rgba(0,0,0,0.25),
                inset 2px 2px 4px rgba(255,255,255,0.3),
                0 6px 10px rgba(0,0,0,0.25)
              `,
              backgroundImage: `linear-gradient(145deg, rgba(255,255,255,0.25), rgba(0,0,0,0.15))`,
              backgroundBlendMode: "overlay",
            }}
            onMouseDown={(e) => handleMouseDown(e, pill)}
          >
            <div className="flex items-center justify-center h-full text-[18px]">
              {pill.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FallingPillsSection;
