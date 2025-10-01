"use client";
import React, { useEffect, useRef } from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-animate");
          } else {
            entry.target.classList.remove("card-animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Leads & Conversions",
      subtitle:
        "SEO, PPC, CRO, Email Marketing, Affiliate Marketing, Video Marketing Build pipelines that convert, not just traffic that bounces.",
      features: [],
      video:
        "https://video-previews.elements.envatousercontent.com/190e86fc-1801-471e-8936-ab5219c2575a/watermarked_preview/watermarked_preview.mp4",
    },
    {
      id: 2,
      title: "Visibility & Engagement",
      subtitle:
        "Social Media, PR, Content Marketing, Corporate Videos Make your brand impossible to ignore - and impossible not to trust",
      features: [],
      video: "https://assets.mixkit.co/videos/41576/41576-720.mp4",
    },
    {
      id: 3,
      title: "Revenue & Retention",
      subtitle:
        "Remarketing, Marketing Automation, CRM Integration Turn first-time buyers into loyal customers with systems that scale.",
      features: [],
      video: "https://assets.mixkit.co/videos/26108/26108-720.mp4",
    },
    {
      id: 4,
      title: "Decisions & Insights",
      subtitle:
        "Analytics Dashboards, Reporting Systems, Strategy Consulting See exactly what works, cut what doesn't, and invest with clarity.",
      features: ["Logo Design", "Visual Identity", "Guidelines"],
      video: "https://assets.mixkit.co/videos/26108/26108-720.mp4",
    },
    {
      id: 5,
      title: "Web Presence",
      subtitle:
        "Website Design & Development Your digital foundation: fast, functional, and built to convert.",
      features: ["SEO", "Social Media", "Analytics"],
      video: "https://assets.mixkit.co/videos/41576/41576-720.mp4",
    },
    {
      id: 6,
      title: "Brand Collateral",
      subtitle:
        "Catalogues, Brochures, Booklets, Banners, Standees Offline credibility that supports your online growth.",
      features: ["Strategy", "Project management", "Optimised"],
      video:
        "https://video-previews.elements.envatousercontent.com/190e86fc-1801-471e-8936-ab5219c2575a/watermarked_preview/watermarked_preview.mp4",
    },
  ];

  return (
    <div className="services-container">
      {/* Wrapper to match navbar's justify-around layout */}
      <div className="services-wrapper  container-wrapper">
        <section className="services-layout">
          {/* Left Sticky Section */}
          <div className="services-sticky">
            <div className="sticky-inner">
              <h1 className="sticky-title">Services</h1>
              <p className="sticky-description">
                Every service. One purpose. Measurable Growth.
              </p>
            </div>
          </div>

          {/* Right Cards Section */}
          <div className="services-cards">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card"
                ref={(el) => (cardRefs.current[index] = el)}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Video Part */}
                <div className="card-video">
                  <video
                    src={service.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="video-element"
                  ></video>
                </div>

                {/* Content Part */}
                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <h4 className="card-subtitle">{service.subtitle}</h4>

                  {service.features.length > 0 && (
                    <ul className="card-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-badge">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="card-footer">
                    {/* Read More Button */}
                    <div className="bg-[#0D0D0D] backdrop-blur-md px-8 py-5 rounded-full shadow-lg flex items-center gap-2 cursor-pointer group">
                      <span className="text-[18px] text-white font-medium group-hover:text-[#2E8BFF]">
                        Read More
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="card-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesSection;