"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact</h2>
          <p className="text-lg text-gray-700 mb-4">
            Got a project you’d like to talk through? Pop us a message or book in a call.
          </p>
          <p className="text-lg text-gray-700">
            We’re a friendly, down-to-earth bunch who love working with like-minded people. 
            No pushy sales talk, just honest conversations and expert advice to help your business convert.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Send message</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2E8BFF]"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2E8BFF]"
            />
            <textarea
              placeholder="Add your message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2E8BFF]"
            ></textarea>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" className="w-4 h-4" />
              <label htmlFor="newsletter" className="text-gray-600 text-sm">
                Subscribe to newsletter
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#444] text-white font-medium shadow-md transition-colors hover:text-[#2E8BFF]"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
