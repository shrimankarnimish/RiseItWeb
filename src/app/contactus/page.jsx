"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../../public/Assets/Images/image.webp";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src={img1}
          alt="Contact Banner"
          fill
          priority
          className="object-cover"
        />
        {/* Adding the overlay only on top of the image, removing unnecessary stretching */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </section>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12 pb-10">
        {/* Left Section */}
        <div>
          <h2 className="titleabout mb-6">Contact</h2>
          <p className="titledesc mb-4">
            Got a project you’d like to talk through? Pop us a message or book
            in a call.
          </p>
          <p className="titledesc mb-4">
            We’re a friendly, down-to-earth bunch who love working with
            like-minded people. No pushy sales talk, just honest conversations
            and expert advice to help your business convert.
          </p>

          {/* Address Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Our Address</h3>
            <p className="text-gray-700">
              Rise IT Digital LLP
              <br />
              123 Your Street, Your City, State - 400001
              <br />
              India
            </p>
            <p className="text-gray-700 mt-2">Phone: +91 12345 67890</p>
            <p className="text-gray-700">Email: info@riseitdigital.com</p>
          </div>
        </div>

        {/* Right Section (Form + Map) */}
        <div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Send message
            </h3>
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

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#444] text-white font-medium shadow-md transition-colors hover:text-[#2E8BFF]"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Google Map Section */}
          <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.317123846844!2d72.82892857586205!3d19.137590950034767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a686f213b7%3A0xf051e786a2e9c70d!2sRise%20IT%20Digital%20LLP!5e0!3m2!1sen!2sin!4v1759388833476!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
