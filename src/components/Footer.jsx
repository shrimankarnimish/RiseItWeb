"use client";
import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Server error, please try again.");
    }
  };

  return (
    <footer className="bg-[#262628] text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Shall we work <span className="italic font-normal">together?</span>
          </h2>
          <div className="mt-6">
            <p className="text-sm">© 2025 Good Looking Design</p>
            <p className="text-xs opacity-70">All rights reserved</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 text-black rounded-3xl shadow-md w-full max-w-md p-6 md:p-8">
          <h3 className="text-lg font-medium mb-4">Get in touch with us</h3>

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
  );
};

export default Footer;
