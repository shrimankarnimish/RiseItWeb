"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  FaMusic,
  FaTicketAlt,
  FaRegIdBadge,
  FaUsers,
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaStore,
  FaLightbulb,
  FaVolumeUp,
  FaTv,
  FaVrCardboard,
  FaChartLine,
  FaRobot,
  FaCommentDots,
  FaFileAlt,
} from "react-icons/fa";

const categories = [
  {
    name: "Planning",
    subtitle: "Planning & strategy",
    heading: "Intelligent Solutions\nfor Modern Events",
    cards: [
      {
        title: "Leads & Conversation",
        desc: "SEO, PPC, CRO, Email Marketing, Affiliate Marketing, Video Marketing Build pipelines that convert, not just traffic that bounces.",
        images: ["../../Assets/Images/events.webp"],
        icon: <FaMusic />,
      },
      {
        title: "Visibility & Engagement",
        desc: "Social Media, PR, Content Marketing, Corporate Videos. Make your brand impossible to ignore — and impossible not to trust.",
        images: [
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaTicketAlt />,
      },
      {
        title: "Revenue & Retention",
        desc: "Remarketing, Marketing Automation, CRM Integration. Turn first-time buyers into loyal customers with systems that scale.",
        images: [
          "https://plus.unsplash.com/premium_photo-1726711234495-92966b568e13?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaRegIdBadge />,
      },
      {
        title: "Decisions & Insights",
        desc: "Analytics Dashboards, Reporting Systems, Strategy Consulting. See exactly what works, cut what doesn’t, and invest with clarity.",
        images: [
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaUsers />,
      },
    ],
  },
  {
    name: "Operation",
    subtitle: "Operations",
    heading: "Operational Efficiency",
    cards: [
      {
        title: "Web Presence",
        desc: "Website Design & Development. Your digital foundation: fast, functional, and built to convert.",
        images: [
          "https://images.unsplash.com/photo-1636647677481-f134fda3f408?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaTruck />,
      },
      {
        title: "Brand Collateral",
        desc: "Catalogues, Brochures, Booklets, Banners, Standees. Offline credibility that supports your online growth.",
        images: [
          "https://media.istockphoto.com/id/2193626844/photo/businessman-holding-magnifying-glass-an-investor-studying-real-estate-market-trends-with-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=mI1Jfqi0gX9WSr7v1aPCEFtlKOMDK0gD4LJp37ZR2Cc=",
        ],
        icon: <FaShieldAlt />,
      },
      {
        title: "Support",
        desc: "On-site guest assistance. Backstage & equipment flows.",
        images: [
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaHeadset />,
      },
      {
        title: "Vendors",
        desc: "Vendor coordination & services. Custom forms & guest management.",
        images: [
          "https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaStore />,
      },
    ],
  },
  {
    name: "Experience",
    subtitle: "Experience",
    heading: "Immersive Attendee Experience",
    cards: [
      {
        title: "Lighting",
        desc: "Mood & experience lighting. Custom forms & guest workflows.",
        images: [
          "https://www.cio.com/wp-content/uploads/2023/05/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-orig-7.jpg?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaLightbulb />,
      },
      {
        title: "Sound",
        desc: "Pro audio & mixing. Custom forms & guest workflows.",
        images: [
          "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaVolumeUp />,
      },
      {
        title: "Visuals",
        desc: "LED & projection mapping. Custom forms & guest workflows.",
        images: [
          "https://plus.unsplash.com/premium_photo-1683288537199-3a102f1a3959?auto=format&fit=crop&q=60&w=500",
        ],
        icon: <FaTv />,
      },
      {
        title: "AR/VR",
        desc: "Interactive immersive tech. Custom forms & guest workflows.",
        images: [
          "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=500&q=60",
        ],
        icon: <FaVrCardboard />,
      },
    ],
  },
  {
    name: "Optimization",
    subtitle: "Optimization",
    heading: "Data Driven Optimization",
    cards: [
      {
        title: "Analytics",
        desc: "Live KPI & dashboards. Custom forms & guest workflows.",
        images: [
          "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?auto=format&fit=crop&q=60&w=500",
        ],
        icon: <FaChartLine />,
      },
      {
        title: "Automation",
        desc: "Task workflows & bots. Custom forms & guest workflows.",
        images: [
          "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?auto=format&fit=crop&q=60&w=500",
        ],
        icon: <FaRobot />,
      },
      {
        title: "Feedback",
        desc: "Survey & sentiment tracking. Custom forms & guest workflows.",
        images: [
          "https://plus.unsplash.com/premium_photo-1726812103168-6ad609e53f94?auto=format&fit=crop&q=60&w=500",
        ],
        icon: <FaCommentDots />,
      },
      {
        title: "Reporting",
        desc: "Exportable reports & insights. Custom forms & guest workflows.",
        images: [
          "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&q=60&w=500",
        ],
        icon: <FaFileAlt />,
      },
    ],
  },
];

export default function ServicesSection() {
  const sectionRefs = useRef([]);
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) setActive(index);
        });
      },
      { threshold: 0.55 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-12 container-wrapper">
        {/* LEFT SIDE */}
          <aside className="w-full lg:w-1/2 sticky lg:top-24 h-auto lg:h-[calc(100vh-6rem)] flex flex-col justify-start mb-12 lg:mb-0">
      <div className="mb-6">
        <div className="risep text-black">OUR SERVICES</div>
        <h1 className="uh1 mt-6 whitespace-pre-line text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug">
          {categories[0].heading}
        </h1>
      </div>
      <nav className="mt-10 relative pl-4 sm:pl-8">
        <div className="absolute left-0 top-0 w-[5px] h-full bg-gray-700"></div>
        <div
          className="absolute left-0 w-[5px] bg-[#2E8BFF] transition-all duration-500 ease-out"
          style={{
            top: `calc(${active} * (100% / ${categories.length}))`,
            height: `calc(100% / ${categories.length})`,
          }}
        ></div>

        <ul className="flex flex-col gap-4">
          {categories.map((cat, i) => (
            <li key={cat.name} className="relative">
              <button
                onClick={() =>
                  sectionRefs.current[i]?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className={`uh2 text-left inline-block transition-all duration-300 ${active === i
                  ? "text-[#2E8BFF] font-bold"
                  : "text-gray-600 font-medium"
                  }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>

        {/* RIGHT SIDE */}
       <main className="flex-1 space-y-10 pb-24">
      {categories.map((cat, i) => (
        <section
          key={cat.name}
          ref={(el) => (sectionRefs.current[i] = el)}
          data-index={i}
          className="scroll-mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {cat.cards.map((card, idx) => {
              const cardId = `${i}-${idx}`;
              return (
                <article
                  key={cardId}
                  ref={(el) => cardRefs.current.push(el)}
                  className="relative group bg-white border border-gray-200 rounded-xl p-10 h-80 flex flex-col justify-between shadow-sm overflow-hidden
           transform transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* ICON */}
                  <div className="flex items-center gap-3 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-out mb-4">
                    <div
                      className="text-xl text-[#2E8BFF]"
                      style={{
                        padding: ".75rem",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "10px",
                      }}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="z-10 flex flex-col flex-1 justify-between transition-opacity duration-500 ease-out group-hover:opacity-0">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 leading-[1.2]">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-3">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* HOVER IMAGE OVERLAY */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                    <img
                      src={card.images?.[0]}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
      </div>
    </div>
  );
}
