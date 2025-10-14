"use client"; 
import React, { useRef, useState, useEffect } from "react";
import { 
  FaMusic, FaTicketAlt, FaRegIdBadge, FaUsers,
  FaTruck, FaShieldAlt, FaHeadset, FaStore,
  FaLightbulb, FaVolumeUp, FaTv, FaVrCardboard,
  FaChartLine, FaRobot, FaCommentDots, FaFileAlt
} from "react-icons/fa";

const categories = [
  {
    name: "Planning",
    subtitle: "Planning & strategy",
    heading: "Intelligent Solutions\nfor Modern Events",
    cards: [
      { title: "Concert", desc: "Stage, crowd & schedule coordination.", images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=60"], icon: <FaMusic /> },
      { title: "Ticketing", desc: "Advanced ticketing & product mgmt.", images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60"], icon: <FaTicketAlt /> },
      { title: "Registration", desc: "Custom forms & guest workflows.", images: ["https://plus.unsplash.com/premium_photo-1726711234495-92966b568e13?auto=format&fit=crop&w=500&q=60"], icon: <FaRegIdBadge /> },
      { title: "Badges", desc: "QR/RFID badges for smooth access.", images: ["https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=500&q=60"], icon: <FaUsers /> },
    ],
  },
  {
    name: "Operation",
    subtitle: "Operations",
    heading: "Operational Efficiency",
    cards: [
      { title: "Logistics", desc: "Backstage & equipment flows.", images: ["https://images.unsplash.com/photo-1636647677481-f134fda3f408?auto=format&fit=crop&w=500&q=60"], icon: <FaTruck /> },
      { title: "Security", desc: "Access control & surveillance.", images: ["https://media.istockphoto.com/id/2193626844/photo/businessman-holding-magnifying-glass-an-investor-studying-real-estate-market-trends-with-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=mI1Jfqi0gX9WSr7v1aPCEFtlKOMDK0gD4LJp37ZR2Cc="], icon: <FaShieldAlt /> },
      { title: "Support", desc: "On-site guest assistance.", images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500&q=60"], icon: <FaHeadset /> },
      { title: "Vendors", desc: "Vendor coordination & services.", images: ["https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=500&q=60"], icon: <FaStore /> },
    ],
  },
  {
    name: "Experience",
    subtitle: "Experience",
    heading: "Immersive Attendee Experience",
    cards: [
      { title: "Lighting", desc: "Mood & experience lighting.", images: ["https://www.cio.com/wp-content/uploads/2023/05/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-orig-7.jpg?auto=format&fit=crop&w=500&q=60"], icon: <FaLightbulb /> },
      { title: "Sound", desc: "Pro audio & mixing.", images: ["https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=500&q=60"], icon: <FaVolumeUp /> },
      { title: "Visuals", desc: "LED & projection mapping.", images: ["https://plus.unsplash.com/premium_photo-1683288537199-3a102f1a3959?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"], icon: <FaTv /> },
      { title: "AR/VR", desc: "Interactive immersive tech.", images: ["https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=500&q=60"], icon: <FaVrCardboard /> },
    ],
  },
  {
    name: "Optimization",
    subtitle: "Optimization",
    heading: "Data Driven Optimization",
    cards: [
      { title: "Analytics", desc: "Live KPI & dashboards.", images: ["https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"], icon: <FaChartLine /> },
      { title: "Automation", desc: "Task workflows & bots.", images: ["https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"], icon: <FaRobot /> },
      { title: "Feedback", desc: "Survey & sentiment tracking.", images: ["https://plus.unsplash.com/premium_photo-1726812103168-6ad609e53f94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"], icon: <FaCommentDots /> },
      { title: "Reporting", desc: "Exportable reports & insights.", images: ["https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"], icon: <FaFileAlt /> },
    ],
  },
];

export default function ServicesSection() {
  const sectionRefs = useRef([]);
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);
  const [visibleImages, setVisibleImages] = useState({});

  // Highlight active section in menu
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

  // Show card image on scroll
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.dataset.cardId;
          if (entry.isIntersecting) {
            setVisibleImages((prev) => ({ ...prev, [cardId]: true }));
            setTimeout(() => setVisibleImages((prev) => ({ ...prev, [cardId]: false })), 2000);
          }
        });
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => el && cardObserver.observe(el));
    return () => cardObserver.disconnect();
  }, []);

  // Automatic image slideshow
  useEffect(() => {
    const totalCards = cardRefs.current.length;
    let current = 0;

    const interval = setInterval(() => {
      const cardId = cardRefs.current[current]?.dataset.cardId;
      if (cardId) {
        setVisibleImages((prev) => ({ ...prev, [cardId]: true }));
        setTimeout(() => setVisibleImages((prev) => ({ ...prev, [cardId]: false })), 2000);
      }
      current = (current + 1) % totalCards;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#F0F2F4] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col lg:flex-row gap-12 container-wrapper">
        {/* LEFT */}
        <aside className="w-full lg:w-1/2 sticky lg:top-24 h-auto lg:h-[calc(100vh-6rem)] flex flex-col justify-start mb-12 lg:mb-0">
          <div className="mb-6">
            <div className="risep text-black">OUR SERVICES</div>
            <h1 className="uh1 mt-6 whitespace-pre-line text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug">{categories[0].heading}</h1>
          </div>
          <nav className="mt-10">
            <ul className="flex flex-col gap-4 sm:gap-6">
              {categories.map((cat, i) => (
                <li key={cat.name}>
                  <button
                    onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className={`uh2 text-lg md:text-xl font-medium text-left relative pb-1 inline-block transition-colors duration-300 ${active === i ? "text-[#2E8BFF]" : "text-gray-700"}`}
                  >
                    {cat.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#2E8BFF] rounded-full transform origin-left transition-all duration-500 ease-out ${active === i ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
                      style={{ width: "100%" }}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* RIGHT */}
        <main className="flex-1 space-y-10 pb-24">
          {categories.map((cat, i) => (
            <section key={cat.name} ref={(el) => (sectionRefs.current[i] = el)} data-index={i} className="scroll-mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cat.cards.map((card, idx) => {
                  const cardId = `${i}-${idx}`;
                  return (
                    <article
                      key={cardId}
                      data-card-id={cardId}
                      ref={(el) => cardRefs.current.push(el)}
                      className="relative group bg-white border border-gray-200 rounded-3xl p-6 min-h-[220px] flex flex-col justify-center items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                    >
                      {/* Icon Top Left */}
                      <div className="absolute top-4 left-4 text-2xl text-[#2E8BFF]">{card.icon}</div>

                      {/* Card Text */}
                      <div className={`z-10 transition-opacity duration-400 ${visibleImages[cardId] ? "opacity-0" : "opacity-100"} group-hover:opacity-0`}>
                        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-black text-left ">{card.title}</h3>
                        <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base md:text-base lg:text-base">{card.desc}</p>
                      </div>

                      {/* Background Image */}
                      <div className={`absolute inset-0 transition-opacity duration-400 ${visibleImages[cardId] ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}>
                        <img src={card.images?.[0]} alt={card.title} className="w-full h-full object-cover rounded-2xl" />
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
