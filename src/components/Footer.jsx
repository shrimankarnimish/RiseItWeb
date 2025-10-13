"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [colorIndex, setColorIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const colors = [
    "#01A2E2",
    "#B101E2",
    "#E24101",
    "#31E201",
    "#E201A2",
    "#A2E201",
    "#E20131",
    "#E2B201",
    "#0131E2",
    "#01E2B2",
  ];

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleMouseMove = (e) => {
      const rect = footer.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleEnter = (e) => {
      // Show cursor only if not hovering over form or link
      if (!e.target.closest("a, input, textarea, button, form")) {
        setIsCursorVisible(true);
      }
    };

    const handleLeave = () => setIsCursorVisible(false);

    const handleOver = (e) => {
      // Hide cursor when over form or clickable items
      if (e.target.closest("a, input, textarea, button, form")) {
        setIsCursorVisible(false);
      } else {
        setIsCursorVisible(true);
      }
    };

    const handleClick = () => {
      if (isCursorVisible) {
        window.location.href = "/contactus";
      }
    };

    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500);

    footer.addEventListener("mousemove", handleMouseMove);
    footer.addEventListener("mouseenter", handleEnter);
    footer.addEventListener("mouseleave", handleLeave);
    footer.addEventListener("mouseover", handleOver);
    footer.addEventListener("click", handleClick);

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);
      footer.removeEventListener("mouseenter", handleEnter);
      footer.removeEventListener("mouseleave", handleLeave);
      footer.removeEventListener("mouseover", handleOver);
      footer.removeEventListener("click", handleClick);
      clearInterval(colorInterval);
    };
  }, [isCursorVisible]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Error: " + data.error);
      }
    } catch (err) {
      setStatus("⚠️ Server error, please try again.");
    }
  };

  return (
    <>
      <footer
        ref={footerRef}
        className="relative bg-[#262628] text-white py-12 overflow-hidden"
        style={{ cursor: isCursorVisible ? "none" : "auto" }}
      >
        {/* Animated Button Cursor */}
        {isCursorVisible && (
          <div
            style={{
              position: "absolute",
              left: cursorPos.x,
              top: cursorPos.y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 9999,
              transition: "background-color 0.5s ease",
            }}
          >
            <div
              style={{
                backgroundColor: colors[colorIndex],
                color: "#ffffffff",
                padding: "12px 32px",
                borderRadius: "9999px",
                fontSize: "18px",
                fontWeight: "500",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              Start a conversation
            </div>
          </div>
        )}

        <div className="container-wrapper flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-start">
            <nav className="flex gap-8 mb-6">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#work" className="hover:underline">
                Work
              </a>
              <a href="#services" className="hover:underline">
                Services
              </a>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </nav>

            <div>
              <h2 className="text-4xl md:text-8xl leading-none md:leading-[1.1] mt-10">
                <span className="font-bold">Ready when</span>
                <span className="block font-bold">
                  you are.
                </span>
              </h2>

              <div className="mt-6">
                <p>
                  We don't chase impressions.
                  <br />
                  We build growth systems that scale and brands that last.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 text-black rounded-3xl shadow-md w-full max-w-md p-6 md:p-8">
            <h3 className="text-lg font-medium mb-4">Let's Talk Growth</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-full"
              >
                Send Message
              </button>
            </form>

            {status && <p className="mt-4 text-sm">{status}</p>}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


// https://codepen.io/urvashi-jain/pen/rNgeLze
//https://codepen.io/insane_jarvis_01/pen/Baeabrp
//https://themewagon.com/themes/desher/