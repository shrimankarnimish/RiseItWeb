"use client";
import React, { useRef, useState, useEffect } from "react";

const categories = [
  {
    name: "Planning",
    subtitle: "Planning & strategy",
    heading: "Intelligent Solutions\nfor Modern Events",
    cards: [
      {
        title: "Concert",
        desc: "Stage, crowd & schedule coordination.",
        images: [
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        title: "Ticketing",
        desc: "Advanced ticketing & product mgmt.",
        images: [
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        title: "Registration",
        desc: "Custom forms & guest workflows.",
        images: [
          "https://plus.unsplash.com/premium_photo-1726711234495-92966b568e13?auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        title: "Badges",
        desc: "QR/RFID badges for smooth access.",
        images: [
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=500&q=60",
        ],
      },
    ],
  },
  {
    name: "Operation",
    subtitle: "Operations",
    heading: "Operational Efficiency",
    cards: [
      {
        title: "Logistics",
        desc: "Backstage & equipment flows.",
        images: [
          "https://images.unsplash.com/photo-1636647677481-f134fda3f408?auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        title: "Security",
        desc: "Access control & surveillance.",
        images: [
          "https://media.istockphoto.com/id/2193626844/photo/businessman-holding-magnifying-glass-an-investor-studying-real-estate-market-trends-with-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=mI1Jfqi0gX9WSr7v1aPCEFtlKOMDK0gD4LJp37ZR2Cc=",
        ],
      },
      {
        title: "Support",
        desc: "On-site guest assistance.",
        images: [
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        ],
      },
      {
        title: "Vendors",
        desc: "Vendor coordination & services.",
        images: [
          "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        ],
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
        desc: "Mood & experience lighting.",
        images: [
          "https://www.cio.com/wp-content/uploads/2023/05/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-orig-7.jpg?auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        title: "Sound",
        desc: "Pro audio & mixing.",
        images: [
          "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=500&q=60",
        ],
      },
      {
        title: "Visuals",
        desc: "LED & projection mapping.",
        images: [
          "https://plus.unsplash.com/premium_photo-1683288537199-3a102f1a3959?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        ],
      },
      {
        title: "AR/VR",
        desc: "Interactive immersive tech.",
        images: [
          "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=500&q=60",
        ],
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
        desc: "Live KPI & dashboards.",
        images: [
          "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        ],
      },
      {
        title: "Automation",
        desc: "Task workflows & bots.",
        images: [
          "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        ],
      },
      {
        title: "Feedback",
        desc: "Survey & sentiment tracking.",
        images: [
          "https://plus.unsplash.com/premium_photo-1726812103168-6ad609e53f94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        ],
      },
      {
        title: "Reporting",
        desc: "Exportable reports & insights.",
        images: [
          "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        ],
      },
    ],
  },
];

export default function ServicesSection() {
  const sectionRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActive(index);
          }
        });
      },
      { threshold: 0.55 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#F0F2F4] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 flex gap-12 container-wrapper">
        {/* LEFT: headline + category menu */}
        <aside className="w-1/2 sticky top-24 h-[calc(100vh-6rem)] flex flex-col justify-start">
          <div className="mb-6">
            <div className="risep">OUR SERVICES</div>
            <h1 className="uh1 mt-6 whitespace-pre-line">
              {categories[0].heading}
            </h1>
          </div>

          <nav className="mt-10">
            <ul className="flex flex-col gap-6">
              {categories.map((cat, i) => (
                <li key={cat.name}>
                  <button
                    onClick={() =>
                      sectionRefs.current[i]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className={`uh2 text-lg md:text-xl font-medium text-left relative pb-1 inline-block transition-colors duration-300 ${
                      active === i ? "text-[#2E8BFF]" : "text-gray-700"
                    }`}
                  >
                    {cat.name}
                    {/* animated underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#2E8BFF] rounded-full transform origin-left transition-all duration-500 ease-out ${
                        active === i ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                      style={{ width: "100%" }}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* RIGHT: sections */}
        <main className="flex-1 space-y-10 pb-24">
          {categories.map((cat, i) => (
            <section
              key={cat.name}
              ref={(el) => (sectionRefs.current[i] = el)}
              data-index={i}
              className="scroll-mt-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.cards.map((card, idx) => (
                  <article
                    key={card.title + idx}
                    className="relative bg-white border border-gray-200 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    {card.images && (
                      <img
                        src={card.images[0]}
                        alt={card.title}
                        className="w-full h-40 object-cover rounded-xl"
                      />
                    )}
                    <div className="mt-4">
                      <h3 className="text-2xl font-semibold text-black">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-gray-700">{card.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
